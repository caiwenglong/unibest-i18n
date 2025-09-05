"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const AppVendor = require("./App-vendor.js");
const http_interceptor = require("./http/interceptor.js");
const locale_index = require("./locale/index.js");
const router_interceptor = require("./router/interceptor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/about/about.js";
  "./pages/about/alova.js";
  "./pages/about/i18n.js";
  "./pages/about/vue-query.js";
  "./pages/login/login.js";
  "./pages/login/register.js";
  "./pages/me/me.js";
  "./pages-sub/demo/index.js";
}
const GlobalKuRoot = () => "./App.ku.js";
function createApp() {
  const app = common_vendor.createSSRApp(AppVendor._sfc_main);
  app.use(store_index.store);
  app.use(locale_index.i18n);
  app.use(router_interceptor.routeInterceptor);
  app.use(http_interceptor.requestInterceptor);
  app.use(common_vendor.VueQueryPlugin);
  app.component("layout-default-uni", Layout_Default_Uni);
  app.component("global-ku-root", GlobalKuRoot);
  return {
    app
  };
}
const Layout_Default_Uni = () => "./layouts/default.js";
createApp().app.mount("#app");
exports.createApp = createApp;
