(this["webpackJsonprun-speed-test"]=this["webpackJsonprun-speed-test"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(1),u=function(){return Object(o.jsx)("p",{children:"Loading..."})},a=n(6),i=function(){return Object(o.jsx)(r.a.Suspense,{fallback:Object(o.jsx)(u,{}),children:Object(o.jsx)(a.a,{children:Object(o.jsx)(l,{})})})},l=r.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,31))})),s=n(7),d=n.n(s),f=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),o(e),u(e)}))};n(13);d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i,{})}),document.getElementById("root")),f(console.log)},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var c=n(4),r=n(0),o=n.n(r);var u=n(1),a=o.a.createContext(null);function i(e){var t=e.children,n=o.a.useState(localStorage.getItem(d.code.key)||d.code.defaultValue),r=Object(c.a)(n,2),i=r[0],l=r[1];return o.a.useEffect((function(){s(d.code.key,i)}),[i]),Object(u.jsx)(a.Provider,{value:{code:i,setCode:l},children:t})}function l(){return o.a.useContext(a)}var s=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var c=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];clearTimeout(t),t=setTimeout((function(){e.apply(c,o)}),n)}}((function(e,t){return localStorage.setItem(e,t)}),1e3),d={code:{key:"code",defaultValue:"// Write your code here"}}}},[[14,1,2]]]);
//# sourceMappingURL=main.cb9b3e73.chunk.js.map