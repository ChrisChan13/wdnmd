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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwibGVuZ3RoIiwibWFwIiwidGFyZ2V0IiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1bm9ic2VydmUiLCJmb3JFYWNoIiwibG9jYWxOYW1lIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHYkssT0FIYSxFQUlWO0FBQ0gsTUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxjQUFwQjtBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUFBLFlBQ2hCSSxNQURnQixHQUNMSixJQURLLENBQ2hCSSxNQURnQjtBQUV4QixZQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixnQkFBcEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsZ0JBQTRCRCxTQUE1QixFQUFkO0FBQ0FELGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCRSxLQUEvQjtBQUNBSCxnQkFBTSxDQUFDSyxlQUFQLENBQXVCLGdCQUF2QjtBQUNBTCxnQkFBTSxDQUFDSyxlQUFQLGdCQUErQkosU0FBL0I7QUFDRDs7QUFDRFYsZ0JBQVEsQ0FBQ2UsU0FBVCxDQUFtQk4sTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FYRDtBQVlEO0FBQ0YsR0FoQmdCLEVBZ0JkVixPQWhCYyxDQUFqQjtBQWlCQVAsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3QnNCLE9BQXhCLENBQWdDLFVBQUNYLElBQUQsRUFBZTtBQUM3QyxRQUFJSyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJRSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxZQUFRUCxJQUFJLENBQUNZLFNBQWI7QUFDRSxXQUFLLFFBQUw7QUFDQSxXQUFLLEtBQUw7QUFDRVAsaUJBQVMsR0FBRyxLQUFaO0FBQ0FFLGFBQUssR0FBR1AsSUFBSSxDQUFDTSxZQUFMLENBQWtCRCxTQUFsQixDQUFSO0FBQ0E7O0FBQ0Y7QUFORjs7QUFRQSxRQUFJQSxTQUFKLEVBQWU7QUFDYkwsVUFBSSxDQUFDUyxlQUFMLENBQXFCSixTQUFyQjtBQUNBTCxVQUFJLENBQUNRLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DSCxTQUFwQztBQUNBTCxVQUFJLENBQUNRLFlBQUwsZ0JBQTBCSCxTQUExQixHQUF1Q0UsS0FBdkM7QUFDQVosY0FBUSxDQUFDa0IsT0FBVCxDQUFpQmIsSUFBakI7QUFDRDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FsQkQ7QUFtQkQsQ0F6Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuZjgzYzdiOWY3NjQ0YTIzZWU0ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXJ5ID0gKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudDogYW55KSA9PiBBcnJheS5mcm9tKFxyXG4gIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgcGFyZW50PzogYW55LFxyXG4gIG9wdGlvbnM/OiB7fSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIG9wdGlvbnMpO1xyXG4gIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQpLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgbGV0IGF0dHJpYnV0ZSA9ICcnO1xyXG4gICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICBzd2l0Y2ggKGl0ZW0ubG9jYWxOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XHJcbiAgICAgIGNhc2UgJ2ltZyc6XHJcbiAgICAgICAgYXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gLCB2YWx1ZSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==