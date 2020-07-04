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
      var _this$props$profile = this.props.profile,
          profile = _this$props$profile === void 0 ? {} : _this$props$profile;

      if (this.profileTable) {
        this.profileTable.current.append(Object(_utils_json2html__WEBPACK_IMPORTED_MODULE_17__["default"])(profile));
      }

      if (this.activinessChart) {
        var heatmap = [];
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
              color: '#d6e685'
            }, {
              gte: 1.25,
              lt: 2.5,
              color: '#8cc665'
            }, {
              gte: 2.5,
              lt: 5,
              color: '#44a340'
            }, {
              gte: 5,
              color: '#1e6923'
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
              return [item.date, item.counts];
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
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Inconsolata"
      })), __jsx("div", {
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
        var profile;
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
                return _context.abrupt("return", {
                  profile: profile
                });

              case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiY3VycmVudCIsImFwcGVuZCIsImpzb24yaHRtbCIsImhlYXRtYXAiLCJub3ciLCJEYXRlIiwiT05FX1lFQVIiLCJsYXN0IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwicGFyYW1zIiwiZGF0YSIsImRhdGUiLCJjb3VudHMiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsInBhZFN0YXJ0IiwidmlzdWFsTWFwIiwicGllY2VzIiwiZ3RlIiwibHQiLCJjb2xvciIsImhvdmVyTGluayIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJ0ZXh0IiwidHlwZSIsIm9yaWVudCIsImxlZnQiLCJ0b3AiLCJ0ZXh0U3R5bGUiLCJjYWxlbmRhciIsInJpZ2h0IiwiY2VsbFNpemUiLCJyYW5nZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaXRlbVN0eWxlIiwibm9ybWFsIiwiYm9yZGVyV2lkdGgiLCJ5ZWFyTGFiZWwiLCJzaG93Iiwic2VyaWVzIiwiY29vcmRpbmF0ZVN5c3RlbSIsIm1hcCIsIml0ZW0iLCJjaGFydCIsImVjaGFydHMiLCJpbml0IiwiY2xlYXIiLCJzZXRPcHRpb24iLCJzdHlsZSIsImNvbnRhaW5lciIsImFjdGl2aW5lc3MiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwiZ2V0UHJvZmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7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LFNBQW1CTCxHQUFHLEtBQUssSzs7Ozs7aURBQWVzRSxNQUFELENBQWdCQyxhQUFoQixDQUE4QmxFLEtBQTlCLENBQW9DbUUsUzs7Ozt1QkFDM0RDLHlEQUFVLEU7OztBQUExQi9ELHVCO2lEQUNDO0FBQ0xBLHlCQUFPLEVBQVBBO0FBREssaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFkMEJILDZDQUFLLENBQUNtRSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9maWxlLmpzLmFhZmI2OGQ0Y2ViODdjYWRkYTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGVjaGFydHMgZnJvbSAnZWNoYXJ0cyc7XHJcblxyXG5pbXBvcnQgJy4uLy4uL3V0aWxzL2pzb24yaHRtbC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSAnLi4vLi4vYXBpcyc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQganNvbjJodG1sIGZyb20gJy4uLy4uL3V0aWxzL2pzb24yaHRtbCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHByb2ZpbGU6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgeyBlbnY6IEVOViB9ID0gZ2V0Q29uZmlnKCkucHVibGljUnVudGltZUNvbmZpZztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBwcm9maWxlVGFibGU6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGFjdGl2aW5lc3NDaGFydDogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9maWxlVGFibGUgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICB0aGlzLmFjdGl2aW5lc3NDaGFydCA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHM6IEFwcENvbnRleHQpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgRU5WICE9PSAnZGV2JykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlID0ge30gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9maWxlVGFibGUpIHtcclxuICAgICAgKHRoaXMucHJvZmlsZVRhYmxlIGFzIGFueSkuY3VycmVudC5hcHBlbmQoanNvbjJodG1sKHByb2ZpbGUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGl2aW5lc3NDaGFydCkge1xyXG4gICAgICBjb25zdCBoZWF0bWFwOiBbXSA9IFtdO1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBPTkVfWUVBUiA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gT05FX1lFQVIpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBbZGF0ZSwgY291bnRzXSA9IHBhcmFtcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9LSR7ZGF5LnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXN1YWxNYXA6IHtcclxuICAgICAgICAgIHBpZWNlczogW1xyXG4gICAgICAgICAgICB7IGd0ZTogMC4xLCBsdDogMS4yNSwgY29sb3I6ICcjZDZlNjg1JyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogMS4yNSwgbHQ6IDIuNSwgY29sb3I6ICcjOGNjNjY1JyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogMi41LCBsdDogNSwgY29sb3I6ICcjNDRhMzQwJyB9LFxyXG4gICAgICAgICAgICB7IGd0ZTogNSwgY29sb3I6ICcjMWU2OTIzJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGhvdmVyTGluazogZmFsc2UsXHJcbiAgICAgICAgICBpdGVtV2lkdGg6IDEzLFxyXG4gICAgICAgICAgaXRlbUhlaWdodDogMTMsXHJcbiAgICAgICAgICB0ZXh0OiBbJ01vcmUnLCAnTGVzcyddLFxyXG4gICAgICAgICAgdHlwZTogJ3BpZWNld2lzZScsXHJcbiAgICAgICAgICBvcmllbnQ6ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgdG9wOiAzMCxcclxuICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICB0b3A6IDkwLFxyXG4gICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICByaWdodDogMzAsXHJcbiAgICAgICAgICBjZWxsU2l6ZTogMTMsXHJcbiAgICAgICAgICByYW5nZTogW1xyXG4gICAgICAgICAgICBgJHtsYXN0LmdldEZ1bGxZZWFyKCl9LSR7bGFzdC5nZXRNb250aCgpICsgMX0tJHtsYXN0LmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHtub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICBub3JtYWw6IHsgYm9yZGVyV2lkdGg6IDAuNSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHllYXJMYWJlbDogeyBzaG93OiBmYWxzZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnaGVhdG1hcCcsXHJcbiAgICAgICAgICBjb29yZGluYXRlU3lzdGVtOiAnY2FsZW5kYXInLFxyXG4gICAgICAgICAgZGF0YTogaGVhdG1hcC5tYXAoKGl0ZW06IGFueSkgPT4gKFtpdGVtLmRhdGUsIGl0ZW0uY291bnRzXSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KCh0aGlzLmFjdGl2aW5lc3NDaGFydCBhcyBhbnkpLmN1cnJlbnQpO1xyXG4gICAgICBjaGFydC5jbGVhcigpO1xyXG4gICAgICBjaGFydC5zZXRPcHRpb24ob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUluY29uc29sYXRhXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMuYWN0aXZpbmVzc0NoYXJ0fSBjbGFzc05hbWU9e3N0eWxlLmFjdGl2aW5lc3N9IC8+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMucHJvZmlsZVRhYmxlfSBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==