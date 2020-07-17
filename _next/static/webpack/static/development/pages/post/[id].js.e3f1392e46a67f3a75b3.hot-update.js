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
        console.log(item); // const { target } = item;
        // const attribute = target.getAttribute('data-attribute');
        // if (attribute) {
        //   const value = target.getAttribute(`data-${attribute}`);
        //   target.setAttribute(attribute, value);
        // }
        // observer.unobserve(target);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaXNJbnRlcnNlY3RpbmciLCJsZW5ndGgiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZm9yRWFjaCIsImF0dHJpYnV0ZSIsInZhbHVlIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHVjtBQUNILE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7O0FBQ0EsUUFBSUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCSixZQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDSCxJQUFELEVBQWU7QUFDeEJJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBRHdCLENBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGVBQU9NLE1BQVA7QUFDRCxPQVZEO0FBV0Q7QUFDRixHQWZnQixDQUFqQjtBQWdCQWxCLE9BQUssQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQUwsQ0FBd0JpQixPQUF4QixDQUFnQyxVQUFDUCxJQUFELEVBQWU7QUFDN0MsUUFBSVEsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7O0FBQ0EsWUFBUUEsSUFBSSxDQUFDVSxTQUFiO0FBQ0UsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0VGLGlCQUFTLEdBQUcsS0FBWjtBQUNBQyxhQUFLLEdBQUdULElBQUksQ0FBQ1csWUFBTCxDQUFrQkgsU0FBbEIsQ0FBUjtBQUNBOztBQUNGO0FBTkY7O0FBUUEsUUFBSUEsU0FBSixFQUFlO0FBQ2JSLFVBQUksQ0FBQ1ksZUFBTCxDQUFxQkosU0FBckI7QUFDQVIsVUFBSSxDQUFDYSxZQUFMLENBQWtCLGdCQUFsQixFQUFvQ0wsU0FBcEM7QUFDQVIsVUFBSSxDQUFDYSxZQUFMLGdCQUEwQkwsU0FBMUIsR0FBdUNDLEtBQXZDO0FBQ0FkLGNBQVEsQ0FBQ21CLE9BQVQsQ0FBaUJkLElBQWpCO0FBQ0Q7O0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBbkJEO0FBb0JELENBeENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLmUzZjEzOTJlNDZhNjdmM2E3NWIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudDogYW55LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmlzSW50ZXJzZWN0aW5nKTtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAvLyBjb25zdCB7IHRhcmdldCB9ID0gaXRlbTtcclxuICAgICAgICAvLyBjb25zdCBhdHRyaWJ1dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0dHJpYnV0ZScpO1xyXG4gICAgICAgIC8vIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICAvLyAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gKTtcclxuICAgICAgICAvLyAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQpLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgbGV0IGF0dHJpYnV0ZSA9ICcnO1xyXG4gICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIHN3aXRjaCAoaXRlbS5sb2NhbE5hbWUpIHtcclxuICAgICAgY2FzZSAnaWZyYW1lJzpcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIGF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gICAgICAgIHZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIGlmIChhdHRyaWJ1dGUpIHtcclxuICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCwgdmFsdWUpO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=