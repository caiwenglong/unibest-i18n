// CK 组件库基础类型定义

// 输入组件类型
export type CKInputType
  = | 'text'
    | 'password'
    | 'number'
    | 'amount'
    | 'phone'
    | 'email'
    | 'idcard'
    | 'english'
    | 'alphanumeric'
    | 'integer'
    | 'textarea'
    | 'select'
    | 'selectPicker'

// 验证规则类型
export interface CKValidationRule {
  required?: boolean
  pattern?: RegExp
  message?: string
  validator?: (value: any) => boolean | string
  trigger?: 'blur' | 'input' | 'change'
}

// 选项类型
export interface CKOption {
  value: any
  label: string
  disabled?: boolean
}

// 表单项配置
export interface CKFormItem {
  label: string
  field: string
  type?: CKInputType
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  options?: CKOption[]
  optionsLabelField?: string
  optionsValueField?: string
  rules?: CKValidationRule[]
  props?: Record<string, any>
}

// 表单配置
export interface CKFormConfig {
  labelWidth?: string
  labelPosition?: 'left' | 'right' | 'top'
  disabled?: boolean
  validateOnRuleChange?: boolean
  hideRequiredAsterisk?: boolean
}

// 表单实例方法
export interface CKFormInstance {
  validate: () => Promise<boolean>
  validateField: (field: string) => Promise<boolean>
  clearValidation: (field?: string) => void
  resetFields: () => void
  getFormData: () => Record<string, any>
  setFormData: (data: Record<string, any>) => void
}

// 表单事件
export interface CKFormEvents {
  'submit-form': (data: Record<string, any>) => void
  'field-change': (field: string, value: any, data: Record<string, any>) => void
  'validation-error': (field: string, error: string) => void
}

// 组件尺寸
export type CKComponentSize = 'large' | 'medium' | 'small'

// 按钮类型
export type CKButtonType
  = | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'default'

// 按钮配置
export interface CKButtonConfig {
  type?: CKButtonType
  size?: CKComponentSize
  disabled?: boolean
  loading?: boolean
  plain?: boolean
  round?: boolean
  icon?: string
}
