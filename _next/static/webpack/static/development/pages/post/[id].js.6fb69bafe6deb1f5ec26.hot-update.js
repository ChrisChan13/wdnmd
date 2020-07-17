webpackHotUpdate("static\\development\\pages\\post\\[id].js",{

/***/ "./pages/post/[id].tsx":
/*!*****************************!*\
  !*** ./pages/post/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../apis */ "./apis/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./pages/post/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Link */ "./components/Link/index.tsx");
/* harmony import */ var _markdown_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./markdown.css */ "./pages/post/markdown.css");
/* harmony import */ var _markdown_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_markdown_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js/styles/github-gist.css */ "./node_modules/highlight.js/styles/github-gist.css");
/* harmony import */ var highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_gist_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_lazyload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/lazyload */ "./utils/lazyload.ts");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var ENV = next_config__WEBPACK_IMPORTED_MODULE_10___default()().publicRuntimeConfig.env;

var Profile = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Profile, _React$Component);

  var _super = _createSuper(Profile);

  function Profile(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Profile);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "articleContent", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "articleCatalog", void 0);

    _this.articleContent = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.articleCatalog = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.state = {
      showCatalog: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var article = this.props.article;
      var articleMarkdown = document.createElement('div');
      articleMarkdown.classList.add('markdown-content');
      articleMarkdown.innerHTML = article.richtext;
      this.articleContent.current.append(articleMarkdown);
      Object(_utils_lazyload__WEBPACK_IMPORTED_MODULE_18__["default"])('iframe', articleMarkdown, function (target) {
        target.style.display = 'none';
        return 0;
      }, function (targets) {
        return targets.map(function (item) {
          item.style.display = 'block';
          return 0;
        });
      });
      var list = document.createElement('ul');
      this.articleContent.current.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function (element) {
        var id = element.getAttribute('id');
        var tag = element.localName;

        if (id && /^h[1-6]$/.test(tag)) {
          var level = +tag.slice(1);
          var item = document.createElement('li');
          item.innerText = element.innerText;
          level > 1 && (item.style.marginLeft = "".concat((level - 1) * 10, "px"), item.style.fontWeight = 'normal');
          level > 2 && (item.style.fontSize = "".concat(14 - (level - 2), "px"));
          var link = document.createElement('a');
          link.href = "#".concat(id);
          link.append(item);
          list.append(link);
        }
      });

      if (list.hasChildNodes()) {
        this.setState({
          showCatalog: true
        }, function () {
          _this2.articleCatalog.current.append(list);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var article = this.props.article;
      var showCatalog = this.state.showCatalog;
      return __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a.container
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, __jsx("title", null, "".concat(article.title, " - WDNMD - ChrisChan"))), __jsx("div", {
        ref: this.articleContent,
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a.article
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-head']
      }, __jsx("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["formatTime"])(article.postedAt)), __jsx("span", null, "\xA0\xB7\xA0"), article.labels.map(function (label) {
        return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: label._id,
          href: "/category/".concat(label.parent ? "".concat(label.parent.alias, "/") : '').concat(label.alias),
          label: label.label,
          className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-label']
        });
      })), article.cover && __jsx("img", {
        src: article.cover,
        alt: article.title,
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-cover']
      }), __jsx("h1", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-title']
      }, article.title)), __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a.categories
      }, __jsx("div", {
        ref: this.articleCatalog,
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['categories-wrap']
      }, showCatalog && __jsx("span", null, "\u76EE\u5F55"))), __jsx("style", null, "\n            .markdown-content h1,\n            .markdown-content h2,\n            .markdown-content h3,\n            .markdown-content h4,\n            .markdown-content h5,\n            .markdown-content h6 {\n              margin-top: calc(1em - 80px);\n              padding-top: 80px;\n            }\n          "));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var id, article;
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
                id = props.query.id;
                _context.next = 5;
                return Object(_apis__WEBPACK_IMPORTED_MODULE_12__["getArticle"])(id);

              case 5:
                article = _context.sent;
                return _context.abrupt("return", {
                  article: article
                });

              case 7:
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0Ly50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIlByb2ZpbGUiLCJwcm9wcyIsImFydGljbGVDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhcnRpY2xlQ2F0YWxvZyIsInN0YXRlIiwic2hvd0NhdGFsb2ciLCJhcnRpY2xlIiwiYXJ0aWNsZU1hcmtkb3duIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmljaHRleHQiLCJjdXJyZW50IiwiYXBwZW5kIiwibGF6eWxvYWQiLCJ0YXJnZXQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0YXJnZXRzIiwibWFwIiwiaXRlbSIsImxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInRhZyIsImxvY2FsTmFtZSIsInRlc3QiLCJsZXZlbCIsInNsaWNlIiwiaW5uZXJUZXh0IiwibWFyZ2luTGVmdCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmsiLCJocmVmIiwiaGFzQ2hpbGROb2RlcyIsInNldFN0YXRlIiwiY29udGFpbmVyIiwidGl0bGUiLCJmb3JtYXRUaW1lIiwicG9zdGVkQXQiLCJsYWJlbHMiLCJsYWJlbCIsIl9pZCIsInBhcmVudCIsImFsaWFzIiwiY292ZXIiLCJjYXRlZ29yaWVzIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsInBhZ2VQcm9wcyIsInF1ZXJ5IiwiZ2V0QXJ0aWNsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVhQSxHLEdBQVFDLG1EQUFTLEdBQUdDLG1CLENB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LEVBQUVBLG1EQUFLLENBQUMsZUFBRDtBQUFwQixTQUF3Q1osT0FBTyxDQUFDcUMsS0FBaEQsQ0FwQkYsQ0FKRixFQTBCRTtBQUFLLGlCQUFTLEVBQUV6QixtREFBSyxDQUFDa0M7QUFBdEIsU0FDRTtBQUFLLFdBQUcsRUFBRSxLQUFLakQsY0FBZjtBQUErQixpQkFBUyxFQUFFZSxtREFBSyxDQUFDLGlCQUFEO0FBQS9DLFNBQ0diLFdBQVcsSUFBSSxtQ0FEbEIsQ0FERixDQTFCRixFQStCRSxxVkEvQkYsQ0FERjtBQStDRDs7OzsrTkFwRzRCTixLOzs7Ozs7c0JBQ3ZCLFNBQW1CTCxHQUFHLEtBQUssSzs7Ozs7aURBQWUyRCxNQUFELENBQWdCQyxhQUFoQixDQUE4QnZELEtBQTlCLENBQW9Dd0QsUzs7O0FBQ3pFNUIsa0IsR0FBTzVCLEtBQUssQ0FBQ3lELEssQ0FBYjdCLEU7O3VCQUNjOEIseURBQVUsQ0FBQzlCLEVBQUQsQzs7O0FBQTFCckIsdUI7aURBQ0M7QUFDTEEseUJBQU8sRUFBUEE7QUFESyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxCMEJMLDRDQUFLLENBQUN5RCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0XFxbaWRdLmpzLjZmYjY5YmFmZTZkZWIxZjVlYzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCB7IGdldEFydGljbGUgfSBmcm9tICcuLi8uLi9hcGlzJztcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubGVzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGluayc7XHJcbmltcG9ydCAnLi9tYXJrZG93bi5jc3MnO1xyXG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLWdpc3QuY3NzJztcclxuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4uLy4uL3V0aWxzL2xhenlsb2FkJztcclxuXHJcbmNvbnN0IHsgZW52OiBFTlYgfSA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGFydGljbGU6IGFueSxcclxufTtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgc2hvd0NhdGFsb2c6IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGFydGljbGVDb250ZW50OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBhcnRpY2xlQ2F0YWxvZzogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5hcnRpY2xlQ29udGVudCA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuYXJ0aWNsZUNhdGFsb2cgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q2F0YWxvZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wczogeyBxdWVyeTogeyBpZDogc3RyaW5nIH19KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyICYmIEVOViAhPT0gJ2RldicpIHJldHVybiAod2luZG93IGFzIGFueSkuX19ORVhUX0RBVEFfXy5wcm9wcy5wYWdlUHJvcHM7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCBnZXRBcnRpY2xlKGlkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFydGljbGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGFydGljbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhcnRpY2xlTWFya2Rvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFydGljbGVNYXJrZG93bi5jbGFzc0xpc3QuYWRkKCdtYXJrZG93bi1jb250ZW50Jyk7XHJcbiAgICBhcnRpY2xlTWFya2Rvd24uaW5uZXJIVE1MID0gYXJ0aWNsZS5yaWNodGV4dDtcclxuICAgICh0aGlzLmFydGljbGVDb250ZW50IGFzIGFueSkuY3VycmVudC5hcHBlbmQoYXJ0aWNsZU1hcmtkb3duKTtcclxuICAgIGxhenlsb2FkKCdpZnJhbWUnLCBhcnRpY2xlTWFya2Rvd24sICh0YXJnZXQpID0+IHtcclxuICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSwgKHRhcmdldHMpID0+IHRhcmdldHMubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICh0aGlzLmFydGljbGVDb250ZW50IGFzIGFueSkuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMSxoMixoMyxoNCxoNSxoNicpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQubG9jYWxOYW1lO1xyXG4gICAgICBpZiAoaWQgJiYgL15oWzEtNl0kLy50ZXN0KHRhZykpIHtcclxuICAgICAgICBjb25zdCBsZXZlbCA9ICt0YWcuc2xpY2UoMSk7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaXRlbS5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICBsZXZlbCA+IDEgJiYgKFxyXG4gICAgICAgICAgaXRlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7KGxldmVsIC0gMSkgKiAxMH1weGAsXHJcbiAgICAgICAgICBpdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV2ZWwgPiAyICYmIChpdGVtLnN0eWxlLmZvbnRTaXplID0gYCR7MTQgLSAobGV2ZWwgLSAyKX1weGApO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gYCMke2lkfWA7XHJcbiAgICAgICAgbGluay5hcHBlbmQoaXRlbSk7XHJcbiAgICAgICAgbGlzdC5hcHBlbmQobGluayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dDYXRhbG9nOiB0cnVlLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgKHRoaXMuYXJ0aWNsZUNhdGFsb2cgYXMgYW55KS5jdXJyZW50LmFwcGVuZChsaXN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFydGljbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHNob3dDYXRhbG9nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e2Ake2FydGljbGUudGl0bGV9IC0gV0ROTUQgLSBDaHJpc0NoYW5gfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmFydGljbGVDb250ZW50fSBjbGFzc05hbWU9e3N0eWxlLmFydGljbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWhlYWQnXX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXRUaW1lKGFydGljbGUucG9zdGVkQXQpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+Jm5ic3A7wrcmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhcnRpY2xlLmxhYmVscy5tYXAoKGxhYmVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWwuX2lkfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NhdGVnb3J5LyR7bGFiZWwucGFyZW50ID8gYCR7bGFiZWwucGFyZW50LmFsaWFzfS9gIDogJyd9JHtsYWJlbC5hbGlhc31gfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ2FydGljbGUtbGFiZWwnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFydGljbGUuY292ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmNvdmVyfSBhbHQ9e2FydGljbGUudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVbJ2FydGljbGUtY292ZXInXX0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVbJ2FydGljbGUtdGl0bGUnXX0+e2FydGljbGUudGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5hcnRpY2xlQ2F0YWxvZ30gY2xhc3NOYW1lPXtzdHlsZVsnY2F0ZWdvcmllcy13cmFwJ119PlxyXG4gICAgICAgICAgICB7c2hvd0NhdGFsb2cgJiYgPHNwYW4+55uu5b2VPC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGgxLFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoMixcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDMsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGg0LFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoNSxcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMWVtIC0gODBweCk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9