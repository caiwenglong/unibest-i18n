<script setup lang="ts">
<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import type {
  CKFormConfig,
  CKFormInstance,
  CKFormItem,
  CKOption,
} from '../../types'

// 导入子组件（通过 EasyComp 自动注册）
// CK-Input, CK-Textarea, CK-SelectPicker, CK-Button 会自动注册

// 组件 Props
interface Props {
  modelValue: Record<string, any>
  formItems: CKFormItem[]
  config?: Partial<CKFormConfig>
  showSubmitButton?: boolean
  submitButtonText?: string
  submitLoading?: boolean
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  config: () => ({}),
  showSubmitButton: true,
  submitButtonText: '提交',
  submitLoading: false,
})

// 组件 Emits
type Emits = {
  'update:modelValue': [value: Record<string, any>]
  'submit-form': [data: Record<string, any>]
  'field-change': [field: string, value: any, data: Record<string, any>]
  'validation-error': [field: string, error: string]
  'validate': [field: string, isValid: boolean, message?: string]
}

const emit = defineEmits<Emits>()

// 内部状态
const formRef = ref()
const formData = reactive<Record<string, any>>({})
const fieldValidationStatus = reactive<Record<string, { isValid: boolean, message?: string }>>({})

// 计算属性
const config = computed<CKFormConfig>(() => ({
  labelWidth: '80px',
  labelPosition: 'left',
  disabled: false,
  validateOnRuleChange: true,
  hideRequiredAsterisk: false,
  ...props.config,
}))

const formRules = computed(() => {
  const rules: Record<string, any[]> = {}

  props.formItems.forEach((item) => {
    if (item.rules && item.rules.length > 0) {
      rules[item.field] = item.rules.map(rule => ({
        required: rule.required,
        pattern: rule.pattern,
        message: rule.message,
        validator: rule.validator,
        trigger: rule.trigger || 'blur',
      }))
    }
    else if (item.required) {
      rules[item.field] = [{
        required: true,
        message: `请输入${item.label}`,
        trigger: 'blur',
      }]
    }
  })

  return rules
})

// 初始化表单数据
function initFormData() {
  // 清空现有数据
  Object.keys(formData).forEach((key) => {
    delete formData[key]
  })

  // 设置新数据
  Object.keys(props.modelValue).forEach((key) => {
    formData[key] = props.modelValue[key]
  })

  // 为没有初始值的字段设置默认值
  props.formItems.forEach((item) => {
    if (!(item.field in formData)) {
      formData[item.field] = getDefaultValue(item)
    }
  })
}

// 获取字段默认值
function getDefaultValue(item: CKFormItem): any {
  if (item.type === 'select' || item.type === 'selectPicker') {
    return item.props?.multiple ? [] : ''
  }
  return ''
}

// 更新字段值
function updateFieldValue(field: string, value: any) {
  formData[field] = value
  emit('update:modelValue', { ...formData })
  emit('field-change', field, value, { ...formData })
}

// 处理字段变化
function handleFieldChange(field: string, value: any, option?: CKOption | CKOption[]) {
  updateFieldValue(field, value)
}

// 处理字段验证
function handleFieldValidation(field: string, isValid: boolean, message?: string) {
  fieldValidationStatus[field] = { isValid, message }
  emit('validate', field, isValid, message)

  if (!isValid && message) {
    emit('validation-error', field, message)
  }
}

// 表单验证
async function validate(): Promise<boolean> {
  try {
    if (formRef.value && formRef.value.validate) {
      await formRef.value.validate()
      return true
    }
    return false
  }
  catch (error) {
    console.warn('表单验证失败:', error)
    return false
  }
}

// 验证指定字段
async function validateField(field: string): Promise<boolean> {
  try {
    if (formRef.value && formRef.value.validateField) {
      await formRef.value.validateField(field)
      return true
    }
    return false
  }
  catch (error) {
    console.warn(`字段 ${field} 验证失败:`, error)
    return false
  }
}

// 清除验证
function clearValidation(field?: string) {
  if (formRef.value && formRef.value.clearValidation) {
    formRef.value.clearValidation(field)
  }

  if (field) {
    delete fieldValidationStatus[field]
  }
  else {
    Object.keys(fieldValidationStatus).forEach((key) => {
      delete fieldValidationStatus[key]
    })
  }
}

// 重置表单
function resetFields() {
  if (formRef.value && formRef.value.resetFields) {
    formRef.value.resetFields()
  }

  initFormData()
  clearValidation()
}

// 获取表单数据
function getFormData(): Record<string, any> {
  return { ...formData }
}

// 设置表单数据
function setFormData(data: Record<string, any>) {
  Object.keys(data).forEach((key) => {
    if (key in formData) {
      formData[key] = data[key]
    }
  })
  emit('update:modelValue', { ...formData })
}

