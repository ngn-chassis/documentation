"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var AuthorElement=function(t){return function(e){function n(e){var u;_classCallCheck(this,n),(u=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this))).keySource="key"in KeyboardEvent.prototype?"key":"keyIdentifier"in KeyboardEvent.prototype?"keyIdentifier":"keyCode",u.attachShadow({mode:"open"});var t=document.createElement("div");t.insertAdjacentHTML("afterbegin",e);var r=t.querySelector("template");"content"in r?u.shadowRoot.appendChild(r.content.cloneNode(!0)):r.childNodes.forEach(function(e){u.shadowRoot.appendChild(e.cloneNode(!0))}),r=null,u.crypto=null;try{u.crypto=crypto}catch(e){u.crypto=msCrypto}return Object.defineProperties(_assertThisInitialized(_assertThisInitialized(u)),{PRIVATE:{value:{}},UTIL:{value:{}}}),Object.defineProperties(u.PRIVATE,{attributes:{value:{}},booleanAttributes:{value:{}},properties:{value:{}},privateProperties:{value:[]},listeners:{value:[]},definePrivateProperty:{value:function(t,r){u.PRIVATE.privateProperties[t]=null,Object.defineProperty(u.PRIVATE,t,{get:function(){return u.PRIVATE.privateProperties[t]||r.default},set:function(e){if(r.readonly)return u.throwError({type:"readonly",vars:{prop:t}});u.PRIVATE.privateProperties[t]=e}})}},defineReadOnlyProperty:{value:function(t,e){var r={set:function(e){u.throwError({type:"readonly",vars:{prop:t}})},get:function(){return e.hasOwnProperty("get")?"function"!=typeof e.get?u.UTIL.throwError({type:"type",message:"Property getter must be a function"}):e.get():e.default||null}};Object.defineProperty(_assertThisInitialized(_assertThisInitialized(u)),t,r)}},getBooleanAttributeValue:{value:function(e){return u.hasAttribute(e)&&"false"!==u.getAttribute(e)}},setBooleanAttributeValue:{value:function(e,t){"boolean"==typeof t&&(t=t.toString());if(!["true","false","",null].includes(t))return u.UTIL.printToConsole('"'.concat(e,'" attribute expected boolean but received "').concat(t,'"'),"error"),u.removeAttribute(e);switch(t){case"false":case null:return u.removeAttribute(e);case"true":case"":return u.setAttribute(e,"")}}}}),Object.defineProperties(u.UTIL,{childMonitor:{value:null},defineAttribute:{value:function(t,e){var r=null,n=null;if("object"===_typeof(e)){var o=e;o.hasOwnProperty("get")&&(r=o.get),o.hasOwnProperty("set")&&(n=o.set),e=o.default||null}var i="boolean"==typeof e,a=i?"booleanAttributes":"attributes";Object.defineProperty(u.PRIVATE[a],t,{get:function(){return r&&r()||e},set:function(e){return n&&n(e)}}),Object.defineProperty(_assertThisInitialized(_assertThisInitialized(u)),t,{get:function(){return r?r()||e:i?u.PRIVATE.getBooleanAttributeValue(t):u.hasAttribute(t)?u.getAttribute(t):e},set:function(e){if(n&&n(e),r&&(e=u.PRIVATE[a][t]),i)return u.PRIVATE.setBooleanAttributeValue(t,e);u.setAttribute(t,e)}})}},defineAttributes:{value:function(e){for(var t in e)u.UTIL.defineAttribute(t,e[t])}},defineProperty:{value:function(t,e){if("object"!==_typeof(e))return u.PRIVATE.properties[t]=e,void(u[t]=e);var r={readonly:e.hasOwnProperty("readonly")&&!0===e.readonly,private:e.hasOwnProperty("private")&&!0===e.private,default:e.hasOwnProperty("default")?e.default:null};if(e.hasOwnProperty("get")){if("function"!=typeof e.get)return u.UTIL.throwError({type:"type",message:"Property getter must be a function"});r.get=e.get}if(e.hasOwnProperty("set")){if("function"!=typeof e.set)return u.UTIL.throwError({type:"type",message:"Property setter must be a function"});r.set=e.set}return e.private?u.PRIVATE.definePrivateProperty(t,r):e.readonly?u.PRIVATE.defineReadOnlyProperty(t,r):(u.PRIVATE.properties[t]=r.default,void Object.defineProperty(_assertThisInitialized(_assertThisInitialized(u)),t,{get:function(){return u.PRIVATE.properties[t]},set:function(e){return u.PRIVATE.properties[t]=e}}))}},defineProperties:{value:function(e){for(var t in e)u.UTIL.defineProperty(t,e[t])}},definePrivateMethods:{value:function(e){for(var t in e){if(u.PRIVATE.hasOwnProperty(t))return u.UTIL.throwError({message:'Cannot create private method. Property name "'.concat(t,'" is already in use.')});u.PRIVATE[t]=e[t]}}},createEvent:{value:function(e,t){return new CustomEvent(e,{detail:t})}},generateGuid:{value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^u.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)});return e&&(r="".concat(e).concat(r)),t&&(r="".concat(r).concat(t)),r}},throwError:{value:function(e){var t="<".concat(u.localName,"> "),r=e.type||"custom",n=new Error,o=(e||null).vars;if("dependency"===r)t+="Missing dependency",o&&(o.hasOwnProperty("name")&&(t+=": ".concat(o.name)),o.hasOwnProperty("url")&&(t+=" ".concat(o.url)));else if("readonly"===r)t+="Cannot set read-only property",o&&o.hasOwnProperty("prop")&&(t+=' "'.concat(o.prop,'"'));else if("reference"===r)n=new ReferenceError;else{if("type"!==r)return u.UTIL.throwError({message:'Unrecognized error type "'.concat(r,'". Accepted types: "custom", "dependency", "readonly", "reference", "type"')});n=new TypeError}throw e.hasOwnProperty("message")&&(t+=" ".concat(e.message)),n.message=t.trim(),n}},printToConsole:{value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"log",r="<".concat(u.localName,"> ").concat(e);switch(t){case"warning":return console.warn("[WARNING] ".concat(r));case"error":return console.error("[ERROR] ".concat(r));case"info":return console.info(r);default:return console.log(r)}}},monitorChildren:{value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];u.childMonitor=new MutationObserver(e),u.childMonitor.observe(_assertThisInitialized(_assertThisInitialized(u)),{childList:!0,attributes:!1,characterData:!1,subtree:"boolean"==typeof t&&t})}},registerListener:{value:function(e,t,r){var n={id:"listener_".concat(u.UTIL.generateGuid()),apply:function(){return e.addEventListener(t,r)},remove:function(){return e.removeEventListener(t,r)}};u.PRIVATE.listeners.push(n),n.apply()}},registerListeners:{value:function(e,t){for(var r in t)u.UTIL.registerListener(e,r,t[r])}}}),u}return _inherits(n,t),_createClass(n,[{key:"attributeChangedCallback",value:function(e,t,r){this.emit("attribute.change",{attribute:e,oldValue:t,newValue:r});var n=this.PRIVATE,o=n.attributes,i=n.booleanAttributes;o.hasOwnProperty(e)?o[e]!==r&&(this.PRIVATE.attributes[e]=r):i.hasOwnProperty(e)&&"true"!==r&&""!==r&&(this.PRIVATE.booleanAttributes[e]=r)}},{key:"connectedCallback",value:function(){var e=this;this.emit("connected"),setTimeout(function(){e.emit("rendered")},0)}},{key:"disconnectedCallback",value:function(){this.PRIVATE.listeners.forEach(function(e){return e.remove()}),this.emit("disconnected")}},{key:"emit",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=this.UTIL.createEvent(e,t);if(r)return r.dispatchEvent(n);this.dispatchEvent(n)}},{key:"off",value:function(e,t){this.removeEventListener(e,t)}},{key:"on",value:function(e,t){this.addEventListener(e,t)}}]),n}()};