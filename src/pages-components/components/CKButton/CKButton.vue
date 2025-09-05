<script setup lang="ts">
<script setup lang="ts">
import { computed } from 'vue'
import type { CKButtonType, CKComponentSize } from '../../types'

// 组件 Props
interface Props {
  type?: CKButtonType
  size?: CKComponentSize
  disabled?: boolean
  loading?: boolean
  plain?: boolean
  round?: boolean
  icon?: string
  customClass?: string
  customStyle?: string | Record<string, any>
  formType?: 'submit' | 'reset'
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  plain: false,
  round: false,
})

// 组件 Emits
type Emits = {
  click: [event: Event]
}

const emit = defineEmits<Emits>()

// 计算属性
const buttonType = computed(() => {
  const typeMap: Record<CKButtonType, string> = {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    error: 'error',
    default: 'default',
  }
  return typeMap[props.type] || 'default'
})

// 事件处理
function handleClick(event: Event) {
  if (props.disabled || props.loading) {
    return
  }
  emit('click', event)
}
</script>

<template>
  <wd-button
    :type="buttonType"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :plain="plain"
    :round="round"
    :icon="icon"
    :custom-class="customClass"
    :custom-style="customStyle"
    :form-type="formType"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </wd-button>
</template>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
