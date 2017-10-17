'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChassisFormControl = function (_HTMLElement) {
  _inherits(ChassisFormControl, _HTMLElement);

  function ChassisFormControl() {
    _classCallCheck(this, ChassisFormControl);

    var _this = _possibleConstructorReturn(this, (ChassisFormControl.__proto__ || Object.getPrototypeOf(ChassisFormControl)).call(this));

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
    _this.fieldInputTypes = ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'];_this.toggleInputTypes = ['checkbox', 'radio'];_this.supportedTypes = ['field', 'toggle', 'select'];
    return _this;
  }

  _createClass(ChassisFormControl, [{
    key: '_generateGuid',
    value: function _generateGuid() {
      var lut = [];for (var i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + i.toString(16);
      }var d0 = Math.random() * 0xffffffff | 0;var d1 = Math.random() * 0xffffffff | 0;var d2 = Math.random() * 0xffffffff | 0;var d3 = Math.random() * 0xffffffff | 0;return 'input_' + lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this._guid = this._generateGuid();setTimeout(function () {
        var label = _this2.querySelector('label');var input = _this2.querySelector('input');var textarea = _this2.querySelector('textarea');var select = _this2.querySelector('select');if (label) {
          _this2.initLabel(label);
        }if (input) {
          _this2.initInput(input);
        }if (textarea) {
          _this2.initInput(textarea);
        }if (select) {
          _this2.initSelectMenu(select);
        }
      });
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      var attr = name.toLowerCase();switch (attr) {case 'type':
          if (this.type !== newValue) {
            this.type = newValue;
          }break;default:
          return;}
    }
  }, {
    key: 'initLabel',
    value: function initLabel(node) {
      this.label = node;node.slot = node.slot || 'label';if (this.id) {
        node.htmlFor = this._guid;
      }
    }
  }, {
    key: 'initInput',
    value: function initInput(node) {
      this.input = node;node.slot = node.slot || 'input';if (this.id) {
        node.id = this._guid;
      }if (this.type) {
        if (!this.supportedTypes.includes(this.type)) {
          console.warn('[WARNING] Chassis Form Controls do not support type "' + this.type + '." Supported types: ' + this.supportedTypes.join(', ') + '.');
        }return;
      }if (this.fieldInputTypes.includes(node.type)) {
        this.type = 'field';
      }if (this.toggleInputTypes.includes(node.type)) {
        this.type = 'toggle';
      }
    }
  }, {
    key: 'initSelectMenu',
    value: function initSelectMenu(node) {
      this.input = node;node.slot = node.slot || 'input';this.type = 'select';if (this.id) {
        node.id = this._guid;
      }
    }
  }, {
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:content;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .label-wrapper{flex:1 1 auto;display:flex}:host([type=toggle]) .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}chassis-control{display:flex;contain:content;max-width:100%}chassis-control *{box-sizing:border-box}chassis-control :before{box-sizing:border-box}chassis-control :after{box-sizing:border-box}chassis-control[type=field]{flex-direction:column}chassis-control[type=toggle]{align-items:center}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .label-wrapper{flex:1 1 auto;display:flex}chassis-control[type=toggle] .input-wrapper{order:-1;display:flex;justify-content:center;align-items:center}</style><slot name="afterbegin"></slot><div class="label-wrapper"><slot name="beforelabel"></slot><slot name="label"></slot><slot name="afterlabel"></slot></div><slot name="between"></slot><div class="input-wrapper"><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot></div><slot name="beforeend"></slot></template>';
    }
  }, {
    key: 'type',
    get: function get() {
      return this.getAttribute('type');
    },
    set: function set(value) {
      this.setAttribute('type', value);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['type'];
    }
  }]);

  return ChassisFormControl;
}(HTMLElement);

customElements.define('chassis-control', ChassisFormControl);