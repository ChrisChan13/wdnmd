(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var f=l[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?a=!1:(p.add(s),r[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var v=h;e.default=v},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),a=n("W8MJ"),u=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("yXPU");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=l(n("q1tI")),d=n("g/15");function h(t){return v.apply(this,arguments)}function v(){return(v=f(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var y=function(t){u(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||a?{}:{url:m(e)})))}}]),n}(p.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=h,y.getInitialProps=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C9V0:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("yLiY"),u=n.n(a),i=n("YFqc"),c=n.n(i),f=o.a.createElement,s=u()().publicRuntimeConfig.env;e.a=function(t){var e=t.href,n=t.alias,r=t.label,o=t.className,a=void 0===o?"":o,u=t.children;if("dev"===s)return f(c.a,{href:e},u||f("span",{className:a},r));var i="".concat("/wdnmd").concat(n||e.toString());return f("a",{href:i,style:{textDecoration:"none"},className:a},u||r)}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||u()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),u=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){u(f,i);var c=s(f);function f(t){var a;return r(this,f),a=c.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),i=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var f=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var l,p=s(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=f(n("nOHt")),y=n("elyg");function m(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var b=new Map,g=window.IntersectionObserver,w={};function _(){return l||(g?l=new g((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var C=function(t){a(u,t);var e=c(u);function u(t){var n;return r(this,u),(n=e.call(this,t)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var u=t(o,a);return e=o,n=a,r=u,u}}((function(t,e){return{href:(0,y.addBasePath)(m(t)),as:e?(0,y.addBasePath)(m(e)):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),u=a.href,i=a.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var c=window.location.pathname;u=(0,d.resolve)(c,u),i=i?(0,d.resolve)(c,i):u,t.preventDefault();var f=n.props.scroll;null==f&&(f=i.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](u,i,{shallow:n.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var u=p.Children.only(e),i={ref:function(e){t.handleRef(e),u&&"object"===typeof u&&u.ref&&("function"===typeof u.ref?u.ref(e):"object"===typeof u.ref&&(u.ref.current=e))},onMouseEnter:function(e){u.props&&"function"===typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==u.type||"href"in u.props)||(i.href=a||o);var c=n("P5f7").rewriteUrlForNextExport;return i.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=c(i.href)),p.default.cloneElement(u,i)}}]),u}(p.Component);e.default=C},cha2:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),u=n("md7G"),i=n("foSv"),c=n("8Bbg"),f=n.n(c),s=n("q1tI"),l=n.n(s),p=n("8Kt/"),d=n.n(p),h=n("yLiY"),v=n.n(h),y=(n("Utu7"),n("JX7q")),m=n("rePB"),b=n("nOHt"),g=n.n(b),w=n("C9V0"),_=n("/3X5"),C=n.n(_),k=l.a.createElement;function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var P=function(t){Object(a.a)(n,t);var e=O(n);function n(t){var o;return Object(r.a)(this,n),o=e.call(this,t),Object(m.a)(Object(y.a)(o),"isMounted",void 0),o.isMounted=!0,o.state={route:""},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleRouteChange(),g.a.events.on("routeChangeComplete",this.handleRouteChange.bind(this))}},{key:"componentWillUnmount",value:function(){this.isMounted=!1,g.a.events.off("routeChangeComplete",this.handleRouteChange.bind(this))}},{key:"handleRouteChange",value:function(){this.isMounted&&this.setState({route:g.a.route})}},{key:"render",value:function(){var t=this.state.route;return k("div",{className:C.a.header},k("div",{className:C.a["header-wrap"]},k("strong",null,k(w.a,{href:"/",label:"WDNMD",className:C.a["header-title"]})),k("nav",{className:C.a["header-navs"]},[{url:"/",match:/^\/$|^\/category\/.*$/,label:"\u9996\u9875"},{url:"/profile",match:/^\/profile/,label:"\u4e2a\u4eba\u8d44\u6599"}].map((function(e){return k(w.a,{href:e.url,label:e.label,className:"".concat(C.a["header-navs-item"]," ").concat(e.match.test(t)?C.a["header-navs-item_active"]:""),key:e.url})})))))}}]),n}(l.a.Component),R=l.a.createElement;function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var j=v()().publicRuntimeConfig.env,x=function(t){Object(a.a)(n,t);var e=S(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return R("div",{id:"app"},R(d.a,null,R("title",null,"WDNMD - ChrisChan"),"production"===j&&R("script",{src:"https://cdn.jsdelivr.net/gh/ChrisChan13/wdnmd/baidu.js"})),R(P,null),R(e,n))}}]),n}(f.a)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var o=n("JX7q");function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[[0,0,2,1,3,4]]]);