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
      Object(_utils_lazyload__WEBPACK_IMPORTED_MODULE_18__["default"])('img', articleMarkdown, {
        rootMargin: '0px 0px 100px 0px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0Ly50c3giXSwibmFtZXMiOlsiRU5WIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImVudiIsIlByb2ZpbGUiLCJwcm9wcyIsImFydGljbGVDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJhcnRpY2xlQ2F0YWxvZyIsInN0YXRlIiwic2hvd0NhdGFsb2ciLCJhcnRpY2xlIiwiYXJ0aWNsZU1hcmtkb3duIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmljaHRleHQiLCJsYXp5bG9hZCIsInJvb3RNYXJnaW4iLCJjdXJyZW50IiwiYXBwZW5kIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlkIiwiZ2V0QXR0cmlidXRlIiwidGFnIiwibG9jYWxOYW1lIiwidGVzdCIsImxldmVsIiwic2xpY2UiLCJpdGVtIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluayIsImhyZWYiLCJoYXNDaGlsZE5vZGVzIiwic2V0U3RhdGUiLCJjb250YWluZXIiLCJ0aXRsZSIsImZvcm1hdFRpbWUiLCJwb3N0ZWRBdCIsImxhYmVscyIsIm1hcCIsImxhYmVsIiwiX2lkIiwicGFyZW50IiwiYWxpYXMiLCJjb3ZlciIsImNhdGVnb3JpZXMiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwicGFnZVByb3BzIiwicXVlcnkiLCJnZXRBcnRpY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRWFBLEcsR0FBUUMsbURBQVMsR0FBR0MsbUIsQ0FBekJDLEc7O0lBVWFDLE87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LEVBQUU0QixtREFBSyxDQUFDLGlCQUFEO0FBQS9DLFNBQ0cxQixXQUFXLElBQUksbUNBRGxCLENBREYsQ0ExQkYsRUErQkUscVZBL0JGLENBREY7QUErQ0Q7Ozs7K05Bbkc0Qk4sSzs7Ozs7O3NCQUN2QixTQUFtQkwsR0FBRyxLQUFLLEs7Ozs7O2lEQUFleUQsTUFBRCxDQUFnQkMsYUFBaEIsQ0FBOEJyRCxLQUE5QixDQUFvQ3NELFM7OztBQUN6RS9CLGtCLEdBQU92QixLQUFLLENBQUN1RCxLLENBQWJoQyxFOzt1QkFDY2lDLHlEQUFVLENBQUNqQyxFQUFELEM7OztBQUExQmhCLHVCO2lEQUNDO0FBQ0xBLHlCQUFPLEVBQVBBO0FBREssaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsQjBCTCw0Q0FBSyxDQUFDdUQsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdFxcW2lkXS5qcy5lN2M5MDVlOTFlNmZiMDYwMTY3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgeyBnZXRBcnRpY2xlIH0gZnJvbSAnLi4vLi4vYXBpcyc7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmsnO1xyXG5pbXBvcnQgJy4vbWFya2Rvd24uY3NzJztcclxuaW1wb3J0ICdoaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi1naXN0LmNzcyc7XHJcbmltcG9ydCBsYXp5bG9hZCBmcm9tICcuLi8uLi91dGlscy9sYXp5bG9hZCc7XHJcblxyXG5jb25zdCB7IGVudjogRU5WIH0gPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBhcnRpY2xlOiBhbnksXHJcbn07XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNob3dDYXRhbG9nOiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBhcnRpY2xlQ29udGVudDogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgYXJ0aWNsZUNhdGFsb2c6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuYXJ0aWNsZUNvbnRlbnQgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICB0aGlzLmFydGljbGVDYXRhbG9nID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0NhdGFsb2c6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHM6IHsgcXVlcnk6IHsgaWQ6IHN0cmluZyB9fSkge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3NlciAmJiBFTlYgIT09ICdkZXYnKSByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLl9fTkVYVF9EQVRBX18ucHJvcHMucGFnZVByb3BzO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcHJvcHMucXVlcnk7XHJcbiAgICBjb25zdCBhcnRpY2xlID0gYXdhaXQgZ2V0QXJ0aWNsZShpZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhcnRpY2xlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBhcnRpY2xlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgYXJ0aWNsZU1hcmtkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhcnRpY2xlTWFya2Rvd24uY2xhc3NMaXN0LmFkZCgnbWFya2Rvd24tY29udGVudCcpO1xyXG4gICAgYXJ0aWNsZU1hcmtkb3duLmlubmVySFRNTCA9IGFydGljbGUucmljaHRleHQ7XHJcbiAgICBsYXp5bG9hZCgnaWZyYW1lJywgYXJ0aWNsZU1hcmtkb3duLCB7XHJcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0xMzBweCAwcHgnLFxyXG4gICAgfSk7XHJcbiAgICBsYXp5bG9hZCgnaW1nJywgYXJ0aWNsZU1hcmtkb3duLCB7XHJcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IDEwMHB4IDBweCcsXHJcbiAgICB9KTtcclxuICAgICh0aGlzLmFydGljbGVDb250ZW50IGFzIGFueSkuY3VycmVudC5hcHBlbmQoYXJ0aWNsZU1hcmtkb3duKTtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgKHRoaXMuYXJ0aWNsZUNvbnRlbnQgYXMgYW55KS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxLGgyLGgzLGg0LGg1LGg2JykuZm9yRWFjaCgoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgY29uc3QgdGFnID0gZWxlbWVudC5sb2NhbE5hbWU7XHJcbiAgICAgIGlmIChpZCAmJiAvXmhbMS02XSQvLnRlc3QodGFnKSkge1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gK3RhZy5zbGljZSgxKTtcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgICAgIGxldmVsID4gMSAmJiAoXHJcbiAgICAgICAgICBpdGVtLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHsobGV2ZWwgLSAxKSAqIDEwfXB4YCxcclxuICAgICAgICAgIGl0ZW0uc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXZlbCA+IDIgJiYgKGl0ZW0uc3R5bGUuZm9udFNpemUgPSBgJHsxNCAtIChsZXZlbCAtIDIpfXB4YCk7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSBgIyR7aWR9YDtcclxuICAgICAgICBsaW5rLmFwcGVuZChpdGVtKTtcclxuICAgICAgICBsaXN0LmFwcGVuZChsaW5rKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAobGlzdC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2hvd0NhdGFsb2c6IHRydWUsXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAodGhpcy5hcnRpY2xlQ2F0YWxvZyBhcyBhbnkpLmN1cnJlbnQuYXBwZW5kKGxpc3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYXJ0aWNsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgc2hvd0NhdGFsb2cgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57YCR7YXJ0aWNsZS50aXRsZX0gLSBXRE5NRCAtIENocmlzQ2hhbmB9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMuYXJ0aWNsZUNvbnRlbnR9IGNsYXNzTmFtZT17c3R5bGUuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2FydGljbGUtaGVhZCddfT5cclxuICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdFRpbWUoYXJ0aWNsZS5wb3N0ZWRBdCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4mbmJzcDvCtyZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGFydGljbGUubGFiZWxzLm1hcCgobGFiZWw6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbC5faWR9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnkvJHtsYWJlbC5wYXJlbnQgPyBgJHtsYWJlbC5wYXJlbnQuYWxpYXN9L2AgOiAnJ30ke2xhYmVsLmFsaWFzfWB9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS1sYWJlbCddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXJ0aWNsZS5jb3ZlciAmJiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydGljbGUuY292ZXJ9IGFsdD17YXJ0aWNsZS50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS1jb3ZlciddfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZVsnYXJ0aWNsZS10aXRsZSddfT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXRlZ29yaWVzfT5cclxuICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmFydGljbGVDYXRhbG9nfSBjbGFzc05hbWU9e3N0eWxlWydjYXRlZ29yaWVzLXdyYXAnXX0+XHJcbiAgICAgICAgICAgIHtzaG93Q2F0YWxvZyAmJiA8c3Bhbj7nm67lvZU8L3NwYW4+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDEsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGgyLFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoMyxcclxuICAgICAgICAgICAgLm1hcmtkb3duLWNvbnRlbnQgaDQsXHJcbiAgICAgICAgICAgIC5tYXJrZG93bi1jb250ZW50IGg1LFxyXG4gICAgICAgICAgICAubWFya2Rvd24tY29udGVudCBoNiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygxZW0gLSA4MHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=