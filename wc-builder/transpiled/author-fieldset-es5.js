"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-fieldset',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\";</style><slot></slot></template>"));

    _this.UTIL.defineAttributes({
      name: ''
    });

    _this.UTIL.defineProperties({
      sourceElement: {
        private: true,
        readonly: true,
        default: document.createElement('fieldset')
      },
      disabled: false,
      elements: {
        readonly: true,
        get: function get() {
          return '';
        }
      },
      form: {
        readonly: true,
        get: function get() {
          return '';
        }
      },
      type: {
        readonly: true,
        default: 'author-fieldset'
      },
      validationMessage: {
        readonly: true,
        get: function get() {
          return _this.PRIVATE.sourceElement.validationMessage;
        }
      },
      validity: {
        readonly: true,
        get: function get() {
          return _this.PRIVATE.sourceElement.validity;
        }
      },
      willValidate: {
        readonly: true,
        get: function get() {
          return _this.PRIVATE.sourceElement.willValidate;
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "checkValidity",
    value: function checkValidity() {
      this.PRIVATE.sourceElement.checkValidity();
    }
  }, {
    key: "setCustomValidity",
    value: function setCustomValidity() {
      var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.PRIVATE.sourceElement.setCustomValidity(string);
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));