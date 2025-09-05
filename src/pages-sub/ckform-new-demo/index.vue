<script setup lang="ts">
import type { CKFormInstance, CKFormItem } from '/src/pages-components/types'
import { computed, onMounted, ref } from 'vue'
import {
  GenderEnum,
  GenderOptions,
  OrderStatusEnum,
  OrderStatusOptions,
  UserStatusEnum,
  UserStatusOptions,
} from '../enums'

// 表单引用
const ckFormRef = ref<CKFormInstance>()

// 表单数据
const form = ref({
  name: '张三',
  age: 25,
  gender: GenderEnum.MALE,
  email: '',
  phone: '',
  status: UserStatusEnum.ACTIVE,
  orderStatus: OrderStatusEnum.PENDING,
  bio: '',
  agreement: false,
})

// 提交状态
const submitLoading = ref(false)

// 操作日志
const operationLogs = ref<Array<{ time: string, message: string }>>([])

// 表单配置
const formConfig = ref({
  labelWidth: '100px',
  labelPosition: 'left' as const,
  disabled: false,
  validateOnRuleChange: true,
  hideRequiredAsterisk: false,
})

// 动态表单项配置
const dynamicFormItems = computed<CKFormItem[]>(() => [
  {
    label: '姓名',
    field: 'name',
    type: 'text',
    placeholder: '请输入真实姓名',
    required: true,
    rules: [
      { required: true, message: '姓名不能为空' },
      {
        pattern: /^[\u4E00-\u9FA5]{2,8}$/,
        message: '请输入2-8位中文姓名',
      },
    ],
  },
  {
    label: '年龄',
    field: 'age',
    type: 'integer',
    placeholder: '请输入年龄',
    required: true,
    rules: [
      { required: true, message: '年龄不能为空' },
      {
        validator: (value: any) => {
          const age = Number(value)
          if (isNaN(age) || age < 1 || age > 120) {
            return '年龄必须在1-120之间'
          }
          return true
        },
      },
    ],
  },
  {
    label: '性别',
    field: 'gender',
    type: 'selectPicker',
    placeholder: '请选择性别',
    required: true,
    options: GenderOptions,
    optionsValueField: 'value',
    optionsLabelField: 'label',
  },
  {
    label: '邮箱',
    field: 'email',
    type: 'email',
    placeholder: '请输入邮箱地址',
    required: false,
    rules: [
      {
        pattern: /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
        message: '请输入有效的邮箱地址',
      },
    ],
  },
  {
    label: '手机号',
    field: 'phone',
    type: 'phone',
    placeholder: '请输入手机号',
    required: true,
    rules: [
      { required: true, message: '手机号不能为空' },
      {
        pattern: /^1[3-9,]\d{9}$/,
        message: '请输入有效的手机号',
      },
    ],
  },
  {
    label: '用户状态',
    field: 'status',
    type: 'selectPicker',
    placeholder: '请选择用户状态',
    required: true,
    options: UserStatusOptions,
    optionsValueField: 'value',
    optionsLabelField: 'label',
  },
  {
    label: '订单状态',
    field: 'orderStatus',
    type: 'selectPicker',
    placeholder: '请选择订单状态',
    required: false,
    options: OrderStatusOptions,
    optionsValueField: 'value',
    optionsLabelField: 'label',
  },
  {
    label: '个人简介',
    field: 'bio',
    type: 'textarea',
    placeholder: '请输入个人简介',
    required: false,
    props: {
      rows: 4,
      maxlength: 200,
      showWordLimit: true,
    },
  },
])

// 计算属性
const genderOptionsText = computed(() =>
  GenderOptions.map(item => `${item.label}(${item.value})`).join(', '),
)

const userStatusOptionsText = computed(() =>
  UserStatusOptions.map(item => `${item.label}(${item.value})`).join(', '),
)

const orderStatusOptionsText = computed(() =>
  OrderStatusOptions.map(item => `${item.label}(${item.value})`).join(', '),
)

// 方法
function getFieldLabel(field: string): string {
  const item = dynamicFormItems.value.find(item => item.field === field)
  return item?.label || field
}

function formatValue(field: string, value: any): string {
  if (value === null || value === undefined || value === '') {
    return '未设置'
  }

  // 格式化枚举值
  if (field === 'gender') {
    const option = GenderOptions.find(opt => opt.value === value)
    return option ? `${option.label}(${value})` : String(value)
  }

  if (field === 'status') {
    const option = UserStatusOptions.find(opt => opt.value === value)
    return option ? `${option.label}(${value})` : String(value)
  }

  if (field === 'orderStatus') {
    const option = OrderStatusOptions.find(opt => opt.value === value)
    return option ? `${option.label}(${value})` : String(value)
  }

  return String(value)
}

function addLog(message: string) {
  const time = new Date().toLocaleTimeString()
  operationLogs.value.unshift({ time, message })
  // 保持最多50条日志
  if (operationLogs.value.length > 50) {
    operationLogs.value = operationLogs.value.slice(0, 50)
  }
}

