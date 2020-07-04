webpackHotUpdate("static\\development\\pages\\category\\[parent]\\[child].js",{

/***/ "./pages/category/[parent]/[child].tsx":
/*!*********************************************!*\
  !*** ./pages/category/[parent]/[child].tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apis */ "./apis/index.ts");
/* harmony import */ var _components_Labels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Labels */ "./components/Labels/index.tsx");
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Articles */ "./components/Articles/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../index.less */ "./pages/category/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_12__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ENV = next_config__WEBPACK_IMPORTED_MODULE_8___default()().publicRuntimeConfig.env;

var Category = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Category, _React$Component);

  var _super = _createSuper(Category);

  function Category() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Category);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Category, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labels = _this$props.labels,
          parent = _this$props.parent,
          child = _this$props.child;
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_12___default.a.container
      }, __jsx(_components_Labels__WEBPACK_IMPORTED_MODULE_10__["default"], {
        labels: labels,
        parent: parent,
        child: child
      }), __jsx(_components_Articles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        articles: []
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var _props$query, parent, child, labels;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!( true && ENV !== 'dev')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", window.__NEXT_DATA__.props.pageProps);

              case 2:
                _props$query = props.query, parent = _props$query.parent, child = _props$query.child;
                _context.next = 5;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_9__["getLabels"])();

              case 5:
                labels = _context.sent;
                return _context.abrupt("return", {
                  labels: labels,
                  parent: parent,
                  child: child
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXRlZ29yeS9bcGFyZW50XS9bY2hpbGRdLnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImxhYmVscyIsInBhcmVudCIsImNoaWxkIiwic3R5bGUiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwicXVlcnkiLCJnZXRMYWJlbHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBUWFBLEcsR0FBUUMsa0RBQVMsR0FBR0MsbUIsQ0FBekJDLEc7O0lBRWFDLFE7Ozs7Ozs7Ozs7Ozs7NkJBWVY7QUFBQSx3QkFDMkIsS0FBS0MsS0FEaEM7QUFBQSxVQUNDQyxNQURELGVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxNQURULGVBQ1NBLE1BRFQ7QUFBQSxVQUNpQkMsS0FEakIsZUFDaUJBLEtBRGpCO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQUVDLG1EQUFLLENBQUNDO0FBQXRCLFNBQ0UsTUFBQywyREFBRDtBQUFRLGNBQU0sRUFBRUosTUFBaEI7QUFBd0IsY0FBTSxFQUFFQyxNQUFoQztBQUF3QyxhQUFLLEVBQUVDO0FBQS9DLFFBREYsRUFFRSxNQUFDLDZEQUFEO0FBQVUsZ0JBQVEsRUFBRTtBQUFwQixRQUZGLENBREY7QUFNRDs7OzsrTkFuQjRCSCxLOzs7Ozs7O3NCQUN2QixTQUFtQkwsR0FBRyxLQUFLLEs7Ozs7O2lEQUFlVyxNQUFELENBQWdCQyxhQUFoQixDQUE4QlAsS0FBOUIsQ0FBb0NRLFM7OzsrQkFDdkRSLEtBQUssQ0FBQ1MsSyxFQUF4QlAsTSxnQkFBQUEsTSxFQUFRQyxLLGdCQUFBQSxLOzt1QkFDS08sdURBQVMsRTs7O0FBQXhCVCxzQjtpREFDQztBQUNMQSx3QkFBTSxFQUFOQSxNQURLO0FBRUxDLHdCQUFNLEVBQU5BLE1BRks7QUFHTEMsdUJBQUssRUFBTEE7QUFISyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUwyQlEsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2F0ZWdvcnlcXFtwYXJlbnRdXFxbY2hpbGRdLmpzLmYxNTg0MWVjZGRiZjA4OWQ3YTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuXHJcbmltcG9ydCB7IGdldExhYmVscyB9IGZyb20gJy4uLy4uLy4uL2FwaXMnO1xyXG5pbXBvcnQgTGFiZWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGFiZWxzJztcclxuaW1wb3J0IEFydGljbGVzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQXJ0aWNsZXMnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vaW5kZXgubGVzcyc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGxhYmVsczogW10sXHJcbiAgcGFyZW50OiBzdHJpbmcsXHJcbiAgY2hpbGQ6IHN0cmluZyxcclxufTtcclxuXHJcbmNvbnN0IHsgZW52OiBFTlYgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHM6IHsgcXVlcnk6IHsgcGFyZW50OiBzdHJpbmcsIGNoaWxkOiBzdHJpbmcgfSB9KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyICYmIEVOViAhPT0gJ2RldicpIHJldHVybiAod2luZG93IGFzIGFueSkuX19ORVhUX0RBVEFfXy5wcm9wcy5wYWdlUHJvcHM7XHJcbiAgICBjb25zdCB7IHBhcmVudCwgY2hpbGQgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgZ2V0TGFiZWxzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgY2hpbGQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBsYWJlbHMsIHBhcmVudCwgY2hpbGQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8TGFiZWxzIGxhYmVscz17bGFiZWxzfSBwYXJlbnQ9e3BhcmVudH0gY2hpbGQ9e2NoaWxkfSAvPlxyXG4gICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17W119IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==