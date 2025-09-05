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
const common_vendor = require("../../common/vendor.js");
const api_foo = require("../../api/foo.js");
const api_fooVueQuery = require("../../api/foo-vue-query.js");
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_component_layout_default_uni + _component_global_ku_root)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "vue-query",
  setup(__props) {
    common_vendor.onShow(() => __async(this, null, function* () {
      const res = yield api_foo.foo();
      console.log("res: ", res);
    }));
    const {
      data,
      error,
      isLoading: loading,
      refetch: send
    } = common_vendor.useQuery(api_fooVueQuery.getFooQueryOptions("菲鸽-vue-query"));
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(send) && common_vendor.unref(send)(...args)
        ),
        b: common_vendor.unref(loading)
      }, common_vendor.unref(loading) ? {} : {
        c: common_vendor.t(JSON.stringify(common_vendor.unref(data)))
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f36ecf15"]]);
wx.createPage(MiniProgramPage);
