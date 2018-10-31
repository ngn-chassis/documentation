!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){"use strict";var c,r=n(4),l=r(n(5)),o=r(n(6)),u=r(n(7)),a=r(n(2)),s=r(n(9)),i=r(n(1)),d=r(n(10));customElements.define("chassis-options",(c=new WeakMap,function(e){function r(){var n;(0,l.default)(this,r),(n=(0,u.default)(this,(0,a.default)(r).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",n.attachShadow({mode:"open"});var e=document.createElement("div");e.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');var t=e.querySelector("template");"content"in t?n.shadowRoot.appendChild(t.content.cloneNode(!0)):t.childNodes.forEach(function(e){n.shadowRoot.appendChild(e.cloneNode(!0))}),t=null,n.crypto=null;try{n.crypto=crypto}catch(e){n.crypto=msCrypto}return c.set((0,i.default)((0,i.default)(n)),{addPrivateProps:function(e){for(var t in e)c.get((0,i.default)((0,i.default)(n)))[t]=e[t]},addReadOnlyProp:function(e){Object.defineProperty((0,i.default)((0,i.default)(n)),e,c.get((0,i.default)((0,i.default)(n))).readonlyProperty(e))},addReadOnlyProps:function(e){e.forEach(function(e){return c.get((0,i.default)((0,i.default)(n))).addReadOnlyProp(e)})},generateGuid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^n.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e?"".concat(e,"_").concat(t):t},getBooleanPropertyValue:function(e){return n.hasAttribute(e)&&"false"!==n.getAttribute(e)},handleAttributeChange:function(e,t){c.get((0,i.default)((0,i.default)(n))).sourceEl&&(n.setAttribute(e,t),c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=t)},handleBooleanAttributeChange:function(e,t){if(c.get((0,i.default)((0,i.default)(n))).sourceEl)return["true","false","",null].includes(t)?"false"===t&&n.hasAttribute(e)?(n.removeAttribute(e),void(c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=!1)):void(c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=n.hasAttribute(e)):(console.error("<".concat(n.localName,'> "').concat(e,'" attribute expected boolean but received "').concat(t,'"')),n.removeAttribute(e),void(c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=!1))},handleBooleanPropertyChange:function(e,t){if(!t)return n.removeAttribute(e),void(c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=!1);n.hasAttribute(e)&&"true"===n.getAttribute(e)||(n.setAttribute(e,""),c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=!0)},handlePropertyChange:function(e,t){c.get((0,i.default)((0,i.default)(n))).sourceEl[e]=t,n.hasAttribute(e)&&n.getAttribute(e)===t||n.setAttribute(e,t)},readonlyProperty:function(e){return{get:function(){return c.get((0,i.default)((0,i.default)(n))).sourceEl[e]},set:function(){return c.get((0,i.default)((0,i.default)(n))).throw("readonly",{name:e})}}},throw:function(e,t){var n="ERROR <chassis-options> ";switch(e){case"readonly":n+='Cannot set read-only property "'.concat(t.name,'".');break;default:n=n.trim()}console.error(n)}}),n.parent=null,n.selectedOptionsEl=null,c.get((0,i.default)((0,i.default)(n))).options=[],c.get((0,i.default)((0,i.default)(n))).generateDisplayOptionElement=function(e){var t=document.createElement("chassis-option");return e.attributes.id&&(t.id=e.attributes.id),e.sourceElement.hasAttribute("label")&&t.setAttribute("label",e.sourceElement.getAttribute("label")),e.attributes.value&&t.setAttribute("value",e.attributes.value),e.attributes.disabled&&t.setAttribute("disabled",""),t.defaultSelected=e.attributes.selected,t.key=c.get((0,i.default)((0,i.default)(n))).generateGuid(),t.addEventListener("click",function(e){return n.selectByKey(t.key)}),t.innerHTML=e.sourceElement.innerHTML,t},c.get((0,i.default)((0,i.default)(n))).generateSourceOptionElement=function(e){var t=document.createElement("option");return e.hasOwnProperty("innerHTML")&&(t.innerHTML=e.innerHTML),e.hasOwnProperty("label")&&(t.innerHTML=e.label),e.hasOwnProperty("value")&&(t.value=e.value),e.hasOwnProperty("disabled")&&(t.disabled="boolean"==typeof e.disabled&&e.disabled),t},c.get((0,i.default)((0,i.default)(n))).ChassisHTMLCollection=function(){var r=new WeakMap;return function(){function t(e){var n=this;(0,l.default)(this,t),r.set(this,{arr:e}),e.forEach(function(e,t){return n[t]=e})}return(0,o.default)(t,[{key:"item",value:function(e){return r.get(this).arr[e]}},{key:"namedItem",value:function(t){var e=r.get(this).arr.filter(function(e){return e.id===t||e.name===t});return 0<e.length?e[0]:null}},{key:"length",get:function(){return r.get(this).arr.length}}]),t}()},c.get((0,i.default)((0,i.default)(n))).ChassisOptionsCollection=function(){return new WeakMap,function(e){function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,r=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0;return(0,l.default)(this,i),(t=(0,u.default)(this,(0,a.default)(i).call(this,e))).selectedIndex=n,t.add=r,t.remove=o,t}return(0,s.default)(i,e),i}(c.get((0,i.default)((0,i.default)(n))).ChassisHTMLCollection())},n}return(0,s.default)(r,e),(0,o.default)(r,[{key:"connectedCallback",value:function(){}},{key:"add",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;if(customElements.get("chassis-option")){e.hasOwnProperty("sourceElement")&&e.sourceElement instanceof HTMLElement||(e.sourceElement=c.get(this).generateSourceOptionElement(e)),e={attributes:{disabled:e.sourceElement.disabled,id:e.sourceElement.getAttribute("id"),label:e.sourceElement.getAttribute("label")||e.sourceElement.textContent.trim(),selected:e.sourceElement.hasAttribute("selected"),value:e.sourceElement.getAttribute("value")},sourceElement:e.sourceElement};var r=c.get(this).generateDisplayOptionElement(e);if(r.parent=n,e.displayElement=r,e.key=r.key,t)return n.insertBefore(r,n.children.item(t)),this.parent["".concat(t)]=e.displayElement,this.options.splice(t,0,e),this.parent.sourceElement.add(e.sourceElement,t),void(e.attributes.selected&&this.selectByIndex(t));n.appendChild(r),this.parent["".concat(this.options.length)]=e.displayElement,this.options.push(e),this.parent.sourceElement[this.options.length-1]||this.parent.sourceElement.appendChild(e.sourceElement),e.attributes.selected&&this.selectByKey(e.key)}else console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")}},{key:"addChildren",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value,u=l instanceof HTMLElement;switch(l.nodeName){case"OPTION":this.add(u?this.generateOptionObject(l):l);break;case"OPTGROUP":this.addOptgroup(u?this.generateOptgroup(l):l);break;default:console.warn("".concat(l.nodeName.toLowerCase()," is not a valid child element for <chassis-select>. Removing..."))}}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"addOptgroup",value:function(e){var t=document.createElement("chassis-optgroup-label");t.innerHTML=e.getAttribute("label"),this.appendChild(t),this.appendChild(e)}},{key:"clear",value:function(){for(;this.lastChild;)this.removeChild(this.lastChild)}},{key:"deselectAll",value:function(){this.parent.sourceElement.selectedIndex=-1,this.selectedOptionsEl.contents=this.parent.placeholder,this.selectedOptionsEl.setAttribute("placeholder",""),this.options.forEach(function(e){e.displayElement.removeAttribute("selected"),e.sourceElement.selected=!1})}},{key:"generateOptgroup",value:function(e){if(customElements.get("chassis-optgroup")){var t=document.createElement("chassis-optgroup");t.id=c.get(this).generateGuid("optgroup");var n=e.getAttribute("label");if(n&&""!==n.trim()){t.setAttribute("label",n);var r=e.querySelectorAll("option"),o=!0,i=!1,l=void 0;try{for(var u,a=r[Symbol.iterator]();!(o=(u=a.next()).done);o=!0){var s=u.value;this.add(this.generateOptionObject(s),null,t)}}catch(e){i=!0,l=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw l}}return t}console.error("<optgroup> must have a label attribute!")}else console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.")}},{key:"generateOptionObject",value:function(e){if(customElements.get("chassis-option")){var t={id:c.get(this).generateGuid(),attributes:{},sourceElement:e},n=!0,r=!1,o=void 0;try{for(var i,l=e.attributes[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;t.attributes[u.name]=u.value}}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return t}console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")}},{key:"getOptionByKey",value:function(e){for(var t,n=0;n<this.options.length;n++)if(this.options[n].key===e){t=this.options[n];break}return t}},{key:"item",value:function(e){return this.options[e].displayElement}},{key:"namedItem",value:function(n){var e=this.options.filter(function(e){var t=e.sourceElement.attributes.getNamedItem("id");return t&&t.value===n});return e.length?e[e.length-1].displayElement:null}},{key:"removeOptionByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];if(!(null===e||e>=this.options.length)){var n=this.options[e];n.sourceElement.remove(),t&&n.displayElement.remove(),this.options.splice(e,1)}}},{key:"select",value:function(e){e!==this.selectedOption&&(this.parent.multiple||this.deselectAll(),e.sourceElement.selected=!0,e.displayElement.setAttribute("selected",""),this.selectedOptionsEl.add(e),this.selectedOptionsEl.removeAttribute("placeholder"),this.dispatchChangeEvent())}},{key:"selectByKey",value:function(e){var t=this.getOptionByKey(e);if(!t)return console.error('Invalid option key "'.concat(e,'"')),this.deselectAll();this.select(t)}},{key:"selectByIndex",value:function(e){var t=this.options[e];if(!t)return 0<=e?console.error("No option at index ".concat(e)):this.deselectAll();this.select(t)}},{key:"form",get:function(){return this.parent.form},set:function(e){return c.get(this).throw("readonly",{name:"form"})}},{key:"displayOptions",get:function(){var n=this;return new(c.get(this).ChassisOptionsCollection())(this.options.map(function(e){return e.displayElement}),this.selectedIndex,function(e,t){n.add(n.generateOptionObject(e),t)},function(e){return n.removeOptionByIndex(e)})},set:function(e){return c.get(this).throw("readonly",{name:"displayOptions"})}},{key:"options",get:function(){return c.get(this).options},set:function(e){return c.get(this).throw("readonly",{name:"options"})}},{key:"selectedIndex",get:function(){var t=this;return this.options.findIndex(function(e){return e.displayElement===t.selectedOptions.item(0)})},set:function(e){this.selectByIndex(e)}},{key:"selectedOptions",get:function(){var e=this.querySelectorAll("[selected]");return new(c.get(this).ChassisHTMLCollection())(e)},set:function(e){return c.get(this).throw("readonly",{name:"selectedOptions"})}}]),r}((0,d.default)(HTMLElement))))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){var r=n(8),o=n(1);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},function(e,t,n){var r=n(0);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(t,e,n){var r=n(2),o=n(0),i=n(11),l=n(12);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return l(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},u(e)}t.exports=u},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(r,e,t){var i=t(0);function o(e,t,n){return function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?r.exports=o=Reflect.construct:r.exports=o=function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},o.apply(null,arguments)}r.exports=o}]);