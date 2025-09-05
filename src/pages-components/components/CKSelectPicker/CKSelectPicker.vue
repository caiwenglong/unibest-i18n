<script setup lang="ts">
import type { CKOption, CKValidationRule } from '../../types'
import { computed, ref, watch } from 'vue'
import { getDefaultRules, validateInput } from '../../utils/validation'

// 组件 Props
interface Props {
  modelValue?: any
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  rules?: CKValidationRule[]
  label?: string
  labelWidth?: string
  options?: CKOption[]
  valueKey?: string
  labelKey?: string
  loading?: boolean
  loadingColor?: string
  multiple?: boolean
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  placeholder: '请选择',
  disabled: false,
  readonly: false,
  required: false,
  valueKey: 'value',
  labelKey: 'label',
  loading: false,
  multiple: false,
})

const emit = defineEmits<Emits>()

// 组件 Emits
interface Emits {
  'update:modelValue': [value: any]
  'change': [value: any, option?: CKOption | CKOption[]]
  'confirm': [value: any, option?: CKOption | CKOption[]]
  'cancel': []
  'validation-change': [field: string, isValid: boolean, message?: string]
}

// 内部状态
const internalValue = ref<any>()
const errorMessage = ref<string>('')
const hasError = ref<boolean>(false)

// 计算属性
const formattedColumns = computed(() => {
  if (!props.options || props.options.length === 0) {
    return []
  }

  return [props.options.map(option => ({
    [props.valueKey]: option.value,
    [props.labelKey]: option.label,
    disabled: option.disabled || false,
  }))]
})

const validationRules = computed(() => {
  if (props.rules && props.rules.length > 0) {
    return props.rules
  }
  return getDefaultRules('select', props.required)
})

// 获取选中的选项
function getSelectedOption(value: any): CKOption | CKOption[] | undefined {
  if (!props.options || props.options.length === 0) {
    return undefined
  }

  if (props.multiple) {
    if (!Array.isArray(value))
      return []
    return props.options.filter(option => value.includes(option.value))
  }
  else {
    return props.options.find(option => option.value === value)
  }
}

// 验证值
function validateValue(value: any): boolean {
  const result = validateInput(value, 'select', validationRules.value)

  hasError.value = !result.valid
  errorMessage.value = result.message || ''

  emit('validation-change', 'select', result.valid, result.message)

  return result.valid
}

// 事件处理
function handleConfirm(value: any) {
  internalValue.value = value
  emit('update:modelValue', value)

  const selectedOption = getSelectedOption(value)
  emit('confirm', value, selectedOption)
  emit('change', value, selectedOption)

  validateValue(value)
}

function handleCancel() {
  emit('cancel')
}

function handleChange(value: any) {
  internalValue.value = value
  emit('update:modelValue', value)

  const selectedOption = getSelectedOption(value)
  emit('change', value, selectedOption)

  validateValue(value)
}

// 监听外部值变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== internalValue.value) {
      internalValue.value = newValue
    }
  },
  { immediate: true },
)

// 暴露验证方法
defineExpose({
  validate: () => validateValue(internalValue.value),
  clearValidation: () => {
    hasError.value = false
    errorMessage.value = ''
  },
  getSelectedOption: () => getSelectedOption(internalValue.value),
})
</script>

<template>
  <wd-select-picker
    v-model="internalValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    :error="hasError"
    :error-message="errorMessage"
    :columns="formattedColumns"
    :value-key="valueKey"
    :label-key="labelKey"
    :loading="loading"
    :loading-color="loadingColor"
    v-bind="$attrs"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    @change="handleChange"
  />
</template>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
