webpackHotUpdate_N_E("pages/calculate",{

/***/ "./src/components/projectDetails/index.js":
/*!************************************************!*\
  !*** ./src/components/projectDetails/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/buttons */ "./src/components/buttons/index.js");
/* harmony import */ var public_assets_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/arrow-icon.svg */ "./public/assets/arrow-icon.svg");
/* harmony import */ var src_components_headingWithText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/headingWithText */ "./src/components/headingWithText/index.js");
/* harmony import */ var public_assets_cogen_shade_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/assets/cogen-shade-icon.svg */ "./public/assets/cogen-shade-icon.svg");
/* harmony import */ var src_components_textWithHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/textWithHeading */ "./src/components/textWithHeading/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\63956\\cogenweb\\src\\components\\projectDetails\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var ProjectDetails = function ProjectDetails(_ref) {
  _s();

  var imageLink = _ref.imageLink,
      details = _ref.details,
      title = _ref.title,
      subTitle = _ref.subTitle,
      specsList = _ref.specsList,
      cogenShade = _ref.cogenShade,
      mainTitle = _ref.mainTitle,
      detailsListCol1 = _ref.detailsListCol1,
      detailsListCol2 = _ref.detailsListCol2,
      buttonClick = _ref.buttonClick,
      buttonLabel = _ref.buttonLabel,
      linkLabel = _ref.linkLabel,
      link = _ref.link;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var handleRouting = function handleRouting(to) {
    return router.push(to);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "z-50 relative",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "w-full xxs:h-auto",
            src: imageLink
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " z-50 relative  w-1/2 lg:w-1/2 md:w-full xxs:w-full sm:w-full lg:px-8",
        children: [cogenShade && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "xxs:py-12",
          children: cogenShade && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_cogen_shade_icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 55
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this), mainTitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-lg my-2",
          children: mainTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-lg py-4",
          children: details
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "text-lg font-bold my-2 ",
          children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "font-normal ml-5 xxs:ml-0",
            children: subTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row py-4 space-x-14 xxs:flex-col xxs:space-x-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "",
            children: detailsListCol1 === null || detailsListCol1 === void 0 ? void 0 : detailsListCol1.map(function (val) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_textWithHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
                label: val === null || val === void 0 ? void 0 : val.label,
                content: val === null || val === void 0 ? void 0 : val.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "",
            children: detailsListCol2 === null || detailsListCol2 === void 0 ? void 0 : detailsListCol2.map(function (val) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_textWithHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
                label: val === null || val === void 0 ? void 0 : val.label,
                content: val === null || val === void 0 ? void 0 : val.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), specsList && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row my-2 xxs:flex-col w-full text-center space-x-16 xxs:space-x-0",
          children: specsList && specsList.map(function (val) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_headingWithText__WEBPACK_IMPORTED_MODULE_4__["default"], {
              content: val === null || val === void 0 ? void 0 : val.content,
              label: val === null || val === void 0 ? void 0 : val.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this), buttonLabel && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "my-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: "Co-own",
            id: "coOwn",
            paddingY: "xs",
            btnColor: "primary",
            textColor: "white",
            width: "xs",
            onClick: buttonClick && buttonClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this), linkLabel && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center space-x-1 font-bold",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: function onClick() {
                return handleRouting(link);
              },
              className: "text-cogengreen cursor-pointer",
              children: linkLabel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(public_assets_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(ProjectDetails, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = ProjectDetails;
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

var _c;

$RefreshReg$(_c, "ProjectDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdERldGFpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdERldGFpbHMiLCJpbWFnZUxpbmsiLCJkZXRhaWxzIiwidGl0bGUiLCJzdWJUaXRsZSIsInNwZWNzTGlzdCIsImNvZ2VuU2hhZGUiLCJtYWluVGl0bGUiLCJkZXRhaWxzTGlzdENvbDEiLCJkZXRhaWxzTGlzdENvbDIiLCJidXR0b25DbGljayIsImJ1dHRvbkxhYmVsIiwibGlua0xhYmVsIiwibGluayIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVJvdXRpbmciLCJ0byIsInB1c2giLCJtYXAiLCJ2YWwiLCJsYWJlbCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQWNqQjtBQUFBOztBQUFBLE1BYkpDLFNBYUksUUFiSkEsU0FhSTtBQUFBLE1BWkpDLE9BWUksUUFaSkEsT0FZSTtBQUFBLE1BWEpDLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLFFBVUksUUFWSkEsUUFVSTtBQUFBLE1BVEpDLFNBU0ksUUFUSkEsU0FTSTtBQUFBLE1BUkpDLFVBUUksUUFSSkEsVUFRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BTkpDLGVBTUksUUFOSkEsZUFNSTtBQUFBLE1BTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLFdBR0ksUUFISkEsV0FHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTtBQUNKLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxFQUFELEVBQVE7QUFDNUIsV0FBT0gsTUFBTSxDQUFDSSxJQUFQLENBQVlELEVBQVosQ0FBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3REFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQW1DLGVBQUcsRUFBRWhCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLHVFQUFmO0FBQUEsbUJBQ0dLLFVBQVUsaUJBQ1Q7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFBNEJBLFVBQVUsaUJBQUkscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBSUdDLFNBQVMsaUJBQUk7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxvQkFBNkJBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmhCLGVBS0U7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxvQkFBNkJMO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsRUFNR0MsS0FBSyxpQkFDSjtBQUFJLG1CQUFTLEVBQUMseUJBQWQ7QUFBQSxxQkFDR0EsS0FESCxlQUVFO0FBQU0scUJBQVMsRUFBQywyQkFBaEI7QUFBQSxzQkFBNkNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBWUU7QUFBSyxtQkFBUyxFQUFDLDBEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEVBQWY7QUFBQSxzQkFDR0ksZUFESCxhQUNHQSxlQURILHVCQUNHQSxlQUFlLENBQUVXLEdBQWpCLENBQXFCLFVBQUNDLEdBQUQsRUFBUztBQUM3QixrQ0FDRSxxRUFBQyxzRUFBRDtBQUFpQixxQkFBSyxFQUFFQSxHQUFGLGFBQUVBLEdBQUYsdUJBQUVBLEdBQUcsQ0FBRUMsS0FBN0I7QUFBb0MsdUJBQU8sRUFBRUQsR0FBRixhQUFFQSxHQUFGLHVCQUFFQSxHQUFHLENBQUVFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFHRCxhQUpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUsscUJBQVMsRUFBQyxFQUFmO0FBQUEsc0JBQ0diLGVBREgsYUFDR0EsZUFESCx1QkFDR0EsZUFBZSxDQUFFVSxHQUFqQixDQUFxQixVQUFDQyxHQUFELEVBQVM7QUFDN0Isa0NBQ0UscUVBQUMsc0VBQUQ7QUFBaUIscUJBQUssRUFBRUEsR0FBRixhQUFFQSxHQUFGLHVCQUFFQSxHQUFHLENBQUVDLEtBQTdCO0FBQW9DLHVCQUFPLEVBQUVELEdBQUYsYUFBRUEsR0FBRix1QkFBRUEsR0FBRyxDQUFFRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBR0QsYUFKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBNEJHakIsU0FBUyxpQkFDUjtBQUFLLG1CQUFTLEVBQUMsNkVBQWY7QUFBQSxvQkFDR0EsU0FBUyxJQUNSQSxTQUFTLENBQUNjLEdBQVYsQ0FBYyxVQUFDQyxHQUFELEVBQVM7QUFDckIsZ0NBQ0UscUVBQUMsc0VBQUQ7QUFDRSxxQkFBTyxFQUFFQSxHQUFGLGFBQUVBLEdBQUYsdUJBQUVBLEdBQUcsQ0FBRUUsT0FEaEI7QUFFRSxtQkFBSyxFQUFFRixHQUFGLGFBQUVBLEdBQUYsdUJBQUVBLEdBQUcsQ0FBRUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBTUQsV0FQRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JKLEVBeUNHVixXQUFXLGlCQUNWO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0UscUVBQUMsOERBQUQ7QUFDRSxnQkFBSSxFQUFFLFFBRFI7QUFFRSxjQUFFLEVBQUUsT0FGTjtBQUdFLG9CQUFRLEVBQUUsSUFIWjtBQUlFLG9CQUFRLEVBQUUsU0FKWjtBQUtFLHFCQUFTLEVBQUUsT0FMYjtBQU1FLGlCQUFLLEVBQUUsSUFOVDtBQU9FLG1CQUFPLEVBQUVELFdBQVcsSUFBSUE7QUFQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNKLEVBc0RHRSxTQUFTLGlCQUNSO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHVDQUFmO0FBQUEsb0NBQ0U7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1JLGFBQWEsQ0FBQ0gsSUFBRCxDQUFuQjtBQUFBLGVBRFg7QUFFRSx1QkFBUyxFQUFDLGdDQUZaO0FBQUEsd0JBSUdEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQUEscUNBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpRkQsQ0F0R0Q7O0dBQU1aLGM7VUFlV2UscUQ7OztLQWZYZixjO0FBd0dTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdGUuYjZlOGY4OTk5NzM2YWU5ODgwMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbnMgZnJvbSBcInNyYy9jb21wb25lbnRzL2J1dHRvbnNcIjtcclxuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwicHVibGljL2Fzc2V0cy9hcnJvdy1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgSGVhZGluZ1dpdGhUZXh0IGZyb20gXCJzcmMvY29tcG9uZW50cy9oZWFkaW5nV2l0aFRleHRcIjtcclxuaW1wb3J0IENvZ2VuU2hhZGVJY29uIGZyb20gXCJwdWJsaWMvYXNzZXRzL2NvZ2VuLXNoYWRlLWljb24uc3ZnXCI7XHJcbmltcG9ydCBUZXh0V2l0aEhlYWRpbmcgZnJvbSBcInNyYy9jb21wb25lbnRzL3RleHRXaXRoSGVhZGluZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFByb2plY3REZXRhaWxzID0gKHtcclxuICBpbWFnZUxpbmssXHJcbiAgZGV0YWlscyxcclxuICB0aXRsZSxcclxuICBzdWJUaXRsZSxcclxuICBzcGVjc0xpc3QsXHJcbiAgY29nZW5TaGFkZSxcclxuICBtYWluVGl0bGUsXHJcbiAgZGV0YWlsc0xpc3RDb2wxLFxyXG4gIGRldGFpbHNMaXN0Q29sMixcclxuICBidXR0b25DbGljayxcclxuICBidXR0b25MYWJlbCxcclxuICBsaW5rTGFiZWwsXHJcbiAgbGluayxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3V0aW5nID0gKHRvKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2godG8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IG1kOmZsZXgtcm93IHNtOmZsZXgtY29sIHh4czpmbGV4LWNvbCBsZzotbXgtOCBteS04ICBmb250LXBvcHBpbnMgeHhzOnRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBsZzp3LTEvMiBsZzpweC04ICBtZDp3LWZ1bGwgeHhzOnctZnVsbCBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCB4eHM6aC1hdXRvXCIgc3JjPXtpbWFnZUxpbmt9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB6LTUwIHJlbGF0aXZlICB3LTEvMiBsZzp3LTEvMiBtZDp3LWZ1bGwgeHhzOnctZnVsbCBzbTp3LWZ1bGwgbGc6cHgtOFwiPlxyXG4gICAgICAgICAge2NvZ2VuU2hhZGUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInh4czpweS0xMlwiPntjb2dlblNoYWRlICYmIDxDb2dlblNoYWRlSWNvbiAvPn08L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7bWFpblRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXktMlwiPnttYWluVGl0bGV9PC9wPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgcHktNFwiPntkZXRhaWxzfTwvcD5cclxuICAgICAgICAgIHt0aXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBteS0yIFwiPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBtbC01IHh4czptbC0wXCI+e3N1YlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHktNCBzcGFjZS14LTE0IHh4czpmbGV4LWNvbCB4eHM6c3BhY2UteC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAge2RldGFpbHNMaXN0Q29sMT8ubWFwKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0V2l0aEhlYWRpbmcgbGFiZWw9e3ZhbD8ubGFiZWx9IGNvbnRlbnQ9e3ZhbD8uY29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIHtkZXRhaWxzTGlzdENvbDI/Lm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFdpdGhIZWFkaW5nIGxhYmVsPXt2YWw/LmxhYmVsfSBjb250ZW50PXt2YWw/LmNvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3NwZWNzTGlzdCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBteS0yIHh4czpmbGV4LWNvbCB3LWZ1bGwgdGV4dC1jZW50ZXIgc3BhY2UteC0xNiB4eHM6c3BhY2UteC0wXCI+XHJcbiAgICAgICAgICAgICAge3NwZWNzTGlzdCAmJlxyXG4gICAgICAgICAgICAgICAgc3BlY3NMaXN0Lm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmdXaXRoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsPy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbD8ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YnV0dG9uTGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgdGV4dD17XCJDby1vd25cIn1cclxuICAgICAgICAgICAgICAgIGlkPXtcImNvT3duXCJ9XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nWT17XCJ4c1wifVxyXG4gICAgICAgICAgICAgICAgYnRuQ29sb3I9e1wicHJpbWFyeVwifVxyXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17XCJ4c1wifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YnV0dG9uQ2xpY2sgJiYgYnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2xpbmtMYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSb3V0aW5nKGxpbmspfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNvZ2VuZ3JlZW4gY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bGlua0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=