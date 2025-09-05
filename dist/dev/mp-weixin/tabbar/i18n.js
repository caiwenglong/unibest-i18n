"use strict";
require("../common/vendor.js");
const locale_index = require("../locale/index.js");
const utils_index = require("../utils/index.js");
const tabbar_config = require("./config.js");
function getI18nText(key) {
  const match = key.match(/%(.+?)%/);
  if (match) {
    key = match[1];
  }
  console.log("设置多语言：", key);
  return locale_index.t(key);
}
function setTabbarItem() {
  console.log("设置多语言：setTabBarItem", tabbar_config.isNativeTabbar, utils_index.isCurrentPageTabbar());
}
exports.getI18nText = getI18nText;
exports.setTabbarItem = setTabbarItem;
