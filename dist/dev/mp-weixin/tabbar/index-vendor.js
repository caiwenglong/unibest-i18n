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
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const tabbar_config = require("./config.js");
const tabbar_i18n = require("./i18n.js");
const tabbar_store = require("./store.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_wd_icon2 = common_vendor.resolveComponent("wd-icon");
  (_easycom_uni_icons2 + _easycom_wd_icon2)();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_wd_icon = () => "../node-modules/wot-design-uni/components/wd-icon/wd-icon.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_wd_icon)();
}
const activeColor = "var(--wot-color-theme, #1890ff)";
const inactiveColor = "#666";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, {
  virtualHost: true
}), {
  __name: "index",
  setup(__props) {
    function handleClickBulge() {
      common_vendor.index.showToast({
        title: "点击了中间的鼓包tabbarItem",
        icon: "none"
      });
    }
    function handleClick(index) {
      if (index === tabbar_store.tabbarStore.curIdx) {
        return;
      }
      if (tabbar_store.tabbarList[index].isBulge) {
        handleClickBulge();
        return;
      }
      const url = tabbar_store.tabbarList[index].pagePath;
      tabbar_store.tabbarStore.setCurIdx(index);
      if (tabbar_config.tabbarCacheEnable) {
        common_vendor.index.switchTab({ url });
      } else {
        common_vendor.index.navigateTo({ url });
      }
    }
    function getColorByIndex(index) {
      return tabbar_store.tabbarStore.curIdx === index ? activeColor : inactiveColor;
    }
    function getImageByIndex(index, item) {
      if (!item.iconActive) {
        console.warn("image 模式下，需要配置 iconActive (高亮时的图片），否则无法切换高亮图片");
        return item.icon;
      }
      return tabbar_store.tabbarStore.curIdx === index ? item.iconActive : item.icon;
    }
    common_vendor.onShow(() => {
      tabbar_i18n.setTabbarItem();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(tabbar_config.customTabbarEnable)
      }, common_vendor.unref(tabbar_config.customTabbarEnable) ? {
        b: common_vendor.f(common_vendor.unref(tabbar_store.tabbarList), (item, index, i0) => {
          return common_vendor.e({
            a: item.isBulge
          }, item.isBulge ? {
            b: common_assets._imports_0
          } : common_vendor.e({
            c: item.iconType === "uniUi"
          }, item.iconType === "uniUi" ? {
            d: "f0a0c94b-0-" + i0,
            e: common_vendor.p({
              type: item.icon,
              size: "20",
              color: getColorByIndex(index)
            })
          } : {}, {
            f: item.iconType === "uiLib"
          }, item.iconType === "uiLib" ? {
            g: "f0a0c94b-1-" + i0,
            h: common_vendor.p({
              name: item.icon,
              size: "20"
            })
          } : {}, {
            i: item.iconType === "unocss" || item.iconType === "iconfont"
          }, item.iconType === "unocss" || item.iconType === "iconfont" ? {
            j: common_vendor.n(item.icon)
          } : {}, {
            k: item.iconType === "image"
          }, item.iconType === "image" ? {
            l: getImageByIndex(index, item)
          } : {}, {
            m: common_vendor.t(common_vendor.unref(tabbar_i18n.getI18nText)(item.text)),
            n: item.badge
          }, item.badge ? common_vendor.e({
            o: item.badge === "dot"
          }, item.badge === "dot" ? {} : {
            p: common_vendor.t(item.badge > 99 ? "99+" : item.badge)
          }) : {}), {
            q: index,
            r: getColorByIndex(index),
            s: common_vendor.o(($event) => handleClick(index), index)
          });
        }),
        c: common_vendor.o(() => {
        })
      } : {});
    };
  }
}));
exports._sfc_main = _sfc_main;
