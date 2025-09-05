import type { CKInputType, CKValidationRule } from '../types'

// 输入类型验证模式
export const INPUT_PATTERNS: Record<CKInputType, RegExp> = {
  text: /.*/,
  password: /.*/,
  number: /^\d*(?:\.\d*)?$/,
  amount: /^\d*\.?\d{0,2}$/,
  phone: /^[1-9]\d{10}$/,
  email: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  idcard: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/,
  english: /^[a-z]*$/i,
  alphanumeric: /^[a-z0-9]*$/i,
  integer: /^\d+$/,
  textarea: /.*/,
  select: /.*/,
  selectPicker: /.*/,
}

// 输入类型错误信息
export const INPUT_ERROR_MESSAGES: Record<CKInputType, string> = {
  text: '请输入有效文本',
  password: '请输入密码',
  number: '请输入有效数字',
  amount: '请输入有效金额（最多2位小数）',
  phone: '请输入有效手机号',
  email: '请输入有效邮箱地址',
  idcard: '请输入有效身份证号',
  english: '请输入英文字符',
  alphanumeric: '请输入字母或数字',
  integer: '请输入整数',
  textarea: '请输入内容',
  select: '请选择选项',
  selectPicker: '请选择选项',
}

/**
 * 验证输入值
 * @param value 输入值
 * @param type 输入类型
 * @param rules 自定义验证规则
 * @returns 验证结果
 */
export function validateInput(
  value: any,
  type: CKInputType,
  rules?: CKValidationRule[],
): { valid: boolean, message?: string } {
  const stringValue = String(value || '').trim()

  // 如果有自定义规则，优先使用自定义规则
  if (rules && rules.length > 0) {
    for (const rule of rules) {
      // 必填验证
      if (rule.required && !stringValue) {
        return {
          valid: false,
          message: rule.message || '此字段不能为空',
        }
      }

      // 跳过空值的格式验证（除非必填）
      if (!stringValue && !rule.required) {
        continue
      }

      // 自定义验证器
      if (rule.validator) {
        const result = rule.validator(value)
        if (result !== true) {
          return {
            valid: false,
            message: typeof result === 'string' ? result : rule.message || '验证失败',
          }
        }
      }

      // 正则验证
      if (rule.pattern && stringValue && !rule.pattern.test(stringValue)) {
        return {
          valid: false,
          message: rule.message || '格式不正确',
        }
      }
    }
  }

  // 如果没有值且不是必填，通过验证
  if (!stringValue) {
    return { valid: true }
  }

  // 使用内置类型验证
  const pattern = INPUT_PATTERNS[type]
  if (pattern && !pattern.test(stringValue)) {
    return {
      valid: false,
      message: INPUT_ERROR_MESSAGES[type],
    }
  }

  return { valid: true }
}

/**
 * 格式化输入值
 * @param value 输入值
 * @param type 输入类型
 * @returns 格式化后的值
 */
export function formatInputValue(value: any, type: CKInputType): string {
  if (value === null || value === undefined) {
    return ''
  }

  let stringValue = String(value)

  switch (type) {
    case 'number':
    case 'amount':
      // 只保留数字和小数点
      stringValue = stringValue.replace(/[^\d.]/g, '')
      // 确保只有一个小数点
      const parts = stringValue.split('.')
      if (parts.length > 2) {
        stringValue = `${parts[0]}.${parts.slice(1).join('')}`
      }
      if (type === 'amount' && parts[1] && parts[1].length > 2) {
        stringValue = `${parts[0]}.${parts[1].slice(0, 2)}`
      }
      break

    case 'integer':
      // 只保留数字
      stringValue = stringValue.replace(/\D/g, '')
      break

    case 'phone':
      // 只保留数字，最多11位
      stringValue = stringValue.replace(/\D/g, '').slice(0, 11)
      break

    case 'english':
      // 只保留英文字符
      stringValue = stringValue.replace(/[^a-z]/gi, '')
      break

    case 'alphanumeric':
      // 只保留字母和数字
      stringValue = stringValue.replace(/[^a-z0-9]/gi, '')
      break

    default:
      // 其他类型不做格式化
      break
  }

  return stringValue
}

/**
 * 获取默认验证规则
 * @param type 输入类型
 * @param required 是否必填
 * @returns 验证规则数组
 */
export function getDefaultRules(type: CKInputType, required: boolean = false): CKValidationRule[] {
  const rules: CKValidationRule[] = []

  if (required) {
    rules.push({
      required: true,
      message: '此字段不能为空',
      trigger: 'blur',
    })
  }

  // 添加类型验证规则
  if (type !== 'text' && type !== 'textarea') {
    rules.push({
      pattern: INPUT_PATTERNS[type],
      message: INPUT_ERROR_MESSAGES[type],
      trigger: 'blur',
    })
  }

  return rules
}
