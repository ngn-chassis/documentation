"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-layout',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;flex-direction:column;overflow:auto}:host([fullscreen]){height:100vh;max-height:100%;width:100vw;max-width:100%}:host([orientation=horizontal]){flex-direction:row}author-layout{display:flex;flex-direction:column;overflow:auto}author-layout[fullscreen]){height:100vh;max-height:100%;width:100vw;max-width:100%}author-layout[orientation=horizontal]){flex-direction:row}</style><slot></slot></template>"));
  }

  return _class;
}(AuthorElement(HTMLElement)));