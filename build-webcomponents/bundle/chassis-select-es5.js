'use strict';

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChassisSelect = function (_HTMLElement) {
  (0, _inherits3.default)(ChassisSelect, _HTMLElement);

  function ChassisSelect() {
    (0, _classCallCheck3.default)(this, ChassisSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChassisSelect.__proto__ || (0, _getPrototypeOf2.default)(ChassisSelect)).call(this));

    _this.attachShadow({ mode: 'open' });

    var container = document.createElement('div');
    container.insertAdjacentHTML('afterbegin', _this.templateString);

    var template = container.querySelector('template');

    if ('content' in template) {
      _this.shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      template.childNodes.forEach(function (child) {
        _this.shadowRoot.appendChild(child.cloneNode(true));
      });
    }

    template = null;
    _this._options = new _map2.default();_this._title = '';_this._selectEledOption = null;_this._bodyClickHandler = function (evt) {
      if (evt.target === _this || _this.contains(evt.target)) {
        return;
      }_this.removeAttribute('open');
    };
    return _this;
  }

  (0, _createClass3.default)(ChassisSelect, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      setTimeout(function () {
        return _this2._applyListeners();
      }, 0);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr.toLowerCase()) {case 'open':
          if (this.hasAttribute('open')) {
            this.open();
          } else {
            this.close();
          }break;default:}
    }
  }, {
    key: 'open',
    value: function open() {
      // Force redraw in Safari
      // this.menuContainer.style.display = 'none'
      // this.menuContainer.style.display = this.menuContainerBoxModel
      // this.menuContainer.removeAttribute('style')
      document.body.addEventListener('click', this._bodyClickHandler);
    }
  }, {
    key: 'close',
    value: function close() {
      // Force redraw in Safari
      // this.menuContainer.style.display = 'none'
      // this.menuContainer.removeAttribute('style')
      document.body.removeEventListener('click', this._bodyClickHandler);
    }
  }, {
    key: '_inject',
    value: function _inject(select) {
      this._selectEl = select;this._titleEl = document.createElement('chassis-select-title');this._titleEl.slot = 'title';this.appendChild(this._titleEl);this._optionsEl = document.createElement('chassis-options');this._optionsEl.slot = 'options';this.appendChild(this._optionsEl);this.addChildren(select.children);this._titleEl.innerHTML = this.options[0].displayElement.innerHTML;
    }
  }, {
    key: 'addChildren',
    value: function addChildren(children) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          switch (child.nodeName) {case 'OPTION':
              // if (child.hasAttribute('title')) {
              // this.addTitle(this._generateChassisSelectTitle(child))
              // } else {
              this.addOption(this._generateOptionObject(child)); // }
              break; // case 'OPTGROUP':
            //   this.addOptgroup(this._generateChassisOptgroup(child))
            //   break
            default:
              console.warn(child.nodeName.toLowerCase() + ' is not a valid child element for <chassis-select>. Removing...');break;}
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._optionsEl;

      if (!customElements.get('chassis-option')) {
        console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
      }var label = option.sourceElement.getAttribute('label');var chassisOption = document.createElement('chassis-option');chassisOption.key = option.id;chassisOption.innerHTML = label && label.trim() !== '' ? label : option.sourceElement.innerHTML;chassisOption.sourceElement = option.sourceElement;dest.appendChild(chassisOption);option.displayElement = chassisOption;this._options.set(option.id, option);
    }
  }, {
    key: 'addOptgroup',
    value: function addOptgroup(optgroup) {
      var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._optionsEl;

      var label = document.createElement('div');label.classList.add('optgroup-label');label.innerHTML = optgroup.getAttribute('label');dest.appendChild(label);dest.appendChild(optgroup);
    }
  }, {
    key: '_applyListeners',
    value: function _applyListeners() {
      var _this3 = this;

      this.addEventListener('click', function (evt) {
        if (_this3.hasAttribute('open')) {
          _this3.removeAttribute('open');
        } else {
          _this3.setAttribute('open', '');
        }
      });
    }
  }, {
    key: '_generateOptionObject',
    value: function _generateOptionObject(optionEl) {
      if (!customElements.get('chassis-option')) {
        console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
      }var obj = { id: this._generateGuid(), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(optionEl.attributes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var attr = _step2.value;

          obj.attributes[attr.name] = attr.value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return obj;
    }
  }, {
    key: '_generateGuid',
    value: function _generateGuid() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'option';

      var lut = [];for (var i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + i.toString(16);
      }var d0 = Math.random() * 0xffffffff | 0;var d1 = Math.random() * 0xffffffff | 0;var d2 = Math.random() * 0xffffffff | 0;var d3 = Math.random() * 0xffffffff | 0;return prefix + '_' + lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }
  }, {
    key: '_generateChassisOptgroup',
    value: function _generateChassisOptgroup(optgroup) {
      if (!customElements.get('chassis-optgroup')) {
        console.error('chassis-select requires chassis-optgroup. Please include it in this document\'s <head> element.');return;
      }var fauxOptgroup = document.createElement('chassis-optgroup');fauxOptgroup.id = this._generateGuid('optgroup');var label = optgroup.getAttribute('label');if (!label || label.trim() === '') {
        console.error('[ERROR] <optgroup> must have a label attribute!');return;
      }fauxOptgroup.setAttribute('label', label);fauxOptgroup.slot = 'options';var options = optgroup.querySelectorAll('option');var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(options), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var option = _step3.value;

          this.addOption(this._generateOptionObject(option), fauxOptgroup);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return fauxOptgroup;
    }
  }, {
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}:host ::slotted(chassis-options){height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;height:auto;min-width:100%}chassis-select{display:inline-flex;flex-direction:column;width:100%;max-width:100%}chassis-select *{box-sizing:border-box}chassis-select :before{box-sizing:border-box}chassis-select :after{box-sizing:border-box}chassis-select chassis-options{height:0;overflow:hidden}chassis-select[open] chassis-options{position:absolute;top:100%;left:0;z-index:1;height:auto;min-width:100%}</style><slot name="title"></slot><slot name="options"></slot></template>';
    }
  }, {
    key: 'options',
    get: function get() {
      return (0, _from2.default)(this._options.values());
    }
  }, {
    key: 'sourceElement',
    get: function get() {
      return this._selectEl;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['open'];
    }
  }]);
  return ChassisSelect;
}(HTMLElement);

customElements.define('chassis-select', ChassisSelect);