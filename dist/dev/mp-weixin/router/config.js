"use strict";
const utils_index = require("../utils/index.js");
const LOGIN_PAGE = "/pages/login/login";
const excludeLoginPathList = utils_index.getAllPages("excludeLoginPath").map((page) => page.path);
const EXCLUDE_LOGIN_PATH_LIST = [
  "/pages/xxx/index",
  ...excludeLoginPathList
  // 都是以 / 开头的 path
];
exports.EXCLUDE_LOGIN_PATH_LIST = EXCLUDE_LOGIN_PATH_LIST;
exports.LOGIN_PAGE = LOGIN_PAGE;
