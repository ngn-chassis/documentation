"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('author-optgroup-label',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-optgroup-label{contain:content;display:flex;max-width:100%}author-optgroup-label *,author-optgroup-label :after,author-optgroup-label :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabel\"></slot><slot></slot><slot name=\"afterlabel\"></slot><slot name=\"beforeend\"></slot></template>"));
  }

  return _class;
}(AuthorElement(HTMLElement)));