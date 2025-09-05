"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const router_config = require("../../router/config.js");
const tabbar_store = require("../../tabbar/store.js");
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_component_layout_default_uni + _component_global_ku_root)();
}
if (!Math) {
  (I18nComp + RequestComp + VBindCss)();
}
const RequestComp = () => "./components/request.js";
const VBindCss = () => "./components/VBindCss.js";
const I18nComp = () => "./i18n2.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "about",
  setup(__props) {
    function gotoI18nPage() {
      common_vendor.index.navigateTo({
        url: "/pages/about/i18n"
      });
    }
    console.log({ isApp: common_vendor.isApp, isAppAndroid: common_vendor.isAppAndroid, isAppHarmony: common_vendor.isAppHarmony, isAppIOS: common_vendor.isAppIOS, isAppPlus: common_vendor.isAppPlus, isH5: common_vendor.isH5, isMpWeixin: common_vendor.isMpWeixin, isWeb: common_vendor.isWeb });
    function gotoLogin() {
      common_vendor.index.navigateTo({
        url: `${router_config.LOGIN_PAGE}?redirect=${encodeURIComponent("/pages/about/about?a=1&b=2")}`
      });
    }
    function gotoTabbar() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    function setTabbarBadge() {
      tabbar_store.tabbarStore.setTabbarItemBadge(1, 100);
    }
    function gotoAlova() {
      common_vendor.index.navigateTo({
        url: "/pages/about/alova"
      });
    }
    function gotoVueQuery() {
      common_vendor.index.navigateTo({
        url: "/pages/about/vue-query"
      });
    }
    function gotoSubPage() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/demo/index"
      });
    }
    const uniLayout = common_vendor.ref();
    common_vendor.onLoad(() => {
      console.log("onLoad:", uniLayout.value);
    });
    common_vendor.onReady(() => {
      console.log("onReady:", uniLayout.value);
      console.log("onReady:", uniLayout.value.testUniLayoutExposedData);
    });
    common_vendor.onShow(() => {
      var _a;
      console.log("onShow:", uniLayout.value);
      console.log("onShow:", (_a = uniLayout.value) == null ? void 0 : _a.testUniLayoutExposedData);
    });
    const uniKuRoot = common_vendor.ref();
    common_vendor.onReady(() => {
      var _a;
      console.log("onReady uniKuRoot exposeRef", (_a = uniKuRoot.value) == null ? void 0 : _a.exposeRef);
    });
    common_vendor.onShow(() => {
      var _a;
      console.log("onShow uniKuRoot exposeRef", (_a = uniKuRoot.value) == null ? void 0 : _a.exposeRef);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o(gotoLogin),
        c: common_vendor.o(setTabbarBadge),
        d: common_vendor.o(($event) => gotoI18nPage()),
        e: common_vendor.o(gotoAlova),
        f: common_vendor.o(gotoTabbar),
        g: common_vendor.o(gotoVueQuery),
        h: common_vendor.o(gotoSubPage),
        i: common_vendor.sr(uniLayout, "c52c3734-1,c52c3734-0", {
          "k": "uniLayout"
        }),
        j: common_vendor.sr(uniKuRoot, "c52c3734-0", {
          "k": "uniKuRoot"
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
