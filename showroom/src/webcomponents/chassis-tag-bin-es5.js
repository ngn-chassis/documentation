!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(n,t){function r(t,e){return n.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.exports=r},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(t){return n(t)}:e.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(t)}e.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){"use strict";var o,r=n(5),u=r(n(1)),a=r(n(6)),i=r(n(7)),c=r(n(8)),f=r(n(3)),l=r(n(9)),s=r(n(2)),d=r(n(10));customElements.define("chassis-tag-bin",(o=new WeakMap,function(t){function n(){var r;(0,a.default)(this,n),(r=(0,c.default)(this,(0,f.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",r.attachShadow({mode:"open"});var t=document.createElement("div");t.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-tag-bin{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-tag-bin *{box-sizing:border-box}</style></template>');var e=t.querySelector("template");"content"in e?r.shadowRoot.appendChild(e.content.cloneNode(!0)):e.childNodes.forEach(function(t){r.shadowRoot.appendChild(t.cloneNode(!0))}),e=null,r.crypto=null;try{r.crypto=crypto}catch(t){r.crypto=msCrypto}return o.set((0,s.default)((0,s.default)(r)),{sourceElement:null,addAttribute:function(e){Object.defineProperty((0,s.default)((0,s.default)(r)),e,{get:function(){return this.getAttribute(e)},set:function(t){o.get(this).setAttributeValue(e,t)}})},addAttributes:function(t){return t.forEach(function(t){return o.get((0,s.default)((0,s.default)(r))).addAttribute(t)})},setAttributeValue:function(t,e){r.setAttribute(t,e),o.get((0,s.default)((0,s.default)(r))).sourceElement&&(o.get((0,s.default)((0,s.default)(r))).sourceElement[t]=e)},addReadOnlyProperty:function(t){var e="object"===(0,u.default)(t);if(!e&&"string"!=typeof t)return console.error('ERROR <chassis-tag-bin> Read-only property must be type "object" or "string"');var n={set:function(){o.get(this).throw("readonly",{prop:e?t.name:t})}};e&&t.hasOwnProperty("get")?n.get=t.get:n.get=function(){return o.get(this)[t]},Object.defineProperty((0,s.default)((0,s.default)(r)),e?t.name:t,n)},addReadOnlyProperties:function(t){return t.forEach(function(t){return o.get((0,s.default)((0,s.default)(r))).addReadOnlyProperty(t)})},setReadOnlyPropertyValue:function(t){return o.get((0,s.default)((0,s.default)(r)))[prop]=t},addBooleanAttribute:function(e){Object.defineProperty((0,s.default)((0,s.default)(r)),e,{get:function(){return o.get(this).getBooleanAttributeValue(e)},set:function(t){o.get(this).setBooleanAttributeValue(e,t)}})},addBooleanAttributes:function(t){return t.forEach(function(t){return o.get((0,s.default)((0,s.default)(r))).addBooleanAttribute(t)})},getBooleanAttributeValue:function(t){return r.hasAttribute(t)&&"false"!==r.getAttribute(t)},setBooleanAttributeValue:function(t,e){if("boolean"==typeof e&&(e=e.toString()),!["true","false","",null].includes(e))return console.error("<".concat(r.localName,'> "').concat(t,'" attribute expected boolean but received "').concat(e,'"')),r.removeAttribute(t),void(o.get((0,s.default)((0,s.default)(r))).sourceElement&&(o.get((0,s.default)((0,s.default)(r))).sourceElement[t]=!1));switch(e){case"false":case null:r.removeAttribute(t),o.get((0,s.default)((0,s.default)(r))).sourceElement&&(o.get((0,s.default)((0,s.default)(r))).sourceElement[t]=!1);break;case"true":case"":r.setAttribute(t,""),o.get((0,s.default)((0,s.default)(r))).sourceElement&&(o.get((0,s.default)((0,s.default)(r))).sourceElement[t]=!0);break;default:return}},addPrivateProperties:function(t){for(var e in t)o.get((0,s.default)((0,s.default)(r)))[e]=t[e]},generateGuid:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^r.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)});return t?"".concat(t,"_").concat(e):e},throw:function(t,e){var n="ERROR <chassis-tag-bin> ";switch(t){case"readonly":n+='Cannot set read-only property "'.concat(e.prop,'".');break;default:n=n.trim()}console.error(n)}}),r}return(0,l.default)(n,t),(0,i.default)(n,[{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"connectedCallback",value:function(){}}],[{key:"observedAttributes",get:function(){return[]}}]),n}((0,d.default)(HTMLElement))))},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,n){var r=n(1),o=n(2);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(e,t,n){var r=n(3),o=n(0),u=n(11),a=n(12);function i(t){var n="function"==typeof Map?new Map:void 0;return e.exports=i=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},i(t)}e.exports=i},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(r,t,e){var u=e(0);function o(t,e,n){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?r.exports=o=function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}:r.exports=o=Reflect.construct,o.apply(null,arguments)}r.exports=o}]);