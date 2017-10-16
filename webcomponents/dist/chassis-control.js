"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ChassisFormControl=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.attachShadow({mode:"open"});var o=document.createElement("template");return o.insertAdjacentHTML("afterbegin",e.templateString),e.shadowRoot.appendChild(o.children[0].content.cloneNode(!0)),o=null,e}return _inherits(t,HTMLElement),_createClass(t,[{key:"connectedCallback",value:function(){console.log("connected")}},{key:"attributeChangedCallback",value:function(e,t,o){return void e.toLowerCase()}},{key:"templateString",get:function(){return'<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:content;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}chassis-control{display:flex;contain:content;max-width:100%}chassis-control *{box-sizing:border-box}chassis-control :before{box-sizing:border-box}chassis-control :after{box-sizing:border-box}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}</style><slot name="afterbegin"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="between"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="beforeend"></slot></template>'}}],[{key:"observedAttributes",get:function(){return["type"]}}]),t}();customElements.define("chassis-control",ChassisFormControl);