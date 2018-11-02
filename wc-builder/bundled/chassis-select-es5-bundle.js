/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(0));

var _get2 = _interopRequireDefault(__webpack_require__(9));

var _inherits2 = _interopRequireDefault(__webpack_require__(11));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(12));

customElements.define('chassis-select', function () {
  var _ = new WeakMap();

  return (
    /*#__PURE__*/
    function (_HTMLElement) {
      (0, _inherits2.default)(_class, _HTMLElement);

      function _class() {
        var _this;

        (0, _classCallCheck2.default)(this, _class);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
        _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

        _this.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-select{display:inline-block;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeselectedoptions\"></slot><slot name=\"selectedoptions\"></slot><slot name=\"afterselectedoptions\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
        var template = container.querySelector('template');

        if ('content' in template) {
          _this.shadowRoot.appendChild(template.content.cloneNode(true));
        } else {
          template.childNodes.forEach(function (child) {
            _this.shadowRoot.appendChild(child.cloneNode(true));
          });
        }

        template = null;
        _this.crypto = null;

        try {
          _this.crypto = crypto;
        } catch (e) {
          _this.crypto = msCrypto;
        }

        _.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          addPrivateProps: function addPrivateProps(props) {
            for (var prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = props[prop];
            }
          },
          addReadOnlyProp: function addReadOnlyProp(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).readonlyProperty(prop));
          },
          addReadOnlyProps: function addReadOnlyProps(props) {
            props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProp(prop);
            });
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          handleAttributeChange: function handleAttributeChange(attr, val) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            _this.setAttribute(attr, val);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = val;
          },
          handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
            if (!_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl) {
              return;
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            if (value === 'false' && _this.hasAttribute(attr)) {
              _this.removeAttribute(attr);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = false;
              return;
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[attr] = _this.hasAttribute(attr);
          },
          handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
            if (!bool) {
              _this.removeAttribute(prop);

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = false;
              return;
            }

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
              _this.setAttribute(prop, '');

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = true;
            }
          },
          handlePropertyChange: function handlePropertyChange(prop, val) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[prop] = val;

            if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
              _this.setAttribute(prop, val);
            }
          },
          readonlyProperty: function readonlyProperty(name) {
            return {
              get: function get() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceEl[name];
              },
              set: function set() {
                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).throw('readonly', {
                  name: name
                });
              }
            };
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-select> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.name, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        }); // this.addEventListener('click', evt => {
        //   console.log('chassis-select');
        // })


        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProps(['form', 'willValidate', 'type', 'validationMessage', 'validity']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProps({
          title: '',
          arrowKeydownHandler: function arrowKeydownHandler(evt) {
            var startIndex = _this.hoveredIndex > -1 ? _this.hoveredIndex : _this.selectedIndex > -1 ? _this.selectedIndex : -1;

            switch (evt[_this.keySource]) {
              case 13:
              case 'Enter':
              case 32:
              case ' ':
                evt.preventDefault();

                if (_this.hoveredIndex === _this.selectedIndex) {
                  return _this.close();
                }

                return _this.select(_this.hoveredIndex);

              case 38:
              case 'ArrowUp':
                evt.preventDefault();

                if (!_this.multiple && !_this.isOpen) {
                  return _this.open();
                }

                switch (startIndex) {
                  case -1:
                  case 0:
                    return;

                  default:
                    return _this.optionsElement.hoverOption(startIndex - 1);
                }

                break;

              case 40:
              case 'ArrowDown':
                evt.preventDefault();

                if (!_this.multiple && !_this.isOpen) {
                  return _this.open();
                }

                switch (startIndex) {
                  case _this.options.length - 1:
                    return;

                  default:
                    return _this.optionsElement.hoverOption(startIndex + 1);
                }

                break;

              default:
                return;
            }
          },
          bodyClickHandler: function bodyClickHandler(evt) {
            if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
              return;
            }

            _this.removeAttribute('open');
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "add",
        value: function add(option, index) {
          this.optionsElement.add(option, index);
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, oldValue, newValue) {
          attr = attr.toLowerCase();

          if (newValue === oldValue) {
            return;
          }

          switch (attr) {
            case 'autofocus':
            case 'disabled':
              return _.get(this).handleBooleanAttributeChange(attr, newValue);

            case 'multiple':
              _.get(this).handleBooleanAttributeChange(attr, newValue);

              if (!newValue && this.selectedOptions) {
                var index = this.selectedIndex;
                this.deselectAll();
                this.select(index);
              }

              break;

            case 'name':
              return _.get(this).handleAttributeChange(attr, newValue);

            case 'open':
              if (this.multiple) {
                return;
              }

              return this.isOpen ? this.open() : this.close();
          }
        }
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          return this.sourceElement.checkValidity();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.optionsElement.clear();
          this.selectedOptionsElement.clear();
        }
      }, {
        key: "close",
        value: function close() {
          if (this.multiple) {
            return;
          }

          document.body.removeEventListener('click', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchend', _.get(this).bodyClickHandler);

          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this.addEventListener('focus', function (evt) {
            _this2.addEventListener('keydown', _.get(_this2).arrowKeydownHandler);
          });
          this.addEventListener('blur', function (evt) {
            _this2.removeEventListener('keydown', _.get(_this2).arrowKeydownHandler);
          });
          document.body.addEventListener('mouseup', function (evt) {
            return _this2.optionsElement.mousedown = false;
          });
          setTimeout(function () {
            if (!_this2.hasAttribute('tabindex')) {
              _this2.setAttribute('tabindex', 0);
            }

            if (_this2.autofocus) {
              _this2.focus();
            }
          }, 0);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this.optionsElement.deselectAll();
        }
      }, {
        key: "inject",
        value: function inject(select, labels) {
          Object.assign(_.get(this), {
            sourceEl: select,
            optionsEl: document.createElement('chassis-options'),
            selectedOptionsEl: document.createElement('chassis-selected-options'),
            labels: labels
          });
          this.placeholder = this.getAttribute('placeholder');
          this.optionsElement.parent = this;
          this.selectedOptionsElement.parent = this;
          this.selectedOptionsElement.slot = 'selectedoptions';
          this.appendChild(this.selectedOptionsElement);
          this.optionsElement.slot = 'options';
          this.appendChild(this.optionsElement);

          if (select.children.length > 0) {
            this.optionsElement.addChildren(select.children);
            this.select(this.selectedIndex);
          } else {
            this.deselectAll();
          }
        }
      }, {
        key: "item",
        value: function item(index) {
          return this.optionsElement.item(index);
        }
      }, {
        key: "namedItem",
        value: function namedItem(id) {
          return this.optionsElement.namedItem(id);
        }
      }, {
        key: "open",
        value: function open() {
          if (this.multiple) {
            return;
          }

          document.body.addEventListener('click', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchend', _.get(this).bodyClickHandler);

          if (!this.isOpen) {
            this.isOpen = true;
          }
        }
        /**
         * method querySelector
         * @param  {string} selector
         * @return {HTMLElement}
         * @override
         */

      }, {
        key: "querySelector",
        value: function querySelector(selector) {
          if (selector !== ':checked') {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "querySelector", this).call(this, selector);
          }

          return this.selectedOptions.length > 0 ? this.selectedOptions[0] : null;
        }
        /**
         * method querySelectorAll
         * @param  {string} selector
         * @return {NodeList}
         * @override
         */

      }, {
        key: "querySelectorAll",
        value: function querySelectorAll(selector) {
          if (selector !== ':checked') {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "querySelectorAll", this).call(this, selector);
          }

          return this.optionsElement.querySelectorAll('[selected]');
        }
      }, {
        key: "remove",
        value: function remove() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (index === null) {
            return (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
          }

          this.optionsElement.removeOptionByIndex(index);
        }
      }, {
        key: "select",
        value: function select(index) {
          this.optionsElement.select(index);
        }
      }, {
        key: "setCustomValidity",
        value: function setCustomValidity(string) {
          this.sourceElement.setCustomValidity(string);
        }
      }, {
        key: Symbol.toStringTag,
        value: function value() {
          return 'ChassisSelectElement';
        }
      }, {
        key: "autofocus",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('autofocus');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('autofocus', bool);
        }
      }, {
        key: "disabled",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('disabled');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('disabled', bool);
        }
      }, {
        key: "hoveredIndex",
        get: function get() {
          return this.optionsElement.hoveredIndex;
        },
        set: function set(index) {
          return _.get(this).throw('readonly', {
            name: 'hoveredIndex'
          });
        }
      }, {
        key: "isOpen",
        get: function get() {
          if (this.multiple) {
            return null;
          }

          return this.hasAttribute('open');
        },
        set: function set(bool) {
          if (this.multiple) {
            return;
          }

          bool ? this.setAttribute('open', '') : this.removeAttribute('open');
        }
      }, {
        key: "length",
        get: function get() {
          return this.options.length;
        }
      }, {
        key: "labels",
        get: function get() {
          return _.get(this).labels;
        },
        set: function set(elements) {
          return _.get(this).throw('readonly', {
            name: 'labels'
          });
        }
      }, {
        key: "multiple",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('multiple');
        },
        set: function set(bool) {
          if (bool && this.hasAttribute('open')) {
            this.removeAttribute('open');
          }

          _.get(this).handleBooleanPropertyChange('multiple', bool);
        }
      }, {
        key: "name",
        get: function get() {
          return this.getAttribute('name');
        },
        set: function set(name) {
          _.get(this).handlePropertyChange('name', name);
        }
      }, {
        key: "options",
        get: function get() {
          return this.optionsElement.displayOptions;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'options'
          });
        }
      }, {
        key: "optionsElement",
        get: function get() {
          return _.get(this).optionsEl;
        },
        set: function set(el) {
          return _.get(this).throw('readonly', {
            name: 'optionsElement'
          });
        }
      }, {
        key: "required",
        get: function get() {
          return _.get(this).getBooleanPropertyValue('required');
        },
        set: function set(bool) {
          _.get(this).handleBooleanPropertyChange('required', bool);
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this.optionsElement ? this.optionsElement.selectedIndex : null;
        },
        set: function set(index) {
          if (index < 0) {
            return this.deselectAll();
          }

          this.optionsElement.selectedIndex = index;
        }
      }, {
        key: "selectedOptions",
        get: function get() {
          return this.optionsElement ? this.optionsElement.selectedOptions : null;
        },
        set: function set(value) {
          return _.get(this).throw('readonly', {
            name: 'selectedOptions'
          });
        }
      }, {
        key: "sourceElement",
        get: function get() {
          return _.get(this).sourceEl;
        },
        set: function set(el) {
          return _.get(this).throw('readonly', {
            name: 'sourceElement'
          });
        }
      }, {
        key: "selectedOptionsElement",
        get: function get() {
          return _.get(this).selectedOptionsEl;
        },
        set: function set(el) {
          return _.get(this).throw('readonly', {
            name: 'selectedOptionsElement'
          });
        }
      }, {
        key: "value",
        get: function get() {
          if (this.selectedOptions.length === 0) {
            return null;
          }

          var selectedOption = this.selectedOptions.item(0);
          return selectedOption ? selectedOption.value || selectedOption.text : null;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'tabindex'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

var superPropBase = __webpack_require__(10);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(1);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

var setPrototypeOf = __webpack_require__(1);

var isNativeFunction = __webpack_require__(13);

var construct = __webpack_require__(14);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(1);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ })
/******/ ]);
//# sourceMappingURL=chassis-select-es5-bundle.js.map