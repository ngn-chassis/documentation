"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('chassis-layout',
/*#__PURE__*/
function (_ChassisElement) {
  (0, _inherits2.default)(_class, _ChassisElement);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;flex-direction:column}:host([fullscreen]){height:100vh;max-height:100%;width:100vw;max-width:100%;overflow:auto}:host([orientation=horizontal]){flex-direction:row}:host([orientation=vertical]){flex-direction:column}chassis-layout{display:flex;flex-direction:column}chassis-layout[fullscreen]){height:100vh;max-height:100%;width:100vw;max-width:100%;overflow:auto}chassis-layout[orientation=horizontal]){flex-direction:row}chassis-layout[orientation=vertical]){flex-direction:column}</style><slot></slot></template>"));
  }

  return _class;
}(ChassisElement(HTMLElement)));