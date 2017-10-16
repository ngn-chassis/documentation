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

    var template = document.createElement('template');
    template.insertAdjacentHTML('afterbegin', _this.templateString);
    _this.shadowRoot.appendChild(template.children[0].content.cloneNode(true));
    template = null;
    return _this;
  }

  _createClass(ChassisFormControl, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      console.log('connected');
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      switch (name.toLowerCase()) {default:
          return;}
    }
  }, {
    key: 'templateString',
    get: function get() {
      return '{{TEMPLATE-STRING}}';
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