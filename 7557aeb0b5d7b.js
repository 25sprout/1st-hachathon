!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/1st-hackathon/",t(t.s=17)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=new Date(2017,10,28),o=t.startTiming=new Date(r.valueOf());o.setHours(11),o.setMinutes(0),o.setSeconds(0,0);var a=t.deadlineTiming=new Date(r.valueOf());a.setHours(17),a.setMinutes(30),a.setSeconds(0,0);var i="aljjjgaaaaaaaaaaaaaaaaaaaaaaam,32;iop9gy7uk/lm;\\\\\\\\\\\\\\\\\\\\\\\\\\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyy................s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ioooooooooooooooooooooooooooooooooooooifffffffffffffffffffffffffffffffo23orl;wef;p34io3m23ihcdusihcowefdfnbdjewd",u=48,l=92,c=document.body.offsetHeight-160,f=Math.floor(window.innerWidth/u)*(c%l===0?c/l:Math.floor(c/l)+1);t.catTyping=f<i.length?i.substr(0,f):i.repeat(Math.ceil(f/i.length)).substr(0,f-1),t.timer={days:null,hours:null,minutes:null};t.default="CONFIG"},function(e,t){e.exports={standard:"#E8E73A",secondary:"",darkBlack:"#1A1A1A"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelector(".team-wrapper"),o=function(){return r.childNodes[Math.floor(r.childElementCount*Math.random())]},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("img");n.setAttribute("src",e),n.classList.add(t);var r=o();r.insertBefore(n,r.querySelector(".description"))};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e,t){var n=t-e,r=Math.floor(n/60/60/24);n-=24*r*60*60;var o=Math.floor(n/60/60);n-=60*o*60;var a=Math.floor(n/60);return n-=60*a,{days:r,hours:o,minutes:a,seconds:n}},a=function(){var e=parseInt((new Date).getTime()/1e3,10),t=r.startTiming.getTime()/1e3;if(e<t)return o(e,t);var n=r.deadlineTiming.getTime()/1e3;return e<n&&o(e,n)};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=document.querySelector(".countdown-timer"),a=o.querySelector(".days > .value"),i=o.querySelector(".hours > .value"),u=o.querySelector(".minutes > .value"),l=o.querySelector(".seconds > .value"),c=function(e){return e<10?"0"+e:e},f=function(e){e.days!==r.timer.days&&(r.timer.days=e.days,a.innerText=c(e.days)),e.hours!==r.timer.hours&&(r.timer.hours=e.hours,i.innerText=c(e.hours)),e.minutes!==r.timer.minutes&&(r.timer.minutes=e.minutes,u.innerText=c(e.minutes)),l.innerText=c(e.seconds)};t.default=f},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
 * TypeWriting.js
 *
 * Copyright © 2017 Eddie Wen | MIT license
 * https://github.com/EddieWen-Taiwan/TypeWriting.js
 */
!function(r,i){o=i,a="function"==typeof o?o.call(t,n,t,e):o,!(void 0!==a&&(e.exports=a))}(void 0,function(e,t,n){var o=1,a=!1,l={UNREADY:"UNREADY",READY:"READY",TYPEING:"TYPEING"},c={targetElement:null,inputString:"",typingInterval:150,blinkInterval:"0.7s",cursorColor:"black",pluginCallback:function(){},task:l.UNREADY},f=function e(){if(o<=c.inputString.length){var t=s(o);o+=1,"<"===t.slice(-1)?a=!0:">"===t.slice(-1)&&(a=!1),c.targetElement.innerHTML=t,a?e():setTimeout(function(){e()},c.typingInterval)}else c.task=l.READY,o=1,c.pluginCallback.call()},s=function(e){return c.inputString.slice(0,e)},d=function(){c.pluginCallback=function(){}},y=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},p=function(){function e(t,n){if(r(this,e),!t||"object"!==("undefined"==typeof t?"undefined":u(t)))throw new Error("`options` is invalid");if(!t.inputString)throw new Error("Missing argument: inputString");if("string"!=typeof t.inputString)throw new Error("`inputString` is not a string");c=y(c,t),n?"function"==typeof n?c.pluginCallback=n:(console.error(n+" is not a function"),d()):d();var o=document.createElement("div");o.style.display="inline-block",o.innerHTML="I",c.targetElement.appendChild(o);var a=o.offsetHeight,i=o.offsetWidth;c.targetElement.removeChild(o);var s="@-webkit-keyframes blink{0%,100%{opacity:1}50%{opacity:0}}@-moz-keyframes blink{0%,100%{opacity:1}50%{opacity:0}}@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}.typingCursor::after{content:'';width:"+i+"px;height:"+a+"px;margin-left:5px;display:inline-block;vertical-align:bottom;background-color:"+c.cursorColor+";-webkit-animation:blink "+c.blinkInterval+" infinite;-moz-animation:blink "+c.blinkInterval+" infinite;animation:blink "+c.blinkInterval+" infinite}",p=document.createElement("style");p.type="text/css",p.styleSheet?p.styleSheet.cssText=s:p.appendChild(document.createTextNode(s)),document.head.appendChild(p),c.targetElement.className+=" typingCursor",c.task=l.TYPING,f()}return i(e,[{key:"rewrite",value:function(e,t){var n=this;if(c.task===l.TYPING)return console.warn("Last task is not finished yet"),void setTimeout(function(){n.rewrite(e,t)},c.typingInterval);if(!e)throw new Error("Missing argument: inputString");if("string"!=typeof e)throw new Error("`inputString` is not a string");c.inputString=e,t?"function"==typeof t?c.pluginCallback=t:(console.error(t+" is not a function"),d()):d(),c.task=l.TYPING,f()}}]),e}();return p})},function(e,t,n){e.exports=n.p+"0aa004b.png"},function(e,t,n){e.exports=n.p+"1834708.png"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(14),i=r(a),u=n(1),l=r(u);n(6),n(10),n(7),n(5),n(8),n(13),n(12),n(11),n(9);var c=n(0),f=n(3),s=r(f),d=n(4),y=r(d),p=n(2),m=r(p),g=n(16),v=r(g),h=n(15),b=r(h),k=[].concat(o(c.catTyping)).reverse().join(""),w=(0,s.default)();if(w)(0,y.default)(w),setInterval(function(){(0,y.default)((0,s.default)())},1e3);else{var S=document.querySelector(".countdown-timer");S.querySelector(".days > .value").innerText="XX",S.querySelector(".hours > .value").innerText="XX",S.querySelector(".minutes > .value").innerText="XX",S.querySelector(".seconds > .value").innerText="XX"}var T=function e(t,n){document.body.classList.add("invert"),setTimeout(function(){document.body.classList.remove("invert"),t.rewrite(n,function(){e(t,n===c.catTyping?k:c.catTyping)})},1e3)},E=new i.default({targetElement:document.querySelector(".confuseing-typing"),inputString:c.catTyping,typingInterval:20,blinkInterval:"1s",cursorColor:l.default.darkBlack},function(){T(E,k)});window.screen.width>480&&(0,m.default)(v.default,"wine"),(0,m.default)(b.default,"tang")}]);