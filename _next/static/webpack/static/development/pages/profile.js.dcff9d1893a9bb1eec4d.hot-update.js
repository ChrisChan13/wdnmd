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
                  counts = _params$data[1];

              var _date$split = date.split('-'),
                  _date$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_date$split, 3),
                  year = _date$split2[0],
                  month = _date$split2[1],
                  day = _date$split2[2];

              return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
            }
          },
          visualMap: {
            pieces: [{
              gte: 0.1,
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
      })), __jsx("h2", null, "\u6211\u7684\u6D3B\u8DC3\u5EA6"), __jsx("div", {
        ref: this.activinessChart,
        className: _index_less__WEBPACK_IMPORTED_MODULE_16___default.a.activiness
      }), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiaGVhdG1hcCIsImN1cnJlbnQiLCJhcHBlbmQiLCJqc29uMmh0bWwiLCJub3ciLCJEYXRlIiwiT05FX1lFQVIiLCJsYXN0IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwicGFyYW1zIiwiZGF0YSIsImRhdGUiLCJjb3VudHMiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsInBhZFN0YXJ0IiwidmlzdWFsTWFwIiwicGllY2VzIiwiZ3RlIiwibHQiLCJjb2xvciIsImhvdmVyTGluayIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJ0ZXh0IiwidHlwZSIsIm9yaWVudCIsImxlZnQiLCJ0b3AiLCJ0ZXh0U3R5bGUiLCJjYWxlbmRhciIsInJpZ2h0IiwiY2VsbFNpemUiLCJyYW5nZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaXRlbVN0eWxlIiwibm9ybWFsIiwiYm9yZGVyV2lkdGgiLCJ5ZWFyTGFiZWwiLCJzaG93Iiwic2VyaWVzIiwiY29vcmRpbmF0ZVN5c3RlbSIsIm1hcCIsIml0ZW0iLCJoZWF0IiwiY2hhcnQiLCJlY2hhcnRzIiwiaW5pdCIsImNsZWFyIiwic2V0T3B0aW9uIiwic3R5bGUiLCJjb250YWluZXIiLCJhY3RpdmluZXNzIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsInBhZ2VQcm9wcyIsImdldFByb2ZpbGUiLCJnZXRIZWF0bWFwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFOEQsbURBQUssQ0FBQzFEO0FBQTlDLFFBUEYsQ0FERjtBQVdEOzs7OytOQXBGNEJMLEs7Ozs7OztzQkFDdkIsU0FBbUJMLEdBQUcsS0FBSyxLOzs7OztpREFBZXVFLE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCbkUsS0FBOUIsQ0FBb0NvRSxTOzs7O3VCQUMzREMseURBQVUsRTs7O0FBQTFCaEUsdUI7O3VCQUNnQmlFLHlEQUFVLEU7OztBQUExQmhFLHVCO2lEQUNDO0FBQ0xELHlCQUFPLEVBQVBBLE9BREs7QUFFTEMseUJBQU8sRUFBUEE7QUFGSyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWYwQkosNkNBQUssQ0FBQ3FFLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuZGNmZjlkMTg5M2E5YmIxZWVjNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vdXRpbHMvanNvbjJodG1sL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUsIGdldEhlYXRtYXAgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBqc29uMmh0bWwgZnJvbSAnLi4vLi4vdXRpbHMvanNvbjJodG1sJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcHJvZmlsZToge30sXHJcbiAgaGVhdG1hcDogW10sXHJcbn07XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHByb2ZpbGVUYWJsZTogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgYWN0aXZpbmVzc0NoYXJ0OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnByb2ZpbGVUYWJsZSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuYWN0aXZpbmVzc0NoYXJ0ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wczogQXBwQ29udGV4dCkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgIT09ICdkZXYnKSByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldFByb2ZpbGUoKTtcclxuICAgIGNvbnN0IGhlYXRtYXAgPSBhd2FpdCBnZXRIZWF0bWFwKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlLFxyXG4gICAgICBoZWF0bWFwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlID0ge30sIGhlYXRtYXAgPSBbXSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb2ZpbGVUYWJsZSkge1xyXG4gICAgICAodGhpcy5wcm9maWxlVGFibGUgYXMgYW55KS5jdXJyZW50LmFwcGVuZChqc29uMmh0bWwocHJvZmlsZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aXZpbmVzc0NoYXJ0KSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IE9ORV9ZRUFSID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBPTkVfWUVBUik7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9ybWF0dGVyKHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtkYXRlLCBjb3VudHNdID0gcGFyYW1zLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0tJHtkYXkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc3VhbE1hcDoge1xyXG4gICAgICAgICAgcGllY2VzOiBbXHJcbiAgICAgICAgICAgIHsgZ3RlOiAwLjEsIGx0OiAxLjI1LCBjb2xvcjogJyM5YmU5YTgnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAxLjI1LCBsdDogMi41LCBjb2xvcjogJyM0MGM0NjMnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAyLjUsIGx0OiA1LCBjb2xvcjogJyMzMGExNGUnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiA1LCBjb2xvcjogJyMyMTZlMzknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaG92ZXJMaW5rOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1XaWR0aDogMTMsXHJcbiAgICAgICAgICBpdGVtSGVpZ2h0OiAxMyxcclxuICAgICAgICAgIHRleHQ6IFsnTW9yZScsICdMZXNzJ10sXHJcbiAgICAgICAgICB0eXBlOiAncGllY2V3aXNlJyxcclxuICAgICAgICAgIG9yaWVudDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICB0b3A6IDMwLFxyXG4gICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsZW5kYXI6IHtcclxuICAgICAgICAgIHRvcDogOTAsXHJcbiAgICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICAgIHJpZ2h0OiAzMCxcclxuICAgICAgICAgIGNlbGxTaXplOiAxMyxcclxuICAgICAgICAgIHJhbmdlOiBbXHJcbiAgICAgICAgICAgIGAke2xhc3QuZ2V0RnVsbFllYXIoKX0tJHtsYXN0LmdldE1vbnRoKCkgKyAxfS0ke2xhc3QuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICAgIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke25vdy5nZXRNb250aCgpICsgMX0tJHtub3cuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgIG5vcm1hbDogeyBib3JkZXJXaWR0aDogMC41IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeWVhckxhYmVsOiB7IHNob3c6IGZhbHNlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcclxuICAgICAgICAgIGNvb3JkaW5hdGVTeXN0ZW06ICdjYWxlbmRhcicsXHJcbiAgICAgICAgICBkYXRhOiBoZWF0bWFwLm1hcCgoaXRlbTogYW55KSA9PiAoW2l0ZW0uZGF0ZSwgaXRlbS5oZWF0XSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KCh0aGlzLmFjdGl2aW5lc3NDaGFydCBhcyBhbnkpLmN1cnJlbnQpO1xyXG4gICAgICBjaGFydC5jbGVhcigpO1xyXG4gICAgICBjaGFydC5zZXRPcHRpb24ob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT7lhbPkuo7miJEgLSBXRE5NRCAtIENocmlzQ2hhbjwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JbmNvbnNvbGF0YVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMj7miJHnmoTmtLvot4PluqY8L2gyPlxyXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmFjdGl2aW5lc3NDaGFydH0gY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmluZXNzfSAvPlxyXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLnByb2ZpbGVUYWJsZX0gY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=