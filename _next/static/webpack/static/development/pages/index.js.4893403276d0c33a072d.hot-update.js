webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Labels/index.tsx":
/*!*************************************!*\
  !*** ./components/Labels/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Labels; });
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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./components/Labels/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Link */ "./components/Link/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Labels = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Labels, _React$Component);

  var _super = _createSuper(Labels);

  function Labels(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Labels);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "isMounted", void 0);

    _this.isMounted = true;
    _this.state = {
      parent: '',
      child: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Labels, [{
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
      if (this.isMounted) {
        var _Router$query = next_router__WEBPACK_IMPORTED_MODULE_8___default.a.query,
            parent = _Router$query.parent,
            child = _Router$query.child;
        this.setState({
          parent: parent || '',
          child: child || ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var labels = this.props.labels;
      var _this$state = this.state,
          _this$state$parent = _this$state.parent,
          parent = _this$state$parent === void 0 ? '' : _this$state$parent,
          _this$state$child = _this$state.child,
          child = _this$state$child === void 0 ? '' : _this$state$child;
      var parentAndChild = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getParentAndChild"])(labels, parent, child);
      parent = parentAndChild.parent || '';
      child = parentAndChild.child || '';
      var parents = labels.filter(function (item) {
        return !item.parent;
      });
      var parentlabel = labels.find(function (item) {
        return item._id === parent;
      }) || {};
      var children = [];
      var childrenNodes = null;

      if (parent) {
        children = labels.filter(function (item) {
          return item.parent === parent;
        });
        childrenNodes = __jsx("div", {
          className: _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-children']
        }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: parent.toString(),
          href: "/category/".concat(parentlabel.alias),
          label: "\u5168\u90E8",
          className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-children-item'], " ").concat(!child ? _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-children-item_active'] : '')
        }), children.map(function (item) {
          return __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: item._id,
            href: "/category/".concat(parentlabel.alias, "/").concat(item.alias),
            label: item.label,
            className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-children-item'], " ").concat(child === item._id ? _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-children-item_active'] : '')
          });
        }));
      }

      return __jsx("div", null, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-box']
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_9___default.a.labels
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-wrap']
      }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: "0",
        href: "/",
        label: "\u63A8\u8350",
        className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-item'], " ").concat(!parent ? _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-item_active'] : '')
      }), parents.map(function (item) {
        return __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: item._id,
          href: "/category/".concat(item.alias),
          label: item.label,
          className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-item'], " ").concat(parent === item._id ? _index_less__WEBPACK_IMPORTED_MODULE_9___default.a['labels-item_active'] : '')
        });
      })))), childrenNodes);
    }
  }]);

  return Labels;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhYmVscy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFiZWxzIiwicHJvcHMiLCJpc01vdW50ZWQiLCJzdGF0ZSIsInBhcmVudCIsImNoaWxkIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsImJpbmQiLCJvZmYiLCJxdWVyeSIsInNldFN0YXRlIiwibGFiZWxzIiwicGFyZW50QW5kQ2hpbGQiLCJnZXRQYXJlbnRBbmRDaGlsZCIsInBhcmVudHMiLCJmaWx0ZXIiLCJpdGVtIiwicGFyZW50bGFiZWwiLCJmaW5kIiwiX2lkIiwiY2hpbGRyZW4iLCJjaGlsZHJlbk5vZGVzIiwic3R5bGUiLCJ0b1N0cmluZyIsImFsaWFzIiwibWFwIiwibGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBYXFCQSxNOzs7OztBQUduQixrQkFBWUMsS0FBWixFQUF3QjtBQUFBOztBQUFBOztBQUN0Qiw4QkFBTUEsS0FBTjs7QUFEc0I7O0FBRXRCLFVBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsWUFBTSxFQUFFLEVBQVY7QUFBY0MsV0FBSyxFQUFFO0FBQXJCLEtBQWI7QUFIc0I7QUFJdkI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLGlCQUFMO0FBQ0FDLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsS0FBS0gsaUJBQUwsQ0FBdUJJLElBQXZCLENBQTRCLElBQTVCLENBQXhDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS1IsU0FBTCxHQUFpQixLQUFqQjtBQUNBSyx3REFBTSxDQUFDQyxNQUFQLENBQWNHLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDLEtBQUtMLGlCQUFMLENBQXVCSSxJQUF2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RSxhQUFLLEVBQUMsY0FIUjtBQUlFLGlCQUFTLFlBQUtBLGtEQUFLLENBQUMsYUFBRCxDQUFWLGNBQTZCLENBQUNyQixNQUFELEdBQVVxQixrREFBSyxDQUFDLG9CQUFELENBQWYsR0FBd0MsRUFBckU7QUFKWCxRQURGLEVBUUlSLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUNULElBQUQ7QUFBQSxlQUNWLE1BQUMsOENBQUQ7QUFDRSxhQUFHLEVBQUVBLElBQUksQ0FBQ0csR0FEWjtBQUVFLGNBQUksc0JBQWVILElBQUksQ0FBQ1EsS0FBcEIsQ0FGTjtBQUdFLGVBQUssRUFBRVIsSUFBSSxDQUFDVSxLQUhkO0FBSUUsbUJBQVMsWUFBS0osa0RBQUssQ0FBQyxhQUFELENBQVYsY0FBNkJyQixNQUFNLEtBQUtlLElBQUksQ0FBQ0csR0FBaEIsR0FBc0JHLGtEQUFLLENBQUMsb0JBQUQsQ0FBM0IsR0FBb0QsRUFBakY7QUFKWCxVQURVO0FBQUEsT0FBWixDQVJKLENBREYsQ0FERixDQURGLEVBdUJHRCxhQXZCSCxDQURGO0FBMkJEOzs7O0VBekZpQ00sNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDg5MzQwMzI3NmQwYzMzYTA3MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnRBbmRDaGlsZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgbGFiZWxzOiBbXSxcclxuICBwYXJlbnQ/OiBzdHJpbmcsXHJcbiAgY2hpbGQ/OiBzdHJpbmcsXHJcbn07XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHBhcmVudDogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgY2hpbGQ6IHN0cmluZyB8IHN0cmluZ1tdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGlzTW91bnRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgcGFyZW50OiAnJywgY2hpbGQ6ICcnIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UoKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUm91dGVDaGFuZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcclxuICAgICAgY29uc3QgeyBwYXJlbnQsIGNoaWxkIH0gPSBSb3V0ZXIucXVlcnk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBhcmVudDogcGFyZW50IHx8ICcnLFxyXG4gICAgICAgIGNoaWxkOiBjaGlsZCB8fCAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGxhYmVscyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IHBhcmVudCA9ICcnLCBjaGlsZCA9ICcnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcGFyZW50QW5kQ2hpbGQgPSBnZXRQYXJlbnRBbmRDaGlsZChsYWJlbHMsIHBhcmVudCwgY2hpbGQpO1xyXG4gICAgcGFyZW50ID0gcGFyZW50QW5kQ2hpbGQucGFyZW50IHx8ICcnO1xyXG4gICAgY2hpbGQgPSBwYXJlbnRBbmRDaGlsZC5jaGlsZCB8fCAnJztcclxuICAgIGNvbnN0IHBhcmVudHMgPSBsYWJlbHMuZmlsdGVyKChpdGVtOiBhbnkpID0+ICFpdGVtLnBhcmVudCk7XHJcbiAgICBjb25zdCBwYXJlbnRsYWJlbDogYW55ID0gbGFiZWxzLmZpbmQoKGl0ZW06IGFueSkgPT4gaXRlbS5faWQgPT09IHBhcmVudCkgfHwge307XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICAgIGxldCBjaGlsZHJlbk5vZGVzID0gbnVsbDtcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgY2hpbGRyZW4gPSBsYWJlbHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0ucGFyZW50ID09PSBwYXJlbnQpO1xyXG4gICAgICBjaGlsZHJlbk5vZGVzID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnbGFiZWxzLWNoaWxkcmVuJ119PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtwYXJlbnQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeS8ke3BhcmVudGxhYmVsLmFsaWFzfWB9XHJcbiAgICAgICAgICAgIGxhYmVsPVwi5YWo6YOoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZVsnbGFiZWxzLWNoaWxkcmVuLWl0ZW0nXX0gJHshY2hpbGQgPyBzdHlsZVsnbGFiZWxzLWNoaWxkcmVuLWl0ZW1fYWN0aXZlJ10gOiAnJ31gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4ubWFwKChpdGVtOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnkvJHtwYXJlbnRsYWJlbC5hbGlhc30vJHtpdGVtLmFsaWFzfWB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVbJ2xhYmVscy1jaGlsZHJlbi1pdGVtJ119ICR7Y2hpbGQgPT09IGl0ZW0uX2lkID8gc3R5bGVbJ2xhYmVscy1jaGlsZHJlbi1pdGVtX2FjdGl2ZSddIDogJyd9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2xhYmVscy1ib3gnXX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGFiZWxzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydsYWJlbHMtd3JhcCddfT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuaOqOiNkFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlWydsYWJlbHMtaXRlbSddfSAkeyFwYXJlbnQgPyBzdHlsZVsnbGFiZWxzLWl0ZW1fYWN0aXZlJ10gOiAnJ31gfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50cy5tYXAoKGl0ZW06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeS8ke2l0ZW0uYWxpYXN9YH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlWydsYWJlbHMtaXRlbSddfSAke3BhcmVudCA9PT0gaXRlbS5faWQgPyBzdHlsZVsnbGFiZWxzLWl0ZW1fYWN0aXZlJ10gOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NoaWxkcmVuTm9kZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==