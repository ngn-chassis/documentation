!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){"use strict";var o=n(4),r=o(n(5)),u=o(n(6)),a=o(n(7)),l=o(n(2)),c=o(n(9)),i=o(n(1)),f=o(n(10));customElements.define("chassis-optgroup-label",function(){var t=new WeakMap;return function(e){function n(){var e;(0,r.default)(this,n),(e=(0,a.default)(this,(0,l.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",e.attachShadow({mode:"open"});var o=document.createElement("div");o.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-optgroup-label{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-optgroup-label *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforelabel"></slot><slot></slot><slot name="afterlabel"></slot><slot name="beforeend"></slot></template>');var u=o.querySelector("template");"content"in u?e.shadowRoot.appendChild(u.content.cloneNode(!0)):u.childNodes.forEach(function(t){e.shadowRoot.appendChild(t.cloneNode(!0))}),u=null,e.crypto=null;try{e.crypto=crypto}catch(t){e.crypto=msCrypto}return t.set((0,i.default)((0,i.default)(e)),{addPrivateProps:function(n){for(var o in n)t.get((0,i.default)((0,i.default)(e)))[o]=n[o]},addReadOnlyProp:function(n){Object.defineProperty((0,i.default)((0,i.default)(e)),n,t.get((0,i.default)((0,i.default)(e))).readonlyProperty(n))},addReadOnlyProps:function(n){n.forEach(function(n){return t.get((0,i.default)((0,i.default)(e))).addReadOnlyProp(n)})},generateGuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^e.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)});return t?"".concat(t,"_").concat(n):n},getBooleanPropertyValue:function(t){return e.hasAttribute(t)&&"false"!==e.getAttribute(t)},handleAttributeChange:function(n,o){t.get((0,i.default)((0,i.default)(e))).sourceEl&&(e.setAttribute(n,o),t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=o)},handleBooleanAttributeChange:function(n,o){if(t.get((0,i.default)((0,i.default)(e))).sourceEl){return["true","false","",null].includes(o)?"false"===o&&e.hasAttribute(n)?(e.removeAttribute(n),void(t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=!1)):void(t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=e.hasAttribute(n)):(console.error("<".concat(e.localName,'> "').concat(n,'" attribute expected boolean but received "').concat(o,'"')),e.removeAttribute(n),void(t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=!1))}},handleBooleanPropertyChange:function(n,o){if(!o)return e.removeAttribute(n),void(t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=!1);e.hasAttribute(n)&&"true"===e.getAttribute(n)||(e.setAttribute(n,""),t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=!0)},handlePropertyChange:function(n,o){t.get((0,i.default)((0,i.default)(e))).sourceEl[n]=o,e.hasAttribute(n)&&e.getAttribute(n)===o||e.setAttribute(n,o)},readonlyProperty:function(n){return{get:function(){return t.get((0,i.default)((0,i.default)(e))).sourceEl[n]},set:function(){return t.get((0,i.default)((0,i.default)(e))).throw("readonly",{name:n})}}},throw:function(t,e){var n="ERROR <chassis-optgroup-label> ";switch(t){case"readonly":n+='Cannot set read-only property "'.concat(e.name,'".');break;default:n=n.trim()}console.error(n)}}),e}return(0,c.default)(n,e),(0,u.default)(n,[{key:"connectedCallback",value:function(){}}]),n}((0,f.default)(HTMLElement))}())},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(8),r=n(1);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e,n){var o=n(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(2),r=n(0),u=n(11),a=n(12);function l(e){var n="function"==typeof Map?new Map:void 0;return t.exports=l=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},l(e)}t.exports=l},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(0);function r(e,n,u){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=r=function(t,e,n){var r=[null];r.push.apply(r,e);var u=new(Function.bind.apply(t,r));return n&&o(u,n.prototype),u}:t.exports=r=Reflect.construct,r.apply(null,arguments)}t.exports=r}]);
//# sourceMappingURL=chassis-optgroup-label-es5-bundle.js.map