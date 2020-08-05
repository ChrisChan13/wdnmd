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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYXJlbnRBbmRDaGlsZCIsImxhYmVscyIsInBhcmVudEFsaWFzIiwiQ2hpbGRBbGlhcyIsImlkcyIsInJlcGxhY2VkUGFyZW50IiwiZmluZCIsIml0ZW0iLCJwYXJlbnQiLCJhbGlhcyIsInJlcGxhY2VkQ2hpbGQiLCJfaWQiLCJjaGlsZCIsInBhcmVudEVudGl0eSIsImNoaWxkRW50aXR5IiwiZm9ybWF0VGltZSIsInRpbWUiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImRpZmYiLCJnZXRUaW1lIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQy9CQyxNQUQrQixFQUUvQkMsV0FGK0IsRUFHL0JDLFVBSCtCLEVBSTVCO0FBT0gsTUFBTUMsR0FBUSxHQUFHLEVBQWpCOztBQUNBLE1BQUlGLFdBQUosRUFBaUI7QUFDZixRQUFNRyxjQUFtQixHQUFHSixNQUFNLENBQUNLLElBQVAsQ0FDMUIsVUFBQ0MsSUFBRDtBQUFBLGFBQWUsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFOLElBQWdCRCxJQUFJLENBQUNFLEtBQUwsS0FBZVAsV0FBOUM7QUFBQSxLQUQwQixDQUE1QjtBQUdBLFFBQUlRLGFBQUo7O0FBQ0EsUUFBSVAsVUFBSixFQUFnQjtBQUNkTyxtQkFBYSxHQUFHVCxNQUFNLENBQUNLLElBQVAsQ0FDZCxVQUFDQyxJQUFEO0FBQUEsZUFBZUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCSCxjQUFjLENBQUNNLEdBQS9CLElBQXNDSixJQUFJLENBQUNFLEtBQUwsS0FBZU4sVUFBcEU7QUFBQSxPQURjLENBQWhCO0FBR0Q7O0FBQ0RDLE9BQUcsQ0FBQ0ksTUFBSixHQUFhSCxjQUFjLEdBQUdBLGNBQWMsQ0FBQ00sR0FBbEIsR0FBd0IsRUFBbkQ7QUFDQVAsT0FBRyxDQUFDUSxLQUFKLEdBQVlGLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxHQUFqQixHQUF1QixFQUFoRDtBQUNBUCxPQUFHLENBQUNTLFlBQUosR0FBbUJSLGNBQW5CO0FBQ0FELE9BQUcsQ0FBQ1UsV0FBSixHQUFrQkosYUFBbEI7QUFDRDs7QUFDRCxTQUFPTixHQUFQO0FBQ0QsQ0E1Qk07QUE4QlA7Ozs7O0FBSU8sSUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFrQjtBQUMxQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWI7QUFDQSxNQUFNRyxHQUFHLEdBQUcsSUFBSUQsSUFBSixFQUFaO0FBQ0EsTUFBTUUsSUFBSSxHQUFHLENBQUMsQ0FBQ0QsR0FBRCxHQUFPRixJQUFJLENBQUNJLE9BQUwsRUFBUixJQUEwQixJQUF2Qzs7QUFDQSxNQUFJRCxJQUFJLEdBQUcsRUFBWCxFQUFlO0FBQ2IsV0FBTyxJQUFQO0FBQ0Q7O0FBQUMsTUFBSUEsSUFBSSxHQUFHLElBQVgsRUFBaUI7QUFDakIscUJBQVVFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxJQUFJLEdBQUcsRUFBakIsQ0FBVjtBQUNEOztBQUFDLE1BQUlBLElBQUksR0FBRyxPQUFPLEVBQWxCLEVBQXNCO0FBQ3RCLHFCQUFVRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBSSxHQUFHLElBQWpCLENBQVY7QUFDRDs7QUFBQyxNQUFJQSxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksQ0FBeEIsRUFBMkI7QUFDM0IscUJBQVVFLElBQUksQ0FBQ0UsS0FBTCxDQUFXSixJQUFJLElBQUksT0FBTyxFQUFYLENBQWYsQ0FBVjtBQUNEOztBQUFDLE1BQUlELEdBQUcsQ0FBQ00sV0FBSixPQUFzQlIsSUFBSSxDQUFDUSxXQUFMLEVBQTFCLEVBQThDO0FBQzlDLHFCQUFVUixJQUFJLENBQUNTLFFBQUwsS0FBa0IsQ0FBNUIsY0FBaUNULElBQUksQ0FBQ1UsT0FBTCxFQUFqQyxjQUFtRFYsSUFBSSxDQUFDVyxRQUFMLEVBQW5ELGNBQXNFWCxJQUFJLENBQUNZLFVBQUwsRUFBdEU7QUFDRDs7QUFDRCxtQkFBVVosSUFBSSxDQUFDUSxXQUFMLEVBQVYsY0FBZ0NSLElBQUksQ0FBQ1MsUUFBTCxLQUFrQixDQUFsRCxjQUF1RFQsSUFBSSxDQUFDVSxPQUFMLEVBQXZELGNBQXlFVixJQUFJLENBQUNXLFFBQUwsRUFBekUsY0FBNEZYLElBQUksQ0FBQ1ksVUFBTCxFQUE1RjtBQUNELENBaEJNO0FBa0JRO0FBQ2I3QixtQkFBaUIsRUFBakJBLGlCQURhO0FBRWJlLFlBQVUsRUFBVkE7QUFGYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yMjAyNWRmNzUyOTkzY2UwNDE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOeUseWBh+WQjeafpeaJvuWvueW6lOeItuWtkOe6p0lEXHJcbiAqIEBwYXJhbSBsYWJlbHMg5YiG57G75pWw57uEXHJcbiAqIEBwYXJhbSBwYXJlbnRBbGlhcyDniLbnuqflgYflkI1cclxuICogQHBhcmFtIENoaWxkQWxpYXMg5a2Q57qn5YGH5ZCNXHJcbiAqIEByZXR1cm5zIOeItuWtkOe6p0lEXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UGFyZW50QW5kQ2hpbGQgPSAoXHJcbiAgbGFiZWxzOiBbXSxcclxuICBwYXJlbnRBbGlhcz86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gIENoaWxkQWxpYXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuKSA9PiB7XHJcbiAgdHlwZSBJZHMgPSB7XHJcbiAgICBwYXJlbnQ/OiBzdHJpbmcsXHJcbiAgICBjaGlsZD86IHN0cmluZyxcclxuICAgIHBhcmVudEVudGl0eT86IHt9LFxyXG4gICAgY2hpbGRFbnRpdHk/OiB7fSxcclxuICB9O1xyXG4gIGNvbnN0IGlkczogSWRzID0ge307XHJcbiAgaWYgKHBhcmVudEFsaWFzKSB7XHJcbiAgICBjb25zdCByZXBsYWNlZFBhcmVudDogYW55ID0gbGFiZWxzLmZpbmQoXHJcbiAgICAgIChpdGVtOiBhbnkpID0+ICFpdGVtLnBhcmVudCAmJiBpdGVtLmFsaWFzID09PSBwYXJlbnRBbGlhcyxcclxuICAgICk7XHJcbiAgICBsZXQgcmVwbGFjZWRDaGlsZDogYW55O1xyXG4gICAgaWYgKENoaWxkQWxpYXMpIHtcclxuICAgICAgcmVwbGFjZWRDaGlsZCA9IGxhYmVscy5maW5kKFxyXG4gICAgICAgIChpdGVtOiBhbnkpID0+IGl0ZW0ucGFyZW50ID09PSByZXBsYWNlZFBhcmVudC5faWQgJiYgaXRlbS5hbGlhcyA9PT0gQ2hpbGRBbGlhcyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlkcy5wYXJlbnQgPSByZXBsYWNlZFBhcmVudCA/IHJlcGxhY2VkUGFyZW50Ll9pZCA6ICcnO1xyXG4gICAgaWRzLmNoaWxkID0gcmVwbGFjZWRDaGlsZCA/IHJlcGxhY2VkQ2hpbGQuX2lkIDogJyc7XHJcbiAgICBpZHMucGFyZW50RW50aXR5ID0gcmVwbGFjZWRQYXJlbnQ7XHJcbiAgICBpZHMuY2hpbGRFbnRpdHkgPSByZXBsYWNlZENoaWxkO1xyXG4gIH1cclxuICByZXR1cm4gaWRzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOi9rOaNouaXtumXtOagvOW8j1xyXG4gKiBAcGFyYW0gdGltZSDml7bpl7TlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRpZmYgPSAoK25vdyAtIGRhdGUuZ2V0VGltZSgpKSAvIDEwMDA7XHJcbiAgaWYgKGRpZmYgPCAzMCkge1xyXG4gICAgcmV0dXJuICfliJrliJonO1xyXG4gIH0gaWYgKGRpZmYgPCAzNjAwKSB7XHJcbiAgICByZXR1cm4gYCR7TWF0aC5jZWlsKGRpZmYgLyA2MCl95YiG6ZKf5YmNYDtcclxuICB9IGlmIChkaWZmIDwgMzYwMCAqIDI0KSB7XHJcbiAgICByZXR1cm4gYCR7TWF0aC5jZWlsKGRpZmYgLyAzNjAwKX3lsI/ml7bliY1gO1xyXG4gIH0gaWYgKGRpZmYgPD0gMzYwMCAqIDI0ICogNykge1xyXG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoZGlmZiAvICgzNjAwICogMjQpKX3lpKnliY1gO1xyXG4gIH0gaWYgKG5vdy5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfSAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX1gO1xyXG4gIH1cclxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9ICR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0UGFyZW50QW5kQ2hpbGQsXHJcbiAgZm9ybWF0VGltZSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==