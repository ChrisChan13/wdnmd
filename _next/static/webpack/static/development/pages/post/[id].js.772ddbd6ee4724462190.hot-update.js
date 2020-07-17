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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJtYXAiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInVub2JzZXJ2ZSIsInRhcmdldCIsImZvckVhY2giLCJsb2NhbE5hbWUiLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFtQkMsTUFBbkI7QUFBQSxTQUFtQ0MsS0FBSyxDQUFDQyxJQUFOLENBQy9DLENBQUNGLE1BQU0sSUFBSUcsUUFBWCxFQUFxQkMsZ0JBQXJCLENBQXNDTCxRQUF0QyxDQUQrQyxDQUFuQztBQUFBLENBQWQ7O0FBSWUseUVBQ2JBLFFBRGEsRUFFYkMsTUFGYSxFQUdWO0FBQ0gsTUFBTUssUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBa0I7QUFDMUQsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDQyxpQkFBTCxHQUF5QixDQUF4QztBQUFBLEtBQWYsQ0FBZjs7QUFDQSxRQUFJSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJKLFlBQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNILElBQUQsRUFBZTtBQUN4QixZQUFNSSxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbEI7O0FBQ0EsWUFBSUQsU0FBSixFQUFlO0FBQ2IsY0FBTUUsS0FBSyxHQUFHTixJQUFJLENBQUNLLFlBQUwsZ0JBQTBCRCxTQUExQixFQUFkO0FBQ0FKLGNBQUksQ0FBQ08sWUFBTCxDQUFrQkgsU0FBbEIsRUFBNkJFLEtBQTdCO0FBQ0Q7O0FBQ0RYLGdCQUFRLENBQUNhLFNBQVQsQ0FBbUJSLElBQUksQ0FBQ1MsTUFBeEI7QUFDQSxlQUFPVCxJQUFJLENBQUNTLE1BQVo7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQWJnQixDQUFqQjtBQWNBckIsT0FBSyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBTCxDQUF3Qm9CLE9BQXhCLENBQWdDLFVBQUNWLElBQUQsRUFBZTtBQUM3QyxRQUFJSSxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJRSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxZQUFRTixJQUFJLENBQUNXLFNBQWI7QUFDRSxXQUFLLFFBQUw7QUFDQSxXQUFLLE9BQUw7QUFDRVAsaUJBQVMsR0FBRyxLQUFaO0FBQ0FFLGFBQUssR0FBR04sSUFBSSxDQUFDSyxZQUFMLENBQWtCRCxTQUFsQixDQUFSO0FBQ0E7O0FBQ0Y7QUFORjs7QUFRQSxRQUFJQSxTQUFKLEVBQWU7QUFDYkosVUFBSSxDQUFDTyxZQUFMLENBQWtCLGdCQUFsQixFQUFvQ0gsU0FBcEM7QUFDQUosVUFBSSxDQUFDTyxZQUFMLGdCQUEwQkgsU0FBMUIsR0FBdUNFLEtBQXZDO0FBQ0FYLGNBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJaLElBQWpCO0FBQ0Q7O0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBakJEO0FBa0JELENBcENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLjc3MmRkYmQ2ZWU0NzI0NDYyMTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudDogYW55LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMCk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoaXRlbS50YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRhcmdldDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBsZXQgYXR0cmlidXRlID0gJyc7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIHN3aXRjaCAoaXRlbS5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaWZyYW1lJzpcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=