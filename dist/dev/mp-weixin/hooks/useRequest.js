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
function useRequest(func, options = { immediate: false }) {
  const loading = common_vendor.ref(false);
  const error = common_vendor.ref(false);
  const data = common_vendor.ref(options.initialData);
  const run = () => __async(this, null, function* () {
    loading.value = true;
    return func().then((res) => {
      data.value = res.data;
      error.value = false;
      return data.value;
    }).catch((err) => {
      error.value = err;
      throw err;
    }).finally(() => {
      loading.value = false;
    });
  });
  options.immediate && run();
  return { loading, error, data, run };
}
exports.useRequest = useRequest;
