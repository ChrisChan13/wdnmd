(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BMP1:function(e,t,n){"use strict";var r=n("284h")(n("IKlv"));window.next=r,(0,r.default)().catch(e=>{console.error(`${e.message}\n${e.stack}`)})},DqTX:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){let e=null;return t=>{const n=e=Promise.resolve().then(()=>{if(n!==e)return;e=null;const r={};t.forEach(e=>{const t=r[e.type]||[];t.push(e),r[e.type]=t});const a=r.title?r.title[0]:null;let i="";if(a){const{children:e}=a.props;i="string"===typeof e?e:e.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{!function(e,t){const n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]");0;const a=Number(r.content),i=[];for(let o=0,c=r.previousElementSibling;o<a;o++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);const s=t.map(o).filter(e=>{for(let t=0,n=i.length;t<n;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0});i.forEach(e=>e.parentNode.removeChild(e)),s.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+s.length).toString()}(e,r[e]||[])})})}};const r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o({type:e,props:t}){const n=document.createElement(e);for(const i in t){if(!t.hasOwnProperty(i))continue;if("children"===i||"dangerouslySetInnerHTML"===i)continue;if(void 0===t[i])continue;const e=r[i]||i.toLowerCase();n.setAttribute(e,t[i])}const{children:o,dangerouslySetInnerHTML:a}=t;return a?n.innerHTML=a.__html||"":o&&(n.textContent="string"===typeof o?o:o.join("")),n}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},IKlv:function(e,t,n){"use strict";var r=n("284h"),o=n("TqRt");t.__esModule=!0,t.render=U,t.renderError=X,t.default=t.emitter=t.router=t.version=void 0;var a=o(n("pVnL")),i=(o(n("284h")),n("nOHt")),s=n("s4NR"),c=o(n("q1tI")),u=o(n("i8i4")),l=n("FYa8"),d=o(n("dZ6Y")),p=n("qOIg"),f=n("/jkW"),m=r(n("yLiY")),h=n("g/15"),g=o(n("DqTX")),v=o(n("zmvN")),y=o(n("bGXG"));"finally"in Promise.prototype||(Promise.prototype.finally=n("Z577"));const _=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=_;t.version="9.4.4";const{props:w,err:E,page:S,query:T,buildId:P,assetPrefix:R,runtimeConfig:C,dynamicIds:b,isFallback:x}=_,I=R||"";n.p=`${I}/_next/`,m.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:C||{}});const N=(0,h.getURL)(),M=new v.default(P,I),F=([e,t])=>M.registerPage(e,t);window.__NEXT_P&&window.__NEXT_P.map(e=>setTimeout(()=>F(e),0)),window.__NEXT_P=[],window.__NEXT_P.push=F;const $=(0,g.default)(),D=document.getElementById("__next");let A,L,k,B,j,q;t.router=k;class O extends c.default.Component{componentDidCatch(e,t){this.props.fn(e,t)}componentDidMount(){this.scrollToHash(),k.isSsr&&(x||_.nextExport&&((0,f.isDynamicRoute)(k.pathname)||location.search)||w&&w.__N_SSG&&location.search)&&k.replace(k.pathname+"?"+(0,s.stringify)((0,a.default)((0,a.default)({},k.query),(0,s.parse)(location.search.substr(1)))),N,{_h:1,shallow:!x})}componentDidUpdate(){this.scrollToHash()}scrollToHash(){let{hash:e}=location;if(e=e&&e.substring(1),!e)return;const t=document.getElementById(e);t&&setTimeout(()=>t.scrollIntoView(),0)}render(){return this.props.children}}const H=(0,d.default)();t.emitter=H;async function U(e){if(e.err)await X(e);else try{await z(e)}catch(E){0,await X((0,a.default)((0,a.default)({},e),{},{err:E}))}}function X(e){const{App:t,err:n}=e;return console.error(n),M.loadPage("/_error").then(({page:r})=>{const o=Z(t),i={Component:r,AppTree:o,router:k,ctx:{err:n,pathname:S,query:T,asPath:N,AppTree:o}};return Promise.resolve(e.props?e.props:(0,h.loadGetInitialProps)(t,i)).then(t=>z((0,a.default)((0,a.default)({},e),{},{err:n,Component:r,props:t})))})}t.default=async({webpackHMR:e}={})=>{const{page:n,mod:r}=await M.loadPageScript("/_app");j=n,r&&r.reportWebVitals&&(q=({id:e,name:t,startTime:n,value:o,duration:a,entryType:i,entries:s})=>{const c=`${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`;let u;s&&s.length&&(u=s[0].startTime),r.reportWebVitals({id:e||c,name:t,startTime:n||u,value:null==o?a:o,label:"mark"===i||"measure"===i?"custom":"web-vital"})});let o=E;try{({page:B}=await M.loadPage(S))}catch(a){o=a}return window.__NEXT_PRELOADREADY&&await window.__NEXT_PRELOADREADY(b),t.router=k=(0,i.createRouter)(S,T,N,{initialProps:w,pageLoader:M,App:j,Component:B,wrapApp:Z,err:o,isFallback:x,subscription:({Component:e,props:t,err:n},r)=>U({App:r,Component:e,props:t,err:n})}),U({App:j,Component:B,props:w,err:o}),H};let G="function"===typeof u.default.hydrate;function Y(){h.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),q&&performance.getEntriesByName("Next.js-hydration").forEach(q),W())}function V(){if(!h.ST)return;performance.mark("afterRender");const e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),q&&(performance.getEntriesByName("Next.js-render").forEach(q),performance.getEntriesByName("Next.js-route-change-to-render").forEach(q)),W(),["Next.js-route-change-to-render","Next.js-render"].forEach(e=>performance.clearMeasures(e)))}function W(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach(e=>performance.clearMarks(e))}function J({children:e}){return c.default.createElement(O,{fn:e=>X({App:j,err:e}).catch(e=>console.error("Error rendering page: ",e))},c.default.createElement(p.RouterContext.Provider,{value:(0,i.makePublicRouterInstance)(k)},c.default.createElement(l.HeadManagerContext.Provider,{value:$},e)))}const Z=e=>t=>{const n=(0,a.default)((0,a.default)({},t),{},{Component:B,err:E,router:k});return(c.default.createElement(J,null,c.default.createElement(e,n)))};async function z({App:e,Component:t,props:n,err:r}){t=t||A.Component,n=n||A.props;const o=(0,a.default)((0,a.default)({},n),{},{Component:t,err:r,router:k});let i;A=o;const s=new Promise((e,t)=>{L&&L(),i=()=>{L=null,e()},L=()=>{L=null,t()}});var l,d;l=c.default.createElement(K,{callback:i},c.default.createElement(J,null,c.default.createElement(e,o))),d=D,h.ST&&performance.mark("beforeRender"),G?(u.default.hydrate(l,d,Y),G=!1,q&&h.ST&&(0,y.default)(q)):u.default.render(l,d,V),await s}function K({callback:e,children:t}){return c.default.useLayoutEffect(()=>e(),[e]),t}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}},bGXG:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("w6Sm");t.default=e=>{(0,r.getCLS)(e),(0,r.getFID)(e),(0,r.getFCP)(e),(0,r.getLCP)(e),(0,r.getTTFB)(e)}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},w6Sm:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return m})),n.d(t,"getFCP",(function(){return g})),n.d(t,"getFID",(function(){return v})),n.d(t,"getLCP",(function(){return _})),n.d(t,"getTTFB",(function(){return w}));var r,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},s=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=!1,u=!1,l=function(e){c=!e.persisted},d=function(){addEventListener("pagehide",l),addEventListener("unload",(function(){}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(d(),u=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:c})}),{capture:!0,once:t})},f=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),r=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),a())},o=s("layout-shift",r),a=f(e,n,o,t);p((function(e){var t=e.isUnloading;o&&o.takeRecords().map(r),t&&(n.isFinal=!0),a()}))},h=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,p((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},g=function(e){var t=i("FCP"),n=h(),r=s("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=f(e,t,r)},v=function(e){var t=i("FID"),n=h(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=s("first-input",r),a=f(e,t,o);p((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),r=h(),o=function(e){var t=e.startTime;t<r.timeStamp?(n.value=t,n.entries.push(e)):n.isFinal=!0,c()},a=s("largest-contentful-paint",o),c=f(e,n,a,t),u=function(){n.isFinal||(a&&a.takeRecords().map(o),n.isFinal=!0,c())};y().then(u),p(u,!0)},w=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},zmvN:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=n("QmWs"),a=r(n("dZ6Y")),i=n("/jkW"),s=n("gguc"),c=n("YTqd"),u=n("elyg");function l(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}const d=l("preload")&&!l("prefetch")?"preload":"prefetch";document.createElement("script");function p(e){if("/"!==e[0])throw new Error(`Route name should start with a "/", got "${e}"`);return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function f(e,t,n){return new Promise((r,o,a)=>{(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,n&&(a.as=n),a.onload=r,a.onerror=o,document.head.appendChild(a)})}t.default=class{constructor(e,t){this.buildId=e,this.assetPrefix=t,this.pageCache={},this.pageRegisterEvents=(0,a.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise(e=>{window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=()=>{e(window.__BUILD_MANIFEST)}}),this.promisedSsgManifest=new Promise(e=>{window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=()=>{e(window.__SSG_MANIFEST)}})}getDependencies(e){return this.promisedBuildManifest.then(t=>t[e]&&t[e].map(e=>`${this.assetPrefix}/_next/${encodeURI(e)}`)||[])}getDataHref(e,t){const n=e=>(e=(0,u.delBasePath)(e),`${this.assetPrefix}/_next/data/${this.buildId}${"/"===e?"/index":e}.json`),{pathname:r,query:a}=(0,o.parse)(e,!0),{pathname:l}=(0,o.parse)(t),d=p(r);let f,m=(0,i.isDynamicRoute)(d);if(m){const e=(0,c.getRouteRegex)(d),t=e.groups,n=(0,s.getRouteMatcher)(e)(l)||a;f=d,Object.keys(t).every(e=>{let r=n[e];const o=t[e].repeat;return o&&!Array.isArray(r)&&(r=[r]),e in n&&(f=f.replace(`[${o?"...":""}${e}]`,o?r.map(encodeURIComponent).join("/"):encodeURIComponent(r)))})||(f="")}return m?f&&n(f):n(d)}prefetchData(e,t){const{pathname:n}=(0,o.parse)(e,!0),r=p(n);return this.promisedSsgManifest.then((n,o)=>n.has(r)&&(o=this.getDataHref(e,t))&&!document.querySelector(`link[rel="${d}"][href^="${o}"]`)&&f(o,d,"fetch"))}loadPage(e){return this.loadPageScript(e)}loadPageScript(e){return e=p(e),new Promise((t,n)=>{const r=({error:o,page:a,mod:i})=>{this.pageRegisterEvents.off(e,r),delete this.loadingRoutes[e],o?n(o):t({page:a,mod:i})},o=this.pageCache[e];if(o){const{error:e,page:r,mod:a}=o;e?n(e):t({page:r,mod:a})}else this.pageRegisterEvents.on(e,r),document.querySelector(`script[data-next-page="${e}"]`)||this.loadingRoutes[e]||(this.loadingRoutes[e]=!0,this.getDependencies(e).then(t=>{t.forEach(t=>{/\.js$/.test(t)&&!document.querySelector(`script[src^="${t}"]`)&&this.loadScript(t,e,!1),/\.css$/.test(t)&&!document.querySelector(`link[rel=stylesheet][href^="${t}"]`)&&f(t,"stylesheet").catch(()=>{})}),this.loadRoute(e)}))})}loadRoute(e){let t="/"===(e=p(e))?"/index.js":`${e}.js`;const n=`${this.assetPrefix}/_next/static/${encodeURIComponent(this.buildId)}/pages${encodeURI(t)}`;this.loadScript(n,e,!0)}loadScript(e,t,n){const r=document.createElement("script");r.crossOrigin=void 0,r.src=e,r.onerror=()=>{const n=new Error(`Error loading script ${e}`);n.code="PAGE_LOAD_ERROR",this.pageRegisterEvents.emit(t,{error:n})},document.body.appendChild(r)}registerPage(e,t){(()=>{try{const n=t(),r={page:n.default||n,mod:n};this.pageCache[e]=r,this.pageRegisterEvents.emit(e,r)}catch(n){this.pageCache[e]={error:n},this.pageRegisterEvents.emit(e,{error:n})}})()}prefetch(e,t){let n,r;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else{let t=`${"/"===(e=p(e))?"/index":e}.js`;0,r=`${this.assetPrefix}/_next/static/${encodeURIComponent(this.buildId)}/pages${encodeURI(t)}`}return Promise.all(document.querySelector(`link[rel="${d}"][href^="${r}"], script[data-next-page="${e}"]`)?[]:[f(r,d,r.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then(e=>Promise.all(e.map(e=>this.prefetch(e,!0))))]).then(()=>{},()=>{})}}}},[["BMP1",0,1,2]]]);