(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):i(e)}},7561:function(e,t,n){var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(a){}var o=l.call(e);return r&&(t?e[s]=n:delete e[s]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),o=n(7771),i=n(4841),l=Math.max,s=Math.min;e.exports=function(e,t,n){var a,u,c,d,f,v,m=0,h=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,r=u;return a=u=void 0,m=t,d=e.apply(r,n)}function y(e){return m=e,f=setTimeout(w,t),h?b(e):d}function x(e){var n=e-v;return void 0===v||n>=t||n<0||p&&e-m>=c}function w(){var e=o();if(x(e))return C(e);f=setTimeout(w,function(e){var n=t-(e-v);return p?s(n,c-(e-m)):n}(e))}function C(e){return f=void 0,g&&a?b(e):(a=u=void 0,d)}function I(){var e=o(),n=x(e);if(a=arguments,u=this,v=e,n){if(void 0===f)return y(v);if(p)return clearTimeout(f),f=setTimeout(w,t),b(v)}return void 0===f&&(f=setTimeout(w,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,c=(p="maxWait"in n)?l(i(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),I.cancel=function(){void 0!==f&&clearTimeout(f),m=0,a=v=u=f=void 0},I.flush=function(){return void 0===f?d:C(o())},I}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),o=n(3218);e.exports=function(e,t,n){var i=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:i,maxWait:t,trailing:l})}},4841:function(e,t,n){var r=n(7561),o=n(3218),i=n(3448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):l.test(e)?NaN:+e}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3971:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),o=n(7294),i=n(3493),l=n.n(i);const s=e=>{e.preventDefault&&e.preventDefault(),e.returnValue=!1},a=()=>{document&&document.removeEventListener("wheel",s,!1)};var u=function(){const[e,t]=o.useState(!1);return o.useEffect((()=>(e?document&&document.addEventListener("wheel",s,{passive:!1}):a(),a)),[e]),{disableScroll:o.useCallback((()=>t(!0)),[]),enableScroll:o.useCallback((()=>t(!1)),[])}};var c,d,f=n(2218),v=n(4155);const m=null===(c=v)||void 0===v||null===(d=c.env)||void 0===d?void 0:d.NEXT_PUBLIC_IS_TEST,h=()=>Array(10).fill(0).map(((e,t)=>{return{id:(n=t,"".concat("test").concat(n))};var n})),p=(e,t)=>{0!==Math.abs(t.deltaX)||Math.abs(t.deltaY)<15?t.stopPropagation():t.deltaY<0?e.scrollNext():t.deltaY>0&&e.scrollPrev()};function g(){const[e,t]=o.useState(h),[n,i]=o.useState([]),[s,a]=o.useState(0),c=e=>!!n.find((t=>t===e)),{dragStart:d,dragStop:v,dragMove:m,dragging:g}=function(){const[e,t]=o.useState(!1),[n,r]=o.useState(!1),i=o.useRef(0);return{dragStart:o.useCallback((e=>{i.current=e.clientX,t(!0)}),[]),dragStop:o.useCallback((()=>window.requestAnimationFrame((()=>{r(!1),t(!1)}))),[]),dragMove:(t,o)=>{const l=i.current-t.clientX,s=Math.abs(l)>5;e&&s&&r(!0),n&&s&&(i.current=t.clientX,o(l))},dragging:n,position:i,setDragging:r}}(),x=o.useCallback((({scrollContainer:e,getItemById:t,scrollToItem:n})=>{}),[s]),C=o.useCallback(l()((({scrollContainer:e})=>{e.current&&a(e.current.scrollLeft)}),500),[]),{disableScroll:I,enableScroll:S}=u(),E=o.useCallback((()=>{t((e=>e.slice(0,e.length-1)))}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"example",style:{height:"200vh",paddingTop:"200px"},children:(0,r.jsx)("div",{onMouseEnter:I,onMouseLeave:S,children:(0,r.jsxs)("div",{onMouseLeave:v,children:[(0,r.jsx)(f.ScrollMenu,{LeftArrow:b,RightArrow:y,onInit:x,onScroll:C,onWheel:p,onMouseDown:()=>d,onMouseUp:()=>v,onMouseMove:({scrollContainer:e})=>t=>m(t,(t=>{e.current&&(e.current.scrollLeft+=t)})),children:e.map((({id:e})=>{return(0,r.jsx)(w,{title:e,itemId:e,onClick:(t=e,({getItemById:e,scrollToItem:n})=>{if(g)return!1;const r=c(t);i((e=>r?e.filter((e=>e!==t)):e.concat(t))),r||n(e(t),"smooth","center","nearest")}),selected:c(e)},e);var t}))}),(0,r.jsx)("button",{onClick:E,children:"Remove last"})]})})}),(0,r.jsx)("div",{className:"footer",style:{width:"120vw"},children:"Footer"})]})}function b(){const{initComplete:e,isFirstItemVisible:t,scrollPrev:n}=o.useContext(f.VisibilityContext);return(0,r.jsx)(x,{disabled:!e||e&&t,onClick:()=>n(m?"auto":"smooth"),children:"Left"})}function y(){const{initComplete:e,isLastItemVisible:t,scrollNext:n}=o.useContext(f.VisibilityContext);return(0,r.jsx)(x,{disabled:e&&t,onClick:()=>n(m?"auto":"smooth",void 0,void 0,{}),children:"Right"})}function x({children:e,disabled:t,onClick:n}){return(0,r.jsx)("button",{disabled:t,onClick:n,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",right:"1%",opacity:t?"0":"1",userSelect:"none"},children:e})}function w({onClick:e,selected:t,title:n,itemId:i}){const l=o.useContext(f.VisibilityContext),s=!l.initComplete||l.initComplete&&l.isItemVisible(i);return(0,r.jsxs)("div",{"data-cy":i,onClick:()=>e(l),onKeyDown:t=>{"Enter"===t.code&&e(l)},role:"button",style:{border:"1px solid",display:"inline-block",margin:"0 10px",width:"160px",userSelect:"none"},tabIndex:0,className:"card",children:[(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsx)("div",{children:n}),(0,r.jsxs)("div",{style:{backgroundColor:s?"transparent":"gray"},children:["visible: ",JSON.stringify(s)]}),(0,r.jsxs)("div",{children:["selected: ",JSON.stringify(!!t)]})]}),(0,r.jsx)("div",{style:{backgroundColor:t?"green":"bisque",height:"200px"}})]})}var C=()=>{const[e,t]=o.useState(!1);return o.useEffect((()=>{t(!0)}),[]),e?(0,r.jsx)(g,{}):null}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3971)}])},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,a=[],u=!1,c=-1;function d(){u&&s&&(u=!1,s.length?a=s.concat(a):c=-1,a.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=a.length;t;){for(s=a,a=[];++c<t;)s&&s[c].run();c=-1,t=a.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new v(e,t)),1!==a.length||u||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2218:function(e,t,n){!function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");const i="react-horizontal-scrolling-menu",l="-separator",s=`${i}--separator`,a=`${i}--item`,u=`${i}--scroll-container`,c=`${i}--wrapper`,d="itemId",f="data-key",v="data-index";var m=Object.freeze({__proto__:null,rootClassName:i,separatorString:l,separatorClassName:s,itemClassName:a,scrollContainerClassName:u,wrapperClassName:c,id:d,dataKeyAttribute:f,dataIndexAttribute:v});function h({className:e="",children:t,onScroll:n=(()=>{}),scrollRef:r}){const i=o.default.useMemo((()=>`${u} ${e}`),[e]);return o.default.createElement("div",{className:i,onScroll:n,ref:r},t)}var p,g=o.default.memo((function({className:e,id:t,index:n,refs:r}){const i=o.default.useRef(null);return r[n]=i,o.default.createElement("div",Object.assign({className:e},{[f]:t,[v]:n},{ref:i}))})),b=o.default.memo((function({children:e,className:t,id:n,index:r,refs:i}){const l=o.default.useRef(null);return i[String(r)]=l,o.default.createElement("div",Object.assign({className:t},{[f]:n,[v]:r},{ref:l}),e)}));function y({children:e,itemClassName:t="",refs:n,separatorClassName:r=""}){const i=o.default.Children.toArray(e).filter(Boolean),u=i.length,c=o.default.useMemo((()=>`${a} ${t}`),[t]),f=o.default.useMemo((()=>`${s} ${r}`),[r]);return o.default.createElement(o.default.Fragment,null,i.map(((e,t)=>{var r,i;const s=null===(i=null===(r=e)||void 0===r?void 0:r.props)||void 0===i?void 0:i[d],a=s+l,v=t+1===u;return[o.default.createElement(b,{className:c,id:s,key:"menuItem__"+s,refs:n,index:t},e),!v&&o.default.createElement(g,{className:f,id:a,refs:n,key:a,index:t+.1})]})))}function x(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function w(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function C(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return w(n.overflowY,t)||w(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function I(e,t,n,r,o,i,l,s){return i<e&&l>t||i>e&&l<t?0:i<=e&&s<=n||l>=t&&s>=n?i-e-r:l>t&&s<n||i<e&&s>n?l-t+o:0}function S(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,l=t.boundary,s=t.skipOverflowHiddenElements,a="function"==typeof l?l:function(e){return e!==l};if(!x(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],d=e;x(d)&&a(d);){if((d=d.parentElement)===u){c.push(d);break}null!=d&&d===document.body&&C(d)&&!C(document.documentElement)||null!=d&&C(d,s)&&c.push(d)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,v=n.visualViewport?n.visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,p=e.getBoundingClientRect(),g=p.height,b=p.width,y=p.top,w=p.right,S=p.bottom,E=p.left,T="start"===o||"nearest"===o?y:"end"===o?S:y+g/2,j="center"===i?E+b/2:"end"===i?w:E,N=[],k=0;k<c.length;k++){var M=c[k],O=M.getBoundingClientRect(),A=O.height,L=O.width,W=O.top,_=O.right,V=O.bottom,R=O.left;if("if-needed"===r&&y>=0&&E>=0&&S<=v&&w<=f&&y>=W&&S<=V&&E>=R&&w<=_)return N;var $=getComputedStyle(M),B=parseInt($.borderLeftWidth,10),P=parseInt($.borderTopWidth,10),D=parseInt($.borderRightWidth,10),X=parseInt($.borderBottomWidth,10),H=0,Y=0,F="offsetWidth"in M?M.offsetWidth-M.clientWidth-B-D:0,q="offsetHeight"in M?M.offsetHeight-M.clientHeight-P-X:0;if(u===M)H="start"===o?T:"end"===o?T-v:"nearest"===o?I(h,h+v,v,P,X,h+T,h+T+g,g):T-v/2,Y="start"===i?j:"center"===i?j-f/2:"end"===i?j-f:I(m,m+f,f,B,D,m+j,m+j+b,b),H=Math.max(0,H+h),Y=Math.max(0,Y+m);else{H="start"===o?T-W-P:"end"===o?T-V+X+q:"nearest"===o?I(W,V,A,P,X+q,T,T+g,g):T-(W+A/2)+q/2,Y="start"===i?j-R-B:"center"===i?j-(R+L/2)+F/2:"end"===i?j-_+D+F:I(R,_,L,B,D+F,j,j+b,b);var z=M.scrollLeft,U=M.scrollTop;T+=U-(H=Math.max(0,Math.min(U+H,M.scrollHeight-A+q))),j+=z-(Y=Math.max(0,Math.min(z+Y,M.scrollWidth-L+F)))}N.push({el:M,top:H,left:Y})}return N}function E(e){return e===Object(e)&&0!==Object.keys(e).length}function T(e,t){var n=!e.ownerDocument.documentElement.contains(e);if(E(t)&&"function"==typeof t.behavior)return t.behavior(n?[]:S(e,t));if(!n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:E(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,i=e.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)}))}(S(e,r),r.behavior)}}var j=function(){return p||(p="performance"in window?performance.now.bind(performance):Date.now),p()};function N(e){var t=j(),n=Math.min((t-e.startTime)/e.duration,1),r=e.ease(n),o=e.startX+(e.x-e.startX)*r,i=e.startY+(e.y-e.startY)*r;e.method(o,i),o!==e.x||i!==e.y?requestAnimationFrame((function(){return N(e)})):e.cb()}function k(e,t,n,r,o,i){var l,s,a;void 0===r&&(r=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),l=e,s=e.scrollLeft,a=e.scrollTop,N({scrollable:l,method:function(t,n){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(n)},startTime:j(),startX:s,startY:a,x:t,y:n,duration:r,ease:o,cb:i})}var M=function(e,t){var n=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(n)?T(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var r=t.el,o=t.left,i=t.top,l=r.scrollLeft,s=r.scrollTop;return l===o&&s===i?e:[].concat(e,[new Promise((function(e){return k(r,o,i,n.duration,n.ease,(function(){return e({el:r,left:[l,o],top:[s,i]})}))}))])}),[]))}}):Promise.resolve(T(e,t))};function O(e,t,n,r,o){var i,l;const s=(null===(l=null===(i=e)||void 0===i?void 0:i.entry)||void 0===l?void 0:l.target)||e,a=t||"smooth";return s&&M(s,Object.assign({behavior:a,inline:n||"end",block:r||"nearest",duration:500},o))}const A=e=>document.querySelector(`[data-key='${e}']`),L=e=>document.querySelector(`[data-index='${e}']`);function W(e){return o.default.isValidElement(e)&&e||"function"==typeof e&&o.default.createElement(e,null)||null}const _=e=>e.filter((e=>!new RegExp(".*-separator$").test(e)));function V({items:e,itemsChanged:t,refs:r,options:i}){const l=o.default.useRef(),[s,a]=o.default.useState([]),u=o.default.useRef(+setTimeout((()=>{}),0)),c=o.default.useCallback((t=>{e.set(function(e,t){return[...e].map((e=>{var n,r;const o=e.target,i=(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)||"";return[i,{index:String((null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,i)),n.g.clearTimeout(u.current),u.current=+setTimeout((()=>n.g.requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),i.throttle)}),[e,i]);return o.default.useLayoutEffect((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(r),t=l.current||new IntersectionObserver(c,i);return l.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(u.current),t.disconnect(),l.current=void 0}}),[c,t,i,r]),{visibleItems:s}}function R(e,t){const[n,r]=o.default.useState(""),i=o.default.useMemo((()=>{return t=e,o.default.Children.toArray(t).map((e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[d]})).filter(Boolean);var t}),[e]);return o.default.useEffect((()=>{const e=i.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((e=>!i.includes(e))).forEach((e=>{var n,r;const o=(null===(n=t.last())||void 0===n?void 0:n.key)===e&&(null===(r=t.prev(e))||void 0===r?void 0:r.key)||"";t.delete(o),t.delete(`${e}-separator`),t.delete(e)})),r(e)}),[i,t]),n}class $ extends Map{toArr(){return this.sort([...this])}toItems(){return this.toArr().map((([e])=>e))}toItemsWithoutSeparators(){return _(this.toItems())}toItemsKeys(){return this.toItems()}sort(e){return e.sort((([,e],[,t])=>+e.index-+t.index))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((([e,t])=>{super.set(e,t)})):super.set(e,t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}prev(e){var t;const n=this.toArr(),r=n.findIndex((([t,n])=>t===e||n===e));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}next(e){var t;const n=this.toArr(),r=n.findIndex((([t,n])=>t===e||n===e));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}}const B={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},P=o.default.createContext({}),D=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,onInit:r=(()=>{}),onUpdate:i=(()=>{}),onMouseDown:l,onMouseUp:s,onMouseMove:a,onScroll:u=(()=>{}),onWheel:d=(()=>{}),options:f=B,scrollContainerClassName:v="",itemClassName:m="",separatorClassName:p="",wrapperClassName:g="",apiRef:b={current:{}}}){const x=W(e),w=W(t),C=o.default.useRef(null),[I]=o.default.useState({}),S=o.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},B),f),{root:C.current})),[f,C.current]),E=o.default.useRef(new $).current,T=R(n,E),{visibleItems:j}=V({items:E,itemsChanged:T,options:S,refs:I}),N=!!j.length,k=o.default.useMemo((()=>function(e,t=[],n){var r,o;const i=_(t),l=!!(null===(r=e.first())||void 0===r?void 0:r.visible),s=!!(null===(o=e.last())||void 0===o?void 0:o.visible),a=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},u=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},c=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:a,getItemElementById:A,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getItemElementByIndex:L,getNextItem:c,getPrevItem:u,isFirstItemVisible:l,isItemVisible:e=>t.includes(e),isLastItem:t=>e.last()===a(t),isLastItemVisible:s,scrollNext:(e="smooth",t="start",r="nearest",{duration:o,ease:i,boundary:l=(null==n?void 0:n.current)}={})=>O(c(),e,t,r,{boundary:l,duration:o,ease:i}),scrollPrev:(e="smooth",t="end",r="nearest",{duration:o,ease:i,boundary:l=(null==n?void 0:n.current)}={})=>O(u(),e,t,r,{boundary:l,duration:o,ease:i}),scrollToItem:(e,t,r,o,i)=>O(e,t,r,o,Object.assign({boundary:null==n?void 0:n.current},i)),visibleItems:t,visibleItemsWithoutSeparators:i}}(E,j,C)),[E,j,T]),M=o.default.useCallback((()=>Object.assign(Object.assign({},k),{initComplete:N,items:E,visibleItems:j,scrollContainer:C})),[k,N,E,j,C]),[D,X]=o.default.useState(M);!function({cb:e=(()=>{}),condition:t,visibleItems:n}){const r=t?JSON.stringify(n):"";o.default.useEffect((()=>{t&&r&&e()}),[t,r])}({cb:()=>i(D),condition:function({cb:e,condition:t}){const[n,r]=o.default.useState(!1);return o.default.useEffect((()=>{t&&!n&&(r(!0),e())}),[t,n]),n}({cb:()=>r(D),condition:N}),visibleItems:j}),o.default.useEffect((()=>X(M())),[M]),b.current=D;const H=o.default.useCallback((e=>u(D,e)),[u,D]),Y=o.default.useCallback((e=>d(D,e)),[d,D]),F=o.default.useMemo((()=>`${c} ${g}`),[g]);return o.default.createElement("div",{className:F,onWheel:Y,onMouseDown:null==l?void 0:l(D),onMouseUp:null==s?void 0:s(D),onMouseMove:null==a?void 0:a(D)},o.default.createElement(P.Provider,{value:D},x,o.default.createElement(h,{className:v,onScroll:H,scrollRef:C},o.default.createElement(y,{refs:I,itemClassName:m,separatorClassName:p},n)),w))},e.VisibilityContext=P,e.constants=m,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,o=t===n.length-1,i=new RegExp(l).test(e);return!((r||o)&&i)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=_(e),r=_(t);return{prev:()=>D(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,o=n-r,i=o<0,l=i?0:o,s=e.slice(l,i?r:n);return s.length===r?s:e.slice(n,r)}(n,r)),next:()=>D(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=n+r+1,i=o>e.length-1,l=i?e.length-1:o,s=e.slice(i?l-r+1:n+1,l);return s.length===r?s:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}},function(e){e.O(0,[774],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);