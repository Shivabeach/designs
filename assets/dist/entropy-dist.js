!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{addClass:function(){return d},addToArray:function(){return o},addUp:function(){return u},createElement:function(){return l},listen:function(){return i},log:function(){return c},months:function(){return s},properCase:function(){return r},returnDate:function(){return v},sanitizeInput:function(){return f},select:function(){return a}});var r=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1).toLowerCase())},u=function(e){e.reduce((function(e,t){return t+e}),0)},o=function(e,t){return e.push(t),e},c=function(e){console.log(e)},a=function(e,t){return(t||document).querySelector(e)},i=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,!!r)},l=function(e,t){var n=document.createElement(e);return t&&n.classList.add(t),n},d=function(e,t,n){(n||document).querySelector(e).classList.add(t)},f=function(e){var t=document.createElement("div");return t.textContent=e,t.innerHTML},s=["January","February","March","April","May","June","July","August","September","October","November","December"],v=function(e){var t=new Date,n=t.getDate(),r=t.getMonth()+1,u=t.getFullYear();return"".concat(n,"/").concat(r,"/").concat(u)}}],t={};function n(r){var u=t[r];if(void 0!==u)return u.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);n(1);var e=document.querySelector(".password-display"),t=document.getElementById("passwordGeneratorForm"),u=document.querySelector(".length"),o=document.querySelector(".lower"),c=document.querySelector(".upper"),a=document.querySelector(".numbers"),i=document.querySelector(".spec"),l=document.querySelector(".entropy"),d=document.querySelector(".reset"),f=10,s=26,v=26,m=32;function p(){var t=e.textContent,n=t.length;u.value=n,function(e){var t=/[a-z]/g,n=e.match(t);o.value=n?s:0}(t),function(e){var t=/[A-Z]/g.test(e);c.value=t?v:0}(t),function(e){var t=/[0-9]/g,n=e.match(t);a.value=n?f:0}(t),function(e){var t=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e);i.value=t?m:0}(t),function(e){var t=+i.value+ +a.value+ +c.value+ +o.value,n=Math.log2(t),r=e*n;l.value=Math.floor(r)}(n)}t.addEventListener("submit",(function(){setTimeout(p,500)})),d.addEventListener("click",(function(){l.value="",i.value="",a.value="",c.value="",o.value="",u.value="",e.textContent=""}))}()}();
//# sourceMappingURL=entropy-dist.js.map