"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_token = require("../../store/token.js");
const utils_uploadFile = require("../../utils/uploadFile.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_component_layout_default_uni + _component_global_ku_root)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "me",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const tokenStore = store_token.useTokenStore();
    const { userInfo } = common_vendor.storeToRefs(userStore);
    function handleLogin() {
      return __async(this, null, function* () {
        yield tokenStore.wxLogin();
      });
    }
    function onChooseAvatar(e) {
      console.log("选择头像", e.detail);
      const { avatarUrl } = e.detail;
      const { run } = utils_uploadFile.useUpload(
        "https://ukw0y1.laf.run/upload",
        {},
        {
          onSuccess: (res) => {
            console.log("wx头像上传成功", res);
            store_user.useUserStore().setUserAvatar(res.url);
          }
        },
        avatarUrl
      );
      run();
    }
    function handleLogout() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            store_token.useTokenStore().logout();
            common_vendor.index.showToast({
              title: "退出登录成功",
              icon: "success"
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userInfo).avatar,
        b: common_vendor.o(onChooseAvatar),
        c: common_vendor.unref(userInfo).username,
        d: common_vendor.o(($event) => common_vendor.unref(userInfo).username = $event.detail.value),
        e: common_vendor.t(common_vendor.unref(userInfo).id),
        f: common_vendor.t(JSON.stringify(common_vendor.unref(userInfo), null, 2)),
        g: common_vendor.unref(tokenStore).hasLogin
      }, common_vendor.unref(tokenStore).hasLogin ? {
        h: common_vendor.o(handleLogout)
      } : {
        i: common_vendor.o(handleLogin)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-371b06ea"]]);
wx.createPage(MiniProgramPage);
