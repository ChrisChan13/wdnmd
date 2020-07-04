webpackHotUpdate("static\\development\\pages\\category\\[parent].js",{

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: getParentAndChild, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAndChild", function() { return getParentAndChild; });
/**
 * 由假名查找对应父子级ID
 * @param labels 分类数组
 * @param parentAlias 父级假名
 * @param ChildAlias 子级假名
 */
var getParentAndChild = function getParentAndChild(labels, parentAlias, ChildAlias) {
  var ids = {};

  if (parentAlias) {
    var replacedParent = labels.find(function (item) {
      return !item.parent && item.alias === parentAlias;
    });
    var replacedChild;

    if (ChildAlias) {
      replacedChild = labels.find(function (item) {
        return item.parent === replacedParent._id && item.alias === ChildAlias;
      });
    }

    ids.parent = replacedParent ? replacedParent._id : '';
    ids.child = replacedChild ? replacedChild._id : '';
  }

  return ids;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getParentAndChild: getParentAndChild
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYXJlbnRBbmRDaGlsZCIsImxhYmVscyIsInBhcmVudEFsaWFzIiwiQ2hpbGRBbGlhcyIsImlkcyIsInJlcGxhY2VkUGFyZW50IiwiZmluZCIsIml0ZW0iLCJwYXJlbnQiLCJhbGlhcyIsInJlcGxhY2VkQ2hpbGQiLCJfaWQiLCJjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBTU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUMvQkMsTUFEK0IsRUFFL0JDLFdBRitCLEVBRy9CQyxVQUgrQixFQUk1QjtBQUtILE1BQU1DLEdBQU8sR0FBRyxFQUFoQjs7QUFDQSxNQUFJRixXQUFKLEVBQWlCO0FBQ2YsUUFBTUcsY0FBbUIsR0FBR0osTUFBTSxDQUFDSyxJQUFQLENBQzFCLFVBQUNDLElBQUQ7QUFBQSxhQUFlLENBQUNBLElBQUksQ0FBQ0MsTUFBTixJQUFnQkQsSUFBSSxDQUFDRSxLQUFMLEtBQWVQLFdBQTlDO0FBQUEsS0FEMEIsQ0FBNUI7QUFHQSxRQUFJUSxhQUFKOztBQUNBLFFBQUlQLFVBQUosRUFBZ0I7QUFDZE8sbUJBQWEsR0FBR1QsTUFBTSxDQUFDSyxJQUFQLENBQ2QsVUFBQ0MsSUFBRDtBQUFBLGVBQWVBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkgsY0FBYyxDQUFDTSxHQUEvQixJQUFzQ0osSUFBSSxDQUFDRSxLQUFMLEtBQWVOLFVBQXBFO0FBQUEsT0FEYyxDQUFoQjtBQUdEOztBQUNEQyxPQUFHLENBQUNJLE1BQUosR0FBYUgsY0FBYyxHQUFHQSxjQUFjLENBQUNNLEdBQWxCLEdBQXdCLEVBQW5EO0FBQ0FQLE9BQUcsQ0FBQ1EsS0FBSixHQUFZRixhQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsR0FBakIsR0FBdUIsRUFBaEQ7QUFDRDs7QUFDRCxTQUFPUCxHQUFQO0FBQ0QsQ0F4Qk07QUEwQlE7QUFDYkosbUJBQWlCLEVBQWpCQTtBQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNhdGVnb3J5XFxbcGFyZW50XS5qcy42NmJiZTQwODM0ZDU5NDc3ZWIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOeUseWBh+WQjeafpeaJvuWvueW6lOeItuWtkOe6p0lEXHJcbiAqIEBwYXJhbSBsYWJlbHMg5YiG57G75pWw57uEXHJcbiAqIEBwYXJhbSBwYXJlbnRBbGlhcyDniLbnuqflgYflkI1cclxuICogQHBhcmFtIENoaWxkQWxpYXMg5a2Q57qn5YGH5ZCNXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UGFyZW50QW5kQ2hpbGQgPSAoXHJcbiAgbGFiZWxzOiBbXSxcclxuICBwYXJlbnRBbGlhcz86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIENoaWxkQWxpYXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuKSA9PiB7XHJcbiAgdHlwZSBJZHMgPSB7XHJcbiAgICBwYXJlbnQ/OiBzdHJpbmcsXHJcbiAgICBjaGlsZD86IHN0cmluZyxcclxuICB9O1xyXG4gIGNvbnN0IGlkczpJZHMgPSB7fTtcclxuICBpZiAocGFyZW50QWxpYXMpIHtcclxuICAgIGNvbnN0IHJlcGxhY2VkUGFyZW50OiBhbnkgPSBsYWJlbHMuZmluZChcclxuICAgICAgKGl0ZW06IGFueSkgPT4gIWl0ZW0ucGFyZW50ICYmIGl0ZW0uYWxpYXMgPT09IHBhcmVudEFsaWFzLFxyXG4gICAgKTtcclxuICAgIGxldCByZXBsYWNlZENoaWxkOiBhbnk7XHJcbiAgICBpZiAoQ2hpbGRBbGlhcykge1xyXG4gICAgICByZXBsYWNlZENoaWxkID0gbGFiZWxzLmZpbmQoXHJcbiAgICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5wYXJlbnQgPT09IHJlcGxhY2VkUGFyZW50Ll9pZCAmJiBpdGVtLmFsaWFzID09PSBDaGlsZEFsaWFzLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWRzLnBhcmVudCA9IHJlcGxhY2VkUGFyZW50ID8gcmVwbGFjZWRQYXJlbnQuX2lkIDogJyc7XHJcbiAgICBpZHMuY2hpbGQgPSByZXBsYWNlZENoaWxkID8gcmVwbGFjZWRDaGlsZC5faWQgOiAnJztcclxuICB9XHJcbiAgcmV0dXJuIGlkcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRQYXJlbnRBbmRDaGlsZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==