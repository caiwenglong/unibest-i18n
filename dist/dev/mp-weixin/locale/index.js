"use strict";
const common_vendor = require("../common/vendor.js");
const locale_en_json = require("./en.json.js");
const locale_zhHans_json = require("./zh-Hans.json.js");
const messages = {
  en: locale_en_json.en,
  "zh-Hans": locale_zhHans_json.zhHans
  // key 不能乱写，查看截图 screenshots/i18n.png
};
const i18n = common_vendor.createI18n({
  locale: common_vendor.index.getLocale(),
  // 获取已设置的语言，fallback 语言需要再 manifest.config.ts 中设置
  messages
});
console.log(common_vendor.index.getLocale());
console.log(i18n.global.locale);
function getTemplateByKey(key) {
  if (!key) {
    console.error(`[i18n] Function getTemplateByKey(), key param is required`);
    return "";
  }
  const locale = common_vendor.index.getLocale();
  console.log("locale:", locale);
  const message = messages[locale];
  if (Object.keys(message).includes(key)) {
    return message[key];
  }
  try {
    const keyList = key.split(".");
    return keyList.reduce((pre, cur) => {
      return pre[cur];
    }, message);
  } catch (error) {
    console.error(`[i18n] Function getTemplateByKey(), key param ${key} is not existed.`);
    return "";
  }
}
function formatI18n(template, data) {
  return template.replace(/\{([^}]+)\}/g, (match, key) => {
    const arr = key.trim().split(".");
    let result = data;
    while (arr.length) {
      const first = arr.shift();
      result = result[first];
    }
    return result;
  });
}
function t(key, data) {
  return formatI18n(getTemplateByKey(key), data);
}
exports.i18n = i18n;
exports.t = t;
