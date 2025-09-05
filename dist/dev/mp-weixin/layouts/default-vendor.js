"use strict";
const common_vendor = require("../common/vendor.js");
const tabbar_i18n = require("../tabbar/i18n.js");
const utils_index = require("../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "default",
  setup(__props) {
    common_vendor.onShow(() => {
      console.log("layout default - onShow");
      common_vendor.index.setNavigationBarTitle({
        title: tabbar_i18n.getI18nText(utils_index.getCurrentPageI18nKey())
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
exports._sfc_main = _sfc_main;
