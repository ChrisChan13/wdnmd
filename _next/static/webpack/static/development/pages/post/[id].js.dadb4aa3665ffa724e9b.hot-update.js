webpackHotUpdate("static\\development\\pages\\post\\[id].js",{

/***/ "./utils/lazyload.ts":
/*!***************************!*\
  !*** ./utils/lazyload.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var query = function query(selector, parent) {
  return Array.from((parent || document).querySelectorAll(selector));
};

/* harmony default export */ __webpack_exports__["default"] = (function (selector, parent) {
  var observer = new IntersectionObserver(function (changes) {
    var result = changes.filter(function (item) {
      return item.intersectionRatio > 0;
    });

    if (result.length > 0) {
      after(result.map(function (item) {
        observer.unobserve(item.target);
        return item.target;
      }));
    }
  });
  query(selector, parent).forEach(function (item) {
    var attribute = '';
    var value = '';

    switch (item.localName) {
      case 'iframe':
      case 'image':
        attribute = 'src';
        value = item.getAttribute(attribute);
        break;

      default:
    }

    observer.observe(item);
    return item;
  });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJhZnRlciIsIm1hcCIsInVub2JzZXJ2ZSIsInRhcmdldCIsImZvckVhY2giLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQW1CQyxNQUFuQjtBQUFBLFNBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FDL0MsQ0FBQ0YsTUFBTSxJQUFJRyxRQUFYLEVBQXFCQyxnQkFBckIsQ0FBc0NMLFFBQXRDLENBRCtDLENBQW5DO0FBQUEsQ0FBZDs7QUFJZSx5RUFDYkEsUUFEYSxFQUViQyxNQUZhLEVBR1Y7QUFDSCxNQUFNSyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBQ0MsT0FBRCxFQUFrQjtBQUMxRCxRQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxhQUFlQSxJQUFJLENBQUNDLGlCQUFMLEdBQXlCLENBQXhDO0FBQUEsS0FBZixDQUFmOztBQUNBLFFBQUlILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQkMsV0FBSyxDQUFDTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDSixJQUFELEVBQWU7QUFDOUJMLGdCQUFRLENBQUNVLFNBQVQsQ0FBbUJMLElBQUksQ0FBQ00sTUFBeEI7QUFDQSxlQUFPTixJQUFJLENBQUNNLE1BQVo7QUFDRCxPQUhLLENBQUQsQ0FBTDtBQUlEO0FBQ0YsR0FSZ0IsQ0FBakI7QUFTQWxCLE9BQUssQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQUwsQ0FBd0JpQixPQUF4QixDQUFnQyxVQUFDUCxJQUFELEVBQWU7QUFDN0MsUUFBSVEsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsWUFBUVQsSUFBSSxDQUFDVSxTQUFiO0FBQ0UsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0VGLGlCQUFTLEdBQUcsS0FBWjtBQUNBQyxhQUFLLEdBQUdULElBQUksQ0FBQ1csWUFBTCxDQUFrQkgsU0FBbEIsQ0FBUjtBQUNBOztBQUNGO0FBTkY7O0FBUUFiLFlBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJaLElBQWpCO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBYkQ7QUFjRCxDQTNCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy5kYWRiNGFhMzY2NWZmYTcyNGU5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnkgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50OiBhbnkpID0+IEFycmF5LmZyb20oXHJcbiAgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgc2VsZWN0b3I6IHN0cmluZyxcclxuICBwYXJlbnQ6IGFueSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFmdGVyKHJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShpdGVtLnRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0O1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBsZXQgYXR0cmlidXRlID0gJyc7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIHN3aXRjaCAoaXRlbS5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaWZyYW1lJzpcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==