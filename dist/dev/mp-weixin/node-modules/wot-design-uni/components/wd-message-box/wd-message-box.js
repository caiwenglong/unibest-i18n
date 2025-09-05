"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  (wdInput + wdButton + wdPopup)();
}
const wdPopup = () => "../wd-popup/wd-popup.js";
const wdButton = () => "../wd-button/wd-button.js";
const wdInput = () => "../wd-input/wd-input.js";
const __default__ = {
  name: "wd-message-box",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.messageBoxProps,
  setup(__props) {
    const props = __props;
    const { translate } = common_vendor.useTranslate("message-box");
    const rootClass = common_vendor.computed(() => {
      return `wd-message-box__container ${props.customClass}`;
    });
    const bodyClass = common_vendor.computed(() => {
      return `wd-message-box__body ${!messageState.title ? "is-no-title" : ""} ${messageState.type === "prompt" ? "is-prompt" : ""}`;
    });
    const messageOptionKey = common_vendor.getMessageDefaultOptionKey(props.selector);
    const messageOption = common_vendor.inject(messageOptionKey, common_vendor.ref(common_vendor.defaultOptions$1));
    const messageState = common_vendor.reactive({
      msg: "",
      // 消息内容
      show: false,
      // 是否显示弹框
      title: "",
      // 标题
      showCancelButton: false,
      // 是否展示取消按钮
      closeOnClickModal: true,
      // 是否支持点击蒙层关闭
      confirmButtonText: "",
      // 确定按钮文案
      cancelButtonText: "",
      // 取消按钮文案
      type: "alert",
      // 弹框类型
      inputType: "text",
      // 输入框类型
      inputValue: "",
      // 输入框初始值
      inputPlaceholder: "",
      // 输入框placeholder
      inputError: "",
      // 输入框错误提示文案
      showErr: false,
      // 是否显示错误提示
      zIndex: 99,
      // 弹窗层级
      lazyRender: true
      // 弹层内容懒渲染
    });
    const customConfirmProps = common_vendor.computed(() => {
      const buttonProps = common_vendor.deepAssign(
        {
          block: true
        },
        common_vendor.isDef(messageState.confirmButtonProps) ? common_vendor.omitBy(messageState.confirmButtonProps, common_vendor.isUndefined) : {}
      );
      buttonProps.customClass = `${buttonProps.customClass || ""} wd-message-box__actions-btn`;
      return buttonProps;
    });
    const customCancelProps = common_vendor.computed(() => {
      const buttonProps = common_vendor.deepAssign(
        {
          block: true,
          type: "info"
        },
        common_vendor.isDef(messageState.cancelButtonProps) ? common_vendor.omitBy(messageState.cancelButtonProps, common_vendor.isUndefined) : {}
      );
      buttonProps.customClass = `${buttonProps.customClass || ""} wd-message-box__actions-btn`;
      return buttonProps;
    });
    common_vendor.watch(
      () => messageOption.value,
      (newVal) => {
        reset(newVal);
      },
      {
        deep: true,
        immediate: true
      }
    );
    common_vendor.watch(
      () => messageState.show,
      (newValue) => {
        resetErr(!!newValue);
      },
      {
        deep: true,
        immediate: true
      }
    );
    function toggleModal(action) {
      if (action === "modal" && !messageState.closeOnClickModal) {
        return;
      }
      if (messageState.type === "prompt" && action === "confirm" && !validate()) {
        return;
      }
      switch (action) {
        case "confirm":
          if (messageState.beforeConfirm) {
            messageState.beforeConfirm({
              resolve: (isPass) => {
                if (isPass) {
                  handleConfirm({
                    action,
                    value: messageState.inputValue
                  });
                }
              }
            });
          } else {
            handleConfirm({
              action,
              value: messageState.inputValue
            });
          }
          break;
        case "cancel":
          handleCancel({
            action
          });
          break;
        default:
          handleCancel({
            action: "modal"
          });
          break;
      }
    }
    function handleConfirm(result) {
      messageState.show = false;
      if (common_vendor.isFunction(messageState.success)) {
        messageState.success(result);
      }
    }
    function handleCancel(result) {
      messageState.show = false;
      if (common_vendor.isFunction(messageState.fail)) {
        messageState.fail(result);
      }
    }
    function validate() {
      if (messageState.inputPattern && !messageState.inputPattern.test(String(messageState.inputValue))) {
        messageState.showErr = true;
        return false;
      }
      if (typeof messageState.inputValidate === "function") {
        const validateResult = messageState.inputValidate(messageState.inputValue);
        if (!validateResult) {
          messageState.showErr = true;
          return false;
        }
      }
      messageState.showErr = false;
      return true;
    }
    function resetErr(val) {
      if (val === false) {
        messageState.showErr = false;
      }
    }
    function inputValChange({ value }) {
      if (value === "") {
        messageState.showErr = false;
        return;
      }
      messageState.inputValue = value;
    }
    function reset(option) {
      if (option) {
        messageState.title = common_vendor.isDef(option.title) ? option.title : "";
        messageState.showCancelButton = common_vendor.isDef(option.showCancelButton) ? option.showCancelButton : false;
        messageState.show = option.show;
        messageState.closeOnClickModal = option.closeOnClickModal;
        messageState.confirmButtonText = option.confirmButtonText;
        messageState.cancelButtonText = option.cancelButtonText;
        messageState.msg = option.msg;
        messageState.type = option.type;
        messageState.inputType = option.inputType;
        messageState.inputSize = option.inputSize;
        messageState.inputValue = option.inputValue;
        messageState.inputPlaceholder = option.inputPlaceholder;
        messageState.inputPattern = option.inputPattern;
        messageState.inputValidate = option.inputValidate;
        messageState.success = option.success;
        messageState.fail = option.fail;
        messageState.beforeConfirm = option.beforeConfirm;
        messageState.inputError = option.inputError;
        messageState.showErr = option.showErr;
        messageState.zIndex = option.zIndex;
        messageState.lazyRender = option.lazyRender;
        messageState.confirmButtonProps = option.confirmButtonProps;
        messageState.cancelButtonProps = option.cancelButtonProps;
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: messageState.title
      }, messageState.title ? {
        b: common_vendor.t(messageState.title)
      } : {}, {
        c: messageState.type === "prompt"
      }, messageState.type === "prompt" ? common_vendor.e({
        d: common_vendor.o(inputValChange),
        e: common_vendor.o(($event) => messageState.inputValue = $event),
        f: common_vendor.p({
          type: messageState.inputType,
          size: messageState.inputSize,
          placeholder: messageState.inputPlaceholder,
          modelValue: messageState.inputValue
        }),
        g: messageState.showErr
      }, messageState.showErr ? {
        h: common_vendor.t(messageState.inputError || common_vendor.unref(translate)("inputNoValidate"))
      } : {}) : {}, {
        i: common_vendor.t(messageState.msg),
        j: common_vendor.n(bodyClass.value),
        k: messageState.showCancelButton
      }, messageState.showCancelButton ? {
        l: common_vendor.t(messageState.cancelButtonText || common_vendor.unref(translate)("cancel")),
        m: common_vendor.o(($event) => toggleModal("cancel")),
        n: common_vendor.p(__spreadValues({}, customCancelProps.value))
      } : {}, {
        o: common_vendor.t(messageState.confirmButtonText || common_vendor.unref(translate)("confirm")),
        p: common_vendor.o(($event) => toggleModal("confirm")),
        q: common_vendor.p(__spreadValues({}, customConfirmProps.value)),
        r: common_vendor.n(`wd-message-box__actions ${messageState.showCancelButton ? "wd-message-box__flex" : "wd-message-box__block"}`),
        s: common_vendor.n(rootClass.value),
        t: common_vendor.o(($event) => toggleModal("modal")),
        v: common_vendor.o(($event) => messageState.show = $event),
        w: common_vendor.p({
          transition: "zoom-in",
          ["close-on-click-modal"]: messageState.closeOnClickModal,
          ["lazy-render"]: messageState.lazyRender,
          ["custom-class"]: "wd-message-box",
          ["z-index"]: messageState.zIndex,
          duration: 200,
          ["root-portal"]: _ctx.rootPortal,
          modelValue: messageState.show
        })
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6a12ec76"]]);
wx.createComponent(Component);
