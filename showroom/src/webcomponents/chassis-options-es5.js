!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(n,e){function o(e,t){return n.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}n.exports=o},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){"use strict";var d,o=n(4),f=o(n(5)),r=o(n(6)),u=o(n(7)),a=o(n(2)),s=o(n(9)),p=o(n(1)),i=o(n(10));customElements.define("chassis-options",(d=new WeakMap,function(e){function n(){var c;(0,f.default)(this,n),(c=(0,u.default)(this,(0,a.default)(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",c.attachShadow({mode:"open"});var e=document.createElement("div");e.insertAdjacentHTML("afterbegin",'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');var t=e.querySelector("template");"content"in t?c.shadowRoot.appendChild(t.content.cloneNode(!0)):t.childNodes.forEach(function(e){c.shadowRoot.appendChild(e.cloneNode(!0))}),t=null,c.crypto=null;try{c.crypto=crypto}catch(e){c.crypto=msCrypto}return d.set((0,p.default)((0,p.default)(c)),{addPrivateProps:function(e){for(var t in e)d.get((0,p.default)((0,p.default)(c)))[t]=e[t]},addReadOnlyProp:function(e){Object.defineProperty((0,p.default)((0,p.default)(c)),e,d.get((0,p.default)((0,p.default)(c))).readonlyProperty(e))},addReadOnlyProps:function(e){e.forEach(function(e){return d.get((0,p.default)((0,p.default)(c))).addReadOnlyProp(e)})},generateGuid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^c.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e?"".concat(e,"_").concat(t):t},getBooleanPropertyValue:function(e){return c.hasAttribute(e)&&"false"!==c.getAttribute(e)},handleAttributeChange:function(e,t){d.get((0,p.default)((0,p.default)(c))).sourceEl&&(c.setAttribute(e,t),d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=t)},handleBooleanAttributeChange:function(e,t){if(d.get((0,p.default)((0,p.default)(c))).sourceEl)return["true","false","",null].includes(t)?"false"===t&&c.hasAttribute(e)?(c.removeAttribute(e),void(d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=!1)):void(d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=c.hasAttribute(e)):(console.error("<".concat(c.localName,'> "').concat(e,'" attribute expected boolean but received "').concat(t,'"')),c.removeAttribute(e),void(d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=!1))},handleBooleanPropertyChange:function(e,t){if(!t)return c.removeAttribute(e),void(d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=!1);c.hasAttribute(e)&&"true"===c.getAttribute(e)||(c.setAttribute(e,""),d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=!0)},handlePropertyChange:function(e,t){d.get((0,p.default)((0,p.default)(c))).sourceEl[e]=t,c.hasAttribute(e)&&c.getAttribute(e)===t||c.setAttribute(e,t)},readonlyProperty:function(e){return{get:function(){return d.get((0,p.default)((0,p.default)(c))).sourceEl[e]},set:function(){return d.get((0,p.default)((0,p.default)(c))).throw("readonly",{name:e})}}},throw:function(e,t){var n="ERROR <chassis-options> ";switch(e){case"readonly":n+='Cannot set read-only property "'.concat(t.name,'".');break;default:n=n.trim()}console.error(n)}}),c.parent=null,c.mousedown=!1,d.get((0,p.default)((0,p.default)(c))).options=[],d.get((0,p.default)((0,p.default)(c))).optionConstructor=function(){var d=new WeakMap;return function(){function c(e,t,n,o){(0,f.default)(this,c),this.id=e,this.key=n.key,this.displayElement=n,this.sourceElement=t,this.defaultSelected=t.selected,this.form=o,d.set(this,{attributes:{disabled:t.disabled,id:t.getAttribute("id"),label:t.getAttribute("label")||t.textContent.trim(),selected:t.selected,value:t.getAttribute("value").trim(),text:t.text.trim()}}),this.displayElement.innerHTML=this.sourceElement.innerHTML;var r=!0,i=!1,l=void 0;try{for(var u,a=t.attributes[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var s=u.value;"boolean"!=typeof s.value?this.displayElement.setAttribute(s.name,s.value):s.value?this.displayElement.setAttribute(s.name,""):this.displayElement.removeAttribute(s.name)}}catch(e){i=!0,l=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw l}}}return(0,r.default)(c,[{key:"remove",value:function(){this.sourceElement.remove(),this.displayElement.remove()}},{key:"setAttr",value:function(e,t){"boolean"==typeof(this.sourceElement[e]=t)?t?this.displayElement.setAttribute(e,""):this.displayElement.removeAttribute(e):this.displayElement.setAttribute(e,t),d.get(this).attributes[e]=t}},{key:"disabled",get:function(){return d.get(this).attributes.disabled},set:function(e){this.setAttr("disabled",e)}},{key:"index",get:function(){return this.sourceElement.index}},{key:"selected",get:function(){return d.get(this).attributes.selected},set:function(e){this.setAttr("selected",e)}},{key:"label",get:function(){return d.get(this).attributes.label},set:function(e){this.setAttr("label",e)}},{key:"text",get:function(){return d.get(this).attributes.text},set:function(e){this.setAttr("text",e)}},{key:"value",get:function(){return d.get(this).attributes.value},set:function(e){this.setAttr("value",e)}}]),c}()},d.get((0,p.default)((0,p.default)(c))).generateOptionObject=function(e){if(customElements.get("chassis-option"))return new(d.get((0,p.default)((0,p.default)(c))).optionConstructor())(d.get((0,p.default)((0,p.default)(c))).generateGuid(),e,d.get((0,p.default)((0,p.default)(c))).generateDisplayOptionElement(),c.form);console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")},d.get((0,p.default)((0,p.default)(c))).generateDisplayOptionElement=function(){var t=document.createElement("chassis-option");return t.key=d.get((0,p.default)((0,p.default)(c))).generateGuid(),t.parent=(0,p.default)((0,p.default)(c)),t.addEventListener("mouseup",function(e){d.get((0,p.default)((0,p.default)(c))).selectByKey(t.key,c.parent.multiple,{shift:e.shiftKey,ctrl:e.ctrlKey,cmd:e.metaKey})}),t},d.get((0,p.default)((0,p.default)(c))).generateSourceOptionElement=function(e){var t=document.createElement("option");return e.hasOwnProperty("innerHTML")&&(t.innerHTML=e.innerHTML),e.hasOwnProperty("label")&&(t.innerHTML=e.label),e.hasOwnProperty("value")&&(t.value=e.value),e.hasOwnProperty("disabled")&&(t.disabled="boolean"==typeof e.disabled&&e.disabled),t},d.get((0,p.default)((0,p.default)(c))).generateOptgroup=function(e){if(customElements.get("chassis-optgroup")){var t=document.createElement("chassis-optgroup");t.id=d.get((0,p.default)((0,p.default)(c))).generateGuid("optgroup");var n=e.getAttribute("label");if(n&&""!==n.trim()){t.setAttribute("label",n);var o=e.querySelectorAll("option"),r=!0,i=!1,l=void 0;try{for(var u,a=o[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var s=u.value;c.add(d.get((0,p.default)((0,p.default)(c))).generateOptionObject(s),null,t)}}catch(e){i=!0,l=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw l}}return t}console.error("<optgroup> must have a label attribute!")}else console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.")},d.get((0,p.default)((0,p.default)(c))).getOptionByKey=function(e){for(var t,n=0;n<c.options.length;n++)if(c.options[n].key===e){t=c.options[n];break}return t},d.get((0,p.default)((0,p.default)(c))).ChassisHTMLCollection=function(){var o=new WeakMap;return function(){function t(e){var n=this;(0,f.default)(this,t),o.set(this,{arr:e}),e.forEach(function(e,t){return n[t]=e})}return(0,r.default)(t,[{key:"item",value:function(e){return o.get(this).arr[e]}},{key:"namedItem",value:function(t){var e=o.get(this).arr.filter(function(e){return e.id===t||e.name===t});return 0<e.length?e[0]:null}},{key:Symbol.iterator,value:function(){var t=this,n=0;return{next:function(){var e={value:o.get(t).arr[n],done:!(n in o.get(t).arr)};return n++,e}}}},{key:Symbol.toStringTag,value:function(){return"ChassisHTMLCollection"}},{key:"length",get:function(){return o.get(this).arr.length}}]),t}()},d.get((0,p.default)((0,p.default)(c))).ChassisHTMLOptionsCollection=function(){var l=new WeakMap;return function(e){function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,o=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0;return(0,f.default)(this,i),(t=(0,u.default)(this,(0,a.default)(i).call(this,e))).selectedIndex=n,t.add=o,t.remove=r,l.set((0,p.default)((0,p.default)(t)),{arr:e}),t}return(0,s.default)(i,e),(0,r.default)(i,[{key:Symbol.toStringTag,value:function(){return"ChassisHTMLOptionsCollection"}}]),i}(d.get((0,p.default)((0,p.default)(c))).ChassisHTMLCollection())},d.get((0,p.default)((0,p.default)(c))).selectByKey=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=d.get((0,p.default)((0,p.default)(c))).getOptionByKey(e);if(!o)return console.error('Invalid option key "'.concat(e,'"')),c.deselectAll();c.select(o,t,n)},d.get((0,p.default)((0,p.default)(c))).selectByIndex=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=c.options[e];if(!o)return 0<=e?console.error("No option at index ".concat(e)):c.deselectAll();c.select(o,t,n)},c.addEventListener("mousedown",function(e){c.mousedown=!0,console.log("mouse down")}),c.addEventListener("mouseup",function(e){c.mousedown=!1,console.log("mouse up")}),c}return(0,s.default)(n,e),(0,r.default)(n,[{key:"hoverOption",value:function(e){this.unHoverAllOptions(),this.options[e].displayElement.hovered=!0}},{key:"unHoverOption",value:function(e){this.options[e].displayElement.hovered=!1}},{key:"unHoverAllOptions",value:function(){var n=this;this.options.forEach(function(e,t){return n.unHoverOption(t)})}},{key:"connectedCallback",value:function(){}},{key:"add",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this;customElements.get("chassis-option")?(e instanceof Option&&(e=d.get(this).generateOptionObject(e)),this.parent["".concat(e.index)]=e.displayElement,t?(n.insertBefore(e.displayElement,n.children.item(t)),this.options.splice(t,0,e),this.parent.sourceElement.add(e.sourceElement,t)):(n.appendChild(e.displayElement),this.options.push(e),this.parent.sourceElement[this.options.length-1]||this.parent.sourceElement.appendChild(e.sourceElement)),e.selected&&d.get(this).selectByKey(e.key)):console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.")}},{key:"addChildren",value:function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value,u=l instanceof HTMLElement;switch(l.nodeName){case"OPTION":this.add(u?d.get(this).generateOptionObject(l):l);break;case"OPTGROUP":this.addOptgroup(u?d.get(this).generateOptgroup(l):l);break;default:console.warn("".concat(l.nodeName.toLowerCase()," is not a valid child element for <chassis-select>. Removing..."))}}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}},{key:"addOptgroup",value:function(e){var t=document.createElement("chassis-optgroup-label");t.innerHTML=e.getAttribute("label"),this.appendChild(t),this.appendChild(e)}},{key:"clear",value:function(){for(;this.lastChild;)this.removeChild(this.lastChild)}},{key:"deselect",value:function(e){e.selected=!1,this.parent.selectedOptionsElement.remove(e)}},{key:"deselectAll",value:function(){var t=this;this.parent.selectedOptionsElement.clear(),this.options.forEach(function(e){return t.deselect(e)})}},{key:"item",value:function(e){return this.options[e].displayElement}},{key:"namedItem",value:function(n){var e=this.options.filter(function(e){var t=e.sourceElement.attributes.getNamedItem("id");return t&&t.value===n});return e.length?e[e.length-1].displayElement:null}},{key:"removeOptionByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null===e||e>=this.options.length||this.options[e].remove()}},{key:"select",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if("number"==typeof e)return d.get(this).selectByIndex(e);var o=!0;if(t){if(n.shift&&console.log("shift key held"),n.cmd||n.ctrl){if(e.selected)return this.deselect(e);o=!1}}else if(e.selected)return;o&&this.deselectAll(),e.selected=!0,this.parent.selectedOptionsElement.add(e),this.parent.dispatchEvent(new Event("change",{bubbles:!0})),this.parent.multiple||this.parent.close()}},{key:"form",get:function(){return this.parent.form},set:function(e){return d.get(this).throw("readonly",{name:"form"})}},{key:"displayOptions",get:function(){var n=this;return new(d.get(this).ChassisHTMLOptionsCollection())(this.options.map(function(e){return e.displayElement}),this.selectedIndex,function(e,t){n.add(d.get(n).generateOptionObject(e),t)},function(e){return n.removeOptionByIndex(e)})},set:function(e){return d.get(this).throw("readonly",{name:"displayOptions"})}},{key:"options",get:function(){return d.get(this).options},set:function(e){return d.get(this).throw("readonly",{name:"options"})}},{key:"selectedIndex",get:function(){var t=this;return this.options.findIndex(function(e){return e.displayElement===t.selectedOptions.item(0)})},set:function(e){d.get(this).selectByIndex(e)}},{key:"selectedOptions",get:function(){var e=this.querySelectorAll("[selected]");return new(d.get(this).ChassisHTMLCollection())(e)},set:function(e){return d.get(this).throw("readonly",{name:"selectedOptions"})}},{key:"hoveredIndex",get:function(){return this.options.findIndex(function(e){return e.displayElement.hovered})},set:function(e){return d.get(this).throw("readonly",{name:"hoveredIndex"})}}]),n}((0,i.default)(HTMLElement))))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,n){var o=n(8),r=n(1);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(e){return n(e)}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(e)}t.exports=o},function(e,t,n){var o=n(0);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(t,e,n){var o=n(2),r=n(0),i=n(11),l=n(12);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return l(e,arguments,o(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r(t,e)},u(e)}t.exports=u},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(o,e,t){var i=t(0);function r(e,t,n){return function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?o.exports=r=Reflect.construct:o.exports=r=function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&i(r,n.prototype),r},r.apply(null,arguments)}o.exports=r}]);