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
const store_token = require("../store/token.js");
const tabbar_store = require("../tabbar/store.js");
const utils_index = require("../utils/index.js");
const router_config = require("./config.js");
function judgeIsExcludePath(path) {
  const allExcludeLoginPages = utils_index.getAllPages("excludeLoginPath");
  return router_config.EXCLUDE_LOGIN_PATH_LIST.includes(path) || allExcludeLoginPages.some((page) => page.path === path);
}
const navigateToInterceptor = {
  // 注意，这里的url是 '/' 开头的，如 '/pages/index/index'，跟 'pages.json' 里面的 path 不同
  // 增加对相对路径的处理，BY 网友 @ideal
  invoke({ url, query }) {
    var _a;
    if (url === void 0) {
      return;
    }
    let { path, query: _query } = utils_index.parseUrlToObj(url);
    const myQuery = __spreadValues(__spreadValues({}, _query), query);
    if (!path.startsWith("/")) {
      const currentPath = ((_a = utils_index.getLastPage()) == null ? void 0 : _a.route) || "";
      const normalizedCurrentPath = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;
      const baseDir = normalizedCurrentPath.substring(0, normalizedCurrentPath.lastIndexOf("/"));
      path = `${baseDir}/${path}`;
    }
    tabbar_store.tabbarStore.setAutoCurIdx(path);
    const tokenStore = store_token.useTokenStore();
    if (tokenStore.hasLogin) {
      if (path !== router_config.LOGIN_PAGE) {
        return true;
      } else {
        console.log("已经登录，但是还在登录页", myQuery.redirect);
        const url2 = myQuery.redirect || utils_index.HOME_PAGE;
        if (tabbar_store.isPageTabbar(url2)) {
          common_vendor.index.switchTab({ url: url2 });
        } else {
          common_vendor.index.navigateTo({ url: url2 });
        }
        return true;
      }
    }
    let fullPath = path;
    if (myQuery) {
      fullPath += `?${Object.keys(myQuery).map((key) => `${key}=${myQuery[key]}`).join("&")}`;
    }
    const redirectUrl = `${router_config.LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`;
    {
      if (judgeIsExcludePath(path)) {
        const { path: path2, query: query2 } = utils_index.parseUrlToObj(redirectUrl);
        if (path2 === router_config.LOGIN_PAGE) {
          console.log("path:", path2);
          console.log("query:", query2);
          common_vendor.index.navigateTo({ url: query2.redirect });
          return false;
        }
        common_vendor.index.navigateTo({ url: redirectUrl });
        return false;
      }
    }
    return true;
  }
};
const routeInterceptor = {
  install() {
    common_vendor.index.addInterceptor("navigateTo", navigateToInterceptor);
    common_vendor.index.addInterceptor("reLaunch", navigateToInterceptor);
    common_vendor.index.addInterceptor("redirectTo", navigateToInterceptor);
    common_vendor.index.addInterceptor("switchTab", navigateToInterceptor);
  }
};
exports.navigateToInterceptor = navigateToInterceptor;
exports.routeInterceptor = routeInterceptor;
