(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function a({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=l(n("q1tI")),o=l(n("Xuae")),s=n("lwAK"),a=n("FYa8"),i=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function u(e=!1){const t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((e,t)=>{const n=r.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(c,[]).reverse().concat(u(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?s=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;n.has(e)?s=!1:(n.add(e),r[t]=n)}}}return s}}()).reverse().map((e,t)=>{const n=e.key||t;return r.default.cloneElement(e,{key:n})})}const d=(0,o.default)();function h({children:e}){return r.default.createElement(s.AmpStateContext.Consumer,null,t=>r.default.createElement(a.HeadManagerContext.Consumer,null,n=>r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)))}h.rewind=d.rewind;var m=h;t.default=m},B5Ud:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=l,t.default=void 0;var o=r(n("q1tI")),s=n("g/15");async function a({Component:e,ctx:t}){return{pageProps:await(0,s.loadGetInitialProps)(e,t)}}t.AppInitialProps=s.AppInitialProps;class i extends o.default.Component{componentDidCatch(e,t){throw e}render(){const{router:e,Component:t,pageProps:n,__N_SSG:r,__N_SSP:s}=this.props;return(o.default.createElement(t,Object.assign({},n,r||s?{}:{url:l(e)})))}}function l(e){const{pathname:t,asPath:n,query:r}=e;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:()=>{e.back()},push:(t,n)=>e.push(t,n),pushTo:(t,n)=>{const r=n?t:"",o=n||t;return e.push(r,o)},replace:(t,n)=>e.replace(t,n),replaceTo:(t,n)=>{const r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=i,i.origGetInitialProps=a,i.getInitialProps=a},C9V0:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),s=n("yLiY"),a=n.n(s),i=n("YFqc"),l=n.n(i),u="D:\\WorkSpace\\Blog\\blog-frontend\\components\\Link\\index.tsx",c=o.a.createElement;const{env:p}=a()().publicRuntimeConfig;t.a=e=>{const{href:t,alias:n,label:r,className:o="",children:s}=e;if("dev"===p)return c(l.a,{href:t,__self:void 0,__source:{fileName:u,lineNumber:22,columnNumber:7}},s||c("span",{className:o,__self:void 0,__source:{fileName:u,lineNumber:24,columnNumber:23}},r));const a=`/wdnmd${n||t.toString()}`;return c("a",{href:a,style:{textDecoration:"none"},className:o,__self:void 0,__source:{fileName:u,lineNumber:32,columnNumber:5}},s||r)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");t.default=()=>{const e=new Set;let t;function n(n){t=n.props.reduceComponentsToState([...e],n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return class extends r.Component{static rewind(){const n=t;return t=void 0,e.clear(),n}constructor(e){super(e)}componentDidMount(){e.add(this),n(this)}componentDidUpdate(){n(this)}componentWillUnmount(){e.delete(this),n(this)}render(){return null}}}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");t.__esModule=!0,t.default=void 0;var s=o(n("q1tI")),a=n("QmWs"),i=n("g/15"),l=r(n("nOHt")),u=n("elyg");function c(e){return e&&"object"===typeof e?(0,i.formatWithValidation)(e):e}let p;const f=new Map,d=window.IntersectionObserver,h={};function m(){return p||(d?p=new d(e=>{e.forEach(e=>{if(!f.has(e.target))return;const t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),f.delete(e.target),t())})},{rootMargin:"200px"}):void 0)}const _=(e,t)=>{const n=m();return n?(n.observe(e),f.set(e,t),()=>{try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):()=>{}};class b extends s.Component{constructor(e){super(e),this.p=void 0,this.cleanUpListeners=()=>{},this.formatUrls=function(e){let t=null,n=null,r=null;return(o,s)=>{if(r&&o===t&&s===n)return r;const a=e(o,s);return t=o,n=s,r=a,a}}((e,t)=>({href:(0,u.addBasePath)(c(e)),as:t?(0,u.addBasePath)(c(t)):t})),this.linkClicked=e=>{const{nodeName:t,target:n}=e.currentTarget;if("A"===t&&(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which))return;let{href:r,as:o}=this.formatUrls(this.props.href,this.props.as);if(!function(e){const t=(0,a.parse)(e,!1,!0),n=(0,a.parse)((0,i.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r))return;const{pathname:s}=window.location;r=(0,a.resolve)(s,r),o=o?(0,a.resolve)(s,o):r,e.preventDefault();let{scroll:u}=this.props;null==u&&(u=o.indexOf("#")<0),l.default[this.props.replace?"replace":"push"](r,o,{shallow:this.props.shallow}).then(e=>{e&&u&&(window.scrollTo(0,0),document.body.focus())})},this.p=!1!==e.prefetch}componentWillUnmount(){this.cleanUpListeners()}getPaths(){const{pathname:e}=window.location,{href:t,as:n}=this.formatUrls(this.props.href,this.props.as),r=(0,a.resolve)(e,t);return[r,n?(0,a.resolve)(e,n):r]}handleRef(e){if(this.p&&d&&e&&e.tagName){this.cleanUpListeners(),h[this.getPaths().join("%")]||(this.cleanUpListeners=_(e,()=>{this.prefetch()}))}}prefetch(e){if(!this.p)return;const t=this.getPaths();l.default.prefetch(t[0],t[1],e).catch(e=>{0}),h[t.join("%")]=!0}render(){let{children:e}=this.props;const{href:t,as:r}=this.formatUrls(this.props.href,this.props.as);"string"===typeof e&&(e=s.default.createElement("a",null,e));const o=s.Children.only(e),a={ref:e=>{this.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:e=>{o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),this.prefetch({priority:!0})},onClick:e=>{o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||this.linkClicked(e)}};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=r||t);{const e=n("P5f7").rewriteUrlForNextExport;a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=e(a.href))}return s.default.cloneElement(o,a)}}var v=b;t.default=v},cha2:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,"default",(function(){return x}));var o=n("8Bbg"),s=n.n(o),a=n("q1tI"),i=n.n(a),l=n("8Kt/"),u=n.n(l),c=n("yLiY"),p=n.n(c),f=(n("Utu7"),n("rePB")),d=n("nOHt"),h=n.n(d),m=n("C9V0"),_=n("/3X5"),b=n.n(_),v="D:\\WorkSpace\\Blog\\blog-frontend\\components\\Header\\index.tsx",N=i.a.createElement;class g extends i.a.Component{constructor(e){super(e),Object(f.a)(this,"isMounted",void 0),this.isMounted=!0,this.state={route:""}}componentDidMount(){this.handleRouteChange(),h.a.events.on("routeChangeComplete",this.handleRouteChange.bind(this))}componentWillUnmount(){this.isMounted=!1,h.a.events.off("routeChangeComplete",this.handleRouteChange.bind(this))}handleRouteChange(){this.isMounted&&this.setState({route:h.a.route})}render(){const{route:e}=this.state;return N("div",{className:b.a.header,__self:this,__source:{fileName:v,lineNumber:48,columnNumber:7}},N("div",{className:b.a["header-wrap"],__self:this,__source:{fileName:v,lineNumber:49,columnNumber:9}},N("strong",{__self:this,__source:{fileName:v,lineNumber:50,columnNumber:11}},N(m.a,{href:"/",label:"WDNMD",className:b.a["header-title"],__self:this,__source:{fileName:v,lineNumber:51,columnNumber:13}})),N("nav",{className:b.a["header-navs"],__self:this,__source:{fileName:v,lineNumber:57,columnNumber:11}},[{url:"/",match:/^\/$|^\/category\/.*$/,label:"\u9996\u9875"},{url:"/profile",match:/^\/profile/,label:"\u4e2a\u4eba\u8d44\u6599"}].map(t=>N(m.a,{href:t.url,label:t.label,className:`${b.a["header-navs-item"]} ${t.match.test(e)?b.a["header-navs-item_active"]:""}`,key:t.url,__self:this,__source:{fileName:v,lineNumber:60,columnNumber:17}})))))}}var y="D:\\WorkSpace\\Blog\\blog-frontend\\pages\\_app.tsx",C=i.a.createElement;const{env:w}=p()().publicRuntimeConfig;class x extends s.a{render(){const{Component:e,pageProps:t}=this.props;return C("div",{id:"app",__self:this,__source:{fileName:y,lineNumber:17,columnNumber:7}},C(u.a,{__self:this,__source:{fileName:y,lineNumber:18,columnNumber:9}},C("title",{__self:this,__source:{fileName:y,lineNumber:19,columnNumber:11}},"WDNMD - ChrisChan"),"production"===w&&C("script",{src:"https://cdn.jsdelivr.net/gh/ChrisChan13/wdnmd/baidu.js",__self:this,__source:{fileName:y,lineNumber:22,columnNumber:15}})),C(g,{__self:this,__source:{fileName:y,lineNumber:26,columnNumber:9}}),C(e,r({},t,{__self:this,__source:{fileName:y,lineNumber:27,columnNumber:9}})))}}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[[0,0,1,2,3]]]);