"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-test',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\";</style><slot></slot></template>"));

    _this.UTIL.defineProperties({
      private: {
        private: true,
        default: 'private'
      },
      readonly: {
        readonly: true,
        default: 'readonly'
      },
      publicBool: false,
      publicString: 'public string',
      defaultString: {
        default: 'default string'
      },
      privateReadonly: {
        private: true,
        readonly: true,
        default: 'default'
      }
    });

    return _this;
  }

  return _class;
}(AuthorElement(HTMLElement)));