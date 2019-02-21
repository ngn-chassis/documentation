"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-layout-cell',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 100%}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}author-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}author-layout-cell *,author-layout-cell :after,author-layout-cell :before{box-sizing:border-box}author-layout-cell[stretch]){flex:1 1 100%}author-layout-cell[orientation=horizontal]){flex-direction:row}author-layout-cell[orientation=vertical]){flex-direction:column}</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      max: {
        default: 'auto',
        set: function set(value) {
          var propName = _this.parentNode.getAttribute('orientation') === 'horizontal' ? 'max-width' : 'max-height';

          _this.PRIVATE.maxRule.style.setProperty(propName, value);
        }
      },
      min: {
        default: 'auto',
        set: function set(value) {
          var propName = _this.parentNode.getAttribute('orientation') === 'horizontal' ? 'min-width' : 'min-height';

          _this.PRIVATE.minRule.style.setProperty(propName, value);
        }
      },
      size: {
        default: 'auto',
        set: function set(value) {
          _this.PRIVATE.sizeRule.style.setProperty('flex-basis', value);
        }
      }
    });

    _this.on('connected', function () {
      _this.UTIL.definePrivateProperties({
        children: [],
        styleSheet: _this.shadowRoot.styleSheets[0],
        sizeRule: null
      });

      var sheetLength = _this.PRIVATE.styleSheet.cssRules.length;

      _this.PRIVATE.styleSheet.insertRule(':host([size]) {}', sheetLength);

      _this.PRIVATE.sizeRule = _this.PRIVATE.styleSheet.cssRules[sheetLength];

      _this.PRIVATE.styleSheet.insertRule(':host([max]) {}', sheetLength);

      _this.PRIVATE.maxRule = _this.PRIVATE.styleSheet.cssRules[sheetLength];

      _this.PRIVATE.styleSheet.insertRule(':host([min]) {}', sheetLength);

      _this.PRIVATE.minRule = _this.PRIVATE.styleSheet.cssRules[sheetLength];

      if (_this.hasAttribute('size')) {
        _this.size = _this.getAttribute('size');
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['max', 'min', 'size'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));