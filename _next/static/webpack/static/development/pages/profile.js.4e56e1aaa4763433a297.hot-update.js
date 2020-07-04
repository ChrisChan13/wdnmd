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
        var heatmap = [any];
        var now = new Date();
        var last = new Date(now.getTime() - 365 * 3600 * 24 * 1000);
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

              return "".concat(year, "\u5E74").concat(month.padStart(2, '0'), "\u6708").concat(day.padStart(2, '0'), "\u65E5").concat(counts > 0 ? "\u7684\u6D3B\u8DC3\u5EA6\u662F".concat(counts, "\u5EA6") : '没有活动');
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
        this.loading = false;
        this.heatmap = echarts__WEBPACK_IMPORTED_MODULE_13___default.a.init(this.$refs.heatmap);
        this.heatmap.clear();
        this.heatmap.setOption(this.options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFTlYiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZW52IiwiUHJvZmlsZSIsInByb3BzIiwicHJvZmlsZVRhYmxlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhY3RpdmluZXNzQ2hhcnQiLCJwcm9maWxlIiwiY3VycmVudCIsImFwcGVuZCIsImpzb24yaHRtbCIsImhlYXRtYXAiLCJhbnkiLCJub3ciLCJEYXRlIiwibGFzdCIsImdldFRpbWUiLCJvcHRpb25zIiwidG9vbHRpcCIsImZvcm1hdHRlciIsInBhcmFtcyIsImRhdGEiLCJkYXRlIiwiY291bnRzIiwic3BsaXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJwYWRTdGFydCIsInZpc3VhbE1hcCIsInBpZWNlcyIsImd0ZSIsImx0IiwiY29sb3IiLCJob3ZlckxpbmsiLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwidGV4dCIsInR5cGUiLCJvcmllbnQiLCJsZWZ0IiwidG9wIiwidGV4dFN0eWxlIiwiY2FsZW5kYXIiLCJyaWdodCIsImNlbGxTaXplIiwicmFuZ2UiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIml0ZW1TdHlsZSIsIm5vcm1hbCIsImJvcmRlcldpZHRoIiwieWVhckxhYmVsIiwic2hvdyIsInNlcmllcyIsImNvb3JkaW5hdGVTeXN0ZW0iLCJtYXAiLCJpdGVtIiwibG9hZGluZyIsImVjaGFydHMiLCJpbml0IiwiJHJlZnMiLCJjbGVhciIsInNldE9wdGlvbiIsInN0eWxlIiwiY29udGFpbmVyIiwiYWN0aXZpbmVzcyIsIndpbmRvdyIsIl9fTkVYVF9EQVRBX18iLCJwYWdlUHJvcHMiLCJnZXRQcm9maWxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7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QUFTLEVBQUU4RCxtREFBSyxDQUFDMUQ7QUFBOUMsUUFMRixDQURGO0FBU0Q7Ozs7K05BakY0QkwsSzs7Ozs7O3NCQUN2QixTQUFtQkwsR0FBRyxLQUFLLFk7Ozs7O2lEQUFzQnVFLE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCbkUsS0FBOUIsQ0FBb0NvRSxTOzs7O3VCQUNsRUMseURBQVUsRTs7O0FBQTFCaEUsdUI7aURBQ0M7QUFDTEEseUJBQU8sRUFBUEE7QUFESyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWQwQkgsNkNBQUssQ0FBQ29FLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuNGU1NmUxYWFhNDc2MzQzM2EyOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vdXRpbHMvanNvbjJodG1sL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBqc29uMmh0bWwgZnJvbSAnLi4vLi4vdXRpbHMvanNvbjJodG1sJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcHJvZmlsZToge30sXHJcbn07XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHByb2ZpbGVUYWJsZTogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgYWN0aXZpbmVzc0NoYXJ0OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnByb2ZpbGVUYWJsZSA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuYWN0aXZpbmVzc0NoYXJ0ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wczogQXBwQ29udGV4dCkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlID0ge30gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9maWxlVGFibGUpIHtcclxuICAgICAgKHRoaXMucHJvZmlsZVRhYmxlIGFzIGFueSkuY3VycmVudC5hcHBlbmQoanNvbjJodG1sKHByb2ZpbGUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGl2aW5lc3NDaGFydCkge1xyXG4gICAgICBjb25zdCBoZWF0bWFwID0gW2FueV07XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gMzY1ICogMzYwMCAqIDI0ICogMTAwMCk7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9ybWF0dGVyKHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtkYXRlLCBjb3VudHNdID0gcGFyYW1zLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3llYXJ95bm0JHttb250aC5wYWRTdGFydCgyLCAnMCcpfeaciCR7ZGF5LnBhZFN0YXJ0KDIsICcwJyl95pelJHtjb3VudHMgPiAwID8gYOeahOa0u+i3g+W6puaYryR7Y291bnRzfeW6pmAgOiAn5rKh5pyJ5rS75YqoJ31gO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc3VhbE1hcDoge1xyXG4gICAgICAgICAgcGllY2VzOiBbXHJcbiAgICAgICAgICAgIHsgZ3RlOiAwLjEsIGx0OiAxLjI1LCBjb2xvcjogJyNkNmU2ODUnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAxLjI1LCBsdDogMi41LCBjb2xvcjogJyM4Y2M2NjUnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiAyLjUsIGx0OiA1LCBjb2xvcjogJyM0NGEzNDAnIH0sXHJcbiAgICAgICAgICAgIHsgZ3RlOiA1LCBjb2xvcjogJyMxZTY5MjMnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaG92ZXJMaW5rOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1XaWR0aDogMTMsXHJcbiAgICAgICAgICBpdGVtSGVpZ2h0OiAxMyxcclxuICAgICAgICAgIHRleHQ6IFsnTW9yZScsICdMZXNzJ10sXHJcbiAgICAgICAgICB0eXBlOiAncGllY2V3aXNlJyxcclxuICAgICAgICAgIG9yaWVudDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgICB0b3A6IDMwLFxyXG4gICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsZW5kYXI6IHtcclxuICAgICAgICAgIHRvcDogOTAsXHJcbiAgICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICAgIHJpZ2h0OiAzMCxcclxuICAgICAgICAgIGNlbGxTaXplOiAxMyxcclxuICAgICAgICAgIHJhbmdlOiBbXHJcbiAgICAgICAgICAgIGAke2xhc3QuZ2V0RnVsbFllYXIoKX0tJHtsYXN0LmdldE1vbnRoKCkgKyAxfS0ke2xhc3QuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICAgIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke25vdy5nZXRNb250aCgpICsgMX0tJHtub3cuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgIG5vcm1hbDogeyBib3JkZXJXaWR0aDogMC41IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeWVhckxhYmVsOiB7IHNob3c6IGZhbHNlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcclxuICAgICAgICAgIGNvb3JkaW5hdGVTeXN0ZW06ICdjYWxlbmRhcicsXHJcbiAgICAgICAgICBkYXRhOiBoZWF0bWFwLm1hcChpdGVtID0+IChbaXRlbS5kYXRlLCBpdGVtLmNvdW50c10pKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oZWF0bWFwID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMuaGVhdG1hcCk7XHJcbiAgICAgIHRoaXMuaGVhdG1hcC5jbGVhcigpO1xyXG4gICAgICB0aGlzLmhlYXRtYXAuc2V0T3B0aW9uKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGFcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5hY3RpdmluZXNzQ2hhcnR9IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZpbmVzc30gLz5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5wcm9maWxlVGFibGV9IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9