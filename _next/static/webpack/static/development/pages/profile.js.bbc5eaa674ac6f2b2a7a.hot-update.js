webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile/index.tsx":
/*!*********************************!*\
  !*** ./pages/profile/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_json2html_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/json2html/index.css */ "./utils/json2html/index.css");
/* harmony import */ var _utils_json2html_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_json2html_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../apis */ "./apis/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.less */ "./pages/profile/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_json2html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/json2html */ "./utils/json2html/index.js");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var ENV = next_config__WEBPACK_IMPORTED_MODULE_11___default()().publicRuntimeConfig.env;

var Profile = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile, _React$Component);

  var _super = _createSuper(Profile);

  function Profile(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Profile);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "profileTable", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "activinessChart", void 0);

    _this.profileTable = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.activinessChart = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$profile = _this$props.profile,
          profile = _this$props$profile === void 0 ? {} : _this$props$profile,
          _this$props$heatmap = _this$props.heatmap,
          heatmap = _this$props$heatmap === void 0 ? [] : _this$props$heatmap;

      if (this.profileTable) {
        this.profileTable.current.append(Object(_utils_json2html__WEBPACK_IMPORTED_MODULE_17__["default"])(profile));
      }

      if (this.activinessChart) {
        var now = new Date();
        var ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
        var last = new Date(now.getTime() - ONE_YEAR);
        var options = {
          tooltip: {
            formatter: function formatter(params) {
              var _params$data = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(params.data, 2),
                  date = _params$data[0],
                  heat = _params$data[1];

              return date;
            }
          },
          visualMap: {
            pieces: [{
              gt: 0,
              lt: 1.25,
              color: '#9be9a8'
            }, {
              gte: 1.25,
              lt: 2.5,
              color: '#40c463'
            }, {
              gte: 2.5,
              lt: 5,
              color: '#30a14e'
            }, {
              gte: 5,
              color: '#216e39'
            }],
            hoverLink: false,
            itemWidth: 13,
            itemHeight: 13,
            text: ['More', 'Less'],
            type: 'piecewise',
            orient: 'horizontal',
            left: 30,
            top: 30,
            textStyle: {
              color: '#000'
            }
          },
          calendar: {
            top: 90,
            left: 30,
            right: 30,
            cellSize: 13,
            range: ["".concat(last.getFullYear(), "-").concat(last.getMonth() + 1, "-").concat(last.getDate()), "".concat(now.getFullYear(), "-").concat(now.getMonth() + 1, "-").concat(now.getDate())],
            itemStyle: {
              normal: {
                borderWidth: 0.5
              }
            },
            yearLabel: {
              show: false
            }
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: heatmap.map(function (item) {
              return [item.date, item.heat];
            })
          }
        };
        var chart = echarts__WEBPACK_IMPORTED_MODULE_13___default.a.init(this.activinessChart.current);
        chart.clear();
        chart.setOption(options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_16___default.a.container
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, "\u5173\u4E8E\u6211 - WDNMD - ChrisChan"), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Inconsolata"
      })), __jsx("h2", null, "\u6211\u7684\u66F4\u65B0"), __jsx("div", {
        ref: this.activinessChart,
        className: _index_less__WEBPACK_IMPORTED_MODULE_16___default.a.activiness
      }), __jsx("h2", null, "\u6211\u7684\u8D44\u6599"), __jsx("div", {
        ref: this.profileTable,
        className: _index_less__WEBPACK_IMPORTED_MODULE_16___default.a.profile
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var profile, heatmap;
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
                return Object(_apis__WEBPACK_IMPORTED_MODULE_15__["getProfile"])();

              case 4:
                profile = _context.sent;
                _context.next = 7;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_15__["getHeatmap"])();

              case 7:
                heatmap = _context.sent;
                return _context.abrupt("return", {
                  profile: profile,
                  heatmap: heatmap
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

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiaGVhdG1hcCIsImN1cnJlbnQiLCJhcHBlbmQiLCJqc29uMmh0bWwiLCJub3ciLCJEYXRlIiwiT05FX1lFQVIiLCJsYXN0IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwicGFyYW1zIiwiZGF0YSIsImRhdGUiLCJoZWF0IiwidmlzdWFsTWFwIiwicGllY2VzIiwiZ3QiLCJsdCIsImNvbG9yIiwiZ3RlIiwiaG92ZXJMaW5rIiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsInRleHQiLCJ0eXBlIiwib3JpZW50IiwibGVmdCIsInRvcCIsInRleHRTdHlsZSIsImNhbGVuZGFyIiwicmlnaHQiLCJjZWxsU2l6ZSIsInJhbmdlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJpdGVtU3R5bGUiLCJub3JtYWwiLCJib3JkZXJXaWR0aCIsInllYXJMYWJlbCIsInNob3ciLCJzZXJpZXMiLCJjb29yZGluYXRlU3lzdGVtIiwibWFwIiwiaXRlbSIsImNoYXJ0IiwiZWNoYXJ0cyIsImluaXQiLCJjbGVhciIsInNldE9wdGlvbiIsInN0eWxlIiwiY29udGFpbmVyIiwiYWN0aXZpbmVzcyIsIndpbmRvdyIsIl9fTkVYVF9EQVRBX18iLCJwYWdlUHJvcHMiLCJnZXRQcm9maWxlIiwiZ2V0SGVhdG1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNB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TEMseUJBQU8sRUFBUEE7QUFGSyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWYwQkosNkNBQUssQ0FBQ2dFLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuYmJjNWVhYTY3NGFjNmYyYjJhN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vdXRpbHMvanNvbjJodG1sL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUsIGdldEhlYXRtYXAgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBqc29uMmh0bWwgZnJvbSAnLi4vLi4vdXRpbHMvanNvbjJodG1sJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcHJvZmlsZToge30sXHJcbiAgaGVhdG1hcDogW10sXHJcbn07XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHByb2ZpbGVUYWJsZTogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgYWN0aXZpbmVzc0NoYXJ0OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnByb2ZpbGVUYWJsZSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuYWN0aXZpbmVzc0NoYXJ0ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wczogQXBwQ29udGV4dCkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgIT09ICdkZXYnKSByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldFByb2ZpbGUoKTtcclxuICAgIGNvbnN0IGhlYXRtYXAgPSBhd2FpdCBnZXRIZWF0bWFwKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlLFxyXG4gICAgICBoZWF0bWFwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlID0ge30sIGhlYXRtYXAgPSBbXSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb2ZpbGVUYWJsZSkge1xyXG4gICAgICAodGhpcy5wcm9maWxlVGFibGUgYXMgYW55KS5jdXJyZW50LmFwcGVuZChqc29uMmh0bWwocHJvZmlsZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aXZpbmVzc0NoYXJ0KSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IE9ORV9ZRUFSID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBPTkVfWUVBUik7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9ybWF0dGVyKHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtkYXRlLCBoZWF0XSA9IHBhcmFtcy5kYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXN1YWxNYXA6IHtcclxuICAgICAgICAgIHBpZWNlczogW1xyXG4gICAgICAgICAgICB7IGd0OiAwLCBsdDogMS4yNSwgY29sb3I6ICcjOWJlOWE4JyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogMS4yNSwgbHQ6IDIuNSwgY29sb3I6ICcjNDBjNDYzJyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogMi41LCBsdDogNSwgY29sb3I6ICcjMzBhMTRlJyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogNSwgY29sb3I6ICcjMjE2ZTM5JyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGhvdmVyTGluazogZmFsc2UsXHJcbiAgICAgICAgICBpdGVtV2lkdGg6IDEzLFxyXG4gICAgICAgICAgaXRlbUhlaWdodDogMTMsXHJcbiAgICAgICAgICB0ZXh0OiBbJ01vcmUnLCAnTGVzcyddLFxyXG4gICAgICAgICAgdHlwZTogJ3BpZWNld2lzZScsXHJcbiAgICAgICAgICBvcmllbnQ6ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgdG9wOiAzMCxcclxuICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICB0b3A6IDkwLFxyXG4gICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICByaWdodDogMzAsXHJcbiAgICAgICAgICBjZWxsU2l6ZTogMTMsXHJcbiAgICAgICAgICByYW5nZTogW1xyXG4gICAgICAgICAgICBgJHtsYXN0LmdldEZ1bGxZZWFyKCl9LSR7bGFzdC5nZXRNb250aCgpICsgMX0tJHtsYXN0LmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHtub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICBub3JtYWw6IHsgYm9yZGVyV2lkdGg6IDAuNSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHllYXJMYWJlbDogeyBzaG93OiBmYWxzZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnaGVhdG1hcCcsXHJcbiAgICAgICAgICBjb29yZGluYXRlU3lzdGVtOiAnY2FsZW5kYXInLFxyXG4gICAgICAgICAgZGF0YTogaGVhdG1hcC5tYXAoKGl0ZW06IGFueSkgPT4gKFtpdGVtLmRhdGUsIGl0ZW0uaGVhdF0pKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdCgodGhpcy5hY3RpdmluZXNzQ2hhcnQgYXMgYW55KS5jdXJyZW50KTtcclxuICAgICAgY2hhcnQuY2xlYXIoKTtcclxuICAgICAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+5YWz5LqO5oiRIC0gV0ROTUQgLSBDaHJpc0NoYW48L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGFcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDI+5oiR55qE5pu05pawPC9oMj5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5hY3RpdmluZXNzQ2hhcnR9IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZpbmVzc30gLz5cclxuICAgICAgICA8aDI+5oiR55qE6LWE5paZPC9oMj5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5wcm9maWxlVGFibGV9IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9