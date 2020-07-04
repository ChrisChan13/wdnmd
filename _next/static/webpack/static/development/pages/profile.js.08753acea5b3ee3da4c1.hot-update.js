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
                if (!( true && ENV === 'production')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiY3VycmVudCIsImFwcGVuZCIsImpzb24yaHRtbCIsImhlYXRtYXAiLCJub3ciLCJEYXRlIiwiT05FX1lFQVIiLCJsYXN0IiwiZ2V0VGltZSIsIm9wdGlvbnMiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwicGFyYW1zIiwiZGF0YSIsImRhdGUiLCJjb3VudHMiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsInBhZFN0YXJ0IiwidmlzdWFsTWFwIiwicGllY2VzIiwiZ3RlIiwibHQiLCJjb2xvciIsImhvdmVyTGluayIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJ0ZXh0IiwidHlwZSIsIm9yaWVudCIsImxlZnQiLCJ0b3AiLCJ0ZXh0U3R5bGUiLCJjYWxlbmRhciIsInJpZ2h0IiwiY2VsbFNpemUiLCJyYW5nZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaXRlbVN0eWxlIiwibm9ybWFsIiwiYm9yZGVyV2lkdGgiLCJ5ZWFyTGFiZWwiLCJzaG93Iiwic2VyaWVzIiwiY29vcmRpbmF0ZVN5c3RlbSIsIm1hcCIsIml0ZW0iLCJjaGFydCIsImVjaGFydHMiLCJpbml0IiwiY2xlYXIiLCJzZXRPcHRpb24iLCJzdHlsZSIsImNvbnRhaW5lciIsImFjdGl2aW5lc3MiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwiZ2V0UHJvZmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7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LFNBQW1CTCxHQUFHLEtBQUssWTs7Ozs7aURBQXNCc0UsTUFBRCxDQUFnQkMsYUFBaEIsQ0FBOEJsRSxLQUE5QixDQUFvQ21FLFM7Ozs7dUJBQ2xFQyx5REFBVSxFOzs7QUFBMUIvRCx1QjtpREFDQztBQUNMQSx5QkFBTyxFQUFQQTtBQURLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZDBCSCw2Q0FBSyxDQUFDbUUsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZmlsZS5qcy4wODc1M2FjZWE1YjNlZTNkYTRjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi91dGlscy9qc29uMmh0bWwvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZSB9IGZyb20gJy4uLy4uL2FwaXMnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5sZXNzJztcclxuaW1wb3J0IGpzb24yaHRtbCBmcm9tICcuLi8uLi91dGlscy9qc29uMmh0bWwnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwcm9maWxlOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHsgZW52OiBFTlYgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcHJvZmlsZVRhYmxlOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBhY3RpdmluZXNzQ2hhcnQ6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucHJvZmlsZVRhYmxlID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgdGhpcy5hY3RpdmluZXNzQ2hhcnQgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzOiBBcHBDb250ZXh0KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyICYmIEVOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldFByb2ZpbGUoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2ZpbGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IHByb2ZpbGUgPSB7fSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb2ZpbGVUYWJsZSkge1xyXG4gICAgICAodGhpcy5wcm9maWxlVGFibGUgYXMgYW55KS5jdXJyZW50LmFwcGVuZChqc29uMmh0bWwocHJvZmlsZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aXZpbmVzc0NoYXJ0KSB7XHJcbiAgICAgIGNvbnN0IGhlYXRtYXA6IFtdID0gW107XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IE9ORV9ZRUFSID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSBPTkVfWUVBUik7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9ybWF0dGVyKHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtkYXRlLCBjb3VudHNdID0gcGFyYW1zLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0tJHtkYXkucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc3VhbE1hcDoge1xyXG4gICAgICAgICAgcGllY2VzOiBbXHJcbiAgICAgICAgICAgIHsgZ3RlOiAwLjEsIGx0OiAxLjI1LCBjb2xvcjogJyNkNmU2ODUnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAxLjI1LCBsdDogMi41LCBjb2xvcjogJyM4Y2M2NjUnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAyLjUsIGx0OiA1LCBjb2xvcjogJyM0NGEzNDAnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiA1LCBjb2xvcjogJyMxZTY5MjMnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaG92ZXJMaW5rOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1XaWR0aDogMTMsXHJcbiAgICAgICAgICBpdGVtSGVpZ2h0OiAxMyxcclxuICAgICAgICAgIHRleHQ6IFsnTW9yZScsICdMZXNzJ10sXHJcbiAgICAgICAgICB0eXBlOiAncGllY2V3aXNlJyxcclxuICAgICAgICAgIG9yaWVudDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICB0b3A6IDMwLFxyXG4gICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsZW5kYXI6IHtcclxuICAgICAgICAgIHRvcDogOTAsXHJcbiAgICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICAgIHJpZ2h0OiAzMCxcclxuICAgICAgICAgIGNlbGxTaXplOiAxMyxcclxuICAgICAgICAgIHJhbmdlOiBbXHJcbiAgICAgICAgICAgIGAke2xhc3QuZ2V0RnVsbFllYXIoKX0tJHtsYXN0LmdldE1vbnRoKCkgKyAxfS0ke2xhc3QuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICAgIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke25vdy5nZXRNb250aCgpICsgMX0tJHtub3cuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgIG5vcm1hbDogeyBib3JkZXJXaWR0aDogMC41IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeWVhckxhYmVsOiB7IHNob3c6IGZhbHNlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcclxuICAgICAgICAgIGNvb3JkaW5hdGVTeXN0ZW06ICdjYWxlbmRhcicsXHJcbiAgICAgICAgICBkYXRhOiBoZWF0bWFwLm1hcCgoaXRlbTogYW55KSA9PiAoW2l0ZW0uZGF0ZSwgaXRlbS5jb3VudHNdKSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgY2hhcnQgPSBlY2hhcnRzLmluaXQoKHRoaXMuYWN0aXZpbmVzc0NoYXJ0IGFzIGFueSkuY3VycmVudCk7XHJcbiAgICAgIGNoYXJ0LmNsZWFyKCk7XHJcbiAgICAgIGNoYXJ0LnNldE9wdGlvbihvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGFcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5hY3RpdmluZXNzQ2hhcnR9IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZpbmVzc30gLz5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5wcm9maWxlVGFibGV9IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9