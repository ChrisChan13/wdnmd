webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Sidebar/index.tsx":
/*!**************************************!*\
  !*** ./components/Sidebar/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./components/Sidebar/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.github.com/users/ChrisChan13');

        case 3:
          data = _context.sent;
          console.log(data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
          return _context.abrupt("return", __jsx("div", {
            className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.sidebar
          }, __jsx("span", null, "\xB7\xA0\u53CB\u60C5\u94FE\u63A5\xA0\xB7"), __jsx("span", null, __jsx("a", {
            href: "http://eps.ink",
            target: "_new"
          }, "eps.ink")), __jsx("hr", null), __jsx("span", null, "\xA92020 ChrisChan"), __jsx("span", null, "Powered\xA0by\xA0", __jsx("a", {
            href: "https://github.com/ChrisChan13",
            target: "_new"
          }, "@ChrisChan13")), __jsx("span", null, "\u8054\u7CFB\u6211\xA0:\xA0", __jsx("a", {
            href: "mailto:chrischan1213@qq.com"
          }, "chrischan1213@qq.com"))));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
})));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImZldGNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsNlBBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVRQSx5REFBSyxDQUFDLDBDQUFELENBRmI7O0FBQUE7QUFFTEMsY0FGSztBQUdYQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFIVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtYQyxpQkFBTyxDQUFDQyxHQUFSOztBQUxXO0FBQUEsMkNBUVg7QUFBSyxxQkFBUyxFQUFFQyxrREFBSyxDQUFDQztBQUF0QixhQUNFLCtEQURGLEVBRUUsb0JBQ0U7QUFBRyxnQkFBSSxFQUFDLGdCQUFSO0FBQXlCLGtCQUFNLEVBQUM7QUFBaEMsdUJBREYsQ0FGRixFQUtFLGlCQUxGLEVBTUUseUNBTkYsRUFPRSx5Q0FFRTtBQUFHLGdCQUFJLEVBQUMsZ0NBQVI7QUFBeUMsa0JBQU0sRUFBQztBQUFoRCw0QkFGRixDQVBGLEVBV0UsbURBRUU7QUFBRyxnQkFBSSxFQUFDO0FBQVIsb0NBRkYsQ0FYRixDQVJXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjcxZGZhOTZkMDk1NmRlNmU5NWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lmxlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvQ2hyaXNDaGFuMTMnKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zaWRlYmFyfT5cclxuICAgICAgPHNwYW4+wrcmbmJzcDvlj4vmg4Xpk77mjqUmbmJzcDvCtzwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9lcHMuaW5rXCIgdGFyZ2V0PVwiX25ld1wiPmVwcy5pbms8L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxzcGFuPsKpMjAyMCBDaHJpc0NoYW48L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIFBvd2VyZWQmbmJzcDtieSZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hyaXNDaGFuMTNcIiB0YXJnZXQ9XCJfbmV3XCI+QENocmlzQ2hhbjEzPC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIOiBlOezu+aIkSZuYnNwOzombmJzcDtcclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNocmlzY2hhbjEyMTNAcXEuY29tXCI+Y2hyaXNjaGFuMTIxM0BxcS5jb208L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=