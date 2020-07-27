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
    var attribute = '';
    var value = '';

    switch (item.localName) {
      case 'iframe':
      case 'img':
        attribute = 'src';
        value = item.getAttribute(attribute);
        break;

      default:
    }

    if (attribute) {
      item.removeAttribute(attribute);
      item.setAttribute('data-attribute', attribute);
      item.setAttribute("data-".concat(attribute), value);
      observer.observe(item);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInRhcmdldCIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidW5vYnNlcnZlIiwiZm9yRWFjaCIsImxvY2FsTmFtZSIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQW1CQyxNQUFuQjtBQUFBLFNBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FDL0MsQ0FBQ0YsTUFBTSxJQUFJRyxRQUFYLEVBQXFCQyxnQkFBckIsQ0FBc0NMLFFBQXRDLENBRCtDLENBQW5DO0FBQUEsQ0FBZDs7QUFJZSx5RUFDYkEsUUFEYSxFQUViQyxNQUZhLEVBR2JLLE9BSGEsRUFJVjtBQUNILE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7O0FBQ0EsUUFBSUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTixZQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDTCxJQUFELEVBQWU7QUFBQSxZQUNoQk0sTUFEZ0IsR0FDTE4sSUFESyxDQUNoQk0sTUFEZ0I7QUFFeEIsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsZ0JBQXBCLENBQWxCOztBQUNBLFlBQUlELFNBQUosRUFBZTtBQUNiLGNBQU1FLEtBQUssR0FBR0gsTUFBTSxDQUFDRSxZQUFQLGdCQUE0QkQsU0FBNUIsRUFBZDtBQUNBRCxnQkFBTSxDQUFDSSxZQUFQLENBQW9CSCxTQUFwQixFQUErQkUsS0FBL0I7QUFDQUgsZ0JBQU0sQ0FBQ0ssZUFBUCxDQUF1QixnQkFBdkI7QUFDQUwsZ0JBQU0sQ0FBQ0ssZUFBUCxnQkFBK0JKLFNBQS9CO0FBQ0Q7O0FBQ0RaLGdCQUFRLENBQUNpQixTQUFULENBQW1CTixNQUFuQjtBQUNBLGVBQU9BLE1BQVA7QUFDRCxPQVhEO0FBWUQ7QUFDRixHQWpCZ0IsRUFpQmRaLE9BakJjLENBQWpCO0FBa0JBUCxPQUFLLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxDQUFMLENBQXdCd0IsT0FBeEIsQ0FBZ0MsVUFBQ2IsSUFBRCxFQUFlO0FBQzdDLFFBQUlPLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFFBQUlFLEtBQUssR0FBRyxFQUFaOztBQUNBLFlBQVFULElBQUksQ0FBQ2MsU0FBYjtBQUNFLFdBQUssUUFBTDtBQUNBLFdBQUssS0FBTDtBQUNFUCxpQkFBUyxHQUFHLEtBQVo7QUFDQUUsYUFBSyxHQUFHVCxJQUFJLENBQUNRLFlBQUwsQ0FBa0JELFNBQWxCLENBQVI7QUFDQTs7QUFDRjtBQU5GOztBQVFBLFFBQUlBLFNBQUosRUFBZTtBQUNiUCxVQUFJLENBQUNXLGVBQUwsQ0FBcUJKLFNBQXJCO0FBQ0FQLFVBQUksQ0FBQ1UsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0NILFNBQXBDO0FBQ0FQLFVBQUksQ0FBQ1UsWUFBTCxnQkFBMEJILFNBQTFCLEdBQXVDRSxLQUF2QztBQUNBZCxjQUFRLENBQUNvQixPQUFULENBQWlCZixJQUFqQjtBQUNEOztBQUNELFdBQU9BLElBQVA7QUFDRCxHQWxCRDtBQW1CRCxDQTFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy4wYmY3MDBjNjIzYjQ5YWZhZjJjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnkgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50OiBhbnkpID0+IEFycmF5LmZyb20oXHJcbiAgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgc2VsZWN0b3I6IHN0cmluZyxcclxuICBwYXJlbnQ/OiBhbnksXHJcbiAgb3B0aW9ucz86IHt9LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmlzSW50ZXJzZWN0aW5nKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIG9wdGlvbnMpO1xyXG4gIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQpLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgbGV0IGF0dHJpYnV0ZSA9ICcnO1xyXG4gICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICBzd2l0Y2ggKGl0ZW0ubG9jYWxOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XHJcbiAgICAgIGNhc2UgJ2ltZyc6XHJcbiAgICAgICAgYXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gLCB2YWx1ZSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==