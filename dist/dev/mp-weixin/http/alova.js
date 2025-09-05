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
const common_vendor = require("../common/vendor.js");
require("../router/config.js");
const http_tools_enum = require("./tools/enum.js");
const API_DOMAINS = {
  SECONDARY: "https://ukw0y1.laf.run"
};
const { onAuthRequired, onResponseRefreshToken } = common_vendor.createServerTokenAuthentication({
  refreshTokenOnError: {
    isExpired: (error) => {
      var _a;
      return ((_a = error.response) == null ? void 0 : _a.status) === http_tools_enum.ResultEnum.Unauthorized;
    },
    handler: () => __async(exports, null, function* () {
    })
  }
});
const alovaInstance = common_vendor.createAlova(__spreadProps(__spreadValues({
  baseURL: "/api"
}, common_vendor.AdapterUniapp()), {
  timeout: 5e3,
  statesHook: common_vendor.vue,
  beforeRequest: onAuthRequired((method) => {
    var _a, _b;
    method.config.headers = __spreadValues({
      ContentType: http_tools_enum.ContentTypeEnum.JSON,
      Accept: "application/json, text/plain, */*"
    }, method.config.headers);
    const { config } = method;
    const ignoreAuth = !((_a = config.meta) == null ? void 0 : _a.ignoreAuth);
    console.log("ignoreAuth===>", ignoreAuth);
    if ((_b = config.meta) == null ? void 0 : _b.domain) {
      method.baseURL = config.meta.domain;
      console.log("当前域名", method.baseURL);
    }
  }),
  responded: onResponseRefreshToken((response, method) => {
    var _a;
    const { config } = method;
    const { requestType } = config;
    const {
      statusCode,
      data: rawData,
      errMsg
    } = response;
    if (requestType === "upload" || requestType === "download") {
      return response;
    }
    if (statusCode !== 200) {
      const errorMessage = http_tools_enum.ShowMessage(statusCode) || `HTTP请求错误[${statusCode}]`;
      console.error("errorMessage===>", errorMessage);
      common_vendor.index.showToast({
        title: errorMessage,
        icon: "error"
      });
      throw new Error(`${errorMessage}：${errMsg}`);
    }
    const { code, message, data } = rawData;
    if (code !== http_tools_enum.ResultEnum.Success) {
      if (((_a = config.meta) == null ? void 0 : _a.toast) !== false) {
        common_vendor.index.showToast({
          title: message,
          icon: "none"
        });
      }
      throw new Error(`请求错误[${code}]：${message}`);
    }
    return data;
  })
}));
const http = alovaInstance;
exports.API_DOMAINS = API_DOMAINS;
exports.http = http;
