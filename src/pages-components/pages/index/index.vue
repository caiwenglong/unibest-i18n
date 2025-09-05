<script setup lang="ts">
function gotoDemo(pageName: string) {
  uni.navigateTo({
    url: `/pages-sub/${pageName}/index`,
  })
}
</script>

<template>
  <view class="components-index">
    <wd-navbar title="CK组件库" fixed />

    <view class="container">
      <wd-card title="CK组件库">
        <view class="intro">
          <text>这是一个基于 wot-design-uni 的二次封装组件库</text>
        </view>
      </wd-card>

      <wd-card title="组件列表">
        <wd-cell-group>
          <wd-cell
            title="CKForm - 表单组件"
            value="查看演示"
            is-link
            @click="gotoDemo('ckform-new-demo')"
          />
          <wd-cell
            title="CKInput - 输入框"
            value="已封装"
          />
          <wd-cell
            title="CKSelectPicker - 选择器"
            value="已封装"
          />
          <wd-cell
            title="CKTextarea - 多行文本"
            value="已封装"
          />
          <wd-cell
            title="CKButton - 按钮"
            value="已封装"
          />
        </wd-cell-group>
      </wd-card>

      <wd-card title="枚举代理">
        <wd-cell-group>
          <wd-cell
            title="自动生成代理文件"
            value="✅ 已启用"
          />
          <wd-cell
            title="跨分包引用"
            value="✅ 已支持"
          />
          <wd-cell
            title="Bundle Optimizer"
            value="✅ 已配置"
          />
        </wd-cell-group>
      </wd-card>
    </view>
  </view>
</template>

<style scoped>
.components-index {
  padding-top: 88rpx;
}

.container {
  padding: 20rpx;
}

.intro {
  padding: 20rpx;
  text-align: center;
  color: #666;
}
</style>
