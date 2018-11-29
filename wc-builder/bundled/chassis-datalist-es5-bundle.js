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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(10));

customElements.define('chassis-datalist', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  display: inline-block;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\n:host ::slotted(chassis-options) {\n  height: 0;\n  overflow: hidden;\n}\n\n:host([open]) ::slotted(chassis-options) {\n  height: auto;\n}\n\nchassis-datalist {\n  display: inline-block;\n  max-width: 100%;\n}\n\nchassis-datalist *,\nchassis-datalist *:before,\nchassis-datalist *:after {\n  box-sizing: border-box;\n}\n\nchassis-datalist chassis-options {\n  height: 0;\n  overflow: hidden;\n}\n\nchassis-datalist[open] chassis-options {\n  height: auto;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot><slot name=\"beforedatalist\"></slot><slot name=\"datalist\"></slot><slot name=\"afterdatalist\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
          sourceElement: null,
          addAttribute: function addAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return this.getAttribute(prop);
              },
              set: function set(value) {
                _.get(this).setAttributeValue(prop, value);
              }
            });
          },
          addAttributes: function addAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttribute(prop);
            });
          },
          setAttributeValue: function setAttributeValue(attr, val) {
            _this.setAttribute(attr, val);

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = val;
            }
          },
          addReadOnlyProperty: function addReadOnlyProperty(prop) {
            var custom = (0, _typeof2.default)(prop) === 'object';

            if (!custom && typeof prop !== 'string') {
              return console.error('ERROR <chassis-datalist> Read-only property must be type "object" or "string"');
            }

            var props = {
              set: function set() {
                _.get(this).throw('readonly', {
                  prop: custom ? prop.name : prop
                });
              }
            };

            if (custom && prop.hasOwnProperty('get')) {
              props.get = prop.get;
            } else {
              props.get = function () {
                return _.get(this)[prop];
              };
            }

            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), custom ? prop.name : prop, props);
          },
          addReadOnlyProperties: function addReadOnlyProperties(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty(prop);
            });
          },
          setReadOnlyPropertyValue: function setReadOnlyPropertyValue(value) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = value;
          },
          addBooleanAttribute: function addBooleanAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return _.get(this).getBooleanAttributeValue(prop);
              },
              set: function set(value) {
                _.get(this).setBooleanAttributeValue(prop, value);
              }
            });
          },
          addBooleanAttributes: function addBooleanAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttribute(prop);
            });
          },
          getBooleanAttributeValue: function getBooleanAttributeValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          setBooleanAttributeValue: function setBooleanAttributeValue(attr, value) {
            if (typeof value === 'boolean') {
              value = value.toString();
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
              }

              return;
            }

            switch (value) {
              case 'false':
              case null:
                _this.removeAttribute(attr);

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
                }

                break;

              case 'true':
              case '':
                _this.setAttribute(attr, '');

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = true;
                }

                break;

              default:
                return;
            }
          },
          addPrivateProperties: function addPrivateProperties(props) {
            for (var _prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[_prop] = props[_prop];
            }
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          emit: function emit(name, detail) {
            var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (target) {
              return target.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
            }

            _this.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
          },
          newEvent: function newEvent(name, detail) {
            return new CustomEvent(name, {
              detail: detail
            });
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-datalist> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.prop, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _this.clickCount = 0;

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty('options');

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options = [];

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).find = function (query) {
          return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.filter(function (option) {
            var value = _this.hasAttribute('case-sensitive') ? option.sourceElement.value : option.sourceElement.value.toLowerCase();
            var text = _this.hasAttribute('case-sensitive') ? option.sourceElement.text : option.sourceElement.text.toLowerCase();
            query = _this.hasAttribute('case-sensitive') ? query : query.toLowerCase();
            return value.indexOf(query) >= 0 || text.indexOf(query) >= 0;
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear = function () {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.forEach(function (option) {
            return option.displayElement.style.display = 'none';
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions = function () {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options.forEach(function (option) {
            return option.displayElement.style.display = '';
          });
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clickHandler = function (evt) {
          _this.clickCount++;

          if (_this.clickCount === 2) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions();

            _this.open();
          }
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).keydownHandler = function (evt) {
          if (!_this.isOpen) {
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).showAllOptions();

            return _this.open();
          }

          switch (evt[_this.keySource]) {
            case 27:
            case 'Escape':
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();

              _this.close();

              break;

            case 38:
            case 'ArrowUp':
              evt.preventDefault();
              console.log('select previous option');
              break;

            case 40:
            case 'ArrowDown':
              evt.preventDefault();
              console.log('select next option');
              break;

            default:
              return;
          }
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).inputHandler = function (evt) {
          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();

          var query = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).inputEl.value;

          if (!query) {
            return;
          }

          var results = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).find(query);

          if (results.length) {
            results.forEach(function (result) {
              return result.displayElement.style.display = '';
            });

            _this.setAttribute('open', '');

            return;
          }

          if (_this.hasAttribute('open')) {
            _this.removeAttribute('open');
          }

          _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).clear();
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyClickHandler = function (evt) {
          if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
            return;
          }

          _this.removeAttribute('open');
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).getOptionById = function (id) {
          var options = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).options;

          var option;

          for (var i = 0; i < options.length; i++) {
            if (options[i].id === id) {
              option = options[i];
              break;
            }
          }

          return option;
        };

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateOptionObject = function (optionEl) {
          if (!customElements.get('chassis-option')) {
            console.error("chassis-datalist requires chassis-option. Please include it in this document's <head> element.");
            return;
          }

          var obj = {
            id: _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid('option'),
            attributes: {},
            sourceElement: optionEl
          };
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = optionEl.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var attr = _step.value;
              obj.attributes[attr.name] = attr.value;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return obj;
        };

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          _.get(this).inputEl.addEventListener('focus', function (evt) {
            _this2.addEventListener('keydown', _.get(_this2).keydownHandler);
          });

          _.get(this).inputEl.addEventListener('input', _.get(this).inputHandler);

          _.get(this).inputEl.addEventListener('click', _.get(this).clickHandler);

          _.get(this).inputEl.addEventListener('blur', function (evt) {
            _this2.clickCount = 0;

            _this2.removeEventListener('keydown', _.get(_this2).keydownHandler);
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
        key: "addChildren",
        value: function addChildren(children) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;
              this.addOption(child instanceof HTMLElement ? _.get(this).generateOptionObject(child) : child);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "addOption",
        value: function addOption(option, index) {
          var _this3 = this;

          var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.get(this).optionsEl;

          if (!customElements.get('chassis-option')) {
            console.error("chassis-datalist requires chassis-option. Please include it in this document's <head> element.");
            return;
          }

          if (!option.hasOwnProperty('id')) {
            option.id = _.get(this).generateGuid('option');
          }

          if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
            var sourceEl = document.createElement('option');

            if (option.hasOwnProperty('innerHTML')) {
              sourceEl.innerHTML = option.innerHTML;
            }

            if (option.hasOwnProperty('label')) {
              sourceEl.innerHTML = option.label;
            }

            if (option.hasOwnProperty('value')) {
              sourceEl.value = option.value;
            }

            if (option.hasOwnProperty('disabled')) {
              sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled;
            }

            option.sourceElement = sourceEl;
          }

          var label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim();
          var value = option.sourceElement.getAttribute('value');
          var disabled = option.sourceElement.disabled;
          var chassisOption = document.createElement('chassis-option');
          chassisOption.style.display = 'none';
          chassisOption.key = option.id;
          chassisOption.innerHTML = option.sourceElement.innerHTML;
          dest.appendChild(chassisOption);
          chassisOption.addEventListener('click', function (evt) {
            return _this3.select(chassisOption.key);
          });
          option = {
            attributes: {
              disabled: disabled,
              label: label,
              value: value
            },
            id: option.id,
            displayElement: chassisOption,
            sourceElement: option.sourceElement
          };

          if (index) {
            this["".concat(index)] = option.sourceElement;

            _.get(this).options.splice(index, 0, option);

            return;
          }

          this["".concat(_.get(this).options.length)] = option.sourceElement;

          _.get(this).options.push(option);
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
              console.log(attr); // _.get(this).setBooleanAttributeValue(attr, newValue)

              break;

            case 'name':
              console.log(attr); // _.get(this).setAttributeValue(attr, newValue)

              break;

            case 'open':
              this.isOpen ? this.open() : this.close();
              break;
          }
        }
      }, {
        key: "close",
        value: function close() {
          document.body.removeEventListener('click', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.removeEventListener('touchend', _.get(this).bodyClickHandler);

          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      }, {
        key: "open",
        value: function open() {
          document.body.addEventListener('click', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchcancel', _.get(this).bodyClickHandler);
          document.body.addEventListener('touchend', _.get(this).bodyClickHandler);

          if (!this.isOpen) {
            this.isOpen = true;
          }
        }
      }, {
        key: "inject",
        value: function inject(input, datalist, guid) {
          _.get(this).sourceEl = datalist;
          _.get(this).inputEl = input;
          _.get(this).inputEl.slot = 'input';
          _.get(this).inputEl.id = guid;
          this.appendChild(_.get(this).inputEl);
          _.get(this).optionsEl = document.createElement('chassis-options');
          _.get(this).optionsEl.slot = 'options';
          this.appendChild(_.get(this).optionsEl);
          this.addChildren(datalist.options);
        }
      }, {
        key: "select",
        value: function select(id) {
          var option = _.get(this).getOptionById(id);

          if (option) {
            option.sourceElement.selected = true;
            _.get(this).inputEl.value = option.displayElement.innerHTML;
            _.get(this).selectedOption = option;

            _.get(this).options.forEach(function (option) {
              return option.displayElement.removeAttribute('selected');
            });

            option.displayElement.setAttribute('selected', '');
            this.dispatchEvent(new Event('input', {
              bubbles: true
            }));
            this.close();
          }
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.hasAttribute('open');
        },
        set: function set(bool) {
          bool ? this.setAttribute('open', '') : this.removeAttribute('open');
        }
      }, {
        key: "value",
        get: function get() {
          return _.get(this).inputEl.value;
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['autofocus', 'case-sensitive', 'disabled', 'name', 'open', 'tabindex'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(0);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(3);

var setPrototypeOf = __webpack_require__(0);

var isNativeFunction = __webpack_require__(11);

var construct = __webpack_require__(12);

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
/* 11 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(0);

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
//# sourceMappingURL=chassis-datalist-es5-bundle.js.map