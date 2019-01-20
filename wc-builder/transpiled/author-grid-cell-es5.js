"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-grid-cell',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}author-grid-cell{display:block}author-grid-cell *,author-grid-cell :after,author-grid-cell :before{box-sizing:border-box}</style><slot></slot></template>"));
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {// this.UTIL.definePrivateProperties({
      //   children: [],
      //   styleSheet: this.shadowRoot.styleSheets[0],
      //   sizeRule: null
      // })
      //
      // let sheetLength = this.PRIVATE.styleSheet.cssRules.length
      //
      // this.PRIVATE.styleSheet.insertRule(':host([size]) {}', sheetLength)
      // this.PRIVATE.sizeRule = this.PRIVATE.styleSheet.cssRules[sheetLength]
      //
      // this.PRIVATE.styleSheet.insertRule(':host([max]) {}', sheetLength)
      // this.PRIVATE.maxRule = this.PRIVATE.styleSheet.cssRules[sheetLength]
      //
      // this.PRIVATE.styleSheet.insertRule(':host([min]) {}', sheetLength)
      // this.PRIVATE.minRule = this.PRIVATE.styleSheet.cssRules[sheetLength]
      //
      // if (this.hasAttribute('size')) {
      //   this.size = this.getAttribute('size')
      // }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['z-index'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));