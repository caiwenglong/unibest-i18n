"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_foo = require("../../../api/foo.js");
const hooks_useRequest = require("../../../hooks/useRequest.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "request",
  setup(__props) {
    common_vendor.ref("http://laf.run/signup?code=ohaOgIX");
    const initialData = void 0;
    const { loading, data, run } = hooks_useRequest.useRequest(() => api_foo.getFooAPI("菲鸽"), {
      immediate: true,
      initialData
    });
    function reset() {
      data.value = initialData;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(run) && common_vendor.unref(run)(...args)
        ),
        b: common_vendor.unref(loading)
      }, common_vendor.unref(loading) ? {} : {
        c: common_vendor.t(JSON.stringify(common_vendor.unref(data)))
      }, {
        d: !common_vendor.unref(data),
        e: common_vendor.o(reset)
      });
    };
  }
});
exports._sfc_main = _sfc_main;
