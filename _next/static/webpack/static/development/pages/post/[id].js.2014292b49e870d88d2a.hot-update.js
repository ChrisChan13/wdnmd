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
      console.log(result); // result.map((item: any) => {
      //   const { target } = item;
      //   const attribute = target.getAttribute('data-attribute');
      //   if (attribute) {
      //     const value = target.getAttribute(`data-${attribute}`);
      //     target.setAttribute(attribute, value);
      //   }
      //   observer.unobserve(target);
      //   return target;
      // });
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
      item.setAttribute(attribute, '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImF0dHJpYnV0ZSIsInZhbHVlIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHVjtBQUNILE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsaUJBQUwsR0FBeUIsQ0FBeEM7QUFBQSxLQUFmLENBQWY7O0FBQ0EsUUFBSUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWixFQURxQixDQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0YsR0FmZ0IsQ0FBakI7QUFnQkFWLE9BQUssQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQUwsQ0FBd0JlLE9BQXhCLENBQWdDLFVBQUNMLElBQUQsRUFBZTtBQUM3QyxRQUFJTSxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBSixXQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjs7QUFDQSxZQUFRQSxJQUFJLENBQUNRLFNBQWI7QUFDRSxXQUFLLFFBQUw7QUFDQSxXQUFLLE9BQUw7QUFDRUYsaUJBQVMsR0FBRyxLQUFaO0FBQ0FDLGFBQUssR0FBR1AsSUFBSSxDQUFDUyxZQUFMLENBQWtCSCxTQUFsQixDQUFSO0FBQ0E7O0FBQ0Y7QUFORjs7QUFRQSxRQUFJQSxTQUFKLEVBQWU7QUFDYk4sVUFBSSxDQUFDVSxZQUFMLENBQWtCSixTQUFsQixFQUE2QixFQUE3QjtBQUNBTixVQUFJLENBQUNVLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DSixTQUFwQztBQUNBTixVQUFJLENBQUNVLFlBQUwsZ0JBQTBCSixTQUExQixHQUF1Q0MsS0FBdkM7QUFDQVosY0FBUSxDQUFDZ0IsT0FBVCxDQUFpQlgsSUFBakI7QUFDRDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FuQkQ7QUFvQkQsQ0F4Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuMjAxNDI5MmI0OWU4NzBkODhkMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXJ5ID0gKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudDogYW55KSA9PiBBcnJheS5mcm9tKFxyXG4gIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgcGFyZW50OiBhbnksXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChjaGFuZ2VzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNoYW5nZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaW50ZXJzZWN0aW9uUmF0aW8gPiAwKTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAvLyByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgLy8gICBjb25zdCB7IHRhcmdldCB9ID0gaXRlbTtcclxuICAgICAgLy8gICBjb25zdCBhdHRyaWJ1dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAvLyAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgLy8gICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgLy8gICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgICAvLyAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQpLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgbGV0IGF0dHJpYnV0ZSA9ICcnO1xyXG4gICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIHN3aXRjaCAoaXRlbS5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaWZyYW1lJzpcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScsIGF0dHJpYnV0ZSk7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWAsIHZhbHVlKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9