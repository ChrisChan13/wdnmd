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
      return item.isIntersecting;
    });

    if (result.length > 0) {
      result.map(function (item) {
        console.log(item);
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
    console.log(item);

    switch (item.localName) {
      case 'iframe':
      case 'image':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaXNJbnRlcnNlY3RpbmciLCJsZW5ndGgiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwibG9jYWxOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHVjtBQUNILE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7O0FBQ0EsUUFBSUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCSixZQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDSCxJQUFELEVBQWU7QUFDeEJJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBRHdCLFlBRWhCTSxNQUZnQixHQUVMTixJQUZLLENBRWhCTSxNQUZnQjtBQUd4QixZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixnQkFBcEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsZ0JBQTRCRCxTQUE1QixFQUFkO0FBQ0FELGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCRSxLQUEvQjtBQUNEOztBQUNEZCxnQkFBUSxDQUFDZ0IsU0FBVCxDQUFtQkwsTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FWRDtBQVdEO0FBQ0YsR0FmZ0IsQ0FBakI7QUFnQkFsQixPQUFLLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxDQUFMLENBQXdCc0IsT0FBeEIsQ0FBZ0MsVUFBQ1osSUFBRCxFQUFlO0FBQzdDLFFBQUlPLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFFBQUlFLEtBQUssR0FBRyxFQUFaO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaOztBQUNBLFlBQVFBLElBQUksQ0FBQ2EsU0FBYjtBQUNFLFdBQUssUUFBTDtBQUNBLFdBQUssT0FBTDtBQUNFTixpQkFBUyxHQUFHLEtBQVo7QUFDQUUsYUFBSyxHQUFHVCxJQUFJLENBQUNRLFlBQUwsQ0FBa0JELFNBQWxCLENBQVI7QUFDQTs7QUFDRjtBQU5GOztBQVFBLFFBQUlBLFNBQUosRUFBZTtBQUNiUCxVQUFJLENBQUNjLGVBQUwsQ0FBcUJQLFNBQXJCO0FBQ0FQLFVBQUksQ0FBQ1UsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0NILFNBQXBDO0FBQ0FQLFVBQUksQ0FBQ1UsWUFBTCxnQkFBMEJILFNBQTFCLEdBQXVDRSxLQUF2QztBQUNBZCxjQUFRLENBQUNvQixPQUFULENBQWlCZixJQUFqQjtBQUNEOztBQUNELFdBQU9BLElBQVA7QUFDRCxHQW5CRDtBQW9CRCxDQXhDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy5jZWQ2OTUxMmRiMDc4OGQ3ZWIyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnkgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50OiBhbnkpID0+IEFycmF5LmZyb20oXHJcbiAgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgc2VsZWN0b3I6IHN0cmluZyxcclxuICBwYXJlbnQ6IGFueSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGxldCBhdHRyaWJ1dGUgPSAnJztcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBzd2l0Y2ggKGl0ZW0ubG9jYWxOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XHJcbiAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICBhdHRyaWJ1dGUgPSAnc3JjJztcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsIGF0dHJpYnV0ZSk7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWAsIHZhbHVlKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9