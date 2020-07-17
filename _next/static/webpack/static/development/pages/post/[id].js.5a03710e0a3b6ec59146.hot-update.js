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
      result.map(function (item) {
        var target = item.target;
        var attribute = target.getAttribute('data-attribute');

        if (attribute) {
          var value = target.getAttribute("data-".concat(attribute));
          target.setAttribute(attribute, value);
        }

        observer.unobserve(target);
        return target;
      });
    }
  });
  query(selector, parent).forEach(function (item) {
    var attribute = '';
    var value = '';
    var target = item.target;

    switch (target.localName) {
      case 'iframe':
      case 'image':
        attribute = 'src';
        value = target.getAttribute(attribute);
        break;

      default:
    }

    if (attribute) {
      target.setAttribute(attribute, '');
      target.setAttribute('data-attribute', attribute);
      target.setAttribute("data-".concat(attribute), value);
      observer.observe(target);
    }

    return target;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJtYXAiLCJ0YXJnZXQiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInVub2JzZXJ2ZSIsImZvckVhY2giLCJsb2NhbE5hbWUiLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFtQkMsTUFBbkI7QUFBQSxTQUFtQ0MsS0FBSyxDQUFDQyxJQUFOLENBQy9DLENBQUNGLE1BQU0sSUFBSUcsUUFBWCxFQUFxQkMsZ0JBQXJCLENBQXNDTCxRQUF0QyxDQUQrQyxDQUFuQztBQUFBLENBQWQ7O0FBSWUseUVBQ2JBLFFBRGEsRUFFYkMsTUFGYSxFQUdWO0FBQ0gsTUFBTUssUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxpQkFBTCxHQUF5QixDQUF4QztBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUFBLFlBQ2hCSSxNQURnQixHQUNMSixJQURLLENBQ2hCSSxNQURnQjtBQUV4QixZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixnQkFBcEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsZ0JBQTRCRCxTQUE1QixFQUFkO0FBQ0FELGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCRSxLQUEvQjtBQUNEOztBQUNEWixnQkFBUSxDQUFDYyxTQUFULENBQW1CTCxNQUFuQjtBQUNBLGVBQU9BLE1BQVA7QUFDRCxPQVREO0FBVUQ7QUFDRixHQWRnQixDQUFqQjtBQWVBaEIsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3Qm9CLE9BQXhCLENBQWdDLFVBQUNWLElBQUQsRUFBZTtBQUM3QyxRQUFJSyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJRSxLQUFLLEdBQUcsRUFBWjtBQUY2QyxRQUdyQ0gsTUFIcUMsR0FHMUJKLElBSDBCLENBR3JDSSxNQUhxQzs7QUFJN0MsWUFBUUEsTUFBTSxDQUFDTyxTQUFmO0FBQ0UsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0VOLGlCQUFTLEdBQUcsS0FBWjtBQUNBRSxhQUFLLEdBQUdILE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQkQsU0FBcEIsQ0FBUjtBQUNBOztBQUNGO0FBTkY7O0FBUUEsUUFBSUEsU0FBSixFQUFlO0FBQ2JELFlBQU0sQ0FBQ0ksWUFBUCxDQUFvQkgsU0FBcEIsRUFBK0IsRUFBL0I7QUFDQUQsWUFBTSxDQUFDSSxZQUFQLENBQW9CLGdCQUFwQixFQUFzQ0gsU0FBdEM7QUFDQUQsWUFBTSxDQUFDSSxZQUFQLGdCQUE0QkgsU0FBNUIsR0FBeUNFLEtBQXpDO0FBQ0FaLGNBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJSLE1BQWpCO0FBQ0Q7O0FBQ0QsV0FBT0EsTUFBUDtBQUNELEdBbkJEO0FBb0JELENBdkNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLjVhMDM3MTBlMGEzYjZlYzU5MTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudDogYW55LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMCk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGxldCBhdHRyaWJ1dGUgPSAnJztcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICBzd2l0Y2ggKHRhcmdldC5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaWZyYW1lJzpcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xyXG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsIGF0dHJpYnV0ZSk7XHJcbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9