"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sanitizeInput=exports.addClass=exports.createElement=exports.listen=exports.select=exports.log=exports.addToArray=exports.properCase=void 0;const properCase=e=>`${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`;exports.properCase=properCase;const addToArray=(e,t)=>(e.push(t),e);exports.addToArray=addToArray;const log=e=>{console.log(e)};exports.log=log;const select=(e,t)=>(t||document).querySelector(e);exports.select=select;const listen=(e,t,s,o=!1)=>{e.addEventListener(t,s,!!o)};exports.listen=listen;const createElement=(e,t)=>{const s=document.createElement(e);return t&&s.classList.add(t),s};exports.createElement=createElement;const addClass=(e,t,s)=>{(s||document).querySelector(e).classList.add(t)};exports.addClass=addClass;const sanitizeInput=e=>{const t=document.createElement("div");return doiv.textContent=e,t.innerHTML};exports.sanitizeInput=sanitizeInput;