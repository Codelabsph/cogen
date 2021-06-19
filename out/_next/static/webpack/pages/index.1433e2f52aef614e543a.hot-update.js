webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/section/index.js":
/*!*****************************************!*\
  !*** ./src/components/section/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\Users\\63956\\cogenweb\\src\\components\\section\\index.js",
    _this = undefined;



var Section = function Section(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      children = _ref.children,
      margin = _ref.margin,
      padding = _ref.padding,
      bgColor = _ref.bgColor,
      flexRow = _ref.flexRow,
      flexSpacing = _ref.flexSpacing,
      marginTop = _ref.marginTop,
      sectionType = _ref.sectionType,
      wave = _ref.wave,
      extras = _ref.extras;
  var marginStyle = margin === "lg" ? "my-24" : margin === "md" ? "my-16" : margin === "s" ? "my-5" : margin === "xl" ? "my-32" : margin === "my-0" ? "my-0" : "";
  var TopMargin = marginTop === "xs" ? "mt-6" : marginTop === "sm" ? "mt-12" : marginTop === "lg" ? "mt-16" : marginTop === "xl" ? "mt-24" : marginTop === "xxl" ? "mt-32" : "";
  var paddingStyle = padding === "lg" ? "py-24" : padding === "md" ? "py-16" : padding === "s" ? "py-5" : "py-0";
  var flexRows = flexRow === "around" ? "justify-around" : flexRow === "center" ? "justify-center" : flexRow === "between" ? "justify-between" : "";
  var spacing = flexSpacing === "xs" ? "space-x-4 xxs:space-x-0" : flexSpacing === "sm" ? "space-x-6 xxs:space-x-0" : flexSpacing === "md" ? "space-x-8 xxs:space-x-0" : "lg" ? "space-x-12 xxs:space-x-0" : undefined;
  var bgStyle = bgColor === "primary" ? "bg-cogengreen" : bgColor === "light-green" ? "bg-green-100" : bgColor === "white" ? "bg-white" : bgColor === "lightGrey" ? "xxs:bg-gray-100 " : bgColor === "lightGray" ? "bg-gray-100 " : "";
  if (sectionType == "fluid") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "section",
    className: "max-full mx-auto overflow-x-hidden",
    children: [wave && wave, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex md:flex-row sm:flex-col align-center xxs:flex-col-reverse font-poppins xxs:text-center  ",
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (child) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child)
        }, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 7
  }, _this);else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "section",
    className: "w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-56  ".concat(marginStyle, " ").concat(bgStyle, " ").concat(paddingStyle, " ").concat(TopMargin),
    children: [wave && wave, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-7xl z-50 mt-20 font-bold font-playfair tracking-lg  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-cogengreen text-lg font-poppins tracking-lg  uppercase mb-20",
        children: extras && extras
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, _this), title && title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-lg font-poppins my-8",
      children: subTitle && subTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex align-center  md:flex-row sm:flex-col xxs:flex-col my-8  font-poppins ".concat(flexRows, " ").concat(spacing, " xxs:text-center"),
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (child) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child)
        }, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 7
  }, _this);
};

_c = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c;

$RefreshReg$(_c, "Section");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwidGl0bGUiLCJzdWJUaXRsZSIsImNoaWxkcmVuIiwibWFyZ2luIiwicGFkZGluZyIsImJnQ29sb3IiLCJmbGV4Um93IiwiZmxleFNwYWNpbmciLCJtYXJnaW5Ub3AiLCJzZWN0aW9uVHlwZSIsIndhdmUiLCJleHRyYXMiLCJtYXJnaW5TdHlsZSIsIlRvcE1hcmdpbiIsInBhZGRpbmdTdHlsZSIsImZsZXhSb3dzIiwic3BhY2luZyIsImJnU3R5bGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BYVY7QUFBQSxNQVpKQyxLQVlJLFFBWkpBLEtBWUk7QUFBQSxNQVhKQyxRQVdJLFFBWEpBLFFBV0k7QUFBQSxNQVZKQyxRQVVJLFFBVkpBLFFBVUk7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxPQVFJLFFBUkpBLE9BUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxTQUlJLFFBSkpBLFNBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxNQUNJLFFBREpBLE1BQ0k7QUFDSixNQUFNQyxXQUFXLEdBQ2ZULE1BQU0sS0FBSyxJQUFYLEdBQ0ksT0FESixHQUVJQSxNQUFNLEtBQUssSUFBWCxHQUNBLE9BREEsR0FFQUEsTUFBTSxLQUFLLEdBQVgsR0FDQSxNQURBLEdBRUFBLE1BQU0sS0FBSyxJQUFYLEdBQ0EsT0FEQSxHQUVBQSxNQUFNLEtBQUssTUFB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Y2svcGFnZXMvaW5kZXguMTQzM2UyZjUyYWVmNjE0ZTU0M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSAoe1xyXG4gIHRpdGxlLFxyXG4gIHN1YlRpdGxlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIG1hcmdpbixcclxuICBwYWRkaW5nLFxyXG4gIGJnQ29sb3IsXHJcbiAgZmxleFJvdyxcclxuICBmbGV4U3BhY2luZyxcclxuICBtYXJnaW5Ub3AsXHJcbiAgc2VjdGlvblR5cGUsXHJcbiAgd2F2ZSxcclxuICBleHRyYXMsXHJcbn0pID0+IHtcclxuICBjb25zdCBtYXJnaW5TdHlsZSA9XHJcbiAgICBtYXJnaW4gPT09IFwibGdcIlxyXG4gICAgICA/IFwibXktMjRcIlxyXG4gICAgICA6IG1hcmdpbiA9PT0gXCJtZFwiXHJcbiAgICAgID8gXCJteS0xNlwiXHJcbiAgICAgIDogbWFyZ2luID09PSBcInNcIlxyXG4gICAgICA/IFwibXktNVwiXHJcbiAgICAgIDogbWFyZ2luID09PSBcInhsXCJcclxuICAgICAgPyBcIm15LTMyXCJcclxuICAgICAgOiBtYXJnaW4gPT09IFwibXktMFwiXHJcbiAgICAgID8gXCJteS0wXCJcclxuICAgICAgOiBcIlwiO1xyXG4gIGNvbnN0IFRvcE1hcmdpbiA9XHJcbiAgICBtYXJnaW5Ub3AgPT09IFwieHNcIlxyXG4gICAgICA/IFwibXQtNlwiXHJcbiAgICAgIDogbWFyZ2luVG9wID09PSBcInNtXCJcclxuICAgICAgPyBcIm10LTEyXCJcclxuICAgICAgOiBtYXJnaW5Ub3AgPT09IFwibGdcIlxyXG4gICAgICA/IFwibXQtMTZcIlxyXG4gICAgICA6IG1hcmdpblRvcCA9PT0gXCJ4bFwiXHJcbiAgICAgID8gXCJtdC0yNFwiXHJcbiAgICAgIDogbWFyZ2luVG9wID09PSBcInh4bFwiXHJcbiAgICAgID8gXCJtdC0zMlwiXHJcbiAgICAgIDogXCJcIjtcclxuICBjb25zdCBwYWRkaW5nU3R5bGUgPVxyXG4gICAgcGFkZGluZyA9PT0gXCJsZ1wiXHJcbiAgICAgID8gXCJweS0yNFwiXHJcbiAgICAgIDogcGFkZGluZyA9PT0gXCJtZFwiXHJcbiAgICAgID8gXCJweS0xNlwiXHJcbiAgICAgIDogcGFkZGluZyA9PT0gXCJzXCJcclxuICAgICAgPyBcInB5LTVcIlxyXG4gICAgICA6IFwicHktMFwiO1xyXG4gIGNvbnN0IGZsZXhSb3dzID1cclxuICAgIGZsZXhSb3cgPT09IFwiYXJvdW5kXCJcclxuICAgICAgPyBcImp1c3RpZnktYXJvdW5kXCJcclxuICAgICAgOiBmbGV4Um93ID09PSBcImNlbnRlclwiXHJcbiAgICAgID8gXCJqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgIDogZmxleFJvdyA9PT0gXCJiZXR3ZWVuXCJcclxuICAgICAgPyBcImp1c3RpZnktYmV0d2VlblwiXHJcbiAgICAgIDogXCJcIjtcclxuICBjb25zdCBzcGFjaW5nID1cclxuICAgIGZsZXhTcGFjaW5nID09PSBcInhzXCJcclxuICAgICAgPyBcInNwYWNlLXgtNCB4eHM6c3BhY2UteC0wXCJcclxuICAgICAgOiBmbGV4U3BhY2luZyA9PT0gXCJzbVwiXHJcbiAgICAgID8gXCJzcGFjZS14LTYgeHhzOnNwYWNlLXgtMFwiXHJcbiAgICAgIDogZmxleFNwYWNpbmcgPT09IFwibWRcIlxyXG4gICAgICA/IFwic3BhY2UteC04IHh4czpzcGFjZS14LTBcIlxyXG4gICAgICA6IFwibGdcIlxyXG4gICAgICA/IFwic3BhY2UteC0xMiB4eHM6c3BhY2UteC0wXCJcclxuICAgICAgOiBcIlwiO1xyXG4gIGNvbnN0IGJnU3R5bGUgPVxyXG4gICAgYmdDb2xvciA9PT0gXCJwcmltYXJ5XCJcclxuICAgICAgPyBcImJnLWNvZ2VuZ3JlZW5cIlxyXG4gICAgICA6IGJnQ29sb3IgPT09IFwibGlnaHQtZ3JlZW5cIlxyXG4gICAgICA/IFwiYmctZ3JlZW4tMTAwXCJcclxuICAgICAgOiBiZ0NvbG9yID09PSBcIndoaXRlXCJcclxuICAgICAgPyBcImJnLXdoaXRlXCJcclxuICAgICAgOiBiZ0NvbG9yID09PSBcImxpZ2h0R3JleVwiXHJcbiAgICAgID8gXCJ4eHM6YmctZ3JheS0xMDAgXCJcclxuICAgICAgOiBiZ0NvbG9yID09PSBcImxpZ2h0R3JheVwiXHJcbiAgICAgID8gXCJiZy1ncmF5LTEwMCBcIlxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gIGlmIChzZWN0aW9uVHlwZSA9PSBcImZsdWlkXCIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25cIiBjbGFzc05hbWU9XCJtYXgtZnVsbCBteC1hdXRvIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgICAge3dhdmUgJiYgd2F2ZX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6ZmxleC1yb3cgc206ZmxleC1jb2wgYWxpZ24tY2VudGVyIHh4czpmbGV4LWNvbC1yZXZlcnNlIGZvbnQtcG9wcGlucyB4eHM6dGV4dC1jZW50ZXIgIFwiPlxyXG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiAoXHJcbiAgICAgICAgICAgIDw+e1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCl9PC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIGlkPVwic2VjdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIG14LWF1dG8gcHgtNiBzbTpweC04IGxnOnB4LTE2IHhsOnB4LTQwIDJ4bDpweC01NiAgJHttYXJnaW5TdHlsZX0gJHtiZ1N0eWxlfSAke3BhZGRpbmdTdHlsZX0gJHtUb3BNYXJnaW59YH1cclxuICAgICAgPlxyXG4gICAgICAgIHt3YXZlICYmIHdhdmV9XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIHotNTAgbXQtMjAgZm9udC1ib2xkIGZvbnQtcGxheWZhaXIgdHJhY2tpbmctbGcgIHNtOnRleHQtYmFzZSBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTZ4bCB4eHM6dGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNvZ2VuZ3JlZW4gdGV4dC1sZyBmb250LXBvcHBpbnMgdHJhY2tpbmctbGcgIHVwcGVyY2FzZSBtYi0yMFwiPlxyXG4gICAgICAgICAgICB7ZXh0cmFzICYmIGV4dHJhc31cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICB7dGl0bGUgJiYgdGl0bGV9XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXBvcHBpbnMgbXktOFwiPntzdWJUaXRsZSAmJiBzdWJUaXRsZX08L3A+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBhbGlnbi1jZW50ZXIgIG1kOmZsZXgtcm93IHNtOmZsZXgtY29sIHh4czpmbGV4LWNvbCBteS04ICBmb250LXBvcHBpbnMgJHtmbGV4Um93c30gJHtzcGFjaW5nfSB4eHM6dGV4dC1jZW50ZXJgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICA8PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQpfTwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9