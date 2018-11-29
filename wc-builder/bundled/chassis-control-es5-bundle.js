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

customElements.define('chassis-control', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";\n\n:host {\n  display: flex;\n  contain: layout style;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\n:host .hidden {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([type=\"field\"]) {\n  flex-direction: column;\n}\n\n:host([type=\"toggle\"]) {\n  align-items: center;\n}\n\n:host .label-wrapper {\n  flex: 1 1 auto;\n  display: flex;\n}\n\n:host .input-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n:host([type=\"toggle\"]) .input-wrapper {\n  order: -1;\n  justify-content: center;\n}\n\n:host([type=\"select\"]) {\n  flex-direction: column;\n}\n\nchassis-control {\n  display: flex;\n  contain: layout style;\n  max-width: 100%;\n}\n\nchassis-control *,\nchassis-control *:before,\nchassis-control *:after {\n  box-sizing: border-box;\n}\n\nchassis-control .hidden {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n}\n\nchassis-control[type=\"field\"] {\n  flex-direction: column;\n}\n\nchassis-control[type=\"toggle\"] {\n  align-items: center;\n}\n\nchassis-control .label-wrapper {\n  flex: 1 1 auto;\n  display: flex;\n}\n\nchassis-control .input-wrapper {\n  display: flex;\n  align-items: center;\n}\n\nchassis-control[type=\"toggle\"] .input-wrapper {\n  order: -1;\n  justify-content: center;\n}\n\nchassis-control[type=\"select\"] {\n  flex-direction: column;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabelwrapper\"></slot><div class=\"label-wrapper\"><slot name=\"beforelabel\"></slot><slot name=\"label\"></slot><slot name=\"afterlabel\"></slot></div><slot name=\"afterlabelwrapper\"></slot><slot name=\"beforeinputwrapper\"></slot><div class=\"input-wrapper\"><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot></div><slot name=\"afterinputwrapper\"></slot><slot name=\"beforeend\"></slot></template>");
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
              return console.error('ERROR <chassis-control> Read-only property must be type "object" or "string"');
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
            var message = 'ERROR <chassis-control> ';

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

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          fieldInputTypes: ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'],
          toggleInputTypes: ['checkbox', 'radio'],
          supportedTypes: ['field', 'toggle', 'select'],
          input: null,
          initDatalist: function initDatalist(input, datalist) {
            _this.type = 'field';

            if (!customElements.get('chassis-datalist')) {
              console.dir(input);
              input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
              datalist.id = "".concat(input.id, "_datalist");
              input.setAttribute('list', datalist.id);
              input.slot = input.slot || 'input'; // select.setAttribute('role', 'menu')

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
              var titleEls = datalist.querySelectorAll('option[title]');
              titleEls.forEach(function (el) {
                return select.removeChild(el);
              });
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = datalist.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var option = _step.value;

                  if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                    option.removeAttribute('label');
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

              return;
            }

            var surrogate = document.createElement('chassis-datalist');
            surrogate.slot = 'input';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = datalist.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attr = _step2.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    datalist.removeAttribute(attr.name);
                  }
                }
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

            _this.removeChild(datalist);

            _this.removeChild(input);

            surrogate.inject(input, datalist, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid);

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initInput: function initInput(input) {
            input.slot = input.slot || 'input';
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
            input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).fieldInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'field';
            }

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).toggleInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'toggle';
            }
          },
          initLabel: function initLabel(label) {
            _this.label = label;
            label.slot = label.slot || 'label';
            label.htmlFor = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_this.type === 'select') {
              _this.label.addEventListener('click', function (evt) {
                _this.input.focus();
              });
            }
          },
          initDefaultSelect: function initDefaultSelect(select) {
            select.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            select.slot = select.slot || 'input';
            select.setAttribute('role', 'menu');
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = select; // Purge incompatible attributes

            var titleEls = select.querySelectorAll('option[title]');
            titleEls.forEach(function (el) {
              return select.removeChild(el);
            });
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = select.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var option = _step3.value;

                if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                  option.removeAttribute('label');
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          },
          initMultipleSelectMenu: function initMultipleSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          },
          initSelectSurrogate: function initSelectSurrogate(original, surrogate) {
            surrogate.slot = 'input';
            surrogate.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = original.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var attr = _step4.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    original.removeAttribute(attr.name);
                  }
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this.removeChild(original);

            surrogate.inject(original, _this.querySelectorAll('label'));

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initSelectMenu: function initSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          }
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          _.get(this).guid = _.get(this).generateGuid('control');
          var observer = new MutationObserver(function (mutations, observer) {
            var filtered = mutations.filter(function (record) {
              return record.addedNodes.item(0).nodeType !== 3;
            });
            filtered.forEach(function (record, index, array) {
              var node = record.addedNodes.item(0);

              switch (node.nodeName) {
                case 'LABEL':
                  return _.get(_this2).initLabel(node);

                case 'INPUT':
                  // Check if there is an additional element adjacent to the input
                  if (array[index + 1] === void 0) {
                    return _.get(_this2).initInput(node);
                  }

                  var adjacentElement = array[index + 1].addedNodes.item(0);

                  if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
                    return _.get(_this2).initInput(node);
                  }

                  return _.get(_this2).initDatalist(node, adjacentElement);

                case 'TEXTAREA':
                  return _.get(_this2).initInput(node);

                case 'SELECT':
                  if (!node.multiple) {
                    return _.get(_this2).initSelectMenu(node);
                  }

                  return _.get(_this2).initMultipleSelectMenu(node);

                default:
                  return;
              }
            });
            observer.disconnect();
          });
          observer.observe(this, {
            childList: true
          });
        }
      }, {
        key: "input",
        get: function get() {
          return _.get(this).input;
        },
        set: function set(input) {
          if (this.input) {
            console.warn("Setting <chassis-control> child input programmatically is not allowed.");
            return;
          }

          _.get(this).input = input;
        }
      }, {
        key: "type",
        get: function get() {
          return this.getAttribute('type');
        },
        set: function set(value) {
          this.setAttribute('type', value);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['disabled'];
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
//# sourceMappingURL=chassis-control-es5-bundle.js.map