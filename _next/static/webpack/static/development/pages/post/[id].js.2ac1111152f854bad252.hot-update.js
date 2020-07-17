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
    var target = item.target;
    console.log(target);

    switch (target.localName) {
      case 'iframe':
      case 'image':
        attribute = 'src';
        value = target.getAttribute(attribute);
        break;

      default:
    }

    if (attribute) {
      target.setAttribute(attribute, '');
      target.setAttribute('data-attribute', attribute);
      target.setAttribute("data-".concat(attribute), value);
      observer.observe(target);
    }

    return target;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9sYXp5bG9hZC50cyJdLCJuYW1lcyI6WyJxdWVyeSIsInNlbGVjdG9yIiwicGFyZW50IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNoYW5nZXMiLCJyZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJsZW5ndGgiLCJtYXAiLCJ0YXJnZXQiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInVub2JzZXJ2ZSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBbUJDLE1BQW5CO0FBQUEsU0FBbUNDLEtBQUssQ0FBQ0MsSUFBTixDQUMvQyxDQUFDRixNQUFNLElBQUlHLFFBQVgsRUFBcUJDLGdCQUFyQixDQUFzQ0wsUUFBdEMsQ0FEK0MsQ0FBbkM7QUFBQSxDQUFkOztBQUllLHlFQUNiQSxRQURhLEVBRWJDLE1BRmEsRUFHVjtBQUNILE1BQU1LLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsSUFBRDtBQUFBLGFBQWVBLElBQUksQ0FBQ0MsaUJBQUwsR0FBeUIsQ0FBeEM7QUFBQSxLQUFmLENBQWY7O0FBQ0EsUUFBSUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCSixZQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDSCxJQUFELEVBQWU7QUFBQSxZQUNoQkksTUFEZ0IsR0FDTEosSUFESyxDQUNoQkksTUFEZ0I7QUFFeEIsWUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsZ0JBQXBCLENBQWxCOztBQUNBLFlBQUlELFNBQUosRUFBZTtBQUNiLGNBQU1FLEtBQUssR0FBR0gsTUFBTSxDQUFDRSxZQUFQLGdCQUE0QkQsU0FBNUIsRUFBZDtBQUNBRCxnQkFBTSxDQUFDSSxZQUFQLENBQW9CSCxTQUFwQixFQUErQkUsS0FBL0I7QUFDRDs7QUFDRFosZ0JBQVEsQ0FBQ2MsU0FBVCxDQUFtQkwsTUFBbkI7QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FURDtBQVVEO0FBQ0YsR0FkZ0IsQ0FBakI7QUFlQWhCLE9BQUssQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQUwsQ0FBd0JvQixPQUF4QixDQUFnQyxVQUFDVixJQUFELEVBQWU7QUFDN0MsUUFBSUssU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUUsS0FBSyxHQUFHLEVBQVo7QUFGNkMsUUFHckNILE1BSHFDLEdBRzFCSixJQUgwQixDQUdyQ0ksTUFIcUM7QUFJN0NPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaOztBQUNBLFlBQVFBLE1BQU0sQ0FBQ1MsU0FBZjtBQUNFLFdBQUssUUFBTDtBQUNBLFdBQUssT0FBTDtBQUNFUixpQkFBUyxHQUFHLEtBQVo7QUFDQUUsYUFBSyxHQUFHSCxNQUFNLENBQUNFLFlBQVAsQ0FBb0JELFNBQXBCLENBQVI7QUFDQTs7QUFDRjtBQU5GOztBQVFBLFFBQUlBLFNBQUosRUFBZTtBQUNiRCxZQUFNLENBQUNJLFlBQVAsQ0FBb0JILFNBQXBCLEVBQStCLEVBQS9CO0FBQ0FELFlBQU0sQ0FBQ0ksWUFBUCxDQUFvQixnQkFBcEIsRUFBc0NILFNBQXRDO0FBQ0FELFlBQU0sQ0FBQ0ksWUFBUCxnQkFBNEJILFNBQTVCLEdBQXlDRSxLQUF6QztBQUNBWixjQUFRLENBQUNtQixPQUFULENBQWlCVixNQUFqQjtBQUNEOztBQUNELFdBQU9BLE1BQVA7QUFDRCxHQXBCRDtBQXFCRCxDQXhDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy4yYWMxMTExMTUyZjg1NGJhZDI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnkgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50OiBhbnkpID0+IEFycmF5LmZyb20oXHJcbiAgKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgc2VsZWN0b3I6IHN0cmluZyxcclxuICBwYXJlbnQ6IGFueSxcclxuKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGNoYW5nZXM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJyk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cmlidXRlfWApO1xyXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcXVlcnkoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICBsZXQgYXR0cmlidXRlID0gJyc7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBpdGVtO1xyXG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgIHN3aXRjaCAodGFyZ2V0LmxvY2FsTmFtZSkge1xyXG4gICAgICBjYXNlICdpZnJhbWUnOlxyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgYXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XHJcbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0cmlidXRlJywgYXR0cmlidXRlKTtcclxuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJpYnV0ZX1gLCB2YWx1ZSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=