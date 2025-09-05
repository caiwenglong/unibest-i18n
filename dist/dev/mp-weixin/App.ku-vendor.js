"use strict";
const common_vendor = require("./common/vendor.js");
require("./store/index.js");
const tabbar_store = require("./tabbar/store.js");
const utils_index = require("./utils/index.js");
const store_theme = require("./store/theme.js");
if (!Array) {
  const _easycom_wd_toast2 = common_vendor.resolveComponent("wd-toast");
  const _easycom_wd_message_box2 = common_vendor.resolveComponent("wd-message-box");
  const _easycom_wd_config_provider2 = common_vendor.resolveComponent("wd-config-provider");
  (_easycom_wd_toast2 + _easycom_wd_message_box2 + _easycom_wd_config_provider2)();
}
const _easycom_wd_toast = () => "./node-modules/wot-design-uni/components/wd-toast/wd-toast.js";
const _easycom_wd_message_box = () => "./node-modules/wot-design-uni/components/wd-message-box/wd-message-box.js";
const _easycom_wd_config_provider = () => "./node-modules/wot-design-uni/components/wd-config-provider/wd-config-provider.js";
if (!Math) {
  (FgTabbar + _easycom_wd_toast + _easycom_wd_message_box + _easycom_wd_config_provider)();
}
const FgTabbar = () => "./tabbar/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App.ku",
  setup(__props, { expose: __expose }) {
    const themeStore = store_theme.useThemeStore();
    const isCurrentPageTabbar = common_vendor.ref(true);
    common_vendor.onShow(() => {
      console.log("App.ku.vue onShow", utils_index.currRoute());
      const { path } = utils_index.currRoute();
      isCurrentPageTabbar.value = tabbar_store.isPageTabbar(path);
    });
    const helloKuRoot = common_vendor.ref("Hello AppKuVue");
    const exposeRef = common_vendor.ref("this is form app.Ku.vue");
    __expose({
      exposeRef
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(helloKuRoot.value),
        b: isCurrentPageTabbar.value
      }, isCurrentPageTabbar.value ? {} : {}, {
        c: common_vendor.p({
          ["theme-vars"]: common_vendor.unref(themeStore).themeVars,
          theme: common_vendor.unref(themeStore).theme
        })
      });
    };
  }
});
exports._sfc_main = _sfc_main;
