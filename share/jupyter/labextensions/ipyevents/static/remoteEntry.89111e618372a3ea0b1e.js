var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,i,a,s,u,l,f,c,d,p,h,v={732:(e,r,t)=>{var n={"./index":()=>t.e(568).then((()=>()=>t(568))),"./extension":()=>Promise.all([t.e(591),t.e(480)]).then((()=>()=>t(480)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>i})}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={exports:{}};return v[e].call(t.exports,t,t.exports,b),t.exports}b.m=v,b.c=g,b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+"."+{480:"805ec242375a35aba761",568:"a48903efe1a978de0eeb",591:"bc5600010e9ea9844128"}[e]+".js?v="+{480:"805ec242375a35aba761",568:"a48903efe1a978de0eeb",591:"bc5600010e9ea9844128"}[e],b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ipyevents:",b.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var c=(r,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var i=b.S[t],a="ipyevents",s=[];switch(t){case"default":((e,r,t,n)=>{var o=i[e]=i[e]||{},s=o[r];(!s||!s.loaded&&(1!=!s.eager?n:a>s.from))&&(o[r]={get:()=>b.e(568).then((()=>()=>b(568))),from:a,eager:!1})})("ipyevents","1.9.0")}return e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],s=(typeof a)[0];if(i!=s)return"o"==i&&"n"==s||"s"==s||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(s=e[i]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var a=[];for(i=1;i<e.length;i++){var s=e[i];a.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?a.pop()+" "+a.pop():o(s))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,s=1,u=!0;;s++,a++){var l,f,c=s<e.length?(typeof e[s])[0]:"";if(a>=r.length||"o"==(f=(typeof(l=r[a]))[0]))return!u||("u"==c?s>n&&!o:""==c!=o);if("u"==f){if(!u||"u"!=c)return!1}else if(u)if(c==f)if(s<=n){if(l!=e[s])return!1}else{if(o?l>e[s]:l<e[s])return!1;l!=e[s]&&(u=!1)}else if("s"!=c&&"n"!=c){if(o||s<=n)return!1;u=!1,s--}else{if(s<=n||f<c!=o)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,s--)}}var d=[],p=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?p()|p():2==h?p()&p():h?i(h,r):!p())}return!!p()},a=(e,r)=>{var t=b.S[e];if(!t||!b.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},s=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",l=(e,r,t,n)=>{var o=s(e,t);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(t,o,n)),f(e[t][o])},f=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,n,o){var i=b.I(r);return i&&i.then?i.then(e.bind(e,r,b.S[r],t,n,o)):e(r,b.S[r],t,n)})(((e,r,t,n)=>(a(e,t),l(r,0,t,n)))),d={},p={591:()=>c("default","@jupyter-widgets/base",[,[1,4],[1,3],[1,2],[1,1,0,4],1,1,1])},h={568:[591],591:[591]},b.f.consumes=(e,r)=>{b.o(h,e)&&h[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete d[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=p[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={449:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(591!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=b.p+b.u(r),a=new Error;b.l(i,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,s]=t,u=0;for(n in a)b.o(a,n)&&(b.m[n]=a[n]);for(s&&s(b),r&&r(t);u<i.length;u++)o=i[u],b.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0},t=self.webpackChunkipyevents=self.webpackChunkipyevents||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=b(732);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipyevents=m})();