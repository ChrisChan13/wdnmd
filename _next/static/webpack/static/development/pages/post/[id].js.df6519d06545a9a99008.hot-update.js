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
      Object(_utils_lazyload__WEBPACK_IMPORTED_MODULE_18__["default"])('iframe', articleMarkdown, {
        rootMargin: '0px 0px -160px 0px'
      });
      this.articleContent.current.append(articleMarkdown);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0Ly50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIlByb2ZpbGUiLCJwcm9wcyIsImFydGljbGVDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhcnRpY2xlQ2F0YWxvZyIsInN0YXRlIiwic2hvd0NhdGFsb2ciLCJhcnRpY2xlIiwiYXJ0aWNsZU1hcmtkb3duIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmljaHRleHQiLCJsYXp5bG9hZCIsInJvb3RNYXJnaW4iLCJjdXJyZW50IiwiYXBwZW5kIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlkIiwiZ2V0QXR0cmlidXRlIiwidGFnIiwibG9jYWxOYW1lIiwidGVzdCIsImxldmVsIiwic2xpY2UiLCJpdGVtIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluayIsImhyZWYiLCJoYXNDaGlsZE5vZGVzIiwic2V0U3RhdGUiLCJjb250YWluZXIiLCJ0aXRsZSIsImZvcm1hdFRpbWUiLCJwb3N0ZWRBdCIsImxhYmVscyIsIm1hcCIsImxhYmVsIiwiX2lkIiwicGFyZW50IiwiYWxpYXMiLCJjb3ZlciIsImNhdGVnb3JpZXMiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwicXVlcnkiLCJnZXRBcnRpY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWFBLEcsR0FBUUMsbURBQVMsR0FBR0MsbUIsQ0FBekJDLEc7O0lBVWFDLE87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QS9CRixDQURGO0FBK0NEOzs7OytOQWhHNEJOLEs7Ozs7OztzQkFDdkIsU0FBbUJMLEdBQUcsS0FBSyxLOzs7OztpREFBZXlELE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCckQsS0FBOUIsQ0FBb0NzRCxTOzs7QUFDekUvQixrQixHQUFPdkIsS0FBSyxDQUFDdUQsSyxDQUFiaEMsRTs7dUJBQ2NpQyx5REFBVSxDQUFDakMsRUFBRCxDOzs7QUFBMUJoQix1QjtpREFDQztBQUNMQSx5QkFBTyxFQUFQQTtBQURLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEIwQkwsNENBQUssQ0FBQ3VELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuZGY2NTE5ZDA2NTQ1YTlhOTkwMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZSB9IGZyb20gJy4uLy4uL2FwaXMnO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5sZXNzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaW5rJztcclxuaW1wb3J0ICcuL21hcmtkb3duLmNzcyc7XHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9naXRodWItZ2lzdC5jc3MnO1xyXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi4vLi4vdXRpbHMvbGF6eWxvYWQnO1xyXG5cclxuY29uc3QgeyBlbnY6IEVOViB9ID0gZ2V0Q29uZmlnKCkucHVibGljUnVudGltZUNvbmZpZztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgYXJ0aWNsZTogYW55LFxyXG59O1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBzaG93Q2F0YWxvZzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgYXJ0aWNsZUNvbnRlbnQ6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGFydGljbGVDYXRhbG9nOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmFydGljbGVDb250ZW50ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgdGhpcy5hcnRpY2xlQ2F0YWxvZyA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDYXRhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzOiB7IHF1ZXJ5OiB7IGlkOiBzdHJpbmcgfX0pIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgRU5WICE9PSAnZGV2JykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldEFydGljbGUoaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXJ0aWNsZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgYXJ0aWNsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGFydGljbGVNYXJrZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXJ0aWNsZU1hcmtkb3duLmNsYXNzTGlzdC5hZGQoJ21hcmtkb3duLWNvbnRlbnQnKTtcclxuICAgIGFydGljbGVNYXJrZG93bi5pbm5lckhUTUwgPSBhcnRpY2xlLnJpY2h0ZXh0O1xyXG4gICAgbGF6eWxvYWQoJ2lmcmFtZScsIGFydGljbGVNYXJrZG93biwge1xyXG4gICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtMTYwcHggMHB4JyxcclxuICAgIH0pO1xyXG4gICAgKHRoaXMuYXJ0aWNsZUNvbnRlbnQgYXMgYW55KS5jdXJyZW50LmFwcGVuZChhcnRpY2xlTWFya2Rvd24pO1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAodGhpcy5hcnRpY2xlQ29udGVudCBhcyBhbnkpLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnaDEsaDIsaDMsaDQsaDUsaDYnKS5mb3JFYWNoKChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBjb25zdCB0YWcgPSBlbGVtZW50LmxvY2FsTmFtZTtcclxuICAgICAgaWYgKGlkICYmIC9eaFsxLTZdJC8udGVzdCh0YWcpKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSArdGFnLnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICAgICAgbGV2ZWwgPiAxICYmIChcclxuICAgICAgICAgIGl0ZW0uc3R5bGUubWFyZ2luTGVmdCA9IGAkeyhsZXZlbCAtIDEpICogMTB9cHhgLFxyXG4gICAgICAgICAgaXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCdcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldmVsID4gMiAmJiAoaXRlbS5zdHlsZS5mb250U2l6ZSA9IGAkezE0IC0gKGxldmVsIC0gMil9cHhgKTtcclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGAjJHtpZH1gO1xyXG4gICAgICAgIGxpbmsuYXBwZW5kKGl0ZW0pO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpbmspO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChsaXN0Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzaG93Q2F0YWxvZzogdHJ1ZSxcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICh0aGlzLmFydGljbGVDYXRhbG9nIGFzIGFueSkuY3VycmVudC5hcHBlbmQobGlzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhcnRpY2xlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBzaG93Q2F0YWxvZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPntgJHthcnRpY2xlLnRpdGxlfSAtIFdETk1EIC0gQ2hyaXNDaGFuYH08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5hcnRpY2xlQ29udGVudH0gY2xhc3NOYW1lPXtzdHlsZS5hcnRpY2xlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS1oZWFkJ119PlxyXG4gICAgICAgICAgICA8c3Bhbj57Zm9ybWF0VGltZShhcnRpY2xlLnBvc3RlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiZuYnNwO8K3Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYXJ0aWNsZS5sYWJlbHMubWFwKChsYWJlbDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsLl9pZH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeS8ke2xhYmVsLnBhcmVudCA/IGAke2xhYmVsLnBhcmVudC5hbGlhc30vYCA6ICcnfSR7bGFiZWwuYWxpYXN9YH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWxhYmVsJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhcnRpY2xlLmNvdmVyICYmIChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS5jb3Zlcn0gYWx0PXthcnRpY2xlLnRpdGxlfSBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWNvdmVyJ119IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLXRpdGxlJ119PnthcnRpY2xlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAgPGRpdiByZWY9e3RoaXMuYXJ0aWNsZUNhdGFsb2d9IGNsYXNzTmFtZT17c3R5bGVbJ2NhdGVnb3JpZXMtd3JhcCddfT5cclxuICAgICAgICAgICAge3Nob3dDYXRhbG9nICYmIDxzcGFuPuebruW9lTwvc3Bhbj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoMSxcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDIsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGgzLFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoNCxcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDUsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGg2IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDFlbSAtIDgwcHgpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==