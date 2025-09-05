"use strict";
const common_vendor = require("./common/vendor.js");
const locale_index = require("./locale/index.js");
const tabbar_i18n = require("./tabbar/i18n.js");
const utils_i18n = require("./utils/i18n.js");
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_component_layout_default_uni + _component_global_ku_root)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "i18n",
  setup(__props) {
    const current = common_vendor.ref(common_vendor.index.getLocale());
    const user = { name: "张三", detail: { height: 178, weight: "75kg" } };
    const languages = [
      {
        value: "zh-Hans",
        name: "中文",
        checked: "true"
      },
      {
        value: "en",
        name: "英文"
      }
    ];
    function radioChange(evt) {
      current.value = evt.detail.value;
      common_vendor.index.setLocale(evt.detail.value);
      locale_index.i18n.global.locale = evt.detail.value;
      tabbar_i18n.setTabbarItem();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.$t("i18n.title")),
        b: common_vendor.t(_ctx.$t("weight", {
          heavy: 100
        })),
        c: common_vendor.t(_ctx.$t("weight", {
          heavy: 100
        })),
        d: common_vendor.t(common_vendor.unref(locale_index.t)("weight", {
          heavy: 100
        })),
        e: common_vendor.t(common_vendor.unref(locale_index.t)("weight", {
          heavy: 100
        })),
        f: common_vendor.t(common_vendor.unref(locale_index.t)("introduction", user)),
        g: common_vendor.f(languages, (item, k0, i0) => {
          return {
            a: item.value,
            b: item.value === common_vendor.unref(current),
            c: common_vendor.t(item.name),
            d: item.value
          };
        }),
        h: common_vendor.o(radioChange),
        i: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(utils_i18n.testI18n) && common_vendor.unref(utils_i18n.testI18n)(...args)
        )
      };
    };
  }
});
exports._sfc_main = _sfc_main;
