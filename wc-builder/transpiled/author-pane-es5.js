"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-pane',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;flex-direction:column;flex:0 0 auto;min-width:0;min-height:0;overflow:auto}:host([fullscreen]){width:100vw;max-width:100%;height:100vh;max-height:100%}:host([stretch]){flex:1 1 100%}:host([horizontal]){flex-direction:row}:host([size]){flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}author-pane{display:flex;flex-direction:column;flex:0 0 auto;min-width:0;min-height:0;overflow:auto}author-pane[fullscreen]){width:100vw;max-width:100%;height:100vh;max-height:100%}author-pane[stretch]){flex:1 1 100%}author-pane[horizontal]){flex-direction:row}author-pane[size]){flex-grow:0;flex-shrink:0}author-pane *,author-pane :after,author-pane :before{box-sizing:border-box}</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      horizontal: false,
      max: {
        default: 'auto',
        set: function set(value) {
          if (!_this.PRIVATE.styleRules.hasOwnProperty('maxRule')) {
            return;
          }

          var propName = _this.parentNode.hasAttribute('horizontal') ? 'max-width' : 'max-height';

          _this.UTIL.setStyleProperty('maxRule', propName, value);
        }
      },
      min: {
        default: '0px',
        set: function set(value) {
          if (!_this.PRIVATE.styleRules.hasOwnProperty('minRule')) {
            return;
          }

          var propName = _this.parentNode.hasAttribute('horizontal') ? 'min-width' : 'min-height';

          _this.UTIL.setStyleProperty('minRule', propName, value);
        }
      },
      size: {
        default: 'auto',
        set: function set(value) {
          if (!_this.PRIVATE.styleRules.hasOwnProperty('sizeRule') || value === _this.size) {
            return;
          }

          _this.UTIL.setStyleProperty('sizeRule', 'flex-basis', value);
        }
      }
    });

    _this.UTIL.defineProperties({
      totalSize: {
        readonly: true,
        get: function get() {
          return _this.hasAttribute('horizontal') ? _this.offsetWidth : _this.offsetHeight; // let dimension = this.hasAttribute('horizontal') ? 'offsetWidth' : 'offsetHeight'
          // let area = this[dimension]
          //
          // for (let handle of this.resizeHandles) {
          //   area -= handle[dimension]
          // }
          //
          // return area
        }
      },
      resizeHandles: {
        readonly: true,
        get: function get() {
          var handles = [];

          var AuthorHTMLCollection = _this.PRIVATE.generateAuthorHTMLCollectionConstructor();

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;

              if (child.localName === 'author-pane-resize-handle') {
                handles.push(child);
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

          return new AuthorHTMLCollection(handles);
        }
      },
      panes: {
        readonly: true,
        get: function get() {
          var panes = [];

          var AuthorHTMLCollection = _this.PRIVATE.generateAuthorHTMLCollectionConstructor();

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _this.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;

              if (child.localName === _this.localName) {
                panes.push(child);
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

          return new AuthorHTMLCollection(panes);
        }
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.UTIL.insertStyleRules({
          sizeRule: ':host([size]) {}',
          maxRule: ':host([max]) {}',
          minRule: ':host([min]) {}'
        });

        if (_this.hasAttribute('fullscreen')) {
          _this.removeAttribute('size');

          _this.removeAttribute('min');

          _this.removeAttribute('max');

          return;
        }

        if (_this.hasAttribute('size')) {
          _this.size = _this.getAttribute('size');
        }

        if (_this.hasAttribute('min')) {
          _this.min = _this.getAttribute('min');
        }

        if (_this.hasAttribute('max')) {
          _this.max = _this.getAttribute('max');
        }
      },
      rendered: function rendered() {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this.resizeHandles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var handle = _step3.value;

            _this.emit('initialize', null, handle);
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
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['horizontal', 'max', 'min', 'size'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));