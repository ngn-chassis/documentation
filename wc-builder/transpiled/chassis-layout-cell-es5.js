"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('chassis-layout-cell',
/*#__PURE__*/
function (_ChassisElement) {
  (0, _inherits2.default)(_class, _ChassisElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}:host *,:host :after,:host :before{box-sizing:border-box}:host([stretch]){flex:1 1 100%}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout-cell{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}chassis-layout-cell *,chassis-layout-cell :after,chassis-layout-cell :before{box-sizing:border-box}chassis-layout-cell[stretch]){flex:1 1 100%}chassis-layout-cell[orientation=horizontal]){flex-direction:row}chassis-layout-cell[orientation=vertical]){flex-direction:column}</style><slot></slot></template>"));

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

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.UTIL.definePrivateProperties({
        children: [],
        styleSheet: this.shadowRoot.styleSheets[0],
        sizeRule: null
      });
      var sheetLength = this.PRIVATE.styleSheet.cssRules.length;
      this.PRIVATE.styleSheet.insertRule(':host([size]) {}', sheetLength);
      this.PRIVATE.sizeRule = this.PRIVATE.styleSheet.cssRules[sheetLength];
      this.PRIVATE.styleSheet.insertRule(':host([max]) {}', sheetLength);
      this.PRIVATE.maxRule = this.PRIVATE.styleSheet.cssRules[sheetLength];
      this.PRIVATE.styleSheet.insertRule(':host([min]) {}', sheetLength);
      this.PRIVATE.minRule = this.PRIVATE.styleSheet.cssRules[sheetLength];

      if (this.hasAttribute('size')) {
        this.size = this.getAttribute('size');
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['max', 'min', 'size'];
    }
  }]);
  return _class;
}(ChassisElement(HTMLElement)));