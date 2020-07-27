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

/* harmony default export */ __webpack_exports__["default"] = (function (selector, parent, options) {
  var observer = new IntersectionObserver(function (changes) {
    var result = changes.filter(function (item) {
      return item.isIntersecting;
    });
    console.log(result);

    if (result.length > 0) {
      result.map(function (item) {
        var target = item.target;
        var attribute = target.getAttribute('data-attribute');

        if (attribute) {
          var value = target.getAttribute("data-".concat(attribute));
          target.setAttribute(attribute, value);
          target.removeAttribute('data-attribute');
          target.removeAttribute("data-".concat(attribute));
        }

        observer.unobserve(target);
        return target;
      });
    }
  }, options);
  query(selector, parent).forEach(function (item) {
    var attribute = 'src';
    var value = item.getAttribute(attribute);

    if (item.localName === 'img') {
      item.setAttribute('src', 'data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="1183"></svg>');
    } else {
      item.removeAttribute(attribute);
    }

    item.setAttribute('data-attribute', attribute);
    item.setAttribute("data-".concat(attribute), value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInRhcmdldCIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidW5vYnNlcnZlIiwiZm9yRWFjaCIsImxvY2FsTmFtZSIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQW1CQyxNQUFuQjtBQUFBLFNBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FDL0MsQ0FBQ0YsTUFBTSxJQUFJRyxRQUFYLEVBQXFCQyxnQkFBckIsQ0FBc0NMLFFBQXRDLENBRCtDLENBQW5DO0FBQUEsQ0FBZDs7QUFJZSx5RUFDYkEsUUFEYSxFQUViQyxNQUZhLEVBR2JLLE9BSGEsRUFJVjtBQUNILE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7O0FBQ0EsUUFBSUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTixZQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDTCxJQUFELEVBQWU7QUFBQSxZQUNoQk0sTUFEZ0IsR0FDTE4sSUFESyxDQUNoQk0sTUFEZ0I7QUFFeEIsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsZ0JBQXBCLENBQWxCOztBQUNBLFlBQUlELFNBQUosRUFBZTtBQUNiLGNBQU1FLEtBQUssR0FBR0gsTUFBTSxDQUFDRSxZQUFQLGdCQUE0QkQsU0FBNUIsRUFBZDtBQUNBRCxnQkFBTSxDQUFDSSxZQUFQLENBQW9CSCxTQUFwQixFQUErQkUsS0FBL0I7QUFDQUgsZ0JBQU0sQ0FBQ0ssZUFBUCxDQUF1QixnQkFBdkI7QUFDQUwsZ0JBQU0sQ0FBQ0ssZUFBUCxnQkFBK0JKLFNBQS9CO0FBQ0Q7O0FBQ0RaLGdCQUFRLENBQUNpQixTQUFULENBQW1CTixNQUFuQjtBQUNBLGVBQU9BLE1BQVA7QUFDRCxPQVhEO0FBWUQ7QUFDRixHQWpCZ0IsRUFpQmRaLE9BakJjLENBQWpCO0FBa0JBUCxPQUFLLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxDQUFMLENBQXdCd0IsT0FBeEIsQ0FBZ0MsVUFBQ2IsSUFBRCxFQUFlO0FBQzdDLFFBQU1PLFNBQVMsR0FBRyxLQUFsQjtBQUNBLFFBQU1FLEtBQUssR0FBR1QsSUFBSSxDQUFDUSxZQUFMLENBQWtCRCxTQUFsQixDQUFkOztBQUNBLFFBQUlQLElBQUksQ0FBQ2MsU0FBTCxLQUFtQixLQUF2QixFQUE4QjtBQUM1QmQsVUFBSSxDQUFDVSxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLHNJQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMVixVQUFJLENBQUNXLGVBQUwsQ0FBcUJKLFNBQXJCO0FBQ0Q7O0FBQ0RQLFFBQUksQ0FBQ1UsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0NILFNBQXBDO0FBQ0FQLFFBQUksQ0FBQ1UsWUFBTCxnQkFBMEJILFNBQTFCLEdBQXVDRSxLQUF2QztBQUNBZCxZQUFRLENBQUNvQixPQUFULENBQWlCZixJQUFqQjtBQUNBLFdBQU9BLElBQVA7QUFDRCxHQVpEO0FBYUQsQ0FwQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuMDRhNTY1NDI1Zjk2OTc1MWUxNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXJ5ID0gKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudDogYW55KSA9PiBBcnJheS5mcm9tKFxyXG4gIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgcGFyZW50PzogYW55LFxyXG4gIG9wdGlvbnM/OiB7fSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBvcHRpb25zKTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgaWYgKGl0ZW0ubG9jYWxOYW1lID09PSAnaW1nJykge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDw/eG1sIHZlcnNpb249XCIxLjBcIj8+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMTI4MFwiIGhlaWdodD1cIjExODNcIj48L3N2Zz4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICB9XHJcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9