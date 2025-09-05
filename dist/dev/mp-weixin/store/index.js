"use strict";
const common_vendor = require("../common/vendor.js");
require("./theme.js");
require("./user.js");
const store = common_vendor.createPinia();
store.use(
  common_vendor.createPersistedState({
    storage: {
      getItem: common_vendor.index.getStorageSync,
      setItem: common_vendor.index.setStorageSync
    }
  })
);
exports.store = store;
