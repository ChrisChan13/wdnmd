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
        var attribute = item.getAttribute('data-attribute');

        if (attribute) {
          var value = item.getAttribute("data-".concat(attribute));
          item.setAttribute(attribute, value);
        }

        observer.unobserve(item.target);
        return item.target;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJtYXAiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInVub2JzZXJ2ZSIsInRhcmdldCIsImZvckVhY2giLCJsb2NhbE5hbWUiLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFtQkMsTUFBbkI7QUFBQSxTQUFtQ0MsS0FBSyxDQUFDQyxJQUFOLENBQy9DLENBQUNGLE1BQU0sSUFBSUcsUUFBWCxFQUFxQkMsZ0JBQXJCLENBQXNDTCxRQUF0QyxDQUQrQyxDQUFuQztBQUFBLENBQWQ7O0FBSWUseUVBQ2JBLFFBRGEsRUFFYkMsTUFGYSxFQUdWO0FBQ0gsTUFBTUssUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxpQkFBTCxHQUF5QixDQUF4QztBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUN4QixZQUFNSSxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHTixJQUFJLENBQUNLLFlBQUwsZ0JBQTBCRCxTQUExQixFQUFkO0FBQ0FKLGNBQUksQ0FBQ08sWUFBTCxDQUFrQkgsU0FBbEIsRUFBNkJFLEtBQTdCO0FBQ0Q7O0FBQ0RYLGdCQUFRLENBQUNhLFNBQVQsQ0FBbUJSLElBQUksQ0FBQ1MsTUFBeEI7QUFDQSxlQUFPVCxJQUFJLENBQUNTLE1BQVo7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQWJnQixDQUFqQjtBQWNBckIsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3Qm9CLE9BQXhCLENBQWdDLFVBQUNWLElBQUQsRUFBZTtBQUM3QyxRQUFJSSxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJRSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxZQUFRTixJQUFJLENBQUNXLFNBQWI7QUFDRSxXQUFLLFFBQUw7QUFDQSxXQUFLLE9BQUw7QUFDRVAsaUJBQVMsR0FBRyxLQUFaO0FBQ0FFLGFBQUssR0FBR04sSUFBSSxDQUFDSyxZQUFMLENBQWtCRCxTQUFsQixDQUFSO0FBQ0E7O0FBQ0Y7QUFORjs7QUFRQSxRQUFJQSxTQUFKLEVBQWU7QUFDYkosVUFBSSxDQUFDTyxZQUFMLENBQWtCSCxTQUFsQixFQUE2QixFQUE3QjtBQUNBSixVQUFJLENBQUNPLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DSCxTQUFwQztBQUNBSixVQUFJLENBQUNPLFlBQUwsZ0JBQTBCSCxTQUExQixHQUF1Q0UsS0FBdkM7QUFDQVgsY0FBUSxDQUFDaUIsT0FBVCxDQUFpQlosSUFBakI7QUFDRDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FsQkQ7QUFtQkQsQ0FyQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuOWU5OTExZmNhY2Y1MmNmMDQyNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXJ5ID0gKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudDogYW55KSA9PiBBcnJheS5mcm9tKFxyXG4gIChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgcGFyZW50OiBhbnksXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChjaGFuZ2VzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNoYW5nZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaW50ZXJzZWN0aW9uUmF0aW8gPiAwKTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShpdGVtLnRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGxldCBhdHRyaWJ1dGUgPSAnJztcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgc3dpdGNoIChpdGVtLmxvY2FsTmFtZSkge1xyXG4gICAgICBjYXNlICdpZnJhbWUnOlxyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgYXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=