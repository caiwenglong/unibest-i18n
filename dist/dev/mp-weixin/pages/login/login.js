"use strict";
const common_vendor = require("../../common/vendor.js");
const store_token = require("../../store/token.js");
const store_user = require("../../store/user.js");
const tabbar_config = require("../../tabbar/config.js");
const tabbar_store = require("../../tabbar/store.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  const _component_global_ku_root = common_vendor.resolveComponent("global-ku-root");
  (_component_layout_default_uni + _component_global_ku_root)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const redirectUrl = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      console.log("login options: ", options);
      if (options.redirect) {
        redirectUrl.value = utils_index.ensureDecodeURIComponent(options.redirect);
      } else {
        redirectUrl.value = tabbar_config.tabbarList[0].pagePath;
      }
      console.log("redirectUrl.value: ", redirectUrl.value);
    });
    const userStore = store_user.useUserStore();
    const tokenStore = store_token.useTokenStore();
    function doLogin() {
      if (tokenStore.hasLogin) {
        common_vendor.index.navigateBack();
        return;
      }
      userStore.setUserInfo({
        userId: 123456,
        username: "abc123456",
        nickname: "菲鸽",
        avatar: "https://oss.laf.run/ukw0y1-site/avatar.jpg"
      });
      tokenStore.setTokenInfo({
        token: "123456",
        expiresIn: 60 * 60 * 24 * 7
      });
      console.log(redirectUrl.value);
      let path = redirectUrl.value;
      if (!path.startsWith("/")) {
        path = `/${path}`;
      }
      const { path: _path, query } = utils_index.parseUrlToObj(path);
      console.log("_path:", _path, "query:", query, "path:", path);
      console.log("isPageTabbar(_path):", tabbar_store.isPageTabbar(_path));
      if (tabbar_store.isPageTabbar(_path)) {
        common_vendor.index.switchTab({
          url: path
        });
      } else {
        console.log("redirectTo:", path);
        common_vendor.index.redirectTo({
          url: path
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(doLogin)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cdfe2409"]]);
wx.createPage(MiniProgramPage);
