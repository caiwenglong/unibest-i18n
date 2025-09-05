"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const router_config = require("../../router/config.js");
require("../../store/index.js");
const utils_systemInfo = require("../../utils/systemInfo.js");
const store_theme = require("../../store/theme.js");
if (!Array) {
  const _easycom_wd_button2 = common_vendor.resolveComponent("wd-button");
  const _component_tabbar = common_vendor.resolveComponent("tabbar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_easycom_wd_button2 + _component_tabbar + _component_layout_default_uni + _component_global_ku_root)();
}
const _easycom_wd_button = () => "../../node-modules/wot-design-uni/components/wd-button/wd-button.js";
if (!Math) {
  _easycom_wd_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, {
  name: "Home"
}), {
  __name: "index",
  setup(__props) {
    const themeStore = store_theme.useThemeStore();
    common_vendor.ref("菲鸽");
    const description = common_vendor.ref(
      "unibest 是一个集成了多种工具和技术的 uniapp 开发模板，由 uniapp + Vue3 + Ts + Vite5 + UnoCss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uniapp 拥有 best 体验。"
    );
    console.log("index/index 首页打印了");
    common_vendor.onLoad(() => {
      console.log("测试 uni API 自动引入: onLoad");
    });
    function toLogin() {
      common_vendor.index.navigateTo({
        url: router_config.LOGIN_PAGE
      });
    }
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(common_vendor.unref(description)),
        c: common_vendor.o(($event) => common_vendor.unref(themeStore).setThemeVars({
          colorTheme: "red"
        })),
        d: common_vendor.p({
          type: "primary"
        }),
        e: common_vendor.o(toLogin),
        f: `${(_a = common_vendor.unref(utils_systemInfo.safeAreaInsets)) == null ? void 0 : _a.top}px`
      };
    };
  }
}));
wx.createPage(_sfc_main);
