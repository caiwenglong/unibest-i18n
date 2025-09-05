"use strict";
const http_http = require("../http/http.js");
function foo() {
  return http_http.http.Get("/foo", {
    params: {
      name: "菲鸽",
      page: 1,
      pageSize: 10
    }
  });
}
function getFooAPI(name) {
  return http_http.http.get("/foo", { name });
}
exports.foo = foo;
exports.getFooAPI = getFooAPI;
