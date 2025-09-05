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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  wdIcon();
}
const wdIcon = () => "../wd-icon/wd-icon.js";
const __default__ = {
  name: "wd-input",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.inputProps,
  emits: [
    "update:modelValue",
    "clear",
    "blur",
    "focus",
    "input",
    "keyboardheightchange",
    "confirm",
    "clicksuffixicon",
    "clickprefixicon",
    "click"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = common_vendor.useSlots();
    const { translate } = common_vendor.useTranslate("input");
    const isPwdVisible = common_vendor.ref(false);
    const clearing = common_vendor.ref(false);
    const focused = common_vendor.ref(false);
    const focusing = common_vendor.ref(false);
    const inputValue = common_vendor.ref(getInitValue());
    const cell = common_vendor.useCell();
    common_vendor.watch(
      () => props.focus,
      (newValue) => {
        focused.value = newValue;
      },
      { immediate: true, deep: true }
    );
    common_vendor.watch(
      () => props.modelValue,
      (newValue) => {
        inputValue.value = common_vendor.isDef(newValue) ? String(newValue) : "";
      }
    );
    const { parent: form } = common_vendor.useParent(common_vendor.FORM_KEY);
    const placeholderValue = common_vendor.computed(() => {
      return common_vendor.isDef(props.placeholder) ? props.placeholder : translate("placeholder");
    });
    const showClear = common_vendor.computed(() => {
      const { disabled, readonly, clearable, clearTrigger } = props;
      if (clearable && !readonly && !disabled && inputValue.value && (clearTrigger === "always" || props.clearTrigger === "focus" && focusing.value)) {
        return true;
      } else {
        return false;
      }
    });
    const showWordCount = common_vendor.computed(() => {
      const { disabled, readonly, maxlength, showWordLimit } = props;
      return Boolean(!disabled && !readonly && common_vendor.isDef(maxlength) && maxlength > -1 && showWordLimit);
    });
    const errorMessage = common_vendor.computed(() => {
      if (form && props.prop && form.errorMessages && form.errorMessages[props.prop]) {
        return form.errorMessages[props.prop];
      } else {
        return "";
      }
    });
    const isRequired = common_vendor.computed(() => {
      let formRequired = false;
      if (form && form.props.rules) {
        const rules = form.props.rules;
        for (const key in rules) {
          if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
            formRequired = rules[key].some((rule) => rule.required);
          }
        }
      }
      return props.required || props.rules.some((rule) => rule.required) || formRequired;
    });
    const rootClass = common_vendor.computed(() => {
      return `wd-input  ${props.label || slots.label ? "is-cell" : ""} ${props.center ? "is-center" : ""} ${cell.border.value ? "is-border" : ""} ${props.size ? "is-" + props.size : ""} ${props.error ? "is-error" : ""} ${props.disabled ? "is-disabled" : ""}  ${inputValue.value && String(inputValue.value).length > 0 ? "is-not-empty" : ""}  ${props.noBorder ? "is-no-border" : ""} ${props.customClass}`;
    });
    const labelClass = common_vendor.computed(() => {
      return `wd-input__label ${props.customLabelClass}`;
    });
    const inputPlaceholderClass = common_vendor.computed(() => {
      return `wd-input__placeholder  ${props.placeholderClass}`;
    });
    const labelStyle = common_vendor.computed(() => {
      return props.labelWidth ? common_vendor.objToStyle({
        "min-width": props.labelWidth,
        "max-width": props.labelWidth
      }) : "";
    });
    function getInitValue() {
      const formatted = formatValue(props.modelValue);
      if (!isValueEqual(formatted, props.modelValue)) {
        emit("update:modelValue", formatted);
      }
      return formatted;
    }
    function formatValue(value) {
      const { maxlength } = props;
      if (common_vendor.isDef(maxlength) && maxlength !== -1 && String(value).length > maxlength) {
        return value.toString().slice(0, maxlength);
      }
      return value;
    }
    function togglePwdVisible() {
      isPwdVisible.value = !isPwdVisible.value;
    }
    function handleClear() {
      return __async(this, null, function* () {
        focusing.value = false;
        inputValue.value = "";
        if (props.focusWhenClear) {
          clearing.value = true;
          focused.value = false;
        }
        yield common_vendor.pause();
        if (props.focusWhenClear) {
          focused.value = true;
          focusing.value = true;
        }
        emit("update:modelValue", inputValue.value);
        emit("clear");
      });
    }
    function handleBlur() {
      return __async(this, null, function* () {
        yield common_vendor.pause(150);
        if (clearing.value) {
          clearing.value = false;
          return;
        }
        focusing.value = false;
        emit("blur", {
          value: inputValue.value
        });
      });
    }
    function handleFocus({ detail }) {
      focusing.value = true;
      emit("focus", detail);
    }
    function handleInput({ detail }) {
      emit("update:modelValue", inputValue.value);
      emit("input", detail);
    }
    function handleKeyboardheightchange({ detail }) {
      emit("keyboardheightchange", detail);
    }
    function handleConfirm({ detail }) {
      emit("confirm", detail);
    }
    function onClickSuffixIcon() {
      emit("clicksuffixicon");
    }
    function onClickPrefixIcon() {
      emit("clickprefixicon");
    }
    function handleClick(event) {
      emit("click", event);
    }
    function isValueEqual(value1, value2) {
      return common_vendor.isEqual(String(value1), String(value2));
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.label || _ctx.$slots.label
      }, _ctx.label || _ctx.$slots.label ? common_vendor.e({
        b: isRequired.value && _ctx.markerSide === "before"
      }, isRequired.value && _ctx.markerSide === "before" ? {} : {}, {
        c: _ctx.prefixIcon || _ctx.$slots.prefix
      }, _ctx.prefixIcon || _ctx.$slots.prefix ? common_vendor.e({
        d: _ctx.prefixIcon && !_ctx.$slots.prefix
      }, _ctx.prefixIcon && !_ctx.$slots.prefix ? {
        e: common_vendor.o(onClickPrefixIcon),
        f: common_vendor.p({
          ["custom-class"]: "wd-input__icon",
          name: _ctx.prefixIcon
        })
      } : {}) : {}, {
        g: _ctx.label && !_ctx.$slots.label
      }, _ctx.label && !_ctx.$slots.label ? {
        h: common_vendor.t(_ctx.label)
      } : _ctx.$slots.label ? {} : {}, {
        i: _ctx.$slots.label,
        j: isRequired.value && _ctx.markerSide === "after"
      }, isRequired.value && _ctx.markerSide === "after" ? {} : {}, {
        k: common_vendor.n(labelClass.value),
        l: common_vendor.s(labelStyle.value)
      }) : {}, {
        m: (_ctx.prefixIcon || _ctx.$slots.prefix) && !_ctx.label
      }, (_ctx.prefixIcon || _ctx.$slots.prefix) && !_ctx.label ? common_vendor.e({
        n: _ctx.prefixIcon && !_ctx.$slots.prefix
      }, _ctx.prefixIcon && !_ctx.$slots.prefix ? {
        o: common_vendor.o(onClickPrefixIcon),
        p: common_vendor.p({
          ["custom-class"]: "wd-input__icon",
          name: _ctx.prefixIcon
        })
      } : {}) : {}, {
        q: common_vendor.n(_ctx.prefixIcon ? "wd-input__inner--prefix" : ""),
        r: common_vendor.n(showWordCount.value ? "wd-input__inner--count" : ""),
        s: common_vendor.n(_ctx.alignRight ? "is-align-right" : ""),
        t: common_vendor.n(_ctx.customInputClass),
        v: _ctx.type,
        w: _ctx.showPassword && !isPwdVisible.value,
        x: placeholderValue.value,
        y: _ctx.disabled || _ctx.readonly,
        z: _ctx.maxlength,
        A: focused.value,
        B: _ctx.confirmType,
        C: _ctx.confirmHold,
        D: _ctx.cursor,
        E: _ctx.cursorSpacing,
        F: _ctx.placeholderStyle,
        G: _ctx.selectionStart,
        H: _ctx.selectionEnd,
        I: _ctx.adjustPosition,
        J: _ctx.holdKeyboard,
        K: _ctx.alwaysEmbed,
        L: inputPlaceholderClass.value,
        M: _ctx.ignoreCompositionEvent,
        N: _ctx.inputmode,
        O: common_vendor.o([($event) => inputValue.value = $event.detail.value, handleInput]),
        P: common_vendor.o(handleFocus),
        Q: common_vendor.o(handleBlur),
        R: common_vendor.o(handleConfirm),
        S: common_vendor.o(handleKeyboardheightchange),
        T: inputValue.value,
        U: props.readonly
      }, props.readonly ? {} : {}, {
        V: showClear.value || _ctx.showPassword || _ctx.suffixIcon || showWordCount.value || _ctx.$slots.suffix
      }, showClear.value || _ctx.showPassword || _ctx.suffixIcon || showWordCount.value || _ctx.$slots.suffix ? common_vendor.e({
        W: showClear.value
      }, showClear.value ? {
        X: common_vendor.o(handleClear),
        Y: common_vendor.p({
          ["custom-class"]: "wd-input__clear",
          name: "error-fill"
        })
      } : {}, {
        Z: _ctx.showPassword
      }, _ctx.showPassword ? {
        aa: common_vendor.o(togglePwdVisible),
        ab: common_vendor.p({
          ["custom-class"]: "wd-input__icon",
          name: isPwdVisible.value ? "view" : "eye-close"
        })
      } : {}, {
        ac: showWordCount.value
      }, showWordCount.value ? {
        ad: common_vendor.t(String(inputValue.value).length),
        ae: common_vendor.n(inputValue.value && String(inputValue.value).length > 0 ? "wd-input__count-current" : ""),
        af: common_vendor.n(String(inputValue.value).length > _ctx.maxlength ? "is-error" : ""),
        ag: common_vendor.t(_ctx.maxlength)
      } : {}, {
        ah: _ctx.suffixIcon && !_ctx.$slots.suffix
      }, _ctx.suffixIcon && !_ctx.$slots.suffix ? {
        ai: common_vendor.o(onClickSuffixIcon),
        aj: common_vendor.p({
          ["custom-class"]: "wd-input__icon",
          name: _ctx.suffixIcon
        })
      } : {}) : {}, {
        ak: errorMessage.value
      }, errorMessage.value ? {
        al: common_vendor.t(errorMessage.value)
      } : {}, {
        am: common_vendor.n(rootClass.value),
        an: common_vendor.s(_ctx.customStyle),
        ao: common_vendor.o(handleClick)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7397cfb5"]]);
wx.createComponent(Component);
