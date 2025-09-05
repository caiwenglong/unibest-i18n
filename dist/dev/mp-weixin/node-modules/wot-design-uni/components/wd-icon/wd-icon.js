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
  name: "wd-icon",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.iconProps,
  emits: ["click", "touch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isImage = common_vendor.computed(() => {
      return common_vendor.isDef(props.name) && props.name.includes("/");
    });
    const rootClass = common_vendor.computed(() => {
      const prefix = props.classPrefix;
      return `${prefix} ${props.customClass} ${isImage.value ? "wd-icon--image" : prefix + "-" + props.name}`;
    });
    const rootStyle = common_vendor.computed(() => {
      const style = {};
      if (props.color) {
        style["color"] = props.color;
      }
      if (props.size) {
        style["font-size"] = common_vendor.addUnit(props.size);
      }
      return `${common_vendor.objToStyle(style)} ${props.customStyle}`;
    });
    function handleClick(event) {
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isImage.value
      }, isImage.value ? {
        b: _ctx.name
      } : {}, {
        c: common_vendor.o(handleClick),
        d: common_vendor.n(rootClass.value),
        e: common_vendor.s(rootStyle.value)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d4a8410a"]]);
wx.createComponent(Component);
