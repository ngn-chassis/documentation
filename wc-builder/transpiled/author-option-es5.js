"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-option',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-option{contain:content;display:flex;flex-direction:column;max-width:100%}author-option *,author-option :after,author-option :before{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoption\"></slot><slot></slot><slot name=\"afteroption\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineAttributes({
      disabled: false,
      hover: false,
      id: '',
      label: '',
      selected: false,
      value: ''
    });

    _this.UTIL.defineProperties({
      defaultSelected: false,
      form: {
        readonly: true,
        private: true
      },
      index: {
        readonly: true,
        get: function get() {
          return _this.parentNode.options.findIndex(function (option) {
            return option.displayElement === (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this));
          });
        }
      }
    });

    _this.UTIL.definePrivateMethods({
      mouseButtonDown: function mouseButtonDown(evt) {
        var code = evt.buttons !== undefined ? evt.buttons : evt.nativeEvent.which;
        return code >= 1;
      },
      mousemoveHandler: function mousemoveHandler(evt) {
        return _this.emit('option.hovered', _this.index);
      },
      mouseoutHandler: function mouseoutHandler(evt) {
        return _this.hover = false;
      },
      mouseoverHandler: function mouseoverHandler(evt) {
        var mousedown = _this.PRIVATE.mouseButtonDown(evt);

        if (!(_this.parentNode.multiple && mousedown)) {
          _this.hover = true;
          return;
        }

        var shiftKey = evt.shiftKey,
            metaKey = evt.metaKey,
            ctrlKey = evt.ctrlKey;

        _this.PRIVATE.select(shiftKey, metaKey, ctrlKey, mousedown);
      },
      parentStateChangeHandler: function parentStateChangeHandler(evt) {
        var _evt$detail = evt.detail,
            name = _evt$detail.name,
            value = _evt$detail.value;

        switch (name) {
          case 'multiple':
            if (value) {
              _this.removeEventListener('mouseup', _this.PRIVATE.selectionHandler);

              _this.addEventListener('mousedown', _this.PRIVATE.selectionHandler);
            } else {
              _this.addEventListener('mouseup', _this.PRIVATE.selectionHandler);

              _this.removeEventListener('mousedown', _this.PRIVATE.selectionHandler);
            }

            break;
        }
      },
      select: function select() {
        var shiftKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var metaKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var ctrlKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var mousedown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
            index = _assertThisInitialize.index;

        _this.emit('option.selected', {
          index: index,
          shiftKey: shiftKey,
          metaKey: metaKey,
          ctrlKey: ctrlKey,
          mousedown: mousedown
        }, _this.parentNode);
      },
      selectionHandler: function selectionHandler(evt) {
        var shiftKey = evt.shiftKey,
            metaKey = evt.metaKey,
            ctrlKey = evt.ctrlKey;

        _this.PRIVATE.select(shiftKey, metaKey, ctrlKey);
      }
    });

    _this.UTIL.registerListeners((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
      connected: function connected() {
        _this.parentNode.on('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      disconnected: function disconnected() {
        _this.off('mousedown', _this.PRIVATE.selectionHandler);

        _this.parentNode.off('state.change', _this.PRIVATE.parentStateChangeHandler);
      },
      mouseover: _this.PRIVATE.mouseoverHandler,
      mousemove: _this.PRIVATE.mousemoveHandler,
      mouseout: _this.PRIVATE.mouseoutHandler,
      mouseup: _this.PRIVATE.selectionHandler
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "remove",

    /**
     * @method remove
     * Remove this option from the DOM.
     * @override
     */
    value: function remove() {
      this.parentNode.options.splice(this.index, 1);
      (0, _get2.default)((0, _getPrototypeOf2.default)(_class.prototype), "remove", this).call(this);
    }
  }, {
    key: "text",
    get: function get() {
      return this.innerHTML;
    },
    set: function set(content) {
      this.innerHTML = content;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled', 'hover', 'label', 'selected', 'value'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));