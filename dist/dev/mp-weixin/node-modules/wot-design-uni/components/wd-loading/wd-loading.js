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
  name: "wd-loading",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.loadingProps,
  setup(__props) {
    const svgDefineId = common_vendor.context.id++;
    const svgDefineId1 = common_vendor.context.id++;
    const svgDefineId2 = common_vendor.context.id++;
    const icon = {
      outline(color = "#4D80F0") {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${svgDefineId}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${color}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${svgDefineId}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`;
      },
      ring(color = "#4D80F0", intermediateColor2 = "#a6bff7") {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${svgDefineId1}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${color}"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId1})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${svgDefineId2}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId2})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${color}"></circle></svg>`;
      }
    };
    const props = __props;
    const svg = common_vendor.ref("");
    const intermediateColor = common_vendor.ref("");
    const iconSize = common_vendor.ref(null);
    common_vendor.watch(
      () => props.size,
      (newVal) => {
        iconSize.value = common_vendor.addUnit(newVal);
      },
      {
        deep: true,
        immediate: true
      }
    );
    common_vendor.watch(
      () => props.type,
      () => {
        buildSvg();
      },
      {
        deep: true,
        immediate: true
      }
    );
    const rootStyle = common_vendor.computed(() => {
      const style = {};
      if (common_vendor.isDef(iconSize.value)) {
        style.height = common_vendor.addUnit(iconSize.value);
        style.width = common_vendor.addUnit(iconSize.value);
      }
      return `${common_vendor.objToStyle(style)} ${props.customStyle}`;
    });
    common_vendor.onBeforeMount(() => {
      intermediateColor.value = common_vendor.gradient(props.color, "#ffffff", 2)[1];
      buildSvg();
    });
    function buildSvg() {
      const { type, color } = props;
      let ringType = common_vendor.isDef(type) ? type : "ring";
      const svgStr = `"data:image/svg+xml;base64,${common_vendor.encode(ringType === "ring" ? icon[ringType](color, intermediateColor.value) : icon[ringType](color))}"`;
      svg.value = svgStr;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(`background-image: url(${svg.value});`),
        b: common_vendor.n(`wd-loading ${props.customClass}`),
        c: common_vendor.s(rootStyle.value)
      };
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eccc123e"]]);
wx.createComponent(Component);