// 事件处理
async function handleSubmitForm() {
  if (!ckFormRef.value)
    return

  addLog('开始提交表单...')
  submitLoading.value = true

  try {
    const isValid = await ckFormRef.value.validate()

    if (isValid) {
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 2000))

      addLog(`表单提交成功！数据：${JSON.stringify(form.value)}`)

      uni.showToast({
        title: '提交成功',
        icon: 'success',
      })
    }
    else {
      addLog('表单验证失败，无法提交')
      uni.showToast({
        title: '请检查表单',
        icon: 'error',
      })
    }
  }
  catch (error) {
    addLog(`提交失败：${error}`)
    uni.showToast({
      title: '提交失败',
      icon: 'error',
    })
  }
  finally {
    submitLoading.value = false
  }
}

function handleReset() {
  if (!ckFormRef.value)
    return

  ckFormRef.value.resetFields()
  addLog('表单已重置')

  uni.showToast({
    title: '已重置',
    icon: 'success',
  })
}

async function handleValidateOnly() {
  if (!ckFormRef.value)
    return

  addLog('开始验证表单...')

  try {
    const isValid = await ckFormRef.value.validate()
    const message = isValid ? '表单验证通过！' : '表单验证失败！'

    addLog(message)

    uni.showToast({
      title: isValid ? '验证通过' : '验证失败',
      icon: isValid ? 'success' : 'error',
    })
  }
  catch (error) {
    addLog(`验证过程出错：${error}`)
  }
}

function handleFieldChange(field: string, value: any, data: Record<string, any>) {
  addLog(`字段 ${getFieldLabel(field)} 变更为：${formatValue(field, value)}`)
}

function handleValidationError(field: string, error: string) {
  addLog(`字段 ${getFieldLabel(field)} 验证错误：${error}`)
}

// 页面生命周期
onMounted(() => {
  addLog('页面加载完成，CKForm 演示页面已准备就绪')
  addLog('本页面演示了完整的跨分包组件引用和枚举使用')
})
</script>

<template>
  <view class="ckform-new-demo">
    <wd-navbar title="CKForm 完整演示" fixed />

    <view class="demo-container">
      <!-- 表单区域 -->
      <view class="form-section">
        <wd-card title="个人信息表单">
          <CK-Form
            ref="ckFormRef"
            v-model="form"
            :form-items="dynamicFormItems"
            :config="formConfig"
            :submit-loading="submitLoading"
            @submit-form="handleSubmitForm"
            @field-change="handleFieldChange"
            @validation-error="handleValidationError"
          >
            <!-- 自定义提交按钮 -->
            <template #footer="{ formData, validate }">
              <view class="form-actions">
                <CK-Button
                  type="primary"
                  :loading="submitLoading"
                  @click="handleSubmitForm"
                >
                  提交表单
                </CK-Button>
                <CK-Button
                  type="default"
                  @click="handleReset"
                >
                  重置表单
                </CK-Button>
                <CK-Button
                  type="warning"
                  @click="handleValidateOnly"
                >
                  仅验证
                </CK-Button>
              </view>
            </template>
          </CK-Form>
        </wd-card>
      </view>

      <!-- 数据展示区域 -->
      <view class="data-section">
        <wd-card title="表单数据（实时）">
          <wd-cell-group>
            <wd-cell
              v-for="(value, key) in form"
              :key="key"
              :title="getFieldLabel(key)"
              :value="formatValue(key, value)"
            />
          </wd-cell-group>
        </wd-card>
      </view>

      <!-- 枚举使用演示 -->
      <view class="enum-section">
        <wd-card title="枚举使用演示">
          <wd-cell-group>
            <wd-cell title="性别选项" :value="genderOptionsText" />
            <wd-cell title="用户状态选项" :value="userStatusOptionsText" />
            <wd-cell title="订单状态选项" :value="orderStatusOptionsText" />
          </wd-cell-group>
        </wd-card>
      </view>

      <!-- 操作日志 -->
      <view class="log-section">
        <wd-card title="操作日志">
          <view class="log-container">
            <view
              v-for="(log, index) in operationLogs"
              :key="index"
              class="log-item"
            >
              <text class="log-time">{{ log.time }}</text>
              <text class="log-message">{{ log.message }}</text>
            </view>
          </view>
        </wd-card>
      </view>
    </view>
  </view>
</template>

<style scoped>
.ckform-new-demo {
  padding-top: 88rpx; /* 导航栏高度 */
}

.demo-container {
  padding: 20rpx;
}

.form-section,
.data-section,
.enum-section,
.log-section {
  margin-bottom: 30rpx;
}

.form-actions {
  display: flex;
  gap: 20rpx;
  justify-content: center;
  padding: 20rpx;
}

.log-container {
  max-height: 400rpx;
  overflow-y: auto;
}

.log-item {
  display: flex;
  padding: 10rpx 0;
  border-bottom: 1px solid #f0f0f0;
}

.log-time {
  color: #999;
  font-size: 24rpx;
  width: 120rpx;
  flex-shrink: 0;
}

.log-message {
  color: #333;
  font-size: 26rpx;
  flex: 1;
  word-break: break-all;
}
</style>
