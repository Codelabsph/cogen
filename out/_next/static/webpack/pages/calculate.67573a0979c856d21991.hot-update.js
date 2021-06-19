webpackHotUpdate_N_E("pages/calculate",{

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_63956_cogenweb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_footer_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/footer-icon.svg */ "./public/assets/footer-icon.svg");
/* harmony import */ var public_assets_fb_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/assets/fb-icon.svg */ "./public/assets/fb-icon.svg");
/* harmony import */ var public_assets_link_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/assets/link-icon.svg */ "./public/assets/link-icon.svg");
/* harmony import */ var src_components_inputWithButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/inputWithButton */ "./src/components/inputWithButton/index.js");
/* harmony import */ var src_helpers_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/helpers/api.service */ "./src/helpers/api.service.js");
/* harmony import */ var src_components_loaderSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/loaderSpinner */ "./src/components/loaderSpinner/index.js");
/* harmony import */ var src_components_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/toast */ "./src/components/toast/index.js");
/* harmony import */ var src_helpers_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/helpers/utils.service */ "./src/helpers/utils.service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_components_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/section */ "./src/components/section/index.js");



var _jsxFileName = "C:\\Users\\63956\\cogenweb\\src\\components\\footer\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_63956_cogenweb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Footer = function Footer() {
  _s();

  var defaultValue = {
    email: ""
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var handleOnChange = function handleOnChange(e) {
    var _e$target, _e$target2;

    var name = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.name;
    var value = e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value;
    setData(_objectSpread(_objectSpread({}, data), {}, Object(C_Users_63956_cogenweb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
  };

  var handleSave = function handleSave() {
    if (!(data !== null && data !== void 0 && data.email)) return src_components_toast__WEBPACK_IMPORTED_MODULE_9__["toast"].error("Please enter your email");
    if (!Object(src_helpers_utils_service__WEBPACK_IMPORTED_MODULE_10__["isEmail"])(data === null || data === void 0 ? void 0 : data.email)) return src_components_toast__WEBPACK_IMPORTED_MODULE_9__["toast"].error("Please enter your valid email");else {
      setLoading(true);
      Object(src_helpers_api_service__WEBPACK_IMPORTED_MODULE_7__["postContacts"])(data).then(function () {
        src_components_toast__WEBPACK_IMPORTED_MODULE_9__["toast"].success("Successfully sent your contact details");
        setLoading(false);
        setData(defaultValue);
      })["catch"](function (err) {
        src_components_toast__WEBPACK_IMPORTED_MODULE_9__["toast"].error(Object(src_helpers_utils_service__WEBPACK_IMPORTED_MODULE_10__["listErrors"])(err));
        setLoading(false);
      });
    }
  };

  var FooterLink = function FooterLink(_ref) {
    var linkLabel = _ref.linkLabel,
        to = _ref.to;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: to || "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700 cursor-pointer",
        children: linkLabel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "bg-black w-full mx-auto sm:px-8 lg:px-16 xl:px-40 2xl:px-56",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_section__WEBPACK_IMPORTED_MODULE_12__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " text-gray-800 py-10 flex flex-wrap justify-left xxs:flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "py-5 w-1/2 sm:w-4/12 md:w-1/4 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_footer_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            href: "#",
            className: "mt-10 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700",
            children: "Copyright \xA9 2020 Landify UI Kit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            href: "#",
            className: "mt-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700",
            children: "All rights reserved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center mt-6 space-x-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_fb_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_link_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " text-white text-xl mb-6 font-bold font-poppins",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Who we are"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "How to save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Just for You"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Property"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " uppercase text-white text-xl mb-6 font-bold",
            children: "Co-own"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: " Get Started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " uppercase text-white mb-6 font-bold",
            children: "Stay up to date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_loaderSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
            width: 20,
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_inputWithButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            placeholder: "Your Email Address",
            name: "email",
            value: data === null || data === void 0 ? void 0 : data.email,
            onChange: handleOnChange,
            onClick: function onClick() {
              return handleSave();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
              linkLabel: "Contact Us",
              to: "/contactUs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(Footer, "aJNtp08qVDz0yYO33tcPNBk3r6s=");

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsImRlZmF1bHRWYWx1ZSIsImVtYWlsIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2F2ZSIsInRvYXN0IiwiZXJyb3IiLCJpc0VtYWlsIiwicG9zdENvbnRhY3RzIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnIiLCJsaXN0RXJyb3JzIiwiRm9vdGVyTGluayIsImxpbmtMYWJlbCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQUssRUFBRTtBQURZLEdBQXJCOztBQURtQixrQkFLS0Msc0RBQVEsQ0FBQ0YsWUFBRCxDQUxiO0FBQUEsTUFLWkcsSUFMWTtBQUFBLE1BS05DLE9BTE07O0FBQUEsbUJBTVdGLHNEQUFRLENBQUMsS0FBRCxDQU5uQjtBQUFBLE1BTVpHLE9BTlk7QUFBQSxNQU1IQyxVQU5HOztBQVFuQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUFBOztBQUM1QixRQUFNQyxJQUFJLEdBQUdELENBQUgsYUFBR0EsQ0FBSCxvQ0FBR0EsQ0FBQyxDQUFFRSxNQUFOLDhDQUFHLFVBQVdELElBQXhCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHSCxDQUFILGFBQUdBLENBQUgscUNBQUdBLENBQUMsQ0FBRUUsTUFBTiwrQ0FBRyxXQUFXQyxLQUF6QjtBQUNBUCxXQUFPLGlDQUNG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QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQW9FRCxDQWxIRDs7R0FBTWIsTTs7S0FBQUEsTTtBQW9IU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRlLjY3NTczYTA5NzljODU2ZDIxOTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3Rlckljb24gZnJvbSBcInB1YmxpYy9hc3NldHMvZm9vdGVyLWljb24uc3ZnXCI7XHJcbmltcG9ydCBGYkljb24gZnJvbSBcInB1YmxpYy9hc3NldHMvZmItaWNvbi5zdmdcIjtcclxuaW1wb3J0IExpbmtJY29uIGZyb20gXCJwdWJsaWMvYXNzZXRzL2xpbmstaWNvbi5zdmdcIjtcclxuaW1wb3J0IElucHV0V2l0aEJ1dHRvbiBmcm9tIFwic3JjL2NvbXBvbmVudHMvaW5wdXRXaXRoQnV0dG9uXCI7XHJcbmltcG9ydCB7IHBvc3RDb250YWN0cyB9IGZyb20gXCJzcmMvaGVscGVycy9hcGkuc2VydmljZVwiO1xyXG5pbXBvcnQgTG9hZGVyU3Bpbm5lciBmcm9tIFwic3JjL2NvbXBvbmVudHMvbG9hZGVyU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzcmMvY29tcG9uZW50cy90b2FzdFwiO1xyXG5pbXBvcnQgeyBsaXN0RXJyb3JzLCBpc0VtYWlsIH0gZnJvbSBcInNyYy9oZWxwZXJzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICAnc3JjL2NvbXBvbmVudHMvc2VjdGlvbidcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBkZWZhdWx0VmFsdWUgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGU/LnRhcmdldD8ubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZT8udGFyZ2V0Py52YWx1ZTtcclxuICAgIHNldERhdGEoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmICghZGF0YT8uZW1haWwpIHJldHVybiB0b2FzdC5lcnJvcihcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCIpO1xyXG4gICAgaWYgKCFpc0VtYWlsKGRhdGE/LmVtYWlsKSlcclxuICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKFwiUGxlYXNlIGVudGVyIHlvdXIgdmFsaWQgZW1haWxcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgcG9zdENvbnRhY3RzKGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBzZW50IHlvdXIgY29udGFjdCBkZXRhaWxzXCIpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXREYXRhKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IobGlzdEVycm9ycyhlcnIpKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IEZvb3RlckxpbmsgPSAoeyBsaW5rTGFiZWwsIHRvIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e3RvIHx8IFwiL1wifT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJteS0zIGJsb2NrIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGR1cmF0aW9uLTcwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAge2xpbmtMYWJlbH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWJsYWNrIHctZnVsbCBteC1hdXRvIHNtOnB4LTggbGc6cHgtMTYgeGw6cHgtNDAgMnhsOnB4LTU2XCI+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS04MDAgcHktMTAgZmxleCBmbGV4LXdyYXAganVzdGlmeS1sZWZ0IHh4czpmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHctMS8yIHNtOnctNC8xMiBtZDp3LTEvNCB4eHM6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxGb290ZXJJY29uIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgYmxvY2sgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMTAwIHRleHQtc20gZm9udC1tZWRpdW0gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDIwIExhbmRpZnkgVUkgS2l0LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGJsb2NrIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTEwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGR1cmF0aW9uLTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC02IHNwYWNlLXgtM1wiPlxyXG4gICAgICAgICAgICAgIDxGYkljb24gLz5cclxuICAgICAgICAgICAgICA8TGlua0ljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSB3LTEvMiBzbTp3LTQvMTIgbWQ6dy0yLzEyIHh4czp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSB0ZXh0LXhsIG1iLTYgZm9udC1ib2xkIGZvbnQtcG9wcGluc1wiPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIldobyB3ZSBhcmVcIiAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJIb3cgdG8gc2F2ZVwiIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIkp1c3QgZm9yIFlvdVwiIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIlByb3BlcnR5XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgdy0xLzIgc206dy00LzEyIG1kOnctMi8xMiB4eHM6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHRleHQteGwgbWItNiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICBDby1vd25cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIk92ZXJ2aWV3XCIgLz5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiIEdldCBTdGFydGVkXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgdy0xLzIgc206dy00LzEyIG1kOnctMS81IHh4czp3LWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHctMS8yIHNtOnctNC8xMiBtZDp3LTEvNSB4eHM6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTYgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgU3RheSB1cCB0byBkYXRlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICA8TG9hZGVyU3Bpbm5lciB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPElucHV0V2l0aEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhPy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmUoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cclxuICAgICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJDb250YWN0IFVzXCIgdG89XCIvY29udGFjdFVzXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9