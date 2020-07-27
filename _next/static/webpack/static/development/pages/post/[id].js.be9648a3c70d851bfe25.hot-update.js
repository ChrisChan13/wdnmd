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
      item.setAttribute('src', 'data:image/svg+xml;utf8,<?xml version=&quot;1.0&quot;?><svg xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot; width=&quot;1280&quot; height=&quot;668&quot;></svg>');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwibGVuZ3RoIiwibWFwIiwidGFyZ2V0IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwibG9jYWxOYW1lIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHYkssT0FIYSxFQUlWO0FBQ0gsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxjQUFwQjtBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUFBLFlBQ2hCSSxNQURnQixHQUNMSixJQURLLENBQ2hCSSxNQURnQjtBQUV4QixZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixnQkFBcEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsZ0JBQTRCRCxTQUE1QixFQUFkO0FBQ0FELGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCRSxLQUEvQjtBQUNBSCxnQkFBTSxDQUFDSyxlQUFQLENBQXVCLGdCQUF2QjtBQUNBTCxnQkFBTSxDQUFDSyxlQUFQLGdCQUErQkosU0FBL0I7QUFDRDs7QUFDRFYsZ0JBQVEsQ0FBQ2UsU0FBVCxDQUFtQk4sTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FYRDtBQVlEO0FBQ0YsR0FoQmdCLEVBZ0JkVixPQWhCYyxDQUFqQjtBQWlCQVAsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3QnNCLE9BQXhCLENBQWdDLFVBQUNYLElBQUQsRUFBZTtBQUM3QyxRQUFNSyxTQUFTLEdBQUcsS0FBbEI7QUFDQSxRQUFNRSxLQUFLLEdBQUdQLElBQUksQ0FBQ00sWUFBTCxDQUFrQkQsU0FBbEIsQ0FBZDs7QUFDQSxRQUFJTCxJQUFJLENBQUNZLFNBQUwsS0FBbUIsS0FBdkIsRUFBOEI7QUFDNUJaLFVBQUksQ0FBQ1EsWUFBTCxDQUFrQixLQUFsQixFQUF5Qix1TEFBekI7QUFDRCxLQUZELE1BRU87QUFDTFIsVUFBSSxDQUFDUyxlQUFMLENBQXFCSixTQUFyQjtBQUNEOztBQUNETCxRQUFJLENBQUNRLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DSCxTQUFwQztBQUNBTCxRQUFJLENBQUNRLFlBQUwsZ0JBQTBCSCxTQUExQixHQUF1Q0UsS0FBdkM7QUFDQVosWUFBUSxDQUFDa0IsT0FBVCxDQUFpQmIsSUFBakI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FaRDtBQWFELENBbkNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLmJlOTY0OGEzYzcwZDg1MWJmZTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudD86IGFueSxcclxuICBvcHRpb25zPzoge30sXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChjaGFuZ2VzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNoYW5nZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBvcHRpb25zKTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgaWYgKGl0ZW0ubG9jYWxOYW1lID09PSAnaW1nJykge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDw/eG1sIHZlcnNpb249JnF1b3Q7MS4wJnF1b3Q7Pz48c3ZnIHhtbG5zPSZxdW90O2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJnF1b3Q7IHZlcnNpb249JnF1b3Q7MS4xJnF1b3Q7IHdpZHRoPSZxdW90OzEyODAmcXVvdDsgaGVpZ2h0PSZxdW90OzY2OCZxdW90Oz48L3N2Zz4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICB9XHJcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9