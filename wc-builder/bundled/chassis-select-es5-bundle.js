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
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

var _typeof2 = _interopRequireDefault(__webpack_require__(2));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(0));

var _get2 = _interopRequireDefault(__webpack_require__(9));

var _inherits2 = _interopRequireDefault(__webpack_require__(11));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(3));

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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  display: inline-block;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\nchassis-select {\n  display: inline-block;\n  max-width: 100%;\n}\n\nchassis-select *,\nchassis-select *:before,\nchassis-select *:after {\n  box-sizing: border-box;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeselectedoptions\"></slot><slot name=\"selectedoptions\"></slot><slot name=\"afterselectedoptions\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
              return console.error('ERROR <chassis-select> Read-only property must be type "object" or "string"');
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
            var message = 'ERROR <chassis-select> ';

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

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperties(['form', {
          name: 'hoveredIndex',
          get: function get() {
            return this.optionsElement.hoveredIndex;
          }
        }, 'labels', {
          name: 'options',
          get: function get() {
            return this.optionsElement.displayOptions;
          }
        }, 'optionsElement', {
          name: 'selectedOptions',
          get: function get() {
            return this.optionsElement ? this.optionsElement.selectedOptions : null;
          }
        }, 'selectedOptionsElement', 'sourceElement', {
          name: 'type',
          get: function get() {
            return this.multiple ? 'select-multiple' : 'select-one';
          }
        }, 'willValidate', 'validationMessage', 'validity']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttributes(['name', 'placeholder']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttributes(['autofocus', 'disabled', 'multiple', 'open', 'required']);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          injected: false,
          title: '',
          addOpenListeners: function addOpenListeners() {
            document.body.addEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
            document.body.addEventListener('touchcancel', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
            document.body.addEventListener('touchend', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
          },
          blurHandler: function blurHandler(evt) {
            return _this.removeEventListener('keydown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).keydownHandler);
          },
          bodyMousedownHandler: function bodyMousedownHandler(evt) {
            if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
              return;
            }

            _this.open = false;
          },
          focusHandler: function focusHandler(evt) {
            return _this.addEventListener('keydown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).keydownHandler);
          },
          keydownHandler: function keydownHandler(evt) {
            var startIndex = _this.hoveredIndex > -1 ? _this.hoveredIndex : _this.selectedIndex > -1 ? _this.selectedIndex : -1;

            switch (evt[_this.keySource]) {
              case 13:
              case 'Enter':
              case 32:
              case ' ':
                evt.preventDefault();

                if (!_this.multiple) {
                  if (!_this.open && (evt[_this.keySource] === 32 || evt[_this.keySource] === ' ')) {
                    _this.open = true;
                    return;
                  }

                  if (_this.hoveredIndex === _this.selectedIndex || _this.hoveredIndex === -1) {
                    _this.open = false;
                    return;
                  }

                  _this.selectedIndex = _this.hoveredIndex;
                }

                return;

              case 38:
              case 'ArrowUp':
                evt.preventDefault();

                if (!_this.multiple && !_this.open) {
                  _this.open = true;
                  return;
                }

                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('keydown.arrowUp', {
                  shiftKey: evt.shiftKey,
                  startIndex: startIndex
                }, _this.optionsElement);

              case 40:
              case 'ArrowDown':
                evt.preventDefault();

                if (!_this.multiple && !_this.open) {
                  _this.open = true;
                  return;
                }

                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('keydown.arrowDown', {
                  shiftKey: evt.shiftKey,
                  startIndex: startIndex
                }, _this.optionsElement);

              default:
                return;
            }
          },
          middleware: {
            beforeChange: null,
            afterChange: null
          },
          optionSelectionHandler: function optionSelectionHandler(evt) {
            evt.stopPropagation();

            var afterChange = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).middleware.afterChange;

            _this.dispatchEvent(new Event('change', {}));

            if (_this.open) {
              _this.removeAttribute('open');
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).emit('options.selected', evt.detail.options, _this.selectedOptionsElement);

            if (afterChange && typeof afterChange === 'function') {
              afterChange(evt.detail.previous, _this.selectedOptions);
            }
          },
          removeOpenListeners: function removeOpenListeners() {
            document.body.removeEventListener('mousedown', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
            document.body.removeEventListener('touchcancel', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
            document.body.removeEventListener('touchend', _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).bodyMousedownHandler);
          },
          stateChangeHandler: function stateChangeHandler(evt) {
            var _evt$detail = evt.detail,
                name = _evt$detail.name,
                value = _evt$detail.value;

            switch (name) {
              case 'open':
                if (!value) {
                  return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).removeOpenListeners();
                }

                if (_this.multiple) {
                  console.warn('WARNING <chassis-select multiple> cannot be opened.');
                  return _this.removeAttribute('open');
                }

                _this.optionsElement.unHoverAllOptions();

                return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addOpenListeners();

              case 'multiple':
                if (value && _this.hasAttribute('open')) {
                  _this.removeAttribute('open');
                }

                break;

              default:
                return;
            }
          },
          throwSizeAttributeWarning: function throwSizeAttributeWarning() {
            console.warn('WARNING <chassis-select> "size" attribute is not supported. Please use CSS to set the height of the options panel instead.');
          },
          toggleHandler: function toggleHandler(evt) {
            return _this.open = !_this.open;
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
            case 'multiple':
              return _.get(this).emit('state.change', {
                name: 'multiple',
                value: this.multiple
              });

            case 'open':
              return _.get(this).emit('state.change', {
                name: 'open',
                value: this.open
              });

            case 'placeholder':
              this.placeholder = newValue;

              if (this.selectedOptionsElement) {
                this.selectedOptionsElement.update();
              }

              break;

            case 'size':
              return _.get(this).throwSizeAttributeWarning();

            default:
              return;
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
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          this.addEventListener('blur', _.get(this).blurHandler);
          this.addEventListener('focus', _.get(this).focusHandler);
          this.addEventListener('state.change', _.get(this).stateChangeHandler);
          this.addEventListener('toggle', _.get(this).toggleHandler);
          this.addEventListener('options.selected', _.get(this).optionSelectionHandler);
          setTimeout(function () {
            if (!_this2.hasAttribute('tabindex')) {
              _this2.setAttribute('tabindex', 0);
            }

            _this2.autofocus && _this2.focus(); // TEMP

            _this2.parentNode.parentNode.insertBefore(_.get(_this2).sourceElement, _this2.nextSibling);
          }, 0);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.removeEventListener('blur', _.get(this).blurHandler);
          this.removeEventListener('focus', _.get(this).focusHandler);
          this.addEventListener('state.change', _.get(this).stateChangeHandler);
          this.removeEventListener('toggle', _.get(this).toggleHandler);
          this.removeEventListener('options.selected', _.get(this).optionSelectionHandler);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this.optionsElement.deselectAll();
        }
      }, {
        key: "inject",
        value: function inject(select, labels) {
          // Prevent re-injections
          if (_.get(this).injected) {
            return;
          }

          var selectedOptionsElement = document.createElement('chassis-selected-options');
          selectedOptionsElement.slot = 'selectedoptions';
          var optionsElement = document.createElement('chassis-options');
          optionsElement.slot = 'options';
          Object.assign(_.get(this), {
            sourceElement: select,
            optionsElement: optionsElement,
            selectedOptionsElement: selectedOptionsElement,
            labels: labels
          });
          this.appendChild(_.get(this).selectedOptionsElement);
          this.appendChild(_.get(this).optionsElement);

          if (select.children.length > 0) {
            if (!this.multiple) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = select.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var option = _step.value;

                  if (option.index !== select.selectedIndex) {
                    option.removeAttribute('selected');
                  }
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
            }

            this.optionsElement.addChildren(select.children);

            if (!this.multiple) {
              this.selectedOptionsElement.add(this.optionsElement.options[this.selectedIndex]);
            }
          }

          _.get(this).injected = true;
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
        key: "afterChange",
        get: function get() {
          return _.get(this).middleware.afterChange;
        },
        set: function set(func) {
          _.get(this).middleware.afterChange = func.bind(this);
        }
      }, {
        key: "beforeChange",
        get: function get() {
          return _.get(this).middleware.beforeChange;
        },
        set: function set(func) {
          _.get(this).middleware.beforeChange = func.bind(this);
        }
      }, {
        key: "length",
        get: function get() {
          return this.options.length;
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
        key: "size",
        get: function get() {
          _.get(this).throwSizeAttributeWarning();

          return null;
        },
        set: function set(value) {
          _.get(this).throwSizeAttributeWarning();
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
          return ['autofocus', 'disabled', 'multiple', 'name', 'open', 'placeholder', 'tabindex', 'size'];
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

var _typeof = __webpack_require__(2);

var assertThisInitialized = __webpack_require__(3);

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