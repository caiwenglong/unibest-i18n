"use strict";
const http_alova = require("../http/alova.js");
function foo() {
  return http_alova.http.Get("/foo", {
    params: {
      name: "菲鸽",
      page: 1,
      pageSize: 10
    },
    meta: { domain: http_alova.API_DOMAINS.SECONDARY }
    // 用于切换请求地址
  });
}
exports.foo = foo;
