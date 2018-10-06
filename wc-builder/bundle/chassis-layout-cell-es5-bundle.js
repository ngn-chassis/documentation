!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e,o){"use strict";var n=o(4),r=n(o(5)),u=n(o(6)),i=n(o(7)),l=n(o(2)),a=n(o(9)),c=n(o(1)),f=n(o(10));customElements.define("chassis-layout-cell",function(){var t=new WeakMap;return function(e){function o(){var e;(0,r.default)(this,o),(e=(0,i.default)(this,(0,l.default)(o).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",e.attachShadow({mode:"open"});var n=document.createElement("div");n.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 auto}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host :after,:host :before,chassis-layout-cell *{box-sizing:border-box}chassis-layout-cell[stretch]{flex:1 1 auto}chassis-layout-cell[orientation=horizontal]{flex-direction:row}chassis-layout-cell[orientation=vertical]{flex-direction:column}</style><slot></slot></template>');var u=n.querySelector("template");"content"in u?e.shadowRoot.appendChild(u.content.cloneNode(!0)):u.childNodes.forEach(function(t){e.shadowRoot.appendChild(t.cloneNode(!0))}),u=null,e.crypto=null;try{e.crypto=crypto}catch(t){e.crypto=msCrypto}return t.set((0,c.default)((0,c.default)(e)),{addPrivateProps:function(o){for(var n in o)t.get((0,c.default)((0,c.default)(e)))[n]=o[n]},addReadOnlyProp:function(o){Object.defineProperty((0,c.default)((0,c.default)(e)),o,t.get((0,c.default)((0,c.default)(e))).readonlyProperty(o))},addReadOnlyProps:function(o){o.forEach(function(o){return t.get((0,c.default)((0,c.default)(e))).addReadOnlyProp(o)})},generateGuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^e.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)});return t?"".concat(t,"_").concat(o):o},getBooleanPropertyValue:function(t){return e.hasAttribute(t)&&"false"!==e.getAttribute(t)},handleAttributeChange:function(o,n){t.get((0,c.default)((0,c.default)(e))).sourceEl&&(e.setAttribute(o,n),t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=n)},handleBooleanAttributeChange:function(o,n){if(t.get((0,c.default)((0,c.default)(e))).sourceEl){return["true","false","",null].includes(n)?"false"===n&&e.hasAttribute(o)?(e.removeAttribute(o),void(t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=!1)):void(t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=e.hasAttribute(o)):(console.error("<".concat(e.localName,'> "').concat(o,'" attribute expected boolean but received "').concat(n,'"')),e.removeAttribute(o),void(t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=!1))}},handleBooleanPropertyChange:function(o,n){if(!n)return e.removeAttribute(o),void(t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=!1);e.hasAttribute(o)&&"true"===e.getAttribute(o)||(e.setAttribute(o,""),t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=!0)},handlePropertyChange:function(o,n){t.get((0,c.default)((0,c.default)(e))).sourceEl[o]=n,e.hasAttribute(o)&&e.getAttribute(o)===n||e.setAttribute(o,n)},readonlyProperty:function(o){return{get:function(){return t.get((0,c.default)((0,c.default)(e))).sourceEl[o]},set:function(){return t.get((0,c.default)((0,c.default)(e))).throw("readonly",{name:o})}}},throw:function(t,e){var o="ERROR <chassis-layout-cell> ";switch(t){case"readonly":o+='Cannot set read-only property "'.concat(e.name,'".');break;default:o=o.trim()}console.error(o)}}),t.set((0,c.default)((0,c.default)(e)),{children:[],styleSheet:null,sizeRule:null,size:null}),e}return(0,a.default)(o,e),(0,u.default)(o,[{key:"connectedCallback",value:function(){var e=this;setTimeout(function(){t.get(e).styleSheet=e.shadowRoot.styleSheets[0];var o=t.get(e).styleSheet.cssRules.length;t.get(e).styleSheet.insertRule(":host([size]) {}",o),t.get(e).sizeRule=t.get(e).styleSheet.cssRules[o],e.hasAttribute("size")&&(e.size=e.getAttribute("size"))},0)}},{key:"attributeChangedCallback",value:function(e,o,n){if(e=e.toLowerCase(),n!==o)switch(e){case"size":t.get(this).size!==n&&(this.size=n);break;default:return}}},{key:"size",get:function(){return this.hasAttribute("size")?this.getAttribute("size"):"auto"},set:function(e){t.get(this).sizeRule&&(t.get(this).size=e,t.get(this).sizeRule.style.setProperty("flex-basis",e),this.setAttribute("size",e))}}],[{key:"observedAttributes",get:function(){return["size"]}}]),o}((0,f.default)(HTMLElement))}())},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(8),r=o(1);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e}},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?t.exports=n=function(t){return o(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},n(e)}t.exports=n},function(t,e,o){var n=o(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,o){var n=o(2),r=o(0),u=o(11),i=o(12);function l(e){var o="function"==typeof Map?new Map:void 0;return t.exports=l=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return i(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},l(e)}t.exports=l},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,o){var n=o(0);function r(e,o,u){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=r=function(t,e,o){var r=[null];r.push.apply(r,e);var u=new(Function.bind.apply(t,r));return o&&n(u,o.prototype),u}:t.exports=r=Reflect.construct,r.apply(null,arguments)}t.exports=r}]);
//# sourceMappingURL=chassis-layout-cell-es5-bundle.js.map