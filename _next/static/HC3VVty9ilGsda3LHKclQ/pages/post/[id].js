(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},"0a3R":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("1OyB"),i=n("vuIU"),u=n("Ji7U"),s=n("md7G"),f=n("foSv"),l=n("q1tI"),p=n.n(l),d=n("yLiY"),h=n.n(d),v=n("8Kt/"),y=n.n(v),m=n("xds5"),b=n("cBaE"),w=n("6KXL"),g=n.n(w),_=n("C9V0"),E=(n("4wOh"),n("sR2V"),p.a.createElement);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var x=h()().publicRuntimeConfig.env,O=function(t){Object(u.a)(n,t);var e=k(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.article;return E("div",{className:g.a.container},E(y.a,null,E("title",null,"".concat(t.title," - WDNMD - ChrisChan"))),E("div",{className:g.a.article},E("div",{className:g.a["article-head"]},E("span",null,Object(b.a)(t.postedAt)),E("span",null,"\xa0\xb7\xa0"),t.labels.map((function(t){return E(_.a,{key:t._id,href:"/category/".concat(t.parent?"".concat(t.parent.alias,"/"):"").concat(t.alias),label:t.label,className:g.a["article-label"]})}))),t.cover&&E("img",{src:t.cover,alt:t.title,className:g.a["article-cover"]}),E("h1",{className:g.a["article-title"]},t.title),E("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t.richtext}})))}}],[{key:"getInitialProps",value:function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("dev"===x){t.next=2;break}return t.abrupt("return",window.__NEXT_DATA__.props.pageProps);case 2:return n=e.query.id,t.next=5,Object(m.a)(n);case 5:return r=t.sent,t.abrupt("return",{article:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(p.a.Component)},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),a=n("lwAK"),c=n("FYa8"),i=n("/0+H");function u(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,u=l.length;i<u;i++){var s=l[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var v=h;e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C9V0:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("yLiY"),c=n.n(a),i=n("YFqc"),u=n.n(i),s=o.a.createElement,f=c()().publicRuntimeConfig.env;e.a=function(t){var e=t.href,n=t.alias,r=t.label,o=t.className,a=void 0===o?"":o,c=t.children;if("dev"===f)return s(u.a,{href:e},c||s("span",{className:a},r));var i="".concat("/wdnmd").concat(n||e.toString());return s("a",{href:i,style:{textDecoration:"none"},className:a},c||r)}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,u,"next",t)}function u(t){r(c,o,a,i,u,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),c=n("7W2i"),i=n("a1gu"),u=n("Nsbk"),s=n("RIqP");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){c(s,i);var u=f(s);function s(t){var a;return r(this,s),a=u.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(l.Component))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cBaE:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t,e,n){var r={};if(e){var o,a=t.find((function(t){return!t.parent&&t.alias===e}));n&&(o=t.find((function(t){return t.parent===a._id&&t.alias===n}))),r.parent=a?a._id:"",r.child=o?o._id:"",r.parentEntity=a,r.childEntity=o}return r},o=function(t){var e=new Date(t),n=(Date.now()-e.getTime())/1e3;return n<30?"\u521a\u521a":n<3600?"".concat(Math.ceil(n/60),"\u5206\u949f\u524d"):n<86400?"".concat(Math.ceil(n/3600),"\u5c0f\u65f6\u524d"):n<=604800?"".concat(Math.floor(n/86400),"\u5929\u524d"):"".concat(e.getMonth()+1,"\u6708").concat(e.getDate(),"\u65e5").concat(e.getHours(),"\u65f6").concat(e.getMinutes(),"\u5206")}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),i=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var s=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),y=n("elyg");function m(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var b=new Map,w=window.IntersectionObserver,g={};function _(){return l||(w?l=new w((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var E=function(t){a(c,t);var e=u(c);function c(t){var n;return r(this,c),(n=e.call(this,t)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var c=t(o,a);return e=o,n=a,r=c,c}}((function(t,e){return{href:(0,y.addBasePath)(m(t)),as:e?(0,y.addBasePath)(m(e)):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),c=a.href,i=a.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(c)){var u=window.location.pathname;c=(0,d.resolve)(u,c),i=i?(0,d.resolve)(u,i):c,t.preventDefault();var s=n.props.scroll;null==s&&(s=i.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](c,i,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return o(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var c=p.Children.only(e),i={ref:function(e){t.handleRef(e),c&&"object"===typeof c&&c.ref&&("function"===typeof c.ref?c.ref(e):"object"===typeof c.ref&&(c.ref.current=e))},onMouseEnter:function(e){c.props&&"function"===typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==c.type||"href"in c.props)||(i.href=a||o);var u=n("P5f7").rewriteUrlForNextExport;return i.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=u(i.href)),p.default.cloneElement(c,i)}}]),c}(p.Component);e.default=E},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var o=n("JX7q");function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wcuJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return n("0a3R")}])},xds5:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return d}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("vcXL"),i=n.n(c),u=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("".concat("http://localhost:1213/api").concat(e));case 2:if(200===(n=t.sent).status){t.next=5;break}return t.abrupt("return",Promise.reject(new Error("\u8bf7\u6c42\u5931\u8d25")));case 5:return t.next=7,n.json();case 7:if(200===(r=t.sent).code){t.next=10;break}return t.abrupt("return",Promise.reject(new Error(r.message||"\u8bf7\u6c42\u5931\u8d25")));case 10:return t.abrupt("return",Promise.resolve(r.data));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){return u("/labels")},f=function(){return u("/profile")},l=function(){return u("/heatmap")},p=function(t){return u("/articles".concat(t?"?label=".concat(t):""))},d=function(t){return u("/articles/".concat(t))}}},[["wcuJ",0,2,1,3,4]]]);