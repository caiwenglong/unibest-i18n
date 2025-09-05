"use strict";
var __defProp = Object.defineProperty;
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
const common_vendor = require("../common/vendor.js");
const useThemeStore = common_vendor.defineStore(
  "theme-store",
  () => {
    const theme = common_vendor.ref("light");
    const themeVars = common_vendor.ref({
      // colorTheme: 'red',
      // buttonPrimaryBgColor: '#07c160',
      // buttonPrimaryColor: '#07c160',
    });
    const setThemeVars = (partialVars) => {
      themeVars.value = __spreadValues(__spreadValues({}, themeVars.value), partialVars);
    };
    const toggleTheme = () => {
      theme.value = theme.value === "light" ? "dark" : "light";
    };
    return {
      /** 设置主题变量 */
      setThemeVars,
      /** 切换主题 */
      toggleTheme,
      /** 主题变量 */
      themeVars,
      /** 主题 */
      theme
    };
  },
  {
    persist: true
  }
);
exports.useThemeStore = useThemeStore;
