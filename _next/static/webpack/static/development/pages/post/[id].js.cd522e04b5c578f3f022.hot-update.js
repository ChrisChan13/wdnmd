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
        console.log(item);
        var target = item.target; // const attribute = target.getAttribute('data-attribute');
        // if (attribute) {
        //   const value = target.getAttribute(`data-${attribute}`);
        //   target.setAttribute(attribute, value);
        // }
        // observer.unobserve(target);

        return target;
      });
    }
  }, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjaGFuZ2VzIiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInRhcmdldCIsImZvckVhY2giLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQW1CQyxNQUFuQjtBQUFBLFNBQW1DQyxLQUFLLENBQUNDLElBQU4sQ0FDL0MsQ0FBQ0YsTUFBTSxJQUFJRyxRQUFYLEVBQXFCQyxnQkFBckIsQ0FBc0NMLFFBQXRDLENBRCtDLENBQW5DO0FBQUEsQ0FBZDs7QUFJZSx5RUFDYkEsUUFEYSxFQUViQyxNQUZhLEVBR2JLLE9BSGEsRUFJVjtBQUNILE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsY0FBcEI7QUFBQSxLQUFmLENBQWY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7O0FBQ0EsUUFBSUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTixZQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDTCxJQUFELEVBQWU7QUFDeEJFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBRHdCLFlBRWhCTSxNQUZnQixHQUVMTixJQUZLLENBRWhCTSxNQUZnQixFQUd4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZUFBT0EsTUFBUDtBQUNELE9BVkQ7QUFXRDtBQUNGLEdBaEJnQixFQWdCZFosT0FoQmMsQ0FBakI7QUFpQkFQLE9BQUssQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQUwsQ0FBd0JrQixPQUF4QixDQUFnQyxVQUFDUCxJQUFELEVBQWU7QUFDN0MsUUFBSVEsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O0FBQ0EsWUFBUUEsSUFBSSxDQUFDVSxTQUFiO0FBQ0UsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0VGLGlCQUFTLEdBQUcsS0FBWjtBQUNBQyxhQUFLLEdBQUdULElBQUksQ0FBQ1csWUFBTCxDQUFrQkgsU0FBbEIsQ0FBUjtBQUNBOztBQUNGO0FBTkY7O0FBUUEsUUFBSUEsU0FBSixFQUFlO0FBQ2JSLFVBQUksQ0FBQ1ksZUFBTCxDQUFxQkosU0FBckI7QUFDQVIsVUFBSSxDQUFDYSxZQUFMLENBQWtCLGdCQUFsQixFQUFvQ0wsU0FBcEM7QUFDQVIsVUFBSSxDQUFDYSxZQUFMLGdCQUEwQkwsU0FBMUIsR0FBdUNDLEtBQXZDO0FBQ0FkLGNBQVEsQ0FBQ21CLE9BQVQsQ0FBaUJkLElBQWpCO0FBQ0Q7O0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBbkJEO0FBb0JELENBMUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLmNkNTIyZTA0YjVjNTc4ZjNmMDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWVyeSA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQ6IGFueSkgPT4gQXJyYXkuZnJvbShcclxuICAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gIHBhcmVudDogYW55LFxyXG4gIG9wdGlvbnM/OiB7fSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pc0ludGVyc2VjdGluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpdGVtO1xyXG4gICAgICAgIC8vIGNvbnN0IGF0dHJpYnV0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgLy8gaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIC8vICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgIC8vICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgb3B0aW9ucyk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBsZXQgYXR0cmlidXRlID0gJyc7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgc3dpdGNoIChpdGVtLmxvY2FsTmFtZSkge1xyXG4gICAgICBjYXNlICdpZnJhbWUnOlxyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgYXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgICAgICAgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnLCBhdHRyaWJ1dGUpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gLCB2YWx1ZSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==