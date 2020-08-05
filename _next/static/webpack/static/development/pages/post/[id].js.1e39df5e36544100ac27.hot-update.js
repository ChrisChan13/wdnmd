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
        rootMargin: '0px 0px -130px 0px'
      });
      Object(_utils_lazyload__WEBPACK_IMPORTED_MODULE_18__["default"])('img', articleMarkdown);
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
          href: "/tag/".concat(label.parent ? "".concat(label.parent.alias, "/") : '').concat(label.alias),
          label: label.label,
          className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-label']
        });
      })), __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_14___default.a['article-head']
      }, __jsx("span", null, "\u6700\u8FD1\u66F4\u65B0"), __jsx("span", null, "\xA0\xB7\xA0"), __jsx("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["formatTime"])(article.updatedAt))), article.cover && __jsx("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0Ly50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIlByb2ZpbGUiLCJwcm9wcyIsImFydGljbGVDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhcnRpY2xlQ2F0YWxvZyIsInN0YXRlIiwic2hvd0NhdGFsb2ciLCJhcnRpY2xlIiwiYXJ0aWNsZU1hcmtkb3duIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmljaHRleHQiLCJsYXp5bG9hZCIsInJvb3RNYXJnaW4iLCJjdXJyZW50IiwiYXBwZW5kIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlkIiwiZ2V0QXR0cmlidXRlIiwidGFnIiwibG9jYWxOYW1lIiwidGVzdCIsImxldmVsIiwic2xpY2UiLCJpdGVtIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluayIsImhyZWYiLCJoYXNDaGlsZE5vZGVzIiwic2V0U3RhdGUiLCJjb250YWluZXIiLCJ0aXRsZSIsImZvcm1hdFRpbWUiLCJwb3N0ZWRBdCIsImxhYmVscyIsIm1hcCIsImxhYmVsIiwiX2lkIiwicGFyZW50IiwiYWxpYXMiLCJ1cGRhdGVkQXQiLCJjb3ZlciIsImNhdGVnb3JpZXMiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwicXVlcnkiLCJnZXRBcnRpY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWFBLEcsR0FBUUMsbURBQVMsR0FBR0MsbUIsQ0FBekJD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QWhELENBekJGLENBSkYsRUErQkU7QUFBSyxpQkFBUyxFQUFFVCxtREFBSyxDQUFDb0I7QUFBdEIsU0FDRTtBQUFLLFdBQUcsRUFBRSxLQUFLaEQsY0FBZjtBQUErQixpQkFBUyxFQUFFNEIsbURBQUssQ0FBQyxpQkFBRDtBQUEvQyxTQUNHMUIsV0FBVyxJQUFJLG1DQURsQixDQURGLENBL0JGLEVBb0NFLHFWQXBDRixDQURGO0FBb0REOzs7OytOQXRHNEJOLEs7Ozs7OztzQkFDdkIsU0FBbUJMLEdBQUcsS0FBSyxLOzs7OztpREFBZTBELE1BQUQsQ0FBZ0JDLGFBQWhCLENBQThCdEQsS0FBOUIsQ0FBb0N1RCxTOzs7QUFDekVoQyxrQixHQUFPdkIsS0FBSyxDQUFDd0QsSyxDQUFiakMsRTs7dUJBQ2NrQyx5REFBVSxDQUFDbEMsRUFBRCxDOzs7QUFBMUJoQix1QjtpREFDQztBQUNMQSx5QkFBTyxFQUFQQTtBQURLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEIwQkwsNENBQUssQ0FBQ3dELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RcXFtpZF0uanMuMWUzOWRmNWUzNjU0NDEwMGFjMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZSB9IGZyb20gJy4uLy4uL2FwaXMnO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5sZXNzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaW5rJztcclxuaW1wb3J0ICcuL21hcmtkb3duLmNzcyc7XHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9naXRodWItZ2lzdC5jc3MnO1xyXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi4vLi4vdXRpbHMvbGF6eWxvYWQnO1xyXG5cclxuY29uc3QgeyBlbnY6IEVOViB9ID0gZ2V0Q29uZmlnKCkucHVibGljUnVudGltZUNvbmZpZztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgYXJ0aWNsZTogYW55LFxyXG59O1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBzaG93Q2F0YWxvZzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgYXJ0aWNsZUNvbnRlbnQ6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGFydGljbGVDYXRhbG9nOiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmFydGljbGVDb250ZW50ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgdGhpcy5hcnRpY2xlQ2F0YWxvZyA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDYXRhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzOiB7IHF1ZXJ5OiB7IGlkOiBzdHJpbmcgfX0pIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgRU5WICE9PSAnZGV2JykgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5fX05FWFRfREFUQV9fLnByb3BzLnBhZ2VQcm9wcztcclxuICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldEFydGljbGUoaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXJ0aWNsZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgYXJ0aWNsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGFydGljbGVNYXJrZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXJ0aWNsZU1hcmtkb3duLmNsYXNzTGlzdC5hZGQoJ21hcmtkb3duLWNvbnRlbnQnKTtcclxuICAgIGFydGljbGVNYXJrZG93bi5pbm5lckhUTUwgPSBhcnRpY2xlLnJpY2h0ZXh0O1xyXG4gICAgbGF6eWxvYWQoJ2lmcmFtZScsIGFydGljbGVNYXJrZG93biwge1xyXG4gICAgICByb290TWFyZ2luOiAnMHB4IDBweCAtMTMwcHggMHB4JyxcclxuICAgIH0pO1xyXG4gICAgbGF6eWxvYWQoJ2ltZycsIGFydGljbGVNYXJrZG93bik7XHJcbiAgICAodGhpcy5hcnRpY2xlQ29udGVudCBhcyBhbnkpLmN1cnJlbnQuYXBwZW5kKGFydGljbGVNYXJrZG93bik7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICh0aGlzLmFydGljbGVDb250ZW50IGFzIGFueSkuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMSxoMixoMyxoNCxoNSxoNicpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQubG9jYWxOYW1lO1xyXG4gICAgICBpZiAoaWQgJiYgL15oWzEtNl0kLy50ZXN0KHRhZykpIHtcclxuICAgICAgICBjb25zdCBsZXZlbCA9ICt0YWcuc2xpY2UoMSk7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaXRlbS5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICBsZXZlbCA+IDEgJiYgKFxyXG4gICAgICAgICAgaXRlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7KGxldmVsIC0gMSkgKiAxMH1weGAsXHJcbiAgICAgICAgICBpdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV2ZWwgPiAyICYmIChpdGVtLnN0eWxlLmZvbnRTaXplID0gYCR7MTQgLSAobGV2ZWwgLSAyKX1weGApO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gYCMke2lkfWA7XHJcbiAgICAgICAgbGluay5hcHBlbmQoaXRlbSk7XHJcbiAgICAgICAgbGlzdC5hcHBlbmQobGluayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGxpc3QuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dDYXRhbG9nOiB0cnVlLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgKHRoaXMuYXJ0aWNsZUNhdGFsb2cgYXMgYW55KS5jdXJyZW50LmFwcGVuZChsaXN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFydGljbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHNob3dDYXRhbG9nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+e2Ake2FydGljbGUudGl0bGV9IC0gV0ROTUQgLSBDaHJpc0NoYW5gfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmFydGljbGVDb250ZW50fSBjbGFzc05hbWU9e3N0eWxlLmFydGljbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWhlYWQnXX0+XHJcbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXRUaW1lKGFydGljbGUucG9zdGVkQXQpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+Jm5ic3A7wrcmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhcnRpY2xlLmxhYmVscy5tYXAoKGxhYmVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWwuX2lkfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3RhZy8ke2xhYmVsLnBhcmVudCA/IGAke2xhYmVsLnBhcmVudC5hbGlhc30vYCA6ICcnfSR7bGFiZWwuYWxpYXN9YH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWxhYmVsJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydhcnRpY2xlLWhlYWQnXX0+XHJcbiAgICAgICAgICAgIDxzcGFuPuacgOi/keabtOaWsDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+Jm5ic3A7wrcmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXRUaW1lKGFydGljbGUudXBkYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXJ0aWNsZS5jb3ZlciAmJiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUuY292ZXJ9IGFsdD17YXJ0aWNsZS50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS1jb3ZlciddfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS10aXRsZSddfT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXRlZ29yaWVzfT5cclxuICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmFydGljbGVDYXRhbG9nfSBjbGFzc05hbWU9e3N0eWxlWydjYXRlZ29yaWVzLXdyYXAnXX0+XHJcbiAgICAgICAgICAgIHtzaG93Q2F0YWxvZyAmJiA8c3Bhbj7nm67lvZU8L3NwYW4+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDEsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGgyLFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoMyxcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDQsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGg1LFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoNiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygxZW0gLSA4MHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=