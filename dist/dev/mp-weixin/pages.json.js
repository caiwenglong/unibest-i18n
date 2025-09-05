"use strict";
const pages = [
  {
    path: "pages/index/index",
    type: "home",
    style: {
      navigationStyle: "custom",
      navigationBarTitleText: "%tabbar.home%"
    }
  },
  {
    path: "pages/about/about",
    type: "page",
    style: {
      navigationBarTitleText: "%tabbar.about%"
    },
    excludeLoginPath: false
  },
  {
    path: "pages/about/alova",
    type: "page",
    style: {
      navigationBarTitleText: "%alova.title%"
    }
  },
  {
    path: "pages/about/i18n",
    type: "page",
    style: {
      navigationBarTitleText: "%i18n.title%"
    }
  },
  {
    path: "pages/about/vue-query",
    type: "page",
    style: {
      navigationBarTitleText: "Vue Query 演示"
    }
  },
  {
    path: "pages/login/login",
    type: "page",
    style: {
      navigationBarTitleText: "登录"
    }
  },
  {
    path: "pages/login/register",
    type: "page",
    style: {
      navigationBarTitleText: "注册"
    }
  },
  {
    path: "pages/me/me",
    type: "page",
    style: {
      navigationBarTitleText: "我的"
    }
  }
];
const subPackages = [
  {
    root: "pages-sub",
    pages: [
      {
        path: "demo/index",
        type: "page",
        style: {
          navigationBarTitleText: "分包页面"
        }
      }
    ]
  }
];
exports.pages = pages;
exports.subPackages = subPackages;
