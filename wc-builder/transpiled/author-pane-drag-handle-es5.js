"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-pane-drag-handle',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;cursor:row-resize}:host *,:host :after,:host :before{box-sizing:border-box}:host-context(author-pane[orientation=horizontal]){cursor:col-resize}author-pane-drag-handle{display:flex;cursor:row-resize}author-pane-drag-handle *,author-pane-drag-handle :after,author-pane-drag-handle :before{box-sizing:border-box}author-pane-drag-handle-context(author-pane[orientation=horizontal]){cursor:col-resize}</style><slot></slot></template>"));
  }

  return _class;
}(AuthorElement(HTMLElement)));