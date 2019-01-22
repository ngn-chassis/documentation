"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-selected-options',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-selected-options{contain:content;display:flex;max-width:100%}author-selected-options *,author-selected-options :after,author-selected-options :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforecontents\"></slot><div class=\"contents\"><slot id=\"contents\"></slot></div><slot name=\"aftercontents\"></slot><div class=\"beforeend\"><slot name=\"beforeend\"></slot></div></template>"));

    _this.UTIL.defineProperties({
      contentsElement: {
        readonly: true,
        private: true,
        default: _this.shadowRoot.getElementById('contents')
      },
      options: {
        private: true,
        default: []
      }
    });

    _this.UTIL.definePrivateMethods({
      appendCaret: function appendCaret() {
        var xmlns = 'http://www.w3.org/2000/svg';
        var width = 24;
        var height = 24;
        var caret = document.createElementNS(xmlns, 'svg');
        caret.slot = 'beforeend';
        caret.setAttributeNS(null, 'width', width);
        caret.setAttributeNS(null, 'height', height);
        caret.setAttributeNS(null, 'viewBox', "0 0 ".concat(width, " ").concat(height));
        caret.setAttributeNS(null, 'fill', 'none');
        caret.setAttributeNS(null, 'stroke', 'currentColor');
        caret.setAttributeNS(null, 'stroke-width', '3');
        caret.setAttributeNS(null, 'stroke-linecap', 'square');
        caret.setAttributeNS(null, 'stroke-linejoin', 'miter');
        var shape = document.createElementNS(xmlns, 'polyline');
        shape.setAttributeNS(null, 'points', '6 9 12 15 18 9');
        caret.appendChild(shape);

        _this.appendChild(caret);
      },
      optionSelectionHandler: function optionSelectionHandler(evt) {
        evt.stopPropagation();

        _this.clear(evt.detail.length === 0);

        evt.detail.forEach(function (option, index) {
          return _this.add(option, index === evt.detail.length - 1);
        });
      },
      parentStateChangeHandler: function parentStateChangeHandler(evt) {
        var _evt$detail = evt.detail,
            name = _evt$detail.name,
            value = _evt$detail.value;

        switch (name) {
          case 'multiple':
            if (!value) {
              return _this.on('mousedown', _this.PRIVATE.mousedownHandler);
            }

            return _this.off('mousedown', _this.PRIVATE.mousedownHandler);

          default:
            return;
        }
      },
      mousedownHandler: function mousedownHandler(evt) {
        return _this.emit('toggle', null, _this.parentNode);
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.PRIVATE.appendCaret();

        _this.update();

        _this.parentNode.on('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      disconnected: function disconnected() {
        _this.parentNode.off('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      mousedown: _this.PRIVATE.mousedownHandler,
      'options.selected': _this.PRIVATE.optionSelectionHandler
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "add",
    value: function add(option) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.PRIVATE.options.push(option);
      update && this.update();
    }
  }, {
    key: "clear",
    value: function clear() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.PRIVATE.options = [];
      update && this.update();
    }
  }, {
    key: "remove",
    value: function remove(option) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.PRIVATE.options.splice(this.PRIVATE.options.indexOf(option), 1);
      update && this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.PRIVATE.options;

      if (options !== this.PRIVATE.options) {
        this.PRIVATE.options = options;
      }

      this.PRIVATE.contentsElement.innerHTML = options.length > 0 ? this.list : this.parentNode.placeholder || '';
    }
  }, {
    key: "list",
    get: function get() {
      return this.PRIVATE.options.map(function (option) {
        return option.displayElement.text;
      }).join(', ');
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));