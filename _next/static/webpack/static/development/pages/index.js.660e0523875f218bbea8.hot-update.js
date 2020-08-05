webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
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
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../apis */ "./apis/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Labels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Labels */ "./components/Labels/index.tsx");
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Articles */ "./components/Articles/index.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar/index.tsx");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var ENV = next_config__WEBPACK_IMPORTED_MODULE_8___default()().publicRuntimeConfig.env;

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labels = _this$props.labels,
          articles = _this$props.articles;
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a.container
      }, __jsx(_components_Labels__WEBPACK_IMPORTED_MODULE_11__["default"], {
        labels: labels
      }), __jsx(_components_Articles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        articles: articles
      }), __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var labels, articles;
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
                _context.next = 4;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_9__["getLabels"])();

              case 4:
                labels = _context.sent;
                _context.next = 7;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_9__["getArticles"])();

              case 7:
                articles = _context.sent;
                return _context.abrupt("return", {
                  labels: labels,
                  articles: articles
                });

              case 9:
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

  return Index;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIkluZGV4IiwicHJvcHMiLCJsYWJlbHMiLCJhcnRpY2xlcyIsInN0eWxlIiwiY29udGFpbmVyIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsInBhZ2VQcm9wcyIsImdldExhYmVscyIsImdldEFydGljbGVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU9hQSxHLEdBQVFDLGtEQUFTLEdBQUdDLG1CLENBQXpCQyxHOztJQUVhQyxLOzs7Ozs7Ozs7Ozs7OzZCQVdWO0FBQUEsd0JBQ3NCLEtBQUtDLEtBRDNCO0FBQUEsVUFDQ0MsTUFERCxlQUNDQSxNQUREO0FBQUEsVUFDU0MsUUFEVCxlQUNTQSxRQURUO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQUVDLG1EQUFLLENBQUNDO0FBQXRCLFNBQ0UsTUFBQywyREFBRDtBQUFRLGNBQU0sRUFBRUg7QUFBaEIsUUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBVSxnQkFBUSxFQUFFQztBQUFwQixRQUZGLEVBR0UsTUFBQyw0REFBRCxPQUhGLENBREY7QUFPRDs7OzsrTkFuQjRCRixLOzs7Ozs7c0JBQ3ZCLFNBQW1CTCxHQUFHLEtBQUssSzs7Ozs7aURBQWVVLE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCTixLQUE5QixDQUFvQ08sUzs7Ozt1QkFDNURDLHVEQUFTLEU7OztBQUF4QlAsc0I7O3VCQUNpQlEseURBQVcsRTs7O0FBQTVCUCx3QjtpREFDQztBQUNMRCx3QkFBTSxFQUFOQSxNQURLO0FBRUxDLDBCQUFRLEVBQVJBO0FBRkssaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFMd0JRLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY2MGUwNTIzODc1ZjIxOGJiZWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuXHJcbmltcG9ydCB7IGdldExhYmVscywgZ2V0QXJ0aWNsZXMgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBMYWJlbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYWJlbHMnO1xyXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnRpY2xlcyc7XHJcbmltcG9ydCBTaWRlcmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBsYWJlbHM6IFtdLFxyXG4gIGFydGljbGVzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHsgZW52OiBFTlYgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHM6IEFwcENvbnRleHQpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgRU5WICE9PSAnZGV2JykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IGxhYmVscyA9IGF3YWl0IGdldExhYmVscygpO1xyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBnZXRBcnRpY2xlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBhcnRpY2xlcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGxhYmVscywgYXJ0aWNsZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8TGFiZWxzIGxhYmVscz17bGFiZWxzfSAvPlxyXG4gICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICAgICAgPFNpZGVyYmFyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==