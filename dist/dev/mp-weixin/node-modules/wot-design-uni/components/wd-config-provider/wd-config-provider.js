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
const common_vendor = require("../../../../common/vendor.js");
const __default__ = {
  name: "wd-config-provider",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.configProviderProps,
  setup(__props) {
    const props = __props;
    const themeClass = common_vendor.computed(() => {
      return `wot-theme-${props.theme} ${props.customClass}`;
    });
    const themeStyle = common_vendor.computed(() => {
      const styleObj = mapThemeVarsToCSSVars(props.themeVars);
      return styleObj ? `${common_vendor.objToStyle(styleObj)}${props.customStyle}` : props.customStyle;
    });
    const kebabCase = (str) => {
      str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
      return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + "-" + p2.toLowerCase());
    };
    const mapThemeVarsToCSSVars = (themeVars) => {
      if (!themeVars)
        return;
      const cssVars = {};
      Object.keys(themeVars).forEach((key) => {
        cssVars[`--wot-${kebabCase(key)}`] = themeVars[key];
      });
      return cssVars;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(themeClass.value),
        b: common_vendor.s(themeStyle.value)
      };
    };
  }
}));
wx.createComponent(_sfc_main);
