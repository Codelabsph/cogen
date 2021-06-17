webpackHotUpdate_N_E("pages/index",{

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
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-black w-full mx-auto sm:px-8 lg:px-16 xl:px-40 2xl:px-56",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " text-gray-800 py-10 flex flex-wrap justify-left xxs:flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "py-5 w-1/2 sm:w-4/12 md:w-1/4 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_footer_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            href: "#",
            className: "mt-10 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700",
            children: ["Copyright \xA9 2020  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
              linkLabel: "Who we are"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            href: "#",
            className: "mt-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700",
            children: "All rights reserved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center mt-6 space-x-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_fb_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_link_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " text-white text-xl mb-6 font-bold font-poppins",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Who we are"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "How to save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Just for You"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Property"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " uppercase text-white text-xl mb-6 font-bold",
            children: "Co-own"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: "Overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
            linkLabel: " Get Started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " uppercase text-white mb-6 font-bold",
            children: "Stay up to date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_loaderSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
            width: 20,
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
            lineNumber: 107,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterLink, {
              linkLabel: "Contact Us",
              to: "/contactUs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsImRlZmF1bHRWYWx1ZSIsImVtYWlsIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2F2ZSIsInRvYXN0IiwiZXJyb3IiLCJpc0VtYWlsIiwicG9zdENvbnRhY3RzIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnIiLCJsaXN0RXJyb3JzIiwiRm9vdGVyTGluayIsImxpbmtMYWJlbCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxTQUFLLEVBQUU7QUFEWSxHQUFyQjs7QUFEbUIsa0JBS0tDLHNEQUFRLENBQUNGLFlBQUQsQ0FMYjtBQUFBLE1BS1pHLElBTFk7QUFBQSxNQUtOQyxPQUxNOztBQUFBLG1CQU1XRixzREFBUSxDQUFDLEtBQUQsQ0FObkI7QUFBQSxNQU1aRyxPQU5ZO0FBQUEsTUFNSEMsVUFORzs7QUFRbkIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDNUIsUUFBTUMsSUFBSSxHQUFHRCxDQUFILGFBQUdBLENBQUgsb0NBQUdBLENBQUMsQ0FBRUUsTUFBTiw4Q0FBRyxVQUFXRCxJQUF4QjtBQUNBLFFBQU1FLEtBQUssR0FBR0gsQ0FBSCxhQUFHQSxDQUFILHFDQUFHQSxDQUFDLENBQUVFLE1BQU4sK0NBQUcsV0FBV0MsS0FBekI7QUFDQVAsV0FBTyxpQ0FDRkQsSUFE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ZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpRUQsQ0EvR0Q7O0dBQU1iLE07O0tBQUFBLE07QUFpSFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkYWFmN2MzM2RhODY1Y2M4ZjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3Rlckljb24gZnJvbSBcInB1YmxpYy9hc3NldHMvZm9vdGVyLWljb24uc3ZnXCI7XHJcbmltcG9ydCBGYkljb24gZnJvbSBcInB1YmxpYy9hc3NldHMvZmItaWNvbi5zdmdcIjtcclxuaW1wb3J0IExpbmtJY29uIGZyb20gXCJwdWJsaWMvYXNzZXRzL2xpbmstaWNvbi5zdmdcIjtcclxuaW1wb3J0IElucHV0V2l0aEJ1dHRvbiBmcm9tIFwic3JjL2NvbXBvbmVudHMvaW5wdXRXaXRoQnV0dG9uXCI7XHJcbmltcG9ydCB7IHBvc3RDb250YWN0cyB9IGZyb20gXCJzcmMvaGVscGVycy9hcGkuc2VydmljZVwiO1xyXG5pbXBvcnQgTG9hZGVyU3Bpbm5lciBmcm9tIFwic3JjL2NvbXBvbmVudHMvbG9hZGVyU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzcmMvY29tcG9uZW50cy90b2FzdFwiO1xyXG5pbXBvcnQgeyBsaXN0RXJyb3JzLCBpc0VtYWlsIH0gZnJvbSBcInNyYy9oZWxwZXJzL3V0aWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZT8udGFyZ2V0Py5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlPy50YXJnZXQ/LnZhbHVlO1xyXG4gICAgc2V0RGF0YSh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhPy5lbWFpbCkgcmV0dXJuIHRvYXN0LmVycm9yKFwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIik7XHJcbiAgICBpZiAoIWlzRW1haWwoZGF0YT8uZW1haWwpKVxyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoXCJQbGVhc2UgZW50ZXIgeW91ciB2YWxpZCBlbWFpbFwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBwb3N0Q29udGFjdHMoZGF0YSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IHNlbnQgeW91ciBjb250YWN0IGRldGFpbHNcIik7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldERhdGEoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihsaXN0RXJyb3JzKGVycikpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgRm9vdGVyTGluayA9ICh7IGxpbmtMYWJlbCwgdG8gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17dG8gfHwgXCIvXCJ9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LTMgYmxvY2sgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gZHVyYXRpb24tNzAwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICB7bGlua0xhYmVsfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ibGFjayB3LWZ1bGwgbXgtYXV0byBzbTpweC04IGxnOnB4LTE2IHhsOnB4LTQwIDJ4bDpweC01NlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS04MDAgcHktMTAgZmxleCBmbGV4LXdyYXAganVzdGlmeS1sZWZ0IHh4czpmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHctMS8yIHNtOnctNC8xMiBtZDp3LTEvNCB4eHM6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxGb290ZXJJY29uIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgYmxvY2sgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMTAwIHRleHQtc20gZm9udC1tZWRpdW0gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDIwICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJXaG8gd2UgYXJlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBibG9jayB0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS0xMDAgdGV4dC1zbSBmb250LW1lZGl1bSBkdXJhdGlvbi03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNiBzcGFjZS14LTNcIj5cclxuICAgICAgICAgICAgICA8RmJJY29uIC8+XHJcbiAgICAgICAgICAgICAgPExpbmtJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgdy0xLzIgc206dy00LzEyIG1kOnctMi8xMiB4eHM6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgdGV4dC14bCBtYi02IGZvbnQtYm9sZCBmb250LXBvcHBpbnNcIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJXaG8gd2UgYXJlXCIgLz5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiSG93IHRvIHNhdmVcIiAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJKdXN0IGZvciBZb3VcIiAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJQcm9wZXJ0eVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHctMS8yIHNtOnctNC8xMiBtZDp3LTIvMTIgeHhzOnctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB1cHBlcmNhc2UgdGV4dC13aGl0ZSB0ZXh0LXhsIG1iLTYgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgQ28tb3duXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCJPdmVydmlld1wiIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIiBHZXQgU3RhcnRlZFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHctMS8yIHNtOnctNC8xMiBtZDp3LTEvNSB4eHM6dy1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSB3LTEvMiBzbTp3LTQvMTIgbWQ6dy0xLzUgeHhzOnctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB1cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi02IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIFN0YXkgdXAgdG8gZGF0ZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPExvYWRlclNwaW5uZXIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxJbnB1dFdpdGhCdXR0b25cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YT8uZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiQ29udGFjdCBVc1wiIHRvPVwiL2NvbnRhY3RVc1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==