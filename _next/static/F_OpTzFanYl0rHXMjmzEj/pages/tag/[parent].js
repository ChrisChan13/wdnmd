(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a=u(n("q1tI")),r=u(n("Xuae")),i=n("lwAK"),c=n("FYa8"),o=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var o=0,u=f.length;o<u;o++){var l=f[o];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=r.props[l],d=a[l]||new Set;d.has(s)?i=!1:(d.add(s),a[l]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=(0,r.default)();function h(e){var t=e.children;return(a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,o.isInAmpMode)(e)},t)}))})))}h.rewind=p.rewind;var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},KDaR:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("T7D+"),c=n.n(i),o=r.a.createElement;t.a=function(){return o("div",{className:c.a.sidebar},o("div",{className:c.a["sidebar-info"]},o("img",{src:"https://avatars3.githubusercontent.com/u/27924290",alt:"ChrisChan13"}),o("h2",null,"ChrisChan"),o("span",null,"ChrisChan13"),o("p",null,o("span",null,"TypeError: Cannot read property 'Bio' of undefined")),o("span",{role:"img","aria-hidden":"true"},"6 followers \xb7 6 following \xb7 \u2b50 117")),o("div",{className:c.a["sidebar-external"]},o("span",null,"\xb7\xa0\u53cb\u60c5\u94fe\u63a5\xa0\xb7"),o("span",null,o("a",{href:"http://eps.ink",target:"_new"},"eps.ink")),o("hr",null),o("span",null,"\xa92020 ChrisChan"),o("span",null,"Powered\xa0by\xa0",o("a",{href:"https://github.com/ChrisChan13",target:"_new"},"@ChrisChan13")),o("span",null,"\u8054\u7cfb\u6211\xa0:\xa0",o("a",{href:"mailto:chrischan1213@qq.com"},"chrischan1213@qq.com"))))}},MyHq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n("o0o1"),r=n.n(a),i=n("HaE+"),c=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),l=n("md7G"),s=n("foSv"),f=n("q1tI"),d=n.n(f),p=n("yLiY"),h=n.n(p),v=n("8Kt/"),m=n.n(v),b=n("xds5"),y=n("j0W2"),C=n("WA6L"),g=n("KDaR"),w=n("tSD+"),_=n("9ZGv"),k=n.n(_),S=n("cBaE"),O=d.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var E=h()().publicRuntimeConfig.env,N=function(e){Object(u.a)(n,e);var t=j(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labels,n=e.parent,a=e.articles,r=e.parentEntity;return O("div",{className:k.a.container},O(m.a,null,O("title",null,"".concat(r.label," - WDNMD - ChrisChan"))),O(y.a,{labels:t,parent:n}),O(C.a,{articles:a}),a.length>0&&O(w.a,null),O(g.a,null))}}],[{key:"getInitialProps",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("dev"===E){e.next=2;break}return e.abrupt("return",window.__NEXT_DATA__.props.pageProps);case 2:return n=t.query.parent,e.next=5,Object(b.d)();case 5:return a=e.sent,i=Object(S.b)(a,n),c=i.parent,o=i.parentEntity,e.next=9,Object(b.b)(c);case 9:return u=e.sent,e.abrupt("return",{labels:a,parent:n,articles:u,parentEntity:o});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(d.a.Component)},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||r(e)||i(e)||c()}},WA6L:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("cBaE"),c=n("SIKc"),o=n.n(c),u=n("C9V0"),l=r.a.createElement;t.a=function(e){var t=e.articles;return l("div",{className:o.a.articles},0===t.length&&l("div",{className:o.a.empty},l("span",null,"\u6682\u65f6\u6ca1\u6709\u53d1\u5e03\u4efb\u4f55\u6587\u7ae0\u5466~")),t.map((function(e){return l(u.a,{key:e._id,href:"/post/".concat(e._id)},l("div",{className:o.a["articles-item"]},l("div",{className:o.a["articles-item-head"]},l("span",null,Object(i.a)(e.postedAt)),l("span",null,"\xa0\xb7\xa0"),e.labels.map((function(e){return l(u.a,{key:e._id,href:"/tag/".concat(e.parent?"".concat(e.parent.alias,"/"):"").concat(e.alias),label:e.label,className:o.a["articles-item-label"]})}))),l("div",{className:o.a["articles-item-head"]},l("span",null,"\u6700\u8fd1\u66f4\u65b0"),l("span",null,"\xa0\xb7\xa0"),l("span",null,Object(i.a)(e.updatedAt))),l("div",{className:o.a["articles-item-title"]},l("span",{title:e.title},e.title)),e.cover&&l("img",{className:o.a["articles-item-cover"],src:e.cover,alt:e.title})))})))}},XfLv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[parent]",function(){return n("MyHq")}])},Xuae:function(e,t,n){"use strict";var a=n("lwsE"),r=n("PJYZ"),i=n("W8MJ"),c=n("7W2i"),o=n("a1gu"),u=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(o){c(l,o);var u=s(l);function l(e){var i;return a(this,l),i=u.call(this,e),d&&(t.add(r(i)),n(r(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},j0W2:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("1OyB"),r=n("vuIU"),i=n("JX7q"),c=n("Ji7U"),o=n("md7G"),u=n("foSv"),l=n("rePB"),s=n("q1tI"),f=n.n(s),d=n("nOHt"),p=n.n(d),h=n("dhF+"),v=n.n(h),m=n("C9V0"),b=n("cBaE"),y=f.a.createElement;function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var g=function(e){Object(c.a)(n,e);var t=C(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(l.a)(Object(i.a)(r),"isMounted",void 0),r.isMounted=!0,r.state={parent:"",child:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.handleRouteChange(),p.a.events.on("routeChangeComplete",this.handleRouteChange.bind(this))}},{key:"componentWillUnmount",value:function(){this.isMounted=!1,p.a.events.off("routeChangeComplete",this.handleRouteChange.bind(this))}},{key:"handleRouteChange",value:function(){if(this.isMounted){var e=p.a.query,t=e.parent,n=e.child;this.setState({parent:t||"",child:n||""})}}},{key:"render",value:function(){var e=this.props.labels,t=this.state,n=t.parent,a=void 0===n?"":n,r=t.child,i=void 0===r?"":r,c=Object(b.b)(e,a,i);a=c.parent||"",i=c.child||"";var o=e.filter((function(e){return!e.parent})),u=e.find((function(e){return e._id===a}))||{},l=[],s=null;return a&&(l=e.filter((function(e){return e.parent===a})),s=y("div",{className:v.a["labels-children"]},y(m.a,{key:a.toString(),href:"/tag/".concat(u.alias),label:"\u5168\u90e8",className:"".concat(v.a["labels-children-item"]," ").concat(i?"":v.a["labels-children-item_active"])}),l.map((function(e){return y(m.a,{key:e._id,href:"/tag/".concat(u.alias,"/").concat(e.alias),label:e.label,className:"".concat(v.a["labels-children-item"]," ").concat(i===e._id?v.a["labels-children-item_active"]:"")})})))),y("div",null,y("div",{className:v.a["labels-box"]},y("div",{className:v.a.labels},y("div",{className:v.a["labels-wrap"]},y(m.a,{key:"0",href:"/",label:"\u63a8\u8350",className:"".concat(v.a["labels-item"]," ").concat(a?"":v.a["labels-item_active"])}),o.map((function(e){return y(m.a,{key:e._id,href:"/tag/".concat(e.alias),label:e.label,className:"".concat(v.a["labels-item"]," ").concat(a===e._id?v.a["labels-item_active"]:"")})}))))),s)}}]),n}(f.a.Component)},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},"tSD+":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wuio"),c=n.n(i),o=r.a.createElement;t.a=function(){return o("div",{className:c.a["no-more"]},o("span",null,"\u5230\u5e95\u4e86~"))}}},[["XfLv",0,2,1,3,5,4]]]);