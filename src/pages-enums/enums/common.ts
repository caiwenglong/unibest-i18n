// 性别枚举
export enum GenderEnum {
  MALE = 1,
  FEMALE = 2,
  UNKNOWN = 0,
}

export const GenderOptions = [
  { value: GenderEnum.MALE, label: '男' },
  { value: GenderEnum.FEMALE, label: '女' },
  { value: GenderEnum.UNKNOWN, label: '未知' },
]

// 用户状态枚举
export enum UserStatusEnum {
  ACTIVE = 1,
  INACTIVE = 0,
  PENDING = 2,
  SUSPENDED = 3,
}

export const UserStatusOptions = [
  { value: UserStatusEnum.ACTIVE, label: '活跃' },
  { value: UserStatusEnum.INACTIVE, label: '非活跃' },
  { value: UserStatusEnum.PENDING, label: '待审核' },
  { value: UserStatusEnum.SUSPENDED, label: '已暂停' },
]

// 订单状态枚举
export enum OrderStatusEnum {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export const OrderStatusOptions = [
  { value: OrderStatusEnum.PENDING, label: '待支付' },
  { value: OrderStatusEnum.PAID, label: '已支付' },
  { value: OrderStatusEnum.SHIPPED, label: '已发货' },
  { value: OrderStatusEnum.DELIVERED, label: '已送达' },
  { value: OrderStatusEnum.CANCELLED, label: '已取消' },
  { value: OrderStatusEnum.REFUNDED, label: '已退款' },
]

// 优先级枚举
export enum PriorityEnum {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  URGENT = 4,
}

export const PriorityOptions = [
  { value: PriorityEnum.LOW, label: '低' },
  { value: PriorityEnum.MEDIUM, label: '中' },
  { value: PriorityEnum.HIGH, label: '高' },
  { value: PriorityEnum.URGENT, label: '紧急' },
]
