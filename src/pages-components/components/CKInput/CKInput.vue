<script setup lang="ts">
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { formatInputValue, getDefaultRules, validateInput } from '../../utils/validation'
import type { CKInputType, CKValidationRule } from '../../types'

// 组件 Props
interface Props {
  modelValue?: any
  type?: CKInputType
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  rules?: CKValidationRule[]
  label?: string
  labelWidth?: string
  maxlength?: number
  clearable?: boolean
  showPassword?: boolean
  validateOnInput?: boolean
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  readonly: false,
  required: false,
  clearable: true,
  showPassword: false,
  validateOnInput: false,
})

// 组件 Emits
type Emits = {
  'update:modelValue': [value: any]
  'blur': [value: any]
  'focus': [value: any]
  'input': [value: any]
  'clear': []
  'validation-change': [field: string, isValid: boolean, message?: string]
}

const emit = defineEmits<Emits>()

// 内部状态
const internalValue = ref<string>('')
const errorMessage = ref<string>('')
const hasError = ref<boolean>(false)

// 计算属性
const inputType = computed(() => {
  switch (props.type) {
    case 'password':
      return 'password'
    case 'number':
    case 'amount':
    case 'integer':
      return 'digit'
    case 'phone':
      return 'tel'
    case 'email':
      return 'email'
    default:
      return 'text'
  }
})

const validationRules = computed(() => {
  if (props.rules && props.rules.length > 0) {
    return props.rules
  }
  return getDefaultRules(props.type, props.required)
})

// 格式化并验证值
function processValue(value: any, shouldValidate = false): string {
  const formattedValue = formatInputValue(value, props.type)

  if (shouldValidate) {
    validateValue(formattedValue)
  }

  return formattedValue
}

// 验证值
function validateValue(value: string): boolean {
  const result = validateInput(value, props.type, validationRules.value)

  hasError.value = !result.valid
  errorMessage.value = result.message || ''

  emit('validation-change', 'input', result.valid, result.message)

  return result.valid
}

// 事件处理
function handleInput(value: any) {
  // 智能值提取 - 处理事件对象
  const actualValue = typeof value === 'object' && value && 'target' in value
    ? (value.target as any)?.value || String(props.modelValue || '')
    : String(value || props.modelValue || '')

  const processedValue = processValue(actualValue, props.validateOnInput)
  internalValue.value = processedValue
  emit('update:modelValue', processedValue)
  emit('input', processedValue)
}

function handleBlur() {
  const isValid = validateValue(internalValue.value)
  emit('blur', internalValue.value)
}

function handleFocus() {
  emit('focus', internalValue.value)
}

function handleClear() {
  internalValue.value = ''
  hasError.value = false
  errorMessage.value = ''
  emit('update:modelValue', '')
  emit('clear')
  emit('validation-change', 'input', true)
}

// 监听外部值变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== internalValue.value) {
      internalValue.value = processValue(newValue)
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
  focus: () => {
    // TODO: 实现聚焦功能
  },
  blur: () => {
    // TODO: 实现失焦功能
  },
})
</script>

<template>
  <wd-input
    v-model="internalValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :type="inputType"
    :maxlength="maxlength"
    :show-password="showPassword"
    :clearable="clearable"
    :error="hasError"
    :error-message="errorMessage"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    v-bind="$attrs"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
    @clear="handleClear"
  />
</template>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
