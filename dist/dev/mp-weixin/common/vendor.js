"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _focused, _cleanup, _setup, _a, _online, _cleanup2, _setup2, _b, _gcTimeout, _c, _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, _dispatch, dispatch_fn, _d, _queries, _e, _observers, _mutationCache, _retryer2, _dispatch2, dispatch_fn2, _f, _mutations, _scopes, _mutationId, _g, _queryCache, _mutationCache2, _defaultOptions2, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline, _h, _client2, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _executeFetch, executeFetch_fn, _updateStaleTimeout, updateStaleTimeout_fn, _computeRefetchInterval, computeRefetchInterval_fn, _updateRefetchInterval, updateRefetchInterval_fn, _updateTimers, updateTimers_fn, _clearStaleTimeout, clearStaleTimeout_fn, _clearRefetchInterval, clearRefetchInterval_fn, _updateQuery, updateQuery_fn, _notify, notify_fn, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap(str, expectsLowerCase) {
  const set2 = new Set(str.split(","));
  return (val) => set2.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const isOn = (key2) => key2.charCodeAt(0) === 111 && key2.charCodeAt(1) === 110 && // uppercase letter
(key2.charCodeAt(2) > 122 || key2.charCodeAt(2) < 97);
const isModelListener = (key2) => key2.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$3 = Object.prototype.hasOwnProperty;
const hasOwn$2 = (val, key2) => hasOwnProperty$3.call(val, key2);
const isArray$4 = Array.isArray;
const isMap = (val) => toTypeString$2(val) === "[object Map]";
const isSet = (val) => toTypeString$2(val) === "[object Set]";
const isFunction$4 = (val) => typeof val === "function";
const isString$4 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$4 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return (isObject$4(val) || isFunction$4(val)) && isFunction$4(val.then) && isFunction$4(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString$2 = (value) => objectToString$2.call(value);
const toRawType = (value) => {
  return toTypeString$2(value).slice(8, -1);
};
const isPlainObject$6 = (val) => toTypeString$2(val) === "[object Object]";
const isIntegerKey = (key2) => isString$4(key2) && key2 !== "NaN" && key2[0] !== "-" && "" + parseInt(key2, 10) === key2;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s2 = str ? `on${capitalize(str)}` : ``;
  return s2;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key2, value) => {
  Object.defineProperty(obj, key2, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
function normalizeStyle(value) {
  if (isArray$4(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString$4(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key2 in normalized) {
          res[key2] = normalized[key2];
        }
      }
    }
    return res;
  } else if (isString$4(value) || isObject$4(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$4(value)) {
    res = value;
  } else if (isArray$4(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$4(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString$1 = (val) => {
  return isString$4(val) ? val : val == null ? "" : isArray$4(val) || isObject$4(val) && (val.toString === objectToString$2 || !isFunction$4(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key2, val2], i2) => {
          entries[stringifySymbol(key2, i2) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$4(val) && !isArray$4(val) && !isPlainObject$6(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i2 = "") => {
  var _a2;
  return isSymbol(v) ? `Symbol(${(_a2 = v.description) != null ? _a2 : i2})` : v;
};
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_EXIT = "onExit";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_SHARE_CHAT = "onShareChat";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const VIRTUAL_HOST_STYLE = "virtualHostStyle";
const VIRTUAL_HOST_CLASS = "virtualHostClass";
const VIRTUAL_HOST_HIDDEN = "virtualHostHidden";
const VIRTUAL_HOST_ID = "virtualHostId";
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i2 = 0; i2 < fns.length; i2++) {
    ret = fns[i2](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString$4(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key2 = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key2];
  }
  return getValueByDataPath(obj[key2], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject$6(obj)) {
    Object.keys(obj).sort().forEach((key2) => {
      const _key = key2;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
const encode$1 = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode$1) {
  const res = obj ? Object.keys(obj).map((key2) => {
    let val = obj[key2];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject$6(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key2) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_EXIT,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SHARE_CHAT,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction$4(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  return createErrorHandler2(app);
});
const E = function() {
};
E.prototype = {
  _id: 1,
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx,
      _id: this._id
    });
    return this._id++;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i2 = 0;
    var len2 = evtArr.length;
    for (i2; i2 < len2; i2++) {
      evtArr[i2].fn.apply(evtArr[i2].ctx, data);
    }
    return this;
  },
  off: function(name, event) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && event) {
      for (var i2 = evts.length - 1; i2 >= 0; i2--) {
        if (evts[i2].fn === event || evts[i2].fn._ === event || evts[i2]._id === event) {
          evts.splice(i2, 1);
          break;
        }
      }
      liveEvents = evts;
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages2) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  const lang2 = startsWith(locale, locales);
  if (lang2) {
    return lang2;
  }
}
function getLocaleLanguage$1() {
  var _a2;
  let localeLanguage = "";
  {
    const appBaseInfo = ((_a2 = wx.getAppBaseInfo) === null || _a2 === void 0 ? void 0 : _a2.call(wx)) || wx.getSystemInfoSync();
    const language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key2 in protocol) {
    const errMsg = validateProp$1(key2, data[key2], protocol[key2], !hasOwn$2(data, key2));
    if (isString$4(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray$4(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len2 = protocol.length;
  const argsLen = args.length;
  for (let i2 = 0; i2 < len2; i2++) {
    const opts = protocol[i2];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i2) {
      data[opts.name] = args[i2];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject$6(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid = false;
    const types = isArray$4(type) ? type : [type];
    const expectedTypes = [];
    for (let i2 = 0; i2 < types.length && !isValid; i2++) {
      const { valid, expectedType } = assertType$1(value, types[i2]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$2(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$4(value);
  } else if (expectedType === "Array") {
    valid = isArray$4(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$2(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$2(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$2(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction$4(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject$6(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction$4(success);
  const hasFail = isFunction$4(fail);
  const hasComplete = isFunction$4(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction$4(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction$4(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue$1(hooks, data, params) {
  let promise = false;
  for (let i2 = 0; i2 < hooks.length; i2++) {
    const hook = hooks[i2];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise$1(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray$4(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$1(hooks, res, options).then((res2) => {
        return isFunction$4(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray$4(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray$4(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray$4(interceptor.invoke)) {
      const res = queue$1(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject$6(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction$4(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, extend({}, args), rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, fn, extend({}, args, { success: resolve2, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  args[0];
  {
    return;
  }
}
function invokeSuccess(id, name, res) {
  const result = {
    errMsg: name + ":ok"
  };
  return invokeCallback(id, extend(res || {}, result));
}
function invokeFail(id, name, errMsg, errRes = {}) {
  const errMsgPrefix = name + ":fail";
  let apiErrMsg = "";
  if (!errMsg) {
    apiErrMsg = errMsgPrefix;
  } else if (errMsg.indexOf(errMsgPrefix) === 0) {
    apiErrMsg = errMsg;
  } else {
    apiErrMsg = errMsgPrefix + " " + errMsg;
  }
  {
    delete errRes.errCode;
  }
  let res = extend({ errMsg: apiErrMsg }, errRes);
  return invokeCallback(id, res);
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  const errMsg = formatApiArgs(args);
  if (errMsg) {
    return errMsg;
  }
}
function parseErrMsg(errMsg) {
  if (!errMsg || isString$4(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    if (typeof globalThis === "undefined" || !globalThis.harmonyChannel) {
      console.error(errMsg.message + "\n" + errMsg.stack);
    }
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, parseErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  var _a2, _b2;
  let windowWidth, pixelRatio, platform2;
  {
    const windowInfo = ((_a2 = wx.getWindowInfo) === null || _a2 === void 0 ? void 0 : _a2.call(wx)) || wx.getSystemInfoSync();
    const deviceInfo = ((_b2 = wx.getDeviceInfo) === null || _b2 === void 0 ? void 0 : _b2.call(wx)) || wx.getSystemInfoSync();
    windowWidth = windowInfo.windowWidth;
    pixelRatio = windowInfo.pixelRatio;
    platform2 = deviceInfo.platform;
  }
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform2 === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number2, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number2 = Number(number2);
  if (number2 === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number2 / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number2 < 0 ? -result : result;
}, Upx2pxProtocol);
function __f__(type, filename, ...args) {
  if (filename) {
    args.push(filename);
  }
  console[type].apply(console, args);
}
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction$4(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray$4(hooks) && isFunction$4(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$4(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i2 = 0; i2 < hooks.length; i2++) {
    if (res.indexOf(hooks[i2]) === -1) {
      res.push(hooks[i2]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString$4(method) && isPlainObject$6(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject$6(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString$4(method)) {
    if (isPlainObject$6(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject$6(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: [Function, Number]
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
class EventBus {
  constructor() {
    this.$emitter = new E$1();
  }
  on(name, callback) {
    return this.$emitter.on(name, callback);
  }
  once(name, callback) {
    return this.$emitter.once(name, callback);
  }
  off(name, callback) {
    if (!name) {
      this.$emitter.e = {};
      return;
    }
    this.$emitter.off(name, callback);
  }
  emit(name, ...args) {
    this.$emitter.emit(name, ...args);
  }
}
const eventBus = new EventBus();
const $on = defineSyncApi(API_ON, (name, callback) => {
  eventBus.on(name, callback);
  return () => eventBus.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  eventBus.once(name, callback);
  return () => eventBus.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!isArray$4(name))
    name = name ? [name] : [];
  name.forEach((n2) => {
    eventBus.off(n2, callback);
  });
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  eventBus.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i2 = 0; i2 < onPushMessageCallbacks.length; i2++) {
      const callback = onPushMessageCallbacks[i2];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_2, { resolve: resolve2, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve2({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|__f__|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|rpx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const TASK_APIS = ["request", "downloadFile", "uploadFile", "connectSocket"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function isTaskApi(name) {
  return TASK_APIS.indexOf(name) !== -1;
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction$4(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction$4(options.success) || isFunction$4(options.fail) || isFunction$4(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, extend({}, options), rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve2,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject$6(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction$4(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key2 in fromArgs) {
        if (hasOwn$2(argsOption, key2)) {
          let keyOption = argsOption[key2];
          if (isFunction$4(keyOption)) {
            keyOption = keyOption(fromArgs[key2], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key2}`);
          } else if (isString$4(keyOption)) {
            toArgs[keyOption] = fromArgs[key2];
          } else if (isPlainObject$6(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key2] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key2) !== -1) {
          const callback = fromArgs[key2];
          if (isFunction$4(callback)) {
            toArgs[key2] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn$2(toArgs, key2)) {
            toArgs[key2] = fromArgs[key2];
          }
        }
      }
      return toArgs;
    } else if (isFunction$4(fromArgs)) {
      if (isFunction$4(argsOption)) {
        argsOption(fromArgs, {});
      }
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction$4(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    const realKeepReturnValue = keepReturnValue || false;
    return processArgs(methodName, res, returnValue, {}, realKeepReturnValue);
  }
  return function wrapper(methodName, method) {
    const hasProtocol = hasOwn$2(protocols2, methodName);
    if (!hasProtocol && typeof wx[methodName] !== "function") {
      return method;
    }
    const needWrapper = hasProtocol || isFunction$4(protocols2.returnValue) || isContextApi(methodName) || isTaskApi(methodName);
    const hasMethod = hasProtocol || isFunction$4(method);
    if (!hasProtocol && !method) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    if (!needWrapper || !hasMethod) {
      return method;
    }
    const protocol = protocols2[methodName];
    return function(arg1, arg2) {
      let options = protocol || {};
      if (isFunction$4(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isContextApi(methodName) || isTaskApi(methodName)) {
        if (returnValue && !returnValue.__v_skip) {
          returnValue.__v_skip = true;
        }
      }
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = isFunction$4(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return getLocaleLanguage$1();
};
const setLocale = (locale) => {
  const app = isFunction$4(getApp) && getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_2, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function getOSInfo(system, platform2) {
  let osName = "";
  let osVersion = "";
  if (platform2 && false) {
    osName = platform2;
    osVersion = system;
  } else {
    osName = system.split(" ")[0] || platform2;
    osVersion = system.split(" ")[1] || "";
  }
  osName = osName.toLowerCase();
  switch (osName) {
    case "harmony":
    case "ohos":
    case "openharmony":
      osName = "harmonyos";
      break;
    case "iphone os":
      osName = "ios";
      break;
    case "mac":
    case "darwin":
      osName = "macos";
      break;
    case "windows_nt":
      osName = "windows";
      break;
  }
  return {
    osName,
    osVersion
  };
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform: platform2, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  const { osName, osVersion } = getOSInfo(system, platform2);
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = (language || "").replace(/_/g, "-");
  const parameters = {
    appId: "__UNI__D1E5001",
    appName: "unibest",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.76",
    uniCompilerVersion: "4.76",
    uniRuntimeVersion: "4.76",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName,
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0,
    isUniAppX: false
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m2 = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m2) !== -1) {
        deviceType = deviceTypeMaps[_m2];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray$4(urls)) {
      return;
    }
    const len2 = urls.length;
    if (!len2) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len2) {
      currentIndex = len2 - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model, system = "", platform: platform2 = "" } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    const { osName, osVersion } = getOSInfo(system, platform2);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model,
      osName,
      osVersion
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = (language || "").replace(/_/g, "-");
    const parameters = {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "__UNI__D1E5001",
      appName: "unibest",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      isUniAppX: false,
      uniPlatform: "mp-weixin",
      uniCompileVersion: "4.76",
      uniCompilerVersion: "4.76",
      uniRuntimeVersion: "4.76"
    };
    extend(toRes, parameters);
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const onError = {
  args(fromArgs) {
    const app = getApp({ allowDefault: true }) || {};
    if (!app.$vm) {
      if (!wx.$onErrorHandlers) {
        wx.$onErrorHandlers = [];
      }
      wx.$onErrorHandlers.push(fromArgs);
    } else {
      injectHook(ON_ERROR, fromArgs, app.$vm.$);
    }
  }
};
const offError = {
  args(fromArgs) {
    const app = getApp({ allowDefault: true }) || {};
    if (!app.$vm) {
      if (!wx.$onErrorHandlers) {
        return;
      }
      const index2 = wx.$onErrorHandlers.findIndex((fn) => fn === fromArgs);
      if (index2 !== -1) {
        wx.$onErrorHandlers.splice(index2, 1);
      }
    } else if (fromArgs.__weh) {
      const onErrors = app.$vm.$[ON_ERROR];
      if (onErrors) {
        const index2 = onErrors.indexOf(fromArgs.__weh);
        if (index2 > -1) {
          onErrors.splice(index2, 1);
        }
      }
    }
  }
};
const onSocketOpen = {
  args() {
    if (wx.__uni_console__) {
      if (wx.__uni_console_warned__) {
        return;
      }
      wx.__uni_console_warned__ = true;
      console.warn(`开发模式下小程序日志回显会使用 socket 连接，为了避免冲突，建议使用 SocketTask 的方式去管理 WebSocket 或手动关闭日志回显功能。[详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)`);
    }
  }
};
const onSocketMessage = onSocketOpen;
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  rpx2px: upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback,
  __f__
};
function initUni(api, protocols2, platform2 = wx) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key2) {
      if (hasOwn$2(target, key2)) {
        return target[key2];
      }
      if (hasOwn$2(api, key2)) {
        return promisify(key2, api[key2]);
      }
      if (hasOwn$2(baseApis, key2)) {
        return promisify(key2, baseApis[key2]);
      }
      return promisify(key2, wrapper(key2, platform2[key2]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction$4(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction$4(fail) && fail(res);
    }
    isFunction$4(complete) && complete(res);
  };
}
const objectKeys$1 = [
  "qy",
  "env",
  "error",
  "version",
  "lanDebug",
  "cloud",
  "serviceMarket",
  "router",
  "worklet",
  "__webpack_require_UNI_MP_PLUGIN__"
];
const singlePageDisableKey = ["lanDebug", "router", "worklet"];
const launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
function isWxKey(key2) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key2)) {
    return false;
  }
  return objectKeys$1.indexOf(key2) > -1 || typeof wx[key2] === "function";
}
function initWx() {
  const newWx = {};
  for (const key2 in wx) {
    if (isWxKey(key2)) {
      newWx[key2] = wx[key2];
    }
  }
  if (typeof globalThis !== "undefined" && typeof requireMiniProgram === "undefined") {
    globalThis.wx = newWx;
  }
  return newWx;
}
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx$2.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    if (component.$scope) {
      return oldIn.call(this, component.$scope);
    }
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
if (!wx$2.canIUse("getAppBaseInfo")) {
  wx$2.getAppBaseInfo = wx$2.getSystemInfoSync;
}
if (!wx$2.canIUse("getWindowInfo")) {
  wx$2.getWindowInfo = wx$2.getSystemInfoSync;
}
if (!wx$2.canIUse("getDeviceInfo")) {
  wx$2.getDeviceInfo = wx$2.getSystemInfoSync;
}
let baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx$2.getSystemInfoSync();
}
const host = baseInfo ? baseInfo.host : null;
const shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createSelectorQuery,
  getProvider,
  shareVideoMessage
});
const compressImage = {
  args(fromArgs, toArgs) {
    if (fromArgs.compressedHeight && !toArgs.compressHeight) {
      toArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !toArgs.compressWidth) {
      toArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compressImage,
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo,
  offError,
  onError,
  onSocketMessage,
  onSocketOpen,
  previewImage,
  redirectTo,
  showActionSheet
});
const wx$1 = initWx();
var index = initUni(shims, protocols, wx$1);
/**
* @dcloudio/uni-mp-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i2, l2;
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].stop();
      }
      for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
        this.cleanups[i2]();
      }
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}
let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i2 = 0; i2 < this._depsLength; i2++) {
        const dep = this.deps[i2];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a2;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a2 = this.onStop) == null ? void 0 : _a2.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i2 = effect2._depsLength; i2 < effect2.deps.length; i2++) {
      cleanupDepEffect(effect2.deps[i2], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a2;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    {
      (_a2 = effect2.onTrack) == null ? void 0 : _a2.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a2;
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      {
        (_a2 = effect2.onTrigger) == null ? void 0 : _a2.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key2) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key2);
    if (!dep) {
      depsMap.set(key2, dep = createDep(() => depsMap.delete(key2)));
    }
    trackEffect(
      activeEffect,
      dep,
      {
        target,
        type,
        key: key2
      }
    );
  }
}
function trigger(target, type, key2, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key2 === "length" && isArray$4(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key22) => {
      if (key22 === "length" || !isSymbol(key22) && key22 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key2 !== void 0) {
      deps.push(depsMap.get(key2));
    }
    switch (type) {
      case "add":
        if (!isArray$4(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key2)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$4(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        4,
        {
          target,
          type,
          key: key2,
          newValue,
          oldValue,
          oldTarget
        }
      );
    }
  }
  resetScheduling();
}
function getDepFromReactive(object, key2) {
  var _a2;
  return (_a2 = targetMap.get(object)) == null ? void 0 : _a2.get(key2);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key2) => key2 !== "arguments" && key2 !== "caller").map((key2) => Symbol[key2]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key2) => {
    instrumentations[key2] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key2](...args);
      if (res === -1 || res === false) {
        return arr[key2](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key2) => {
    instrumentations[key2] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key2].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty$2(key2) {
  const obj = toRaw(this);
  track(obj, "has", key2);
  return obj.hasOwnProperty(key2);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key2, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_isShallow") {
      return isShallow2;
    } else if (key2 === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$4(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn$2(arrayInstrumentations, key2)) {
        return Reflect.get(arrayInstrumentations, key2, receiver);
      }
      if (key2 === "hasOwnProperty") {
        return hasOwnProperty$2;
      }
    }
    const res = Reflect.get(target, key2, receiver);
    if (isSymbol(key2) ? builtInSymbols.has(key2) : isNonTrackableKeys(key2)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key2);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key2) ? res : res.value;
    }
    if (isObject$4(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key2, value, receiver) {
    let oldValue = target[key2];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$4(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray$4(target) && isIntegerKey(key2) ? Number(key2) < target.length : hasOwn$2(target, key2);
    const result = Reflect.set(target, key2, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key2, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key2, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key2) {
    const hadKey = hasOwn$2(target, key2);
    const oldValue = target[key2];
    const result = Reflect.deleteProperty(target, key2);
    if (result && hadKey) {
      trigger(target, "delete", key2, void 0, oldValue);
    }
    return result;
  }
  has(target, key2) {
    const result = Reflect.has(target, key2);
    if (!isSymbol(key2) || !builtInSymbols.has(key2)) {
      track(target, "has", key2);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$4(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key2) {
    {
      warn$2(
        `Set operation on key "${String(key2)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key2) {
    {
      warn$2(
        `Delete operation on key "${String(key2)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
  true
);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key2, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key2);
  if (!isReadonly2) {
    if (hasChanged(key2, rawKey)) {
      track(rawTarget, "get", key2);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key2)) {
    return wrap(target.get(key2));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key2);
  }
}
function has(key2, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key2);
  if (!isReadonly2) {
    if (hasChanged(key2, rawKey)) {
      track(rawTarget, "has", key2);
    }
    track(rawTarget, "has", rawKey);
  }
  return key2 === rawKey ? target.has(key2) : target.has(key2) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1$1(key2, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key2);
  if (!hadKey) {
    key2 = toRaw(key2);
    hadKey = has2.call(target, key2);
  } else {
    checkIdentityKeys(target, has2, key2);
  }
  const oldValue = get2.call(target, key2);
  target.set(key2, value);
  if (!hadKey) {
    trigger(target, "add", key2, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key2, value, oldValue);
  }
  return this;
}
function deleteEntry(key2) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key2);
  if (!hadKey) {
    key2 = toRaw(key2);
    hadKey = has2.call(target, key2);
  } else {
    checkIdentityKeys(target, has2, key2);
  }
  const oldValue = get2 ? get2.call(target, key2) : void 0;
  const result = target.delete(key2);
  if (hadKey) {
    trigger(target, "delete", key2, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach2(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key2) => {
      return callback.call(thisArg, wrap(value), wrap(key2), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key2 = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(
        `${capitalize(type)} operation ${key2}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key2) {
      return get$1(this, key2);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key2) {
      return get$1(this, key2, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key2) {
      return get$1(this, key2, true);
    },
    get size() {
      return size(this, true);
    },
    has(key2) {
      return has.call(this, key2, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key2) {
      return get$1(this, key2, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key2) {
      return has.call(this, key2, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key2, receiver) => {
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$2(instrumentations, key2) && key2 in target ? instrumentations : target,
      key2,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key2) {
  const rawKey = toRaw(key2);
  if (rawKey !== key2 && has2.call(target, rawKey)) {
    const type = toRawType(target);
    warn$2(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$4(target)) {
    {
      warn$2(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$4(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$4(value) ? readonly(value) : value;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR2) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR2;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      if (this._warnRecursive) {
        warn$2(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
      }
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR2 = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$4(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      warn$2("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR2);
  return cRef;
}
function trackRefValue(ref2) {
  var _a2;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a2 = ref2.dep) != null ? _a2 : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ),
      {
        target: ref2,
        type: "get",
        key: "value"
      }
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel,
      {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      }
    );
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key2, receiver) => unref(Reflect.get(target, key2, receiver)),
  set: (target, key2, value, receiver) => {
    const oldValue = target[key2];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key2, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  if (!isProxy(object)) {
    warn$2(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray$4(object) ? new Array(object.length) : {};
  for (const key2 in object) {
    ret[key2] = propertyToRef(object, key2);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key2, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction$4(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$4(source) && arguments.length > 1) {
    return propertyToRef(source, key2, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key2, defaultValue) {
  const val = source[key2];
  return isRef(val) ? val : new ObjectRefImpl(source, key2, defaultValue);
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a2) => {
          var _a2, _b2;
          return (_b2 = (_a2 = a2.toString) == null ? void 0 : _a2.call(a2)) != null ? _b2 : JSON.stringify(a2);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key2) => {
    res.push(...formatProp(key2, props[key2]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key2, value, raw) {
  if (isString$4(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key2}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key2}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key2, toRaw(value.value), true);
    return raw ? value : [`${key2}=Ref<`, value, `>`];
  } else if (isFunction$4(value)) {
    return [`${key2}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key2}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$4(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick$1(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i2 = queue.indexOf(job);
  if (i2 > flushIndex) {
    queue.splice(i2, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$4(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i2 = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i2 < queue.length; i2++) {
    const cb = queue[i2];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i2, 1);
      i2--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a2, b2) => getId(a2) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a2, b2) => {
  const diff2 = getId(a2) - getId(b2);
  if (diff2 === 0) {
    if (a2.pre && !b2.pre)
      return -1;
    if (b2.pre && !a2.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b2;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b2 = (_a2 = window.navigator) == null ? void 0 : _a2.userAgent) == null ? void 0 : _b2.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      // fixed by xxxxxx
      // 为 0 是 App，无 parent 是 Page 指向 App
      component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction$4(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number2, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a2) => isString$4(a2) ? a2.trim() : a2);
    }
    if (number2) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$4(comp)) {
      cache2.set(comp, null);
    }
    return null;
  }
  if (isArray$4(raw)) {
    raw.forEach((key2) => normalized[key2] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$4(comp)) {
    cache2.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key2) {
  if (!options || !isOn(key2)) {
    return false;
  }
  key2 = key2.slice(2).replace(/Once$/, "");
  return hasOwn$2(options, key2[0].toLowerCase() + key2.slice(1)) || hasOwn$2(options, hyphenate(key2)) || hasOwn$2(options, key2);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component2 = instance.type;
    {
      const selfName = getComponentName(
        Component2,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component2;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component2[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component2;
    }
    if (warnMissing && !res) {
      const extra = `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(
      `resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction$4(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once: once2,
  onTrack,
  onTrigger
} = EMPTY_OBJ) {
  if (cb && once2) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  if (deep !== void 0 && typeof deep === "number") {
    warn$1(
      `watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`
    );
  }
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once2 !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s2) => {
    warn$1(
      `Invalid watch source: `,
      s2,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$4(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction$4(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else {
        warnInvalidSource(s2);
      }
    });
  } else if (isFunction$4(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i2) => hasChanged(v, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect$1(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
  const scope = getCurrentScope();
  const unwatch = () => {
    effect2.stop();
    if (scope) {
      remove(scope.effects, effect2);
    }
  };
  {
    effect2.onTrack = onTrack;
    effect2.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect$1(
      effect2.run.bind(effect2),
      instance && instance.suspense
    );
  } else {
    effect2.run();
  }
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$4(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$4(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value, depth, currentDepth = 0, seen) {
  if (!isObject$4(value) || value["__v_skip"]) {
    return value;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value;
    }
    currentDepth++;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, depth, currentDepth, seen);
  } else if (isArray$4(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], depth, currentDepth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, currentDepth, seen);
    });
  } else if (isPlainObject$6(value)) {
    for (const key2 in value) {
      traverse(value[key2], depth, currentDepth, seen);
    }
  }
  return value;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$4(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$4(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context2 = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const app = context2.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context2,
      _instance: null,
      version,
      get config() {
        return context2.config;
      },
      set config(v) {
        {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction$4(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction$4(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context2.mixins.includes(mixin)) {
            context2.mixins.push(mixin);
          } else {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context2.config);
        }
        if (!component) {
          return context2.components[name];
        }
        if (context2.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context2.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context2.directives[name];
        }
        if (context2.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context2.directives[name] = directive;
        return app;
      },
      // fixed by xxxxxx
      mount() {
      },
      // fixed by xxxxxx
      unmount() {
      },
      provide(key2, value) {
        if (key2 in context2.provides) {
          warn$1(
            `App already provides property with key "${String(key2)}". It will be overwritten with the new value.`
          );
        }
        context2.provides[key2] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key2, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key2] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key2, value);
    }
  }
}
function inject(key2, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key2 in provides) {
      return provides[key2];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$4(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key2)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$4(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(
      (ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, "")
    );
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`
    );
  }
}
const createHook$1 = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook$1("bm");
const onMounted = createHook$1("m");
const onBeforeUpdate = createHook$1("bu");
const onUpdated = createHook$1("u");
const onBeforeUnmount = createHook$1("bum");
const onUnmounted = createHook$1("um");
const onServerPrefetch = createHook$1("sp");
const onRenderTriggered = createHook$1(
  "rtg"
);
const onRenderTracked = createHook$1(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
function getComponentInternalInstance(i2) {
  return i2;
}
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    // fixed by xxxxxx
    $: getComponentInternalInstance,
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: (i2) => i2.__$el || (i2.__$el = {}),
    $data: (i2) => i2.data,
    $props: (i2) => shallowReadonly(i2.props),
    $attrs: (i2) => shallowReadonly(i2.attrs),
    $slots: (i2) => shallowReadonly(i2.slots),
    $refs: (i2) => shallowReadonly(i2.refs),
    $parent: (i2) => getPublicInstance(i2.parent),
    $root: (i2) => getPublicInstance(i2.root),
    $emit: (i2) => i2.emit,
    $options: (i2) => resolveMergedOptions(i2),
    $forceUpdate: (i2) => i2.f || (i2.f = () => {
      i2.effect.dirty = true;
      queueJob(i2.update);
    }),
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: (i2) => instanceWatch.bind(i2)
  })
);
const isReservedPrefix = (key2) => key2 === "_" || key2 === "$";
const hasSetupBinding = (state, key2) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$2(state, key2);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key2) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key2 === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key2[0] !== "$") {
      const n2 = accessCache[key2];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key2];
          case 2:
            return data[key2];
          case 4:
            return ctx[key2];
          case 3:
            return props[key2];
        }
      } else if (hasSetupBinding(setupState, key2)) {
        accessCache[key2] = 1;
        return setupState[key2];
      } else if (data !== EMPTY_OBJ && hasOwn$2(data, key2)) {
        accessCache[key2] = 2;
        return data[key2];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn$2(normalizedProps, key2)
      ) {
        accessCache[key2] = 3;
        return props[key2];
      } else if (ctx !== EMPTY_OBJ && hasOwn$2(ctx, key2)) {
        accessCache[key2] = 4;
        return ctx[key2];
      } else if (shouldCacheAccess) {
        accessCache[key2] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key2];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key2 === "$attrs") {
        track(instance, "get", key2);
      } else if (key2 === "$slots") {
        track(instance, "get", key2);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key2])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$2(ctx, key2)) {
      accessCache[key2] = 4;
      return ctx[key2];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$2(globalProperties, key2)
    ) {
      {
        return globalProperties[key2];
      }
    } else if (currentRenderingInstance && (!isString$4(key2) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key2.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key2[0]) && hasOwn$2(data, key2)) {
        warn$1(
          `Property ${JSON.stringify(
            key2
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key2)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key2, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key2)) {
      setupState[key2] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn$2(setupState, key2)) {
      warn$1(`Cannot mutate <script setup> binding "${key2}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn$2(data, key2)) {
      data[key2] = value;
      return true;
    } else if (hasOwn$2(instance.props, key2)) {
      warn$1(`Attempting to mutate prop "${key2}". Props are readonly.`);
      return false;
    }
    if (key2[0] === "$" && key2.slice(1) in instance) {
      warn$1(
        `Attempting to mutate public property "${key2}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (key2 in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key2, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key2] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key2) {
    let normalizedProps;
    return !!accessCache[key2] || data !== EMPTY_OBJ && hasOwn$2(data, key2) || hasSetupBinding(setupState, key2) || (normalizedProps = propsOptions[0]) && hasOwn$2(normalizedProps, key2) || hasOwn$2(ctx, key2) || hasOwn$2(publicPropertiesMap, key2) || hasOwn$2(appContext.config.globalProperties, key2);
  },
  defineProperty(target, key2, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key2] = 0;
    } else if (hasOwn$2(descriptor, "value")) {
      this.set(target, key2, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key2, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key2) => {
    Object.defineProperty(target, key2, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key2](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key2) => {
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key2],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key2) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key2[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key2
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key2],
        set: NOOP
      });
    }
  });
}
function useSlots() {
  return getContext$1().slots;
}
function getContext$1() {
  const i2 = getCurrentInstance();
  if (!i2) {
    warn$1(`useContext() called without active instance.`);
  }
  return i2.setupContext || (i2.setupContext = createSetupContext(i2));
}
function normalizePropsOrEmits(props) {
  return isArray$4(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function createDuplicateChecker() {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (type, key2) => {
    if (cache2[key2]) {
      warn$1(`${type} property "${key2}" is already defined in ${cache2[key2]}.`);
    } else {
      cache2[key2] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key2 in propsOptions) {
        checkDuplicateProperties("Props", key2);
      }
    }
  }
  function initInjections() {
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
  }
  {
    initInjections();
  }
  if (methods) {
    for (const key2 in methods) {
      const methodHandler = methods[key2];
      if (isFunction$4(methodHandler)) {
        {
          Object.defineProperty(ctx, key2, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key2);
        }
      } else {
        warn$1(
          `Method "${key2}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if (!isFunction$4(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise$1(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject$4(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key2 in data) {
          checkDuplicateProperties("Data", key2);
          if (!isReservedPrefix(key2[0])) {
            Object.defineProperty(ctx, key2, {
              configurable: true,
              enumerable: true,
              get: () => data[key2],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key2 in computedOptions) {
      const opt = computedOptions[key2];
      const get2 = isFunction$4(opt) ? opt.bind(publicThis, publicThis) : isFunction$4(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key2}" has no getter.`);
      }
      const set2 = !isFunction$4(opt) && isFunction$4(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(
          `Write operation failed: computed property "${key2}" is readonly.`
        );
      };
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v) => c2.value = v
      });
      {
        checkDuplicateProperties("Computed", key2);
      }
    }
  }
  if (watchOptions) {
    for (const key2 in watchOptions) {
      createWatcher(watchOptions[key2], ctx, publicThis, key2);
    }
  }
  function initProvides() {
    if (provideOptions) {
      const provides = isFunction$4(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key2) => {
        provide(key2, provides[key2]);
      });
    }
  }
  {
    initProvides();
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$4(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$4(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key2) => {
        Object.defineProperty(exposed, key2, {
          get: () => publicThis[key2],
          set: (val) => publicThis[key2] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$4(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key2 in injectOptions) {
    const opt = injectOptions[key2];
    let injected;
    if (isObject$4(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key2,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key2);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key2] = injected;
    }
    {
      checkDuplicateProperties("Inject", key2);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$4(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key2) {
  const getter = key2.includes(".") ? createPathGetter(publicThis, key2) : () => publicThis[key2];
  if (isString$4(raw)) {
    const handler = ctx[raw];
    if (isFunction$4(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction$4(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$4(raw)) {
    if (isArray$4(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key2));
    } else {
      const handler = isFunction$4(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$4(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key2}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache2,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache2.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$4(base)) {
    cache2.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m2) => mergeOptions(to, m2, strats, true)
    );
  }
  for (const key2 in from) {
    if (asMixin && key2 === "expose") {
      warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key2] || strats && strats[key2];
      to[key2] = strat ? strat(to[key2], from[key2]) : from[key2];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$4(to) ? to.call(this, this) : to,
      isFunction$4(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$4(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$4(to) && isArray$4(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key2 in from) {
    merged[key2] = mergeAsArray$1(to[key2], from[key2]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR2 = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key2 in instance.propsOptions[0]) {
    if (!(key2 in props)) {
      props[key2] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR2 ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext() && patchFlag > 0 && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key2 = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key2)) {
          continue;
        }
        const value = rawProps[key2];
        if (options) {
          if (hasOwn$2(attrs, key2)) {
            if (value !== attrs[key2]) {
              attrs[key2] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key2);
            props[camelizedKey] = resolvePropValue$1(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key2]) {
            attrs[key2] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key2 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$2(rawProps, key2) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key2)) === key2 || !hasOwn$2(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key2] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key2] = resolvePropValue$1(
              options,
              rawCurrentProps,
              key2,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key2];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key2 in attrs) {
        if (!rawProps || !hasOwn$2(rawProps, key2) && true) {
          delete attrs[key2];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key2 in rawProps) {
      if (isReservedProp(key2)) {
        continue;
      }
      const value = rawProps[key2];
      let camelKey;
      if (options && hasOwn$2(options, camelKey = camelize(key2))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key2)) {
        if (!(key2 in attrs) || value !== attrs[key2]) {
          attrs[key2] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key2 = needCastKeys[i2];
      props[key2] = resolvePropValue$1(
        options,
        rawCurrentProps,
        key2,
        castValues[key2],
        instance,
        !hasOwn$2(castValues, key2)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue$1(options, props, key2, value, instance, isAbsent) {
  const opt = options[key2];
  if (opt != null) {
    const hasDefault = hasOwn$2(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$4(defaultValue)) {
        const { propsDefaults } = instance;
        if (key2 in propsDefaults) {
          value = propsDefaults[key2];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key2] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key2))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$4(comp)) {
      cache2.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$4(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      if (!isString$4(raw[i2])) {
        warn$1(`props must be strings when using array syntax.`, raw[i2]);
      }
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject$4(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key2 in raw) {
      const normalizedKey = camelize(key2);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key2];
        const prop = normalized[normalizedKey] = isArray$4(opt) || isFunction$4(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$2(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$4(comp)) {
    cache2.set(comp, res);
  }
  return res;
}
function validatePropName(key2) {
  if (key2[0] !== "$" && !isReservedProp(key2)) {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key2}" is a reserved property.`);
  }
  return false;
}
function getType$1(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a2, b2) {
  return getType$1(a2) === getType$1(b2);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$4(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction$4(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key2 in options) {
    let opt = options[key2];
    if (opt == null)
      continue;
    validateProp(
      key2,
      resolvedValues[key2],
      opt,
      shallowReadonly(resolvedValues),
      !hasOwn$2(rawProps, key2) && !hasOwn$2(rawProps, hyphenate(key2))
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray$4(type) ? type : [type];
    const expectedTypes = [];
    for (let i2 = 0; i2 < types.length && !isValid; i2++) {
      const { valid, expectedType } = assertType(value, types[i2]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$4(value);
  } else if (expectedType === "Array") {
    valid = isArray$4(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
const queuePostRenderEffect$1 = queuePostFlushCb;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null,
    // fixed by xxxxxx 用于存储uni-app的元素缓存
    $uniElements: /* @__PURE__ */ new Map(),
    $templateUniElementRefs: [],
    $templateUniElementStyles: {},
    $eS: {},
    $eA: {}
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  internalSetCurrentInstance = (i2) => {
    currentInstance = i2;
  };
  setInSSRSetupState = (v) => {
    isInSSRComponentSetup = v;
  };
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR2 = false) {
  isSSR2 && setInSSRSetupState(isSSR2);
  const {
    props
    /*, children*/
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR2);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR2) : void 0;
  isSSR2 && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR2) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i2 = 0; i2 < names.length; i2++) {
        validateComponentName(names[i2], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i2 = 0; i2 < names.length; i2++) {
        validateDirectiveName(names[i2]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        shallowReadonly(instance.props),
        setupContext
      ]
    );
    resetTracking();
    reset();
    if (isPromise$1(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$1(
          `setup() returned a Promise, but the version of Vue you are using does not support it yet.`
        );
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR2);
    }
  } else {
    finishComponentSetup(instance, isSSR2);
  }
}
function handleSetupResult(instance, setupResult, isSSR2) {
  if (isFunction$4(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject$4(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR2);
}
const isRuntimeOnly = () => true;
function finishComponentSetup(instance, isSSR2, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions$1(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component2.render && instance.render === NOOP && !isSSR2) {
    if (Component2.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key2) {
        track(instance, "get", "$attrs");
        return target[key2];
      },
      set() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  ));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key2) {
      track(instance, "get", "$slots");
      return target[key2];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray$4(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key2) {
        if (key2 in target) {
          return target[key2];
        }
        return instance.proxy[key2];
      },
      has(target, key2) {
        return key2 in target || key2 in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction$4(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key2 in registry) {
        if (registry[key2] === Component2) {
          return key2;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed = (getterOrOptions, debugOptions) => {
  const c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    const i2 = getCurrentInstance();
    if (i2 && i2.appContext.config.warnRecursiveComputed) {
      c2._warnRecursive = true;
    }
  }
  return c2;
};
const version = "3.4.21";
const warn$3 = warn$1;
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString$2(current);
  const rootPreType = toTypeString$2(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key2 in pre) {
      const currentValue = current[key2];
      if (currentValue === void 0) {
        current[key2] = null;
      } else {
        syncKeys(currentValue, pre[key2]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString$2(current);
  const rootPreType = toTypeString$2(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key2 in current) {
        const currentValue = unwrapper(current[key2]);
        const preValue = pre[key2];
        const currentType = toTypeString$2(currentValue);
        const preType = toTypeString$2(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key2,
              currentValue
            );
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key2,
              currentValue
            );
          } else {
            if (currentValue.length < preValue.length) {
              setResult(
                result,
                (path == "" ? "" : path + ".") + key2,
                currentValue
              );
            } else {
              currentValue.forEach((item, index2) => {
                _diff(
                  item,
                  preValue[index2],
                  (path == "" ? "" : path + ".") + key2 + "[" + index2 + "]",
                  result
                );
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key2,
              currentValue
            );
          } else {
            for (let subKey in currentValue) {
              _diff(
                currentValue[subKey],
                preValue[subKey],
                (path == "" ? "" : path + ".") + key2 + "." + subKey,
                result
              );
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i2 = 0; i2 < copies.length; i2++) {
      copies[i2]();
    }
  }
}
function nextTick(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick$1(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(
        fn.bind(instance.proxy),
        instance,
        14
      );
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray$4(src)) {
      const len2 = src.length;
      copy = new Array(len2);
      seen.set(src, copy);
      for (let i2 = 0; i2 < len2; i2++) {
        copy[i2] = clone(src[i2], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn$2(src, name)) {
          copy[name] = clone(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy$1(src) {
  return clone(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key2) => {
    ret[key2] = data[key2];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy$1(data);
  data.$eS = instance.$eS || {};
  data.$eA = instance.$eA || {};
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(
    options,
    instance,
    publicThis
  );
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const {
    setupState,
    $templateRefs,
    $templateUniElementRefs,
    ctx: { $scope, $mpPlatform }
  } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$scope || !$templateRefs && !$templateUniElementRefs) {
    return;
  }
  if (isUnmount) {
    $templateRefs && $templateRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
    $templateUniElementRefs && $templateUniElementRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
    return;
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    if (refs.length === 0) {
      return [];
    }
    const mpComponents = (
      // 字节小程序 selectAllComponents 可能返回 null
      // https://github.com/dcloudio/uni-app/issues/3954
      ($scope.selectAllComponents(".r") || []).concat(
        $scope.selectAllComponents(".r-i-f") || []
      )
    );
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    if ($templateRefs) {
      const refs = doSetByRefs($templateRefs);
      if (refs.length && instance.proxy && instance.proxy.$scope) {
        instance.proxy.$scope.setData({ r1: 1 }, () => {
          doSetByRefs(refs);
        });
      }
    }
  };
  if ($templateUniElementRefs && $templateUniElementRefs.length) {
    nextTick(instance, () => {
      $templateUniElementRefs.forEach((templateRef) => {
        if (isArray$4(templateRef.v)) {
          templateRef.v.forEach((v) => {
            setTemplateRef(templateRef, v, setupState);
          });
        } else {
          setTemplateRef(templateRef, templateRef.v, setupState);
        }
      });
    });
  }
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value) {
  if (isObject$4(value)) {
    markRaw(value);
  }
  return value;
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find(
    (com) => com && (com.properties || com.props).uI === id
  );
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return toSkip(mpInstance);
  }
  return null;
}
function setTemplateRef({ r: r2, f: f2 }, refValue, setupState) {
  if (isFunction$4(r2)) {
    r2(refValue, {});
  } else {
    const _isString = isString$4(r2);
    const _isRef = isRef(r2);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray$4(r2.value)) {
          r2.value = [];
        }
        const existing = r2.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          if (refValue.$) {
            onBeforeUnmount(() => remove(existing, refValue), refValue.$);
          }
        }
      } else if (_isString) {
        if (hasOwn$2(setupState, r2)) {
          setupState[r2] = refValue;
        }
      } else if (isRef(r2)) {
        r2.value = refValue;
      } else {
        warnRef(r2);
      }
    } else {
      warnRef(r2);
    }
  }
}
function warnRef(ref2) {
  warn$3("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
const queuePostRenderEffect = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  instance.renderer = options.mpType ? options.mpType : "component";
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
    startMeasure(instance, `mount`);
  }
  {
    startMeasure(instance, `init`);
  }
  setupComponent(instance);
  {
    endMeasure(instance, `init`);
  }
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
    endMeasure(instance, `mount`);
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key2 in attrs) {
    if (key2 === "class" || key2 === "style" || isOn(key2)) {
      (res || (res = {}))[key2] = attrs[key2];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const {
    type: Component2,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    uid: uid2,
    appContext: {
      app: {
        config: {
          globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 }
        }
      }
    },
    inheritAttrs
  } = instance;
  instance.$uniElementIds = /* @__PURE__ */ new Map();
  instance.$templateRefs = [];
  instance.$templateUniElementRefs = [];
  instance.$templateUniElementStyles = {};
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(
        proxyToUse,
        proxyToUse,
        renderCache,
        props,
        setupState,
        data,
        ctx
      );
    } else {
      fallthroughAttrs(
        inheritAttrs,
        props,
        propsOptions,
        Component2.props ? attrs : getFunctionalFallthrough(attrs)
      );
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(
        props,
        null
        /* we know it doesn't need it */
      );
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter(
      (key2) => key2 !== "class" && key2 !== "style"
    );
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key2) => {
        if (!isModelListener(key2) || !(key2.slice(9) in propsOptions)) {
          props[key2] = fallthroughAttrs2[key2];
        }
      });
    } else {
      keys.forEach((key2) => props[key2] = fallthroughAttrs2[key2]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString$4(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(
        data,
        oldScopedSlotData[index2]
      );
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(
    instance
  );
  instance.$updateScopedSlots = () => nextTick$1(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      {
        devtoolsComponentAdded(instance);
      }
    } else {
      const { next, bu, u: u2 } = instance;
      {
        pushWarningContext(next || instance.vnode);
      }
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      if (u2) {
        queuePostRenderEffect(u2);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect2 = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    NOOP,
    () => queueJob(update),
    instance.scope
    // track it in component's effect scope
  );
  const update = instance.update = () => {
    if (effect2.dirty) {
      effect2.run();
    }
  };
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect2.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect2.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  {
    update();
  }
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  {
    const parentInstance = instance.parent;
    if (parentInstance) {
      const $children = parentInstance.ctx.$children;
      const target = getExposeProxy(instance) || instance.proxy;
      const index2 = $children.indexOf(target);
      if (index2 > -1) {
        $children.splice(index2, 1);
      }
    }
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect(um);
  }
  queuePostRenderEffect(() => {
    instance.isUnmounted = true;
  });
  {
    devtoolsComponentRemoved(instance);
  }
}
const oldCreateApp = createAppAPI();
function getTarget() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof my !== "undefined") {
    return my;
  }
}
function createVueApp(rootComponent, rootProps = null) {
  const target = getTarget();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode2 = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent22(initialVNode, options) {
    return mountComponent(createVNode2(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(
      createVNode2({ type: rootComponent }),
      {
        mpType: "app",
        mpInstance: null,
        parentComponent: null,
        slots: [],
        props: null
      }
    );
    app._instance = instance.$;
    {
      devtoolsInitApp(app, version);
    }
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn$3(`Cannot unmount an app.`);
  };
  return app;
}
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    warn$3(`useCssVars is called without current active component instance.`);
    return;
  }
  initCssVarsRender(instance, getter);
}
function initCssVarsRender(instance, getter) {
  instance.ctx.__cssVars = () => {
    const vars = getter(instance.proxy);
    const cssVars = {};
    for (const key2 in vars) {
      cssVars[`--${key2}`] = vars[key2];
    }
    return cssVars;
  };
}
function createVNode() {
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction$4(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component" || // instance.renderer 标识页面是否作为组件渲染
  mpType === "page" && instance.renderer === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray$4(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set$2(target, key2, val) {
  return target[key2] = val;
}
function $callMethod(method, ...args) {
  const fn = this[method];
  if (fn) {
    return fn(...args);
  }
  console.error(`method ${method} not found`);
  return null;
}
function createErrorHandler(app) {
  const userErrorHandler = app.config.errorHandler;
  return function errorHandler(err, instance, info) {
    if (userErrorHandler) {
      userErrorHandler(err, instance, info);
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    if (appInstance[ON_ERROR]) {
      {
        appInstance.proxy.$callHook(ON_ERROR, err);
      }
    } else {
      logError(err, info, instance ? instance.$.vnode : null, false);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i2 = 0;
    for (; i2 < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i2++)) << 18 | b64.indexOf(str.charAt(i2++)) << 12 | (r1 = b64.indexOf(str.charAt(i2++))) << 6 | (r2 = b64.indexOf(str.charAt(i2++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c2) {
    return "%" + ("00" + c2.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set$2;
    globalProperties.$applyOptions = applyOptions$2;
    globalProperties.$callMethod = $callMethod;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined" && typeof global[method] !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function stringifyStyle(value) {
  if (isString$4(value)) {
    return value;
  }
  return stringify(normalizeStyle(value));
}
function stringify(styles) {
  let ret = "";
  if (!styles || isString$4(styles)) {
    return ret;
  }
  for (const key2 in styles) {
    ret += `${key2.startsWith(`--`) ? key2 : hyphenate(key2)}:${styles[key2]};`;
  }
  return ret;
}
function vOn(value, key2) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key2 !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq" || ctx.$mpPlatform === "mp-xhs") && (isString$4(key2) || typeof key2 === "number") ? "_" + key2 : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (instance && instance.ctx.$getTriggerEventDetail) {
      if (typeof e2.detail === "number") {
        e2.detail = instance.ctx.$getTriggerEventDetail(e2.detail);
      }
    }
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray$4(res) || isPromise$1(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  // touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
  // 'touchstart',
  // 'touchmove',
  // 'touchcancel',
  // 'touchend',
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event, instance) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn$2(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn$2(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject$6(event.detail) && hasOwn$2(event.detail, "checked") && !hasOwn$2(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject$6(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$4(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray$4(source) || isString$4(source)) {
    ret = new Array(source.length);
    for (let i2 = 0, l2 = source.length; i2 < l2; i2++) {
      ret[i2] = renderItem(source[i2], i2, i2);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$3(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, i2);
    }
  } else if (isObject$4(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i2) => renderItem(item, i2, i2));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l2 = keys.length; i2 < l2; i2++) {
        const key2 = keys[i2];
        ret[i2] = renderItem(source[key2], key2, i2);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function setRef(ref2, id, opts = {}) {
  const { $templateRefs } = getCurrentInstance();
  $templateRefs.push({ i: id, r: ref2, k: opts.k, f: opts.f });
}
function setupDevtoolsPlugin() {
}
const o$1 = (value, key2) => vOn(value, key2);
const f$1 = (source, renderItem) => vFor(source, renderItem);
const s = (value) => stringifyStyle(value);
const e = (target, ...sources) => extend(target, ...sources);
const h = (str) => hyphenate(str);
const n$1 = (value) => normalizeClass(value);
const t$1 = (val) => toDisplayString$1(val);
const p = (props) => renderProps(props);
const sr = (ref2, id, opts) => setRef(ref2, id, opts);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len2 = ids.length;
  if (len2 === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len2 === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn$2(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
const WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach((name) => {
      const matches = name.match(WORKLET_RE);
      if (matches) {
        const workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray$4(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i2 = $children.length - 1; i2 >= 0; i2--) {
    const childVm = $children[i2];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i2 = $children.length - 1; i2 >= 0; i2--) {
    parentVm = findVmByVueId($children[i2], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function getLocaleLanguage() {
  var _a2;
  let localeLanguage = "";
  {
    const appBaseInfo = ((_a2 = wx.getAppBaseInfo) === null || _a2 === void 0 ? void 0 : _a2.call(wx)) || wx.getSystemInfoSync();
    const language = appBaseInfo && appBaseInfo.language ? appBaseInfo.language : LOCALE_EN;
    localeLanguage = normalizeLocale(language) || LOCALE_EN;
  }
  return localeLanguage;
}
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  {
    Object.defineProperties(ctx, {
      // only id
      [VIRTUAL_HOST_ID]: {
        get() {
          const id = this.$scope.data[VIRTUAL_HOST_ID];
          return id === void 0 ? "" : id;
        }
      }
    });
  }
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray$4(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn$2(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
  // 'onReady', // lifetimes.ready
  // 'onPageScroll', // 影响性能，开发者手动注册
  // 'onShareTimeline', // 右上角菜单，开发者手动注册
  // 'onShareAppMessage' // 右上角菜单，开发者手动注册
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (isUniLifecycleHook(name, vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn$2(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = isFunction$4(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray$4(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks.forEach((hook) => {
          if (hasOwn$2(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    // mp-alipay 组件 data 初始化比 onLaunch 早，提前挂载
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope && ctx.$callHook) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  const onErrorHandlers = wx.$onErrorHandlers;
  if (onErrorHandlers) {
    onErrorHandlers.forEach((fn) => {
      injectHook(ON_ERROR, fn, internalInstance);
    });
    onErrorHandlers.length = 0;
  }
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm);
    const app = isFunction$4(getApp) && getApp({
      allowDefault: true
    });
    if (!app)
      return;
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn$2(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn$2(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction$4(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction$4(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction$4(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(getLocaleLanguage());
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
const builtInProps = [
  // 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
  // event-opts
  "eO",
  // 组件 ref
  "uR",
  // 组件 ref-in-for
  "uRIF",
  // 组件 id
  "uI",
  // 组件类型 m: 小程序组件
  "uT",
  // 组件 props
  "uP",
  // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
  "uS"
];
function initDefaultProps(options, isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    let observerSlots = function(newVal) {
      const $slots = /* @__PURE__ */ Object.create(null);
      newVal && newVal.forEach((slotName) => {
        $slots[slotName] = true;
      });
      this.setData({
        $slots
      });
    };
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: []
    };
    {
      properties.uS.observer = observerSlots;
    }
  }
  if (options.behaviors) {
    if (options.behaviors.includes("wx://form-field")) {
      if (!options.properties || !options.properties.name) {
        properties.name = {
          type: null,
          value: ""
        };
      }
      if (!options.properties || !options.properties.value) {
        properties.value = {
          type: null,
          value: ""
        };
      }
    }
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties[VIRTUAL_HOST_STYLE] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_CLASS] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_HIDDEN] = {
        type: null,
        value: ""
      };
      properties[VIRTUAL_HOST_ID] = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray$4(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray$4(rawProps)) {
    rawProps.forEach((key2) => {
      properties[key2] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject$6(rawProps)) {
    Object.keys(rawProps).forEach((key2) => {
      const opts = rawProps[key2];
      if (isPlainObject$6(opts)) {
        let value = opts.default;
        if (isFunction$4(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key2] = {
          type: opts.type,
          value
        };
      } else {
        properties[key2] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(resolvePropValue(properties.uP))) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject$6(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = resolvePropValue(properties[name]);
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray$4(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
    vm.$watch("modelValue", () => {
      vm.$scope && vm.$scope.setData({
        name: vm.name,
        value: vm.modelValue
      });
    }, {
      immediate: true
    });
  }
}
function resolvePropValue(prop) {
  return prop;
}
function initData(_2) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(resolvePropValue(up), this.$vm.$);
    } else if (resolvePropValue(this.properties.uT) === "m") {
      updateMiniProgramComponentProperties(resolvePropValue(up), this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key2 = nextKeys[i2];
    if (nextProps[key2] !== prevProps[key2]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray$4(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray$4(vueProps)) {
          vueProps.push("name");
          vueProps.push("modelValue");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse: parse2, mocks: mocks2, isPage: isPage2, isPageInProject, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray$4(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject$4(item.options)) {
        extend(options, item.options);
      }
    });
  }
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  {
    initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
  }
  if (parse2) {
    parse2(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getAppVm().$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse: parse2, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    isPageInProject: true,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    {
      this.options = query;
    }
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse2 && parse2(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  const newTriggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [
      customizeEvent(event),
      ...args
    ]);
  };
  try {
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        // vueSlots
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
      if (!isMiniProgramPage) {
        initFormField(this.$vm);
      }
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  handleLink,
  initLifetimes,
  initRelation,
  isPage,
  mocks
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop$2() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled2, query) {
  return typeof enabled2 === "function" ? enabled2(query) : enabled2;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_2, val) => isPlainObject$5(val) ? Object.keys(val).sort().reduce((result, key2) => {
      result[key2] = val[key2];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (a2 && b2 && typeof a2 === "object" && typeof b2 === "object") {
    return Object.keys(b2).every((key2) => partialMatchKey(a2[key2], b2[key2]));
  }
  return false;
}
function replaceEqualDeep(a2, b2) {
  if (a2 === b2) {
    return a2;
  }
  const array = isPlainArray(a2) && isPlainArray(b2);
  if (array || isPlainObject$5(a2) && isPlainObject$5(b2)) {
    const aItems = array ? a2 : Object.keys(a2);
    const aSize = aItems.length;
    const bItems = array ? b2 : Object.keys(b2);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    const aItemsSet = new Set(aItems);
    let equalItems = 0;
    for (let i2 = 0; i2 < bSize; i2++) {
      const key2 = array ? i2 : bItems[i2];
      if ((!array && aItemsSet.has(key2) || array) && a2[key2] === void 0 && b2[key2] === void 0) {
        copy[key2] = void 0;
        equalItems++;
      } else {
        copy[key2] = replaceEqualDeep(a2[key2], b2[key2]);
        if (copy[key2] === a2[key2] && a2[key2] !== void 0) {
          equalItems++;
        }
      }
    }
    return aSize === bSize && equalItems === aSize ? a2 : copy;
  }
  return b2;
}
function shallowEqualObjects(a2, b2) {
  if (!b2 || Object.keys(a2).length !== Object.keys(b2).length) {
    return false;
  }
  for (const key2 in a2) {
    if (a2[key2] !== b2[key2]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject$5(o2) {
  if (!hasObjectPrototype(o2)) {
    return false;
  }
  const ctor = o2.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o2) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve2) => {
    setTimeout(resolve2, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    {
      try {
        return replaceEqualDeep(prevData, data);
      } catch (error) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
        );
        throw error;
      }
    }
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  {
    if (options.queryFn === skipToken) {
      console.error(
        `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
      );
    }
  }
  if (!options.queryFn && (fetchOptions == null ? void 0 : fetchOptions.initialPromise)) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}
var FocusManager = (_a = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _focused, void 0);
    __privateAdd(this, _cleanup, void 0);
    __privateAdd(this, _setup, void 0);
    __privateSet(this, _setup, (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup)) {
      this.setEventListener(__privateGet(this, _setup));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup, setup);
    (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup, setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(focused) {
    const changed = __privateGet(this, _focused) !== focused;
    if (changed) {
      __privateSet(this, _focused, focused);
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    var _a2;
    if (typeof __privateGet(this, _focused) === "boolean") {
      return __privateGet(this, _focused);
    }
    return ((_a2 = globalThis.document) == null ? void 0 : _a2.visibilityState) !== "hidden";
  }
}, _focused = new WeakMap(), _cleanup = new WeakMap(), _setup = new WeakMap(), _a);
var focusManager = new FocusManager();
var OnlineManager = (_b = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _online, true);
    __privateAdd(this, _cleanup2, void 0);
    __privateAdd(this, _setup2, void 0);
    __privateSet(this, _setup2, (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup2)) {
      this.setEventListener(__privateGet(this, _setup2));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup2, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup2, setup);
    (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup2, setup(this.setOnline.bind(this)));
  }
  setOnline(online) {
    const changed = __privateGet(this, _online) !== online;
    if (changed) {
      __privateSet(this, _online, online);
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return __privateGet(this, _online);
  }
}, _online = new WeakMap(), _cleanup2 = new WeakMap(), _setup2 = new WeakMap(), _b);
var onlineManager = new OnlineManager();
function pendingThenable() {
  let resolve2;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve2 = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve2(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * __pow(2, failureCount), 3e4);
}
function canFetch(networkMode) {
  return (networkMode != null ? networkMode : "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    var _a2;
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      (_a2 = config.onCancel) == null ? void 0 : _a2.call(config, error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve2 = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.reject(value);
    }
  };
  const pause2 = () => {
    return new Promise((continueResolve) => {
      var _a2;
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      (_a2 = config.onPause) == null ? void 0 : _a2.call(config);
    }).then(() => {
      var _a2;
      continueFn = void 0;
      if (!isResolved()) {
        (_a2 = config.onContinue) == null ? void 0 : _a2.call(config);
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise != null ? initialPromise : config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve2).catch((error) => {
      var _a2, _b2, _c2;
      if (isResolved()) {
        return;
      }
      const retry = (_a2 = config.retry) != null ? _a2 : isServer ? 0 : 3;
      const retryDelay = (_b2 = config.retryDelay) != null ? _b2 : defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      (_c2 = config.onFail) == null ? void 0 : _c2.call(config, failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause2();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn == null ? void 0 : continueFn();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause2().then(run);
      }
      return thenable;
    }
  };
}
var defaultScheduler = (cb) => setTimeout(cb, 0);
function createNotifyManager() {
  let queue2 = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue2.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue2;
    queue2 = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();
var Removable = (_c = class {
  constructor() {
    __privateAdd(this, _gcTimeout, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      __privateSet(this, _gcTimeout, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime != null ? newGcTime : isServer ? Infinity : 5 * 60 * 1e3
    );
  }
  clearGcTimeout() {
    if (__privateGet(this, _gcTimeout)) {
      clearTimeout(__privateGet(this, _gcTimeout));
      __privateSet(this, _gcTimeout, void 0);
    }
  }
}, _gcTimeout = new WeakMap(), _c);
var Query = (_d = class extends Removable {
  constructor(config) {
    var _a2;
    super();
    __privateAdd(this, _dispatch);
    __privateAdd(this, _initialState, void 0);
    __privateAdd(this, _revertState, void 0);
    __privateAdd(this, _cache, void 0);
    __privateAdd(this, _client, void 0);
    __privateAdd(this, _retryer, void 0);
    __privateAdd(this, _defaultOptions, void 0);
    __privateAdd(this, _abortSignalConsumed, void 0);
    __privateSet(this, _abortSignalConsumed, false);
    __privateSet(this, _defaultOptions, config.defaultOptions);
    this.setOptions(config.options);
    this.observers = [];
    __privateSet(this, _client, config.client);
    __privateSet(this, _cache, __privateGet(this, _client).getQueryCache());
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    __privateSet(this, _initialState, getDefaultState$1(this.options));
    this.state = (_a2 = config.state) != null ? _a2 : __privateGet(this, _initialState);
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a2;
    return (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
  }
  setOptions(options) {
    this.options = __spreadValues(__spreadValues({}, __privateGet(this, _defaultOptions)), options);
    this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      __privateGet(this, _cache).remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    __privateMethod(this, _dispatch, dispatch_fn).call(this, {
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "setState", state, setStateOptions });
  }
  cancel(options) {
    var _a2, _b2;
    const promise = (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
    (_b2 = __privateGet(this, _retryer)) == null ? void 0 : _b2.cancel(options);
    return promise ? promise.then(noop$2).catch(noop$2) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(__privateGet(this, _initialState));
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  onOnline() {
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      __privateGet(this, _cache).notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (__privateGet(this, _retryer)) {
          if (__privateGet(this, _abortSignalConsumed)) {
            __privateGet(this, _retryer).cancel({ revert: true });
          } else {
            __privateGet(this, _retryer).cancelRetry();
          }
        }
        this.scheduleGc();
      }
      __privateGet(this, _cache).notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "invalidate" });
    }
  }
  fetch(options, fetchOptions) {
    return __async(this, null, function* () {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j2, _k2, _l2;
      if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
      // re-start the fetch; there is a chance that the query is still in a
      // pending state when that happens
      ((_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.status()) !== "rejected") {
        if (this.state.data !== void 0 && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
          this.cancel({ silent: true });
        } else if (__privateGet(this, _retryer)) {
          __privateGet(this, _retryer).continueRetry();
          return __privateGet(this, _retryer).promise;
        }
      }
      if (options) {
        this.setOptions(options);
      }
      if (!this.options.queryFn) {
        const observer = this.observers.find((x) => x.options.queryFn);
        if (observer) {
          this.setOptions(observer.options);
        }
      }
      {
        if (!Array.isArray(this.options.queryKey)) {
          console.error(
            `As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`
          );
        }
      }
      const abortController = new AbortController();
      const addSignalProperty = (object) => {
        Object.defineProperty(object, "signal", {
          enumerable: true,
          get: () => {
            __privateSet(this, _abortSignalConsumed, true);
            return abortController.signal;
          }
        });
      };
      const fetchFn = () => {
        const queryFn = ensureQueryFn(this.options, fetchOptions);
        const createQueryFnContext = () => {
          const queryFnContext2 = {
            client: __privateGet(this, _client),
            queryKey: this.queryKey,
            meta: this.meta
          };
          addSignalProperty(queryFnContext2);
          return queryFnContext2;
        };
        const queryFnContext = createQueryFnContext();
        __privateSet(this, _abortSignalConsumed, false);
        if (this.options.persister) {
          return this.options.persister(
            queryFn,
            queryFnContext,
            this
          );
        }
        return queryFn(queryFnContext);
      };
      const createFetchContext = () => {
        const context22 = {
          fetchOptions,
          options: this.options,
          queryKey: this.queryKey,
          client: __privateGet(this, _client),
          state: this.state,
          fetchFn
        };
        addSignalProperty(context22);
        return context22;
      };
      const context2 = createFetchContext();
      (_b2 = this.options.behavior) == null ? void 0 : _b2.onFetch(context2, this);
      __privateSet(this, _revertState, this.state);
      if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c2 = context2.fetchOptions) == null ? void 0 : _c2.meta)) {
        __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "fetch", meta: (_d2 = context2.fetchOptions) == null ? void 0 : _d2.meta });
      }
      __privateSet(this, _retryer, createRetryer({
        initialPromise: fetchOptions == null ? void 0 : fetchOptions.initialPromise,
        fn: context2.fetchFn,
        onCancel: (error) => {
          if (error instanceof CancelledError && error.revert) {
            this.setState(__spreadProps(__spreadValues({}, __privateGet(this, _revertState)), {
              fetchStatus: "idle"
            }));
          }
          abortController.abort();
        },
        onFail: (failureCount, error) => {
          __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "failed", failureCount, error });
        },
        onPause: () => {
          __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "pause" });
        },
        onContinue: () => {
          __privateMethod(this, _dispatch, dispatch_fn).call(this, { type: "continue" });
        },
        retry: context2.options.retry,
        retryDelay: context2.options.retryDelay,
        networkMode: context2.options.networkMode,
        canRun: () => true
      }));
      try {
        const data = yield __privateGet(this, _retryer).start();
        if (data === void 0) {
          if (true) {
            console.error(
              `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
            );
          }
          throw new Error(`${this.queryHash} data is undefined`);
        }
        this.setData(data);
        (_f2 = (_e2 = __privateGet(this, _cache).config).onSuccess) == null ? void 0 : _f2.call(_e2, data, this);
        (_h2 = (_g2 = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _h2.call(
          _g2,
          data,
          this.state.error,
          this
        );
        return data;
      } catch (error) {
        if (error instanceof CancelledError) {
          if (error.silent) {
            return __privateGet(this, _retryer).promise;
          } else if (error.revert) {
            if (this.state.data === void 0) {
              throw error;
            }
            return this.state.data;
          }
        }
        __privateMethod(this, _dispatch, dispatch_fn).call(this, {
          type: "error",
          error
        });
        (_j2 = (_i = __privateGet(this, _cache).config).onError) == null ? void 0 : _j2.call(
          _i,
          error,
          this
        );
        (_l2 = (_k2 = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _l2.call(
          _k2,
          this.state.data,
          error,
          this
        );
        throw error;
      } finally {
        this.scheduleGc();
      }
    });
  }
}, _initialState = new WeakMap(), _revertState = new WeakMap(), _cache = new WeakMap(), _client = new WeakMap(), _retryer = new WeakMap(), _defaultOptions = new WeakMap(), _abortSignalConsumed = new WeakMap(), _dispatch = new WeakSet(), dispatch_fn = function(action) {
  const reducer = (state) => {
    var _a2, _b2;
    switch (action.type) {
      case "failed":
        return __spreadProps(__spreadValues({}, state), {
          fetchFailureCount: action.failureCount,
          fetchFailureReason: action.error
        });
      case "pause":
        return __spreadProps(__spreadValues({}, state), {
          fetchStatus: "paused"
        });
      case "continue":
        return __spreadProps(__spreadValues({}, state), {
          fetchStatus: "fetching"
        });
      case "fetch":
        return __spreadProps(__spreadValues(__spreadValues({}, state), fetchState(state.data, this.options)), {
          fetchMeta: (_a2 = action.meta) != null ? _a2 : null
        });
      case "success":
        const newState = __spreadValues(__spreadProps(__spreadValues({}, state), {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_b2 = action.dataUpdatedAt) != null ? _b2 : Date.now(),
          error: null,
          isInvalidated: false,
          status: "success"
        }), !action.manual && {
          fetchStatus: "idle",
          fetchFailureCount: 0,
          fetchFailureReason: null
        });
        __privateSet(this, _revertState, action.manual ? newState : void 0);
        return newState;
      case "error":
        const error = action.error;
        return __spreadProps(__spreadValues({}, state), {
          error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          fetchFailureReason: error,
          fetchStatus: "idle",
          status: "error"
        });
      case "invalidate":
        return __spreadProps(__spreadValues({}, state), {
          isInvalidated: true
        });
      case "setState":
        return __spreadValues(__spreadValues({}, state), action.state);
    }
  };
  this.state = reducer(this.state);
  notifyManager.batch(() => {
    this.observers.forEach((observer) => {
      observer.onQueryUpdate();
    });
    __privateGet(this, _cache).notify({ query: this, type: "updated", action });
  });
}, _d);
function fetchState(data, options) {
  return __spreadValues({
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused"
  }, data === void 0 && {
    error: null,
    status: "pending"
  });
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var QueryCache$1 = (_e = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _queries, void 0);
    this.config = config;
    __privateSet(this, _queries, /* @__PURE__ */ new Map());
  }
  build(client, options, state) {
    var _a2;
    const queryKey = options.queryKey;
    const queryHash = (_a2 = options.queryHash) != null ? _a2 : hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!__privateGet(this, _queries).has(query.queryHash)) {
      __privateGet(this, _queries).set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = __privateGet(this, _queries).get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        __privateGet(this, _queries).delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return __privateGet(this, _queries).get(queryHash);
  }
  getAll() {
    return [...__privateGet(this, _queries).values()];
  }
  find(filters) {
    const defaultedFilters = __spreadValues({ exact: true }, filters);
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
}, _queries = new WeakMap(), _e);
var Mutation = (_f = class extends Removable {
  constructor(config) {
    super();
    __privateAdd(this, _dispatch2);
    __privateAdd(this, _observers, void 0);
    __privateAdd(this, _mutationCache, void 0);
    __privateAdd(this, _retryer2, void 0);
    this.mutationId = config.mutationId;
    __privateSet(this, _mutationCache, config.mutationCache);
    __privateSet(this, _observers, []);
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!__privateGet(this, _observers).includes(observer)) {
      __privateGet(this, _observers).push(observer);
      this.clearGcTimeout();
      __privateGet(this, _mutationCache).notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    __privateSet(this, _observers, __privateGet(this, _observers).filter((x) => x !== observer));
    this.scheduleGc();
    __privateGet(this, _mutationCache).notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!__privateGet(this, _observers).length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        __privateGet(this, _mutationCache).remove(this);
      }
    }
  }
  continue() {
    var _a2, _b2;
    return (_b2 = (_a2 = __privateGet(this, _retryer2)) == null ? void 0 : _a2.continue()) != null ? _b2 : (
      // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
      this.execute(this.state.variables)
    );
  }
  execute(variables) {
    return __async(this, null, function* () {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u;
      const onContinue = () => {
        __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "continue" });
      };
      __privateSet(this, _retryer2, createRetryer({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject(new Error("No mutationFn found"));
          }
          return this.options.mutationFn(variables);
        },
        onFail: (failureCount, error) => {
          __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "failed", failureCount, error });
        },
        onPause: () => {
          __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "pause" });
        },
        onContinue,
        retry: (_a2 = this.options.retry) != null ? _a2 : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _mutationCache).canRun(this)
      }));
      const restored = this.state.status === "pending";
      const isPaused = !__privateGet(this, _retryer2).canStart();
      try {
        if (restored) {
          onContinue();
        } else {
          __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "pending", variables, isPaused });
          yield (_c2 = (_b2 = __privateGet(this, _mutationCache).config).onMutate) == null ? void 0 : _c2.call(
            _b2,
            variables,
            this
          );
          const context2 = yield (_e2 = (_d2 = this.options).onMutate) == null ? void 0 : _e2.call(_d2, variables);
          if (context2 !== this.state.context) {
            __privateMethod(this, _dispatch2, dispatch_fn2).call(this, {
              type: "pending",
              context: context2,
              variables,
              isPaused
            });
          }
        }
        const data = yield __privateGet(this, _retryer2).start();
        yield (_g2 = (_f2 = __privateGet(this, _mutationCache).config).onSuccess) == null ? void 0 : _g2.call(
          _f2,
          data,
          variables,
          this.state.context,
          this
        );
        yield (_i = (_h2 = this.options).onSuccess) == null ? void 0 : _i.call(_h2, data, variables, this.state.context);
        yield (_k2 = (_j2 = __privateGet(this, _mutationCache).config).onSettled) == null ? void 0 : _k2.call(
          _j2,
          data,
          null,
          this.state.variables,
          this.state.context,
          this
        );
        yield (_m2 = (_l2 = this.options).onSettled) == null ? void 0 : _m2.call(_l2, data, null, variables, this.state.context);
        __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "success", data });
        return data;
      } catch (error) {
        try {
          yield (_o2 = (_n2 = __privateGet(this, _mutationCache).config).onError) == null ? void 0 : _o2.call(
            _n2,
            error,
            variables,
            this.state.context,
            this
          );
          yield (_q2 = (_p2 = this.options).onError) == null ? void 0 : _q2.call(
            _p2,
            error,
            variables,
            this.state.context
          );
          yield (_s2 = (_r2 = __privateGet(this, _mutationCache).config).onSettled) == null ? void 0 : _s2.call(
            _r2,
            void 0,
            error,
            this.state.variables,
            this.state.context,
            this
          );
          yield (_u = (_t2 = this.options).onSettled) == null ? void 0 : _u.call(
            _t2,
            void 0,
            error,
            variables,
            this.state.context
          );
          throw error;
        } finally {
          __privateMethod(this, _dispatch2, dispatch_fn2).call(this, { type: "error", error });
        }
      } finally {
        __privateGet(this, _mutationCache).runNext(this);
      }
    });
  }
}, _observers = new WeakMap(), _mutationCache = new WeakMap(), _retryer2 = new WeakMap(), _dispatch2 = new WeakSet(), dispatch_fn2 = function(action) {
  const reducer = (state) => {
    switch (action.type) {
      case "failed":
        return __spreadProps(__spreadValues({}, state), {
          failureCount: action.failureCount,
          failureReason: action.error
        });
      case "pause":
        return __spreadProps(__spreadValues({}, state), {
          isPaused: true
        });
      case "continue":
        return __spreadProps(__spreadValues({}, state), {
          isPaused: false
        });
      case "pending":
        return __spreadProps(__spreadValues({}, state), {
          context: action.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: action.isPaused,
          status: "pending",
          variables: action.variables,
          submittedAt: Date.now()
        });
      case "success":
        return __spreadProps(__spreadValues({}, state), {
          data: action.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: false
        });
      case "error":
        return __spreadProps(__spreadValues({}, state), {
          data: void 0,
          error: action.error,
          failureCount: state.failureCount + 1,
          failureReason: action.error,
          isPaused: false,
          status: "error"
        });
    }
  };
  this.state = reducer(this.state);
  notifyManager.batch(() => {
    __privateGet(this, _observers).forEach((observer) => {
      observer.onMutationUpdate(action);
    });
    __privateGet(this, _mutationCache).notify({
      mutation: this,
      type: "updated",
      action
    });
  });
}, _f);
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache$1 = (_g = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _mutations, void 0);
    __privateAdd(this, _scopes, void 0);
    __privateAdd(this, _mutationId, void 0);
    this.config = config;
    __privateSet(this, _mutations, /* @__PURE__ */ new Set());
    __privateSet(this, _scopes, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationId, 0);
  }
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++__privateWrapper(this, _mutationId)._,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    __privateGet(this, _mutations).add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = __privateGet(this, _scopes).get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        __privateGet(this, _scopes).set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (__privateGet(this, _mutations).delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = __privateGet(this, _scopes).get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index2 = scopedMutations.indexOf(mutation);
            if (index2 !== -1) {
              scopedMutations.splice(index2, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            __privateGet(this, _scopes).delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = __privateGet(this, _scopes).get(scope);
      const firstPendingMutation = mutationsWithSameScope == null ? void 0 : mutationsWithSameScope.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    var _a2, _b2;
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = (_a2 = __privateGet(this, _scopes).get(scope)) == null ? void 0 : _a2.find((m) => m !== mutation && m.state.isPaused);
      return (_b2 = foundMutation == null ? void 0 : foundMutation.continue()) != null ? _b2 : Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      __privateGet(this, _mutations).forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      __privateGet(this, _mutations).clear();
      __privateGet(this, _scopes).clear();
    });
  }
  getAll() {
    return Array.from(__privateGet(this, _mutations));
  }
  find(filters) {
    const defaultedFilters = __spreadValues({ exact: true }, filters);
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop$2))
      )
    );
  }
}, _mutations = new WeakMap(), _scopes = new WeakMap(), _mutationId = new WeakMap(), _g);
function scopeFor(mutation) {
  var _a2;
  return (_a2 = mutation.options.scope) == null ? void 0 : _a2.id;
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context2, query) => {
      var _a2, _b2, _c2, _d2, _e2;
      const options = context2.options;
      const direction = (_c2 = (_b2 = (_a2 = context2.fetchOptions) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c2.direction;
      const oldPages = ((_d2 = context2.state.data) == null ? void 0 : _d2.pages) || [];
      const oldPageParams = ((_e2 = context2.state.data) == null ? void 0 : _e2.pageParams) || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = () => __async(this, null, function* () {
        var _a3;
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context2.signal.aborted) {
                cancelled = true;
              } else {
                context2.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context2.signal;
            }
          });
        };
        const queryFn = ensureQueryFn(context2.options, context2.fetchOptions);
        const fetchPage = (data, param, previous) => __async(this, null, function* () {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context2.client,
              queryKey: context2.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context2.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = yield queryFn(queryFnContext);
          const { maxPages } = context2.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        });
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = yield fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages != null ? pages : oldPages.length;
          do {
            const param = currentPage === 0 ? (_a3 = oldPageParams[0]) != null ? _a3 : options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = yield fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      });
      if (context2.options.persister) {
        context2.fetchFn = () => {
          var _a3, _b3;
          return (_b3 = (_a3 = context2.options).persister) == null ? void 0 : _b3.call(
            _a3,
            fetchFn,
            {
              client: context2.client,
              queryKey: context2.queryKey,
              meta: context2.options.meta,
              signal: context2.signal
            },
            query
          );
        };
      } else {
        context2.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  var _a2;
  return pages.length > 0 ? (_a2 = options.getPreviousPageParam) == null ? void 0 : _a2.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
var QueryClient$1 = (_h = class {
  constructor(config = {}) {
    __privateAdd(this, _queryCache, void 0);
    __privateAdd(this, _mutationCache2, void 0);
    __privateAdd(this, _defaultOptions2, void 0);
    __privateAdd(this, _queryDefaults, void 0);
    __privateAdd(this, _mutationDefaults, void 0);
    __privateAdd(this, _mountCount, void 0);
    __privateAdd(this, _unsubscribeFocus, void 0);
    __privateAdd(this, _unsubscribeOnline, void 0);
    __privateSet(this, _queryCache, config.queryCache || new QueryCache$1());
    __privateSet(this, _mutationCache2, config.mutationCache || new MutationCache$1());
    __privateSet(this, _defaultOptions2, config.defaultOptions || {});
    __privateSet(this, _queryDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mountCount, 0);
  }
  mount() {
    __privateWrapper(this, _mountCount)._++;
    if (__privateGet(this, _mountCount) !== 1)
      return;
    __privateSet(this, _unsubscribeFocus, focusManager.subscribe((focused) => __async(this, null, function* () {
      if (focused) {
        yield this.resumePausedMutations();
        __privateGet(this, _queryCache).onFocus();
      }
    })));
    __privateSet(this, _unsubscribeOnline, onlineManager.subscribe((online) => __async(this, null, function* () {
      if (online) {
        yield this.resumePausedMutations();
        __privateGet(this, _queryCache).onOnline();
      }
    })));
  }
  unmount() {
    var _a2, _b2;
    __privateWrapper(this, _mountCount)._--;
    if (__privateGet(this, _mountCount) !== 0)
      return;
    (_a2 = __privateGet(this, _unsubscribeFocus)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _unsubscribeFocus, void 0);
    (_b2 = __privateGet(this, _unsubscribeOnline)) == null ? void 0 : _b2.call(this);
    __privateSet(this, _unsubscribeOnline, void 0);
  }
  isFetching(filters) {
    return __privateGet(this, _queryCache).findAll(__spreadProps(__spreadValues({}, filters), { fetchStatus: "fetching" })).length;
  }
  isMutating(filters) {
    return __privateGet(this, _mutationCache2).findAll(__spreadProps(__spreadValues({}, filters), { status: "pending" })).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(options.queryHash)) == null ? void 0 : _a2.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return __privateGet(this, _queryCache).findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = __privateGet(this, _queryCache).get(
      defaultedOptions.queryHash
    );
    const prevData = query == null ? void 0 : query.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return __privateGet(this, _queryCache).build(this, defaultedOptions).setData(data, __spreadProps(__spreadValues({}, options), { manual: true }));
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(
      options.queryHash
    )) == null ? void 0 : _a2.state;
  }
  removeQueries(filters) {
    const queryCache2 = __privateGet(this, _queryCache);
    notifyManager.batch(() => {
      queryCache2.findAll(filters).forEach((query) => {
        queryCache2.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache2 = __privateGet(this, _queryCache);
    return notifyManager.batch(() => {
      queryCache2.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        __spreadValues({
          type: "active"
        }, filters),
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = __spreadValues({ revert: true }, cancelOptions);
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop$2).catch(noop$2);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      var _a2, _b2;
      __privateGet(this, _queryCache).findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if ((filters == null ? void 0 : filters.refetchType) === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        __spreadProps(__spreadValues({}, filters), {
          type: (_b2 = (_a2 = filters == null ? void 0 : filters.refetchType) != null ? _a2 : filters == null ? void 0 : filters.type) != null ? _b2 : "active"
        }),
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    var _a2;
    const fetchOptions = __spreadProps(__spreadValues({}, options), {
      cancelRefetch: (_a2 = options.cancelRefetch) != null ? _a2 : true
    });
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop$2);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop$2);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop$2).catch(noop$2);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop$2).catch(noop$2);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return __privateGet(this, _mutationCache2).resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return __privateGet(this, _queryCache);
  }
  getMutationCache() {
    return __privateGet(this, _mutationCache2);
  }
  getDefaultOptions() {
    return __privateGet(this, _defaultOptions2);
  }
  setDefaultOptions(options) {
    __privateSet(this, _defaultOptions2, options);
  }
  setQueryDefaults(queryKey, options) {
    __privateGet(this, _queryDefaults).set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...__privateGet(this, _queryDefaults).values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    __privateGet(this, _mutationDefaults).set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...__privateGet(this, _mutationDefaults).values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, __privateGet(this, _defaultOptions2).queries), this.getQueryDefaults(options.queryKey)), options), {
      _defaulted: true
    });
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, __privateGet(this, _defaultOptions2).mutations), (options == null ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey)), options), {
      _defaulted: true
    });
  }
  clear() {
    __privateGet(this, _queryCache).clear();
    __privateGet(this, _mutationCache2).clear();
  }
}, _queryCache = new WeakMap(), _mutationCache2 = new WeakMap(), _defaultOptions2 = new WeakMap(), _queryDefaults = new WeakMap(), _mutationDefaults = new WeakMap(), _mountCount = new WeakMap(), _unsubscribeFocus = new WeakMap(), _unsubscribeOnline = new WeakMap(), _h);
var QueryObserver = (_j = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _executeFetch);
    __privateAdd(this, _updateStaleTimeout);
    __privateAdd(this, _computeRefetchInterval);
    __privateAdd(this, _updateRefetchInterval);
    __privateAdd(this, _updateTimers);
    __privateAdd(this, _clearStaleTimeout);
    __privateAdd(this, _clearRefetchInterval);
    __privateAdd(this, _updateQuery);
    __privateAdd(this, _notify);
    __privateAdd(this, _client2, void 0);
    __privateAdd(this, _currentQuery, void 0);
    __privateAdd(this, _currentQueryInitialState, void 0);
    __privateAdd(this, _currentResult, void 0);
    __privateAdd(this, _currentResultState, void 0);
    __privateAdd(this, _currentResultOptions, void 0);
    __privateAdd(this, _currentThenable, void 0);
    __privateAdd(this, _selectError, void 0);
    __privateAdd(this, _selectFn, void 0);
    __privateAdd(this, _selectResult, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData, void 0);
    __privateAdd(this, _staleTimeoutId, void 0);
    __privateAdd(this, _refetchIntervalId, void 0);
    __privateAdd(this, _currentRefetchInterval, void 0);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client2, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _updateTimers, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _clearStaleTimeout, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _clearRefetchInterval, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client2).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _updateQuery, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _updateStaleTimeout, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _computeRefetchInterval, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _updateRefetchInterval, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key2) => {
        this.trackProp(key2);
        onPropTracked == null ? void 0 : onPropTracked(key2);
        if (key2 === "promise" && !this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
          __privateGet(this, _currentThenable).reject(
            new Error(
              "experimental_prefetchInRender feature flag is not enabled"
            )
          );
        }
        return Reflect.get(target, key2);
      }
    });
  }
  trackProp(key2) {
    __privateGet(this, _trackedProps).add(key2);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch(_i = {}) {
    var options = __objRest(_i, []);
    return this.fetch(__spreadValues({}, options));
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client2).defaultQueryOptions(options);
    const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    var _a2;
    return __privateMethod(this, _executeFetch, executeFetch_fn).call(this, __spreadProps(__spreadValues({}, fetchOptions), {
      cancelRefetch: (_a2 = fetchOptions.cancelRefetch) != null ? _a2 : true
    })).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = __spreadValues({}, state);
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = __spreadValues(__spreadValues({}, newState), fetchState(state.data, query.options));
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue != null ? notifyOnChangePropsValue : __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key2) => {
        const typedKey = key2;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _notify, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _updateTimers, updateTimers_fn).call(this);
    }
  }
}, _client2 = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _executeFetch = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _updateQuery, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop$2);
  }
  return promise;
}, _updateStaleTimeout = new WeakSet(), updateStaleTimeout_fn = function() {
  __privateMethod(this, _clearStaleTimeout, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (isServer || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout = time + 1;
  __privateSet(this, _staleTimeoutId, setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout));
}, _computeRefetchInterval = new WeakSet(), computeRefetchInterval_fn = function() {
  var _a2;
  return (_a2 = typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) != null ? _a2 : false;
}, _updateRefetchInterval = new WeakSet(), updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _clearRefetchInterval, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (isServer || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, _updateTimers = new WeakSet(), updateTimers_fn = function() {
  __privateMethod(this, _updateStaleTimeout, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _updateRefetchInterval, updateRefetchInterval_fn).call(this, __privateMethod(this, _computeRefetchInterval, computeRefetchInterval_fn).call(this));
}, _clearStaleTimeout = new WeakSet(), clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, _clearRefetchInterval = new WeakSet(), clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, _updateQuery = new WeakSet(), updateQuery_fn = function() {
  const query = __privateGet(this, _client2).getQueryCache().build(__privateGet(this, _client2), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, _notify = new WeakSet(), notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client2).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _j);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var VUE_QUERY_CLIENT = "VUE_QUERY_CLIENT";
function getClientKey(key2) {
  const suffix = key2 ? `:${key2}` : "";
  return `${VUE_QUERY_CLIENT}${suffix}`;
}
function updateState(state, update) {
  Object.keys(state).forEach((key2) => {
    state[key2] = update[key2];
  });
}
function _cloneDeep(value, customize, currentKey = "", currentLevel = 0) {
  if (customize) {
    const result = customize(value, currentKey, currentLevel);
    if (result === void 0 && isRef(value)) {
      return result;
    }
    if (result !== void 0) {
      return result;
    }
  }
  if (Array.isArray(value)) {
    return value.map(
      (val, index2) => _cloneDeep(val, customize, String(index2), currentLevel + 1)
    );
  }
  if (typeof value === "object" && isPlainObject$4(value)) {
    const entries = Object.entries(value).map(([key2, val]) => [
      key2,
      _cloneDeep(val, customize, key2, currentLevel + 1)
    ]);
    return Object.fromEntries(entries);
  }
  return value;
}
function cloneDeep(value, customize) {
  return _cloneDeep(value, customize);
}
function cloneDeepUnref(obj, unrefGetters = false) {
  return cloneDeep(obj, (val, key2, level) => {
    if (level === 1 && key2 === "queryKey") {
      return cloneDeepUnref(val, true);
    }
    if (unrefGetters && isFunction$3(val)) {
      return cloneDeepUnref(val(), unrefGetters);
    }
    if (isRef(val)) {
      return cloneDeepUnref(unref(val), unrefGetters);
    }
    return void 0;
  });
}
function isPlainObject$4(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
function isFunction$3(value) {
  return typeof value === "function";
}
function useQueryClient(id = "") {
  if (!hasInjectionContext()) {
    throw new Error(
      "vue-query hooks can only be used inside setup() function or functions that support injection context."
    );
  }
  const key2 = getClientKey(id);
  const queryClient = inject(key2);
  if (!queryClient) {
    throw new Error(
      "No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."
    );
  }
  return queryClient;
}
var QueryCache = class extends QueryCache$1 {
  find(filters) {
    return super.find(cloneDeepUnref(filters));
  }
  findAll(filters = {}) {
    return super.findAll(cloneDeepUnref(filters));
  }
};
var MutationCache = class extends MutationCache$1 {
  find(filters) {
    return super.find(cloneDeepUnref(filters));
  }
  findAll(filters = {}) {
    return super.findAll(cloneDeepUnref(filters));
  }
};
var QueryClient = class extends QueryClient$1 {
  constructor(config = {}) {
    const vueQueryConfig = {
      defaultOptions: config.defaultOptions,
      queryCache: config.queryCache || new QueryCache(),
      mutationCache: config.mutationCache || new MutationCache()
    };
    super(vueQueryConfig);
    this.isRestoring = ref(false);
  }
  isFetching(filters = {}) {
    return super.isFetching(cloneDeepUnref(filters));
  }
  isMutating(filters = {}) {
    return super.isMutating(cloneDeepUnref(filters));
  }
  getQueryData(queryKey) {
    return super.getQueryData(cloneDeepUnref(queryKey));
  }
  ensureQueryData(options) {
    return super.ensureQueryData(cloneDeepUnref(options));
  }
  getQueriesData(filters) {
    return super.getQueriesData(cloneDeepUnref(filters));
  }
  setQueryData(queryKey, updater, options = {}) {
    return super.setQueryData(
      cloneDeepUnref(queryKey),
      updater,
      cloneDeepUnref(options)
    );
  }
  setQueriesData(filters, updater, options = {}) {
    return super.setQueriesData(
      cloneDeepUnref(filters),
      updater,
      cloneDeepUnref(options)
    );
  }
  getQueryState(queryKey) {
    return super.getQueryState(cloneDeepUnref(queryKey));
  }
  removeQueries(filters = {}) {
    return super.removeQueries(cloneDeepUnref(filters));
  }
  resetQueries(filters = {}, options = {}) {
    return super.resetQueries(cloneDeepUnref(filters), cloneDeepUnref(options));
  }
  cancelQueries(filters = {}, options = {}) {
    return super.cancelQueries(cloneDeepUnref(filters), cloneDeepUnref(options));
  }
  invalidateQueries(filters = {}, options = {}) {
    var _a2, _b2;
    const filtersCloned = cloneDeepUnref(filters);
    const optionsCloned = cloneDeepUnref(options);
    super.invalidateQueries(
      __spreadProps(__spreadValues({}, filtersCloned), { refetchType: "none" }),
      optionsCloned
    );
    if (filtersCloned.refetchType === "none") {
      return Promise.resolve();
    }
    const refetchFilters = __spreadProps(__spreadValues({}, filtersCloned), {
      type: (_b2 = (_a2 = filtersCloned.refetchType) != null ? _a2 : filtersCloned.type) != null ? _b2 : "active"
    });
    return nextTick$1().then(() => {
      return super.refetchQueries(refetchFilters, optionsCloned);
    });
  }
  refetchQueries(filters = {}, options = {}) {
    return super.refetchQueries(
      cloneDeepUnref(filters),
      cloneDeepUnref(options)
    );
  }
  fetchQuery(options) {
    return super.fetchQuery(cloneDeepUnref(options));
  }
  prefetchQuery(options) {
    return super.prefetchQuery(cloneDeepUnref(options));
  }
  fetchInfiniteQuery(options) {
    return super.fetchInfiniteQuery(cloneDeepUnref(options));
  }
  prefetchInfiniteQuery(options) {
    return super.prefetchInfiniteQuery(cloneDeepUnref(options));
  }
  setDefaultOptions(options) {
    super.setDefaultOptions(cloneDeepUnref(options));
  }
  setQueryDefaults(queryKey, options) {
    super.setQueryDefaults(cloneDeepUnref(queryKey), cloneDeepUnref(options));
  }
  getQueryDefaults(queryKey) {
    return super.getQueryDefaults(cloneDeepUnref(queryKey));
  }
  setMutationDefaults(mutationKey, options) {
    super.setMutationDefaults(
      cloneDeepUnref(mutationKey),
      cloneDeepUnref(options)
    );
  }
  getMutationDefaults(mutationKey) {
    return super.getMutationDefaults(cloneDeepUnref(mutationKey));
  }
};
function getQueryState(query) {
  if (query.state.fetchStatus === "fetching") {
    return 0;
  }
  if (query.state.fetchStatus === "paused") {
    return 4;
  }
  if (!query.getObserversCount()) {
    return 3;
  }
  if (query.isStale()) {
    return 2;
  }
  return 1;
}
var queryHashSort = (a2, b2) => a2.queryHash.localeCompare(b2.queryHash);
var dateSort = (a2, b2) => a2.state.dataUpdatedAt < b2.state.dataUpdatedAt ? 1 : -1;
var statusAndDateSort = (a2, b2) => {
  if (getQueryState(a2) === getQueryState(b2)) {
    return dateSort(a2, b2);
  }
  return getQueryState(a2) > getQueryState(b2) ? 1 : -1;
};
var sortFns = {
  "Status > Last Updated": statusAndDateSort,
  "Query Hash": queryHashSort,
  "Last Updated": dateSort
};
function setupDevtools(app, queryClient) {
  setupDevtoolsPlugin(
    {
      settings: {
        sortFn: {
          options: Object.keys(sortFns).map((key2) => ({
            label: key2,
            value: key2
          })),
          defaultValue: Object.keys(sortFns)[0]
        }
      }
    }
  );
}
var VueQueryPlugin = {
  install: (app, options = {}) => {
    const clientKey = getClientKey(options.queryClientKey);
    let client;
    if ("queryClient" in options && options.queryClient) {
      client = options.queryClient;
    } else {
      const clientConfig = "queryClientConfig" in options ? options.queryClientConfig : void 0;
      client = new QueryClient(clientConfig);
    }
    if (!isServer) {
      client.mount();
    }
    let persisterUnmount = () => {
    };
    if (options.clientPersister) {
      if (client.isRestoring) {
        client.isRestoring.value = true;
      }
      const [unmount, promise] = options.clientPersister(client);
      persisterUnmount = unmount;
      promise.then(() => {
        var _a2;
        if (client.isRestoring) {
          client.isRestoring.value = false;
        }
        (_a2 = options.clientPersisterOnSuccess) == null ? void 0 : _a2.call(options, client);
      });
    }
    const cleanup = () => {
      client.unmount();
      persisterUnmount();
    };
    if (app.onUnmount) {
      app.onUnmount(cleanup);
    } else {
      const originalUnmount = app.unmount;
      app.unmount = function vueQueryUnmount() {
        cleanup();
        originalUnmount();
      };
    }
    {
      app.provide(clientKey, client);
      {
        if (options.enableDevtoolsV6Plugin) {
          setupDevtools();
        }
      }
    }
  }
};
function queryOptions(options) {
  return options;
}
function useBaseQuery(Observer, options, queryClient) {
  {
    if (!getCurrentScope()) {
      console.warn(
        'vue-query composable like "useQuery()" should only be used inside a "setup()" function or a running effect scope. They might otherwise lead to memory leaks.'
      );
    }
  }
  const client = useQueryClient();
  const defaultedOptions = computed(() => {
    var _a2;
    const clonedOptions = cloneDeepUnref(options);
    if (typeof clonedOptions.enabled === "function") {
      clonedOptions.enabled = clonedOptions.enabled();
    }
    const defaulted = client.defaultQueryOptions(clonedOptions);
    defaulted._optimisticResults = ((_a2 = client.isRestoring) == null ? void 0 : _a2.value) ? "isRestoring" : "optimistic";
    return defaulted;
  });
  const observer = new Observer(client, defaultedOptions.value);
  const state = defaultedOptions.value.shallow ? shallowReactive(observer.getCurrentResult()) : reactive(observer.getCurrentResult());
  let unsubscribe = () => {
  };
  if (client.isRestoring) {
    watch(
      client.isRestoring,
      (isRestoring) => {
        if (!isRestoring) {
          unsubscribe();
          unsubscribe = observer.subscribe((result) => {
            updateState(state, result);
          });
        }
      },
      { immediate: true }
    );
  }
  const updater = () => {
    observer.setOptions(defaultedOptions.value);
    updateState(state, observer.getCurrentResult());
  };
  watch(defaultedOptions, updater);
  onScopeDispose(() => {
    unsubscribe();
  });
  const refetch = (...args) => {
    updater();
    return state.refetch(...args);
  };
  const suspense = () => {
    return new Promise(
      (resolve2, reject) => {
        let stopWatch = () => {
        };
        const run = () => {
          if (defaultedOptions.value.enabled !== false) {
            observer.setOptions(defaultedOptions.value);
            const optimisticResult = observer.getOptimisticResult(
              defaultedOptions.value
            );
            if (optimisticResult.isStale) {
              stopWatch();
              observer.fetchOptimistic(defaultedOptions.value).then(resolve2, (error) => {
                if (shouldThrowError(defaultedOptions.value.throwOnError, [
                  error,
                  observer.getCurrentQuery()
                ])) {
                  reject(error);
                } else {
                  resolve2(observer.getCurrentResult());
                }
              });
            } else {
              stopWatch();
              resolve2(optimisticResult);
            }
          }
        };
        run();
        stopWatch = watch(defaultedOptions, run);
      }
    );
  };
  watch(
    () => state.error,
    (error) => {
      if (state.isError && !state.isFetching && shouldThrowError(defaultedOptions.value.throwOnError, [
        error,
        observer.getCurrentQuery()
      ])) {
        throw error;
      }
    }
  );
  const readonlyState = defaultedOptions.value.shallow ? shallowReadonly(state) : readonly(state);
  const object = toRefs(readonlyState);
  for (const key2 in state) {
    if (typeof state[key2] === "function") {
      object[key2] = state[key2];
    }
  }
  object.suspense = suspense;
  object.refetch = refetch;
  return object;
}
function useQuery(options, queryClient) {
  return useBaseQuery(QueryObserver, options);
}
const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createLifeCycleHook(
  ON_SHOW,
  1 | 2
  /* HookFlags.PAGE */
);
const onHide = /* @__PURE__ */ createLifeCycleHook(
  ON_HIDE,
  1 | 2
  /* HookFlags.PAGE */
);
const onLaunch = /* @__PURE__ */ createLifeCycleHook(
  ON_LAUNCH,
  1
  /* HookFlags.APP */
);
const onLoad = /* @__PURE__ */ createLifeCycleHook(
  ON_LOAD,
  2
  /* HookFlags.PAGE */
);
const onReady = /* @__PURE__ */ createLifeCycleHook(
  ON_READY,
  2
  /* HookFlags.PAGE */
);
var define_import_meta_env_default = { VITE_APP_TITLE: "unibest", VITE_APP_PORT: "9000", VITE_UNI_APPID: "__UNI__D1E5001", VITE_WX_APPID: "wxa2abb91f64032a2b", VITE_APP_PUBLIC_BASE: "/", VITE_SERVER_BASEURL: "https://ukw0y1.laf.run", VITE_UPLOAD_BASEURL: "https://ukw0y1.laf.run/upload", VITE_APP_PROXY_ENABLE: "true", VITE_APP_PROXY_PREFIX: "/api", VITE_API_SECONDARY_URL: "https://ukw0y1.laf.run", VITE_AUTH_MODE: "single", VITE_DELETE_CONSOLE: "false", VITE_SHOW_SOURCEMAP: "false", VITE_CJS_IGNORE_WARNING: "true", VITE_ROOT_DIR: "E:\\github\\uniapp\\unibest\\unibest-i18n", VITE_USER_NODE_ENV: "development", BASE_URL: "/", MODE: "development", DEV: true, PROD: false, SSR: false };
const r = /* @__PURE__ */ Object.create(null), i = (e2) => {
  var _a2, _b2;
  return ((_a2 = globalThis.process) == null ? void 0 : _a2.env) || define_import_meta_env_default || ((_b2 = globalThis.Deno) == null ? void 0 : _b2.env.toObject()) || globalThis.__env__ || (e2 ? r : globalThis);
}, o = new Proxy(r, { get(e2, s2) {
  var _a2;
  return (_a2 = i()[s2]) != null ? _a2 : r[s2];
}, has(e2, s2) {
  const E2 = i();
  return s2 in E2 || s2 in r;
}, set(e2, s2, E2) {
  const B = i(true);
  return B[s2] = E2, true;
}, deleteProperty(e2, s2) {
  if (!s2)
    return false;
  const E2 = i(true);
  return delete E2[s2], true;
}, ownKeys() {
  const e2 = i(true);
  return Object.keys(e2);
} }), t = typeof process < "u" && process.env && "development" || "", f = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CLOUDFLARE_WORKERS", "WORKERS_CI", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  var _a2, _b2, _c2, _d2, _e2, _f2;
  if ((_a2 = globalThis.process) == null ? void 0 : _a2.env)
    for (const e2 of f) {
      const s2 = e2[1] || e2[0];
      if ((_b2 = globalThis.process) == null ? void 0 : _b2.env[s2])
        return __spreadValues({ name: e2[0].toLowerCase() }, e2[2]);
    }
  return ((_d2 = (_c2 = globalThis.process) == null ? void 0 : _c2.env) == null ? void 0 : _d2.SHELL) === "/bin/jsh" && ((_f2 = (_e2 = globalThis.process) == null ? void 0 : _e2.versions) == null ? void 0 : _f2.webcontainer) ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
const l = b();
l.name;
function n(e2) {
  return e2 ? e2 !== "false" : false;
}
const I = ((_k = globalThis.process) == null ? void 0 : _k.platform) || "", T = n(o.CI) || l.ci !== false, R = n(((_l = globalThis.process) == null ? void 0 : _l.stdout) && ((_m = globalThis.process) == null ? void 0 : _m.stdout.isTTY));
n(o.DEBUG);
const a = t === "test" || n(o.TEST);
n(o.MINIMAL) || T || a || !R;
const A = /^win/i.test(I);
!n(o.NO_COLOR) && (n(o.FORCE_COLOR) || (R || A) && o.TERM !== "dumb" || T);
const C = (((_o = (_n = globalThis.process) == null ? void 0 : _n.versions) == null ? void 0 : _o.node) || "").replace(/^v/, "") || null;
Number(C == null ? void 0 : C.split(".")[0]) || null;
const W = globalThis.process || /* @__PURE__ */ Object.create(null), _ = { versions: {} };
new Proxy(W, { get(e2, s2) {
  if (s2 === "env")
    return o;
  if (s2 in e2)
    return e2[s2];
  if (s2 in _)
    return _[s2];
} });
const O = ((_q = (_p = globalThis.process) == null ? void 0 : _p.release) == null ? void 0 : _q.name) === "node", c = !!globalThis.Bun || !!((_s = (_r = globalThis.process) == null ? void 0 : _r.versions) == null ? void 0 : _s.bun), D = !!globalThis.Deno, L = !!globalThis.fastly, S = !!globalThis.Netlify, u = !!globalThis.EdgeRuntime, N = ((_t = globalThis.navigator) == null ? void 0 : _t.userAgent) === "Cloudflare-Workers", F = [[S, "netlify"], [u, "edge-light"], [N, "workerd"], [L, "fastly"], [D, "deno"], [c, "bun"], [O, "node"]];
function G() {
  const e2 = F.find((s2) => s2[0]);
  if (e2)
    return { name: e2[1] };
}
const P = G();
(P == null ? void 0 : P.name) || "";
function toBoolean(val) {
  return val ? val !== "false" : false;
}
function parseJSON(val) {
  let obj;
  try {
    obj = JSON.parse(val || "{}");
  } catch (error) {
    obj = {};
  }
  return obj;
}
const platform = "mp-weixin";
const appPlatform = o.UNI_APP_PLATFORM;
const utsPlatform = o.UNI_UTS_PLATFORM;
const isH5 = platform === "web";
const isWeb = platform === "h5";
const isApp = platform === "app";
const isAppPlus = platform === "app-plus";
const isAppHarmony = platform === "app-harmony";
const isAppAndroid = appPlatform === "android" || utsPlatform === "app-android";
const isAppIOS = appPlatform === "ios" || utsPlatform === "app-ios";
const isMpWeixin = platform === "mp-weixin";
o.UNI_UTS_JS_CODE_FORMAT;
o.UNI_UTS_MODULE_TYPE;
o.UNI_UTS_MODULE_PREFIX;
o.UNI_UTS_TARGET_LANGUAGE;
o.UNI_INPUT_DIR;
o.UNI_OUTPUT_DIR;
o.UNI_CLI_CONTEXT;
o.UNI_COMPILER_VERSION_TYPE;
o.UNI_HBUILDERX_PLUGINS;
o.UNI_RENDERER;
o.UNI_NVUE_COMPILER;
o.UNI_NVUE_STYLE_COMPILER;
o.UNI_APP_CODE_SPLITING;
o.UNI_AUTOMATOR_APP_WEBVIEW;
o.UNI_H5_BASE;
o.UNI_H5_BROWSER;
o.UNI_CUSTOM_SCRIPT;
o.UNI_CUSTOM_DEFINE;
o.UNI_CUSTOM_CONTEXT;
o.UNI_MINIMIZE;
toBoolean(o.UNI_MINIMIZE);
o.UNI_UVUE;
toBoolean(o.UNI_UVUE);
o.UNI_UVUE_TARGET_LANGUAGE;
o.UNI_COMPILER;
o.UNI_RENDERER_NATIVE;
o.UNI_NVUE_APP_STYLES;
o.UNI_APP_CHANGED_FILES;
o.UNI_APP_CHANGED_PAGES;
o.HX_USE_BASE_TYPE;
o.HX_DEPENDENCIES_DIR;
o.UNI_APP_X;
toBoolean(o.UNI_APP_X);
o.UNI_APP_X_CACHE_DIR;
o.HX_VERSION;
o.UNI_APP_X_PAGE_COUNT;
o.UNI_APP_X_TSC;
o.UNI_APP_X_SINGLE_THREAD;
o.UNI_APP_X_SETUP;
o.UNI_APP_X_UVUE_SCRIPT_ENGINE;
o.UNI_COMPILE_TARGET;
o.UNI_COMPILE_CLOUD_DIR;
o.UNI_MODULES_ENCRYPT_CACHE_DIR;
o.UNI_APP_PACK_TYPE;
o.UNI_APP_HARMONY_PROJECT_PATH;
parseJSON(o.STAT_TITLE_JSON);
o.SOURCEMAP;
toBoolean(o.SOURCEMAP);
o.UNI_SSR_CLIENT;
toBoolean(o.UNI_SSR_CLIENT);
o.UNI_SSR_SERVER;
toBoolean(o.UNI_SSR_SERVER);
function set$1(target, key2, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key2);
    target.splice(key2, 1, val);
    return val;
  }
  target[key2] = val;
  return val;
}
function del(target, key2) {
  if (Array.isArray(target)) {
    target.splice(key2, 1);
    return;
  }
  delete target[key2];
}
/*!
* pinia v2.0.36
* (c) 2023 Eduardo San Martin Morote
* @license MIT
*/
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol("pinia");
function isPlainObject$3(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = typeof window !== "undefined";
const USE_DEVTOOLS = IS_CLIENT;
const componentStateTypes = [];
const getStoreType = (id) => "🍍 " + id;
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
}
function patchActionForGrouping(store, actionNames) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const trackedStore = new Proxy(store, {
        get(...args) {
          return Reflect.get(...args);
        },
        set(...args) {
          return Reflect.set(...args);
        }
      });
      return actions[actionName].apply(trackedStore, arguments);
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  if (options.state) {
    store._isOptionsAPI = true;
  }
  if (typeof options.state === "function") {
    patchActionForGrouping(
      // @ts-expect-error: can cast the store...
      store,
      Object.keys(options.actions)
    );
    const originalHotUpdate = store._hotUpdate;
    toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
    };
  }
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p2 = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p2.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && true) {
        toBeInstalled.push(plugin2);
      } else {
        _p2.push(plugin2);
      }
      return this;
    },
    _p: _p2,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key2 in oldState) {
    const subPatch = oldState[key2];
    if (!(key2 in newState)) {
      continue;
    }
    const targetValue = newState[key2];
    if (isPlainObject$3(targetValue) && isPlainObject$3(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key2] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key2] = subPatch;
      }
    }
  }
  return newState;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key2) => target.set(key2, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key2 in patchToApply) {
    if (!patchToApply.hasOwnProperty(key2))
      continue;
    const subPatch = patchToApply[key2];
    const targetValue = target[key2];
    if (isPlainObject$3(targetValue) && isPlainObject$3(subPatch) && target.hasOwnProperty(key2) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key2] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key2] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration");
function shouldHydrate(obj) {
  return !isPlainObject$3(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$1 } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && !hot) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$1({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && !hot) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick$1().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$1($state, newState);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError2(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError: onError2
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$1({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign$1(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key2 in setupStore) {
    const prop = setupStore[key2];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set$1(hotState.value, key2, toRef(setupStore, key2));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key2];
          } else {
            mergeReactiveObjects(prop, initialState[key2]);
          }
        }
        {
          pinia.state.value[$id][key2] = prop;
        }
      }
      {
        _hmrPayload.state.push(key2);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key2, prop);
      {
        setupStore[key2] = actionValue;
      }
      {
        _hmrPayload.actions[key2] = prop;
      }
      optionsForPlugin.actions[key2] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key2] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key2]
        ) : prop;
        if (IS_CLIENT) {
          const getters = setupStore._getters || // @ts-expect-error: same
          (setupStore._getters = markRaw([]));
          getters.push(key2);
        }
      }
    }
  }
  {
    assign$1(store, setupStore);
    assign$1(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign$1($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject$3(newStateTarget) && isPlainObject$3(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set$1(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick$1().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set$1(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set$1(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.getters)) {
          del(store, key2);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key2) => {
        if (!(key2 in newStore._hmrPayload.actions)) {
          del(store, key2);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
      Object.defineProperty(store, p2, assign$1({ value: store[p2] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key2) => store._customProperties.add(key2));
      assign$1(store, extensions);
    } else {
      assign$1(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || currentInstance2 && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign$1({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (IS_CLIENT && currentInstance2 && currentInstance2.proxy && // avoid adding stores that are just built for hot module replacement
    !hot) {
      const vm = currentInstance2.proxy;
      const cache2 = "_pStores" in vm ? vm._pStores : vm._pStores = {};
      cache2[id] = store;
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key2 in store) {
      const value = store[key2];
      if (isRef(value) || isReactive(value)) {
        refs[key2] = // ---
        toRef(store, key2);
      }
    }
    return refs;
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
(function(factory) {
  factory();
})(function() {
  function _arrayLikeToArray(r2, a2) {
    (null == a2 || a2 > r2.length) && (a2 = r2.length);
    for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++)
      n2[e2] = r2[e2];
    return n2;
  }
  function _assertThisInitialized(e2) {
    if (void 0 === e2)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function _callSuper(t2, o2, e2) {
    return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, [], _getPrototypeOf(t2).constructor) : o2.apply(t2, e2));
  }
  function _classCallCheck(a2, n2) {
    if (!(a2 instanceof n2))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e2, r2) {
    for (var t2 = 0; t2 < r2.length; t2++) {
      var o2 = r2[t2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
    }
  }
  function _createClass(e2, r2, t2) {
    return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  function _createForOfIteratorHelper(r2, e2) {
    var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (!t2) {
      if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2) {
        t2 && (r2 = t2);
        var n2 = 0, F2 = function() {
        };
        return {
          s: F2,
          n: function() {
            return n2 >= r2.length ? {
              done: true
            } : {
              done: false,
              value: r2[n2++]
            };
          },
          e: function(r3) {
            throw r3;
          },
          f: F2
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, a2 = true, u2 = false;
    return {
      s: function() {
        t2 = t2.call(r2);
      },
      n: function() {
        var r3 = t2.next();
        return a2 = r3.done, r3;
      },
      e: function(r3) {
        u2 = true, o2 = r3;
      },
      f: function() {
        try {
          a2 || null == t2.return || t2.return();
        } finally {
          if (u2)
            throw o2;
        }
      }
    };
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e2, t2, r2) {
      var p2 = _superPropBase(e2, t2);
      if (p2) {
        var n2 = Object.getOwnPropertyDescriptor(p2, t2);
        return n2.get ? n2.get.call(arguments.length < 3 ? e2 : r2) : n2.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t2) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, _getPrototypeOf(t2);
  }
  function _inherits(t2, e2) {
    if ("function" != typeof e2 && null !== e2)
      throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, {
      constructor: {
        value: t2,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t2, "prototype", {
      writable: false
    }), e2 && _setPrototypeOf(t2, e2);
  }
  function _isNativeReflectConstruct() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (_isNativeReflectConstruct = function() {
      return !!t2;
    })();
  }
  function _possibleConstructorReturn(t2, e2) {
    if (e2 && ("object" == typeof e2 || "function" == typeof e2))
      return e2;
    if (void 0 !== e2)
      throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t2);
  }
  function _setPrototypeOf(t2, e2) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, _setPrototypeOf(t2, e2);
  }
  function _superPropBase(t2, o2) {
    for (; !{}.hasOwnProperty.call(t2, o2) && null !== (t2 = _getPrototypeOf(t2)); )
      ;
    return t2;
  }
  function _superPropGet(t2, o2, e2, r2) {
    var p2 = _get(_getPrototypeOf(t2.prototype), o2, e2);
    return "function" == typeof p2 ? function(t3) {
      return p2.apply(e2, t3);
    } : p2;
  }
  function _toPrimitive(t2, r2) {
    if ("object" != typeof t2 || !t2)
      return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i2 = e2.call(t2, r2);
      if ("object" != typeof i2)
        return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t2);
  }
  function _toPropertyKey(t2) {
    var i2 = _toPrimitive(t2, "string");
    return "symbol" == typeof i2 ? i2 : i2 + "";
  }
  function _unsupportedIterableToArray(r2, a2) {
    if (r2) {
      if ("string" == typeof r2)
        return _arrayLikeToArray(r2, a2);
      var t2 = {}.toString.call(r2).slice(8, -1);
      return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
    }
  }
  function createAbortEvent(reason) {
    var event;
    try {
      event = new Event("abort");
    } catch (e2) {
      if (typeof document !== "undefined") {
        if (!document.createEvent) {
          event = document.createEventObject();
          event.type = "abort";
        } else {
          event = document.createEvent("Event");
          event.initEvent("abort", false, false);
        }
      } else {
        event = {
          type: "abort",
          bubbles: false,
          cancelable: false
        };
      }
    }
    event.reason = reason;
    return event;
  }
  function normalizeAbortReason(reason) {
    if (reason === void 0) {
      if (typeof document === "undefined") {
        reason = new Error("This operation was aborted");
        reason.name = "AbortError";
      } else {
        try {
          reason = new DOMException("signal is aborted without reason");
          Object.defineProperty(reason, "name", {
            value: "AbortError"
          });
        } catch (err) {
          reason = new Error("This operation was aborted");
          reason.name = "AbortError";
        }
      }
    }
    return reason;
  }
  var Emitter = /* @__PURE__ */ function() {
    function Emitter2() {
      _classCallCheck(this, Emitter2);
      Object.defineProperty(this, "listeners", {
        value: {},
        writable: true,
        configurable: true
      });
    }
    return _createClass(Emitter2, [{
      key: "addEventListener",
      value: function addEventListener(type, callback, options) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }
        this.listeners[type].push({
          callback,
          options
        });
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }
        var stack2 = this.listeners[type];
        for (var i2 = 0, l2 = stack2.length; i2 < l2; i2++) {
          if (stack2[i2].callback === callback) {
            stack2.splice(i2, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;
        if (!(event.type in this.listeners)) {
          return;
        }
        var stack2 = this.listeners[event.type];
        var stackToCall = stack2.slice();
        var _loop = function _loop2() {
          var listener = stackToCall[i2];
          try {
            listener.callback.call(_this, event);
          } catch (e2) {
            Promise.resolve().then(function() {
              throw e2;
            });
          }
          if (listener.options && listener.options.once) {
            _this.removeEventListener(event.type, listener.callback);
          }
        };
        for (var i2 = 0, l2 = stackToCall.length; i2 < l2; i2++) {
          _loop();
        }
        return !event.defaultPrevented;
      }
    }]);
  }();
  var AbortSignal = /* @__PURE__ */ function(_Emitter) {
    function AbortSignal2() {
      var _this2;
      _classCallCheck(this, AbortSignal2);
      _this2 = _callSuper(this, AbortSignal2);
      if (!_this2.listeners) {
        Emitter.call(_this2);
      }
      Object.defineProperty(_this2, "aborted", {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_this2, "onabort", {
        value: null,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_this2, "reason", {
        value: void 0,
        writable: true,
        configurable: true
      });
      return _this2;
    }
    _inherits(AbortSignal2, _Emitter);
    return _createClass(AbortSignal2, [{
      key: "toString",
      value: function toString() {
        return "[object AbortSignal]";
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === "abort") {
          this.aborted = true;
          if (typeof this.onabort === "function") {
            this.onabort.call(this, event);
          }
        }
        _superPropGet(AbortSignal2, "dispatchEvent", this)([event]);
      }
      /**
       * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/throwIfAborted}
       */
    }, {
      key: "throwIfAborted",
      value: function throwIfAborted() {
        var aborted = this.aborted, _this$reason = this.reason, reason = _this$reason === void 0 ? "Aborted" : _this$reason;
        if (!aborted)
          return;
        throw reason;
      }
      /**
       * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/timeout_static}
       * @param {number} time The "active" time in milliseconds before the returned {@link AbortSignal} will abort.
       *                      The value must be within range of 0 and {@link Number.MAX_SAFE_INTEGER}.
       * @returns {AbortSignal} The signal will abort with its {@link AbortSignal.reason} property set to a `TimeoutError` {@link DOMException} on timeout,
       *                        or an `AbortError` {@link DOMException} if the operation was user-triggered.
       */
    }], [{
      key: "timeout",
      value: function timeout(time) {
        var controller = new AbortController2();
        setTimeout(function() {
          return controller.abort(new DOMException("This signal is timeout in ".concat(time, "ms"), "TimeoutError"));
        }, time);
        return controller.signal;
      }
      /**
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static}
       * @param {Iterable<AbortSignal>} iterable An {@link Iterable} (such as an {@link Array}) of abort signals.
       * @returns {AbortSignal} - **Already aborted**, if any of the abort signals given is already aborted.
       *                          The returned {@link AbortSignal}'s reason will be already set to the `reason` of the first abort signal that was already aborted.
       *                        - **Asynchronously aborted**, when any abort signal in `iterable` aborts.
       *                          The `reason` will be set to the reason of the first abort signal that is aborted.
       */
    }, {
      key: "any",
      value: function any(iterable) {
        var controller = new AbortController2();
        function abort() {
          controller.abort(this.reason);
          clean();
        }
        function clean() {
          var _iterator = _createForOfIteratorHelper(iterable), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var signal2 = _step.value;
              signal2.removeEventListener("abort", abort);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        var _iterator2 = _createForOfIteratorHelper(iterable), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var signal = _step2.value;
            if (signal.aborted) {
              controller.abort(signal.reason);
              break;
            } else
              signal.addEventListener("abort", abort);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return controller.signal;
      }
    }]);
  }(Emitter);
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      _classCallCheck(this, AbortController3);
      Object.defineProperty(this, "signal", {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }
    return _createClass(AbortController3, [{
      key: "abort",
      value: function abort(reason) {
        var signalReason = normalizeAbortReason(reason);
        var event = createAbortEvent(signalReason);
        this.signal.reason = signalReason;
        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "[object AbortController]";
      }
    }]);
  }();
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    AbortController2.prototype[Symbol.toStringTag] = "AbortController";
    AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
  }
  function polyfillNeeded(self2) {
    if (self2.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
      return true;
    }
    return typeof self2.Request === "function" && !self2.Request.prototype.hasOwnProperty("signal") || !self2.AbortController;
  }
  (function(self2) {
    if (!polyfillNeeded(self2)) {
      return;
    }
    self2.AbortController = AbortController2;
    self2.AbortSignal = AbortSignal;
  })(typeof self !== "undefined" ? self : commonjsGlobal);
});
function isObject$3(v) {
  return typeof v === "object" && v !== null;
}
function normalizeOptions(options, factoryOptions) {
  options = isObject$3(options) ? options : /* @__PURE__ */ Object.create(null);
  return new Proxy(options, {
    get(target, key2, receiver) {
      if (key2 === "key")
        return Reflect.get(target, key2, receiver);
      return Reflect.get(target, key2, receiver) || Reflect.get(factoryOptions, key2, receiver);
    }
  });
}
function get(state, path) {
  return path.reduce((obj, p2) => {
    return obj == null ? void 0 : obj[p2];
  }, state);
}
function set(state, path, val) {
  return path.slice(0, -1).reduce((obj, p2) => {
    if (/^(__proto__)$/.test(p2))
      return {};
    else
      return obj[p2] = obj[p2] || {};
  }, state)[path[path.length - 1]] = val, state;
}
function pick(baseState, paths) {
  return paths.reduce((substate, path) => {
    const pathArray = path.split(".");
    return set(substate, pathArray, get(baseState, pathArray));
  }, {});
}
function parsePersistence(factoryOptions, store) {
  return (o2) => {
    var _a2;
    try {
      const {
        storage = localStorage,
        beforeRestore = void 0,
        afterRestore = void 0,
        serializer = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key: key2 = store.$id,
        paths = null,
        debug = false
      } = o2;
      return {
        storage,
        beforeRestore,
        afterRestore,
        serializer,
        key: ((_a2 = factoryOptions.key) != null ? _a2 : (k) => k)(typeof key2 == "string" ? key2 : key2(store.$id)),
        paths,
        debug
      };
    } catch (e2) {
      if (o2.debug)
        console.error("[pinia-plugin-persistedstate]", e2);
      return null;
    }
  };
}
function hydrateStore(store, { storage, serializer, key: key2, debug }) {
  try {
    const fromStorage = storage == null ? void 0 : storage.getItem(key2);
    if (fromStorage)
      store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
  } catch (e2) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", e2);
  }
}
function persistState(state, { storage, serializer, key: key2, paths, debug }) {
  try {
    const toStore = Array.isArray(paths) ? pick(state, paths) : state;
    storage.setItem(key2, serializer.serialize(toStore));
  } catch (e2) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", e2);
  }
}
function createPersistedState(factoryOptions = {}) {
  return (context2) => {
    const { auto = false } = factoryOptions;
    const {
      options: { persist = auto },
      store,
      pinia
    } = context2;
    if (!persist)
      return;
    if (!(store.$id in pinia.state.value)) {
      const original_store = pinia._s.get(store.$id.replace("__hot:", ""));
      if (original_store)
        Promise.resolve().then(() => original_store.$persist());
      return;
    }
    const persistences = (Array.isArray(persist) ? persist.map((p2) => normalizeOptions(p2, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(parsePersistence(factoryOptions, store)).filter(Boolean);
    store.$persist = () => {
      persistences.forEach((persistence) => {
        persistState(store.$state, persistence);
      });
    };
    store.$hydrate = ({ runHooks = true } = {}) => {
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore } = persistence;
        if (runHooks)
          beforeRestore == null ? void 0 : beforeRestore(context2);
        hydrateStore(store, persistence);
        if (runHooks)
          afterRestore == null ? void 0 : afterRestore(context2);
      });
    };
    persistences.forEach((persistence) => {
      const { beforeRestore, afterRestore } = persistence;
      beforeRestore == null ? void 0 : beforeRestore(context2);
      hydrateStore(store, persistence);
      afterRestore == null ? void 0 : afterRestore(context2);
      store.$subscribe(
        (_mutation, state) => {
          persistState(state, persistence);
        },
        {
          detached: true
        }
      );
    });
  };
}
/*!
* @intlify/shared v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const inBrowser = typeof window !== "undefined";
let mark;
let measure;
{
  const perf2 = inBrowser && window.performance;
  if (perf2 && perf2.mark && perf2.measure && perf2.clearMarks && perf2.clearMeasures) {
    mark = (tag) => perf2.mark(tag);
    measure = (name, startTag, endTag) => {
      perf2.measure(name, startTag, endTag);
      perf2.clearMarks(startTag);
      perf2.clearMarks(endTag);
    };
  }
}
const RE_ARGS$1 = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject$2(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS$1, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key2, source) => friendlyJSONstringify({ l: locale, k: key2, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$2 = (val) => typeof val === "number" && isFinite(val);
const isDate$1 = (val) => toTypeString$1(val) === "[object Date]";
const isRegExp = (val) => toTypeString$1(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$2(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key2) {
  return hasOwnProperty$1.call(obj, key2);
}
const isArray$3 = Array.isArray;
const isFunction$2 = (val) => typeof val === "function";
const isString$3 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$2 = (val) => (
  // eslint-disable-line
  val !== null && typeof val === "object"
);
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const isPlainObject$2 = (val) => toTypeString$1(val) === "[object Object]";
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i2 = 0; i2 < lines.length; i2++) {
    count += lines[i2].length + 1;
    if (count >= start) {
      for (let j = i2 - RANGE; j <= i2 + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i2) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i2) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
/*!
* @intlify/message-resolver v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key2) {
  return hasOwnProperty.call(obj, key2);
}
const isObject$1 = (val) => (
  // eslint-disable-line
  val !== null && typeof val === "object"
);
const pathStateMachine = [];
pathStateMachine[
  0
  /* BEFORE_PATH */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    0
    /* BEFORE_PATH */
  ],
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7
    /* AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* IN_PATH */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    1
    /* IN_PATH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7
    /* AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* BEFORE_IDENT */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "0"
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  3
  /* IN_IDENT */
] = {
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "0"
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "w"
    /* WORKSPACE */
  ]: [
    1,
    1
    /* PUSH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2,
    1
    /* PUSH */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    1
    /* PUSH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7,
    1
    /* PUSH */
  ]
};
pathStateMachine[
  4
  /* IN_SUB_PATH */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    5,
    0
    /* APPEND */
  ],
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    2
    /* INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* RIGHT_BRACKET */
  ]: [
    1,
    3
    /* PUSH_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    4,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  5
  /* IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    5,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  6
  /* IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    6,
    0
    /* APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b2 = str.charCodeAt(str.length - 1);
  return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c2;
  let key2;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* APPEND */
  ] = () => {
    if (key2 === void 0) {
      key2 = newChar;
    } else {
      key2 += newChar;
    }
  };
  actions[
    1
    /* PUSH */
  ] = () => {
    if (key2 !== void 0) {
      keys.push(key2);
      key2 = void 0;
    }
  };
  actions[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key2 === void 0) {
        return false;
      }
      key2 = formatSubPath(key2);
      if (key2 === false) {
        return false;
      } else {
        actions[
          1
          /* PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c2 = path[index2];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len2 = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len2) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key2 in obj) {
    if (!hasOwn(obj, key2)) {
      continue;
    }
    if (!key2.includes(
      "."
      /* DOT */
    )) {
      if (isObject$1(obj[key2])) {
        handleFlatJson(obj[key2]);
      }
    } else {
      const subKeys = key2.split(
        "."
        /* DOT */
      );
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        currentObj = currentObj[subKeys[i2]];
      }
      currentObj[subKeys[lastIndex]] = obj[key2];
      delete obj[key2];
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
/*!
* @intlify/shared v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const isNumber$1 = (val) => typeof val === "number" && isFinite(val);
const isArray$2 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isObject = (val) => (
  // eslint-disable-line
  val !== null && typeof val === "object"
);
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$2(val) || isPlainObject$1(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
* @intlify/runtime v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber$1(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n)) ? isNumber$1(options.named.count) ? options.named.count : isNumber$1(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString$2(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString$2(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key2) => _named[key2];
  function message(key2) {
    const msg = isFunction$1(options.messages) ? options.messages(key2) : isObject(options.messages) ? options.messages[key2] : false;
    return !msg ? options.parent ? options.parent.message(key2) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject$1(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject$1(options.processor) && isString$2(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    [
      "list"
      /* LIST */
    ]: list,
    [
      "named"
      /* NAMED */
    ]: named,
    [
      "plural"
      /* PLURAL */
    ]: plural,
    [
      "linked"
      /* LINKED */
    ]: (key2, modifier) => {
      const msg = message(key2)(ctx);
      return isString$2(modifier) ? _modifier(modifier)(msg) : msg;
    },
    [
      "message"
      /* MESSAGE */
    ]: message,
    [
      "type"
      /* TYPE */
    ]: type,
    [
      "interpolate"
      /* INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* NORMALIZE */
    ]: normalize
  };
  return ctx;
}
/*!
* @intlify/message-compiler v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const errorMessages$2 = {
  // tokenizer error messages
  [
    0
    /* EXPECTED_TOKEN */
  ]: `Expected token: '{0}'`,
  [
    1
    /* INVALID_TOKEN_IN_PLACEHOLDER */
  ]: `Invalid token in placeholder: '{0}'`,
  [
    2
    /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
  ]: `Unterminated single quote in placeholder`,
  [
    3
    /* UNKNOWN_ESCAPE_SEQUENCE */
  ]: `Unknown escape sequence: \\{0}`,
  [
    4
    /* INVALID_UNICODE_ESCAPE_SEQUENCE */
  ]: `Invalid unicode escape sequence: {0}`,
  [
    5
    /* UNBALANCED_CLOSING_BRACE */
  ]: `Unbalanced closing brace`,
  [
    6
    /* UNTERMINATED_CLOSING_BRACE */
  ]: `Unterminated closing brace`,
  [
    7
    /* EMPTY_PLACEHOLDER */
  ]: `Empty placeholder`,
  [
    8
    /* NOT_ALLOW_NEST_PLACEHOLDER */
  ]: `Not allowed nest placeholder`,
  [
    9
    /* INVALID_LINKED_FORMAT */
  ]: `Invalid linked format`,
  // parser error messages
  [
    10
    /* MUST_HAVE_MESSAGES_IN_PLURAL */
  ]: `Plural must have messages`,
  [
    11
    /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
  ]: `Unexpected empty linked modifier`,
  [
    12
    /* UNEXPECTED_EMPTY_LINKED_KEY */
  ]: `Unexpected empty linked key`,
  [
    13
    /* UNEXPECTED_LEXICAL_ANALYSIS */
  ]: `Unexpected lexical analysis in token: '{0}'`
};
function createCompileError(code, loc, options = {}) {
  const { domain, messages: messages2, args } = options;
  const msg = format((messages2 || errorMessages$2)[code] || "", ...args || []);
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.domain = domain;
  return error;
}
/*!
* @intlify/devtools-if v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
* @intlify/core-base v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const warnMessages$1 = {
  [
    0
    /* NOT_FOUND_KEY */
  ]: `Not found '{key}' key in '{locale}' locale messages.`,
  [
    1
    /* FALLBACK_TO_TRANSLATE */
  ]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [
    2
    /* CANNOT_FORMAT_NUMBER */
  ]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [
    3
    /* FALLBACK_TO_NUMBER_FORMAT */
  ]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [
    4
    /* CANNOT_FORMAT_DATE */
  ]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [
    5
    /* FALLBACK_TO_DATE_FORMAT */
  ]: `Fall back to datetime format '{key}' key with '{target}' locale.`
};
function getWarnMessage$1(code, ...args) {
  return format$1(warnMessages$1[code], ...args);
}
const VERSION$1 = "9.1.9";
const NOT_REOSLVED = -1;
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$3(val) ? val.toUpperCase() : val,
    lower: (val) => isString$3(val) ? val.toLowerCase() : val,
    // prettier-ignore
    capitalize: (val) => isString$3(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString$3(options.version) ? options.version : VERSION$1;
  const locale = isString$3(options.locale) ? options.locale : "en-US";
  const fallbackLocale = isArray$3(options.fallbackLocale) || isPlainObject$2(options.fallbackLocale) || isString$3(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages2 = isPlainObject$2(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$2(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$2(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$2(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$2(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$2(options.messageCompiler) ? options.messageCompiler : _compiler;
  const onWarn = isFunction$2(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$2(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$2(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$2(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context2 = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages: messages2,
    datetimeFormats,
    numberFormats,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    onWarn,
    __datetimeFormatters,
    __numberFormatters,
    __meta
  };
  {
    context2.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  {
    initI18nDevTools(context2, version2, __meta);
  }
  return context2;
}
function isTranslateFallbackWarn(fallback, key2) {
  return fallback instanceof RegExp ? fallback.test(key2) : fallback;
}
function isTranslateMissingWarn(missing, key2) {
  return missing instanceof RegExp ? missing.test(key2) : missing;
}
function handleMissing(context2, key2, locale, missingWarn, type) {
  const { missing, onWarn } = context2;
  {
    const emitter = context2.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale,
        key: key2,
        type,
        groupId: `${type}:${key2}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context2, locale, key2, type);
    return isString$3(ret) ? ret : key2;
  } else {
    if (isTranslateMissingWarn(missingWarn, key2)) {
      onWarn(getWarnMessage$1(0, { key: key2, locale }));
    }
    return key2;
  }
}
function getLocaleChain(ctx, fallback, start) {
  const context2 = ctx;
  if (!context2.__localeChainCache) {
    context2.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context2.__localeChainCache.get(start);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$3(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray$3(fallback) ? fallback : isPlainObject$2(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
    block = isString$3(defaults) ? [defaults] : defaults;
    if (isArray$3(block)) {
      appendBlockToChain(chain, block, false);
    }
    context2.__localeChainCache.set(start, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale = block[i2];
    if (isString$3(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$3(blocks) || isPlainObject$2(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context2 = ctx;
  context2.__localeChainCache = /* @__PURE__ */ new Map();
  getLocaleChain(ctx, fallback, locale);
}
function createCoreError(code) {
  return createCompileError(code, null, { messages: errorMessages$1 });
}
const errorMessages$1 = {
  [
    14
    /* INVALID_ARGUMENT */
  ]: "Invalid arguments",
  [
    15
    /* INVALID_DATE_ARGUMENT */
  ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [
    16
    /* INVALID_ISO_DATE_ARGUMENT */
  ]: "The argument provided is not a valid ISO date string"
};
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$2(val);
function translate(context2, ...args) {
  const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context2;
  const [key2, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context2.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context2.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context2.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$3(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key2 : fallbackFormat ? key2 : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$3(options.locale) ? options.locale : context2.locale;
  escapeParameter && escapeParams(options);
  let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context2, key2, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key2,
    locale,
    messages2[locale] || {}
  ];
  let cacheBaseKey = key2;
  if (!resolvedMessage && !(isString$3(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString$3(format2) || isMessageFunction(format2)) || !isString$3(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  if (isString$3(format2) && context2.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key2}'.`);
    return key2;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context2, key2, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context2, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context2, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString$3(key2) ? key2 : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString$3(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context2.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$3(options.list)) {
    options.list = options.list.map((item) => isString$3(item) ? escapeHtml(item) : item);
  } else if (isObject$2(options.named)) {
    Object.keys(options.named).forEach((key2) => {
      if (isString$3(options.named[key2])) {
        options.named[key2] = escapeHtml(options.named[key2]);
      }
    });
  }
}
function resolveMessageFormat(context2, key2, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn } = context2;
  const locales = getLocaleChain(context2, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(1, {
        key: key2,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context2.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    message = messages2[targetLocale] || {};
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-resolve-start";
      endTag = "intlify-message-resolve-end";
      mark && mark(startTag);
    }
    if ((format2 = resolveValue(message, key2)) === null) {
      format2 = message[key2];
    }
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context2.__v_emitter;
      if (emitter && start && format2) {
        emitter.emit("message-resolve", {
          type: "message-resolve",
          key: key2,
          message: format2,
          time: end - start,
          groupId: `${type}:${key2}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message resolve", startTag, endTag);
      }
    }
    if (isString$3(format2) || isFunction$2(format2))
      break;
    const missingRet = handleMissing(context2, key2, targetLocale, missingWarn, type);
    if (missingRet !== key2) {
      format2 = missingRet;
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context2, key2, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context2;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key2;
    return msg2;
  }
  let start = null;
  let startTag;
  let endTag;
  if (inBrowser) {
    start = window.performance.now();
    startTag = "intlify-message-compilation-start";
    endTag = "intlify-message-compilation-end";
    mark && mark(startTag);
  }
  const msg = messageCompiler(format2, getCompileOptions(context2, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  if (inBrowser) {
    const end = window.performance.now();
    const emitter = context2.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-compilation", {
        type: "message-compilation",
        message: format2,
        time: end - start,
        groupId: `${"translate"}:${key2}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message compilation", startTag, endTag);
    }
  }
  msg.locale = targetLocale;
  msg.key = key2;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context2, msg, msgCtx) {
  let start = null;
  let startTag;
  let endTag;
  if (inBrowser) {
    start = window.performance.now();
    startTag = "intlify-message-evaluation-start";
    endTag = "intlify-message-evaluation-end";
    mark && mark(startTag);
  }
  const messaged = msg(msgCtx);
  if (inBrowser) {
    const end = window.performance.now();
    const emitter = context2.__v_emitter;
    if (emitter && start) {
      emitter.emit("message-evaluation", {
        type: "message-evaluation",
        value: messaged,
        time: end - start,
        groupId: `${"translate"}:${msg.key}`
      });
    }
    if (startTag && endTag && mark && measure) {
      mark(endTag);
      measure("intlify message evaluation", startTag, endTag);
    }
  }
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$3(arg1) && !isNumber$2(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(
      14
      /* INVALID_ARGUMENT */
    );
  }
  const key2 = isNumber$2(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$2(arg2)) {
    options.plural = arg2;
  } else if (isString$3(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$2(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$3(arg2)) {
    options.list = arg2;
  }
  if (isNumber$2(arg3)) {
    options.plural = arg3;
  } else if (isString$3(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$2(arg3)) {
    assign(options, arg3);
  }
  return [key2, options];
}
function getCompileOptions(context2, locale, key2, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
        const emitter = context2.__v_emitter;
        if (emitter) {
          emitter.emit("compile-error", {
            message: source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key2}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key2, source2)
  };
}
function getMessageContextOptions(context2, locale, message, options) {
  const { modifiers, pluralRules } = context2;
  const resolveMessage = (key2) => {
    const val = resolveValue(message, key2);
    if (isString$3(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context2, key2, locale, val, key2, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context2.processor) {
    ctxOptions.processor = context2.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$2(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context2, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context2;
  const { __datetimeFormatters } = context2;
  if (!Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(
      4
      /* CANNOT_FORMAT_DATE */
    ));
    return MISSING_RESOLVE_VALUE;
  }
  const [key2, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context2.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context2.fallbackWarn;
  const part = !!options.part;
  const locale = isString$3(options.locale) ? options.locale : context2.locale;
  const locales = getLocaleChain(context2, fallbackLocale, locale);
  if (!isString$3(key2) || key2 === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(5, {
        key: key2,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context2.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key2];
    if (isPlainObject$2(format2))
      break;
    handleMissing(context2, key2, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject$2(format2) || !isString$3(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  let id = `${targetLocale}__${key2}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$3(arg1)) {
    if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
      throw createCoreError(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    }
    value = new Date(arg1);
    try {
      value.toISOString();
    } catch (e2) {
      throw createCoreError(
        16
        /* INVALID_ISO_DATE_ARGUMENT */
      );
    }
  } else if (isDate$1(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(
        15
        /* INVALID_DATE_ARGUMENT */
      );
    }
    value = arg1;
  } else if (isNumber$2(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(
      14
      /* INVALID_ARGUMENT */
    );
  }
  if (isString$3(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$2(arg2)) {
    options = arg2;
  }
  if (isString$3(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$2(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$2(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context2 = ctx;
  for (const key2 in format2) {
    const id = `${locale}__${key2}`;
    if (!context2.__datetimeFormatters.has(id)) {
      continue;
    }
    context2.__datetimeFormatters.delete(id);
  }
}
function number(context2, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn } = context2;
  const { __numberFormatters } = context2;
  if (!Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(
      2
      /* CANNOT_FORMAT_NUMBER */
    ));
    return MISSING_RESOLVE_VALUE;
  }
  const [key2, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context2.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context2.fallbackWarn;
  const part = !!options.part;
  const locale = isString$3(options.locale) ? options.locale : context2.locale;
  const locales = getLocaleChain(context2, fallbackLocale, locale);
  if (!isString$3(key2) || key2 === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = to = locales[i2];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key2)) {
      onWarn(getWarnMessage$1(3, {
        key: key2,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context2.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type,
          key: key2,
          from,
          to,
          groupId: `${type}:${key2}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key2];
    if (isPlainObject$2(format2))
      break;
    handleMissing(context2, key2, targetLocale, missingWarn, type);
    from = to;
  }
  if (!isPlainObject$2(format2) || !isString$3(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key2;
  }
  let id = `${targetLocale}__${key2}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber$2(arg1)) {
    throw createCoreError(
      14
      /* INVALID_ARGUMENT */
    );
  }
  const value = arg1;
  if (isString$3(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$2(arg2)) {
    options = arg2;
  }
  if (isString$3(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$2(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$2(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context2 = ctx;
  for (const key2 in format2) {
    const id = `${locale}__${key2}`;
    if (!context2.__numberFormatters.has(id)) {
      continue;
    }
    context2.__numberFormatters.delete(id);
  }
}
/*!
* @intlify/vue-devtools v9.1.9
* (c) 2021 kazuya kawaguchi
* Released under the MIT License.
*/
const VueDevToolsLabels = {
  [
    "vue-devtools-plugin-vue-i18n"
    /* PLUGIN */
  ]: "Vue I18n devtools",
  [
    "vue-i18n-resource-inspector"
    /* CUSTOM_INSPECTOR */
  ]: "I18n Resources",
  [
    "vue-i18n-timeline"
    /* TIMELINE */
  ]: "Vue I18n"
};
const VueDevToolsPlaceholders = {
  [
    "vue-i18n-resource-inspector"
    /* CUSTOM_INSPECTOR */
  ]: "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  [
    "vue-i18n-timeline"
    /* TIMELINE */
  ]: 16764185
};
/*!
* vue-i18n v9.1.9
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/
const VERSION = "9.1.9";
function initFeatureFlags() {
  let needWarn = false;
  {
    needWarn = true;
  }
  if (needWarn) {
    console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
  }
}
const warnMessages = {
  [
    6
    /* FALLBACK_TO_ROOT */
  ]: `Fall back to {type} '{key}' with root locale.`,
  [
    7
    /* NOT_SUPPORTED_PRESERVE */
  ]: `Not supported 'preserve'.`,
  [
    8
    /* NOT_SUPPORTED_FORMATTER */
  ]: `Not supported 'formatter'.`,
  [
    9
    /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
  ]: `Not supported 'preserveDirectiveContent'.`,
  [
    10
    /* NOT_SUPPORTED_GET_CHOICE_INDEX */
  ]: `Not supported 'getChoiceIndex'.`,
  [
    11
    /* COMPONENT_NAME_LEGACY_COMPATIBLE */
  ]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [
    12
    /* NOT_FOUND_PARENT_SCOPE */
  ]: `Not found parent scope. use the global scope.`
};
function getWarnMessage(code, ...args) {
  return format$1(warnMessages[code], ...args);
}
function createI18nError(code, ...args) {
  return createCompileError(code, null, { messages: errorMessages, args });
}
const errorMessages = {
  [
    14
    /* UNEXPECTED_RETURN_TYPE */
  ]: "Unexpected return type in composer",
  [
    15
    /* INVALID_ARGUMENT */
  ]: "Invalid argument",
  [
    16
    /* MUST_BE_CALL_SETUP_TOP */
  ]: "Must be called at the top of a `setup` function",
  [
    17
    /* NOT_INSLALLED */
  ]: "Need to install with `app.use` function",
  [
    22
    /* UNEXPECTED_ERROR */
  ]: "Unexpected error",
  [
    18
    /* NOT_AVAILABLE_IN_LEGACY_MODE */
  ]: "Not available in legacy mode",
  [
    19
    /* REQUIRED_VALUE */
  ]: `Required in value: {0}`,
  [
    20
    /* INVALID_VALUE */
  ]: `Invalid value`,
  [
    21
    /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
  ]: `Cannot setup vue-devtools plugin`
};
const DEVTOOLS_META = "__INTLIFY_META__";
const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
const DatetimePartsSymbol = makeSymbol("__datetimeParts");
const NumberPartsSymbol = makeSymbol("__numberParts");
const EnableEmitter = makeSymbol("__enableEmitter");
const DisableEmitter = makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOption = makeSymbol("__injectWithOption");
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key2, type) => {
    return missing(locale, key2, getCurrentInstance() || void 0, type);
  };
}
function getLocaleMessages(locale, options) {
  const { messages: messages2, __i18n } = options;
  const ret = isPlainObject$2(messages2) ? messages2 : isArray$3(__i18n) ? {} : { [locale]: {} };
  if (isArray$3(__i18n)) {
    __i18n.forEach(({ locale: locale2, resource }) => {
      if (locale2) {
        ret[locale2] = ret[locale2] || {};
        deepCopy(resource, ret[locale2]);
      } else {
        deepCopy(resource, ret);
      }
    });
  }
  if (options.flatJson) {
    for (const key2 in ret) {
      if (hasOwn$1(ret, key2)) {
        handleFlatJson(ret[key2]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$2(val) || isArray$3(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(
      20
      /* INVALID_VALUE */
    );
  }
  for (const key2 in src) {
    if (hasOwn$1(src, key2)) {
      if (isNotObjectOrIsArray(src[key2]) || isNotObjectOrIsArray(des[key2])) {
        des[key2] = src[key2];
      } else {
        deepCopy(src[key2], des[key2]);
      }
    }
  }
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
};
function createComposer(options = {}) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString$3(options.locale) ? options.locale : "en-US"
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString$3(options.fallbackLocale) || isArray$3(options.fallbackLocale) || isPlainObject$2(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$2(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$2(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$2(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$2(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$2(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    return createCoreContext({
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      messageCompiler: function compileToFunction(source) {
        return (ctx) => {
          return ctx.normalize([source]);
        };
      },
      datetimeFormats: _datetimeFormats.value,
      numberFormats: _numberFormats.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      __datetimeFormatters: isPlainObject$2(_context) ? _context.__datetimeFormatters : void 0,
      __numberFormatters: isPlainObject$2(_context) ? _context.__numberFormatters : void 0,
      __v_emitter: isPlainObject$2(_context) ? _context.__v_emitter : void 0,
      __meta: { framework: "vue" }
    });
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$2(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !!arg.resolvedMessage === false;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    {
      try {
        setAdditionalMeta(getMetaInfo());
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
      }
    }
    if (isNumber$2(ret) && ret === NOT_REOSLVED) {
      const [key2, arg2] = argumentParser();
      if (__root && isString$3(key2) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key2) || isTranslateMissingWarn(_missingWarn, key2))) {
          warn(getWarnMessage(6, {
            key: key2,
            type: warnType
          }));
        }
        {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key: key2,
              to: "global",
              groupId: `${warnType}:${key2}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key2);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(
        14
        /* UNEXPECTED_RETURN_TYPE */
      );
    }
  }
  function t2(...args) {
    return wrapWithDeps((context2) => translate(context2, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key2) => key2, (val) => isString$3(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$2(arg3)) {
      throw createI18nError(
        15
        /* INVALID_ARGUMENT */
      );
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context2) => datetime(context2, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString$3(val));
  }
  function n2(...args) {
    return wrapWithDeps((context2) => number(context2, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString$3(val));
  }
  function normalize(values) {
    return values.map((val) => isString$3(val) ? createVNode() : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context2) => {
        let ret;
        const _context2 = context2;
        try {
          _context2.processor = processor;
          ret = translate(_context2, ...args);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TransrateVNodeSymbol](...args),
      (key2) => [createVNode()],
      (val) => isArray$3(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context2) => number(context2, ...args),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString$3(val) || isArray$3(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context2) => datetime(context2, ...args),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString$3(val) || isArray$3(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key2, locale2) {
    const targetLocale = isString$3(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return resolveValue(message, key2) !== null;
  }
  function resolveMessages(key2) {
    let messages22 = null;
    const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = resolveValue(targetLocaleMessages, key2);
      if (messageValue != null) {
        messages22 = messageValue;
        break;
      }
    }
    return messages22;
  }
  function tm(key2) {
    const messages22 = resolveMessages(key2);
    return messages22 != null ? messages22 : __root ? __root.tm(key2) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    datetimeFormats,
    numberFormats,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    rt,
    d,
    n: n2,
    te,
    tm,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [TransrateVNodeSymbol]: transrateVNode,
    [NumberPartsSymbol]: numberParts,
    [DatetimePartsSymbol]: datetimeParts,
    [SetPluralRulesSymbol]: setPluralRules,
    [InejctWithOption]: options.__injectWithOption
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString$3(options.locale) ? options.locale : "en-US";
  const fallbackLocale = isString$3(options.fallbackLocale) || isArray$3(options.fallbackLocale) || isPlainObject$2(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction$2(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject$2(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction$2(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString$3(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  if (options.formatter) {
    warn(getWarnMessage(
      8
      /* NOT_SUPPORTED_FORMATTER */
    ));
  }
  if (options.preserveDirectiveContent) {
    warn(getWarnMessage(
      9
      /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
    ));
  }
  let messages2 = options.messages;
  if (isPlainObject$2(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages22, locale2) => {
      const message = messages22[locale2] || (messages22[locale2] = {});
      assign(message, sharedMessages[locale2]);
      return messages22;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}) {
  const composer = createComposer(convertComposerOptions(options));
  const vueI18n = {
    // id
    id: composer.id,
    // locale
    get locale() {
      return composer.locale.value;
    },
    set locale(val) {
      composer.locale.value = val;
    },
    // fallbackLocale
    get fallbackLocale() {
      return composer.fallbackLocale.value;
    },
    set fallbackLocale(val) {
      composer.fallbackLocale.value = val;
    },
    // messages
    get messages() {
      return composer.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return composer.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return composer.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return composer.availableLocales;
    },
    // formatter
    get formatter() {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
      return {
        interpolate() {
          return [];
        }
      };
    },
    set formatter(val) {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
    },
    // missing
    get missing() {
      return composer.getMissingHandler();
    },
    set missing(handler) {
      composer.setMissingHandler(handler);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
    },
    set silentTranslationWarn(val) {
      composer.missingWarn = isBoolean(val) ? !val : val;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
    },
    set silentFallbackWarn(val) {
      composer.fallbackWarn = isBoolean(val) ? !val : val;
    },
    // modifiers
    get modifiers() {
      return composer.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return composer.fallbackFormat;
    },
    set formatFallbackMessages(val) {
      composer.fallbackFormat = val;
    },
    // postTranslation
    get postTranslation() {
      return composer.getPostTranslationHandler();
    },
    set postTranslation(handler) {
      composer.setPostTranslationHandler(handler);
    },
    // sync
    get sync() {
      return composer.inheritLocale;
    },
    set sync(val) {
      composer.inheritLocale = val;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return composer.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(val) {
      composer.warnHtmlMessage = val !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return composer.escapeParameter;
    },
    set escapeParameterHtml(val) {
      composer.escapeParameter = val;
    },
    // preserveDirectiveContent
    get preserveDirectiveContent() {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
      return true;
    },
    set preserveDirectiveContent(val) {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
    },
    // pluralizationRules
    get pluralizationRules() {
      return composer.pluralRules || {};
    },
    // for internal
    __composer: composer,
    // t
    t(...args) {
      const [arg1, arg2, arg3] = args;
      const options2 = {};
      let list = null;
      let named = null;
      if (!isString$3(arg1)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      const key2 = arg1;
      if (isString$3(arg2)) {
        options2.locale = arg2;
      } else if (isArray$3(arg2)) {
        list = arg2;
      } else if (isPlainObject$2(arg2)) {
        named = arg2;
      }
      if (isArray$3(arg3)) {
        list = arg3;
      } else if (isPlainObject$2(arg3)) {
        named = arg3;
      }
      return composer.t(key2, list || named || {}, options2);
    },
    rt(...args) {
      return composer.rt(...args);
    },
    // tc
    tc(...args) {
      const [arg1, arg2, arg3] = args;
      const options2 = { plural: 1 };
      let list = null;
      let named = null;
      if (!isString$3(arg1)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      const key2 = arg1;
      if (isString$3(arg2)) {
        options2.locale = arg2;
      } else if (isNumber$2(arg2)) {
        options2.plural = arg2;
      } else if (isArray$3(arg2)) {
        list = arg2;
      } else if (isPlainObject$2(arg2)) {
        named = arg2;
      }
      if (isString$3(arg3)) {
        options2.locale = arg3;
      } else if (isArray$3(arg3)) {
        list = arg3;
      } else if (isPlainObject$2(arg3)) {
        named = arg3;
      }
      return composer.t(key2, list || named || {}, options2);
    },
    // te
    te(key2, locale) {
      return composer.te(key2, locale);
    },
    // tm
    tm(key2) {
      return composer.tm(key2);
    },
    // getLocaleMessage
    getLocaleMessage(locale) {
      return composer.getLocaleMessage(locale);
    },
    // setLocaleMessage
    setLocaleMessage(locale, message) {
      composer.setLocaleMessage(locale, message);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(locale, message) {
      composer.mergeLocaleMessage(locale, message);
    },
    // d
    d(...args) {
      return composer.d(...args);
    },
    // getDateTimeFormat
    getDateTimeFormat(locale) {
      return composer.getDateTimeFormat(locale);
    },
    // setDateTimeFormat
    setDateTimeFormat(locale, format2) {
      composer.setDateTimeFormat(locale, format2);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(locale, format2) {
      composer.mergeDateTimeFormat(locale, format2);
    },
    // n
    n(...args) {
      return composer.n(...args);
    },
    // getNumberFormat
    getNumberFormat(locale) {
      return composer.getNumberFormat(locale);
    },
    // setNumberFormat
    setNumberFormat(locale, format2) {
      composer.setNumberFormat(locale, format2);
    },
    // mergeNumberFormat
    mergeNumberFormat(locale, format2) {
      composer.mergeNumberFormat(locale, format2);
    },
    // getChoiceIndex
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getChoiceIndex(choice, choicesLength) {
      warn(getWarnMessage(
        10
        /* NOT_SUPPORTED_GET_CHOICE_INDEX */
      ));
      return -1;
    },
    // for internal
    __onComponentInstanceCreated(target) {
      const { componentInstanceCreatedListener } = options;
      if (componentInstanceCreatedListener) {
        componentInstanceCreatedListener(target, vueI18n);
      }
    }
  };
  {
    vueI18n.__enableEmitter = (emitter) => {
      const __composer = composer;
      __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
    };
    vueI18n.__disableEmitter = () => {
      const __composer = composer;
      __composer[DisableEmitter] && __composer[DisableEmitter]();
    };
  }
  return vueI18n;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
const Translation = {
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber$2(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  setup(props, context2) {
    const { slots, attrs } = context2;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key2) => key2 !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$3(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context2, keys);
      i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      assign({}, attrs);
      return isString$3(props.tag) ? h(props.tag) : isObject$2(props.tag) ? h(props.tag) : h(Fragment);
    };
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    return slots.default ? slots.default() : [];
  } else {
    return keys.reduce((arg, key2) => {
      const slot = slots[key2];
      if (slot) {
        arg[key2] = slot();
      }
      return arg;
    }, {});
  }
}
function renderFormatter(props, context2, slotKeys, partFormatter) {
  const { slots, attrs } = context2;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$3(props.format)) {
      options.key = props.format;
    } else if (isObject$2(props.format)) {
      if (isString$3(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    [options.key];
    if (isArray$3(parts)) {
      parts.map((part, index2) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
      });
    }
    assign({}, attrs);
    return isString$3(props.tag) ? h(props.tag) : isObject$2(props.tag) ? h(props.tag) : h(Fragment);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  setup(props, context2) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context2, NUMBER_FORMAT_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  setup(props, context2) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context2, DATETIME_FORMAT_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const bind = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const composer = getComposer$2(i18n, instance.$);
    if (modifiers.preserve) {
      warn(getWarnMessage(
        7
        /* NOT_SUPPORTED_PRESERVE */
      ));
    }
    const parsedValue = parseValue(value);
    el.textContent = composer.t(...makeParams(parsedValue));
  };
  return {
    beforeMount: bind,
    beforeUpdate: bind
  };
}
function parseValue(value) {
  if (isString$3(value)) {
    return { path: value };
  } else if (isPlainObject$2(value)) {
    if (!("path" in value)) {
      throw createI18nError(19, "path");
    }
    return value;
  } else {
    throw createI18nError(
      20
      /* INVALID_VALUE */
    );
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$3(locale)) {
    options.locale = locale;
  }
  if (isNumber$2(choice)) {
    options.plural = choice;
  }
  if (isNumber$2(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject$2(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall && useI18nComponentName) {
    warn(getWarnMessage(11, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  app.directive("t", vTDirective(i18n));
}
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
function enableDevTools(app, i18n) {
  return __async(this, null, function* () {
    return new Promise((resolve2, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels[
            "vue-devtools-plugin-vue-i18n"
            /* PLUGIN */
          ],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels[
              "vue-i18n-timeline"
              /* TIMELINE */
            ],
            color: VueDevToolsTimelineColors[
              "vue-i18n-timeline"
              /* TIMELINE */
            ]
          });
          resolve2(true);
        });
      } catch (e2) {
        console.error(e2);
        reject(false);
      }
    });
  });
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const label = instance.type.name || instance.type.displayName || instance.type.__file;
      const tag = {
        label: `i18n (${label} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  instanceData.state.push({
    type,
    key: "datetimeFormats",
    editable: false,
    value: composer.datetimeFormats.value
  });
  instanceData.state.push({
    type,
    key: "numberFormats",
    editable: false,
    value: composer.numberFormats.value
  });
}
function getLocaleMessageValue(messages2) {
  const value = {};
  Object.keys(messages2).forEach((key2) => {
    const v = messages2[key2];
    if (isFunction$2(v) && "source" in v) {
      value[key2] = getMessageFunctionDetails(v);
    } else if (isObject$2(v)) {
      value[key2] = getLocaleMessageValue(v);
    } else {
      value[key2] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s2) {
  return s2.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a2) {
  return ESC[a2] || a2;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${label} Scope`
    });
  }
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  const datetimeFormatsType = "Datetime formats info";
  const datetimeFormatsStates = [
    {
      type: datetimeFormatsType,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    }
  ];
  state[datetimeFormatsType] = datetimeFormatsStates;
  const numberFormatsType = "Datetime formats info";
  const numberFormatsStates = [
    {
      type: numberFormatsType,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    }
  ];
  state[numberFormatsType] = numberFormatsStates;
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString$3(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString$3(payload.state.value) || isArray$3(payload.state.value) || isObject$2(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key2, locale) => this.$i18n.te(key2, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key2) => this.$i18n.tm(key2);
    },
    mounted() {
      {
        this.$el.__VUE_I18N__ = this.$i18n.__composer;
        const emitter = this.__v_emitter = createEmitter();
        const _vueI18n = this.$i18n;
        _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
        emitter.on("*", addTimelineEvent);
      }
    },
    beforeUnmount() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      {
        if (this.__v_emitter) {
          this.__v_emitter.off("*", addTimelineEvent);
          delete this.__v_emitter;
        }
        const _vueI18n = this.$i18n;
        _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
        delete this.$el.__VUE_I18N__;
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages2 = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
function createI18n(options = {}) {
  const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = !!options.globalInjection;
  const __instances = /* @__PURE__ */ new Map();
  const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
  const symbol = makeSymbol("vue-i18n");
  const i18n = {
    // mode
    get mode() {
      return __legacyMode ? "legacy" : "composition";
    },
    // install plugin
    install(app, ...options2) {
      return __async(this, null, function* () {
        {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        {
          const ret = yield enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(
              21
              /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
            );
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      });
    },
    // global accessor
    get global() {
      return __global;
    },
    // @internal
    __instances,
    // @internal
    __getInstance(component) {
      return __instances.get(component) || null;
    },
    // @internal
    __setInstance(component, instance) {
      __instances.set(component, instance);
    },
    // @internal
    __deleteInstance(component) {
      __instances.delete(component);
    }
  };
  return i18n;
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(
      16
      /* MUST_BE_CALL_SETUP_TOP */
    );
  }
  if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(
      17
      /* NOT_INSLALLED */
    );
  }
  const i18n = inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
  if (!i18n) {
    throw createI18nError(
      22
      /* UNEXPECTED_ERROR */
    );
  }
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
  if (scope === "global") {
    let messages2 = isObject$2(options.messages) ? options.messages : {};
    if ("__i18nGlobal" in instance.type) {
      messages2 = getLocaleMessages(global2.locale.value, {
        messages: messages2,
        __i18n: instance.type.__i18nGlobal
      });
    }
    const locales = Object.keys(messages2);
    if (locales.length) {
      locales.forEach((locale) => {
        global2.mergeLocaleMessage(locale, messages2[locale]);
      });
    }
    if (isObject$2(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$2(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      {
        warn(getWarnMessage(
          12
          /* NOT_FOUND_PARENT_SCOPE */
        ));
      }
      composer2 = global2;
    }
    return composer2;
  }
  if (i18n.mode === "legacy") {
    throw createI18nError(
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    );
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const type = instance.type;
    const composerOptions = assign({}, options);
    if (type.__i18n) {
      composerOptions.__i18n = type.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      const vueI18n = i18nInternal.__getInstance(current);
      if (vueI18n != null) {
        composer = vueI18n.__composer;
      }
      if (useComponent && composer && !composer[InejctWithOption]) {
        composer = null;
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  let emitter = null;
  onMounted(() => {
    if (target.vnode.el) {
      target.vnode.el.__VUE_I18N__ = composer;
      emitter = createEmitter();
      const _composer = composer;
      _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
      emitter.on("*", addTimelineEvent);
    }
  }, target);
  onUnmounted(() => {
    if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
      emitter && emitter.off("*", addTimelineEvent);
      const _composer = composer;
      _composer[DisableEmitter] && _composer[DisableEmitter]();
      delete target.vnode.el.__VUE_I18N__;
    }
    i18n.__deleteInstance(target);
  }, target);
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
{
  initFeatureFlags();
}
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const undefStr = "undefined";
const PromiseCls = Promise;
const promiseResolve = (value) => PromiseCls.resolve(value);
const promiseReject = (value) => PromiseCls.reject(value);
const ObjectCls = Object;
const RegExpCls = RegExp;
const undefinedValue = void 0;
const nullValue = null;
const trueValue = true;
const falseValue = false;
const promiseThen = (promise, onFulfilled, onrejected) => promise.then(onFulfilled, onrejected);
const promiseCatch = (promise, onrejected) => promise.catch(onrejected);
const promiseFinally = (promise, onfinally) => promise.finally(onfinally);
const JSONStringify = (value, replacer2, space) => JSON.stringify(value, replacer2, space);
const JSONParse = (value) => JSON.parse(value);
const setTimeoutFn = (fn, delay = 0) => setTimeout(fn, delay);
const clearTimeoutTimer = (timer) => clearTimeout(timer);
const objectKeys = (obj) => ObjectCls.keys(obj);
const objectValues = (obj) => ObjectCls.values(obj);
const forEach = (ary, fn) => ary.forEach(fn);
const pushItem = (ary, ...item) => ary.push(...item);
const mapItem = (ary, callbackfn) => ary.map(callbackfn);
const filterItem = (ary, predicate) => ary.filter(predicate);
const splice = (ary, start, deleteCount = 0, ...items) => ary.splice(start, deleteCount, ...items);
const len = (data) => data.length;
const isArray$1 = (arg) => Array.isArray(arg);
const deleteAttr = (arg, attr) => delete arg[attr];
const typeOf = (arg) => typeof arg;
const includes = (ary, target) => ary.includes(target);
const isSSR = typeof window === undefStr && (typeof process !== undefStr ? !process.browser : typeof Deno !== undefStr);
const MEMORY = "memory";
const STORAGE_RESTORE = "restore";
const noop = () => {
};
const $self = (arg) => arg;
const isFn = (arg) => typeOf(arg) === "function";
const isNumber = (arg) => typeOf(arg) === "number" && !Number.isNaN(arg);
const isString$1 = (arg) => typeOf(arg) === "string";
const globalToString = (arg) => ObjectCls.prototype.toString.call(arg);
const isPlainObject = (arg) => globalToString(arg) === "[object Object]";
const instanceOf = (arg, cls) => arg instanceof cls;
const getTime = (date) => date ? date.getTime() : Date.now();
const getContext = (methodInstance) => methodInstance.context;
const getConfig = (methodInstance) => methodInstance.config;
const getContextOptions = (alovaInstance) => alovaInstance.options;
const getOptions = (methodInstance) => getContextOptions(getContext(methodInstance));
const key = (methodInstance) => {
  const { params, headers } = getConfig(methodInstance);
  return JSONStringify([methodInstance.type, methodInstance.url, params, methodInstance.data, headers]);
};
const getMethodInternalKey = (methodInstance) => methodInstance.key;
const getHandlerMethod = (methodHandler, assert, args = []) => {
  const methodInstance = isFn(methodHandler) ? methodHandler(...args) : methodHandler;
  assert(!!methodInstance.key, "hook handler must be a method instance or a function that returns method instance");
  return methodInstance;
};
const isSpecialRequestBody = (data) => {
  const dataTypeString = globalToString(data);
  return /^\[object (Blob|FormData|ReadableStream|URLSearchParams)\]$/i.test(dataTypeString) || instanceOf(data, ArrayBuffer);
};
const objAssign = (target, ...sources) => ObjectCls.assign(target, ...sources);
const omit = (obj, ...keys) => {
  const result = {};
  for (const key2 in obj) {
    if (!keys.includes(key2)) {
      result[key2] = obj[key2];
    }
  }
  return result;
};
function usePromise() {
  let retResolve;
  let retReject;
  const promise = new Promise((resolve2, reject) => {
    retResolve = resolve2;
    retReject = reject;
  });
  return { promise, resolve: retResolve, reject: retReject };
}
const getLocalCacheConfigParam = (methodInstance) => {
  const { cacheFor } = getConfig(methodInstance);
  const getCacheExpireTs = (cacheExpire) => isNumber(cacheExpire) ? getTime() + cacheExpire : getTime(cacheExpire || undefinedValue);
  let cacheMode = MEMORY;
  let expire = () => 0;
  let store = falseValue;
  let tag = undefinedValue;
  const controlled = isFn(cacheFor);
  if (!controlled) {
    let expireColumn = cacheFor;
    if (isPlainObject(cacheFor)) {
      const { mode = MEMORY, expire: expire2, tag: configTag } = cacheFor || {};
      cacheMode = mode;
      store = mode === STORAGE_RESTORE;
      tag = configTag ? configTag.toString() : undefinedValue;
      expireColumn = expire2;
    }
    expire = (mode) => getCacheExpireTs(isFn(expireColumn) ? expireColumn({ method: methodInstance, mode }) : expireColumn);
  }
  return {
    f: cacheFor,
    c: controlled,
    e: expire,
    m: cacheMode,
    s: store,
    t: tag
  };
};
const newInstance = (Cls, ...args) => new Cls(...args);
const sloughConfig = (config, args = []) => isFn(config) ? config(...args) : config;
const sloughFunction = (arg, defaultFn) => isFn(arg) ? arg : ![falseValue, nullValue].includes(arg) ? defaultFn : noop;
const createSyncOnceRunner = (delay = 0) => {
  let timer = undefinedValue;
  return (fn) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeoutFn(fn, delay);
  };
};
const cacheKeyPrefix = "$a.";
const buildNamespacedCacheKey = (namespace, key2) => cacheKeyPrefix + namespace + key2;
const buildCompletedURL = (baseURL, url, params) => {
  const startsWithPrefix = /^https?:\/\//i.test(url);
  if (!startsWithPrefix) {
    baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
    if (url !== "") {
      url = url.startsWith("/") ? url : `/${url}`;
    }
  }
  const completeURL = startsWithPrefix ? url : baseURL + url;
  const paramsStr = isString$1(params) ? params : mapItem(filterItem(objectKeys(params), (key2) => params[key2] !== undefinedValue), (key2) => `${key2}=${params[key2]}`).join("&");
  return paramsStr ? +completeURL.includes("?") ? `${completeURL}&${paramsStr}` : `${completeURL}?${paramsStr}` : completeURL;
};
const deepClone$1 = (obj) => {
  if (isArray$1(obj)) {
    return mapItem(obj, deepClone$1);
  }
  if (isPlainObject(obj) && obj.constructor === ObjectCls) {
    const clone2 = {};
    forEach(objectKeys(obj), (key2) => {
      clone2[key2] = deepClone$1(obj[key2]);
    });
    return clone2;
  }
  return obj;
};
class AlovaError extends Error {
  constructor(prefix, message, errorCode) {
    super(message + (errorCode ? `

For detailed: https://alova.js.org/error#${errorCode}` : ""));
    this.name = `[alova${prefix ? `/${prefix}` : ""}]`;
  }
}
const createAssert = (prefix = "") => (expression, message, errorCode) => {
  if (!expression) {
    throw newInstance(AlovaError, prefix, message, errorCode);
  }
};
const bridgeObject = JSON.parse;
const injectReferingObject = () => bridgeObject.bridgeData || {};
const createEventManager = () => {
  const eventMap = {};
  return {
    eventMap,
    on(type, handler) {
      const eventTypeItem = eventMap[type] = eventMap[type] || [];
      pushItem(eventTypeItem, handler);
      return () => {
        eventMap[type] = filterItem(eventTypeItem, (item) => item !== handler);
      };
    },
    off(type, handler) {
      const handlers = eventMap[type];
      if (!handlers) {
        return;
      }
      if (handler) {
        const index2 = handlers.indexOf(handler);
        index2 > -1 && handlers.splice(index2, 1);
      } else {
        delete eventMap[type];
      }
    },
    emit(type, event) {
      const handlers = eventMap[type] || [];
      return mapItem(handlers, (handler) => handler(event));
    }
  };
};
class FrameworkReadableState {
  constructor(state, key2, dehydrate, exportState) {
    this.s = state;
    this.k = key2;
    this.$dhy = dehydrate;
    this.$exp = exportState;
  }
  get v() {
    return this.$dhy(this.s);
  }
  get e() {
    return this.$exp(this.s);
  }
}
class FrameworkState extends FrameworkReadableState {
  constructor(state, key2, dehydrate, exportState, update) {
    super(state, key2, dehydrate, exportState);
    this.$upd = update;
  }
  set v(newValue) {
    this.$upd(this.s, newValue);
  }
  get v() {
    return this.$dhy(this.s);
  }
}
let globalConfigMap = {
  autoHitCache: "global",
  ssr: isSSR
};
const titleStyle = "color: black; font-size: 12px; font-weight: bolder";
var defaultCacheLogger = (response, methodInstance, cacheMode, tag) => {
  const cole = console;
  const log = (...args) => console.log(...args);
  const { url } = methodInstance;
  const isRestoreMode = cacheMode === STORAGE_RESTORE;
  const hdStyle = "\x1B[42m%s\x1B[49m";
  const labelStyle = "\x1B[32m%s\x1B[39m";
  const startSep = ` [HitCache]${url} `;
  const endSepFn = () => Array(len(startSep) + 1).join("^");
  if (globalConfigMap.ssr) {
    log(hdStyle, startSep);
    log(labelStyle, " Cache ", response);
    log(labelStyle, " Mode  ", cacheMode);
    isRestoreMode && log(labelStyle, " Tag   ", tag);
    log(labelStyle, endSepFn());
  } else {
    cole.groupCollapsed ? cole.groupCollapsed("%cHitCache", "padding: 2px 6px; background: #c4fcd3; color: #53b56d;", url) : log(hdStyle, startSep);
    log("%c[Cache]", titleStyle, response);
    log("%c[Mode]", titleStyle, cacheMode);
    isRestoreMode && log("%c[Tag]", titleStyle, tag);
    log("%c[Method]", titleStyle, methodInstance);
    cole.groupEnd ? cole.groupEnd() : log(labelStyle, endSepFn());
  }
};
const hitSourceStringCacheKey = (key2) => `hss.${key2}`;
const hitSourceRegexpPrefix = "hsr.";
const hitSourceRegexpCacheKey = (regexpStr) => hitSourceRegexpPrefix + regexpStr;
const unifiedHitSourceRegexpCacheKey = "$$hsrs";
const regexpSourceFlagSeparator = "__$<>$__";
const addItem = (obj, item) => {
  obj[item] = 0;
};
const setWithCacheAdapter = (namespace, key2, data, expireTimestamp, cacheAdapter, hitSource, tag) => __async(exports, null, function* () {
  if (expireTimestamp > getTime() && data) {
    const methodCacheKey = buildNamespacedCacheKey(namespace, key2);
    yield cacheAdapter.set(methodCacheKey, filterItem([data, expireTimestamp === Infinity ? undefinedValue : expireTimestamp, tag], Boolean));
    if (hitSource) {
      const hitSourceKeys = {};
      const hitSourceRegexpSources = [];
      forEach(hitSource, (sourceItem) => {
        const isRegexp = instanceOf(sourceItem, RegExpCls);
        const targetHitSourceKey = isRegexp ? sourceItem.source + (sourceItem.flags ? regexpSourceFlagSeparator + sourceItem.flags : "") : sourceItem;
        if (targetHitSourceKey) {
          if (isRegexp && !hitSourceKeys[targetHitSourceKey]) {
            pushItem(hitSourceRegexpSources, targetHitSourceKey);
          }
          addItem(hitSourceKeys, isRegexp ? hitSourceRegexpCacheKey(targetHitSourceKey) : hitSourceStringCacheKey(targetHitSourceKey));
        }
      });
      const promises = mapItem(objectKeys(hitSourceKeys), (hitSourceKey) => __async(exports, null, function* () {
        const targetMethodKeys = (yield cacheAdapter.get(hitSourceKey)) || {};
        addItem(targetMethodKeys, methodCacheKey);
        yield cacheAdapter.set(hitSourceKey, targetMethodKeys);
      }));
      const saveRegexp = () => __async(exports, null, function* () {
        if (len(hitSourceRegexpSources)) {
          const regexpList = (yield cacheAdapter.get(unifiedHitSourceRegexpCacheKey)) || [];
          pushItem(regexpList, ...hitSourceRegexpSources);
          yield cacheAdapter.set(unifiedHitSourceRegexpCacheKey, regexpList);
        }
      });
      yield PromiseCls.all([...promises, saveRegexp()]);
    }
  }
});
const removeWithCacheAdapter = (namespace, key2, cacheAdapter) => __async(exports, null, function* () {
  const methodStoreKey = buildNamespacedCacheKey(namespace, key2);
  yield cacheAdapter.remove(methodStoreKey);
});
const getRawWithCacheAdapter = (namespace, key2, cacheAdapter, tag) => __async(exports, null, function* () {
  const storagedData = yield cacheAdapter.get(buildNamespacedCacheKey(namespace, key2));
  if (storagedData) {
    const [dataUnused, expireTimestamp, storedTag] = storagedData;
    if (storedTag === tag && (!expireTimestamp || expireTimestamp > getTime())) {
      return storagedData;
    }
    yield removeWithCacheAdapter(namespace, key2, cacheAdapter);
  }
});
const getWithCacheAdapter = (namespace, key2, cacheAdapter, tag) => __async(exports, null, function* () {
  const rawData = yield getRawWithCacheAdapter(namespace, key2, cacheAdapter, tag);
  return rawData ? rawData[0] : undefinedValue;
});
const hitTargetCacheWithCacheAdapter = (sourceKey, sourceName, cacheAdapter) => __async(exports, null, function* () {
  const sourceNameStr = `${sourceName}`;
  const sourceTargetKeyMap = {};
  const hitSourceKey = hitSourceStringCacheKey(sourceKey);
  sourceTargetKeyMap[hitSourceKey] = yield cacheAdapter.get(hitSourceKey);
  let unifiedHitSourceRegexpChannel;
  if (sourceName) {
    const hitSourceName = hitSourceStringCacheKey(sourceNameStr);
    sourceTargetKeyMap[hitSourceName] = yield cacheAdapter.get(hitSourceName);
    unifiedHitSourceRegexpChannel = yield cacheAdapter.get(unifiedHitSourceRegexpCacheKey);
    const matchedRegexpStrings = [];
    if (unifiedHitSourceRegexpChannel && len(unifiedHitSourceRegexpChannel)) {
      forEach(unifiedHitSourceRegexpChannel, (regexpStr) => {
        const [source, flag] = regexpStr.split(regexpSourceFlagSeparator);
        if (newInstance(RegExpCls, source, flag).test(sourceNameStr)) {
          pushItem(matchedRegexpStrings, regexpStr);
        }
      });
      yield PromiseCls.all(mapItem(matchedRegexpStrings, (regexpString) => __async(exports, null, function* () {
        const hitSourceRegexpString = hitSourceRegexpCacheKey(regexpString);
        sourceTargetKeyMap[hitSourceRegexpString] = yield cacheAdapter.get(hitSourceRegexpString);
      })));
    }
  }
  const removeWithTargetKey = (targetKey) => __async(exports, null, function* () {
    try {
      yield cacheAdapter.remove(targetKey);
      for (const sourceKey2 in sourceTargetKeyMap) {
        const targetKeys = sourceTargetKeyMap[sourceKey2];
        if (targetKeys) {
          deleteAttr(targetKeys, targetKey);
        }
      }
    } catch (_a2) {
    }
  });
  const accessedKeys = {};
  yield PromiseCls.all(mapItem(objectKeys(sourceTargetKeyMap), (sourceKey2) => __async(exports, null, function* () {
    const targetKeys = sourceTargetKeyMap[sourceKey2];
    if (targetKeys) {
      const removingPromises = [];
      for (const key2 in targetKeys) {
        if (!accessedKeys[key2]) {
          addItem(accessedKeys, key2);
          pushItem(removingPromises, removeWithTargetKey(key2));
        }
      }
      yield PromiseCls.all(removingPromises);
    }
  })));
  const unifiedHitSourceRegexpChannelLen = len(unifiedHitSourceRegexpChannel || []);
  yield PromiseCls.all(mapItem(objectKeys(sourceTargetKeyMap), (sourceKey2) => __async(exports, null, function* () {
    const targetKeys = sourceTargetKeyMap[sourceKey2];
    if (targetKeys) {
      if (len(objectKeys(targetKeys))) {
        yield cacheAdapter.set(sourceKey2, targetKeys);
      } else {
        yield cacheAdapter.remove(sourceKey2);
        if (sourceKey2.includes(hitSourceRegexpPrefix) && unifiedHitSourceRegexpChannel) {
          unifiedHitSourceRegexpChannel = filterItem(unifiedHitSourceRegexpChannel, (rawRegexpStr) => hitSourceRegexpCacheKey(rawRegexpStr) !== sourceKey2);
        }
      }
    }
  })));
  if (unifiedHitSourceRegexpChannelLen !== len(unifiedHitSourceRegexpChannel || [])) {
    yield cacheAdapter.set(unifiedHitSourceRegexpCacheKey, unifiedHitSourceRegexpChannel);
  }
});
var cloneMethod = (methodInstance) => {
  const { data, config } = methodInstance;
  const newConfig = __spreadValues({}, config);
  const { headers = {}, params = {} } = newConfig;
  const ctx = getContext(methodInstance);
  newConfig.headers = __spreadValues({}, headers);
  newConfig.params = isString$1(params) ? params : __spreadValues({}, params);
  const newMethod = newInstance(Method, methodInstance.type, ctx, methodInstance.url, newConfig, data);
  return objAssign(newMethod, __spreadProps(__spreadValues({}, methodInstance), {
    config: newConfig
  }));
};
const queryCache = (_0, ..._1) => __async(exports, [_0, ..._1], function* (matcher, { policy = "all" } = {}) {
  if (matcher && matcher.key) {
    const { id, l1Cache, l2Cache } = getContext(matcher);
    const methodKey = getMethodInternalKey(matcher);
    const { f: cacheFor, c: controlled, s: store, e: expireMilliseconds, t: tag } = getLocalCacheConfigParam(matcher);
    if (controlled) {
      return cacheFor();
    }
    let cachedData = policy !== "l2" ? yield getWithCacheAdapter(id, methodKey, l1Cache) : undefinedValue;
    if (policy === "l2") {
      cachedData = yield getWithCacheAdapter(id, methodKey, l2Cache, tag);
    } else if (policy === "all" && !cachedData) {
      if (store && expireMilliseconds(STORAGE_RESTORE) > getTime()) {
        cachedData = yield getWithCacheAdapter(id, methodKey, l2Cache, tag);
      }
    }
    return cachedData;
  }
});
const hitCacheBySource = (sourceMethod) => __async(exports, null, function* () {
  const { autoHitCache } = globalConfigMap;
  const { l1Cache, l2Cache } = getContext(sourceMethod);
  const sourceKey = getMethodInternalKey(sourceMethod);
  const { name: sourceName } = getConfig(sourceMethod);
  const cacheAdaptersInvolved = {
    global: [...usingL1CacheAdapters, ...usingL2CacheAdapters],
    self: [l1Cache, l2Cache],
    close: []
  }[autoHitCache];
  if (cacheAdaptersInvolved && len(cacheAdaptersInvolved)) {
    yield PromiseCls.all(mapItem(cacheAdaptersInvolved, (involvedCacheAdapter) => hitTargetCacheWithCacheAdapter(sourceKey, sourceName, involvedCacheAdapter)));
  }
});
const adapterReturnMap = {};
function sendRequest(methodInstance, forceRequest) {
  let fromCache = trueValue;
  let requestAdapterCtrlsPromiseResolveFn;
  const requestAdapterCtrlsPromise = newInstance(PromiseCls, (resolve2) => {
    requestAdapterCtrlsPromiseResolveFn = resolve2;
  });
  const response = () => __async(this, null, function* () {
    const { beforeRequest = noop, responded, requestAdapter: requestAdapter2, cacheLogger } = getOptions(methodInstance);
    const methodKey = getMethodInternalKey(methodInstance);
    const { s: toStorage, t: tag, m: cacheMode, e: expireMilliseconds } = getLocalCacheConfigParam(methodInstance);
    const { id, l1Cache, l2Cache, snapshots } = getContext(methodInstance);
    const { cacheFor } = getConfig(methodInstance);
    const { hitSource: methodHitSource } = methodInstance;
    let cachedResponse = yield isFn(cacheFor) ? cacheFor() : (
      // If it is a forced request, skip the step of getting it from the cache
      // Otherwise, determine whether to use cached data
      forceRequest ? undefinedValue : getWithCacheAdapter(id, methodKey, l1Cache)
    );
    if (cacheMode === STORAGE_RESTORE && !cachedResponse && !forceRequest) {
      const rawL2CacheData = yield getRawWithCacheAdapter(id, methodKey, l2Cache, tag);
      if (rawL2CacheData) {
        const [l2Response, l2ExpireMilliseconds] = rawL2CacheData;
        yield setWithCacheAdapter(id, methodKey, l2Response, l2ExpireMilliseconds, l1Cache, methodHitSource);
        cachedResponse = l2Response;
      }
    }
    const clonedMethod = cloneMethod(methodInstance);
    yield beforeRequest(clonedMethod);
    const { baseURL, url: newUrl, type, data } = clonedMethod;
    const { params = {}, headers = {}, transform = $self, shareRequest } = getConfig(clonedMethod);
    const namespacedAdapterReturnMap = adapterReturnMap[id] = adapterReturnMap[id] || {};
    const requestBody = clonedMethod.data;
    const requestBodyIsSpecial = isSpecialRequestBody(requestBody);
    let requestAdapterCtrls = requestBodyIsSpecial ? undefinedValue : namespacedAdapterReturnMap[methodKey];
    let responseSuccessHandler = $self;
    let responseErrorHandler = undefinedValue;
    let responseCompleteHandler = noop;
    if (isFn(responded)) {
      responseSuccessHandler = responded;
    } else if (isPlainObject(responded)) {
      const { onSuccess: successHandler, onError: errorHandler, onComplete: completeHandler } = responded;
      responseSuccessHandler = isFn(successHandler) ? successHandler : responseSuccessHandler;
      responseErrorHandler = isFn(errorHandler) ? errorHandler : responseErrorHandler;
      responseCompleteHandler = isFn(completeHandler) ? completeHandler : responseCompleteHandler;
    }
    if (cachedResponse !== undefinedValue) {
      requestAdapterCtrlsPromiseResolveFn();
      clonedMethod.fromCache = trueValue;
      sloughFunction(cacheLogger, defaultCacheLogger)(cachedResponse, clonedMethod, cacheMode, tag);
      responseCompleteHandler(clonedMethod);
      return cachedResponse;
    }
    fromCache = falseValue;
    if (!shareRequest || !requestAdapterCtrls) {
      const ctrls = requestAdapter2({
        url: buildCompletedURL(baseURL, newUrl, params),
        type,
        data,
        headers
      }, clonedMethod);
      requestAdapterCtrls = namespacedAdapterReturnMap[methodKey] = ctrls;
    }
    requestAdapterCtrlsPromiseResolveFn(requestAdapterCtrls);
    const handleResponseTask = (_0, _1, ..._2) => __async(this, [_0, _1, ..._2], function* (handlerReturns, responseHeaders, callInSuccess = trueValue) {
      const responseData = yield handlerReturns;
      const transformedData = yield transform(responseData, responseHeaders || {});
      snapshots.save(methodInstance);
      try {
        yield hitCacheBySource(clonedMethod);
      } catch (_a2) {
      }
      const toCache = !requestBody || !requestBodyIsSpecial;
      if (toCache && callInSuccess) {
        try {
          yield PromiseCls.all([
            setWithCacheAdapter(id, methodKey, transformedData, expireMilliseconds(MEMORY), l1Cache, methodHitSource),
            toStorage && setWithCacheAdapter(id, methodKey, transformedData, expireMilliseconds(STORAGE_RESTORE), l2Cache, methodHitSource, tag)
          ]);
        } catch (_b2) {
        }
      }
      return deepClone$1(transformedData);
    });
    return promiseFinally(promiseThen(PromiseCls.all([requestAdapterCtrls.response(), requestAdapterCtrls.headers()]), ([rawResponse, rawHeaders]) => {
      deleteAttr(namespacedAdapterReturnMap, methodKey);
      return handleResponseTask(responseSuccessHandler(rawResponse, clonedMethod), rawHeaders);
    }, (error) => {
      deleteAttr(namespacedAdapterReturnMap, methodKey);
      return isFn(responseErrorHandler) ? (
        // When responding to an error, if no error is thrown, the successful response process will be processed, but the data will not be cached.
        handleResponseTask(responseErrorHandler(error, clonedMethod), undefinedValue, falseValue)
      ) : promiseReject(error);
    }), () => {
      responseCompleteHandler(clonedMethod);
    });
  });
  return {
    // request interrupt function
    abort: () => {
      promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.abort());
    },
    onDownload: (handler) => {
      promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.onDownload && requestAdapterCtrls.onDownload(handler));
    },
    onUpload: (handler) => {
      promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.onUpload && requestAdapterCtrls.onUpload(handler));
    },
    response,
    fromCache: () => fromCache
  };
}
const offEventCallback = (offHandler, handlers) => () => {
  const index2 = handlers.indexOf(offHandler);
  index2 >= 0 && handlers.splice(index2, 1);
};
class Method {
  constructor(type, context2, url, config, data) {
    this.dhs = [];
    this.uhs = [];
    this.fromCache = undefinedValue;
    const abortRequest = () => {
      abortRequest.a();
    };
    abortRequest.a = noop;
    type = type.toUpperCase();
    const instance = this;
    const contextOptions = getContextOptions(context2);
    instance.abort = abortRequest;
    instance.baseURL = contextOptions.baseURL || "";
    instance.url = url;
    instance.type = type;
    instance.context = context2;
    const contextConcatConfig = {};
    const mergedLocalCacheKey = "cacheFor";
    const globalLocalCache = isPlainObject(contextOptions[mergedLocalCacheKey]) ? contextOptions[mergedLocalCacheKey][type] : undefinedValue;
    const hitSource = config && config.hitSource;
    forEach(["timeout", "shareRequest"], (mergedKey) => {
      if (contextOptions[mergedKey] !== undefinedValue) {
        contextConcatConfig[mergedKey] = contextOptions[mergedKey];
      }
    });
    if (globalLocalCache !== undefinedValue) {
      contextConcatConfig[mergedLocalCacheKey] = globalLocalCache;
    }
    if (hitSource) {
      instance.hitSource = mapItem(isArray$1(hitSource) ? hitSource : [hitSource], (sourceItem) => instanceOf(sourceItem, Method) ? getMethodInternalKey(sourceItem) : sourceItem);
      deleteAttr(config, "hitSource");
    }
    instance.config = __spreadValues(__spreadProps(__spreadValues({}, contextConcatConfig), {
      headers: {},
      params: {}
    }), config || {});
    instance.data = data;
    instance.meta = config ? config.meta : instance.meta;
    instance.key = instance.generateKey();
  }
  /**
   * Bind download progress callback function
   * @param progressHandler Download progress callback function
   * @version 2.17.0
   * @return unbind function
   */
  onDownload(downloadHandler) {
    pushItem(this.dhs, downloadHandler);
    return offEventCallback(downloadHandler, this.dhs);
  }
  /**
   * Bind upload progress callback function
   * @param progressHandler Upload progress callback function
   * @version 2.17.0
   * @return unbind function
   */
  onUpload(uploadHandler) {
    pushItem(this.uhs, uploadHandler);
    return offEventCallback(uploadHandler, this.uhs);
  }
  /**
   * Send a request through a method instance and return a promise object
   */
  send(forceRequest = falseValue) {
    const instance = this;
    const { response, onDownload, onUpload, abort, fromCache } = sendRequest(instance, forceRequest);
    len(instance.dhs) > 0 && onDownload((loaded, total) => forEach(instance.dhs, (handler) => handler({ loaded, total })));
    len(instance.uhs) > 0 && onUpload((loaded, total) => forEach(instance.uhs, (handler) => handler({ loaded, total })));
    instance.abort.a = abort;
    instance.fromCache = undefinedValue;
    instance.promise = promiseThen(response(), (r2) => {
      instance.fromCache = fromCache();
      return r2;
    });
    return instance.promise;
  }
  /**
   * Set the method name, if there is already a name it will be overwritten
   * @param name method name
   */
  setName(name) {
    getConfig(this).name = name;
  }
  generateKey() {
    return key(this);
  }
  /**
   * Bind callbacks for resolve and/or reject Promise
   * @param onfulfilled The callback to be executed when resolving the Promise
   * @param onrejected The callback to be executed when the Promise is rejected
   * @returns Returns a Promise for executing any callbacks
   */
  then(onfulfilled, onrejected) {
    return promiseThen(this.send(), onfulfilled, onrejected);
  }
  /**
   * Bind a callback only for reject Promise
   * @param onrejected The callback to be executed when the Promise is rejected
   * @returns Returns a Promise that completes the callback
   */
  catch(onrejected) {
    return promiseCatch(this.send(), onrejected);
  }
  /**
   * Bind a callback that is called when the Promise is resolved (resolve or reject)
   * @param onfinally Callback executed when Promise is resolved (resolve or reject).
   * @return Returns a Promise that completes the callback.
   */
  finally(onfinally) {
    return promiseFinally(this.send(), onfinally);
  }
}
const myAssert = createAssert();
const EVENT_SUCCESS_KEY = "success";
const memoryAdapter = () => {
  let l1Cache = {};
  const l1CacheEmitter = createEventManager();
  const adapter = {
    set(key2, value) {
      l1Cache[key2] = value;
      l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "set", key: key2, value, container: l1Cache });
    },
    get: (key2) => {
      const value = l1Cache[key2];
      l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "get", key: key2, value, container: l1Cache });
      return value;
    },
    remove(key2) {
      deleteAttr(l1Cache, key2);
      l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "remove", key: key2, container: l1Cache });
    },
    clear: () => {
      l1Cache = {};
      l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "clear", key: "", container: l1Cache });
    },
    emitter: l1CacheEmitter
  };
  return adapter;
};
const localStorageAdapter = () => {
  const l2CacheEmitter = createEventManager();
  const instance = localStorage;
  const adapter = {
    set: (key2, value) => {
      instance.setItem(key2, JSONStringify(value));
      l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "set", key: key2, value, container: instance });
    },
    get: (key2) => {
      const data = instance.getItem(key2);
      const value = data ? JSONParse(data) : data;
      l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "get", key: key2, value, container: instance });
      return value;
    },
    remove: (key2) => {
      instance.removeItem(key2);
      l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "remove", key: key2, container: instance });
    },
    clear: () => {
      instance.clear();
      l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "clear", key: "", container: instance });
    },
    emitter: l2CacheEmitter
  };
  return adapter;
};
const placeholderAdapter = () => {
  const l2CacheNotDefinedAssert = () => {
    myAssert(falseValue, "l2Cache is not defined.");
  };
  return {
    set: () => {
      l2CacheNotDefinedAssert();
    },
    get: () => {
      l2CacheNotDefinedAssert();
      return undefinedValue;
    },
    remove: () => {
      l2CacheNotDefinedAssert();
    },
    clear: () => {
    }
  };
};
const SetCls = Set;
class MethodSnapshotContainer {
  constructor(capacity) {
    this.records = {};
    this.occupy = 0;
    myAssert(capacity >= 0, "expected snapshots limit to be >= 0");
    this.capacity = capacity;
  }
  /**
   * Save method instance snapshot
   * @param methodInstance method instance
   */
  save(methodInstance) {
    const { name } = getConfig(methodInstance);
    const { records, occupy, capacity } = this;
    if (name && occupy < capacity) {
      const targetSnapshots = records[name] = records[name] || newInstance(SetCls);
      targetSnapshots.add(methodInstance);
      this.occupy += 1;
    }
  }
  /**
   * Get a Method instance snapshot, which will filter out the corresponding Method instance based on the matcher
   * @param matcher Matching snapshot name, which can be a string or regular expression, or an object with a filter function
   * @returns Array of matched Method instance snapshots
   */
  match(matcher, matchAll = true) {
    let nameString;
    let nameReg;
    let matchHandler;
    let nameMatcher = matcher;
    if (isPlainObject(matcher)) {
      nameMatcher = matcher.name;
      matchHandler = matcher.filter;
    }
    if (instanceOf(nameMatcher, RegExpCls)) {
      nameReg = nameMatcher;
    } else if (isString$1(nameMatcher)) {
      nameString = nameMatcher;
    }
    const { records } = this;
    let matches = newInstance(SetCls);
    if (nameString) {
      matches = records[nameString] || matches;
    } else if (nameReg) {
      forEach(filterItem(objectKeys(records), (methodName) => nameReg.test(methodName)), (methodName) => {
        records[methodName].forEach((method) => matches.add(method));
      });
    }
    const fromMatchesArray = isFn(matchHandler) ? filterItem([...matches], matchHandler) : [...matches];
    return matchAll ? fromMatchesArray : fromMatchesArray[0];
  }
}
const typeGet = "GET";
const typeHead = "HEAD";
const typePost = "POST";
const typePut = "PUT";
const typePatch = "PATCH";
const typeDelete = "DELETE";
const typeOptions = "OPTIONS";
const defaultAlovaOptions = {
  /**
   * GET requests are cached for 5 minutes (300000 milliseconds) by default, and other requests are not cached by default.
   */
  cacheFor: {
    [typeGet]: 3e5
  },
  /**
   * Share requests default to true
   */
  shareRequest: trueValue,
  /**
   * Number of method snapshots, default is 1000
   */
  snapshots: 1e3
};
let idCount = 0;
class Alova {
  constructor(options) {
    var _a2, _b2;
    const instance = this;
    instance.id = (options.id || (idCount += 1)).toString();
    instance.l1Cache = options.l1Cache || memoryAdapter();
    instance.l2Cache = options.l2Cache || (typeof localStorage !== "undefined" ? localStorageAdapter() : placeholderAdapter());
    instance.options = __spreadValues(__spreadValues({}, defaultAlovaOptions), options);
    instance.snapshots = newInstance(MethodSnapshotContainer, (_b2 = (_a2 = options.snapshots) !== null && _a2 !== void 0 ? _a2 : defaultAlovaOptions.snapshots) !== null && _b2 !== void 0 ? _b2 : 0);
  }
  Request(config) {
    return newInstance(Method, config.method || typeGet, this, config.url, config, config.data);
  }
  Get(url, config) {
    return newInstance(Method, typeGet, this, url, config);
  }
  Post(url, data, config) {
    return newInstance(Method, typePost, this, url, config, data);
  }
  Delete(url, data, config) {
    return newInstance(Method, typeDelete, this, url, config, data);
  }
  Put(url, data, config) {
    return newInstance(Method, typePut, this, url, config, data);
  }
  Head(url, config) {
    return newInstance(Method, typeHead, this, url, config);
  }
  Patch(url, data, config) {
    return newInstance(Method, typePatch, this, url, config, data);
  }
  Options(url, config) {
    return newInstance(Method, typeOptions, this, url, config);
  }
}
let boundStatesHook = undefinedValue;
const usingL1CacheAdapters = [];
const usingL2CacheAdapters = [];
const createAlova = (options) => {
  const alovaInstance = newInstance(Alova, options);
  const newStatesHook = alovaInstance.options.statesHook;
  if (boundStatesHook && newStatesHook) {
    myAssert(boundStatesHook.name === newStatesHook.name, "expected to use the same `statesHook`");
  }
  boundStatesHook = newStatesHook;
  const { l1Cache, l2Cache } = alovaInstance;
  !usingL1CacheAdapters.includes(l1Cache) && pushItem(usingL1CacheAdapters, l1Cache);
  !usingL2CacheAdapters.includes(l2Cache) && pushItem(usingL2CacheAdapters, l2Cache);
  return alovaInstance;
};
const promiseStatesHook = () => {
  myAssert(boundStatesHook, "`statesHook` is not set in alova instance");
  return boundStatesHook;
};
const defaultVisitorMeta = {
  authRole: null
};
const defaultLoginMeta = {
  authRole: "login"
};
const defaultLogoutMeta = {
  authRole: "logout"
};
const defaultRefreshTokenMeta = {
  authRole: "refreshToken"
};
const checkMethodRole = ({ meta }, metaMatches) => {
  if (isPlainObject(meta)) {
    for (const key2 in meta) {
      if (Object.prototype.hasOwnProperty.call(meta, key2)) {
        const matchedMetaItem = metaMatches[key2];
        if (instanceOf(matchedMetaItem, RegExp) ? matchedMetaItem.test(meta[key2]) : meta[key2] === matchedMetaItem) {
          return trueValue;
        }
      }
    }
  }
  return falseValue;
};
const waitForTokenRefreshed = (method, waitingList) => newInstance(PromiseCls, (resolve2) => {
  pushItem(waitingList, {
    method,
    resolve: resolve2
  });
});
const callHandlerIfMatchesMeta = (method, authorizationInterceptor, defaultMeta, response) => {
  if (checkMethodRole(method, (authorizationInterceptor === null || authorizationInterceptor === void 0 ? void 0 : authorizationInterceptor.metaMatches) || defaultMeta)) {
    const handler = isFn(authorizationInterceptor) ? authorizationInterceptor : isPlainObject(authorizationInterceptor) && isFn(authorizationInterceptor.handler) ? authorizationInterceptor.handler : noop;
    return handler(response, method);
  }
};
const refreshTokenIfExpired = (method, waitingList, updateRefreshStatus, handlerParams, refreshToken, tokenRefreshing) => __async(exports, null, function* () {
  const fromResponse = len(handlerParams) >= 2;
  let isExpired = refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken.isExpired(...handlerParams);
  if (instanceOf(isExpired, PromiseCls)) {
    isExpired = yield isExpired;
  }
  if (isExpired) {
    try {
      let intentToRefreshToken = trueValue;
      if (fromResponse && tokenRefreshing) {
        intentToRefreshToken = falseValue;
        yield waitForTokenRefreshed(method, waitingList);
      }
      if (intentToRefreshToken) {
        updateRefreshStatus(trueValue);
        yield refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken.handler(...handlerParams);
        updateRefreshStatus(falseValue);
        forEach(waitingList, ({ resolve: resolve2 }) => resolve2());
      }
      if (fromResponse) {
        const { config } = method;
        const methodTransformData = config.transform;
        config.transform = undefinedValue;
        const resentData = yield method;
        config.transform = methodTransformData;
        return resentData;
      }
    } finally {
      updateRefreshStatus(falseValue);
      splice(waitingList, 0, len(waitingList));
    }
  }
});
const onResponded2Record = (onRespondedHandlers) => {
  let successHandler = undefinedValue;
  let errorHandler = undefinedValue;
  let onCompleteHandler = undefinedValue;
  if (isFn(onRespondedHandlers)) {
    successHandler = onRespondedHandlers;
  } else if (isPlainObject(onRespondedHandlers)) {
    const { onSuccess, onError: onError2, onComplete } = onRespondedHandlers;
    successHandler = isFn(onSuccess) ? onSuccess : successHandler;
    errorHandler = isFn(onError2) ? onError2 : errorHandler;
    onCompleteHandler = isFn(onComplete) ? onComplete : onCompleteHandler;
  }
  return {
    onSuccess: successHandler,
    onError: errorHandler,
    onComplete: onCompleteHandler
  };
};
const createServerTokenAuthentication = ({ visitorMeta, login, logout, refreshTokenOnSuccess, refreshTokenOnError, assignToken = noop }) => {
  let tokenRefreshing = falseValue;
  const waitingList = [];
  const onAuthRequired = (onBeforeRequest) => (method) => __async(exports, null, function* () {
    const isVisitorRole = checkMethodRole(method, visitorMeta || defaultVisitorMeta);
    const isLoginRole = checkMethodRole(method, (login === null || login === void 0 ? void 0 : login.metaMatches) || defaultLoginMeta);
    if (!isVisitorRole && !isLoginRole && !checkMethodRole(method, (refreshTokenOnSuccess === null || refreshTokenOnSuccess === void 0 ? void 0 : refreshTokenOnSuccess.metaMatches) || defaultRefreshTokenMeta) && !checkMethodRole(method, (refreshTokenOnError === null || refreshTokenOnError === void 0 ? void 0 : refreshTokenOnError.metaMatches) || defaultRefreshTokenMeta)) {
      if (tokenRefreshing) {
        yield waitForTokenRefreshed(method, waitingList);
      }
    }
    if (!isVisitorRole && !isLoginRole) {
      yield assignToken(method);
    }
    return onBeforeRequest === null || onBeforeRequest === void 0 ? void 0 : onBeforeRequest(method);
  });
  const onResponseRefreshToken = (onRespondedHandlers) => {
    const respondedRecord = onResponded2Record(onRespondedHandlers);
    return __spreadProps(__spreadValues({}, respondedRecord), {
      onSuccess: (response, method) => __async(exports, null, function* () {
        if (!checkMethodRole(method, visitorMeta || defaultVisitorMeta) && !checkMethodRole(method, (login === null || login === void 0 ? void 0 : login.metaMatches) || defaultLoginMeta) && !checkMethodRole(method, (refreshTokenOnSuccess === null || refreshTokenOnSuccess === void 0 ? void 0 : refreshTokenOnSuccess.metaMatches) || defaultRefreshTokenMeta)) {
          const dataResent = yield refreshTokenIfExpired(method, waitingList, (refreshing) => {
            tokenRefreshing = refreshing;
          }, [response, method], refreshTokenOnSuccess, tokenRefreshing);
          if (dataResent) {
            return dataResent;
          }
        }
        yield callHandlerIfMatchesMeta(method, login, defaultLoginMeta, response);
        yield callHandlerIfMatchesMeta(method, logout, defaultLogoutMeta, response);
        return (respondedRecord.onSuccess || $self)(response, method);
      }),
      onError: (error, method) => __async(exports, null, function* () {
        if (!checkMethodRole(method, visitorMeta || defaultVisitorMeta) && !checkMethodRole(method, (login === null || login === void 0 ? void 0 : login.metaMatches) || defaultLoginMeta) && !checkMethodRole(method, (refreshTokenOnError === null || refreshTokenOnError === void 0 ? void 0 : refreshTokenOnError.metaMatches) || defaultRefreshTokenMeta)) {
          const dataResent = yield refreshTokenIfExpired(method, waitingList, (refreshing) => {
            tokenRefreshing = refreshing;
          }, [error, method], refreshTokenOnError, tokenRefreshing);
          if (dataResent) {
            return dataResent;
          }
        }
        return (respondedRecord.onError || noop)(error, method);
      })
    });
  };
  return {
    waitingList,
    onAuthRequired,
    onResponseRefreshToken
  };
};
const debounce = (fn, delay) => {
  let timer = nullValue;
  return function debounceFn(...args) {
    const bindFn = fn.bind(this, ...args);
    const delayMill = isNumber(delay) ? delay : delay(...args);
    timer && clearTimeoutTimer(timer);
    if (delayMill > 0) {
      timer = setTimeoutFn(bindFn, delayMill);
    } else {
      bindFn();
    }
  };
};
const mapObject = (obj, callback) => {
  const ret = {};
  for (const key2 in obj) {
    ret[key2] = callback(obj[key2], key2, obj);
  }
  return ret;
};
var EnumHookType;
(function(EnumHookType2) {
  EnumHookType2[EnumHookType2["USE_REQUEST"] = 1] = "USE_REQUEST";
  EnumHookType2[EnumHookType2["USE_WATCHER"] = 2] = "USE_WATCHER";
  EnumHookType2[EnumHookType2["USE_FETCHER"] = 3] = "USE_FETCHER";
})(EnumHookType || (EnumHookType = {}));
function statesHookHelper(statesHook2, referingObject = __spreadValues({
  trackedKeys: {},
  bindError: falseValue,
  initialRequest: falseValue
}, injectReferingObject())) {
  const ref2 = (initialValue) => statesHook2.ref ? statesHook2.ref(initialValue) : { current: initialValue };
  referingObject = ref2(referingObject).current;
  const exportState = (state) => (statesHook2.export || $self)(state, referingObject);
  const memorize = (fn) => {
    if (!isFn(statesHook2.memorize)) {
      return fn;
    }
    const memorizedFn = statesHook2.memorize(fn);
    memorizedFn.memorized = trueValue;
    return memorizedFn;
  };
  const { dehydrate } = statesHook2;
  const update = (newValue, state, key2) => newValue !== dehydrate(state, key2, referingObject) && referingObject.trackedKeys[key2] && statesHook2.update(newValue, state, key2, referingObject);
  const mapDeps = (deps) => mapItem(deps, (item) => instanceOf(item, FrameworkReadableState) ? item.e : item);
  const createdStateList = [];
  const depKeys = {};
  return {
    create: (initialValue, key2) => {
      pushItem(createdStateList, key2);
      return newInstance(FrameworkState, statesHook2.create(initialValue, key2, referingObject), key2, (state) => dehydrate(state, key2, referingObject), exportState, (state, newValue) => update(newValue, state, key2));
    },
    computed: (getter, depList, key2) => {
      forEach(depList, (dep) => {
        if (dep.k) {
          depKeys[dep.k] = trueValue;
        }
      });
      return newInstance(FrameworkReadableState, statesHook2.computed(getter, mapDeps(depList), key2, referingObject), key2, (state) => dehydrate(state, key2, referingObject), exportState);
    },
    effectRequest: (effectRequestParams) => statesHook2.effectRequest(effectRequestParams, referingObject),
    ref: ref2,
    watch: (source, callback) => statesHook2.watch(mapDeps(source), callback, referingObject),
    onMounted: (callback) => statesHook2.onMounted(callback, referingObject),
    onUnmounted: (callback) => statesHook2.onUnmounted(callback, referingObject),
    memorize,
    /**
     * refering object that sharing some value with this object.
     */
    __referingObj: referingObject,
    /**
     * expose provider for specified use hook.
     * @param object object that contains state proxy, framework state, operating function and event binder.
     * @returns provider component.
     */
    exposeProvider: (object) => {
      const provider = {};
      const originalStatesMap = {};
      const stateKeys = [];
      for (const key2 in object) {
        const value = object[key2];
        const isValueFunction = isFn(value);
        if (isValueFunction && !referingObject.trackedKeys[key2]) {
          provider[key2] = key2.startsWith("on") ? (...args) => {
            value(...args);
            return completedProvider;
          } : value.memorized ? value : memorize(value);
        } else {
          if (!includes(["uploading", "downloading"], key2) && !key2.startsWith("__")) {
            pushItem(stateKeys, key2);
          }
          const isFrameworkState = instanceOf(value, FrameworkReadableState);
          if (isFrameworkState) {
            originalStatesMap[key2] = value.s;
          }
          ObjectCls.defineProperty(provider, key2, {
            get: () => {
              referingObject.trackedKeys[key2] = trueValue;
              return isFrameworkState ? value.e : value;
            },
            // set need to set an function,
            // otherwise it will throw `TypeError: Cannot set property __referingObj of #<Object> which has only a getter` when setting value
            set: noop,
            enumerable: trueValue,
            configurable: trueValue
          });
        }
      }
      const { update: nestedHookUpdate, __proxyState: nestedProxyState } = provider;
      referingObject.trackedKeys = __spreadValues({}, depKeys);
      referingObject.bindError = falseValue;
      const { then: providerThen } = provider;
      const extraProvider = {
        // expose referingObject automatically.
        __referingObj: referingObject,
        // the new updating function that can update the new states and nested hook states.
        update: memorize((newStates) => {
          objectKeys(newStates).forEach((key2) => {
            if (includes(createdStateList, key2)) {
              update(newStates[key2], originalStatesMap[key2], key2);
            } else if (key2 in provider && isFn(nestedHookUpdate)) {
              nestedHookUpdate({
                [key2]: newStates[key2]
              });
            }
          });
        }),
        __proxyState: memorize((key2) => {
          if (includes(createdStateList, key2) && instanceOf(object[key2], FrameworkReadableState)) {
            referingObject.trackedKeys[key2] = trueValue;
            return object[key2];
          }
          return nestedProxyState(key2);
        }),
        /**
         * send and wait for responding with `await`
         * this is always used in `nuxt3` and suspense in vue3
         * @example
         * ```js
         * const { loading, data, error } = await useRequest(...);
         * ```
         */
        then(onfulfilled, onrejected) {
          forEach(stateKeys, (key2) => {
            referingObject.trackedKeys[key2] = trueValue;
          });
          const handleFullfilled = () => {
            deleteAttr(completedProvider, "then");
            onfulfilled(completedProvider);
          };
          isFn(providerThen) ? providerThen(handleFullfilled, onrejected) : handleFullfilled();
        }
      };
      const completedProvider = objAssign(provider, extraProvider);
      return completedProvider;
    },
    /**
     * transform state proxies to object.
     * @param states proxy array of framework states
     * @param filterKey filter key of state proxy
     * @returns an object that contains the states of target form
     */
    objectify: (states, filterKey) => states.reduce((result, item) => {
      result[item.k] = filterKey ? item[filterKey] : item;
      return result;
    }, {}),
    transformState2Proxy: (state, key2) => newInstance(FrameworkState, state, key2, (state2) => dehydrate(state2, key2, referingObject), exportState, (state2, newValue) => update(newValue, state2, key2))
  };
}
const requestHookAssert = createAssert("useRequest");
const watcherHookAssert = createAssert("useWatcher");
const fetcherHookAssert = createAssert("useFetcher");
const coreHookAssert = (hookType) => ({
  [EnumHookType.USE_REQUEST]: requestHookAssert,
  [EnumHookType.USE_WATCHER]: watcherHookAssert,
  [EnumHookType.USE_FETCHER]: fetcherHookAssert
})[hookType];
const assertMethod = (assert, methodInstance) => assert(instanceOf(methodInstance, Method), "expected a method instance.");
const KEY_SUCCESS = "success";
const KEY_ERROR = "error";
const KEY_COMPLETE = "complete";
var createHook = (ht, c2, eventManager, ro) => ({
  /** The method instance of the last request */
  m: undefinedValue,
  /** sent method keys */
  rf: {},
  /** frontStates */
  fs: {},
  /** eventManager */
  em: eventManager,
  /** hookType, useRequest=1, useWatcher=2, useFetcher=3 */
  ht,
  /** hook config */
  c: c2,
  /** referingObject */
  ro,
  /** merged states */
  ms: {}
});
class AlovaEventBase {
  constructor(method, args) {
    this.method = method;
    this.args = args;
  }
  clone() {
    return __spreadValues({}, this);
  }
  static spawn(method, args) {
    return newInstance(AlovaEventBase, method, args);
  }
}
class AlovaSuccessEvent extends AlovaEventBase {
  constructor(base, data, fromCache) {
    super(base.method, base.args);
    this.data = data;
    this.fromCache = fromCache;
  }
}
class AlovaErrorEvent extends AlovaEventBase {
  constructor(base, error) {
    super(base.method, base.args);
    this.error = error;
  }
}
class AlovaCompleteEvent extends AlovaEventBase {
  constructor(base, status, data, fromCache, error) {
    super(base.method, base.args);
    this.status = status;
    this.data = data;
    this.fromCache = status === "error" ? false : fromCache;
    this.error = error;
  }
}
const defaultMiddleware = (_2, next) => next();
const stateCache = {};
const getStateCache = (namespace, key2) => {
  const cachedState = stateCache[namespace] || {};
  return cachedState[key2] ? Array.from(cachedState[key2]) : [];
};
const setStateCache = (namespace, key2, hookInstance) => {
  const cachedState = stateCache[namespace] = stateCache[namespace] || {};
  if (!cachedState[key2]) {
    cachedState[key2] = newInstance(Set);
  }
  cachedState[key2].add(hookInstance);
};
const removeStateCache = (namespace, key2, hookInstance) => {
  const cachedState = stateCache[namespace];
  const hookSet = cachedState[key2];
  if (cachedState && hookSet) {
    hookInstance ? hookSet.delete(hookInstance) : hookSet.clear();
    if (hookSet.size === 0) {
      deleteAttr(cachedState, key2);
    }
  }
};
function useHookToSendRequest(hookInstance, methodHandler, sendCallingArgs = []) {
  const currentHookAssert = coreHookAssert(hookInstance.ht);
  let methodInstance = getHandlerMethod(methodHandler, currentHookAssert, sendCallingArgs);
  const { fs: frontStates, ht: hookType, c: useHookConfig } = hookInstance;
  const { loading: loadingState, data: dataState, error: errorState } = frontStates;
  const isFetcher = hookType === EnumHookType.USE_FETCHER;
  const { force: forceRequest = falseValue, middleware = defaultMiddleware } = useHookConfig;
  const alovaInstance = getContext(methodInstance);
  const { id } = alovaInstance;
  const methodKey = getMethodInternalKey(methodInstance);
  const { abortLast = trueValue } = useHookConfig;
  const isFirstRequest = !hookInstance.m;
  hookInstance.m = methodInstance;
  return (() => __async(this, null, function* () {
    let removeStates = noop;
    let isNextCalled = falseValue;
    let responseHandlePromise = promiseResolve(undefinedValue);
    let offDownloadEvent = noop;
    let offUploadEvent = noop;
    const cachedResponse = yield queryCache(methodInstance);
    let fromCache = () => !!cachedResponse;
    let controlledLoading = falseValue;
    if (!isFetcher) {
      setStateCache(id, methodKey, hookInstance);
      removeStates = () => removeStateCache(id, methodKey, hookInstance);
    }
    const guardNext = (guardNextConfig) => {
      isNextCalled = trueValue;
      const { force: guardNextForceRequest = forceRequest, method: guardNextReplacingMethod = methodInstance } = guardNextConfig || {};
      const forceRequestFinally = sloughConfig(guardNextForceRequest, [
        newInstance(AlovaEventBase, methodInstance, sendCallingArgs)
      ]);
      const progressUpdater = (stage) => ({ loaded, total }) => {
        frontStates[stage].v = {
          loaded,
          total
        };
      };
      methodInstance = guardNextReplacingMethod;
      hookInstance.rf[methodKey] = removeStates;
      if (!controlledLoading) {
        loadingState.v = !!forceRequestFinally || !cachedResponse;
      }
      const { downloading: enableDownload, uploading: enableUpload } = hookInstance.ro.trackedKeys;
      offDownloadEvent = enableDownload ? methodInstance.onDownload(progressUpdater("downloading")) : offDownloadEvent;
      offUploadEvent = enableUpload ? methodInstance.onUpload(progressUpdater("uploading")) : offUploadEvent;
      responseHandlePromise = methodInstance.send(forceRequestFinally);
      fromCache = () => methodInstance.fromCache || falseValue;
      return responseHandlePromise;
    };
    const commonContext = {
      method: methodInstance,
      cachedResponse,
      config: useHookConfig,
      abort: () => methodInstance.abort()
    };
    const toUpdateResponse = () => hookType !== EnumHookType.USE_WATCHER || !abortLast || hookInstance.m === methodInstance;
    const controlLoading = (control = trueValue) => {
      if (control && isFirstRequest) {
        loadingState.v = falseValue;
      }
      controlledLoading = control;
    };
    const middlewareCompletePromise = isFetcher ? middleware(__spreadProps(__spreadValues({}, commonContext), {
      args: sendCallingArgs,
      fetch: (methodInstance2, ...args) => {
        assertMethod(currentHookAssert, methodInstance2);
        return useHookToSendRequest(hookInstance, methodInstance2, args);
      },
      proxyStates: omit(frontStates, "data"),
      controlLoading
    }), guardNext) : middleware(__spreadProps(__spreadValues({}, commonContext), {
      args: sendCallingArgs,
      send: (...args) => useHookToSendRequest(hookInstance, methodHandler, args),
      proxyStates: frontStates,
      controlLoading
    }), guardNext);
    let finallyResponse = undefinedValue;
    const baseEvent = AlovaEventBase.spawn(methodInstance, sendCallingArgs);
    try {
      const middlewareReturnedData = yield middlewareCompletePromise;
      const afterSuccess = (data) => {
        if (!isFetcher) {
          toUpdateResponse() && (dataState.v = data);
        } else if (hookInstance.c.updateState !== falseValue) {
          forEach(getStateCache(id, methodKey), (hookInstance2) => {
            hookInstance2.fs.data.v = data;
          });
        }
        if (toUpdateResponse()) {
          errorState.v = undefinedValue;
          !controlledLoading && (loadingState.v = falseValue);
          hookInstance.em.emit(KEY_SUCCESS, newInstance(AlovaSuccessEvent, baseEvent, data, fromCache()));
          hookInstance.em.emit(KEY_COMPLETE, newInstance(AlovaCompleteEvent, baseEvent, KEY_SUCCESS, data, fromCache(), undefinedValue));
        }
        return data;
      };
      finallyResponse = // When no data is returned or undefined is returned in the middleware, get the real response data
      // Otherwise, use the returned data and no longer wait for the response promise. At this time, you also need to call the response callback.
      middlewareReturnedData !== undefinedValue ? afterSuccess(middlewareReturnedData) : isNextCalled ? (
        // There are two possibilities when middlewareCompletePromise is resolve
        // 1. The request is normal
        // 2. The request is incorrect, but the error is captured by the middleware function. At this time, the success callback will also be called, that is, afterSuccess(undefinedValue)
        yield promiseThen(responseHandlePromise, afterSuccess, () => afterSuccess(undefinedValue))
      ) : (
        // If is next called is not called, no data is returned
        undefinedValue
      );
      !isNextCalled && !controlledLoading && (loadingState.v = falseValue);
    } catch (error) {
      if (toUpdateResponse()) {
        errorState.v = error;
        !controlledLoading && (loadingState.v = falseValue);
        hookInstance.em.emit(KEY_ERROR, newInstance(AlovaErrorEvent, baseEvent, error));
        hookInstance.em.emit(KEY_COMPLETE, newInstance(AlovaCompleteEvent, baseEvent, KEY_ERROR, undefinedValue, fromCache(), error));
      }
      throw error;
    }
    offDownloadEvent();
    offUploadEvent();
    return finallyResponse;
  }))();
}
const refCurrent = (ref2) => ref2.current;
function createRequestState(hookType, methodHandler, useHookConfig, initialData, immediate = falseValue, watchingStates, debounceDelay = 0) {
  var _a2;
  useHookConfig = __spreadValues({}, useHookConfig);
  let initialLoading = !!immediate;
  let cachedResponse = undefinedValue;
  if (immediate) {
    try {
      const methodInstance = getHandlerMethod(methodHandler, coreHookAssert(hookType));
      const alovaInstance = getContext(methodInstance);
      const l1CacheResult = alovaInstance.l1Cache.get(buildNamespacedCacheKey(alovaInstance.id, getMethodInternalKey(methodInstance)));
      if (l1CacheResult && !instanceOf(l1CacheResult, PromiseCls)) {
        const [data2, expireTimestamp] = l1CacheResult;
        if (!expireTimestamp || expireTimestamp > getTime()) {
          cachedResponse = data2;
        }
      }
      const forceRequestFinally = sloughConfig((_a2 = useHookConfig.force) !== null && _a2 !== void 0 ? _a2 : falseValue);
      initialLoading = !!forceRequestFinally || !cachedResponse;
    } catch (_b2) {
    }
  }
  const { create, effectRequest, ref: ref2, objectify, exposeProvider, transformState2Proxy, __referingObj: referingObject } = statesHookHelper(promiseStatesHook(), useHookConfig.__referingObj);
  const progress = {
    total: 0,
    loaded: 0
  };
  const { managedStates = {} } = useHookConfig;
  const managedStatesProxy = mapObject(managedStates, (state, key2) => transformState2Proxy(state, key2));
  const data = create(cachedResponse !== null && cachedResponse !== void 0 ? cachedResponse : isFn(initialData) ? initialData() : initialData, "data");
  const loading = create(initialLoading, "loading");
  const error = create(undefinedValue, "error");
  const downloading = create(__spreadValues({}, progress), "downloading");
  const uploading = create(__spreadValues({}, progress), "uploading");
  const frontStates = objectify([data, loading, error, downloading, uploading]);
  const eventManager = createEventManager();
  const hookInstance = refCurrent(ref2(createHook(hookType, useHookConfig, eventManager, referingObject)));
  hookInstance.fs = frontStates;
  hookInstance.em = eventManager;
  hookInstance.c = useHookConfig;
  hookInstance.ms = __spreadValues(__spreadValues({}, frontStates), managedStatesProxy);
  const handleRequest = (handler = methodHandler, sendCallingArgs) => useHookToSendRequest(hookInstance, handler, sendCallingArgs);
  const hookRequestPromiseCallback = ref2(undefinedValue);
  const isInitialRequest = ref2(falseValue);
  const onceRunner = refCurrent(ref2(createSyncOnceRunner()));
  const wrapEffectRequest = (ro = referingObject, handler) => {
    onceRunner(() => {
      if (!globalConfigMap.ssr || refCurrent(hookRequestPromiseCallback)) {
        referingObject.initialRequest = isInitialRequest.current = trueValue;
        promiseThen(handleRequest(handler), () => {
          var _a3;
          (_a3 = refCurrent(hookRequestPromiseCallback)) === null || _a3 === void 0 ? void 0 : _a3.resolve();
        }, (error2) => {
          var _a3;
          if (!ro.bindError && !ro.trackedKeys.error && !refCurrent(hookRequestPromiseCallback)) {
            throw error2;
          }
          (_a3 = refCurrent(hookRequestPromiseCallback)) === null || _a3 === void 0 ? void 0 : _a3.reject(error2);
        });
      }
    });
  };
  ref2(debounce((_2, ro, handler) => wrapEffectRequest(ro, handler), (changedIndex) => isNumber(changedIndex) ? isArray$1(debounceDelay) ? debounceDelay[changedIndex] : debounceDelay : 0));
  effectRequest({
    handler: (
      // When `watchingStates` is an array, it indicates the watching states (including an empty array). When it is undefined, it indicates the non-watching state.
      () => wrapEffectRequest(referingObject)
    ),
    removeStates: () => {
      forEach(objectValues(hookInstance.rf), (fn) => fn());
    },
    frontStates: __spreadValues(__spreadValues({}, frontStates), managedStatesProxy),
    watchingStates,
    immediate: immediate !== null && immediate !== void 0 ? immediate : trueValue
  });
  const hookProvider = exposeProvider(__spreadProps(__spreadValues({}, objectify([data, loading, error, downloading, uploading])), {
    abort: () => hookInstance.m && hookInstance.m.abort(),
    /**
     * Manually initiate a request by executing this method
     * @param sendCallingArgs Parameters passed in when calling the send function
     * @param methodInstance method object
     * @param isFetcher Whether to call isFetcher
     * @returns Request promise
     */
    send: (sendCallingArgs, methodInstance) => handleRequest(methodInstance, sendCallingArgs),
    onSuccess(handler) {
      eventManager.on(KEY_SUCCESS, handler);
    },
    onError(handler) {
      referingObject.bindError = trueValue;
      eventManager.on(KEY_ERROR, handler);
    },
    onComplete(handler) {
      eventManager.on(KEY_COMPLETE, handler);
    },
    /**
     * send and wait for responding with `await`
     * this is always used in `nuxt3` and `<suspense>` in vue3
     * @example
     * ```js
     * const { loading, data, error } = await useRequest(...);
     * ```
     */
    then(onfulfilled, onrejected) {
      const { promise, resolve: resolve2, reject } = usePromise();
      hookRequestPromiseCallback.current = {
        resolve: resolve2,
        reject
      };
      setTimeoutFn(() => {
        !isInitialRequest.current && resolve2();
      }, 10);
      promiseThen(promise, () => {
        onfulfilled(hookProvider);
      }, onrejected);
    }
  }));
  return hookProvider;
}
function useRequest(handler, config = {}) {
  const { immediate = trueValue, initialData } = config;
  const props = createRequestState(EnumHookType.USE_REQUEST, handler, config, initialData, !!immediate);
  const { send } = props;
  return objAssign(props, {
    send: (...args) => send(args)
  });
}
var SSEHookReadyState;
(function(SSEHookReadyState2) {
  SSEHookReadyState2[SSEHookReadyState2["CONNECTING"] = 0] = "CONNECTING";
  SSEHookReadyState2[SSEHookReadyState2["OPEN"] = 1] = "OPEN";
  SSEHookReadyState2[SSEHookReadyState2["CLOSED"] = 2] = "CLOSED";
})(SSEHookReadyState || (SSEHookReadyState = {}));
var MessageType;
(function(MessageType2) {
  MessageType2["Open"] = "open";
  MessageType2["Error"] = "error";
  MessageType2["Message"] = "message";
  MessageType2["Close"] = "close";
})(MessageType || (MessageType = {}));
var vue = {
  name: "Vue",
  create: (data) => ref(data),
  dehydrate: (state) => state.value,
  update: (newVal, state) => {
    state.value = newVal;
  },
  effectRequest({ handler, removeStates, immediate, watchingStates }) {
    if (getCurrentInstance()) {
      onUnmounted(removeStates);
    }
    immediate && handler();
    forEach(watchingStates || [], (state, i2) => {
      watch(state, () => {
        handler(i2);
      }, { deep: trueValue });
    });
  },
  computed: (getter) => computed(getter),
  watch: (states, callback) => {
    watch(states, callback, {
      deep: trueValue
    });
  },
  onMounted: (callback) => {
    if (getCurrentInstance()) {
      onMounted(callback);
    } else {
      setTimeoutFn(callback, 10);
    }
  },
  onUnmounted: (callback) => {
    getCurrentInstance() && onUnmounted(callback);
  }
};
var l2CacheAdapter = {
  get(key2) {
    return index.getStorageSync(key2);
  },
  set(key2, value) {
    index.setStorageSync(key2, value);
  },
  remove(key2) {
    index.removeStorageSync(key2);
  },
  clear() {
    index.clearStorageSync();
  }
};
const requestAdapter = (elements, method) => {
  const { url, data, type, headers: header } = elements;
  let taskInstance;
  let onDownload = noop;
  let onUpload = noop;
  const responsePromise = new Promise((resolve2, reject) => {
    const { config: adapterConfig } = method;
    const { requestType, timeout } = adapterConfig;
    if (requestType === "upload") {
      const formData = {};
      const fileData = {};
      if (isPlainObject(data)) {
        Object.keys(data).forEach((key2) => {
          if (["name", "files", "file", "filePath"].includes(key2)) {
            fileData[key2] = data[key2];
          } else {
            formData[key2] = data[key2];
          }
        });
      }
      const uploadTask = taskInstance = index.uploadFile(__spreadProps(__spreadValues(__spreadValues({}, adapterConfig), fileData), {
        name: fileData.name,
        url,
        header,
        formData,
        timeout,
        success: (res) => resolve2(res),
        fail: (reason) => reject(new Error(reason.errMsg)),
        complete: noop
      }));
      onUpload = (handler) => {
        uploadTask.onProgressUpdate(({ totalBytesSent, totalBytesExpectedToSend }) => {
          handler(totalBytesSent, totalBytesExpectedToSend);
        });
      };
    } else if (requestType === "download") {
      const downloadTask = taskInstance = index.downloadFile(__spreadProps(__spreadValues({}, adapterConfig), {
        url,
        header,
        timeout,
        success: (res) => resolve2(res),
        fail: (reason) => reject(new Error(reason.errMsg)),
        complete: noop
      }));
      onDownload = (handler) => {
        downloadTask.onProgressUpdate(({ totalBytesWritten, totalBytesExpectedToWrite }) => {
          handler(totalBytesWritten, totalBytesExpectedToWrite);
        });
      };
    } else {
      taskInstance = index.request(__spreadProps(__spreadValues({}, adapterConfig), {
        url,
        data,
        header,
        method: type,
        timeout,
        success: (res) => resolve2(res),
        fail: (reason) => reject(new Error(reason.errMsg))
      }));
    }
  });
  return {
    response: () => responsePromise,
    headers: () => responsePromise.then((res) => res.header || {}),
    abort: () => {
      taskInstance.abort();
    },
    onDownload,
    onUpload
  };
};
var statesHook = __spreadProps(__spreadValues({}, vue), {
  effectRequest(effectRequestParams, referingObject) {
    const { handler } = effectRequestParams;
    effectRequestParams.handler = (...args) => {
      len(args) > 0 ? handler(...args) : Promise.resolve().then(() => handler(...args));
    };
    return vue.effectRequest(effectRequestParams, referingObject);
  }
});
function AdapterUniapp({ mockRequest } = {}) {
  return {
    statesHook,
    requestAdapter: mockRequest || requestAdapter,
    l2Cache: l2CacheAdapter
  };
}
const _b64chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"];
const _mkUriSafe = (src) => src.replace(/[+/]/g, (m0) => m0 === "+" ? "-" : "_").replace(/=+\$/m, "");
const fromUint8Array = (src, rfc4648 = false) => {
  let b642 = "";
  for (let i2 = 0, l2 = src.length; i2 < l2; i2 += 3) {
    const [a0, a1, a2] = [src[i2], src[i2 + 1], src[i2 + 2]];
    const ord = a0 << 16 | a1 << 8 | a2;
    b642 += _b64chars[ord >>> 18];
    b642 += _b64chars[ord >>> 12 & 63];
    b642 += typeof a1 !== "undefined" ? _b64chars[ord >>> 6 & 63] : "=";
    b642 += typeof a2 !== "undefined" ? _b64chars[ord & 63] : "=";
  }
  return rfc4648 ? _mkUriSafe(b642) : b642;
};
const _btoa = typeof btoa === "function" ? (s2) => btoa(s2) : (s2) => {
  if (s2.charCodeAt(0) > 255) {
    throw new RangeError("The string contains invalid characters.");
  }
  return fromUint8Array(Uint8Array.from(s2, (c2) => c2.charCodeAt(0)));
};
const utob = (src) => unescape(encodeURIComponent(src));
function encode(src, rfc4648 = false) {
  const b642 = _btoa(utob(src));
  return rfc4648 ? _mkUriSafe(b642) : b642;
}
const numericProp = [Number, String];
const makeRequiredProp = (type) => ({
  type,
  required: true
});
const makeArrayProp = () => ({
  type: Array,
  default: () => []
});
const makeBooleanProp = (defaultVal) => ({
  type: Boolean,
  default: defaultVal
});
const makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
const makeNumericProp = (defaultVal) => ({
  type: numericProp,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
const baseProps = {
  /**
   * 自定义根节点样式
   */
  customStyle: makeStringProp(""),
  /**
   * 自定义根节点样式类
   */
  customClass: makeStringProp("")
};
const buttonProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 幽灵按钮
   */
  plain: makeBooleanProp(false),
  /**
   * 圆角按钮
   */
  round: makeBooleanProp(true),
  /**
   * 禁用按钮
   */
  disabled: makeBooleanProp(false),
  /**
   * 是否细边框
   */
  hairline: makeBooleanProp(false),
  /**
   * 块状按钮
   */
  block: makeBooleanProp(false),
  /**
   * 按钮类型，可选值：primary / success / info / warning / error / text / icon
   */
  type: makeStringProp("primary"),
  /**
   * 按钮尺寸，可选值：small / medium / large
   */
  size: makeStringProp("medium"),
  /**
   * 图标类名
   */
  icon: String,
  /**
   * 类名前缀，用于使用自定义图标，用法参考Icon组件
   */
  classPrefix: makeStringProp("wd-icon"),
  /**
   * 加载中按钮
   */
  loading: makeBooleanProp(false),
  /**
   * 加载图标颜色
   */
  loadingColor: String,
  /**
   * 开放能力
   */
  openType: String,
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   */
  hoverStopPropagation: Boolean,
  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
   */
  lang: String,
  /**
   * 会话来源，open-type="contact"时有效
   */
  sessionFrom: String,
  /**
   * 会话内消息卡片标题，open-type="contact"时有效
   */
  sendMessageTitle: String,
  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   */
  sendMessagePath: String,
  /**
   * 会话内消息卡片图片，open-type="contact"时有效
   */
  sendMessageImg: String,
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   */
  appParameter: String,
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
   */
  showMessageCard: Boolean,
  /**
   * 按钮的唯一标识，可用于设置隐私同意授权按钮的id
   */
  buttonId: String,
  /**
   * 支付宝小程序，当 open-type 为 getAuthorize 时有效。
   * 可选值：'phoneNumber' | 'userInfo'
   */
  scope: String
});
class AbortablePromise {
  constructor(executor) {
    this._reject = null;
    this.promise = new Promise((resolve2, reject) => {
      executor(resolve2, reject);
      this._reject = reject;
    });
  }
  // 提供abort方法来中止Promise
  abort(error) {
    if (this._reject) {
      this._reject(error);
    }
  }
  then(onfulfilled, onrejected) {
    return this.promise.then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.promise.catch(onrejected);
  }
}
function addUnit(num) {
  return Number.isNaN(Number(num)) ? `${num}` : `${num}px`;
}
function isObj(value) {
  return Object.prototype.toString.call(value) === "[object Object]" || typeof value === "object";
}
function getType(target) {
  const typeStr = Object.prototype.toString.call(target);
  const match = typeStr.match(/\[object (\w+)\]/);
  const type = match && match.length ? match[1].toLowerCase() : "";
  return type;
}
const isDef = (value) => value !== void 0 && value !== null;
function rgbToHex(r2, g, b2) {
  const hex = (r2 << 16 | g << 8 | b2).toString(16);
  const paddedHex = "#" + "0".repeat(Math.max(0, 6 - hex.length)) + hex;
  return paddedHex;
}
function hexToRgb(hex) {
  const rgb = [];
  for (let i2 = 1; i2 < 7; i2 += 2) {
    rgb.push(parseInt("0x" + hex.slice(i2, i2 + 2), 16));
  }
  return rgb;
}
const gradient = (startColor, endColor, step = 2) => {
  const sColor = hexToRgb(startColor);
  const eColor = hexToRgb(endColor);
  const rStep = (eColor[0] - sColor[0]) / step;
  const gStep = (eColor[1] - sColor[1]) / step;
  const bStep = (eColor[2] - sColor[2]) / step;
  const gradientColorArr = [];
  for (let i2 = 0; i2 < step; i2++) {
    gradientColorArr.push(
      rgbToHex(parseInt(String(rStep * i2 + sColor[0])), parseInt(String(gStep * i2 + sColor[1])), parseInt(String(bStep * i2 + sColor[2])))
    );
  }
  return gradientColorArr;
};
const isEqual = (value1, value2) => {
  if (value1 === value2) {
    return true;
  }
  if (!Array.isArray(value1) || !Array.isArray(value2)) {
    return false;
  }
  if (value1.length !== value2.length) {
    return false;
  }
  for (let i2 = 0; i2 < value1.length; ++i2) {
    if (value1[i2] !== value2[i2]) {
      return false;
    }
  }
  return true;
};
const context = {
  id: 1e3
};
function kebabCase(word) {
  const newWord = word.replace(/[A-Z]/g, function(match) {
    return "-" + match;
  }).toLowerCase();
  return newWord;
}
function camelCase(word) {
  return word.replace(/-(\w)/g, (_2, c2) => c2.toUpperCase());
}
function isArray(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === "[object Array]";
}
function isFunction(value) {
  return getType(value) === "function" || getType(value) === "asyncfunction";
}
function isString(value) {
  return getType(value) === "string";
}
function isPromise(value) {
  if (isObj(value) && isDef(value)) {
    return isFunction(value.then) && isFunction(value.catch);
  }
  return false;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function objToStyle(styles) {
  if (isArray(styles)) {
    const result = styles.filter(function(item) {
      return item != null && item !== "";
    }).map(function(item) {
      return objToStyle(item);
    }).join(";");
    return result ? result.endsWith(";") ? result : result + ";" : "";
  }
  if (isString(styles)) {
    return styles ? styles.endsWith(";") ? styles : styles + ";" : "";
  }
  if (isObj(styles)) {
    const result = Object.keys(styles).filter(function(key2) {
      return styles[key2] != null && styles[key2] !== "";
    }).map(function(key2) {
      return [kebabCase(key2), styles[key2]].join(":");
    }).join(";");
    return result ? result.endsWith(";") ? result : result + ";" : "";
  }
  return "";
}
const pause = (ms = 1e3 / 30) => {
  return new AbortablePromise((resolve2) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve2(true);
    }, ms);
  });
};
function deepClone(obj, cache2 = /* @__PURE__ */ new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (isDate(obj)) {
    return new Date(obj.getTime());
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }
  if (obj instanceof Error) {
    const errorCopy = new Error(obj.message);
    errorCopy.stack = obj.stack;
    return errorCopy;
  }
  if (cache2.has(obj)) {
    return cache2.get(obj);
  }
  const copy = Array.isArray(obj) ? [] : {};
  cache2.set(obj, copy);
  for (const key2 in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key2)) {
      copy[key2] = deepClone(obj[key2], cache2);
    }
  }
  return copy;
}
function deepAssign(target, source) {
  Object.keys(source).forEach((key2) => {
    const targetValue = target[key2];
    const newObjValue = source[key2];
    if (isObj(targetValue) && isObj(newObjValue)) {
      deepAssign(targetValue, newObjValue);
    } else {
      target[key2] = newObjValue;
    }
  });
  return target;
}
const getPropByPath = (obj, path) => {
  const keys = path.split(".");
  try {
    return keys.reduce((acc, key2) => acc !== void 0 && acc !== null ? acc[key2] : void 0, obj);
  } catch (error) {
    return void 0;
  }
};
const isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
function omitBy(obj, predicate) {
  const newObj = deepClone(obj);
  Object.keys(newObj).forEach((key2) => predicate(newObj[key2], key2) && delete newObj[key2]);
  return newObj;
}
const toastDefaultOptionKey = "__TOAST_OPTION__";
const defaultOptions$1 = {
  duration: 2e3,
  show: false
};
const getToastOptionKey = (selector) => {
  return selector ? `${toastDefaultOptionKey}${selector}` : toastDefaultOptionKey;
};
const toastIcon = {
  success() {
    return '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>成功</title><desc>Created with Sketch.</desc><defs><filter x="-63.2%" y="-80.0%" width="226.3%" height="260.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122733141   0 0 0 0 0.710852582   0 0 0 0 0.514812768  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="3.4176226" y="5.81442199" width="3" height="8.5" rx="1.5"></rect><linearGradient x1="50%" y1="0.126649064%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#ACFFBD" stop-opacity="0.208123907" offset="0%"></stop><stop stop-color="#10B87C" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-388.000000, -538.000000)"><g id="成功" transform="translate(388.000000, 538.000000)"><circle id="Oval" fill="#34D19D" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#34D19D" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(11.500000, 14.000000)"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use id="Rectangle-Copy-24" fill="#C4FFEB" transform="translate(4.917623, 10.064422) rotate(-45.000000) translate(-4.917623, -10.064422) " xlink:href="#path-2"></use><rect id="Rectangle" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(6.215869, 11.372277) rotate(-45.000000) translate(-6.215869, -11.372277) " x="4.71586891" y="9.52269089" width="3" height="3.69917136"></rect><rect id="Rectangle" fill="#FFFFFF" transform="translate(11.636236, 7.232744) scale(1, -1) rotate(-45.000000) translate(-11.636236, -7.232744) " x="10.1362361" y="-1.02185365" width="3" height="16.5091951" rx="1.5"></rect></g></g></g></g></svg>';
  },
  warning() {
    return '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>警告</title><desc>Created with Sketch.</desc> <defs> <filter x="-240.0%" y="-60.0%" width="580.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.824756567   0 0 0 0 0.450356612   0 0 0 0 0.168550194  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-580.000000, -538.000000)"> <g id="警告" transform="translate(580.000000, 538.000000)"><circle id="Oval" fill="#F0883A" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#F0883A" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 10.800000)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(2.492935, 7.171583) scale(1, -1) rotate(-360.000000) translate(-2.492935, -7.171583) " x="0.992934699" y="0.955464537" width="3" height="12.4322365" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#FFDEC5" transform="translate(2.508751, 17.202636) scale(1, -1) rotate(-360.000000) translate(-2.508751, -17.202636) " x="1.00875134" y="15.200563" width="3" height="4.00414639" rx="1.5"></rect></g></g></g></g></svg>';
  },
  info() {
    return '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>常规</title><desc>Created with Sketch.</desc><defs><filter x="-300.0%" y="-57.1%" width="700.0%" height="214.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.362700096   0 0 0 0 0.409035039   0 0 0 0 0.520238904  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-772.000000, -538.000000)"><g id="常规" transform="translate(772.000000, 538.000000)"><circle id="Oval" fill="#909CB7" opacity="0.4" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#909CB7" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 9.800000)"><g id="编组-2" transform="translate(2.492935, 10.204709) rotate(-180.000000) translate(-2.492935, -10.204709) translate(0.992935, 0.204709)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(1.500000, 7.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -7.000000) " x="0" y="0" width="3" height="14" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#EEEEEE" transform="translate(1.500000, 18.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -18.000000) " x="0" y="16" width="3" height="4" rx="1.5"></rect></g></g></g></g></g></svg>';
  },
  error() {
    return '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>toast</title><desc>Created with Sketch.</desc><defs><linearGradient x1="99.6229896%" y1="50.3770104%" x2="0.377010363%" y2="50.3770104%" id="linearGradient-1"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient><linearGradient x1="0.377010363%" y1="50.3770104%" x2="99.6229896%" y2="50.3770104%" id="linearGradient-2"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-196.000000, -538.000000)"> <g id="toast" transform="translate(196.000000, 538.000000)"><circle id="Oval" fill="#FA4350" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#FA4350" opacity="0.900000036" cx="21" cy="21" r="16"></circle><rect id="矩形" fill="#FFDFDF" transform="translate(21.071068, 21.071068) rotate(-225.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect><rect id="矩形" fill="url(#linearGradient-1)" transform="translate(19.303301, 22.838835) rotate(-225.000000) translate(-19.303301, -22.838835) " x="17.3033009" y="21.3388348" width="4" height="3"></rect><rect id="矩形" fill="url(#linearGradient-2)" transform="translate(22.838835, 19.303301) rotate(-225.000000) translate(-22.838835, -19.303301) " x="20.8388348" y="17.8033009" width="4" height="3"></rect><rect id="矩形" fill="#FFFFFF" transform="translate(21.071068, 21.071068) rotate(-315.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect></g></g></g></svg>';
  }
};
const toastProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 选择器
   * @type {string}
   * @default ''
   */
  selector: makeStringProp(""),
  /**
   * 提示信息
   * @type {string}
   * @default ''
   */
  msg: {
    type: String,
    default: ""
  },
  /**
   * 排列方向
   * @type {'vertical' | 'horizontal'}
   * @default 'horizontal'
   */
  direction: makeStringProp("horizontal"),
  /**
   * 图标名称
   * @type {'success' | 'error' | 'warning' | 'loading' | 'info'}
   * @default ''
   */
  iconName: {
    type: String,
    default: ""
  },
  /**
   * 图标大小
   * @type {number}
   */
  iconSize: Number,
  /**
   * 加载类型
   * @type {'outline' | 'ring'}
   * @default 'outline'
   */
  loadingType: makeStringProp("outline"),
  /**
   * 加载颜色
   * @type {string}
   * @default '#4D80F0'
   */
  loadingColor: {
    type: String,
    default: "#4D80F0"
  },
  /**
   * 加载大小
   * @type {number}
   */
  loadingSize: Number,
  /**
   * 图标颜色
   * @type {string}
   */
  iconColor: String,
  /**
   * 位置
   * @type {'top' | 'middle-top' | 'middle' | 'bottom'}
   * @default 'middle-top'
   */
  position: makeStringProp("middle-top"),
  /**
   * 层级
   * @type {number}
   * @default 100
   */
  zIndex: {
    type: Number,
    default: 100
  },
  /**
   * 是否存在遮罩层
   * @type {boolean}
   * @default false
   */
  cover: {
    type: Boolean,
    default: false
  },
  /**
   * 图标类名
   * @type {string}
   * @default ''
   */
  iconClass: {
    type: String,
    default: ""
  },
  /**
   * 类名前缀
   * @type {string}
   * @default 'wd-icon'
   */
  classPrefix: {
    type: String,
    default: "wd-icon"
  },
  /**
   * 完全展示后的回调函数
   * @type {Function}
   */
  opened: Function,
  /**
   * 完全关闭时的回调函数
   * @type {Function}
   */
  closed: Function
});
const messageBoxProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 指定唯一标识
   */
  selector: makeStringProp(""),
  /**
   * 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal)
   */
  rootPortal: makeBooleanProp(false)
});
const messageDefaultOptionKey = "__MESSAGE_OPTION__";
const defaultOptions = {
  title: "",
  showCancelButton: false,
  show: false,
  closeOnClickModal: true,
  msg: "",
  type: "alert",
  inputType: "text",
  inputValue: "",
  showErr: false,
  zIndex: 99,
  lazyRender: true,
  inputError: ""
};
const getMessageDefaultOptionKey = (selector) => {
  return selector ? `${messageDefaultOptionKey}${selector}` : messageDefaultOptionKey;
};
const zhCN = {
  calendar: {
    placeholder: "请选择",
    title: "选择日期",
    day: "日",
    week: "周",
    month: "月",
    confirm: "确定",
    startTime: "开始时间",
    endTime: "结束时间",
    to: "至",
    timeFormat: "YY年MM月DD日 HH:mm:ss",
    dateFormat: "YYYY年MM月DD日",
    weekFormat: (year, week) => `${year} 第 ${week} 周`,
    startWeek: "开始周",
    endWeek: "结束周",
    startMonth: "开始月",
    endMonth: "结束月",
    monthFormat: "YYYY年MM月"
  },
  calendarView: {
    startTime: "开始",
    endTime: "结束",
    weeks: {
      sun: "日",
      mon: "一",
      tue: "二",
      wed: "三",
      thu: "四",
      fri: "五",
      sat: "六"
    },
    rangePrompt: (maxRange) => `选择天数不能超过${maxRange}天`,
    rangePromptWeek: (maxRange) => `选择周数不能超过${maxRange}周`,
    rangePromptMonth: (maxRange) => `选择月份不能超过${maxRange}个月`,
    monthTitle: "YYYY年M月",
    yearTitle: "YYYY年",
    month: "M月",
    hour: (value) => `${value}时`,
    minute: (value) => `${value}分`,
    second: (value) => `${value}秒`
  },
  collapse: {
    expand: "展开",
    retract: "收起"
  },
  colPicker: {
    title: "请选择",
    placeholder: "请选择",
    select: "请选择"
  },
  datetimePicker: {
    start: "开始时间",
    end: "结束时间",
    to: "至",
    placeholder: "请选择",
    confirm: "完成",
    cancel: "取消"
  },
  loadmore: {
    loading: "正在努力加载中...",
    finished: "已加载完毕",
    error: "加载失败",
    retry: "点击重试"
  },
  messageBox: {
    inputPlaceholder: "请输入",
    confirm: "确定",
    cancel: "取消",
    inputNoValidate: "输入的数据不合法"
  },
  numberKeyboard: {
    confirm: "完成"
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: (value) => `当前页：${value}`,
    total: (total) => `当前数据：${total}条`,
    size: (size2) => `分页大小：${size2}`
  },
  picker: {
    cancel: "取消",
    done: "完成",
    placeholder: "请选择"
  },
  imgCropper: {
    confirm: "完成",
    cancel: "取消"
  },
  search: {
    search: "搜索",
    cancel: "取消"
  },
  steps: {
    wait: "未开始",
    finished: "已完成",
    process: "进行中",
    failed: "失败"
  },
  tabs: {
    all: "全部"
  },
  upload: {
    error: "上传失败"
  },
  input: {
    placeholder: "请输入..."
  },
  selectPicker: {
    title: "请选择",
    placeholder: "请选择",
    select: "请选择",
    confirm: "确认",
    filterPlaceholder: "搜索"
  },
  tag: {
    placeholder: "请输入",
    add: "新增标签"
  },
  textarea: {
    placeholder: "请输入..."
  },
  tableCol: {
    indexLabel: "序号"
  },
  signature: {
    confirmText: "确认",
    clearText: "清空",
    revokeText: "撤销",
    restoreText: "恢复"
  }
};
const lang = ref("zh-CN");
const messages = reactive({
  "zh-CN": zhCN
});
const Locale = {
  messages() {
    return messages[lang.value];
  },
  use(newLang, newMessage) {
    lang.value = newLang;
    if (newMessage) {
      this.add({ [newLang]: newMessage });
    }
  },
  add(newMessages = {}) {
    deepAssign(messages, newMessages);
  }
};
const useTranslate = (name) => {
  const prefix = name ? camelCase(name) + "." : "";
  const translate2 = (key2, ...args) => {
    const currentMessages = Locale.messages();
    const message = getPropByPath(currentMessages, prefix + key2);
    return isFunction(message) ? message(...args) : isDef(message) ? message : `${prefix}${key2}`;
  };
  return { translate: translate2 };
};
const configProviderProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 主题风格，设置为 dark 来开启深色模式，全局生效
   */
  theme: makeStringProp("light"),
  /**
   * 自定义主题变量
   */
  themeVars: {
    type: Object,
    default: () => ({})
  }
});
const iconProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 使用的图标名字，可以使用链接图片
   */
  name: makeRequiredProp(String),
  /**
   * 图标的颜色
   */
  color: String,
  /**
   * 图标的字体大小
   */
  size: numericProp,
  /**
   * 类名前缀，用于使用自定义图标
   */
  classPrefix: makeStringProp("wd-icon")
});
const loadingProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 加载指示器类型，可选值：'outline' | 'ring'
   */
  type: makeStringProp("ring"),
  /**
   * 设置加载指示器颜色
   */
  color: makeStringProp("#4D80F0"),
  /**
   * 设置加载指示器大小
   */
  size: makeNumericProp("")
});
const overlayProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 是否展示遮罩层
   */
  show: makeBooleanProp(false),
  /**
   * 动画时长，单位毫秒
   */
  duration: {
    type: [Object, Number, Boolean],
    default: 300
  },
  /**
   * 是否锁定滚动
   */
  lockScroll: makeBooleanProp(true),
  /**
   * 层级
   */
  zIndex: makeNumberProp(10)
});
const transitionProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 是否展示组件
   * 类型：boolean
   * 默认值：false
   */
  show: makeBooleanProp(false),
  /**
   * 动画执行时间
   * 类型：number | boolean | Record<string, number>
   * 默认值：300 (毫秒)
   */
  duration: {
    type: [Object, Number, Boolean],
    default: 300
  },
  /**
   * 弹层内容懒渲染，触发展示时才渲染内容
   * 类型：boolean
   * 默认值：false
   */
  lazyRender: makeBooleanProp(false),
  /**
   * 动画类型
   * 类型：string
   * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
   * 默认值：'fade'
   */
  name: [String, Array],
  /**
   * 是否在动画结束时销毁子节点（display: none)
   * 类型：boolean
   * 默认值：false
   */
  destroy: makeBooleanProp(true),
  /**
   * 进入过渡的开始状态
   * 类型：string
   */
  enterClass: makeStringProp(""),
  /**
   * 进入过渡的激活状态
   * 类型：string
   */
  enterActiveClass: makeStringProp(""),
  /**
   * 进入过渡的结束状态
   * 类型：string
   */
  enterToClass: makeStringProp(""),
  /**
   * 离开过渡的开始状态
   * 类型：string
   */
  leaveClass: makeStringProp(""),
  /**
   * 离开过渡的激活状态
   * 类型：string
   */
  leaveActiveClass: makeStringProp(""),
  /**
   * 离开过渡的结束状态
   * 类型：string
   */
  leaveToClass: makeStringProp(""),
  /**
   * 是否阻止触摸滚动
   * 类型：boolean
   * 默认值：false
   */
  disableTouchMove: makeBooleanProp(false)
});
const popupProps = __spreadProps(__spreadValues({}, baseProps), {
  /**
   * 动画类型，参见 wd-transition 组件的name
   * 类型：string
   * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
   */
  transition: String,
  /**
   * 关闭按钮
   * 类型：boolean
   * 默认值：false
   */
  closable: makeBooleanProp(false),
  /**
   * 弹出框的位置
   * 类型：string
   * 默认值：center
   * 可选值：center / top / right / bottom / left
   */
  position: makeStringProp("center"),
  /**
   * 点击遮罩是否关闭
   * 类型：boolean
   * 默认值：true
   */
  closeOnClickModal: makeBooleanProp(true),
  /**
   * 动画持续时间
   * 类型：number | boolean
   * 默认值：300
   */
  duration: {
    type: [Number, Boolean],
    default: 300
  },
  /**
   * 是否显示遮罩
   * 类型：boolean
   * 默认值：true
   */
  modal: makeBooleanProp(true),
  /**
   * 设置层级
   * 类型：number
   * 默认值：10
   */
  zIndex: makeNumberProp(10),
  /**
   * 是否当关闭时将弹出层隐藏（display: none)
   * 类型：boolean
   * 默认值：true
   */
  hideWhenClose: makeBooleanProp(true),
  /**
   * 遮罩样式
   * 类型：string
   * 默认值：''
   */
  modalStyle: makeStringProp(""),
  /**
   * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
   * 类型：boolean
   * 默认值：false
   */
  safeAreaInsetBottom: makeBooleanProp(false),
  /**
   * 弹出层是否显示
   */
  modelValue: makeBooleanProp(false),
  /**
   * 弹层内容懒渲染，触发展示时才渲染内容
   * 类型：boolean
   * 默认值：true
   */
  lazyRender: makeBooleanProp(true),
  /**
   * 是否锁定滚动
   * 类型：boolean
   * 默认值：true
   */
  lockScroll: makeBooleanProp(true),
  /**
   * 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal)
   * 类型：boolean
   * 默认值：false
   */
  rootPortal: makeBooleanProp(false)
});
function useParent(key2) {
  const parent = inject(key2, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    onUnmounted(() => unlink(instance));
    const index2 = computed(() => internalChildren.indexOf(instance));
    return {
      parent,
      index: index2
    };
  }
  return {
    parent: null,
    index: ref(-1)
  };
}
const CELL_GROUP_KEY = Symbol("wd-cell-group");
function useCell() {
  const { parent: cellGroup, index: index2 } = useParent(CELL_GROUP_KEY);
  const border = computed(() => {
    return cellGroup && cellGroup.props.border && index2.value;
  });
  return { border };
}
const FORM_KEY = Symbol("wd-form");
const inputProps = __spreadProps(__spreadValues({}, baseProps), {
  customInputClass: makeStringProp(""),
  customLabelClass: makeStringProp(""),
  // 原生属性
  /**
   * 占位文本
   */
  placeholder: String,
  /**
   * 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight
   */
  placeholderStyle: String,
  /**
   * 原生属性，指定 placeholder 的样式类
   */
  placeholderClass: makeStringProp(""),
  /**
   * 原生属性，指定光标与键盘的距离。取 input 距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
   */
  cursorSpacing: makeNumberProp(0),
  /**
   * 原生属性，指定focus时的光标位置
   */
  cursor: makeNumberProp(-1),
  /**
   * 原生属性，光标起始位置，自动聚集时有效，需与selection-end搭配使用
   */
  selectionStart: makeNumberProp(-1),
  /**
   * 原生属性，光标结束位置，自动聚集时有效，需与selection-start搭配使用
   */
  selectionEnd: makeNumberProp(-1),
  /**
   * 原生属性，键盘弹起时，是否自动上推页面
   */
  adjustPosition: makeBooleanProp(true),
  /**
   * focus时，点击页面的时候不收起键盘
   */
  holdKeyboard: makeBooleanProp(false),
  /**
   * 设置键盘右下角按钮的文字，仅在type='text'时生效，可选值：done / go / next / search / send
   */
  confirmType: makeStringProp("done"),
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  confirmHold: makeBooleanProp(false),
  /**
   * 原生属性，获取焦点
   */
  focus: makeBooleanProp(false),
  /**
   * 类型，可选值：text / number / digit / idcard / safe-password / nickname / tel
   */
  type: makeStringProp("text"),
  /**
   * 原生属性，最大长度
   */
  maxlength: {
    type: Number,
    default: -1
  },
  /**
   * 原生属性，禁用
   */
  disabled: makeBooleanProp(false),
  /**
   * 微信小程序原生属性，强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   */
  alwaysEmbed: makeBooleanProp(false),
  // 原生属性结束
  /**
   * 输入框的值靠右展示
   */
  alignRight: makeBooleanProp(false),
  /**
   * 绑定值
   */
  modelValue: makeNumericProp(""),
  /**
   * 显示为密码框
   */
  showPassword: makeBooleanProp(false),
  /**
   * 显示清空按钮
   */
  clearable: makeBooleanProp(false),
  /**
   * 只读
   */
  readonly: makeBooleanProp(false),
  /**
   * 前置图标，icon组件中的图标类名
   */
  prefixIcon: String,
  /**
   * 后置图标，icon组件中的图标类名
   */
  suffixIcon: String,
  /**
   * 显示字数限制，需要同时设置 maxlength
   */
  showWordLimit: makeBooleanProp(false),
  /**
   * 设置左侧标题
   */
  label: String,
  /**
   * 设置左侧标题宽度
   */
  labelWidth: makeStringProp(""),
  /**
   * 设置输入框大小，可选值：large
   */
  size: String,
  /**
   * 设置输入框错误状态，错误状态时为红色
   */
  error: makeBooleanProp(false),
  /**
   * 当有label属性时，设置标题和输入框垂直居中，默认为顶部居中
   */
  center: makeBooleanProp(false),
  /**
   * 非 cell 类型下是否隐藏下划线
   */
  noBorder: makeBooleanProp(false),
  /**
   * 是否必填
   */
  required: makeBooleanProp(false),
  /**
   * 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的
   */
  prop: String,
  /**
   * 表单验证规则，结合wd-form组件使用
   */
  rules: makeArrayProp(),
  /**
   * 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
   * 类型: "focus" | "always"
   * 默认值: "always"
   */
  clearTrigger: makeStringProp("always"),
  /**
   * 是否在点击清除按钮时聚焦输入框
   * 类型: boolean
   * 默认值: true
   */
  focusWhenClear: makeBooleanProp(true),
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   * 类型: boolean
   * 默认值: true
   */
  ignoreCompositionEvent: makeBooleanProp(true),
  /**
   * 它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。在符合条件的高版本webview里，uni-app的web和app-vue平台中可使用本属性。
   * 类型: InputMode
   * 可选值: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | "password"
   * 默认值: "text"
   */
  inputmode: makeStringProp("text"),
  /**
   * 必填标记位置，可选值：before（标签前）、after（标签后）
   */
  markerSide: makeStringProp("before")
});
exports.AbortablePromise = AbortablePromise;
exports.AdapterUniapp = AdapterUniapp;
exports.FORM_KEY = FORM_KEY;
exports.VueQueryPlugin = VueQueryPlugin;
exports._export_sfc = _export_sfc;
exports.addUnit = addUnit;
exports.buttonProps = buttonProps;
exports.computed = computed;
exports.configProviderProps = configProviderProps;
exports.context = context;
exports.createAlova = createAlova;
exports.createI18n = createI18n;
exports.createPersistedState = createPersistedState;
exports.createPinia = createPinia;
exports.createSSRApp = createSSRApp;
exports.createServerTokenAuthentication = createServerTokenAuthentication;
exports.deepAssign = deepAssign;
exports.defaultOptions = defaultOptions$1;
exports.defaultOptions$1 = defaultOptions;
exports.defineComponent = defineComponent;
exports.defineStore = defineStore;
exports.e = e;
exports.encode = encode;
exports.f = f$1;
exports.getMessageDefaultOptionKey = getMessageDefaultOptionKey;
exports.getToastOptionKey = getToastOptionKey;
exports.gradient = gradient;
exports.iconProps = iconProps;
exports.index = index;
exports.inject = inject;
exports.inputProps = inputProps;
exports.isApp = isApp;
exports.isAppAndroid = isAppAndroid;
exports.isAppHarmony = isAppHarmony;
exports.isAppIOS = isAppIOS;
exports.isAppPlus = isAppPlus;
exports.isDef = isDef;
exports.isEqual = isEqual;
exports.isFunction = isFunction;
exports.isH5 = isH5;
exports.isMpWeixin = isMpWeixin;
exports.isObj = isObj;
exports.isPromise = isPromise;
exports.isUndefined = isUndefined;
exports.isWeb = isWeb;
exports.loadingProps = loadingProps;
exports.messageBoxProps = messageBoxProps;
exports.n = n$1;
exports.o = o$1;
exports.objToStyle = objToStyle;
exports.omitBy = omitBy;
exports.onBeforeMount = onBeforeMount;
exports.onHide = onHide;
exports.onLaunch = onLaunch;
exports.onLoad = onLoad;
exports.onReady = onReady;
exports.onShow = onShow;
exports.overlayProps = overlayProps;
exports.p = p;
exports.pause = pause;
exports.popupProps = popupProps;
exports.queryOptions = queryOptions;
exports.reactive = reactive;
exports.ref = ref;
exports.resolveComponent = resolveComponent;
exports.s = s;
exports.sr = sr;
exports.storeToRefs = storeToRefs;
exports.t = t$1;
exports.toastIcon = toastIcon;
exports.toastProps = toastProps;
exports.transitionProps = transitionProps;
exports.unref = unref;
exports.useCell = useCell;
exports.useCssVars = useCssVars;
exports.useParent = useParent;
exports.useQuery = useQuery;
exports.useRequest = useRequest;
exports.useSlots = useSlots;
exports.useTranslate = useTranslate;
exports.vue = vue;
exports.watch = watch;
