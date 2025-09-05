<script setup lang="ts">
import type { CKValidationRule } from '../../types'
import { computed, ref, watch } from 'vue'
import { getDefaultRules, validateInput } from '../../utils/validation'

// 组件 Props
interface Props {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  rules?: CKValidationRule[]
  label?: string
  labelWidth?: string
  maxlength?: number
  showWordLimit?: boolean
  autosize?: boolean | { minRows?: number, maxRows?: number }
  clearable?: boolean
  rows?: number
  validateOnInput?: boolean
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  placeholder: '请输入内容',
  disabled: false,
  readonly: false,
  required: false,
  showWordLimit: false,
  autosize: false,
  clearable: true,
  rows: 3,
  validateOnInput: false,
})

const emit = defineEmits<Emits>()

// 组件 Emits
interface Emits {
  'update:modelValue': [value: string]
  'blur': [value: string]
  'focus': [value: string]
  'input': [value: string]
  'clear': []
  'linechange': [detail: any]
  'validation-change': [field: string, isValid: boolean, message?: string]
}

// 内部状态
const internalValue = ref<string>('')
const errorMessage = ref<string>('')
const hasError = ref<boolean>(false)

// 计算属性
const validationRules = computed(() => {
  if (props.rules && props.rules.length > 0) {
    return props.rules
  }
  return getDefaultRules('textarea', props.required)
})

// 验证值
function validateValue(value: string): boolean {
  const result = validateInput(value, 'textarea', validationRules.value)

  hasError.value = !result.valid
  errorMessage.value = result.message || ''

  emit('validation-change', 'textarea', result.valid, result.message)

  return result.valid
}

// 事件处理
function handleInput(value: any) {
  // 智能值提取 - 处理事件对象
  const actualValue = typeof value === 'object' && value && 'target' in value
    ? (value.target as any)?.value || String(props.modelValue || '')
    : String(value || props.modelValue || '')

  internalValue.value = actualValue
  emit('update:modelValue', actualValue)
  emit('input', actualValue)

  if (props.validateOnInput) {
    validateValue(actualValue)
  }
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
  emit('validation-change', 'textarea', true)
}

function handleLineChange(detail: any) {
  emit('linechange', detail)
}

// 监听外部值变化
watch(
  () => props.modelValue,
  (newValue) => {
    const stringValue = String(newValue || '')
    if (stringValue !== internalValue.value) {
      internalValue.value = stringValue
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
  <wd-textarea
    v-model="internalValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    :autosize="autosize"
    :clearable="clearable"
    :error="hasError"
    :error-message="errorMessage"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    :rows="rows"
    v-bind="$attrs"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
    @clear="handleClear"
    @linechange="handleLineChange"
  />
</template>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
