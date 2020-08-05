webpackHotUpdate("static\\development\\pages\\post\\[id].js",{

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
  var now = new Date();
  var diff = (+now - date.getTime()) / 1000;

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

  if (now.getFullYear() === date.getFullYear()) {
    return "".concat(date.getMonth() + 1, "-").concat(date.getDate(), " ").concat(date.getHours, ":").concat(date.getMinutes());
  }

  return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate(), " ").concat(date.getHours, ":").concat(date.getMinutes());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYXJlbnRBbmRDaGlsZCIsImxhYmVscyIsInBhcmVudEFsaWFzIiwiQ2hpbGRBbGlhcyIsImlkcyIsInJlcGxhY2VkUGFyZW50IiwiZmluZCIsIml0ZW0iLCJwYXJlbnQiLCJhbGlhcyIsInJlcGxhY2VkQ2hpbGQiLCJfaWQiLCJjaGlsZCIsInBhcmVudEVudGl0eSIsImNoaWxkRW50aXR5IiwiZm9ybWF0VGltZSIsInRpbWUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImRpZmYiLCJnZXRUaW1lIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQy9CQyxNQUQrQixFQUUvQkMsV0FGK0IsRUFHL0JDLFVBSCtCLEVBSTVCO0FBT0gsTUFBTUMsR0FBUSxHQUFHLEVBQWpCOztBQUNBLE1BQUlGLFdBQUosRUFBaUI7QUFDZixRQUFNRyxjQUFtQixHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FDMUIsVUFBQ0MsSUFBRDtBQUFBLGFBQWUsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFOLElBQWdCRCxJQUFJLENBQUNFLEtBQUwsS0FBZVAsV0FBOUM7QUFBQSxLQUQwQixDQUE1QjtBQUdBLFFBQUlRLGFBQUo7O0FBQ0EsUUFBSVAsVUFBSixFQUFnQjtBQUNkTyxtQkFBYSxHQUFHVCxNQUFNLENBQUNLLElBQVAsQ0FDZCxVQUFDQyxJQUFEO0FBQUEsZUFBZUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCSCxjQUFjLENBQUNNLEdBQS9CLElBQXNDSixJQUFJLENBQUNFLEtBQUwsS0FBZU4sVUFBcEU7QUFBQSxPQURjLENBQWhCO0FBR0Q7O0FBQ0RDLE9BQUcsQ0FBQ0ksTUFBSixHQUFhSCxjQUFjLEdBQUdBLGNBQWMsQ0FBQ00sR0FBbEIsR0FBd0IsRUFBbkQ7QUFDQVAsT0FBRyxDQUFDUSxLQUFKLEdBQVlGLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxHQUFqQixHQUF1QixFQUFoRDtBQUNBUCxPQUFHLENBQUNTLFlBQUosR0FBbUJSLGNBQW5CO0FBQ0FELE9BQUcsQ0FBQ1UsV0FBSixHQUFrQkosYUFBbEI7QUFDRDs7QUFDRCxTQUFPTixHQUFQO0FBQ0QsQ0E1Qk07QUE4QlA7Ozs7O0FBSU8sSUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFrQjtBQUMxQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWI7QUFDQSxNQUFNRyxHQUFHLEdBQUcsSUFBSUQsSUFBSixFQUFaO0FBQ0EsTUFBTUUsSUFBSSxHQUFHLENBQUMsQ0FBQ0QsR0FBRCxHQUFPRixJQUFJLENBQUNJLE9BQUwsRUFBUixJQUEwQixJQUF2Qzs7QUFDQSxNQUFJRCxJQUFJLEdBQUcsRUFBWCxFQUFlO0FBQ2IsV0FBTyxJQUFQO0FBQ0Q7O0FBQUMsTUFBSUEsSUFBSSxHQUFHLElBQVgsRUFBaUI7QUFDakIscUJBQVVFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxJQUFJLEdBQUcsRUFBakIsQ0FBVjtBQUNEOztBQUFDLE1BQUlBLElBQUksR0FBRyxPQUFPLEVBQWxCLEVBQXNCO0FBQ3RCLHFCQUFVRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBSSxHQUFHLElBQWpCLENBQVY7QUFDRDs7QUFBQyxNQUFJQSxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksQ0FBeEIsRUFBMkI7QUFDM0IscUJBQVVFLElBQUksQ0FBQ0UsS0FBTCxDQUFXSixJQUFJLElBQUksT0FBTyxFQUFYLENBQWYsQ0FBVjtBQUNEOztBQUFDLE1BQUlELEdBQUcsQ0FBQ00sV0FBSixPQUFzQlIsSUFBSSxDQUFDUSxXQUFMLEVBQTFCLEVBQThDO0FBQzlDLHFCQUFVUixJQUFJLENBQUNTLFFBQUwsS0FBa0IsQ0FBNUIsY0FBaUNULElBQUksQ0FBQ1UsT0FBTCxFQUFqQyxjQUFtRFYsSUFBSSxDQUFDVyxRQUF4RCxjQUFvRVgsSUFBSSxDQUFDWSxVQUFMLEVBQXBFO0FBQ0Q7O0FBQ0QsbUJBQVVaLElBQUksQ0FBQ1EsV0FBTCxFQUFWLGNBQWdDUixJQUFJLENBQUNTLFFBQUwsS0FBa0IsQ0FBbEQsY0FBdURULElBQUksQ0FBQ1UsT0FBTCxFQUF2RCxjQUF5RVYsSUFBSSxDQUFDVyxRQUE5RSxjQUEwRlgsSUFBSSxDQUFDWSxVQUFMLEVBQTFGO0FBQ0QsQ0FoQk07QUFrQlE7QUFDYjdCLG1CQUFpQixFQUFqQkEsaUJBRGE7QUFFYmUsWUFBVSxFQUFWQTtBQUZhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuNTJiNzRkMjNjZmE5OWJmMGRhOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnlLHlgYflkI3mn6Xmib7lr7nlupTniLblrZDnuqdJRFxyXG4gKiBAcGFyYW0gbGFiZWxzIOWIhuexu+aVsOe7hFxyXG4gKiBAcGFyYW0gcGFyZW50QWxpYXMg54i257qn5YGH5ZCNXHJcbiAqIEBwYXJhbSBDaGlsZEFsaWFzIOWtkOe6p+WBh+WQjVxyXG4gKiBAcmV0dXJucyDniLblrZDnuqdJRFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFBhcmVudEFuZENoaWxkID0gKFxyXG4gIGxhYmVsczogW10sXHJcbiAgcGFyZW50QWxpYXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICBDaGlsZEFsaWFzPzogc3RyaW5nIHwgc3RyaW5nW10sXHJcbikgPT4ge1xyXG4gIHR5cGUgSWRzID0ge1xyXG4gICAgcGFyZW50Pzogc3RyaW5nLFxyXG4gICAgY2hpbGQ/OiBzdHJpbmcsXHJcbiAgICBwYXJlbnRFbnRpdHk/OiB7fSxcclxuICAgIGNoaWxkRW50aXR5Pzoge30sXHJcbiAgfTtcclxuICBjb25zdCBpZHM6IElkcyA9IHt9O1xyXG4gIGlmIChwYXJlbnRBbGlhcykge1xyXG4gICAgY29uc3QgcmVwbGFjZWRQYXJlbnQ6IGFueSA9IGxhYmVscy5maW5kKFxyXG4gICAgICAoaXRlbTogYW55KSA9PiAhaXRlbS5wYXJlbnQgJiYgaXRlbS5hbGlhcyA9PT0gcGFyZW50QWxpYXMsXHJcbiAgICApO1xyXG4gICAgbGV0IHJlcGxhY2VkQ2hpbGQ6IGFueTtcclxuICAgIGlmIChDaGlsZEFsaWFzKSB7XHJcbiAgICAgIHJlcGxhY2VkQ2hpbGQgPSBsYWJlbHMuZmluZChcclxuICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnBhcmVudCA9PT0gcmVwbGFjZWRQYXJlbnQuX2lkICYmIGl0ZW0uYWxpYXMgPT09IENoaWxkQWxpYXMsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZHMucGFyZW50ID0gcmVwbGFjZWRQYXJlbnQgPyByZXBsYWNlZFBhcmVudC5faWQgOiAnJztcclxuICAgIGlkcy5jaGlsZCA9IHJlcGxhY2VkQ2hpbGQgPyByZXBsYWNlZENoaWxkLl9pZCA6ICcnO1xyXG4gICAgaWRzLnBhcmVudEVudGl0eSA9IHJlcGxhY2VkUGFyZW50O1xyXG4gICAgaWRzLmNoaWxkRW50aXR5ID0gcmVwbGFjZWRDaGlsZDtcclxuICB9XHJcbiAgcmV0dXJuIGlkcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiDovazmjaLml7bpl7TmoLzlvI9cclxuICogQHBhcmFtIHRpbWUg5pe26Ze05a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZSk7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkaWZmID0gKCtub3cgLSBkYXRlLmdldFRpbWUoKSkgLyAxMDAwO1xyXG4gIGlmIChkaWZmIDwgMzApIHtcclxuICAgIHJldHVybiAn5Yia5YiaJztcclxuICB9IGlmIChkaWZmIDwgMzYwMCkge1xyXG4gICAgcmV0dXJuIGAke01hdGguY2VpbChkaWZmIC8gNjApfeWIhumSn+WJjWA7XHJcbiAgfSBpZiAoZGlmZiA8IDM2MDAgKiAyNCkge1xyXG4gICAgcmV0dXJuIGAke01hdGguY2VpbChkaWZmIC8gMzYwMCl95bCP5pe25YmNYDtcclxuICB9IGlmIChkaWZmIDw9IDM2MDAgKiAyNCAqIDcpIHtcclxuICAgIHJldHVybiBgJHtNYXRoLmZsb29yKGRpZmYgLyAoMzYwMCAqIDI0KSl95aSp5YmNYDtcclxuICB9IGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX0gJHtkYXRlLmdldEhvdXJzfToke2RhdGUuZ2V0TWludXRlcygpfWA7XHJcbiAgfVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX0gJHtkYXRlLmdldEhvdXJzfToke2RhdGUuZ2V0TWludXRlcygpfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0UGFyZW50QW5kQ2hpbGQsXHJcbiAgZm9ybWF0VGltZSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==