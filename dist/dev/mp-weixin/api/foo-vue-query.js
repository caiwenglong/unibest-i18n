"use strict";
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
const api_foo = require("./foo.js");
function getFooQueryOptions(name) {
  return common_vendor.queryOptions({
    queryFn: (_0) => __async(this, [_0], function* ({ queryKey }) {
      return api_foo.getFooAPI(queryKey[1]);
    }),
    queryKey: ["getFoo", name]
  });
}
exports.getFooQueryOptions = getFooQueryOptions;
