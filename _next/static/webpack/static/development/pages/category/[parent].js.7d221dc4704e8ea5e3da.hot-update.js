webpackHotUpdate("static\\development\\pages\\category\\[parent].js",{

/***/ "./components/Link/index.tsx":
/*!***********************************!*\
  !*** ./components/Link/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ENV = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.env;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var href = props.href,
      alias = props.alias,
      label = props.label,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;

  if (ENV === 'dev') {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href
    }, __jsx("span", {
      className: className
    }, label));
  }

  var prefix = '/wdnmd';
  var to = "".concat(prefix).concat(alias || href.toString());
  return __jsx("a", {
    href: to,
    className: className
  }, label);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVOViIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJlbnYiLCJwcm9wcyIsImhyZWYiLCJhbGlhcyIsImxhYmVsIiwiY2xhc3NOYW1lIiwicHJlZml4IiwidG8iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBR2FBLEcsR0FBUUMsa0RBQVMsR0FBR0MsbUIsQ0FBekJDLEc7QUFTTyx5RUFBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BRTdCQyxJQUY2QixHQUczQkQsS0FIMkIsQ0FFN0JDLElBRjZCO0FBQUEsTUFFdkJDLEtBRnVCLEdBRzNCRixLQUgyQixDQUV2QkUsS0FGdUI7QUFBQSxNQUVoQkMsS0FGZ0IsR0FHM0JILEtBSDJCLENBRWhCRyxLQUZnQjtBQUFBLHlCQUczQkgsS0FIMkIsQ0FFVEksU0FGUztBQUFBLE1BRVRBLFNBRlMsaUNBRUcsRUFGSDs7QUFJL0IsTUFBSVIsR0FBRyxLQUFLLEtBQVosRUFBbUI7QUFDakIsV0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFSztBQUFaLE9BQ0U7QUFBTSxlQUFTLEVBQUVHO0FBQWpCLE9BQTZCRCxLQUE3QixDQURGLENBREY7QUFLRDs7QUFDRCxNQUFNRSxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLEVBQUUsYUFBTUQsTUFBTixTQUFlSCxLQUFLLElBQUlELElBQUksQ0FBQ00sUUFBTCxFQUF4QixDQUFSO0FBQ0EsU0FDRTtBQUFHLFFBQUksRUFBRUQsRUFBVDtBQUFhLGFBQVMsRUFBRUY7QUFBeEIsS0FBb0NELEtBQXBDLENBREY7QUFHRCxDQWhCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2F0ZWdvcnlcXFtwYXJlbnRdLmpzLjdkMjIxZGM0NzA0ZThlYTVlM2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJztcclxuXHJcbmNvbnN0IHsgZW52OiBFTlYgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGhyZWY6IHN0cmluZyB8IFVybE9iamVjdCxcclxuICBsYWJlbDogc3RyaW5nLFxyXG4gIGFsaWFzPzogc3RyaW5nLFxyXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBocmVmLCBhbGlhcywgbGFiZWwsIGNsYXNzTmFtZSA9ICcnLFxyXG4gIH0gPSBwcm9wcztcclxuICBpZiAoRU5WID09PSAnZGV2Jykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntsYWJlbH08L3NwYW4+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IHByZWZpeCA9ICcvd2RubWQnO1xyXG4gIGNvbnN0IHRvID0gYCR7cHJlZml4fSR7YWxpYXMgfHwgaHJlZi50b1N0cmluZygpfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9e3RvfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2xhYmVsfTwvYT5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9