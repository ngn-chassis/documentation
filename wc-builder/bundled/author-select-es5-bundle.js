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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(3);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(6));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(0));

var _get2 = _interopRequireDefault(__webpack_require__(8));

var _inherits2 = _interopRequireDefault(__webpack_require__(10));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1));

customElements.define('author-select',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:inline-block;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-select{display:inline-block;max-width:100%}author-select *,author-select :after,author-select :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeselectedoptions\"></slot><slot name=\"selectedoptions\"></slot><slot name=\"afterselectedoptions\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineProperties({
      form: {
        readonly: true
      },
      hoveredIndex: {
        readonly: true,
        get: function get() {
          return _this.optionsElement.hoveredIndex;
        }
      },
      injected: {
        private: true,
        default: false
      },
      labels: {
        private: true
      },
      middleware: {
        private: true,
        default: {
          beforeChange: null,
          afterChange: null
        }
      },
      options: {
        readonly: true,
        get: function get() {
          return _this.optionsElement.displayOptions;
        }
      },
      optionsElement: {
        readonly: true,
        get: function get() {
          return _this.querySelector('author-options');
        }
      },
      selectedOptions: {
        readonly: true,
        get: function get() {
          return _this.optionsElement ? _this.optionsElement.selectedOptions : null;
        }
      },
      selectedOptionsElement: {
        readonly: true,
        get: function get() {
          return _this.querySelector('author-selected-options');
        }
      },
      title: {
        private: true,
        default: ''
      },
      type: {
        readonly: true,
        get: function get() {
          return _this.multiple ? 'select-multiple' : 'select-one';
        }
      },
      willValidate: {
        readonly: true
      },
      validationMessage: {
        readonly: true
      },
      validity: {
        readonly: true
      }
    });

    _this.UTIL.defineAttributes({
      name: '',
      placeholder: '',
      autofocus: false,
      disabled: false,
      multiple: false,
      open: false,
      required: false,
      size: {
        get: function get() {
          return _this.PRIVATE.throwSizeAttributeWarning();
        },
        set: function set() {
          return _this.PRIVATE.throwSizeAttributeWarning();
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      addOpenListeners: function addOpenListeners() {
        document.body.addEventListener('mousedown', _this.PRIVATE.bodyMousedownHandler);
        document.body.addEventListener('touchcancel', _this.PRIVATE.bodyMousedownHandler);
        document.body.addEventListener('touchend', _this.PRIVATE.bodyMousedownHandler);
      },
      blurHandler: function blurHandler(evt) {
        return _this.off('keydown', _this.PRIVATE.keydownHandler);
      },
      bodyMousedownHandler: function bodyMousedownHandler(evt) {
        if (evt.target === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)) || _this.contains(evt.target)) {
          return;
        }

        _this.open = false;
      },
      focusHandler: function focusHandler(evt) {
        return _this.on('keydown', _this.PRIVATE.keydownHandler);
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

            break;

          case 38:
          case 'ArrowUp':
            evt.preventDefault();

            if (!_this.multiple && !_this.open) {
              _this.open = true;
              return;
            }

            return _this.emit('keydown.arrowUp', {
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

            return _this.emit('keydown.arrowDown', {
              shiftKey: evt.shiftKey,
              startIndex: startIndex
            }, _this.optionsElement);

          default:
            return;
        }
      },
      optionSelectionHandler: function optionSelectionHandler(evt) {
        evt.stopPropagation();
        var afterChange = _this.PRIVATE.middleware.afterChange;

        _this.dispatchEvent(new Event('change', {}));

        if (_this.open) {
          _this.removeAttribute('open');
        }

        _this.emit('options.selected', evt.detail.options, _this.selectedOptionsElement);

        if (afterChange && typeof afterChange === 'function') {
          afterChange(evt.detail.previous, _this.selectedOptions);
        }
      },
      removeOpenListeners: function removeOpenListeners() {
        document.body.removeEventListener('mousedown', _this.PRIVATE.bodyMousedownHandler);
        document.body.removeEventListener('touchcancel', _this.PRIVATE.bodyMousedownHandler);
        document.body.removeEventListener('touchend', _this.PRIVATE.bodyMousedownHandler);
      },
      stateChangeHandler: function stateChangeHandler(evt) {
        var _evt$detail = evt.detail,
            name = _evt$detail.name,
            value = _evt$detail.value;

        switch (name) {
          case 'open':
            if (!value) {
              return _this.PRIVATE.removeOpenListeners();
            }

            if (_this.multiple) {
              return _this.removeAttribute('open');
            }

            _this.optionsElement.unHoverAllOptions();

            return _this.PRIVATE.addOpenListeners();

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
        _this.UTIL.printToConsole("\"size\" attribute is not supported. Please use CSS to set the height of the options panel instead.", 'warning');
      },
      toggleHandler: function toggleHandler(evt) {
        return _this.open = !_this.open;
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      'attribute.change': function attributeChange(evt) {
        var _evt$detail2 = evt.detail,
            attribute = _evt$detail2.attribute,
            oldValue = _evt$detail2.oldValue,
            newValue = _evt$detail2.newValue;

        if (newValue === oldValue) {
          return;
        }

        switch (attribute) {
          case 'multiple':
            return _this.emit('state.change', {
              name: 'multiple',
              value: _this.multiple
            });

          case 'open':
            return _this.emit('state.change', {
              name: 'open',
              value: _this.open
            });

          case 'placeholder':
            if (_this.selectedOptionsElement) {
              _this.selectedOptionsElement.update();
            }

            break;

          case 'size':
            return _this.PRIVATE.throwSizeAttributeWarning();

          default:
            return;
        }
      },
      blur: _this.PRIVATE.blurHandler,
      focus: _this.PRIVATE.focusHandler,
      'options.selected': _this.PRIVATE.optionSelectionHandler,
      'state.change': _this.PRIVATE.stateChangeHandler,
      toggle: _this.PRIVATE.toggleHandler,
      rendered: function rendered() {
        if (!_this.hasAttribute('tabindex')) {
          _this.setAttribute('tabindex', 0);
        }

        _this.autofocus && _this.focus();
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
    key: "deselectAll",
    value: function deselectAll() {
      this.optionsElement.deselectAll();
    }
  }, {
    key: "inject",
    value: function inject(select, labels) {
      // Prevent re-injections
      if (this.PRIVATE.injected) {
        return;
      }

      this.UTIL.defineProperty('sourceElement', {
        readonly: true,
        default: select
      });
      var selectedOptionsElement = document.createElement('author-selected-options');
      selectedOptionsElement.slot = 'selectedoptions';
      var optionsElement = document.createElement('author-options');
      optionsElement.slot = 'options';
      this.PRIVATE.labels = labels;
      this.appendChild(selectedOptionsElement);
      this.appendChild(optionsElement);

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

        this.optionsElement.addOptions(select.children);

        if (!this.multiple) {
          this.selectedOptionsElement.add(this.optionsElement.options[this.selectedIndex]);
        }
      }

      this.PRIVATE.injected = true;
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
      return 'AuthorSelectElement';
    }
  }, {
    key: "afterChange",
    get: function get() {
      return this.PRIVATE.middleware.afterChange;
    },
    set: function set(func) {
      this.PRIVATE.middleware.afterChange = func.bind(this);
    }
  }, {
    key: "beforeChange",
    get: function get() {
      return this.PRIVATE.middleware.beforeChange;
    },
    set: function set(func) {
      this.PRIVATE.middleware.beforeChange = func.bind(this);
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
}(AuthorElement(HTMLElement)));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

var superPropBase = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ })
/******/ ]);
//# sourceMappingURL=author-select-es5-bundle.js.map