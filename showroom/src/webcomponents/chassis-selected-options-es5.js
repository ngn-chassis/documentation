!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(n,t){function o(t,e){return n.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}n.exports=o},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(t){return n(t)}:e.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(t)}e.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){"use strict";var u,o=n(5),i=o(n(1)),a=o(n(6)),r=o(n(7)),l=o(n(8)),c=o(n(3)),s=o(n(9)),f=o(n(2)),d=o(n(10));customElements.define("chassis-selected-options",(u=new WeakMap,function(t){function n(){var r;(0,a.default)(this,n),(r=(0,l.default)(this,(0,c.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",r.attachShadow({mode:"open"});var t=document.createElement("div");t.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-selected-options{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-selected-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforecontents"></slot><div class="contents"><slot id="contents"></slot></div><slot name="aftercontents"></slot><div class="beforeend"><slot name="beforeend"></slot></div></template>');var e=t.querySelector("template");"content"in e?r.shadowRoot.appendChild(e.content.cloneNode(!0)):e.childNodes.forEach(function(t){r.shadowRoot.appendChild(t.cloneNode(!0))}),e=null,r.crypto=null;try{r.crypto=crypto}catch(t){r.crypto=msCrypto}return u.set((0,f.default)((0,f.default)(r)),{sourceElement:null,addAttribute:function(e){Object.defineProperty((0,f.default)((0,f.default)(r)),e,{get:function(){return this.getAttribute(e)},set:function(t){u.get(this).setAttributeValue(e,t)}})},addAttributes:function(t){return t.forEach(function(t){return u.get((0,f.default)((0,f.default)(r))).addAttribute(t)})},setAttributeValue:function(t,e){r.setAttribute(t,e),u.get((0,f.default)((0,f.default)(r))).sourceElement&&(u.get((0,f.default)((0,f.default)(r))).sourceElement[t]=e)},addReadOnlyProperty:function(t){var e="object"===(0,i.default)(t);if(!e&&"string"!=typeof t)return console.error('ERROR <chassis-selected-options> Read-only property must be type "object" or "string"');var n={set:function(){u.get(this).throw("readonly",{prop:e?t.name:t})}};e&&t.hasOwnProperty("get")?n.get=t.get:n.get=function(){return u.get(this)[t]},Object.defineProperty((0,f.default)((0,f.default)(r)),e?t.name:t,n)},addReadOnlyProperties:function(t){return t.forEach(function(t){return u.get((0,f.default)((0,f.default)(r))).addReadOnlyProperty(t)})},setReadOnlyPropertyValue:function(t){return u.get((0,f.default)((0,f.default)(r)))[prop]=t},addBooleanAttribute:function(e){Object.defineProperty((0,f.default)((0,f.default)(r)),e,{get:function(){return u.get(this).getBooleanAttributeValue(e)},set:function(t){u.get(this).setBooleanAttributeValue(e,t)}})},addBooleanAttributes:function(t){return t.forEach(function(t){return u.get((0,f.default)((0,f.default)(r))).addBooleanAttribute(t)})},getBooleanAttributeValue:function(t){return r.hasAttribute(t)&&"false"!==r.getAttribute(t)},setBooleanAttributeValue:function(t,e){if("boolean"==typeof e&&(e=e.toString()),!["true","false","",null].includes(e))return console.error("<".concat(r.localName,'> "').concat(t,'" attribute expected boolean but received "').concat(e,'"')),r.removeAttribute(t),void(u.get((0,f.default)((0,f.default)(r))).sourceElement&&(u.get((0,f.default)((0,f.default)(r))).sourceElement[t]=!1));switch(e){case"false":case null:r.removeAttribute(t),u.get((0,f.default)((0,f.default)(r))).sourceElement&&(u.get((0,f.default)((0,f.default)(r))).sourceElement[t]=!1);break;case"true":case"":r.setAttribute(t,""),u.get((0,f.default)((0,f.default)(r))).sourceElement&&(u.get((0,f.default)((0,f.default)(r))).sourceElement[t]=!0);break;default:return}},addPrivateProperties:function(t){for(var e in t)u.get((0,f.default)((0,f.default)(r)))[e]=t[e]},generateGuid:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^r.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)});return t?"".concat(t,"_").concat(e):e},emit:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(n)return n.dispatchEvent(u.get((0,f.default)((0,f.default)(r))).newEvent(t,e));r.dispatchEvent(u.get((0,f.default)((0,f.default)(r))).newEvent(t,e))},newEvent:function(t,e){return new CustomEvent(t,{detail:e})},throw:function(t,e){var n="ERROR <chassis-selected-options> ";switch(t){case"readonly":n+='Cannot set read-only property "'.concat(e.prop,'".');break;default:n=n.trim()}console.error(n)}}),u.get((0,f.default)((0,f.default)(r))).addPrivateProperties({contentsEl:r.shadowRoot.querySelector("#contents"),options:[],appendCaret:function(){var t="http://www.w3.org/2000/svg",e=document.createElementNS(t,"svg");e.slot="beforeend",e.setAttributeNS(null,"width",24),e.setAttributeNS(null,"height",24),e.setAttributeNS(null,"viewBox","0 0 ".concat(24," ").concat(24)),e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","currentColor"),e.setAttributeNS(null,"stroke-width","3"),e.setAttributeNS(null,"stroke-linecap","square"),e.setAttributeNS(null,"stroke-linejoin","miter");var n=document.createElementNS(t,"polyline");n.setAttributeNS(null,"points","6 9 12 15 18 9"),e.appendChild(n),r.appendChild(e)},optionSelectionHandler:function(n){n.stopPropagation(),r.clear(0===n.detail.length),n.detail.forEach(function(t,e){return r.add(t,e===n.detail.length-1)})},parentStateChangeHandler:function(t){var e=t.detail,n=e.name,o=e.value;switch(n){case"multiple":return o?r.removeEventListener("mousedown",u.get((0,f.default)((0,f.default)(r))).mousedownHandler):r.addEventListener("mousedown",u.get((0,f.default)((0,f.default)(r))).mousedownHandler);default:return}},mousedownHandler:function(t){return u.get((0,f.default)((0,f.default)(r))).emit("toggle",null,r.parentNode)}}),r}return(0,s.default)(n,t),(0,r.default)(n,[{key:"add",value:function(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];u.get(this).options.push(t),e&&this.update()}},{key:"remove",value:function(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];u.get(this).options.splice(u.get(this).options.indexOf(t),1),e&&this.update()}},{key:"clear",value:function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];u.get(this).options=[],t&&this.update()}},{key:"connectedCallback",value:function(){u.get(this).appendCaret(),this.update(),this.addEventListener("mousedown",u.get(this).mousedownHandler),this.addEventListener("options.selected",u.get(this).optionSelectionHandler),this.parentNode.addEventListener("state.change",u.get(this).parentStateChangeHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("mousedown",u.get(this).mousedownHandler),this.addEventListener("options.selected",u.get(this).optionSelectionHandler),this.parentNode.removeEventListener("state.change",u.get(this).parentStateChangeHandler)}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u.get(this).options;t!==u.get(this).options&&(u.get(this).options=t),u.get(this).contentsEl.innerHTML=0<t.length?this.list:this.parentNode.placeholder||""}},{key:"list",get:function(){return u.get(this).options.map(function(t){return t.displayElement.text}).join(", ")}}]),n}((0,d.default)(HTMLElement))))},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,n){var o=n(1),r=n(2);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o=n(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(e,t,n){var o=n(3),r=n(0),u=n(11),i=n(12);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},a(t)}e.exports=a},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(o,t,e){var u=e(0);function r(t,e,n){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?o.exports=r=function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}:o.exports=r=Reflect.construct,r.apply(null,arguments)}o.exports=r}]);