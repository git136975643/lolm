/*! For license information please see menu.11c8a.js.LICENSE.txt */
!function(){var n={8926:function(n){function t(n,t,e,r,o,i,u){try{var c=n[i](u),f=c.value}catch(n){return void e(n)}c.done?t(f):Promise.resolve(f).then(r,o)}n.exports=function(n){return function(){var e=this,r=arguments;return new Promise((function(o,i){var u=n.apply(e,r);function c(n){t(u,o,i,c,f,"next",n)}function f(n){t(u,o,i,c,f,"throw",n)}c(void 0)}))}}},7757:function(n,t,e){e(5666)},6643:function(n,t,e){"use strict";function r(n){return document.querySelector(n)}e.d(t,{$:function(){return r}}),e(2222),e(1539),e(8674),e(4916),e(4723),e(5306),e(9254),e(2564),e(7757),e(5666),e(8926)},2987:function(n,t,e){"use strict";var r=e(6643);!function(){var n=(0,r.$)(".menu-switch"),t=(0,r.$)(".menu-nav");function e(){n.classList.toggle("menu_switch--expand"),t.classList.toggle("menu_nav--visible")}n.addEventListener("click",e,!1),t.addEventListener("click",(function(){e()}),!1)}()}},t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.x=function(){},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={860:0,592:0},t=[[2987,347]],r=function(){},o=function(o,i){for(var u,c,f=i[0],a=i[1],s=i[2],l=i[3],v=0,h=[];v<f.length;v++)c=f[v],e.o(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(u in a)e.o(a,u)&&(e.m[u]=a[u]);for(s&&s(e),o&&o(i);h.length;)h.shift()();return l&&t.push.apply(t,l),r()},i=self.webpackChunkavoid_goblin=self.webpackChunkavoid_goblin||[];function u(){for(var r,o=0;o<t.length;o++){for(var i=t[o],u=!0,c=1;c<i.length;c++){var f=i[c];0!==n[f]&&(u=!1)}u&&(t.splice(o--,1),r=e(e.s=i[0]))}return 0===t.length&&(e.x(),e.x=function(){}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var c=e.x;e.x=function(){return e.x=c||function(){},(r=u)()}}(),e.x()}();