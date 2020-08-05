webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: getParentAndChild, formatTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAndChild", function() { return getParentAndChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/**
 * 由假名查找对应父子级ID
 * @param labels 分类数组
 * @param parentAlias 父级假名
 * @param ChildAlias 子级假名
 * @returns 父子级ID
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
    ids.parentEntity = replacedParent;
    ids.childEntity = replacedChild;
  }

  return ids;
};
/**
 * 转换时间格式
 * @param time 时间字符串
 */

var formatTime = function formatTime(time) {
  var date = new Date(time);
  var now = Date.now();
  var diff = (now - date.getTime()) / 1000;

  if (diff < 30) {
    return '刚刚';
  }

  if (diff < 3600) {
    return "".concat(Math.ceil(diff / 60), "\u5206\u949F\u524D");
  }

  if (diff < 3600 * 24) {
    return "".concat(Math.ceil(diff / 3600), "\u5C0F\u65F6\u524D");
  }

  if (diff <= 3600 * 24 * 7) {
    return "".concat(Math.floor(diff / (3600 * 24)), "\u5929\u524D");
  }

  return "".concat(date.getMonth() + 1, "\u6708").concat(date.getDate(), "\u65E5").concat(date.getHours(), "\u65F6").concat(date.getMinutes(), "\u5206");
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getParentAndChild: getParentAndChild,
  formatTime: formatTime
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYXJlbnRBbmRDaGlsZCIsImxhYmVscyIsInBhcmVudEFsaWFzIiwiQ2hpbGRBbGlhcyIsImlkcyIsInJlcGxhY2VkUGFyZW50IiwiZmluZCIsIml0ZW0iLCJwYXJlbnQiLCJhbGlhcyIsInJlcGxhY2VkQ2hpbGQiLCJfaWQiLCJjaGlsZCIsInBhcmVudEVudGl0eSIsImNoaWxkRW50aXR5IiwiZm9ybWF0VGltZSIsInRpbWUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImRpZmYiLCJnZXRUaW1lIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUMvQkMsTUFEK0IsRUFFL0JDLFdBRitCLEVBRy9CQyxVQUgrQixFQUk1QjtBQU9ILE1BQU1DLEdBQVEsR0FBRyxFQUFqQjs7QUFDQSxNQUFJRixXQUFKLEVBQWlCO0FBQ2YsUUFBTUcsY0FBbUIsR0FBR0osTUFBTSxDQUFDSyxJQUFQLENBQzFCLFVBQUNDLElBQUQ7QUFBQSxhQUFlLENBQUNBLElBQUksQ0FBQ0MsTUFBTixJQUFnQkQsSUFBSSxDQUFDRSxLQUFMLEtBQWVQLFdBQTlDO0FBQUEsS0FEMEIsQ0FBNUI7QUFHQSxRQUFJUSxhQUFKOztBQUNBLFFBQUlQLFVBQUosRUFBZ0I7QUFDZE8sbUJBQWEsR0FBR1QsTUFBTSxDQUFDSyxJQUFQLENBQ2QsVUFBQ0MsSUFBRDtBQUFBLGVBQWVBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkgsY0FBYyxDQUFDTSxHQUEvQixJQUFzQ0osSUFBSSxDQUFDRSxLQUFMLEtBQWVOLFVBQXBFO0FBQUEsT0FEYyxDQUFoQjtBQUdEOztBQUNEQyxPQUFHLENBQUNJLE1BQUosR0FBYUgsY0FBYyxHQUFHQSxjQUFjLENBQUNNLEdBQWxCLEdBQXdCLEVBQW5EO0FBQ0FQLE9BQUcsQ0FBQ1EsS0FBSixHQUFZRixhQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsR0FBakIsR0FBdUIsRUFBaEQ7QUFDQVAsT0FBRyxDQUFDUyxZQUFKLEdBQW1CUixjQUFuQjtBQUNBRCxPQUFHLENBQUNVLFdBQUosR0FBa0JKLGFBQWxCO0FBQ0Q7O0FBQ0QsU0FBT04sR0FBUDtBQUNELENBNUJNO0FBOEJQOzs7OztBQUlPLElBQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBa0I7QUFDMUMsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsSUFBVCxDQUFiO0FBQ0EsTUFBTUcsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUwsRUFBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxDQUFDRCxHQUFHLEdBQUdGLElBQUksQ0FBQ0ksT0FBTCxFQUFQLElBQXlCLElBQXRDOztBQUNBLE1BQUlELElBQUksR0FBRyxFQUFYLEVBQWU7QUFDYixXQUFPLElBQVA7QUFDRDs7QUFBQyxNQUFJQSxJQUFJLEdBQUcsSUFBWCxFQUFpQjtBQUNqQixxQkFBVUUsSUFBSSxDQUFDQyxJQUFMLENBQVVILElBQUksR0FBRyxFQUFqQixDQUFWO0FBQ0Q7O0FBQUMsTUFBSUEsSUFBSSxHQUFHLE9BQU8sRUFBbEIsRUFBc0I7QUFDdEIscUJBQVVFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxJQUFJLEdBQUcsSUFBakIsQ0FBVjtBQUNEOztBQUFDLE1BQUlBLElBQUksSUFBSSxPQUFPLEVBQVAsR0FBWSxDQUF4QixFQUEyQjtBQUMzQixxQkFBVUUsSUFBSSxDQUFDRSxLQUFMLENBQVdKLElBQUksSUFBSSxPQUFPLEVBQVgsQ0FBZixDQUFWO0FBQ0Q7O0FBQ0QsbUJBQ0tILElBQUksQ0FBQ1EsUUFBTCxLQUNDLENBRk4sbUJBSUlSLElBQUksQ0FBQ1MsT0FBTCxFQUpKLG1CQU1JVCxJQUFJLENBQUNVLFFBQUwsRUFOSixtQkFRSVYsSUFBSSxDQUFDVyxVQUFMLEVBUko7QUFXRCxDQXhCTTtBQTBCUTtBQUNiNUIsbUJBQWlCLEVBQWpCQSxpQkFEYTtBQUViZSxZQUFVLEVBQVZBO0FBRmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjA3Mzk2NmM1NDgyYmQ4NmVmMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnlLHlgYflkI3mn6Xmib7lr7nlupTniLblrZDnuqdJRFxyXG4gKiBAcGFyYW0gbGFiZWxzIOWIhuexu+aVsOe7hFxyXG4gKiBAcGFyYW0gcGFyZW50QWxpYXMg54i257qn5YGH5ZCNXHJcbiAqIEBwYXJhbSBDaGlsZEFsaWFzIOWtkOe6p+WBh+WQjVxyXG4gKiBAcmV0dXJucyDniLblrZDnuqdJRFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFBhcmVudEFuZENoaWxkID0gKFxyXG4gIGxhYmVsczogW10sXHJcbiAgcGFyZW50QWxpYXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICBDaGlsZEFsaWFzPzogc3RyaW5nIHwgc3RyaW5nW10sXHJcbikgPT4ge1xyXG4gIHR5cGUgSWRzID0ge1xyXG4gICAgcGFyZW50Pzogc3RyaW5nLFxyXG4gICAgY2hpbGQ/OiBzdHJpbmcsXHJcbiAgICBwYXJlbnRFbnRpdHk/OiB7fSxcclxuICAgIGNoaWxkRW50aXR5Pzoge30sXHJcbiAgfTtcclxuICBjb25zdCBpZHM6IElkcyA9IHt9O1xyXG4gIGlmIChwYXJlbnRBbGlhcykge1xyXG4gICAgY29uc3QgcmVwbGFjZWRQYXJlbnQ6IGFueSA9IGxhYmVscy5maW5kKFxyXG4gICAgICAoaXRlbTogYW55KSA9PiAhaXRlbS5wYXJlbnQgJiYgaXRlbS5hbGlhcyA9PT0gcGFyZW50QWxpYXMsXHJcbiAgICApO1xyXG4gICAgbGV0IHJlcGxhY2VkQ2hpbGQ6IGFueTtcclxuICAgIGlmIChDaGlsZEFsaWFzKSB7XHJcbiAgICAgIHJlcGxhY2VkQ2hpbGQgPSBsYWJlbHMuZmluZChcclxuICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnBhcmVudCA9PT0gcmVwbGFjZWRQYXJlbnQuX2lkICYmIGl0ZW0uYWxpYXMgPT09IENoaWxkQWxpYXMsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZHMucGFyZW50ID0gcmVwbGFjZWRQYXJlbnQgPyByZXBsYWNlZFBhcmVudC5faWQgOiAnJztcclxuICAgIGlkcy5jaGlsZCA9IHJlcGxhY2VkQ2hpbGQgPyByZXBsYWNlZENoaWxkLl9pZCA6ICcnO1xyXG4gICAgaWRzLnBhcmVudEVudGl0eSA9IHJlcGxhY2VkUGFyZW50O1xyXG4gICAgaWRzLmNoaWxkRW50aXR5ID0gcmVwbGFjZWRDaGlsZDtcclxuICB9XHJcbiAgcmV0dXJuIGlkcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiDovazmjaLml7bpl7TmoLzlvI9cclxuICogQHBhcmFtIHRpbWUg5pe26Ze05a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZSk7XHJcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICBjb25zdCBkaWZmID0gKG5vdyAtIGRhdGUuZ2V0VGltZSgpKSAvIDEwMDA7XHJcbiAgaWYgKGRpZmYgPCAzMCkge1xyXG4gICAgcmV0dXJuICfliJrliJonO1xyXG4gIH0gaWYgKGRpZmYgPCAzNjAwKSB7XHJcbiAgICByZXR1cm4gYCR7TWF0aC5jZWlsKGRpZmYgLyA2MCl95YiG6ZKf5YmNYDtcclxuICB9IGlmIChkaWZmIDwgMzYwMCAqIDI0KSB7XHJcbiAgICByZXR1cm4gYCR7TWF0aC5jZWlsKGRpZmYgLyAzNjAwKX3lsI/ml7bliY1gO1xyXG4gIH0gaWYgKGRpZmYgPD0gMzYwMCAqIDI0ICogNykge1xyXG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvICgzNjAwICogMjQpKX3lpKnliY1gO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgYCR7ZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICsgMVxyXG4gICAgfeaciCR7XHJcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICB95pelJHtcclxuICAgICAgZGF0ZS5nZXRIb3VycygpXHJcbiAgICB95pe2JHtcclxuICAgICAgZGF0ZS5nZXRNaW51dGVzKClcclxuICAgIH3liIZgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRQYXJlbnRBbmRDaGlsZCxcclxuICBmb3JtYXRUaW1lLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9