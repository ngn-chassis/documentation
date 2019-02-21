"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-draggable',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex}:host *,:host :after,:host :before{box-sizing:border-box}:host([dragging]){position:fixed;z-index:2147483647}:host([clone]){contain:content}author-draggable{display:flex}author-draggable *,author-draggable :after,author-draggable :before{box-sizing:border-box}author-draggable[dragging]){position:fixed;z-index:2147483647}author-draggable[clone]){contain:content}</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      type: {
        default: null
      }
    });

    _this.UTIL.defineProperties({
      clone: {
        private: true,
        default: null
      },
      cursorOffset: {
        private: true,
        default: null
      },
      dragIsActive: {
        private: true,
        default: false
      },
      dimensions: {
        private: true,
        readonly: true,
        get: function get() {
          return _this.getBoundingClientRect();
        }
      },
      pointerEventsSupported: {
        private: true,
        readonly: true,
        default: window.PointerEvent === undefined ? false : true
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
      appendClone: function appendClone() {
        _this.PRIVATE.clone = _this.cloneNode(true);

        _this.PRIVATE.clone.setAttribute('clone', '');

        var lastChild = !_this.nextElementSibling;
        var onlyChild = !_this.previousElementSibling && lastChild;

        if (lastChild || onlyChild) {
          _this.parentNode.appendChild(_this.PRIVATE.clone);
        } else {
          _this.parentNode.insertBefore(_this.PRIVATE.clone, (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }
      },
      forwardEvent: function forwardEvent(evt, newEvtName) {
        var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        evt.preventDefault();

        if (!_this.PRIVATE.pointerEventsSupported) {
          _this.emit(newEvtName, detail, (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }
      },
      initiateDrag: function initiateDrag() {
        var _this$PRIVATE$dimensi = _this.PRIVATE.dimensions,
            width = _this$PRIVATE$dimensi.width,
            height = _this$PRIVATE$dimensi.height;

        _this.UTIL.setStyleProperties('dragging', [{
          name: 'width',
          value: "".concat(width, "px")
        }, {
          name: 'height',
          value: "".concat(height, "px")
        }]);

        _this.setAttribute('dragging', '');

        _this.PRIVATE.dragIsActive = true;

        _this.emit('after.drag.start');
      },
      pointerMoveHandler: function pointerMoveHandler(evt) {
        if (!_this.PRIVATE.dragIsActive) {
          _this.emit('drag.start');

          _this.PRIVATE.appendClone();

          _this.PRIVATE.initiateDrag();
        }

        _this.emit('drag.active', evt);

        _this.PRIVATE.updatePosition(evt);
      },
      reset: function reset() {
        _this.parentNode.removeChild(_this.PRIVATE.clone);

        _this.PRIVATE.clone = null;

        _this.removeAttribute('dragging');

        _this.UTIL.removeStyleProperties('dragging', ['width', 'height', 'left', 'top']);

        _this.PRIVATE.dragIsActive = false;
        _this.PRIVATE.cursorOffset = null;
        document.removeEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      },
      updatePosition: function updatePosition(evt) {
        var cursorOffset = _this.PRIVATE.cursorOffset;

        _this.UTIL.setStyleProperty('dragging', 'left', "".concat(evt.clientX - cursorOffset.x, "px"));

        _this.UTIL.setStyleProperty('dragging', 'top', "".concat(evt.clientY - cursorOffset.y, "px"));
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.UTIL.insertStyleRules({
          dragging: ':host([dragging]) {}',
          clone: ':host([clone]) {}'
        });
      },
      mousedown: function mousedown(evt) {
        if (_this.PRIVATE.userIsTouching) {
          return evt.preventDefault();
        }

        console.log('mousedown');

        _this.PRIVATE.forwardEvent(evt, 'pointerdown');
      },
      touchstart: function touchstart(evt) {
        console.log('touchstart');
        evt.preventDefault();
        _this.PRIVATE.userIsTouching = true;

        _this.PRIVATE.forwardEvent(evt, 'pointerdown');
      },
      pointerdown: function pointerdown(evt) {
        console.log('pointerdown');
        _this.PRIVATE.cursorOffset = {
          x: evt.clientX - _this.PRIVATE.dimensions.left,
          y: evt.clientY - _this.PRIVATE.dimensions.top
        };
        document.addEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      }
    });

    _this.UTIL.registerListeners(document, {
      mouseup: function mouseup(evt) {
        return document.removeEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      },
      touchend: function touchend(evt) {
        return document.removeEventListener(_this.PRIVATE.pointerEventsSupported ? 'pointermove' : 'mousemove', _this.PRIVATE.pointerMoveHandler);
      },
      pointerup: function pointerup(evt) {
        if (!_this.PRIVATE.dragIsActive) {
          return _this.emit('after.drag.end', evt);
        }

        _this.PRIVATE.reset();

        _this.emit('drag.end', evt);
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['type'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));