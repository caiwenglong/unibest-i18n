"use strict";
const TABBAR_STRATEGY_MAP = {
  NATIVE_TABBAR: 1,
  CUSTOM_TABBAR_WITH_CACHE: 2,
  CUSTOM_TABBAR_WITHOUT_CACHE: 3
};
const selectedTabbarStrategy = TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_CACHE;
const nativeTabbarList = [
  {
    iconPath: "static/tabbar/home.png",
    selectedIconPath: "static/tabbar/homeHL.png",
    pagePath: "pages/index/index",
    text: "%tabbar.home%"
  },
  {
    iconPath: "static/tabbar/example.png",
    selectedIconPath: "static/tabbar/exampleHL.png",
    pagePath: "pages/about/about",
    text: "%tabbar.about%"
  },
  {
    iconPath: "static/tabbar/personal.png",
    selectedIconPath: "static/tabbar/personalHL.png",
    pagePath: "pages/me/me",
    text: "%tabbar.me%"
  }
];
const customTabbarList = [
  {
    text: "%tabbar.home%",
    pagePath: "pages/index/index",
    // pagePath 是两者的关联点
    // 本框架内置了 uniapp 官方UI库 （uni-ui)的图标库
    // 使用方式如：<uni-icons type="home" size="30"/>
    // 图标列表地址：https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html
    iconType: "uniUi",
    icon: "home"
    // badge: 'dot',
  },
  {
    text: "%tabbar.about%",
    pagePath: "pages/about/about",
    // 注意 unocss 图标需要如下处理：（二选一）
    // 1）在fg-tabbar.vue页面上引入一下并注释掉（见tabbar/index.vue代码第2行）
    // 2）配置到 unocss.config.ts 的 safelist 中
    iconType: "unocss",
    icon: "i-carbon-code"
    // badge: 10,
  },
  {
    pagePath: "pages/me/me",
    text: "%tabbar.me%",
    iconType: "uniUi",
    icon: "contact"
    // badge: 100,
  }
  // 其他类型演示
  // 1、uiLib
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   iconType: 'uiLib',
  //   icon: 'home',
  // },
  // 2、iconfont
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   // 注意 iconfont 图标需要额外加上 'iconfont'，如下
  //   iconType: 'iconfont',
  //   icon: 'iconfont icon-my',
  // },
  // 3、image
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   // 使用 ‘image’时，需要配置 icon + iconActive 2张图片
  //   iconType: 'image',
  //   icon: '/static/tabbar/home.png',
  //   iconActive: '/static/tabbar/homeHL.png',
  // },
];
const tabbarCacheEnable = [TABBAR_STRATEGY_MAP.NATIVE_TABBAR, TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_CACHE].includes(selectedTabbarStrategy);
const customTabbarEnable = [TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_CACHE, TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_CACHE].includes(selectedTabbarStrategy);
customTabbarEnable ? customTabbarList.map((item) => ({ text: item.text, pagePath: item.pagePath })) : nativeTabbarList;
const tabbarList = customTabbarEnable ? customTabbarList : nativeTabbarList;
const isNativeTabbar = selectedTabbarStrategy === TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
exports.customTabbarEnable = customTabbarEnable;
exports.isNativeTabbar = isNativeTabbar;
exports.tabbarCacheEnable = tabbarCacheEnable;
exports.tabbarList = tabbarList;
