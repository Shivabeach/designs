!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{properCase:function(){return r},addUp:function(){return o},addToArray:function(){return u},log:function(){return c},select:function(){return i},listen:function(){return a},createElement:function(){return d},addClass:function(){return l},sanitizeInput:function(){return f},months:function(){return s},returnDate:function(){return m}});var r=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1).toLowerCase())},o=function(e){e.reduce((function(e,t){return t+e}),0)},u=function(e,t){return e.push(t),e},c=function(e){console.log(e)},i=function(e,t){return(t||document).querySelector(e)},a=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,!!r)},d=function(e,t){var n=document.createElement(e);return t&&n.classList.add(t),n},l=function(e,t,n){(n||document).querySelector(e).classList.add(t)},f=function(e){var t=document.createElement("div");return doiv.textContent=e,t.innerHTML},s=["January","February","March","April","May","June","July","August","September","October","November","December"],m=function(e){var t=new Date,n=t.getDate(),r=t.getMonth()+1,o=t.getFullYear();return"".concat(n,"/").concat(r,"/").concat(o)}}],t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);n(1);var e=document.querySelector(".item-1"),t=document.querySelector(".item-2"),o=document.querySelector(".item-3"),u=document.querySelector(".item-4"),c=document.getElementById("datey"),i=document.querySelector(".copy"),a="Home".link("http://designs/");e.innerHTML=a;var d="Page 2".link("http://designs/prime/two");t.innerHTML=d;var l="page 3".link("http://designs/prime/three");o.innerHTML=l;var f,s,m,p,y="Page 4".link("http://designs/prime/four");u.innerHTML=y,f=new Date,s=f.getDate(),m=f.getMonth()+1,p=f.getFullYear(),c.innerHTML="Today is ".concat(m," / ").concat(s," / ").concat(p);var g=new Date;i.innerHTML="©2019 - ".concat(g.getFullYear())}()}();
//# sourceMappingURL=script-dist.js.map