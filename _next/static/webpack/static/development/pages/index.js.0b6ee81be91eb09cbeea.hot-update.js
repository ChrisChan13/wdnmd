webpackHotUpdate("static\\development\\pages\\index.js",{

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
  return (// eslint-disable-next-line no-script-url
    __jsx("a", {
      href: to,
      className: className
    }, label)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVOViIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJlbnYiLCJwcm9wcyIsImhyZWYiLCJhbGlhcyIsImxhYmVsIiwiY2xhc3NOYW1lIiwicHJlZml4IiwidG8iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBR2FBLEcsR0FBUUMsa0RBQVMsR0FBR0MsbUIsQ0FBekJDLEc7QUFTTyx5RUFBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BRTdCQyxJQUY2QixHQUczQkQsS0FIMkIsQ0FFN0JDLElBRjZCO0FBQUEsTUFFdkJDLEtBRnVCLEdBRzNCRixLQUgyQixDQUV2QkUsS0FGdUI7QUFBQSxNQUVoQkMsS0FGZ0IsR0FHM0JILEtBSDJCLENBRWhCRyxLQUZnQjtBQUFBLHlCQUczQkgsS0FIMkIsQ0FFVEksU0FGUztBQUFBLE1BRVRBLFNBRlMsaUNBRUcsRUFGSDs7QUFJL0IsTUFBSVIsR0FBRyxLQUFLLEtBQVosRUFBbUI7QUFDakIsV0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFSztBQUFaLE9BQ0U7QUFBTSxlQUFTLEVBQUVHO0FBQWpCLE9BQTZCRCxLQUE3QixDQURGLENBREY7QUFLRDs7QUFDRCxNQUFNRSxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLEVBQUUsYUFBTUQsTUFBTixTQUFlSCxLQUFLLElBQUlELElBQUksQ0FBQ00sUUFBTCxFQUF4QixDQUFSO0FBQ0EsU0FDRTtBQUNBO0FBQUcsVUFBSSxFQUFFRCxFQUFUO0FBQWEsZUFBUyxFQUFFRjtBQUF4QixPQUFvQ0QsS0FBcEM7QUFGRjtBQUlELENBakJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wYjZlZTgxYmU5MWViMDljYmVlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCc7XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBocmVmOiBzdHJpbmcgfCBVcmxPYmplY3QsXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICBhbGlhcz86IHN0cmluZyxcclxuICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaHJlZiwgYWxpYXMsIGxhYmVsLCBjbGFzc05hbWUgPSAnJyxcclxuICB9ID0gcHJvcHM7XHJcbiAgaWYgKEVOViA9PT0gJ2RldicpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bGFiZWx9PC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBwcmVmaXggPSAnL3dkbm1kJztcclxuICBjb25zdCB0byA9IGAke3ByZWZpeH0ke2FsaWFzIHx8IGhyZWYudG9TdHJpbmcoKX1gO1xyXG4gIHJldHVybiAoXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gICAgPGEgaHJlZj17dG99IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bGFiZWx9PC9hPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=