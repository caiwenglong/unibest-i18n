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
require("../store/index.js");
const utils_index = require("../utils/index.js");
const utils_platform = require("../utils/platform.js");
const http_tools_queryString = require("./tools/queryString.js");
const store_user = require("../store/user.js");
const baseUrl = utils_index.getEnvBaseUrl();
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    if (options.query) {
      const queryStr = http_tools_queryString.stringifyQuery(options.query);
      if (options.url.includes("?")) {
        options.url += `&${queryStr}`;
      } else {
        options.url += `?${queryStr}`;
      }
    }
    if (!options.url.startsWith("http")) {
      options.url = baseUrl + options.url;
    }
    options.timeout = 6e4;
    options.header = __spreadValues({
      platform: utils_platform.platform
    }, options.header);
    const userStore = store_user.useUserStore();
    const { token } = userStore.userInfo;
    if (token) {
      options.header.Authorization = `Bearer ${token}`;
    }
  }
};
const requestInterceptor = {
  install() {
    common_vendor.index.addInterceptor("request", httpInterceptor);
    common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
  }
};
exports.requestInterceptor = requestInterceptor;
