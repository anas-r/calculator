(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,e){t.exports=e(5)},function(t,n,e){var o=e(2),r=e(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,n,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},o=[],r=0;r<t.length;r++){var i=t[r],c=n.base?i[0]+n.base:i[0],u=e[c]||0,f="".concat(c," ").concat(u);e[c]=u+1;var l=s(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:f,updater:b(d,n),references:1}),o.push(f)}return o}function u(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var f,l=(f=[],function(t,n){return f[t]=n,f.filter(Boolean).join("\n")});function d(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,v=0;function b(t,n){var e,o,r;if(n.singleton){var i=v++;e=h||(h=u(n)),o=d.bind(null,e,i,!1),r=d.bind(null,e,i,!0)}else e=u(n),o=p.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=s(e[o]);a[r].references--}for(var i=c(t,n),u=0;u<e.length;u++){var f=s(e[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}e=i}}}},function(t,n,e){(n=e(4)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.scss"}]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([r]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n,e){"use strict";function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.r(n);var r=function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"on",(function(t,n){e.element.addEventListener(t,n)})),o(this,"append",(function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n.forEach((function(t){return e.element.appendChild(t)}))})),n===document?this.element=document:this.element="body"===n?document.body:document.querySelector(n)},i=function(t){return new r(t)};i.create=function(t,n){var e=document.createElement(t);return n&&(e.className=n),e},i.div=function(t){return i.create("div",t)},i.btn=function(t){var n=i.div("button"),e=i.create("span","button-circle"),o=i.create("span","button-label");return e.append(o),n.append(e),o.textContent=t,n};var a={"+":0,"-":0,"*":1,"/":1,"^":2},s={"+":!0,"-":!0,"*":!0,"/":!0,"^":!1};function c(t,n,e){var o=[parseFloat(t),parseFloat(n)],r=o[0],i=o[1];switch(e){case"+":return r+i;case"-":return r-i;case"*":return r*i;case"/":return r/i;case"^":return Math.pow(r,i);default:throw new Error("".concat(e," is not an operator"))}}function u(t){return t.findIndex((function(n,e){return"-"===n&&("("===t[e-1]||0===e)}))}function f(t){for(var n=t.split(/([-+*\/()^])/).filter((function(t){return t.match(/[-+*()0-9\/^]/)})).map((function(t){return t.trim()})),e=u(n);e>-1;)n.splice(e,0,"0"),e=u(n);return n}function l(t){return!!t.match(/[-+*\/^]/)&&!t.match(/[0-9]/)}function d(t){for(var n=function(t){var n=Date.now(),e=f(t),o=[],r=[];for(e.forEach((function(t){if(t.match(/[0-9]/))o.push(t);else if(l(t)){for(;r[0]&&(a[t]<a[r[0]]||a[t]===a[r[0]]&&s[t])&&"("!==r[0];)if(o.push(r.shift()),Date.now()-n>1e3)throw new Error("Bad expression");r.unshift(t)}else if("("===t)r.unshift(t);else if(")"===t){for(;r[0]&&"("!==r[0];)o.push(r.shift());"("===r[0]&&r.shift()}}));r[0];)r[0].match(/[()]/)?r.shift():o.push(r.shift());return o}(t),e=0;n[1];){if(!n[e])throw new Error("Invalid expression");if(l(n[e])){if(!(e>1))throw new Error("Invalid expression");n.splice(e-2,3,c(n[e-2],n[e-1],n[e])+""),e=0}else e++}if("NaN"===n[0])throw new Error("Invalid expression");return n[0]}function p(t){var n=t.textContent.length;n<=19?t.style.fontSize="xx-large":n>19&&n<27?(console.log("x large"),t.style.fontSize="x-large"):n>27&&(t.style.fontSize="large")}e(1);!function(){var t=i.div("calc"),n=i.div("screen"),e=i.div("screen-text");n.append(e);var o=i.div("buttons"),r=i.btn("0"),a=i.btn("AC"),s=i.btn("");s.innerHTML='<span class="button-circle"><span class="button-label">x<sup>y</sup></span></span> ';var c={add:i.btn("+"),sub:i.btn("-"),mul:i.btn("*"),div:i.btn("/"),eq:i.btn("=")};Object.keys(c).forEach((function(t){return c[t].classList.add("operator")})),r.id="zero",c.eq.id="equal",a.id="AC",s.id="power",s.classList.add("operator"),o.append(a,i.btn("√"),s),o.append(i.btn("C"),i.btn("("),i.btn(")"),c.div),o.append(i.btn("7"),i.btn("8"),i.btn("9"),c.mul),o.append(i.btn("4"),i.btn("5"),i.btn("6"),c.sub),o.append(i.btn("1"),i.btn("2"),i.btn("3"),c.add),o.append(r,i.btn("."),c.eq),t.append(n,o),i("body").append(t),function(){var t=i(".screen > div").element;i(".buttons").on("click",(function(n){var e=n.target.closest(".button");if(e)if("√"===e.textContent)t.textContent=f("(".concat(t.textContent,")^0.5")).join(" "),p(t);else if(e.textContent.match(/[0-9]/))t.textContent=f(t.textContent+e.textContent).join(" "),p(t);else if("C"===e.textContent){var o=f(t.textContent);o.pop(),t.textContent=o.join(" "),p(t)}else if("AC"===e.textContent)t.textContent="";else if(e.textContent.match(/[-+*\/()]/))t.textContent=f(t.textContent+e.textContent).join(" "),p(t);else if("power"===e.id)t.textContent=f(t.textContent+"^").join(" "),p(t);else if("."===e.textContent){if(t.textContent.split(" ").pop().match(/[.]/))return void p(t);console.log(t.textContent.split(" ").pop()),p(t),t.textContent+="."}else if("="===e.textContent)try{t.textContent=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.round(d(t)*Math.pow(10,n))/Math.pow(10,n)}(t.textContent),p(t)}catch(n){console.error(n),t.textContent="Bad expression",setTimeout((function(){return t.textContent=""}),500)}}))}()}(),document.body.insertAdjacentHTML("beforeend",'\n<div class="github"\n     style="background: #4A5568; position: fixed; bottom: 0; margin: 0 0px 0 0;width: 100%; \n     height: 50px; display: flex; justify-content: space-around; color: white;\n     font-family: \'Merriweather Sans\', sans-serif; font-size: 1rem">\n    <div class="text" style="margin: auto 0 auto auto">Part of my The ODIN\n        Project portfolio.\n    </div>\n    <a href="https://github.com/anas-r"\n       style="margin: auto 5px auto 10px; color: white; text-decoration: none"> <i\n            class="fab fa-github fa-2x" style="cursor: pointer; font-family: \'FontAwesome\',serif; font-style: normal; "></i></a>\n    &nbsp;\n    <a href="https://www.linkedin.com/in/s-s-s-s/"\n       style="margin: auto auto auto 0; color: white; text-decoration: none"> <i\n            class="fab fa-linkedin fa-2x" style="cursor: pointer; font-family: \'FontAwesome\',serif; font-style: normal; "></i></a>\n</div>\n')}],[[0,1]]]);