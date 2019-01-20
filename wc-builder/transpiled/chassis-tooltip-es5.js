"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('chassis-tooltip',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{position:fixed;z-index:2147483647;display:block}:host([hidden]){display:none}:host *,:host :after,:host :before{box-sizing:border-box}chassis-tooltip{position:fixed;z-index:2147483647;display:block}chassis-tooltip[hidden]){display:none}chassis-tooltip *,chassis-tooltip :after,chassis-tooltip :before{box-sizing:border-box}</style><slot></slot></template>"));

    _this.on('connected', function () {
      _this.setAttribute('hidden', '');

      if (!_this.hasAttribute('for')) {
        return _this.UTIL.throwError({
          message: "Missing required \"for\" attribute."
        });
      }

      _this.annotatedElement = document.getElementById(_this.getAttribute('for')) || null;

      if (!_this.annotatedElement) {
        return _this.UTIL.throwError({
          type: 'reference',
          message: "Could not find element #".concat(_this.getAttribute('for'), ". \"for\" attribute must be set to the id of the element to which to attach the tooltip.")
        });
      }

      _this.UTIL.registerListeners(_this.annotatedElement, [{
        evt: 'mouseenter',
        callback: function callback(evt) {
          return _this.removeAttribute('hidden');
        }
      }, {
        evt: 'mouseleave',
        callback: function callback(evt) {
          return _this.setAttribute('hidden', '');
        }
      }]);
    });

    return _this;
  }

  (0, _createClass2.default)(_class, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['for'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));