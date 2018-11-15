!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(n,t){function o(t,e){return n.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}n.exports=o},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(t){return n(t)}:e.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(t)}e.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){"use strict";var r,o=n(5),u=o(n(1)),a=o(n(6)),i=o(n(7)),c=o(n(8)),l=o(n(3)),f=o(n(9)),s=o(n(2)),p=o(n(10));customElements.define("chassis-optgroup",(r=new WeakMap,function(t){function n(){var o;(0,a.default)(this,n),(o=(0,c.default)(this,(0,l.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",o.attachShadow({mode:"open"});var t=document.createElement("div");t.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-optgroup{contain:content;display:flex;flex-direction:column;max-width:100%}:host :after,:host :before,chassis-optgroup *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptgroup"></slot><slot></slot><slot name="afteroptgroup"></slot><slot name="beforeend"></slot></template>');var e=t.querySelector("template");"content"in e?o.shadowRoot.appendChild(e.content.cloneNode(!0)):e.childNodes.forEach(function(t){o.shadowRoot.appendChild(t.cloneNode(!0))}),e=null,o.crypto=null;try{o.crypto=crypto}catch(t){o.crypto=msCrypto}return r.set((0,s.default)((0,s.default)(o)),{sourceElement:null,addAttribute:function(e){Object.defineProperty((0,s.default)((0,s.default)(o)),e,{get:function(){return this.getAttribute(e)},set:function(t){r.get(this).setAttributeValue(e,t)}})},addAttributes:function(t){return t.forEach(function(t){return r.get((0,s.default)((0,s.default)(o))).addAttribute(t)})},setAttributeValue:function(t,e){o.setAttribute(t,e),r.get((0,s.default)((0,s.default)(o))).sourceElement&&(r.get((0,s.default)((0,s.default)(o))).sourceElement[t]=e)},addReadOnlyProperty:function(t){var e="object"===(0,u.default)(t);if(!e&&"string"!=typeof t)return console.error('ERROR <chassis-optgroup> Read-only property must be type "object" or "string"');var n={set:function(){r.get(this).throw("readonly",{prop:e?t.name:t})}};e&&t.hasOwnProperty("get")?n.get=t.get:n.get=function(){return r.get(this)[t]},Object.defineProperty((0,s.default)((0,s.default)(o)),e?t.name:t,n)},addReadOnlyProperties:function(t){return t.forEach(function(t){return r.get((0,s.default)((0,s.default)(o))).addReadOnlyProperty(t)})},setReadOnlyPropertyValue:function(t){return r.get((0,s.default)((0,s.default)(o)))[prop]=t},addBooleanAttribute:function(e){Object.defineProperty((0,s.default)((0,s.default)(o)),e,{get:function(){return r.get(this).getBooleanAttributeValue(e)},set:function(t){r.get(this).setBooleanAttributeValue(e,t)}})},addBooleanAttributes:function(t){return t.forEach(function(t){return r.get((0,s.default)((0,s.default)(o))).addBooleanAttribute(t)})},getBooleanAttributeValue:function(t){return o.hasAttribute(t)&&"false"!==o.getAttribute(t)},setBooleanAttributeValue:function(t,e){if("boolean"==typeof e&&(e=e.toString()),!["true","false","",null].includes(e))return console.error("<".concat(o.localName,'> "').concat(t,'" attribute expected boolean but received "').concat(e,'"')),o.removeAttribute(t),void(r.get((0,s.default)((0,s.default)(o))).sourceElement&&(r.get((0,s.default)((0,s.default)(o))).sourceElement[t]=!1));switch(e){case"false":case null:o.removeAttribute(t),r.get((0,s.default)((0,s.default)(o))).sourceElement&&(r.get((0,s.default)((0,s.default)(o))).sourceElement[t]=!1);break;case"true":case"":o.setAttribute(t,""),r.get((0,s.default)((0,s.default)(o))).sourceElement&&(r.get((0,s.default)((0,s.default)(o))).sourceElement[t]=!0);break;default:return}},addPrivateProperties:function(t){for(var e in t)r.get((0,s.default)((0,s.default)(o)))[e]=t[e]},generateGuid:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^o.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)});return t?"".concat(t,"_").concat(e):e},emit:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(n)return n.dispatchEvent(r.get((0,s.default)((0,s.default)(o))).newEvent(t,e));o.dispatchEvent(r.get((0,s.default)((0,s.default)(o))).newEvent(t,e))},newEvent:function(t,e){return new CustomEvent(t,{detail:e})},throw:function(t,e){var n="ERROR <chassis-optgroup> ";switch(t){case"readonly":n+='Cannot set read-only property "'.concat(e.prop,'".');break;default:n=n.trim()}console.error(n)}}),o}return(0,f.default)(n,t),(0,i.default)(n,[{key:"connectedCallback",value:function(){}}]),n}((0,p.default)(HTMLElement))))},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,n){var o=n(1),r=n(2);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o=n(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(e,t,n){var o=n(3),r=n(0),u=n(11),a=n(12);function i(t){var n="function"==typeof Map?new Map:void 0;return e.exports=i=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},i(t)}e.exports=i},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(o,t,e){var u=e(0);function r(t,e,n){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?o.exports=r=function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}:o.exports=r=Reflect.construct,r.apply(null,arguments)}o.exports=r}]);