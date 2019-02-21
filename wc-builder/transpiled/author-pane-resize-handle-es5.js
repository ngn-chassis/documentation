"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-pane-resize-handle',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;cursor:row-resize}:host *,:host :after,:host :before{box-sizing:border-box}:host-context(author-pane[horizontal]){cursor:col-resize}author-pane-resize-handle{display:flex;cursor:row-resize}author-pane-resize-handle *,author-pane-resize-handle :after,author-pane-resize-handle :before{box-sizing:border-box}author-pane-resize-handle-context(author-pane[horizontal]){cursor:col-resize}</style><slot></slot></template>"));

    _this.UTIL.defineProperties({
      initialized: {
        private: true,
        default: false
      },
      maxSize: {
        private: true,
        default: null
      },
      startPosition: {
        private: true,
        default: null
      },
      offset: {
        private: true,
        default: null
      }
    });

    _this.UTIL.definePrivateMethods({
      cleanupMouseEventHandlers: function cleanupMouseEventHandlers() {
        document.removeEventListener('mousemove', _this.PRIVATE.globalMousemoveHandler);
        document.removeEventListener('mouseup', _this.PRIVATE.globalMouseupHandler);
      },
      generatePercentage: function generatePercentage(value) {
        return "".concat(value / _this.parentNode.totalSize * 100, "%");
      },
      globalMousemoveHandler: function globalMousemoveHandler(evt) {
        var mousePosition = _this.PRIVATE.axis === 'x' ? evt.clientX : evt.clientY;

        if (mousePosition === _this.PRIVATE.startPosition) {
          return;
        }

        var totalSize = _this.parentNode.totalSize;
        var _this$PRIVATE = _this.PRIVATE,
            previousPane = _this$PRIVATE.previousPane,
            nextPane = _this$PRIVATE.nextPane,
            maxSize = _this$PRIVATE.maxSize,
            offset = _this$PRIVATE.offset,
            generatePercentage = _this$PRIVATE.generatePercentage,
            handleResize = _this$PRIVATE.handleResize;
        var previousSize = mousePosition - offset.previous - previousPane.dimensions.left;

        if (!previousSize || previousSize < 0) {
          previousSize = 0;
        }

        if (previousSize >= maxSize) {
          previousSize = maxSize;
        }

        nextPane.element.size = generatePercentage(maxSize - previousSize);
        previousPane.element.size = generatePercentage(previousSize);
      },
      globalMouseupHandler: function globalMouseupHandler(evt) {
        _this.PRIVATE.startPosition = null;
        _this.PRIVATE.offset = null;

        _this.PRIVATE.cleanupMouseEventHandlers();
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      disconnected: function disconnected() {
        return _this.PRIVATE.cleanupMouseEventHandlers();
      },
      initialize: function initialize() {
        if (_this.PRIVATE.initialized) {
          return;
        }

        _this.UTIL.defineProperties({
          axis: {
            private: true,
            readonly: true,
            get: function get() {
              return _this.parentNode.hasAttribute('horizontal') ? 'x' : 'y';
            }
          },
          dimensions: {
            private: true,
            readonly: true,
            get: function get() {
              return _this.getBoundingClientRect();
            }
          },
          previousPane: {
            private: true,
            readonly: true,
            get: function get() {
              var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
                  previousElementSibling = _assertThisInitialize.previousElementSibling;

              return {
                element: previousElementSibling,
                dimensions: previousElementSibling.getBoundingClientRect()
              };
            }
          },
          nextPane: {
            private: true,
            readonly: true,
            get: function get() {
              var _assertThisInitialize2 = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
                  nextElementSibling = _assertThisInitialize2.nextElementSibling;

              return {
                element: nextElementSibling,
                dimensions: nextElementSibling.getBoundingClientRect()
              };
            }
          }
        });

        _this.PRIVATE.initialized = true;
      },
      mousedown: function mousedown(evt) {
        var _this$PRIVATE2 = _this.PRIVATE,
            axis = _this$PRIVATE2.axis,
            dimensions = _this$PRIVATE2.dimensions,
            previousPane = _this$PRIVATE2.previousPane,
            nextPane = _this$PRIVATE2.nextPane;
        var startPosition, dimension, offsetReference;

        switch (axis) {
          case 'x':
            startPosition = evt.clientX;
            dimension = 'width';
            offsetReference = 'right';
            break;

          case 'y':
            startPosition = evt.clientY;
            dimension = 'height';
            offsetReference = 'bottom';
            break;
        }

        _this.PRIVATE.startPosition = startPosition;
        _this.PRIVATE.maxSize = previousPane.dimensions[dimension] + nextPane.dimensions[dimension];
        _this.PRIVATE.offset = {
          previous: _this.PRIVATE.startPosition - dimensions[axis],
          next: dimensions[offsetReference] - startPosition
        };
        document.addEventListener('mousemove', _this.PRIVATE.globalMousemoveHandler);
        document.addEventListener('mouseup', _this.PRIVATE.globalMouseupHandler);
      }
    });

    return _this;
  }

  return _class;
}(AuthorElement(HTMLElement)));