webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Link */ "./components/Link/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./components/Header/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "isMounted", void 0);

    _this.isMounted = true;
    _this.state = {
      route: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleRouteChange();
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', this.handleRouteChange.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.off('routeChangeComplete', this.handleRouteChange.bind(this));
    }
  }, {
    key: "handleRouteChange",
    value: function handleRouteChange() {
      this.isMounted && this.setState({
        route: next_router__WEBPACK_IMPORTED_MODULE_8___default.a.route
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentRoute = this.state.route;
      var navs = [{
        url: '/',
        match: /^\/$|^\/category\/.*$/,
        label: '首页'
      }, {
        url: '/profile',
        match: /^\/profile/,
        label: '个人资料'
      }];
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-box']
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a.header
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-wrap']
      }, __jsx("strong", null, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/",
        label: "WDNMD",
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-title']
      })), __jsx("nav", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-navs']
      }, navs.map(function (route) {
        return __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
          href: route.url,
          label: route.label,
          className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-navs-item'], " ").concat(route.match.test(currentRoute) ? _index_less__WEBPACK_IMPORTED_MODULE_10___default.a['header-navs-item_active'] : ''),
          key: route.url
        });
      })))));
    }
  }]);

  return Header;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJpc01vdW50ZWQiLCJzdGF0ZSIsInJvdXRlIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsImJpbmQiLCJvZmYiLCJzZXRTdGF0ZSIsImN1cnJlbnRSb3V0ZSIsIm5hdnMiLCJ1cmwiLCJtYXRjaCIsImxhYmVsIiwic3R5bGUiLCJoZWFkZXIiLCJtYXAiLCJ0ZXN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztJQU1xQkEsTTs7Ozs7QUFHbkIsa0JBQVlDLEtBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEIsOEJBQU1BLEtBQU47O0FBRHNCOztBQUV0QixVQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQWI7QUFIc0I7QUFJdkI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLGlCQUFMO0FBQ0FDLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsS0FBS0gsaUJBQUwsQ0FBdUJJLElBQXZCLENBQTRCLElBQTVCLENBQXhDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS1AsU0FBTCxHQUFpQixLQUFqQjtBQUNBSSx3REFBTSxDQUFDQyxNQUFQLENBQWNHLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDLEtBQUtMLGlCQUFMLENBQXVCSSxJQUF2QixDQUE0QixJQUE1QixDQUF6QztBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtQLFNBQUwsSUFBa0IsS0FBS1MsUUFBTCxDQUFjO0FBQzlCUCxhQUFLLEVBQUVFLGtEQUFNLENBQUNGO0FBRGdCLE9BQWQsQ0FBbEI7QUFHRDs7OzZCQUVRO0FBQUEsVUFDUVEsWUFEUixHQUN5QixLQUFLVCxLQUQ5QixDQUNDQyxLQUREO0FBRVAsVUFBTVMsSUFBSSxHQUFHLENBQUM7QUFDWkMsV0FBRyxFQUFFLEdBRE87QUFFWkMsYUFBSyxFQUFFLHVCQUZLO0FBR1pDLGFBQUssRUFBRTtBQUhLLE9BQUQsRUFJVjtBQUNERixXQUFHLEVBQUUsVUFESjtBQUVEQyxhQUFLLEVBQUUsWUFGTjtBQUdEQyxhQUFLLEVBQUU7QUFITixPQUpVLENBQWI7QUFTQSxhQUNFO0FBQUssaUJBQVMsRUFBRUMsbURBQUssQ0FBQyxZQUFEO0FBQXJCLFNBQ0U7QUFBSyxpQkFBUyxFQUFFQSxtREFBSyxDQUFDQztBQUF0QixTQUNFO0FBQUssaUJBQVMsRUFBRUQsbURBQUssQ0FBQyxhQUFEO0FBQXJCLFNBQ0Usc0JBQ0UsTUFBQyw2Q0FBRDtBQUNFLFlBQUksRUFBQyxHQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxpQkFBUyxFQUFFQSxtREFBSyxDQUFDLGNBQUQ7QUFIbEIsUUFERixDQURGLEVBUUU7QUFBSyxpQkFBUyxFQUFFQSxtREFBSyxDQUFDLGFBQUQ7QUFBckIsU0FFSUosSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ2YsS0FBRDtBQUFBLGVBQ1AsTUFBQyw2Q0FBRDtBQUNFLGNBQUksRUFBRUEsS0FBSyxDQUFDVSxHQURkO0FBRUUsZUFBSyxFQUFFVixLQUFLLENBQUNZLEtBRmY7QUFHRSxtQkFBUyxZQUFLQyxtREFBSyxDQUFDLGtCQUFELENBQVYsY0FBa0NiLEtBQUssQ0FBQ1csS0FBTixDQUFZSyxJQUFaLENBQWlCUixZQUFqQixJQUFpQ0ssbURBQUssQ0FBQyx5QkFBRCxDQUF0QyxHQUFvRSxFQUF0RyxDQUhYO0FBSUUsYUFBRyxFQUFFYixLQUFLLENBQUNVO0FBSmIsVUFETztBQUFBLE9BQVQsQ0FGSixDQVJGLENBREYsQ0FERixDQURGO0FBMkJEOzs7O0VBL0RpQ08sNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lNDg1YzhiYjE4ZDVlZjk2Y2M1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHJvdXRlOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIFN0YXRlPiB7XHJcbiAgaXNNb3VudGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXRlID0geyByb3V0ZTogJycgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSgpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3V0ZUNoYW5nZSgpIHtcclxuICAgIHRoaXMuaXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByb3V0ZTogUm91dGVyLnJvdXRlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHJvdXRlOiBjdXJyZW50Um91dGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBuYXZzID0gW3tcclxuICAgICAgdXJsOiAnLycsXHJcbiAgICAgIG1hdGNoOiAvXlxcLyR8XlxcL2NhdGVnb3J5XFwvLiokLyxcclxuICAgICAgbGFiZWw6ICfpppbpobUnLFxyXG4gICAgfSwge1xyXG4gICAgICB1cmw6ICcvcHJvZmlsZScsXHJcbiAgICAgIG1hdGNoOiAvXlxcL3Byb2ZpbGUvLFxyXG4gICAgICBsYWJlbDogJ+S4quS6uui1hOaWmScsXHJcbiAgICB9XTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaGVhZGVyLWJveCddfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaGVhZGVyLXdyYXAnXX0+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0ROTURcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnaGVhZGVyLXRpdGxlJ119XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZVsnaGVhZGVyLW5hdnMnXX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmF2cy5tYXAoKHJvdXRlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cm91dGUudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3V0ZS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlWydoZWFkZXItbmF2cy1pdGVtJ119ICR7cm91dGUubWF0Y2gudGVzdChjdXJyZW50Um91dGUpID8gc3R5bGVbJ2hlYWRlci1uYXZzLWl0ZW1fYWN0aXZlJ10gOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUudXJsfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==