import type { CKOption } from '/src/pages-components/types'

/**
 * 枚举工具类
 */
export class EnumUtils {
  /**
   * 将枚举转换为选项数组
   * @param enumObj 枚举对象
   * @param labelMap 标签映射
   * @returns 选项数组
   */
  static toOptions<T extends Record<string, any>>(
    enumObj: T,
    labelMap: Record<keyof T, string>,
  ): CKOption[] {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key))) // 过滤数字键（针对数字枚举）
      .map(key => ({
        value: enumObj[key],
        label: labelMap[key as keyof T] || key,
      }))
  }

  /**
   * 根据值获取标签
   * @param enumObj 枚举对象
   * @param labelMap 标签映射
   * @param value 枚举值
   * @returns 标签
   */
  static getLabel<T extends Record<string, any>>(
    enumObj: T,
    labelMap: Record<keyof T, string>,
    value: T[keyof T],
  ): string {
    const key = Object.keys(enumObj).find(k => enumObj[k] === value)
    return key ? labelMap[key as keyof T] || key : ''
  }

  /**
   * 检查值是否在枚举中
   * @param enumObj 枚举对象
   * @param value 要检查的值
   * @returns 是否存在
   */
  static hasValue<T extends Record<string, any>>(
    enumObj: T,
    value: any,
  ): boolean {
    return Object.values(enumObj).includes(value)
  }

  /**
   * 获取枚举的所有值
   * @param enumObj 枚举对象
   * @returns 值数组
   */
  static getValues<T extends Record<string, any>>(enumObj: T): T[keyof T][] {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))
      .map(key => enumObj[key])
  }

  /**
   * 获取枚举的所有键
   * @param enumObj 枚举对象
   * @returns 键数组
   */
  static getKeys<T extends Record<string, any>>(enumObj: T): string[] {
    return Object.keys(enumObj).filter(key => isNaN(Number(key)))
  }
}

/**
 * 验证工具类
 */
export class ValidationUtils {
  /**
   * 验证手机号
   * @param phone 手机号
   * @returns 是否有效
   */
  static isValidPhone(phone: string): boolean {
    return /^1[3-9,]\d{9}$/.test(phone)
  }

  /**
   * 验证邮箱
   * @param email 邮箱
   * @returns 是否有效
   */
  static isValidEmail(email: string): boolean {
    return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)
  }

  /**
   * 验证身份证
   * @param idCard 身份证号
   * @returns 是否有效
   */
  static isValidIdCard(idCard: string): boolean {
    return /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(idCard)
  }

  /**
   * 验证用户名
   * @param username 用户名
   * @returns 是否有效
   */
  static isValidUsername(username: string): boolean {
    return /^[\u4E00-\u9FA5\w]{2,16}$/.test(username)
  }

  /**
   * 验证密码强度
   * @param password 密码
   * @returns 是否有效
   */
  static isValidPassword(password: string): boolean {
    return /^(?=.*[a-z])(?=.*\d)[a-z\d@$!%*?&]{6,20}$/i.test(password)
  }
}

/**
 * 格式化工具类
 */
export class FormatUtils {
  /**
   * 格式化金额
   * @param amount 金额
   * @param decimals 小数位数
   * @returns 格式化后的金额
   */
  static formatAmount(amount: number | string, decimals: number = 2): string {
    const num = typeof amount === 'string' ? Number.parseFloat(amount) : amount
    if (isNaN(num))
      return '0.00'
    return num.toFixed(decimals)
  }

  /**
   * 格式化手机号（中间4位隐藏）
   * @param phone 手机号
   * @returns 格式化后的手机号
   */
  static formatPhone(phone: string): string {
    if (!phone || phone.length !== 11)
      return phone
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  }

  /**
   * 格式化身份证（中间部分隐藏）
   * @param idCard 身份证号
   * @returns 格式化后的身份证号
   */
  static formatIdCard(idCard: string): string {
    if (!idCard || idCard.length !== 18)
      return idCard
    return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2')
  }

  /**
   * 格式化日期
   * @param date 日期
   * @param format 格式
   * @returns 格式化后的日期
   */
  static formatDate(date: Date | string | number, format: string = 'YYYY-MM-DD'): string {
    const d = new Date(date)
    if (isNaN(d.getTime()))
      return ''

    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const hour = String(d.getHours()).padStart(2, '0')
    const minute = String(d.getMinutes()).padStart(2, '0')
    const second = String(d.getSeconds()).padStart(2, '0')

    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hour)
      .replace('mm', minute)
      .replace('ss', second)
  }
}
