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
          var value = target.getAttribute("data-".concat(attribute)); // target.setAttribute(attribute, value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInRhcmdldCIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwidW5vYnNlcnZlIiwiZm9yRWFjaCIsImxvY2FsTmFtZSIsInNldEF0dHJpYnV0ZSIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQW1CQyxNQUFuQjtBQUFBLFNBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FDL0MsQ0FBQ0YsTUFBTSxJQUFJRyxRQUFYLEVBQXFCQyxnQkFBckIsQ0FBc0NMLFFBQXRDLENBRCtDLENBQW5DO0FBQUEsQ0FBZDs7QUFJZSx5RUFDYkEsUUFEYSxFQUViQyxNQUZhLEVBR2JLLE9BSGEsRUFJVjtBQUNILE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7O0FBQ0EsUUFBSUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTixZQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDTCxJQUFELEVBQWU7QUFBQSxZQUNoQk0sTUFEZ0IsR0FDTE4sSUFESyxDQUNoQk0sTUFEZ0I7QUFFeEIsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsZ0JBQXBCLENBQWxCOztBQUNBLFlBQUlELFNBQUosRUFBZTtBQUNiLGNBQU1FLEtBQUssR0FBR0gsTUFBTSxDQUFDRSxZQUFQLGdCQUE0QkQsU0FBNUIsRUFBZCxDQURhLENBRWI7O0FBQ0FELGdCQUFNLENBQUNJLGVBQVAsQ0FBdUIsZ0JBQXZCO0FBQ0FKLGdCQUFNLENBQUNJLGVBQVAsZ0JBQStCSCxTQUEvQjtBQUNEOztBQUNEWixnQkFBUSxDQUFDZ0IsU0FBVCxDQUFtQkwsTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FYRDtBQVlEO0FBQ0YsR0FqQmdCLEVBaUJkWixPQWpCYyxDQUFqQjtBQWtCQVAsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3QnVCLE9BQXhCLENBQWdDLFVBQUNaLElBQUQsRUFBZTtBQUM3QyxRQUFNTyxTQUFTLEdBQUcsS0FBbEI7QUFDQSxRQUFNRSxLQUFLLEdBQUdULElBQUksQ0FBQ1EsWUFBTCxDQUFrQkQsU0FBbEIsQ0FBZDs7QUFDQSxRQUFJUCxJQUFJLENBQUNhLFNBQUwsS0FBbUIsS0FBdkIsRUFBOEI7QUFDNUJiLFVBQUksQ0FBQ2MsWUFBTCxDQUFrQixLQUFsQixFQUF5Qix1TEFBekI7QUFDRCxLQUZELE1BRU87QUFDTGQsVUFBSSxDQUFDVSxlQUFMLENBQXFCSCxTQUFyQjtBQUNEOztBQUNEUCxRQUFJLENBQUNjLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DUCxTQUFwQztBQUNBUCxRQUFJLENBQUNjLFlBQUwsZ0JBQTBCUCxTQUExQixHQUF1Q0UsS0FBdkM7QUFDQWQsWUFBUSxDQUFDb0IsT0FBVCxDQUFpQmYsSUFBakI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FaRDtBQWFELENBcENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLjJiOWM2NzI3NDZlZDQxMGY3Mjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudD86IGFueSxcclxuICBvcHRpb25zPzoge30sXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChjaGFuZ2VzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNoYW5nZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gaXRlbTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICAgIC8vIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgb3B0aW9ucyk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSAnc3JjJztcclxuICAgIGNvbnN0IHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgIGlmIChpdGVtLmxvY2FsTmFtZSA9PT0gJ2ltZycpIHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8P3htbCB2ZXJzaW9uPSZxdW90OzEuMCZxdW90Oz8+PHN2ZyB4bWxucz0mcXVvdDtodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyZxdW90OyB2ZXJzaW9uPSZxdW90OzEuMSZxdW90OyB3aWR0aD0mcXVvdDsxMjgwJnF1b3Q7IGhlaWdodD0mcXVvdDs2NjgmcXVvdDs+PC9zdmc+Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgfVxyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWAsIHZhbHVlKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==