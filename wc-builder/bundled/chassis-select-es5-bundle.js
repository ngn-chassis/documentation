!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";var o=n(4),r=o(n(5)),i=o(n(6)),l=o(n(7)),u=o(n(0)),s=o(n(9)),a=o(n(11)),c=o(n(2)),d=o(n(12));customElements.define("chassis-select",function(){var e=new WeakMap;return function(t){function n(){var t;(0,r.default)(this,n),(t=(0,l.default)(this,(0,u.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",t.attachShadow({mode:"open"});var o=document.createElement("div");o.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-select{display:inline-block;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeselectedoptions"></slot><slot name="selectedoptions"></slot><slot name="afterselectedoptions"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');var i=o.querySelector("template");"content"in i?t.shadowRoot.appendChild(i.content.cloneNode(!0)):i.childNodes.forEach(function(e){t.shadowRoot.appendChild(e.cloneNode(!0))}),i=null,t.crypto=null;try{t.crypto=crypto}catch(e){t.crypto=msCrypto}return e.set((0,c.default)((0,c.default)(t)),{addPrivateProps:function(n){for(var o in n)e.get((0,c.default)((0,c.default)(t)))[o]=n[o]},addReadOnlyProp:function(n){Object.defineProperty((0,c.default)((0,c.default)(t)),n,e.get((0,c.default)((0,c.default)(t))).readonlyProperty(n))},addReadOnlyProps:function(n){n.forEach(function(n){return e.get((0,c.default)((0,c.default)(t))).addReadOnlyProp(n)})},generateGuid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^t.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e?"".concat(e,"_").concat(n):n},getBooleanPropertyValue:function(e){return t.hasAttribute(e)&&"false"!==t.getAttribute(e)},handleAttributeChange:function(n,o){e.get((0,c.default)((0,c.default)(t))).sourceEl&&(t.setAttribute(n,o),e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=o)},handleBooleanAttributeChange:function(n,o){if(e.get((0,c.default)((0,c.default)(t))).sourceEl){return["true","false","",null].includes(o)?"false"===o&&t.hasAttribute(n)?(t.removeAttribute(n),void(e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=!1)):void(e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=t.hasAttribute(n)):(console.error("<".concat(t.localName,'> "').concat(n,'" attribute expected boolean but received "').concat(o,'"')),t.removeAttribute(n),void(e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=!1))}},handleBooleanPropertyChange:function(n,o){if(!o)return t.removeAttribute(n),void(e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=!1);t.hasAttribute(n)&&"true"===t.getAttribute(n)||(t.setAttribute(n,""),e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=!0)},handlePropertyChange:function(n,o){e.get((0,c.default)((0,c.default)(t))).sourceEl[n]=o,t.hasAttribute(n)&&t.getAttribute(n)===o||t.setAttribute(n,o)},readonlyProperty:function(n){return{get:function(){return e.get((0,c.default)((0,c.default)(t))).sourceEl[n]},set:function(){return e.get((0,c.default)((0,c.default)(t))).throw("readonly",{name:n})}}},throw:function(e,t){var n="ERROR <chassis-select> ";switch(e){case"readonly":n+='Cannot set read-only property "'.concat(t.name,'".');break;default:n=n.trim()}console.error(n)}}),t.addEventListener("click",function(e){console.log("chassis-select")}),e.get((0,c.default)((0,c.default)(t))).addReadOnlyProps(["form","labels","willValidate","type","validationMessage","validity"]),e.get((0,c.default)((0,c.default)(t))).addPrivateProps({placeholder:"",title:"",arrowKeydownHandler:function(e){switch(e[t.keySource]){case 38:case"ArrowUp":if(e.preventDefault(),!t.isOpen)return t.open();console.log("select previous option");break;case 40:case"ArrowDown":if(e.preventDefault(),!t.isOpen)return t.open();console.log(t.options);break;default:return}},bodyClickHandler:function(e){e.target===(0,c.default)((0,c.default)(t))||t.contains(e.target)||t.removeAttribute("open")}}),t}return(0,a.default)(n,t),(0,i.default)(n,[{key:"add",value:function(t,n){e.get(this).optionsEl.add(t,n)}},{key:"attributeChangedCallback",value:function(t,n,o){if(t=t.toLowerCase(),o!==n)switch(t){case"autofocus":case"disabled":return e.get(this).handleBooleanAttributeChange(t,o);case"multiple":if(e.get(this).handleBooleanAttributeChange(t,o),!o&&this.selectedOptions){var r=this.selectedIndex;this.deselectAll(),this.select(r)}break;case"name":return e.get(this).handleAttributeChange(t,o);case"open":if(this.multiple)return;return this.isOpen?this.open():this.close()}}},{key:"checkValidity",value:function(){return e.get(this).sourceEl.checkValidity()}},{key:"clear",value:function(){e.get(this).optionsEl.clear()}},{key:"close",value:function(){this.multiple||(document.body.removeEventListener("click",e.get(this).bodyClickHandler),document.body.removeEventListener("touchcancel",e.get(this).bodyClickHandler),document.body.removeEventListener("touchend",e.get(this).bodyClickHandler),this.isOpen&&(this.isOpen=!1))}},{key:"connectedCallback",value:function(){var t=this;this.addEventListener("click",function(e){t.multiple||(t.hasAttribute("open")?t.removeAttribute("open"):t.setAttribute("open",""))}),this.addEventListener("focus",function(n){t.addEventListener("keydown",e.get(t).arrowKeydownHandler)}),this.addEventListener("blur",function(n){t.removeEventListener("keydown",e.get(t).arrowKeydownHandler)}),setTimeout(function(){t.hasAttribute("tabindex")||t.setAttribute("tabindex",0),t.autofocus&&t.focus()},0)}},{key:"deselectAll",value:function(){e.get(this).optionsEl.deselectAll()}},{key:"inject",value:function(t){var n=this;e.get(this).sourceEl=t,e.get(this).optionsEl=document.createElement("chassis-options"),e.get(this).optionsEl.parent=this,e.get(this).optionsEl.dispatchChangeEvent=function(){n.dispatchEvent(new Event("change",{bubbles:!0}))},this.selectedOptionsEl=document.createElement("chassis-selected-options"),this.selectedOptionsEl.parent=this,this.selectedOptionsEl.slot="selectedoptions",this.appendChild(this.selectedOptionsEl),e.get(this).optionsEl.slot="options",this.appendChild(e.get(this).optionsEl),e.get(this).placeholder=this.getAttribute("placeholder"),t.children.length>0?(e.get(this).optionsEl.addChildren(t.children),this.select(this.selectedIndex)):this.deselectAll()}},{key:"item",value:function(t){return e.get(this).optionsEl.item(t)}},{key:"namedItem",value:function(t){return e.get(this).optionsEl.namedItem(t)}},{key:"open",value:function(){this.multiple||(document.body.addEventListener("click",e.get(this).bodyClickHandler),document.body.addEventListener("touchcancel",e.get(this).bodyClickHandler),document.body.addEventListener("touchend",e.get(this).bodyClickHandler),this.isOpen||(this.isOpen=!0))}},{key:"querySelector",value:function(e){return":checked"!==e?(0,s.default)((0,u.default)(n.prototype),"querySelector",this).call(this,e):this.selectedOptions.length>0?this.selectedOptions[0]:null}},{key:"querySelectorAll",value:function(t){return":checked"!==t?(0,s.default)((0,u.default)(n.prototype),"querySelectorAll",this).call(this,t):e.get(this).optionsEl.querySelectorAll("[selected]")}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t)return(0,s.default)((0,u.default)(n.prototype),"remove",this).call(this);e.get(this).optionsEl.removeOptionByIndex(t)}},{key:"select",value:function(t){e.get(this).optionsEl.select(t)}},{key:"setCustomValidity",value:function(t){e.get(this).sourceEl.setCustomValidity(t)}},{key:"autofocus",get:function(){return e.get(this).getBooleanPropertyValue("autofocus")},set:function(t){e.get(this).handleBooleanPropertyChange("autofocus",t)}},{key:"disabled",get:function(){return e.get(this).getBooleanPropertyValue("disabled")},set:function(t){e.get(this).handleBooleanPropertyChange("disabled",t)}},{key:"isOpen",get:function(){return this.multiple?null:this.hasAttribute("open")},set:function(e){this.multiple||(e?this.setAttribute("open",""):this.removeAttribute("open"))}},{key:"length",get:function(){return e.get(this).sourceEl.length}},{key:"multiple",get:function(){return e.get(this).getBooleanPropertyValue("multiple")},set:function(t){t&&this.hasAttribute("open")&&this.removeAttribute("open"),e.get(this).handleBooleanPropertyChange("multiple",t)}},{key:"name",get:function(){return e.get(this).sourceEl.name},set:function(t){e.get(this).handlePropertyChange("name",t)}},{key:"options",get:function(){return e.get(this).optionsEl.displayOptions},set:function(t){return e.get(this).throw("readonly",{name:"options"})}},{key:"placeholder",get:function(){return e.get(this).placeholder},set:function(t){e.get(this).placeholder=t}},{key:"required",get:function(){return e.get(this).getBooleanPropertyValue("required")},set:function(t){e.get(this).handleBooleanPropertyChange("required",t)}},{key:"selectedIndex",get:function(){return e.get(this).optionsEl.selectedIndex},set:function(t){if(t<0)return this.deselectAll();e.get(this).optionsEl.selectedIndex=t}},{key:"selectedOptions",get:function(){return e.get(this).optionsEl?e.get(this).optionsEl.selectedOptions:null},set:function(t){return e.get(this).throw("readonly",{name:"selectedOptions"})}},{key:"sourceElement",get:function(){return e.get(this).sourceEl}},{key:"value",get:function(){return e.get(this).sourceEl.value}}],[{key:"observedAttributes",get:function(){return["autofocus","disabled","multiple","name","open","tabindex"]}}]),n}((0,d.default)(HTMLElement))}())},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(8),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},function(e,t,n){n(0);var o=n(10);function r(t,n,i){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=r=Reflect.get:e.exports=r=function(e,t,n){var r=o(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},r(t,n,i||t)}e.exports=r},function(e,t,n){var o=n(0);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}},function(e,t,n){var o=n(1);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(0),r=n(1),i=n(13),l=n(14);function u(t){var n="function"==typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return l(e,arguments,o(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},u(t)}e.exports=u},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,t,n){var o=n(1);function r(t,n,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r}]);
//# sourceMappingURL=chassis-select-es5-bundle.js.map