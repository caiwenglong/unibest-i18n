"use strict";
const common_vendor = require("../common/vendor.js");
const locale_index = require("../locale/index.js");
function testI18n() {
  common_vendor.index.showModal({
    title: "i18n 测试",
    content: locale_index.t("i18n.title")
  });
}
exports.testI18n = testI18n;
