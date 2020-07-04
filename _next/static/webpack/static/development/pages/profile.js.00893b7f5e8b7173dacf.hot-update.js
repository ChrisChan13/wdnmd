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
        var heatmap = [{
          date: '2020-02-02',
          counts: 10
        }];
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

              return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'), "\uFF1A ").concat(counts);
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
        href: "http://fonts.googleapis.com/css?family=Inconsolata"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiY3VycmVudCIsImFwcGVuZCIsImpzb24yaHRtbCIsImhlYXRtYXAiLCJkYXRlIiwiY291bnRzIiwibm93IiwiRGF0ZSIsIk9ORV9ZRUFSIiwibGFzdCIsImdldFRpbWUiLCJvcHRpb25zIiwidG9vbHRpcCIsImZvcm1hdHRlciIsInBhcmFtcyIsImRhdGEiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsInBhZFN0YXJ0IiwidmlzdWFsTWFwIiwicGllY2VzIiwiZ3RlIiwibHQiLCJjb2xvciIsImhvdmVyTGluayIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJ0ZXh0IiwidHlwZSIsIm9yaWVudCIsImxlZnQiLCJ0b3AiLCJ0ZXh0U3R5bGUiLCJjYWxlbmRhciIsInJpZ2h0IiwiY2VsbFNpemUiLCJyYW5nZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaXRlbVN0eWxlIiwibm9ybWFsIiwiYm9yZGVyV2lkdGgiLCJ5ZWFyTGFiZWwiLCJzaG93Iiwic2VyaWVzIiwiY29vcmRpbmF0ZVN5c3RlbSIsIm1hcCIsIml0ZW0iLCJjaGFydCIsImVjaGFydHMiLCJpbml0IiwiY2xlYXIiLCJzZXRPcHRpb24iLCJzdHlsZSIsImNvbnRhaW5lciIsImFjdGl2aW5lc3MiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwiZ2V0UHJvZmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBTWFBLEcsR0FBUUMsbURBQVMsR0FBR0MsbUIsQ0FBekJDLEc7O0lBRWFDLE87Ozs7O0FBS25CLG1CQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLDhCQUFNQSxLQUFOOztBQURzQjs7QUFBQTs7QUFFdEIsVUFBS0MsWUFBTCxHQUFvQkMsNkNBQUssQ0FBQ0MsU0FBTixFQUFwQjtBQUNBLFVBQUtDLGVBQUwsR0FBdUJGLDZDQUFLLENBQUNDLFNBQU4sRUFBdkI7QUFIc0I7QUFJdkI7Ozs7d0NBVW1CO0FBQUEsZ0NBQ08sS0FBS0gsS0FEWixDQUNWSyxPQURVO0FBQUEsVUFDVkEsT0FEVSxvQ0FDQSxFQURBOztBQUVsQixVQUFJLEtBQUtKLFlBQVQsRUFBdUI7QUFDcEIsYUFBS0EsWUFBTixDQUEyQkssT0FBM0IsQ0FBbUNDLE1BQW5DLENBQTBDQyxpRUFBUyxDQUFDSCxPQUFELENBQW5EO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLRCxlQUFULEVBQTBCO0FBQ3hCLFlBQU1LLE9BQVcsR0FBRyxDQUFDO0FBQ25CQyxjQUFJLEVBQUUsWUFEYTtBQUVuQkMsZ0JBQU0sRUFBRTtBQUZXLFNBQUQsQ0FBcEI7QUFJQSxZQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU0sRUFBTixHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUIsSUFBdEM7QUFDQSxZQUFNQyxJQUFJLEdBQUcsSUFBSUYsSUFBSixDQUFTRCxHQUFHLENBQUNJLE9BQUosS0FBZ0JGLFFBQXpCLENBQWI7QUFDQSxZQUFNRyxPQUFPLEdBQUc7QUFDZEMsaUJBQU8sRUFBRTtBQUNQQyxxQkFETyxxQkFDR0MsTUFESCxFQUNnQjtBQUFBLDBIQUNFQSxNQUFNLENBQUNDLElBRFQ7QUFBQSxrQkFDZFgsSUFEYztBQUFBLGtCQUNSQyxNQURROztBQUFBLGdDQUVNRCxJQUFJLENBQUNZLEtBQUwsQ0FBVyxHQUFYLENBRk47QUFBQTtBQUFBLGtCQUVkQyxJQUZjO0FBQUEsa0JBRVJDLEtBRlE7QUFBQSxrQkFFREMsR0FGQzs7QUFHckIsK0JBQVVGLElBQVYsY0FBa0JDLEtBQUssQ0FBQ0UsUUFBTixDQUFlLENBQWYsRUFBa0IsR0FBbEIsQ0FBbEIsY0FBNENELEdBQUcsQ0FBQ0MsUUFBSixDQUFhLENBQWIsRUFBZ0IsR0FBaEIsQ0FBNUMsb0JBQXFFZixNQUFyRTtBQUNEO0FBTE0sV0FESztBQVFkZ0IsbUJBQVMsRUFBRTtBQUNUQyxrQkFBTSxFQUFFLENBQ047QUFBRUMsaUJBQUcsRUFBRSxHQUFQO0FBQVlDLGdCQUFFLEVBQUUsSUFBaEI7QUFBc0JDLG1CQUFLLEVBQUU7QUFBN0IsYUFETSxFQUVOO0FBQUVGLGlCQUFHLEVBQUUsSUFBUDtBQUFhQyxnQkFBRSxFQUFFLEdBQWpCO0FBQXNCQyxtQkFBSyxFQUFFO0FBQTdCLGFBRk0sRUFHTjtBQUFFRixpQkFBRyxFQUFFLEdBQVA7QUFBWUMsZ0JBQUUsRUFBRSxDQUFoQjtBQUFtQkMsbUJBQUssRUFBRTtBQUExQixhQUhNLEVBSU47QUFBRUYsaUJBQUcsRUFBRSxDQUFQO0FBQVVFLG1CQUFLLEVBQUU7QUFBakIsYUFKTSxDQURDO0FBT1RDLHFCQUFTLEVBQUUsS0FQRjtBQVFUQyxxQkFBUyxFQUFFLEVBUkY7QUFTVEMsc0JBQVUsRUFBRSxFQVRIO0FBVVRDLGdCQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQVZHO0FBV1RDLGdCQUFJLEVBQUUsV0FYRztBQVlUQyxrQkFBTSxFQUFFLFlBWkM7QUFhVEMsZ0JBQUksRUFBRSxFQWJHO0FBY1RDLGVBQUcsRUFBRSxFQWRJO0FBZVRDLHFCQUFTLEVBQUU7QUFDVFQsbUJBQUssRUFBRTtBQURFO0FBZkYsV0FSRztBQTJCZFUsa0JBQVEsRUFBRTtBQUNSRixlQUFHLEVBQUUsRUFERztBQUVSRCxnQkFBSSxFQUFFLEVBRkU7QUFHUkksaUJBQUssRUFBRSxFQUhDO0FBSVJDLG9CQUFRLEVBQUUsRUFKRjtBQUtSQyxpQkFBSyxFQUFFLFdBQ0Y3QixJQUFJLENBQUM4QixXQUFMLEVBREUsY0FDb0I5QixJQUFJLENBQUMrQixRQUFMLEtBQWtCLENBRHRDLGNBQzJDL0IsSUFBSSxDQUFDZ0MsT0FBTCxFQUQzQyxhQUVGbkMsR0FBRyxDQUFDaUMsV0FBSixFQUZFLGNBRW1CakMsR0FBRyxDQUFDa0MsUUFBSixLQUFpQixDQUZwQyxjQUV5Q2xDLEdBQUcsQ0FBQ21DLE9BQUosRUFGekMsRUFMQztBQVNSQyxxQkFBUyxFQUFFO0FBQ1RDLG9CQUFNLEVBQUU7QUFBRUMsMkJBQVcsRUFBRTtBQUFmO0FBREMsYUFUSDtBQVlSQyxxQkFBUyxFQUFFO0FBQUVDLGtCQUFJLEVBQUU7QUFBUjtBQVpILFdBM0JJO0FBeUNkQyxnQkFBTSxFQUFFO0FBQ05qQixnQkFBSSxFQUFFLFNBREE7QUFFTmtCLDRCQUFnQixFQUFFLFVBRlo7QUFHTmpDLGdCQUFJLEVBQUVaLE9BQU8sQ0FBQzhDLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEscUJBQWdCLENBQUNBLElBQUksQ0FBQzlDLElBQU4sRUFBWThDLElBQUksQ0FBQzdDLE1BQWpCLENBQWhCO0FBQUEsYUFBWjtBQUhBO0FBekNNLFNBQWhCO0FBK0NBLFlBQU04QyxLQUFLLEdBQUdDLCtDQUFPLENBQUNDLElBQVIsQ0FBYyxLQUFLdkQsZUFBTixDQUE4QkUsT0FBM0MsQ0FBZDtBQUNBbUQsYUFBSyxDQUFDRyxLQUFOO0FBQ0FILGFBQUssQ0FBQ0ksU0FBTixDQUFnQjVDLE9BQWhCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUU2QyxtREFBSyxDQUFDQztBQUF0QixTQUNFLE1BQUMsaURBQUQsUUFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBREYsRUFJRTtBQUFLLFdBQUcsRUFBRSxLQUFLM0QsZUFBZjtBQUFnQyxpQkFBUyxFQUFFMEQsbURBQUssQ0FBQ0U7QUFBakQsUUFKRixFQUtFO0FBQUssV0FBRyxFQUFFLEtBQUsvRCxZQUFmO0FBQTZCLGlCQUFTLEVBQUU2RCxtREFBSyxDQUFDekQ7QUFBOUMsUUFMRixDQURGO0FBU0Q7Ozs7K05BcEY0QkwsSzs7Ozs7O3NCQUN2QixTQUFtQkwsR0FBRyxLQUFLLFk7Ozs7O2lEQUFzQnNFLE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCbEUsS0FBOUIsQ0FBb0NtRSxTOzs7O3VCQUNsRUMseURBQVUsRTs7O0FBQTFCL0QsdUI7aURBQ0M7QUFDTEEseUJBQU8sRUFBUEE7QUFESyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWQwQkgsNkNBQUssQ0FBQ21FLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuMDA4OTNiN2Y1ZThiNzE3M2RhY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vdXRpbHMvanNvbjJodG1sL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBqc29uMmh0bWwgZnJvbSAnLi4vLi4vdXRpbHMvanNvbjJodG1sJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcHJvZmlsZToge30sXHJcbn07XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHByb2ZpbGVUYWJsZTogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgYWN0aXZpbmVzc0NoYXJ0OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnByb2ZpbGVUYWJsZSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuYWN0aXZpbmVzc0NoYXJ0ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wczogQXBwQ29udGV4dCkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlID0ge30gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9maWxlVGFibGUpIHtcclxuICAgICAgKHRoaXMucHJvZmlsZVRhYmxlIGFzIGFueSkuY3VycmVudC5hcHBlbmQoanNvbjJodG1sKHByb2ZpbGUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGl2aW5lc3NDaGFydCkge1xyXG4gICAgICBjb25zdCBoZWF0bWFwOiBbXSA9IFt7XHJcbiAgICAgICAgZGF0ZTogJzIwMjAtMDItMDInLFxyXG4gICAgICAgIGNvdW50czogMTAsXHJcbiAgICAgIH1dO1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBPTkVfWUVBUiA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gT05FX1lFQVIpO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvcm1hdHRlcihwYXJhbXM6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBbZGF0ZSwgY291bnRzXSA9IHBhcmFtcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9LSR7ZGF5LnBhZFN0YXJ0KDIsICcwJyl977yaICR7Y291bnRzfWA7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlzdWFsTWFwOiB7XHJcbiAgICAgICAgICBwaWVjZXM6IFtcclxuICAgICAgICAgICAgeyBndGU6IDAuMSwgbHQ6IDEuMjUsIGNvbG9yOiAnI2Q2ZTY4NScgfSxcclxuICAgICAgICAgICAgeyBndGU6IDEuMjUsIGx0OiAyLjUsIGNvbG9yOiAnIzhjYzY2NScgfSxcclxuICAgICAgICAgICAgeyBndGU6IDIuNSwgbHQ6IDUsIGNvbG9yOiAnIzQ0YTM0MCcgfSxcclxuICAgICAgICAgICAgeyBndGU6IDUsIGNvbG9yOiAnIzFlNjkyMycgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBob3Zlckxpbms6IGZhbHNlLFxyXG4gICAgICAgICAgaXRlbVdpZHRoOiAxMyxcclxuICAgICAgICAgIGl0ZW1IZWlnaHQ6IDEzLFxyXG4gICAgICAgICAgdGV4dDogWydNb3JlJywgJ0xlc3MnXSxcclxuICAgICAgICAgIHR5cGU6ICdwaWVjZXdpc2UnLFxyXG4gICAgICAgICAgb3JpZW50OiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICAgIHRvcDogMzAsXHJcbiAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgdG9wOiA5MCxcclxuICAgICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgICAgcmlnaHQ6IDMwLFxyXG4gICAgICAgICAgY2VsbFNpemU6IDEzLFxyXG4gICAgICAgICAgcmFuZ2U6IFtcclxuICAgICAgICAgICAgYCR7bGFzdC5nZXRGdWxsWWVhcigpfS0ke2xhc3QuZ2V0TW9udGgoKSArIDF9LSR7bGFzdC5nZXREYXRlKCl9YCxcclxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bm93LmdldE1vbnRoKCkgKyAxfS0ke25vdy5nZXREYXRlKCl9YCxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgICAgICAgICAgbm9ybWFsOiB7IGJvcmRlcldpZHRoOiAwLjUgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB5ZWFyTGFiZWw6IHsgc2hvdzogZmFsc2UgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgdHlwZTogJ2hlYXRtYXAnLFxyXG4gICAgICAgICAgY29vcmRpbmF0ZVN5c3RlbTogJ2NhbGVuZGFyJyxcclxuICAgICAgICAgIGRhdGE6IGhlYXRtYXAubWFwKChpdGVtOiBhbnkpID0+IChbaXRlbS5kYXRlLCBpdGVtLmNvdW50c10pKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdCgodGhpcy5hY3RpdmluZXNzQ2hhcnQgYXMgYW55KS5jdXJyZW50KTtcclxuICAgICAgY2hhcnQuY2xlYXIoKTtcclxuICAgICAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUluY29uc29sYXRhXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMuYWN0aXZpbmVzc0NoYXJ0fSBjbGFzc05hbWU9e3N0eWxlLmFjdGl2aW5lc3N9IC8+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMucHJvZmlsZVRhYmxlfSBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==