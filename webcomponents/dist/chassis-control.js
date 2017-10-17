"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ChassisFormControl=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.attachShadow({mode:"open"});var o=document.createElement("template");return o.insertAdjacentHTML("afterbegin",e.templateString),e.shadowRoot.appendChild(o.children[0].content.cloneNode(!0)),o=null,e.fieldInputTypes=["color","date","datetime-local","email","file","hidden","image","month","number","password","range","reset","search","submit","tel","text","time","url","week","textarea"],e.toggleInputTypes=["checkbox","radio"],e.supportedTypes=["field","toggle","select"],e}return _inherits(t,HTMLElement),_createClass(t,[{key:"_generateGuid",value:function(){for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);var o=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return"input_"+e[255&o]+e[o>>8&255]+e[o>>16&255]+e[o>>24&255]+"-"+e[255&n]+e[n>>8&255]+"-"+e[n>>16&15|64]+e[n>>24&255]+"-"+e[63&i|128]+e[i>>8&255]+"-"+e[i>>16&255]+e[i>>24&255]+e[255&r]+e[r>>8&255]+e[r>>16&255]+e[r>>24&255]}},{key:"connectedCallback",value:function(){var e=this;this._guid=this._generateGuid();var t=!0,o=!1,n=void 0;try{for(var i,r=this.shadowRoot.childNodes[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;"SLOT"===s.nodeName&&s.addEventListener("slotchange",function(e){console.log("slotchange fired")})}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}new MutationObserver(function(t){t.forEach(function(t){if(t.addedNodes.length){var o=t.addedNodes[0];switch(o.nodeName){case"LABEL":return e.initLabel(o);case"INPUT":case"TEXTAREA":return e.initInput(o);case"SELECT":return e.initSelectMenu(o);default:return}}})}).observe(this,{childList:!0}),setTimeout(function(){var t=e.querySelector("label"),o=e.querySelector("input"),n=e.querySelector("textarea"),i=e.querySelector("select");t&&e.initLabel(t),o&&e.initInput(o),n&&e.initInput(n),i&&e.initSelectMenu(i)})}},{key:"attributeChangedCallback",value:function(e,t,o){switch(e.toLowerCase()){case"type":this.type!==o&&(this.type=o);break;default:return}}},{key:"initLabel",value:function(e){this.label=e,e.slot=e.slot||"label",this.id&&(e.htmlFor=this._guid)}},{key:"initInput",value:function(e){this.input=e,e.slot=e.slot||"input",this.id&&(e.id=this._guid),this.type?this.supportedTypes.includes(this.type)||console.warn('[WARNING] Chassis Form Controls do not support type "'+this.type+'." Supported types: '+this.supportedTypes.join(", ")+"."):(this.fieldInputTypes.includes(e.type)&&(this.type="field"),this.toggleInputTypes.includes(e.type)&&(this.type="toggle"))}},{key:"initSelectMenu",value:function(e){this.input=e,e.slot=e.slot||"input",this.type="select",this.id&&(e.id=this._guid)}},{key:"templateString",get:function(){return'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:content;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}chassis-control{display:flex;contain:content;max-width:100%}chassis-control *{box-sizing:border-box}chassis-control :before{box-sizing:border-box}chassis-control :after{box-sizing:border-box}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}</style><slot name="afterbegin"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="between"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="beforeend"></slot></template>'}},{key:"type",get:function(){return this.getAttribute("type")},set:function(e){this.setAttribute("type",e)}}],[{key:"observedAttributes",get:function(){return["type"]}}]),t}();customElements.define("chassis-control",ChassisFormControl);