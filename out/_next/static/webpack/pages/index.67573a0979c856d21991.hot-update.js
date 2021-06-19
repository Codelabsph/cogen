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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsImRlZmF1bHRWYWx1ZSIsImVtYWlsIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2F2ZSIsInRvYXN0IiwiZXJyb3IiLCJpc0VtYWlsIiwicG9zdENvbnRhY3RzIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnIiLCJsaXN0RXJyb3JzIiwiRm9vdGVyTGluayIsImxpbmtMYWJlbCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQUssRUFBRTtBQURZLEdBQXJCOztBQURtQixrQkFLS0Msc0RBQVEsQ0FBQ0YsWUFBRCxDQUxiO0FBQUEsTUFLWkcsSUFMWTtBQUFBLE1BS05DLE9BTE07O0FBQUEsbUJBTVdGLHNEQUFRLENBQUMsS0FBRCxDQU5uQjtBQUFBLE1BTVpHLE9BTlk7QUFBQSxNQU1IQyxVQU5HOztBQVFuQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUFBOztBQUM1QixRQUFNQyxJQUFJLEdBQUdELENBQUgsYUFBR0EsQ0FBSCxvQ0FBR0EsQ0FBQyxDQUFFRSxNQUFOLDhDQUFHLFVBQVdELElBQXhCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHSCxDQUFILGFBQUdBLENBQUgscUNBQUdBLENBQUMsQ0FBRUUsTUFBTiwrQ0FBRyxXQUFXQyxLQUF6QjtBQUNBUCxXQUFPLGlDQUNGRCxJQURFLHdJQUVKTSxJQUZJLEVBRUdFLEtBRkgsR0FBUDtBQUlELEdBUEQ7O0FBU0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJLEVBQUNULElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVGLEtBQVAsQ0FBSixFQUFrQixPQUFPWSwwREFBSyxDQUFDQyxLQUFOLENBQVkseUJBQVosQ0FBUDtBQUNsQixRQUFJLENBQUNDLDBFQUFPLENBQUNaLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFRixLQUFQLENBQVosRUFDRSxPQUFPWSwwREFBSyxDQUFDQyxLQUFOLENBQVksK0JBQVosQ0FBUCxDQURGLEtBRUs7QUFDSFIsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVUsa0ZBQVksQ0FBQ2IsSUFBRCxDQUFaLENBQ0djLElBREgsQ0FDUSxZQUFNO0FBQ1ZKLGtFQUFLLENBQUNLLE9BQU4sQ0FBYyx3Q0FBZDtBQUNBWixrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRixlQUFPLENBQUNKLFlBQUQsQ0FBUDtBQUNELE9BTEgsV0FNUyxVQUFDbUIsR0FBRCxFQUFTO0FBQ2ROLGtFQUFLLENBQUNDLEtBQU4sQ0FBWU0sNkVBQVUsQ0FBQ0QsR0FBRCxDQUF0QjtBQUNBYixrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELE9BVEg7QUFVRDtBQUNGLEdBakJEOztBQW1CQSxNQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF1QjtBQUFBLFFBQXBCQyxTQUFvQixRQUFwQkEsU0FBb0I7QUFBQSxRQUFUQyxFQUFTLFFBQVRBLEVBQVM7QUFDeEMsd0JBQ0UscUVBQUMsaURBQUQ7QUFBTSxVQUFJLEVBQUVBLEVBQUUsSUFBSSxHQUFsQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyw4RkFBYjtBQUFBLGtCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJEOztBQVVBLHNCQUVFO0FBQVEsYUFBUyxFQUFDLDZEQUFsQjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFDLCtEQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLDBDQUFmO0FBQUEsa0NBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsZ0JBQUksRUFBQyxHQURQO0FBRUUscUJBQVMsRUFBQyxnRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVFFO0FBQ0UsZ0JBQUksRUFBQyxHQURQO0FBRUUscUJBQVMsRUFBQywrRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWVFO0FBQUsscUJBQVMsRUFBQyxrQ0FBZjtBQUFBLG9DQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFzQkU7QUFBSyxtQkFBUyxFQUFDLDBDQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLHFFQUFDLFVBQUQ7QUFBWSxxQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRSxxRUFBQyxVQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0UscUVBQUMsVUFBRDtBQUFZLHFCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGLGVBK0JFO0FBQUssbUJBQVMsRUFBQywwQ0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw4Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLHFFQUFDLFVBQUQ7QUFBWSxxQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSxxRUFBQyxVQUFEO0FBQVkscUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkYsZUFzQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0YsZUF1Q0U7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBSUdqQixPQUFPLGdCQUNOLHFFQUFDLG9FQUFEO0FBQWUsaUJBQUssRUFBRSxFQUF0QjtBQUEwQixrQkFBTSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE0sZ0JBR04scUVBQUMsc0VBQUQ7QUFDRSx1QkFBVyxFQUFDLG9CQURkO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsaUJBQUssRUFBRUYsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVGLEtBSGY7QUFJRSxvQkFBUSxFQUFFTSxjQUpaO0FBS0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNSyxVQUFVLEVBQWhCO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBZUU7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxtQ0FDRSxxRUFBQyxVQUFEO0FBQVksdUJBQVMsRUFBQyxZQUF0QjtBQUFtQyxnQkFBRSxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQW9FRCxDQWxIRDs7R0FBTWIsTTs7S0FBQUEsTTtBQW9IU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc1NzNhMDk3OWM4NTZkMjE5OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVySWNvbiBmcm9tIFwicHVibGljL2Fzc2V0cy9mb290ZXItaWNvbi5zdmdcIjtcclxuaW1wb3J0IEZiSWNvbiBmcm9tIFwicHVibGljL2Fzc2V0cy9mYi1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgTGlua0ljb24gZnJvbSBcInB1YmxpYy9hc3NldHMvbGluay1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgSW5wdXRXaXRoQnV0dG9uIGZyb20gXCJzcmMvY29tcG9uZW50cy9pbnB1dFdpdGhCdXR0b25cIjtcclxuaW1wb3J0IHsgcG9zdENvbnRhY3RzIH0gZnJvbSBcInNyYy9oZWxwZXJzL2FwaS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMb2FkZXJTcGlubmVyIGZyb20gXCJzcmMvY29tcG9uZW50cy9sb2FkZXJTcGlubmVyXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInNyYy9jb21wb25lbnRzL3RvYXN0XCI7XHJcbmltcG9ydCB7IGxpc3RFcnJvcnMsIGlzRW1haWwgfSBmcm9tIFwic3JjL2hlbHBlcnMvdXRpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gICdzcmMvY29tcG9uZW50cy9zZWN0aW9uJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZT8udGFyZ2V0Py5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlPy50YXJnZXQ/LnZhbHVlO1xyXG4gICAgc2V0RGF0YSh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhPy5lbWFpbCkgcmV0dXJuIHRvYXN0LmVycm9yKFwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIik7XHJcbiAgICBpZiAoIWlzRW1haWwoZGF0YT8uZW1haWwpKVxyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoXCJQbGVhc2UgZW50ZXIgeW91ciB2YWxpZCBlbWFpbFwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBwb3N0Q29udGFjdHMoZGF0YSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IHNlbnQgeW91ciBjb250YWN0IGRldGFpbHNcIik7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldERhdGEoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihsaXN0RXJyb3JzKGVycikpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgRm9vdGVyTGluayA9ICh7IGxpbmtMYWJlbCwgdG8gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17dG8gfHwgXCIvXCJ9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LTMgYmxvY2sgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIHRleHQtc20gZm9udC1tZWRpdW0gZHVyYXRpb24tNzAwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICB7bGlua0xhYmVsfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1mdWxsIG14LWF1dG8gc206cHgtOCBsZzpweC0xNiB4bDpweC00MCAyeGw6cHgtNTZcIj5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTgwMCBweS0xMCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWxlZnQgeHhzOmZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgdy0xLzIgc206dy00LzEyIG1kOnctMS80IHh4czp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPEZvb3Rlckljb24gLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBibG9jayB0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS0xMDAgdGV4dC1zbSBmb250LW1lZGl1bSBkdXJhdGlvbi03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjAgTGFuZGlmeSBVSSBLaXQuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgYmxvY2sgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktMTAwIHRleHQtc20gZm9udC1tZWRpdW0gZHVyYXRpb24tNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTYgc3BhY2UteC0zXCI+XHJcbiAgICAgICAgICAgICAgPEZiSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDxMaW5rSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHctMS8yIHNtOnctNC8xMiBtZDp3LTIvMTIgeHhzOnctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHRleHQteGwgbWItNiBmb250LWJvbGQgZm9udC1wb3BwaW5zXCI+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiV2hvIHdlIGFyZVwiIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIkhvdyB0byBzYXZlXCIgLz5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiSnVzdCBmb3IgWW91XCIgLz5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiUHJvcGVydHlcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSB3LTEvMiBzbTp3LTQvMTIgbWQ6dy0yLzEyIHh4czp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdXBwZXJjYXNlIHRleHQtd2hpdGUgdGV4dC14bCBtYi02IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIENvLW93blxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlckxpbmsgbGlua0xhYmVsPVwiT3ZlcnZpZXdcIiAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyTGluayBsaW5rTGFiZWw9XCIgR2V0IFN0YXJ0ZWRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSB3LTEvMiBzbTp3LTQvMTIgbWQ6dy0xLzUgeHhzOnctZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgdy0xLzIgc206dy00LzEyIG1kOnctMS81IHh4czp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItNiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICBTdGF5IHVwIHRvIGRhdGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxMb2FkZXJTcGlubmVyIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8SW5wdXRXaXRoQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGE/LmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGxpbmtMYWJlbD1cIkNvbnRhY3QgVXNcIiB0bz1cIi9jb250YWN0VXNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=