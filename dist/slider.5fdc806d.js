parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"10wz":[function(require,module,exports) {
var e=document.querySelector(".slider__arrow--left"),t=document.querySelector(".slider__arrow--right"),n=document.querySelector(".slider__slides"),i=n.offsetWidth,r=!0,o=0;n.appendChild(n.querySelector("img").cloneNode());var s=n.querySelectorAll(".slider__slide").length;function c(){r&&o<s-1&&(l(o+1),o===s-1&&setTimeout(function(){u(0)},300))}function d(){r&&o>=0&&(0===o?u(s-1,function(){l(o-1)}):l(o-1))}function l(e,t){t||(r=!1,setTimeout(function(){r=!0},300)),o=e,n.style.transform="translateX("+o*-i+"px)"}function u(e,t){window.requestAnimationFrame(function(){n.style.transition="none",l(e,!0),window.requestAnimationFrame(function(){n.style.transition="transform 300ms",t&&t()})})}t.addEventListener("click",c),e.addEventListener("click",d),window.addEventListener("keydown",function(e){switch(e.key){case"ArrowLeft":d();break;case"ArrowRight":c()}});
},{}]},{},["10wz"], null)
//# sourceMappingURL=/slider.5fdc806d.js.map