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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(10));

var AuthorAudioPlayerElement =
/*#__PURE__*/
function (_HTMLElement) {
  (0, _inherits2.default)(AuthorAudioPlayerElement, _HTMLElement);

  function AuthorAudioPlayerElement() {
    var _this;

    (0, _classCallCheck2.default)(this, AuthorAudioPlayerElement);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthorAudioPlayerElement).call(this));

    _this.UTIL.defineProperties({
      playlist: {
        private: true,
        default: null
      },
      currentSong: {
        private: true,
        default: null
      }
    });

    _this.UTIL.definePrivateMethods({
      playButtonClickHandler: function playButtonClickHandler(evt) {
        evt.preventDefault();

        _this.play();
      },
      stopButtonClickHandler: function stopButtonClickHandler(evt) {
        evt.preventDefault();

        _this.stop();
      },
      pauseButtonClickHandler: function pauseButtonClickHandler(evt) {
        evt.preventDefault();

        _this.pause();
      },
      initializeButton: function initializeButton(button) {
        if (!button.hasAttribute('function')) {
          return;
        }

        var buttonFunction = button.getAttribute('function');

        switch (buttonFunction) {
          case 'play':
            _this.playButton = button;
            break;

          case 'stop':
            _this.stopButton = button;
            break;

          case 'pause':
            _this.pauseButton = button;
            break;

          default:
            return;
        }
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        if (typeof Howler === 'undefined' || typeof Howl === 'undefined') {
          return _this.UTIL.throwError({
            type: 'dependency',
            vars: {
              name: 'Howler',
              url: 'https://github.com/goldfire/howler.js/'
            }
          });
        }
      },
      disconnected: function disconnected() {
        if (_this.playButton) {
          _this.playButton.removeEventListener('click', _this.PRIVATE.playButtonClickHandler);
        }

        if (_this.stopButton) {
          _this.stopButton.removeEventListener('click', _this.PRIVATE.stopButtonClickHandler);
        }

        if (_this.pauseButton) {
          _this.pauseButton.removeEventListener('click', _this.PRIVATE.pauseButtonClickHandler);
        }
      },
      rendered: function rendered() {
        for (var child in _this.children) {
          var element = _this.children[child];

          switch (element.localName) {
            case 'button':
              _this.PRIVATE.initializeButton(element);

              break;

            default:
              continue;
          }
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(AuthorAudioPlayerElement, [{
    key: "play",
    value: function play() {
      var currentSong = this.PRIVATE.currentSong;
      return currentSong ? currentSong.audio.play() : null;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.PRIVATE.currentSong.audio.stop();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.PRIVATE.currentSong.audio.pause();
    }
  }, {
    key: "currentSong",
    get: function get() {
      return this.PRIVATE.currentSong;
    },
    set: function set(songId) {
      var song = this.PRIVATE.playlist.find(function (song) {
        return song.id === songId;
      });

      if (!song) {
        return this.throwError({
          message: "Song \"".concat(id, "\" not found in playlist")
        });
      }

      this.PRIVATE.currentSong = song;
    }
  }, {
    key: "playButton",
    get: function get() {
      return this.PRIVATE.playButton;
    },
    set: function set(button) {
      this.PRIVATE.playButton = button;
      button.addEventListener('click', this.PRIVATE.playButtonClickHandler);
    }
  }, {
    key: "stopButton",
    get: function get() {
      return this.PRIVATE.stopButton;
    },
    set: function set(button) {
      this.PRIVATE.stopButton = button;
      button.addEventListener('click', this.PRIVATE.stopButtonClickHandler);
    }
  }, {
    key: "pauseButton",
    get: function get() {
      return this.PRIVATE.pauseButton;
    },
    set: function set(button) {
      this.PRIVATE.pauseButton = button;
      button.addEventListener('click', this.PRIVATE.pauseButtonClickHandler);
    }
  }, {
    key: "playlist",
    get: function get() {
      return this.PRIVATE.playlist.map(function (song) {
        return {
          title: song.title,
          artist: song.artist,
          path: song.path
        };
      });
    },
    set: function set(playlist) {
      var _this2 = this;

      if (!Array.isArray(playlist)) {
        return this.UTIL.throwError({
          type: 'type',
          message: 'Playlist must be an array!'
        });
      }

      this.PRIVATE.playlist = playlist.map(function (song) {
        if (!song.hasOwnProperty('path')) {
          _this2.UTIL.throwError({
            message: 'Song must include a "path" property!'
          });

          return false;
        }

        if (!song.hasOwnProperty('id')) {
          song.id = _this2.UTIL.generateGuid('song_');
        }

        var audio = new Howl({
          src: song.path
        });
        audio.on('play', function () {
          console.log('song started');
        });
        audio.on('stop', function () {
          console.log('song stopped');
        });
        audio.on('pause', function () {
          console.log('song paused');
        });
        return {
          id: song.id,
          title: song.title || null,
          artist: song.artist || null,
          path: song.path,
          audio: audio
        };
      });
      this.PRIVATE.currentSong = this.PRIVATE.playlist[0];
    }
  }]);
  return AuthorAudioPlayerElement;
}((0, _wrapNativeSuper2.default)(HTMLElement));

customElements.define('author-audio-player', AuthorAudioPlayerElement);

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

var assertThisInitialized = __webpack_require__(1);

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

var getPrototypeOf = __webpack_require__(2);

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
//# sourceMappingURL=author-audio-player-es5-bundle.js.map