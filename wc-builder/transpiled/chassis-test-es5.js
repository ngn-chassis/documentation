"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('chassis-test',
/*#__PURE__*/
function (_ChassisBaseComponent) {
  (0, _inherits2.default)(_class, _ChassisBaseComponent);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;contain:layout style;max-width:100%}chassis-test{display:flex;contain:layout style;max-width:100%}</style><slot></slot></template>"));

    _this.addAttributes(['test1', 'test2', 'test3']);

    _this.addPrivateProperties([]);

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "foo",
    value: function foo() {
      console.log('foo from chassis-test works');
    }
  }]);
  return _class;
}(ChassisBaseComponent(HTMLElement)));