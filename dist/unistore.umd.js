!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.unistore=t()}(this,function(){function n(n,t){for(var e in t)n[e]=t[e];return n}return function(t){var e=[];function u(n){for(var t=[],u=0;u<e.length;u++)e[u]===n?n=null:t.push(e[u]);e=t}function r(u,r,o,f){t=r?u:n(n({},t),u);for(var i=e,c=0;c<i.length;c++)i[c](t,o,u,f)}return t=t||{},{action:function(n){function e(t,e){e&&2===e.length?r(t,!1,n,e[1]):r(t,!1,n)}return function(){for(var u=arguments,r=[t],o=0;o<arguments.length;o++)r.push(u[o]);var f=n.apply(this,r);if(null!=f)return f.then?f.then(e,r):e(f,r)}},setState:r,subscribe:function(n){return e.push(n),function(){u(n)}},unsubscribe:u,getState:function(){return t}}}});
//# sourceMappingURL=unistore.umd.js.map