// 处理表单验证事件
function handleValidate(prop: string, isValid: boolean, message: string) {
  emit('validate', prop, isValid, message)
}

// 处理表单提交
async function handleSubmit() {
  const isValid = await validate()
  if (isValid) {
    emit('submit-form', getFormData())
  }
}

// 监听外部数据变化
watch(
  () => props.modelValue,
  () => {
    initFormData()
  },
  { immediate: true, deep: true },
)

watch(
  formData,
  (newData) => {
    emit('update:modelValue', { ...newData })
  },
  { deep: true },
)

// 初始化
nextTick(() => {
  initFormData()
})

// 暴露方法
const instance: CKFormInstance = {
  validate,
  validateField,
  clearValidation,
  resetFields,
  getFormData,
  setFormData,
}

defineExpose(instance)
</script>

<template>
  <wd-form
    ref="formRef"
    :model="formData"
    :rules="formRules"
    :label-width="config.labelWidth"
    :label-position="config.labelPosition"
    :disabled="config.disabled"
    :validate-on-rule-change="config.validateOnRuleChange"
    :hide-required-asterisk="config.hideRequiredAsterisk"
    v-bind="$attrs"
    @validate="handleValidate"
  >
    <template v-for="(item, index) in formItems" :key="item.field">
      <wd-form-item
        :label="item.label"
        :prop="item.field"
        :required="item.required"
        :label-width="item.labelWidth || config.labelWidth"
      >
        <!-- 输入框组件 -->
        <CK-Input
          v-if="!item.type || item.type === 'text' || item.type === 'password'
            || item.type === 'number' || item.type === 'amount' || item.type === 'phone'
            || item.type === 'email' || item.type === 'idcard' || item.type === 'english'
            || item.type === 'alphanumeric' || item.type === 'integer'"
          v-model="formData[item.field]"
          :type="item.type || 'text'"
          :placeholder="item.placeholder"
          :disabled="item.disabled || config.disabled"
          :readonly="item.readonly"
          :required="item.required"
          :rules="item.rules"
          :maxlength="item.props?.maxlength"
          :clearable="item.props?.clearable !== false"
          :show-password="item.type === 'password'"
          v-bind="item.props"
          @validation-change="(field, isValid, message) => handleFieldValidation(item.field, isValid, message)"
        />

        <!-- 多行文本框组件 -->
        <CK-Textarea
          v-else-if="item.type === 'textarea'"
          v-model="formData[item.field]"
          :placeholder="item.placeholder"
          :disabled="item.disabled || config.disabled"
          :readonly="item.readonly"
          :required="item.required"
          :rules="item.rules"
          :maxlength="item.props?.maxlength"
          :rows="item.props?.rows || 3"
          :autosize="item.props?.autosize"
          :show-word-limit="item.props?.showWordLimit"
          v-bind="item.props"
          @validation-change="(field, isValid, message) => handleFieldValidation(item.field, isValid, message)"
        />

        <!-- 选择器组件 -->
        <CK-SelectPicker
          v-else-if="item.type === 'select' || item.type === 'selectPicker'"
          v-model="formData[item.field]"
          :placeholder="item.placeholder"
          :disabled="item.disabled || config.disabled"
          :readonly="item.readonly"
          :required="item.required"
          :rules="item.rules"
          :options="item.options"
          :value-key="item.optionsValueField || 'value'"
          :label-key="item.optionsLabelField || 'label'"
          :multiple="item.props?.multiple"
          :loading="item.props?.loading"
          v-bind="item.props"
          @validation-change="(field, isValid, message) => handleFieldValidation(item.field, isValid, message)"
          @change="(value, option) => handleFieldChange(item.field, value, option)"
        />

        <!-- 自定义插槽 -->
        <slot
          v-else
          :name="item.field"
          :item="item"
          :value="formData[item.field]"
          :update-value="(value: any) => updateFieldValue(item.field, value)"
        >
          <!-- 默认显示警告 -->
          <wd-cell title="不支持的字段类型" :value="item.type" />
        </slot>
      </wd-form-item>
    </template>

    <!-- 表单底部插槽 -->
    <slot name="footer" :form-data="formData" :validate="validate" :submit="handleSubmit">
      <view v-if="showSubmitButton" class="ck-form-footer">
        <CK-Button
          type="primary"
          :loading="submitLoading"
          :disabled="config.disabled"
          @click="handleSubmit"
        >
          {{ submitButtonText }}
        </CK-Button>
      </view>
    </slot>
  </wd-form>
</template>

<style scoped>
.ck-form-footer {
  padding: 20px;
  text-align: center;
}
</style>
