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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(4));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(8));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(0));

var AuthorDraggableElement =
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(AuthorDraggableElement, _AuthorElement);

  function AuthorDraggableElement() {
    var _this;

    (0, _classCallCheck2.default)(this, AuthorDraggableElement);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthorDraggableElement).call(this));

    _this.UTIL.defineAttributes({
      direction: {
        default: null
      },
      disabled: {
        default: false
      },
      free: {
        default: false
      },
      'max-drag-distance': {
        default: null
      },
      'min-drag-distance': {
        default: null
      },
      type: {
        default: null
      }
    });

    _this.UTIL.defineProperties({
      acceptedConstraintKeys: {
        private: true,
        readonly: true,
        default: ['x', 'y', 'up', 'right', 'down', 'left']
      },
      canDrop: {
        default: false
      },
      clone: {
        private: true,
        default: null
      },
      constraints: {
        private: true,
        readonly: true,
        get: function get() {
          if (!_this.direction) {
            return null;
          }

          return _this.direction.replace(/\s+/g, ' ').trim().split(' ');
        }
      },
      dimensions: {
        private: true,
        readonly: true,
        get: function get() {
          return _this.getBoundingClientRect();
        }
      },
      dragArea: {
        private: true,
        readonly: true,
        get: function get() {
          var dragAreas = document.querySelectorAll('author-dragarea');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = dragAreas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var dragArea = _step.value;

              if (dragArea.contains((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))) {
                return dragArea;
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

          return document.body;
        }
      },
      dragIsActive: {
        private: true,
        default: false
      },
      pointerEventsSupported: {
        private: true,
        readonly: true,
        default: window.PointerEvent === undefined ? false : true
      },
      pointerOffset: {
        private: true,
        default: null
      },
      userIsTouching: {
        private: true,
        default: false
      },
      types: {
        private: true,
        readonly: true,
        get: function get() {
          if (!_this.type) {
            return null;
          }

          return _this.type.replace(/\s+/g, ' ').trim().split(' ');
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      forwardEvent: function forwardEvent(evt, newEvtName) {
        var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this));
        evt.preventDefault();
        detail.originalEvent = evt;

        if (!_this.PRIVATE.pointerEventsSupported) {
          _this.emit(newEvtName, detail, target);
        }
      },
      // Polyfill for Firefox bug from 2002 :|
      // window.getComputedStyle(el).cssText returns ""
      // https://bugzilla.mozilla.org/show_bug.cgi?id=137687
      getComputedStylesCssText: function getComputedStylesCssText(element) {
        var computed = window.getComputedStyle(element);
        var acc = [];

        if (computed.cssText !== '') {
          return computed.cssText;
        }

        for (var property in computed) {
          if (typeof computed[property] === 'string') {
            acc.push("".concat(property, ": ").concat(computed[property]));
          }
        }

        return acc.join('; ');
      },
      initializeClone: function initializeClone() {
        _this.setAttribute('dragging', '');

        _this.PRIVATE.clone = _this.cloneNode(true);

        _this.removeAttribute('dragging');

        _this.PRIVATE.synchronizeStyles();

        _this.PRIVATE.clone.setAttribute('clone', '');

        document.body.appendChild(_this.PRIVATE.clone);
      },
      pointerupHandler: function pointerupHandler(evt) {
        if (!_this.PRIVATE.dragIsActive) {
          return _this.emit('after.drag.end', evt);
        }

        _this.PRIVATE.reset();

        _this.emit('drag.end', evt);
      },
      mouseupHandler: function mouseupHandler(evt) {
        console.log('mouseup');

        _this.PRIVATE.forwardEvent(evt, 'pointerup', {}, document.body);
      },
      touchendHandler: function touchendHandler(evt) {// document.removeEventListener(this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', this.PRIVATE.pointerMoveHandler)
      },
      applyBodyListeners: function applyBodyListeners() {
        document.body.addEventListener('pointerup', _this.PRIVATE.pointerupHandler);
        document.body.addEventListener('mouseup', _this.PRIVATE.mouseupHandler);
        document.body.addEventListener('touchend', _this.PRIVATE.touchendHandler);
      },
      removeBodyListeners: function removeBodyListeners() {
        document.body.removeEventListener('pointerup', _this.PRIVATE.pointerupHandler);
        document.body.removeEventListener('mouseup', _this.PRIVATE.mouseupHandler);
        document.body.removeEventListener('touchend', _this.PRIVATE.touchendHandler);
        document.body.removeEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      },
      initiateDrag: function initiateDrag() {
        _this.PRIVATE.applyBodyListeners();

        _this.setAttribute(_this.free ? 'dragging' : 'ghost', '');

        _this.PRIVATE.dragIsActive = true;

        _this.emit('after.drag.start');
      },
      pointerMoveHandler: function pointerMoveHandler(evt) {
        if (!_this.PRIVATE.dragIsActive) {
          _this.emit('drag.start');

          if (!_this.free) {
            _this.PRIVATE.initializeClone();
          }

          _this.PRIVATE.initiateDrag();
        }

        _this.emit('drag.active', evt);

        _this.PRIVATE.updatePosition(evt);
      },
      reset: function reset() {
        if (_this.free) {
          _this.removeAttribute('dragging');
        } else {
          _this.removeAttribute('ghost');

          document.body.removeChild(_this.PRIVATE.clone);
          _this.PRIVATE.clone = null;
        }

        _this.PRIVATE.dragIsActive = false;
        _this.PRIVATE.pointerOffset = null;

        _this.PRIVATE.removeBodyListeners();
      },
      synchronizeStyles: function synchronizeStyles() {
        var _this$PRIVATE = _this.PRIVATE,
            clone = _this$PRIVATE.clone,
            getComputedStylesCssText = _this$PRIVATE.getComputedStylesCssText;
        clone.style.cssText = getComputedStylesCssText((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        var children = _this.getElementsByTagName('*');

        var cloneChildren = clone.getElementsByTagName('*');

        if (children.length > 0) {
          for (var i = 0; i < children.length; i++) {
            cloneChildren[i].style.cssText = getComputedStylesCssText(children[i]);
          }
        }
      },
      updatePosition: function updatePosition(evt) {
        var _this$PRIVATE2 = _this.PRIVATE,
            clone = _this$PRIVATE2.clone,
            dimensions = _this$PRIVATE2.dimensions,
            originalCoordinates = _this$PRIVATE2.originalCoordinates,
            pointerOffset = _this$PRIVATE2.pointerOffset;
        var newCoordinates = {
          x: evt.clientX - pointerOffset.x,
          y: evt.clientY - pointerOffset.y
        };

        if (_this.free) {
          newCoordinates = {
            x: newCoordinates.x - (originalCoordinates.x - window.scrollX),
            y: newCoordinates.y - (originalCoordinates.y - window.scrollY)
          };
          return _this.UTIL.setStyleProperty('dragging', 'transform', "translate(".concat(newCoordinates.x, "px, ").concat(newCoordinates.y, "px)"));
        }

        clone.UTIL.setStyleProperties('dragging', [{
          name: 'left',
          value: "".concat(newCoordinates.x, "px"),
          important: true
        }, {
          name: 'top',
          value: "".concat(newCoordinates.y, "px"),
          important: true
        }]);
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      'attribute.changed': function attributeChanged(evt) {
        var _evt$detail = evt.detail,
            attribute = _evt$detail.attribute,
            newValue = _evt$detail.newValue,
            oldValue = _evt$detail.oldValue;

        switch (attribute) {
          case 'free':
            if (!_this.free) {
              _this.UTIL.removeStyleProperty('dragging', 'transform');
            }

            break;
        }
      },
      'drop.permission.granted': function dropPermissionGranted(evt) {
        _this.canDrop = true;
      },
      'drop.permission.denied': function dropPermissionDenied(evt) {
        _this.canDrop = false;
      },
      connected: function connected() {
        _this.UTIL.insertStyleRule('dragging', ':host {}');

        _this.emit('author-draggable.connected', {
          draggable: (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))
        }, window);
      },
      mousedown: function mousedown(evt) {
        if (_this.PRIVATE.userIsTouching) {
          return evt.preventDefault();
        }

        _this.PRIVATE.forwardEvent(evt, 'pointerdown');
      },
      touchstart: function touchstart(evt) {
        evt.preventDefault();
        _this.PRIVATE.userIsTouching = true;

        _this.PRIVATE.forwardEvent(evt, 'pointerdown');
      },
      pointerdown: function pointerdown(evt) {
        var client = {};

        if (evt instanceof CustomEvent) {
          client.x = evt.detail.originalEvent.clientX;
          client.y = evt.detail.originalEvent.clientY;
        } else {
          client.x = evt.clientX;
          client.y = evt.clientY;
        }

        _this.PRIVATE.pointerOffset = {
          x: client.x - _this.PRIVATE.dimensions.left,
          y: client.y - _this.PRIVATE.dimensions.top
        };
        document.body.addEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      },
      rendered: function rendered() {
        _this.UTIL.defineProperty('originalCoordinates', {
          private: true,
          readonly: true,
          default: {
            x: _this.PRIVATE.dimensions.left + window.scrollX,
            y: _this.PRIVATE.dimensions.top + window.scrollY
          }
        });
      }
    });

    return _this;
  }

  (0, _createClass2.default)(AuthorDraggableElement, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['direction', 'disabled', 'free', 'min-drag-distance', 'max-drag-distance', 'type'];
    }
  }]);
  return AuthorDraggableElement;
}(AuthorElement(HTMLElement));

customElements.define('author-draggable', AuthorDraggableElement);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

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
/* 9 */
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
//# sourceMappingURL=author-draggable-es5-bundle.js.map