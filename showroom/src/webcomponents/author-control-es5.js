!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";var r=n(2),o=r(n(3)),i=r(n(4)),l=r(n(5)),u=r(n(7)),a=r(n(8)),c=r(n(0));customElements.define("author-control",function(t){function e(){var b;return(0,o.default)(this,e),(b=(0,l.default)(this,(0,u.default)(e).call(this,'<template><style>@charset "UTF-8"; :host{display:flex;contain:style;max-width:100%}:host([type=field]){flex-direction:column}:host([type=select]){flex-direction:column}:host([type=toggle]){align-items:center}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}author-control{display:flex;contain:style;max-width:100%}author-control[type=field]){flex-direction:column}author-control[type=select]){flex-direction:column}author-control[type=toggle]){align-items:center}author-control *,author-control :after,author-control :before{box-sizing:border-box}author-control .hidden{display:none;visibility:hidden;opacity:0}author-control .label-wrapper{flex:1 1 auto;display:flex}author-control .input-wrapper{display:flex;align-items:center}author-control[type=toggle]) .input-wrapper{order:-1;justify-content:center}</style><slot name="afterbegin"></slot><slot name="beforelabelwrapper"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="afterlabelwrapper"></slot><slot name="beforeinputwrapper"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="afterinputwrapper"></slot><slot name="beforeend"></slot></template>'))).UTIL.defineAttributes({type:""}),b.UTIL.defineProperties({initialValue:{default:null},input:{private:!0},fieldInputTypes:{readonly:!0,private:!0,default:["color","date","datetime-local","email","file","hidden","image","month","number","password","range","reset","search","submit","tel","text","time","url","week","textarea"]},toggleInputTypes:{readonly:!0,private:!0,default:["checkbox","radio"]},supportedTypes:{readonly:!0,private:!0,default:["field","toggle","select"]}}),b.UTIL.definePrivateMethods({initDatalist:function(t,e){if(b.type="select",customElements.get("author-datalist")){var n=document.createElement("author-datalist"),r=!0,o=!(n.slot="input"),i=void 0;try{for(var l,u=e.attributes[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var a=l.value;a.specified&&(n.setAttribute(a.name,a.value),"autofocus"===a.name&&e.removeAttribute(a.name))}}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}b.removeChild(e),b.removeChild(t),n.inject(t,e,b.PRIVATE.guid),b.appendChild(n),b.PRIVATE.input=n}else{console.dir(t),t.id=b.PRIVATE.guid,e.id="".concat(t.id,"_datalist"),t.setAttribute("list",e.id),t.slot=t.slot||"input",b.PRIVATE.input=t,e.querySelectorAll("option[title]").forEach(function(t){return select.removeChild(t)});var c=!0,s=!1,f=void 0;try{for(var p,d=e.options[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var y=p.value;y.hasAttribute("label")&&""===y.getAttribute("label").trim()&&y.removeAttribute("label")}}catch(t){s=!0,f=t}finally{try{c||null==d.return||d.return()}finally{if(s)throw f}}}},initInput:function(t){t.slot=t.slot||"input",(b.PRIVATE.input=t).id=b.PRIVATE.guid,b.initialValue=t.value,0<=b.PRIVATE.fieldInputTypes.indexOf(t.type)&&(b.type="field"),0<=b.PRIVATE.toggleInputTypes.indexOf(t.type)&&(b.type="toggle"),b.UTIL.registerListeners(b.PRIVATE.input,{input:b.PRIVATE.inputHandler})},initLabel:function(t){(b.label=t).slot=t.slot||"label",t.htmlFor=b.PRIVATE.guid,"select"===b.type&&b.label.addEventListener("click",function(t){b.input.focus()})},initDefaultSelect:function(e){e.id=b.PRIVATE.guid,e.slot=e.slot||"input",e.setAttribute("role","menu"),(b.PRIVATE.input=e).querySelectorAll("option[title]").forEach(function(t){return e.removeChild(t)});var t=!0,n=!1,r=void 0;try{for(var o,i=e.options[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;l.hasAttribute("label")&&""===l.getAttribute("label").trim()&&l.removeAttribute("label")}}catch(t){n=!0,r=t}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}b.UTIL.registerListeners(b.PRIVATE.input,{change:b.PRIVATE.inputHandler})},initMultipleSelectMenu:function(t){if(b.type="select",b.initialValue=t.selectedOptions,!customElements.get("author-select"))return b.PRIVATE.initDefaultSelect(t);b.PRIVATE.initSelectSurrogate(t,document.createElement("author-select"))},initSelectSurrogate:function(t,e){e.slot="input",e.id=b.PRIVATE.guid;var n=!0,r=!1,o=void 0;try{for(var i,l=t.attributes[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;u.specified&&(e.setAttribute(u.name,u.value),"autofocus"===u.name&&t.removeAttribute(u.name))}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}b.removeChild(t),e.inject(t,b.querySelectorAll("label")),b.appendChild(e),b.PRIVATE.input=e,b.UTIL.registerListeners(b.PRIVATE.input,{change:b.PRIVATE.inputHandler})},initSelectMenu:function(t){if(b.type="select",b.initialValue=t.selectedIndex,!customElements.get("author-select"))return b.PRIVATE.initDefaultSelect(t);b.PRIVATE.initSelectSurrogate(t,document.createElement("author-select"))},inputHandler:function(t){return b.PRIVATE.validate(t.target)},validate:function(t){t.checkValidity()?b.removeAttribute("invalid"):(b.setAttribute("invalid",""),b.emit("invalid"))}}),b.UTIL.monitorChildren(function(t,e){t.filter(function(t){return 3!==t.addedNodes.item(0).nodeType}).forEach(function(t,e,n){var r=t.addedNodes.item(0);switch(r.nodeName){case"LABEL":return b.PRIVATE.initLabel(r);case"INPUT":if(void 0===n[e+1])return b.PRIVATE.initInput(r);var o=n[e+1].addedNodes.item(0);return o&&"DATALIST"===o.nodeName?b.PRIVATE.initDatalist(r,o):b.PRIVATE.initInput(r);case"TEXTAREA":return b.PRIVATE.initInput(r);case"SELECT":return r.multiple?b.PRIVATE.initMultipleSelectMenu(r):b.PRIVATE.initSelectMenu(r);default:return void(b.initialValue=r.value)}}),e.disconnect()}),b.UTIL.registerListeners((0,c.default)((0,c.default)(b)),{connected:function(){return b.PRIVATE.guid=b.UTIL.generateGuid("control_")},rendered:function(){return b.PRIVATE.validate(b.PRIVATE.input)}}),b}return(0,a.default)(e,t),(0,i.default)(e,[{key:"input",get:function(){return this.PRIVATE.input},set:function(t){if(this.input)return console.warn("Setting <".concat(this.localName,"> child input programmatically is not allowed."));this.PRIVATE.input=t}}],[{key:"observedAttributes",get:function(){return["disabled","invalid"]}}]),e}(AuthorElement(HTMLElement)))},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,n){var r=n(6),o=n(0);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(t){return n(t)}:e.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(t)}e.exports=r},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){var r=n(9);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(n,t){function r(t,e){return n.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.exports=r}]);