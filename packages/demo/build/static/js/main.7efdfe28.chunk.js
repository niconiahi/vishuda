/*! For license information please see main.7efdfe28.chunk.js.LICENSE.txt */
(this["webpackJsonp@vishuda/demo"]=this["webpackJsonp@vishuda/demo"]||[]).push([[0],{228:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),o=n(209),i=n.n(o),u=(n(228),n(91)),c=n(1),s=n(265),l=n(263),f=n(264),h=n(266),p=n(74),d=n(28),g=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(void 0),i=Object(c.a)(o,2),g=i[0],v=i[1],y={w:7,fontSize:"sm"},b=Object(u.a)(Object(u.a)({},y),{},{bg:"red.300"}),m=Object(u.a)(Object(u.a)({},y),{},{bg:"green.300"});return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(p.Pagination,{currentPage:g,isDisabled:n,activeStyles:m,innerLimit:2,outerLimit:2,normalStyles:b,separatorStyles:{w:7,bg:"green.200"},pagesQuantity:20,onPageChange:function(e){console.log(e)},children:Object(d.jsxs)(p.Container,{align:"center",justify:"space-between",w:"full",p:4,children:[Object(d.jsx)(p.Previous,{bg:"green.300",children:"Previous"}),Object(d.jsx)(p.PageGroup,{isInline:!0,align:"center"}),Object(d.jsx)(p.Next,{bg:"green.300",children:"Next"})]})}),Object(d.jsxs)(l.a,{w:"full",justify:"center",align:"center",children:[Object(d.jsx)(f.a,{value:g,onChange:function(e){return v(Number(e.target.value))}}),Object(d.jsx)(h.a,{ml:4,onClick:function(){return a((function(e){return!e}))},children:"Disable ON / OFF"})]})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(g,{})})}),document.getElementById("root"))},74:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(230);var o=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},f=/^\[object .+?Constructor\]$/,h="object"==typeof l&&l&&l.Object===Object&&l,p="object"==typeof self&&self&&self.Object===Object&&self,d=h||p||Function("return this")();function g(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function v(e,t){return!(!e||!e.length)&&function(e,t,n){if(t!=t)return function(e,t,n,r){for(var a=e.length,o=-1;++o<a;)if(t(e[o],o,e))return o;return-1}(e,b);for(var r=-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}(e,t)>-1}function y(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}function b(e){return e!=e}function m(e,t){return e.has(t)}function _(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var j,P=Array.prototype,S=Function.prototype,w=Object.prototype,O=d["__core-js_shared__"],I=(j=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"",x=S.toString,L=w.hasOwnProperty,E=w.toString,C=RegExp("^"+x.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=d.Symbol,D=w.propertyIsEnumerable,M=P.splice,Q=k?k.isConcatSpreadable:void 0,R=Math.max,F=H(d,"Map"),N=H(d,"Set"),A=H(Object,"create");function B(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function $(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function W(e){var t=-1,n=e?e.length:0;for(this.__data__=new $;++t<n;)this.add(e[t])}function G(e,t){for(var n,r,a=e.length;a--;)if((n=e[a][0])===(r=t)||n!=n&&r!=r)return a;return-1}function J(e,t,n,r,a){var o=-1,i=e.length;for(n||(n=K),a||(a=[]);++o<i;){var u=e[o];t>0&&n(u)?t>1?J(u,t-1,n,r,a):y(a,u):r||(a[a.length]=u)}return a}B.prototype.clear=function(){this.__data__=A?A(null):{}},B.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},B.prototype.get=function(e){var t=this.__data__;if(A){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return L.call(t,e)?t[e]:void 0},B.prototype.has=function(e){var t=this.__data__;return A?void 0!==t[e]:L.call(t,e)},B.prototype.set=function(e,t){return this.__data__[e]=A&&void 0===t?"__lodash_hash_undefined__":t,this},z.prototype.clear=function(){this.__data__=[]},z.prototype.delete=function(e){var t=this.__data__,n=G(t,e);return!(n<0)&&(n==t.length-1?t.pop():M.call(t,n,1),!0)},z.prototype.get=function(e){var t=this.__data__,n=G(t,e);return n<0?void 0:t[n][1]},z.prototype.has=function(e){return G(this.__data__,e)>-1},z.prototype.set=function(e,t){var n=this.__data__,r=G(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},$.prototype.clear=function(){this.__data__={hash:new B,map:new(F||z),string:new B}},$.prototype.delete=function(e){return q(this,e).delete(e)},$.prototype.get=function(e){return q(this,e).get(e)},$.prototype.has=function(e){return q(this,e).has(e)},$.prototype.set=function(e,t){return q(this,e).set(e,t),this},W.prototype.add=W.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},W.prototype.has=function(e){return this.__data__.has(e)};var T=N&&1/_(new N([,-0]))[1]==1/0?function(e){return new N(e)}:function(){};function q(e,t){var n,r,a=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?a["string"==typeof t?"string":"hash"]:a.map}function H(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return function(e){return!(!te(e)||(t=e,I&&I in t))&&(ee(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?C:f).test(function(e){if(null!=e){try{return x.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}(n)?n:void 0}function K(e){return Y(e)||function(e){return Z(e)&&L.call(e,"callee")&&(!D.call(e,"callee")||"[object Arguments]"==E.call(e))}(e)||!!(Q&&e&&e[Q])}var U,V,X=(U=function(e){return function(e,t,n){var r=-1,a=v,o=e.length,i=!0,u=[],c=u;if(o>=200){var s=T(e);if(s)return _(s);i=!1,a=m,c=new W}else c=u;e:for(;++r<o;){var l=e[r],f=l;if(l=0!==l?l:0,i&&f==f){for(var h=c.length;h--;)if(c[h]===f)continue e;u.push(l)}else a(c,f,n)||(c!==u&&c.push(f),u.push(l))}return u}(J(e,1,Z,!0))},V=R(void 0===V?U.length-1:V,0),function(){for(var e=arguments,t=-1,n=R(e.length-V,0),r=Array(n);++t<n;)r[t]=e[V+t];t=-1;for(var a=Array(V+1);++t<V;)a[t]=e[t];return a[V]=r,g(U,this,a)}),Y=Array.isArray;function Z(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!ee(e)}(e)}function ee(e){var t=te(e)?E.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function te(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var ne=X,re={pagesQuantity:void 0,currentPage:1,normalStyles:{},separatorStyles:{},activeStyles:{},isDisabled:!1,innerLimit:0,separatorIcon:void 0,outerLimit:0,hoverIconLeft:void 0,hoverIconRight:void 0},ae=function(e){return e[0]},oe=function(e){return e.slice(-1)[0]},ie=function(e){var t=e.pagesQuantity,n=e.currentPage,r=e.innerLimit,a=e.outerLimit;if(!t)return[];var o=s(Array(t).keys()).map((function(e){return e+1}));if(!r||!a)return o;var i,u,c=o.slice(0,a),l=o.slice(1).slice(-a),f=oe(c),h=ae(l),p=(i=n-r)<f?o.slice(f,n-1):o.slice(i-1,n-1),d=ne(s(c),s(p)),g=ae(p)>f+1,v=(u=n+r)>h?o.slice(n+1,h):o.slice(n,u),y=ne(s(v),s(l)),b=oe(v)<h-1;return function(e){return e.reduce((function(e,t){return s(e,t===f&&g?[f,0]:t===h&&b?[-1,h]:[t])}),[])}(ne(s(d),[n],s(y)))},ue=r.createContext({state:{currentPage:re.currentPage,activeStyles:re.activeStyles,normalStyles:re.normalStyles,separatorStyles:re.separatorStyles,hoverIconRight:re.hoverIconRight,hoverIconLeft:re.hoverIconLeft,innerLimit:re.innerLimit,outerLimit:re.outerLimit,pagesQuantity:re.pagesQuantity,separatorIcon:re.separatorIcon,isDisabled:re.isDisabled},actions:{setCurrentPage:function(){return null},setIsDisabled:function(){return null},changePage:function(){return null}}}),ce=function(e){var t=e.children,n=e.pagesQuantity,a=e.currentPage,i=e.innerLimit,u=e.outerLimit,s=e.separatorStyles,l=e.normalStyles,f=e.activeStyles,h=e.separatorIcon,p=e.hoverIconRight,d=e.hoverIconLeft,g=e.onPageChange,v=e.isDisabled,y=c(r.useState(re.currentPage),2),b=y[0],m=y[1],_=c(r.useState(re.isDisabled),2),j=_[0],P=_[1],S=r.useMemo((function(){return f}),[f]),w=r.useMemo((function(){return s}),[s]),O=r.useMemo((function(){return i}),[i]),I=r.useMemo((function(){return n}),[n]),x=r.useMemo((function(){return u}),[u]),L=r.useMemo((function(){return l}),[l]),E=r.useMemo((function(){return h}),[h]),C=r.useMemo((function(){return d}),[d]),k=r.useMemo((function(){return p}),[p]);r.useEffect((function(){P(v)}),[v]),r.useEffect((function(){var e;(e=a)-Math.floor(e)==0?I&&(a>I?console.error("Chakra paginator -> passed down currentPage can't be higher than pagesQuantity"):a<1?console.error("Chakra paginator -> passed down currentPage can't be lower than 1"):a&&a!==b&&m(a)):console.error("Chakra paginator -> passed down currentPage has to be a whole number")}),[a]);var D={hoverIconLeft:C,hoverIconRight:k,currentPage:b,pagesQuantity:I,separatorIcon:E,normalStyles:L,activeStyles:S,isDisabled:j,innerLimit:O,separatorStyles:w,outerLimit:x},M={setCurrentPage:m,setIsDisabled:P,changePage:function(e){m(e),g(e)}};return o.default.createElement(ue.Provider,{value:{state:D,actions:M}},t)},se=function(e){var t=u(e,[]);return o.default.createElement("svg",i({className:"feather feather-chevron-left",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t),o.default.createElement("polyline",{points:"15 18 9 12 15 6"}))},le=function(e){var t=u(e,[]);return o.default.createElement("svg",i({className:"feather feather-chevron-right",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t),o.default.createElement("polyline",{points:"9 18 15 12 9 6"}))},fe=function(e){var t=u(e,[]);return o.default.createElement("svg",i({fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t),o.default.createElement("circle",{cx:"12",cy:"12",r:"1"}),o.default.createElement("circle",{cx:"19",cy:"12",r:"1"}),o.default.createElement("circle",{cx:"5",cy:"12",r:"1"}))},he=function(e){var t=e.hoverIcon,n=e.isDisabled,u=e.separatorIcon,c=e.separatorStyles,s=e.separatorPosition,l=r.useContext(ue),f=l.actions,h=l.state,p=h.innerLimit,d=h.currentPage,g=f.setCurrentPage,v=r.useMemo((function(){return"left"===s?d-p:"right"===s?d+p:void 0}),[s,p,d]),y="left"===s?"backwards":"forward",b=r.useCallback((function(){n||v&&g(v)}),[v,n,g]);return o.default.createElement(a.Flex,{as:"li"},o.default.createElement(a.Button,i({align:"center","aria-label":"Jump pages "+y,bg:"transparent",cursor:"pointer",justify:"center",minW:"auto",onClick:b,pointerEvents:n?"none":"auto",pos:"relative",px:1,sx:{_hover:{".call-to-action":{opacity:1}}}},n?{"aria-disabled":!0}:{},c),o.default.createElement(a.Icon,{as:null!=u?u:fe,bg:"inherit",color:"inherit",h:4,w:4}),o.default.createElement(a.Icon,{as:t,bg:"inherit",bottom:0,className:"call-to-action",color:"inherit",h:4,left:0,m:"auto",opacity:0,pos:"absolute",right:0,top:0,transition:"all  cubic-bezier(0.4, 1, 0.9, 0.6) 0.3s",w:4})))},pe=function(e){var t=e.page,n=u(e,["page"]),c=r.useContext(ue),s=c.actions,l=c.state,f=s.changePage,h=l.currentPage,p=l.isDisabled,d=l.activeStyles,g=l.hoverIconLeft,v=l.hoverIconRight,y=l.separatorStyles,b=l.normalStyles,m=l.separatorIcon,_=h===t,j=0===t,P=-1===t,S=_?"Current page, page "+t:"Go to page "+t,w=r.useMemo((function(){return{minW:"auto",px:1,pointerEvents:p?"none":"auto",cursor:"pointer",onClick:function(){return f(t)}}}),[p]);return j?o.default.createElement(he,{hoverIcon:null!=g?g:se,isDisabled:p,separatorIcon:m,separatorPosition:"left",separatorStyles:y}):P?o.default.createElement(he,{hoverIcon:null!=v?v:le,isDisabled:p,separatorIcon:m,separatorPosition:"right",separatorStyles:y}):o.default.createElement(a.Flex,{as:"li"},o.default.createElement(a.Button,i({"aria-label":S},p?{"aria-disabled":!0}:{},_?{"aria-current":!0}:{},w,n,_?d:b),t))};t.Container=function(e){var t=e.children,n=u(e,["children"]);return o.default.createElement(a.Flex,i({"aria-label":"pagination navigation",as:"nav"},n),t)},t.Next=function(e){var t=e.children,n=u(e,["children"]),c=r.useContext(ue),s=c.actions,l=c.state,f=s.changePage,h=l.currentPage,p=l.pagesQuantity,d=l.isDisabled,g=!p||h>p-1;return o.default.createElement(a.Button,i({"aria-label":"Next page",isDisabled:g||d,onClick:function(){g||f(h+1)},pointerEvents:d?"none":"auto"},g||d?{"aria-disabled":!0}:{},n),t)},t.Page=pe,t.PageGroup=function(e){var t,n,c,s,l,f=u(e,[]),h=(t=r.useContext(ue).state,n=t.currentPage,c=t.innerLimit,s=t.outerLimit,l=t.pagesQuantity,{pages:r.useMemo((function(){return ie({currentPage:n,innerLimit:c,outerLimit:s,pagesQuantity:l})}),[n,c,s,l])}).pages;return o.default.createElement(a.Stack,i({isInline:!0,as:"ol",spacing:1},f),h.map((function(e,t){return o.default.createElement(pe,{key:"paginator_page_"+e+"_"+t,page:e})})))},t.Paginator=function(e){var t=e.children,n=e.pagesQuantity,r=void 0===n?re.pagesQuantity:n,a=e.normalStyles,i=void 0===a?re.normalStyles:a,u=e.activeStyles,c=void 0===u?re.activeStyles:u,s=e.separatorStyles,l=void 0===s?re.separatorStyles:s,f=e.isDisabled,h=void 0===f?re.isDisabled:f,p=e.innerLimit,d=void 0===p?re.innerLimit:p,g=e.separatorIcon,v=void 0===g?re.separatorIcon:g,y=e.outerLimit,b=void 0===y?re.outerLimit:y,m=e.hoverIconLeft,_=void 0===m?re.hoverIconLeft:m,j=e.hoverIconRight,P=void 0===j?re.hoverIconRight:j,S=e.currentPage,w=void 0===S?re.currentPage:S,O=e.onPageChange;return o.default.createElement(ce,{activeStyles:c,currentPage:w,hoverIconLeft:_,hoverIconRight:P,innerLimit:d,isDisabled:h,normalStyles:i,onPageChange:O,outerLimit:b,pagesQuantity:r,separatorIcon:v,separatorStyles:l},t)},t.Previous=function(e){var t=e.children,n=u(e,["children"]),c=r.useContext(ue),s=c.actions,l=c.state,f=s.changePage,h=l.currentPage,p=l.isDisabled,d=1===h;return o.default.createElement(a.Button,i({"aria-label":"Previous page",isDisabled:d||p,onClick:function(){d||f(h-1)},pointerEvents:p?"none":"auto"},d||p?{"aria-disabled":!0}:{},n),t)},t.generatePages=ie,t.usePaginator=function(e){var t,n,a=e.total,o=e.initialState,i=c(r.useState(null!==(t=o.pageSize)&&void 0!==t?t:0),2),u=i[0],s=i[1],l=c(r.useState(o.currentPage),2),f=l[0],h=l[1],p=c(r.useState(null!==(n=o.isDisabled)&&void 0!==n&&n),2),d=p[0],g=p[1],v=r.useMemo((function(){return u?f*u-u:0}),[f,u]),y=r.useMemo((function(){return a&&u?Math.ceil(a/u):0}),[a,u]);return{offset:v,currentPage:f,pagesQuantity:y,setCurrentPage:h,pageSize:u,setPageSize:s,isDisabled:d,setIsDisabled:g}}}).call(this,n(123))}},[[242,1,2]]]);
//# sourceMappingURL=main.7efdfe28.chunk.js.map