!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(n,e){function o(e,t){return n.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}n.exports=o},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";var r,o=n(4),u=o(n(5)),i=o(n(6)),a=o(n(7)),l=o(n(0)),c=o(n(9)),f=o(n(11)),s=o(n(2)),d=o(n(12));customElements.define("chassis-option",(r=new WeakMap,function(e){function o(){var n;(0,u.default)(this,o),(n=(0,a.default)(this,(0,l.default)(o).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",n.attachShadow({mode:"open"});var e=document.createElement("div");e.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-option{contain:content;display:flex;flex-direction:column;max-width:100%}:host :after,:host :before,chassis-option *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoption"></slot><slot></slot><slot name="afteroption"></slot><slot name="beforeend"></slot></template>');var t=e.querySelector("template");"content"in t?n.shadowRoot.appendChild(t.content.cloneNode(!0)):t.childNodes.forEach(function(e){n.shadowRoot.appendChild(e.cloneNode(!0))}),t=null,n.crypto=null;try{n.crypto=crypto}catch(e){n.crypto=msCrypto}return r.set((0,s.default)((0,s.default)(n)),{addPrivateProps:function(e){for(var t in e)r.get((0,s.default)((0,s.default)(n)))[t]=e[t]},addReadOnlyProp:function(e){Object.defineProperty((0,s.default)((0,s.default)(n)),e,r.get((0,s.default)((0,s.default)(n))).readonlyProperty(e))},addReadOnlyProps:function(e){e.forEach(function(e){return r.get((0,s.default)((0,s.default)(n))).addReadOnlyProp(e)})},generateGuid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^n.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e?"".concat(e,"_").concat(t):t},getBooleanPropertyValue:function(e){return n.hasAttribute(e)&&"false"!==n.getAttribute(e)},handleAttributeChange:function(e,t){r.get((0,s.default)((0,s.default)(n))).sourceEl&&(n.setAttribute(e,t),r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=t)},handleBooleanAttributeChange:function(e,t){if(r.get((0,s.default)((0,s.default)(n))).sourceEl)return["true","false","",null].includes(t)?"false"===t&&n.hasAttribute(e)?(n.removeAttribute(e),void(r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=!1)):void(r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=n.hasAttribute(e)):(console.error("<".concat(n.localName,'> "').concat(e,'" attribute expected boolean but received "').concat(t,'"')),n.removeAttribute(e),void(r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=!1))},handleBooleanPropertyChange:function(e,t){if(!t)return n.removeAttribute(e),void(r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=!1);n.hasAttribute(e)&&"true"===n.getAttribute(e)||(n.setAttribute(e,""),r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=!0)},handlePropertyChange:function(e,t){r.get((0,s.default)((0,s.default)(n))).sourceEl[e]=t,n.hasAttribute(e)&&n.getAttribute(e)===t||n.setAttribute(e,t)},readonlyProperty:function(e){return{get:function(){return r.get((0,s.default)((0,s.default)(n))).sourceEl[e]},set:function(){return r.get((0,s.default)((0,s.default)(n))).throw("readonly",{name:e})}}},throw:function(e,t){var n="ERROR <chassis-option> ";switch(e){case"readonly":n+='Cannot set read-only property "'.concat(t.name,'".');break;default:n=n.trim()}console.error(n)}}),n.parent=null,n.defaultSelected=!1,n.addEventListener("mouseover",function(e){if(n.parent.mousedown)return console.log("select me");n.parent.hoverOption(n.index)}),n.addEventListener("mousemove",function(e){return n.parent.hoverOption(n.index)}),n.addEventListener("mouseout",function(e){return n.parent.unHoverOption(n.index)}),n}return(0,f.default)(o,e),(0,i.default)(o,[{key:"attributeChangedCallback",value:function(e,t,n){if(e=e.toLowerCase(),n!==t)switch(e){case"disabled":case"selected":case"hovered":return r.get(this).handleBooleanAttributeChange(e,n);case"label":case"value":return r.get(this).handleAttributeChange(e,n);default:return}}},{key:"connectedCallback",value:function(){}},{key:"remove",value:function(){!(0<arguments.length&&void 0!==arguments[0])||arguments[0],this.parent.options.splice(this.index,1),(0,c.default)((0,l.default)(o.prototype),"remove",this).call(this)}},{key:"disabled",get:function(){return r.get(this).getBooleanPropertyValue("disabled")},set:function(e){r.get(this).handleBooleanPropertyChange("disabled",e)}},{key:"form",set:function(e){return r.get(this).throw("readonly",{name:"form"})}},{key:"id",get:function(){return this.getAttribute("id")},set:function(e){r.get(this).handlePropertyChange("id",e)}},{key:"index",get:function(){var t=this;return this.parent.options.findIndex(function(e){return e.displayElement===t})},set:function(e){return r.get(this).throw("readonly",{name:"index"})}},{key:"label",get:function(){return this.getAttribute("label")},set:function(e){r.get(this).handlePropertyChange("label",e)}},{key:"selected",get:function(){return r.get(this).getBooleanPropertyValue("selected")},set:function(e){r.get(this).handleBooleanPropertyChange("selected",e)}},{key:"text",get:function(){return this.innerHTML},set:function(e){this.innerHTML=e}},{key:"value",get:function(){return this.getAttribute("value")},set:function(e){r.get(this).handlePropertyChange("value",e)}},{key:"hovered",get:function(){return this.hasAttribute("hover")},set:function(e){e?this.setAttribute("hover",""):this.removeAttribute("hover")}}],[{key:"observedAttributes",get:function(){return["disabled","hovered","label","selected","value"]}}]),o}((0,d.default)(HTMLElement))))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,n){var o=n(8),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(e){return n(e)}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(e)}t.exports=o},function(o,e,t){t(0);var u=t(10);function r(e,t,n){return"undefined"!=typeof Reflect&&Reflect.get?o.exports=r=Reflect.get:o.exports=r=function(e,t,n){var o=u(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},r(e,t,n||e)}o.exports=r},function(e,t,n){var o=n(0);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}},function(e,t,n){var o=n(1);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(t,e,n){var o=n(0),r=n(1),u=n(13),i=n(14);function a(e){var n="function"==typeof Map?new Map:void 0;return t.exports=a=function(e){if(null===e||!u(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return i(e,arguments,o(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},a(e)}t.exports=a},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(o,e,t){var u=t(1);function r(e,t,n){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?o.exports=r=function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&u(r,n.prototype),r}:o.exports=r=Reflect.construct,r.apply(null,arguments)}o.exports=r}]);