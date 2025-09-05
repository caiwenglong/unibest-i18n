// 表单验证相关常量
export const VALIDATION_PATTERNS = {
  // 手机号正则
  PHONE: /^1[3-9,]\d{9}$/,
  // 邮箱正则
  EMAIL: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  // 身份证正则
  ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/,
  // 中文姓名正则
  CHINESE_NAME: /^[\u4E00-\u9FA5]{2,8}$/,
  // 英文姓名正则
  ENGLISH_NAME: /^[a-z\s]{2,20}$/i,
  // 用户名正则（2-16位中文、字母、数字或下划线）
  USERNAME: /^[\u4E00-\u9FA5\w]{2,16}$/,
  // 密码正则（6-20位，包含字母和数字）
  PASSWORD: /^(?=.*[a-z])(?=.*\d)[a-z\d@$!%*?&]{6,20}$/i,
  // 数字正则
  NUMBER: /^\d*(?:\.\d*)?$/,
  // 整数正则
  INTEGER: /^\d+$/,
  // 金额正则（支持两位小数）
  AMOUNT: /^\d*\.?\d{0,2}$/,
}

// 表单验证错误信息
export const VALIDATION_MESSAGES = {
  REQUIRED: '此字段不能为空',
  PHONE_INVALID: '请输入有效的手机号',
  EMAIL_INVALID: '请输入有效的邮箱地址',
  ID_CARD_INVALID: '请输入有效的身份证号',
  NAME_INVALID: '请输入有效的姓名',
  USERNAME_INVALID: '用户名应为2-16位中文、字母、数字或下划线',
  PASSWORD_INVALID: '密码应为6-20位，包含字母和数字',
  NUMBER_INVALID: '请输入有效数字',
  INTEGER_INVALID: '请输入整数',
  AMOUNT_INVALID: '请输入有效金额（最多2位小数）',
}

// API 接口常量
export const API_ENDPOINTS = {
  // 用户相关
  USER_LOGIN: '/api/user/login',
  USER_LOGOUT: '/api/user/logout',
  USER_INFO: '/api/user/info',
  USER_UPDATE: '/api/user/update',

  // 订单相关
  ORDER_LIST: '/api/order/list',
  ORDER_DETAIL: '/api/order/detail',
  ORDER_CREATE: '/api/order/create',
  ORDER_CANCEL: '/api/order/cancel',

  // 文件上传
  FILE_UPLOAD: '/api/file/upload',
  IMAGE_UPLOAD: '/api/image/upload',
}

// 页面路径常量
export const PAGE_PATHS = {
  HOME: '/pages/home/index',
  LOGIN: '/pages/login/index',
  PROFILE: '/pages/profile/index',
  ORDER_LIST: '/pages/order/list',
  ORDER_DETAIL: '/pages/order/detail',
}

// 存储键名常量
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  LANGUAGE: 'language',
  THEME: 'theme',
}

// 网络状态常量
export const NETWORK_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  UNKNOWN: 'unknown',
}

// 设备类型常量
export const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
}
