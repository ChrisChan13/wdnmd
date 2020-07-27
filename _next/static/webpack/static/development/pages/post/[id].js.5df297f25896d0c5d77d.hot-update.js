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
    var attribute = '';
    var value = '';

    switch (item.localName) {
      case 'img':
        item.setAttribute('height', '999');

      case 'iframe':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwibGVuZ3RoIiwibWFwIiwidGFyZ2V0IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwibG9jYWxOYW1lIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHYkssT0FIYSxFQUlWO0FBQ0gsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxjQUFwQjtBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUFBLFlBQ2hCSSxNQURnQixHQUNMSixJQURLLENBQ2hCSSxNQURnQjtBQUV4QixZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixnQkFBcEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsZ0JBQTRCRCxTQUE1QixFQUFkO0FBQ0FELGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCRSxLQUEvQjtBQUNBSCxnQkFBTSxDQUFDSyxlQUFQLENBQXVCLGdCQUF2QjtBQUNBTCxnQkFBTSxDQUFDSyxlQUFQLGdCQUErQkosU0FBL0I7QUFDRDs7QUFDRFYsZ0JBQVEsQ0FBQ2UsU0FBVCxDQUFtQk4sTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FYRDtBQVlEO0FBQ0YsR0FoQmdCLEVBZ0JkVixPQWhCYyxDQUFqQjtBQWlCQVAsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3QnNCLE9BQXhCLENBQWdDLFVBQUNYLElBQUQsRUFBZTtBQUM3QyxRQUFJSyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJRSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxZQUFRUCxJQUFJLENBQUNZLFNBQWI7QUFDRSxXQUFLLEtBQUw7QUFDRVosWUFBSSxDQUFDUSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLEtBQTVCOztBQUNGLFdBQUssUUFBTDtBQUNFSCxpQkFBUyxHQUFHLEtBQVo7QUFDQUUsYUFBSyxHQUFHUCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JELFNBQWxCLENBQVI7QUFDQTs7QUFDRjtBQVBGOztBQVNBLFFBQUlBLFNBQUosRUFBZTtBQUNiTCxVQUFJLENBQUNTLGVBQUwsQ0FBcUJKLFNBQXJCO0FBQ0FMLFVBQUksQ0FBQ1EsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0NILFNBQXBDO0FBQ0FMLFVBQUksQ0FBQ1EsWUFBTCxnQkFBMEJILFNBQTFCLEdBQXVDRSxLQUF2QztBQUNBWixjQUFRLENBQUNrQixPQUFULENBQWlCYixJQUFqQjtBQUNEOztBQUNELFdBQU9BLElBQVA7QUFDRCxHQW5CRDtBQW9CRCxDQTFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy41ZGYyOTdmMjU4OTZkMGM1ZDc3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnkgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50OiBhbnkpID0+IEFycmF5LmZyb20oXHJcbiAgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgc2VsZWN0b3I6IHN0cmluZyxcclxuICBwYXJlbnQ/OiBhbnksXHJcbiAgb3B0aW9ucz86IHt9LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmlzSW50ZXJzZWN0aW5nKTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gaXRlbTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgb3B0aW9ucyk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBsZXQgYXR0cmlidXRlID0gJyc7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIHN3aXRjaCAoaXRlbS5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaW1nJzpcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzk5OScpO1xyXG4gICAgICBjYXNlICdpZnJhbWUnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=