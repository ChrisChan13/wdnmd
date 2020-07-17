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

    if (result.length > 0) {// result.map((item: any) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJmb3JFYWNoIiwiYXR0cmlidXRlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHVjtBQUNILE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsaUJBQUwsR0FBeUIsQ0FBeEM7QUFBQSxLQUFmLENBQWY7O0FBQ0EsUUFBSUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCLENBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRixHQWRnQixDQUFqQjtBQWVBZCxPQUFLLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxDQUFMLENBQXdCYSxPQUF4QixDQUFnQyxVQUFDSCxJQUFELEVBQWU7QUFDN0MsUUFBSUksU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQVo7O0FBQ0EsWUFBUUEsSUFBSSxDQUFDUSxTQUFiO0FBQ0UsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0VKLGlCQUFTLEdBQUcsS0FBWjtBQUNBQyxhQUFLLEdBQUdMLElBQUksQ0FBQ1MsWUFBTCxDQUFrQkwsU0FBbEIsQ0FBUjtBQUNBOztBQUNGO0FBTkY7O0FBUUEsUUFBSUEsU0FBSixFQUFlO0FBQ2JKLFVBQUksQ0FBQ1UsWUFBTCxDQUFrQk4sU0FBbEIsRUFBNkIsRUFBN0I7QUFDQUosVUFBSSxDQUFDVSxZQUFMLENBQWtCLGdCQUFsQixFQUFvQ04sU0FBcEM7QUFDQUosVUFBSSxDQUFDVSxZQUFMLGdCQUEwQk4sU0FBMUIsR0FBdUNDLEtBQXZDO0FBQ0FWLGNBQVEsQ0FBQ2dCLE9BQVQsQ0FBaUJYLElBQWpCO0FBQ0Q7O0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBbkJEO0FBb0JELENBdkNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLmVkMjczMzljOGE5MjJkMzAwMDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudDogYW55LFxyXG4pID0+IHtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoY2hhbmdlczogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLmludGVyc2VjdGlvblJhdGlvID4gMCk7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gcmVzdWx0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgY29uc3QgeyB0YXJnZXQgfSA9IGl0ZW07XHJcbiAgICAgIC8vICAgY29uc3QgYXR0cmlidXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgLy8gICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyaWJ1dGV9YCk7XHJcbiAgICAgIC8vICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcclxuICAgICAgLy8gICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAvLyB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBxdWVyeShzZWxlY3RvciwgcGFyZW50KS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgIGxldCBhdHRyaWJ1dGUgPSAnJztcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICBzd2l0Y2ggKGl0ZW0ubG9jYWxOYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2lmcmFtZSc6XHJcbiAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICBhdHRyaWJ1dGUgPSAnc3JjJztcclxuICAgICAgICB2YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gLCB2YWx1ZSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==