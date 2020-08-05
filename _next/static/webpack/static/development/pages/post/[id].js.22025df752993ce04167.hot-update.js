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
    return "".concat(date.getMonth() + 1, "-").concat(date.getDate(), " ").concat(date.getHours(), ":").concat(date.getMinutes());
  }

  return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate(), " ").concat(date.getHours(), ":").concat(date.getMinutes());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYXJlbnRBbmRDaGlsZCIsImxhYmVscyIsInBhcmVudEFsaWFzIiwiQ2hpbGRBbGlhcyIsImlkcyIsInJlcGxhY2VkUGFyZW50IiwiZmluZCIsIml0ZW0iLCJwYXJlbnQiLCJhbGlhcyIsInJlcGxhY2VkQ2hpbGQiLCJfaWQiLCJjaGlsZCIsInBhcmVudEVudGl0eSIsImNoaWxkRW50aXR5IiwiZm9ybWF0VGltZSIsInRpbWUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImRpZmYiLCJnZXRUaW1lIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQy9CQyxNQUQrQixFQUUvQkMsV0FGK0IsRUFHL0JDLFVBSCtCLEVBSTVCO0FBT0gsTUFBTUMsR0FBUSxHQUFHLEVBQWpCOztBQUNBLE1BQUlGLFdBQUosRUFBaUI7QUFDZixRQUFNRyxjQUFtQixHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FDMUIsVUFBQ0MsSUFBRDtBQUFBLGFBQWUsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFOLElBQWdCRCxJQUFJLENBQUNFLEtBQUwsS0FBZVAsV0FBOUM7QUFBQSxLQUQwQixDQUE1QjtBQUdBLFFBQUlRLGFBQUo7O0FBQ0EsUUFBSVAsVUFBSixFQUFnQjtBQUNkTyxtQkFBYSxHQUFHVCxNQUFNLENBQUNLLElBQVAsQ0FDZCxVQUFDQyxJQUFEO0FBQUEsZUFBZUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCSCxjQUFjLENBQUNNLEdBQS9CLElBQXNDSixJQUFJLENBQUNFLEtBQUwsS0FBZU4sVUFBcEU7QUFBQSxPQURjLENBQWhCO0FBR0Q7O0FBQ0RDLE9BQUcsQ0FBQ0ksTUFBSixHQUFhSCxjQUFjLEdBQUdBLGNBQWMsQ0FBQ00sR0FBbEIsR0FBd0IsRUFBbkQ7QUFDQVAsT0FBRyxDQUFDUSxLQUFKLEdBQVlGLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxHQUFqQixHQUF1QixFQUFoRDtBQUNBUCxPQUFHLENBQUNTLFlBQUosR0FBbUJSLGNBQW5CO0FBQ0FELE9BQUcsQ0FBQ1UsV0FBSixHQUFrQkosYUFBbEI7QUFDRDs7QUFDRCxTQUFPTixHQUFQO0FBQ0QsQ0E1Qk07QUE4QlA7Ozs7O0FBSU8sSUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFrQjtBQUMxQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWI7QUFDQSxNQUFNRyxHQUFHLEdBQUcsSUFBSUQsSUFBSixFQUFaO0FBQ0EsTUFBTUUsSUFBSSxHQUFHLENBQUMsQ0FBQ0QsR0FBRCxHQUFPRixJQUFJLENBQUNJLE9BQUwsRUFBUixJQUEwQixJQUF2Qzs7QUFDQSxNQUFJRCxJQUFJLEdBQUcsRUFBWCxFQUFlO0FBQ2IsV0FBTyxJQUFQO0FBQ0Q7O0FBQUMsTUFBSUEsSUFBSSxHQUFHLElBQVgsRUFBaUI7QUFDakIscUJBQVVFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxJQUFJLEdBQUcsRUFBakIsQ0FBVjtBQUNEOztBQUFDLE1BQUlBLElBQUksR0FBRyxPQUFPLEVBQWxCLEVBQXNCO0FBQ3RCLHFCQUFVRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBSSxHQUFHLElBQWpCLENBQVY7QUFDRDs7QUFBQyxNQUFJQSxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksQ0FBeEIsRUFBMkI7QUFDM0IscUJBQVVFLElBQUksQ0FBQ0UsS0FBTCxDQUFXSixJQUFJLElBQUksT0FBTyxFQUFYLENBQWYsQ0FBVjtBQUNEOztBQUFDLE1BQUlELEdBQUcsQ0FBQ00sV0FBSixPQUFzQlIsSUFBSSxDQUFDUSxXQUFMLEVBQTFCLEVBQThDO0FBQzlDLHFCQUFVUixJQUFJLENBQUNTLFFBQUwsS0FBa0IsQ0FBNUIsY0FBaUNULElBQUksQ0FBQ1UsT0FBTCxFQUFqQyxjQUFtRFYsSUFBSSxDQUFDVyxRQUFMLEVBQW5ELGNBQXNFWCxJQUFJLENBQUNZLFVBQUwsRUFBdEU7QUFDRDs7QUFDRCxtQkFBVVosSUFBSSxDQUFDUSxXQUFMLEVBQVYsY0FBZ0NSLElBQUksQ0FBQ1MsUUFBTCxLQUFrQixDQUFsRCxjQUF1RFQsSUFBSSxDQUFDVSxPQUFMLEVBQXZELGNBQXlFVixJQUFJLENBQUNXLFFBQUwsRUFBekUsY0FBNEZYLElBQUksQ0FBQ1ksVUFBTCxFQUE1RjtBQUNELENBaEJNO0FBa0JRO0FBQ2I3QixtQkFBaUIsRUFBakJBLGlCQURhO0FBRWJlLFlBQVUsRUFBVkE7QUFGYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLjIyMDI1ZGY3NTI5OTNjZTA0MTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog55Sx5YGH5ZCN5p+l5om+5a+55bqU54i25a2Q57qnSURcclxuICogQHBhcmFtIGxhYmVscyDliIbnsbvmlbDnu4RcclxuICogQHBhcmFtIHBhcmVudEFsaWFzIOeItue6p+WBh+WQjVxyXG4gKiBAcGFyYW0gQ2hpbGRBbGlhcyDlrZDnuqflgYflkI1cclxuICogQHJldHVybnMg54i25a2Q57qnSURcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRQYXJlbnRBbmRDaGlsZCA9IChcclxuICBsYWJlbHM6IFtdLFxyXG4gIHBhcmVudEFsaWFzPzogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgQ2hpbGRBbGlhcz86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4pID0+IHtcclxuICB0eXBlIElkcyA9IHtcclxuICAgIHBhcmVudD86IHN0cmluZyxcclxuICAgIGNoaWxkPzogc3RyaW5nLFxyXG4gICAgcGFyZW50RW50aXR5Pzoge30sXHJcbiAgICBjaGlsZEVudGl0eT86IHt9LFxyXG4gIH07XHJcbiAgY29uc3QgaWRzOiBJZHMgPSB7fTtcclxuICBpZiAocGFyZW50QWxpYXMpIHtcclxuICAgIGNvbnN0IHJlcGxhY2VkUGFyZW50OiBhbnkgPSBsYWJlbHMuZmluZChcclxuICAgICAgKGl0ZW06IGFueSkgPT4gIWl0ZW0ucGFyZW50ICYmIGl0ZW0uYWxpYXMgPT09IHBhcmVudEFsaWFzLFxyXG4gICAgKTtcclxuICAgIGxldCByZXBsYWNlZENoaWxkOiBhbnk7XHJcbiAgICBpZiAoQ2hpbGRBbGlhcykge1xyXG4gICAgICByZXBsYWNlZENoaWxkID0gbGFiZWxzLmZpbmQoXHJcbiAgICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5wYXJlbnQgPT09IHJlcGxhY2VkUGFyZW50Ll9pZCAmJiBpdGVtLmFsaWFzID09PSBDaGlsZEFsaWFzLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWRzLnBhcmVudCA9IHJlcGxhY2VkUGFyZW50ID8gcmVwbGFjZWRQYXJlbnQuX2lkIDogJyc7XHJcbiAgICBpZHMuY2hpbGQgPSByZXBsYWNlZENoaWxkID8gcmVwbGFjZWRDaGlsZC5faWQgOiAnJztcclxuICAgIGlkcy5wYXJlbnRFbnRpdHkgPSByZXBsYWNlZFBhcmVudDtcclxuICAgIGlkcy5jaGlsZEVudGl0eSA9IHJlcGxhY2VkQ2hpbGQ7XHJcbiAgfVxyXG4gIHJldHVybiBpZHM7XHJcbn07XHJcblxyXG4vKipcclxuICog6L2s5o2i5pe26Ze05qC85byPXHJcbiAqIEBwYXJhbSB0aW1lIOaXtumXtOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGlmZiA9ICgrbm93IC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMDtcclxuICBpZiAoZGlmZiA8IDMwKSB7XHJcbiAgICByZXR1cm4gJ+WImuWImic7XHJcbiAgfSBpZiAoZGlmZiA8IDM2MDApIHtcclxuICAgIHJldHVybiBgJHtNYXRoLmNlaWwoZGlmZiAvIDYwKX3liIbpkp/liY1gO1xyXG4gIH0gaWYgKGRpZmYgPCAzNjAwICogMjQpIHtcclxuICAgIHJldHVybiBgJHtNYXRoLmNlaWwoZGlmZiAvIDM2MDApfeWwj+aXtuWJjWA7XHJcbiAgfSBpZiAoZGlmZiA8PSAzNjAwICogMjQgKiA3KSB7XHJcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihkaWZmIC8gKDM2MDAgKiAyNCkpfeWkqeWJjWA7XHJcbiAgfSBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9ICR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfWA7XHJcbiAgfVxyXG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX0gJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRQYXJlbnRBbmRDaGlsZCxcclxuICBmb3JtYXRUaW1lLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9