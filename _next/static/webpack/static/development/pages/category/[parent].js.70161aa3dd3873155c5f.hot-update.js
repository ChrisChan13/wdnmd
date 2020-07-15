webpackHotUpdate("static\\development\\pages\\category\\[parent].js",{

/***/ "./pages/category/[parent]/index.tsx":
/*!*******************************************!*\
  !*** ./pages/category/[parent]/index.tsx ***!
  \*******************************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apis */ "./apis/index.ts");
/* harmony import */ var _components_Labels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Labels */ "./components/Labels/index.tsx");
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Articles */ "./components/Articles/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../index.less */ "./pages/category/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");







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
          articles = _this$props.articles,
          parentEntity = _this$props.parentEntity;
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_13___default.a.container
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "".concat(parentEntity.label, " - WDNMD - ChrisChan"))), __jsx(_components_Labels__WEBPACK_IMPORTED_MODULE_11__["default"], {
        labels: labels,
        parent: parent
      }), __jsx(_components_Articles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        articles: articles
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var parent, labels, _getParentAndChild, id, parentEntity, articles;

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
                parent = props.query.parent;
                _context.next = 5;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_10__["getLabels"])();

              case 5:
                labels = _context.sent;
                _getParentAndChild = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getParentAndChild"])(labels, parent), id = _getParentAndChild.parent, parentEntity = _getParentAndChild.parentEntity;
                _context.next = 9;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_10__["getArticles"])(id);

              case 9:
                articles = _context.sent;
                return _context.abrupt("return", {
                  labels: labels,
                  parent: parent,
                  articles: articles,
                  parentEntity: parentEntity
                });

              case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXRlZ29yeS9bcGFyZW50XS9pbmRleC50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIkNhdGVnb3J5IiwicHJvcHMiLCJsYWJlbHMiLCJwYXJlbnQiLCJhcnRpY2xlcyIsInBhcmVudEVudGl0eSIsInN0eWxlIiwiY29udGFpbmVyIiwibGFiZWwiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwicXVlcnkiLCJnZXRMYWJlbHMiLCJnZXRQYXJlbnRBbmRDaGlsZCIsImlkIiwiZ2V0QXJ0aWNsZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQVNhQSxHLEdBQVFDLGtEQUFTLEdBQUdDLG1CLENBQXpCQyxHOztJQUVhQyxROzs7Ozs7Ozs7Ozs7OzZCQWVWO0FBQUEsd0JBTUgsS0FBS0MsS0FORjtBQUFBLFVBRUxDLE1BRkssZUFFTEEsTUFGSztBQUFBLFVBR0xDLE1BSEssZUFHTEEsTUFISztBQUFBLFVBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFlBTEssZUFLTEEsWUFMSztBQU9QLGFBQ0U7QUFBSyxpQkFBUyxFQUFFQyxtREFBSyxDQUFDQztBQUF0QixTQUNFLE1BQUMsZ0RBQUQsUUFDRSwrQkFBV0YsWUFBWSxDQUFDRyxLQUF4QiwwQkFERixDQURGLEVBSUUsTUFBQywyREFBRDtBQUFRLGNBQU0sRUFBRU4sTUFBaEI7QUFBd0IsY0FBTSxFQUFFQztBQUFoQyxRQUpGLEVBS0UsTUFBQyw2REFBRDtBQUFVLGdCQUFRLEVBQUVDO0FBQXBCLFFBTEYsQ0FERjtBQVNEOzs7OytOQTlCNEJILEs7Ozs7Ozs7c0JBQ3ZCLFNBQW1CTCxHQUFHLEtBQUssSzs7Ozs7aURBQWVhLE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCVCxLQUE5QixDQUFvQ1UsUzs7O0FBQ3pFUixzQixHQUFXRixLQUFLLENBQUNXLEssQ0FBakJULE07O3VCQUNhVSx3REFBUyxFOzs7QUFBeEJYLHNCO3FDQUMrQlksaUVBQWlCLENBQUNaLE1BQUQsRUFBU0MsTUFBVCxDLEVBQXRDWSxFLHNCQUFSWixNLEVBQVlFLFksc0JBQUFBLFk7O3VCQUNHVywwREFBVyxDQUFDRCxFQUFELEM7OztBQUE1Qlgsd0I7aURBQ0M7QUFDTEYsd0JBQU0sRUFBTkEsTUFESztBQUVMQyx3QkFBTSxFQUFOQSxNQUZLO0FBR0xDLDBCQUFRLEVBQVJBLFFBSEs7QUFJTEMsOEJBQVksRUFBWkE7QUFKSyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVAyQlksNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2F0ZWdvcnlcXFtwYXJlbnRdLmpzLjcwMTYxYWEzZGQzODczMTU1YzVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCB7IGdldExhYmVscywgZ2V0QXJ0aWNsZXMgfSBmcm9tICcuLi8uLi8uLi9hcGlzJztcclxuaW1wb3J0IExhYmVscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xhYmVscyc7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0FydGljbGVzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnRBbmRDaGlsZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgbGFiZWxzOiBbXSxcclxuICBwYXJlbnQ6IHN0cmluZyxcclxuICBhcnRpY2xlczogW10sXHJcbiAgcGFyZW50RW50aXR5OiBhbnksXHJcbn07XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzOiB7IHF1ZXJ5OiB7IHBhcmVudDogc3RyaW5nIH0gfSkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgIT09ICdkZXYnKSByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xyXG4gICAgY29uc3QgeyBwYXJlbnQgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgZ2V0TGFiZWxzKCk7XHJcbiAgICBjb25zdCB7IHBhcmVudDogaWQsIHBhcmVudEVudGl0eSB9ID0gZ2V0UGFyZW50QW5kQ2hpbGQobGFiZWxzLCBwYXJlbnQpO1xyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBnZXRBcnRpY2xlcyhpZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgIHBhcmVudEVudGl0eSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxhYmVscyxcclxuICAgICAgcGFyZW50LFxyXG4gICAgICBhcnRpY2xlcyxcclxuICAgICAgcGFyZW50RW50aXR5LFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57YCR7cGFyZW50RW50aXR5LmxhYmVsfSAtIFdETk1EIC0gQ2hyaXNDaGFuYH08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TGFiZWxzIGxhYmVscz17bGFiZWxzfSBwYXJlbnQ9e3BhcmVudH0gLz5cclxuICAgICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=