'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

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

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

customElements.define('chassis-select', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}:host([disabled]:not([disabled*=false])){pointer-events:none}chassis-select{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}chassis-select chassis-options{position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}chassis-select[open] chassis-options{height:auto}chassis-select[disabled]:not([disabled*=false]){pointer-events:none}</style><slot name="afterbegin"></slot><slot name="beforetitle"></slot><slot name="title"></slot><slot name="aftertitle"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');

      var template = container.querySelector('template');

      if ('content' in template) {
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
      } else {
        template.childNodes.forEach(function (child) {
          _this.shadowRoot.appendChild(child.cloneNode(true));
        });
      }

      template = null;
      _this.crypto = null;

      try {
        _this.crypto = crypto;
      } catch (e) {
        _this.crypto = msCrypto;
      }

      _private.set(_this, {
        addReadOnlyProp: function addReadOnlyProp(prop) {
          (0, _defineProperty2.default)(_this, prop, _private.get(_this).readonlyProperty(prop));
        },

        addReadOnlyProps: function addReadOnlyProps(props) {
          props.forEach(function (prop) {
            return _private.get(_this).addReadOnlyProp(prop);
          });
        },

        generateGuid: function generateGuid() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'option';

          return prefix + '_' + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });
        },

        readonlyProperty: function readonlyProperty(name) {
          return {
            get: function get() {
              return _private.get(_this).sourceEl[name];
            },
            set: function set() {
              return _private.get(_this).throw('readonly', { name: name });
            }
          };
        },

        throw: function _throw(type, vars) {
          var message = 'ERROR <chassis-select> ';

          switch (type) {
            case 'readonly':
              message += 'Cannot set read-only property "' + vars.name + '".';
              break;

            default:
              message = message.trim();
          }

          console.error(message);
        }
      });
      _private.get(_this).addReadOnlyProps(['form', 'labels', 'options', 'willValidate', 'selectedOptions', 'type', 'validationMessage', 'validity']);_private.get(_this).options = [];_private.get(_this).title = '';_private.get(_this).selectedOption = null;_private.get(_this).arrowKeydownHandler = function (evt) {
        switch (evt.keyCode) {case 38:
            evt.preventDefault();console.log('select previous option');break;case 40:
            evt.preventDefault();console.log('select next option');break;default:
            return;}
      };_private.get(_this).bodyClickHandler = function (evt) {
        if (evt.target === _this || _this.contains(evt.target)) {
          return;
        }_this.removeAttribute('open');
      };_private.get(_this).generateChassisOptgroup = function (optgroup) {
        if (!customElements.get('chassis-optgroup')) {
          console.error('chassis-select requires chassis-optgroup. Please include it in this document\'s <head> element.');return;
        }var fauxOptgroup = document.createElement('chassis-optgroup');fauxOptgroup.id = _private.get(_this).generateGuid('optgroup');var label = optgroup.getAttribute('label');if (!label || label.trim() === '') {
          console.error('[ERROR] <optgroup> must have a label attribute!');return;
        }fauxOptgroup.setAttribute('label', label);var options = optgroup.querySelectorAll('option');var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(options), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var option = _step.value;

            _this.addOption(_private.get(_this).generateOptionObject(option), null, fauxOptgroup);
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

        return fauxOptgroup;
      };_private.get(_this).generateOptionObject = function (optionEl) {
        if (!customElements.get('chassis-option')) {
          console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
        }var obj = { id: _private.get(_this).generateGuid(), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion2 = true;
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
      };_private.get(_this).getBooleanPropertyValue = function (prop) {
        return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
      }, _private.get(_this).getOptionById = function (id) {
        var options = _private.get(_this).options;var option = void 0;for (var i = 0; i < options.length; i++) {
          if (options[i].id === id) {
            option = options[i];break;
          }
        }return option;
      };_private.get(_this).handleAttributeChange = function (attr, val) {
        if (!_private.get(_this).sourceEl) {
          return;
        }_this.setAttribute(attr, val);_private.get(_this).sourceEl[attr] = val;
      };_private.get(_this).handleBooleanAttributeChange = function (attr, value) {
        if (!_private.get(_this).sourceEl) {
          return;
        }var acceptableValues = ['true', 'false', '', null];if (!acceptableValues.includes(value)) {
          console.error('<chassis-select> ' + attr + ' attribute expected boolean but received "' + value + '"');_this.removeAttribute(attr);_private.get(_this).sourceEl[attr] = false;return;
        }if (value === 'false' && _this.hasAttribute(attr)) {
          _this.removeAttribute(attr);_private.get(_this).sourceEl[attr] = false;return;
        }_private.get(_this).sourceEl[attr] = _this.hasAttribute(attr);
      };_private.get(_this).handleBooleanPropertyChange = function (prop, bool) {
        if (!bool) {
          _this.removeAttribute(prop);_private.get(_this).sourceEl[prop] = false;return;
        }if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
          _this.setAttribute(prop, '');_private.get(_this).sourceEl[prop] = true;
        }
      };_private.get(_this).handlePropertyChange = function (prop, val) {
        _private.get(_this).sourceEl[prop] = val;if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
          _this.setAttribute(prop, val);
        }
      };
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'addChildren',
      value: function addChildren(children) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(children), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            var isElement = child instanceof HTMLElement;switch (child.nodeName) {case 'OPTION':
                this.addOption(isElement ? _private.get(this).generateOptionObject(child) : child);break;case 'OPTGROUP':
                this.addOptgroup(isElement ? _private.get(this).generateChassisOptgroup(child) : child);break;default:
                console.warn(child.nodeName.toLowerCase() + ' is not a valid child element for <chassis-select>. Removing...');break;}
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
      }
    }, {
      key: 'addOptgroup',
      value: function addOptgroup(optgroup) {
        var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _private.get(this).optionsEl;

        var label = document.createElement('chassis-optgroup-label');label.innerHTML = optgroup.getAttribute('label');dest.appendChild(label);dest.appendChild(optgroup);
      }
    }, {
      key: 'addOption',
      value: function addOption(option, index) {
        var _this2 = this;

        var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _private.get(this).optionsEl;

        if (!customElements.get('chassis-option')) {
          console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
        }if (!option.hasOwnProperty('id')) {
          option.id = _private.get(this).generateGuid();
        }if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
          var sourceEl = document.createElement('option');if (option.hasOwnProperty('innerHTML')) {
            sourceEl.innerHTML = option.innerHTML;
          }if (option.hasOwnProperty('label')) {
            sourceEl.innerHTML = option.label;
          }if (option.hasOwnProperty('value')) {
            sourceEl.value = option.value;
          }if (option.hasOwnProperty('disabled')) {
            sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled;
          }option.sourceElement = sourceEl;
        }var label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim();var value = option.sourceElement.getAttribute('value');var disabled = option.sourceElement.disabled;var chassisOption = document.createElement('chassis-option');chassisOption.key = option.id;chassisOption.innerHTML = option.sourceElement.innerHTML;dest.appendChild(chassisOption);chassisOption.addEventListener('click', function (evt) {
          return _this2.select(chassisOption.key);
        });option = { attributes: { disabled: disabled, label: label, value: value }, id: option.id, displayElement: chassisOption, sourceElement: option.sourceElement };if (index) {
          this['' + index] = option.sourceElement;_private.get(this).options.splice(index, 0, option);return;
        }this['' + _private.get(this).options.length] = option.sourceElement;_private.get(this).options.push(option);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        attr = attr.toLowerCase();if (newValue === oldValue) {
          return;
        }switch (attr) {case 'autofocus':case 'disabled':
            _private.get(this).handleBooleanAttributeChange(attr, newValue);break;case 'name':
            _private.get(this).handleAttributeChange(attr, newValue);break;case 'open':
            this.isOpen ? this.open() : this.close();break;}
      }
    }, {
      key: 'checkValidity',
      value: function checkValidity() {
        return _private.get(this).sourceEl.checkValidity();
      }
    }, {
      key: 'close',
      value: function close() {
        document.body.removeEventListener('click', _private.get(this).bodyClickHandler);document.body.removeEventListener('touchcancel', _private.get(this).bodyClickHandler);document.body.removeEventListener('touchend', _private.get(this).bodyClickHandler);if (this.isOpen) {
          this.isOpen = false;
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        this.addEventListener('click', function (evt) {
          _this3.hasAttribute('open') ? _this3.removeAttribute('open') : _this3.setAttribute('open', '');
        });this.addEventListener('focus', function (evt) {
          _this3.addEventListener('keydown', _private.get(_this3).arrowKeydownHandler);
        });this.addEventListener('blur', function (evt) {
          _this3.removeEventListener('keydown', _private.get(_this3).arrowKeydownHandler);
        });setTimeout(function () {
          if (!_this3.hasAttribute('tabindex')) {
            _this3.setAttribute('tabindex', 0);
          }if (_this3.autofocus) {
            _this3.focus();
          }
        }, 0);
      }
    }, {
      key: 'inject',
      value: function inject(select) {
        _private.get(this).sourceEl = select;_private.get(this).titleEl = document.createElement('chassis-select-title');_private.get(this).optionsEl = document.createElement('chassis-options');_private.get(this).titleEl.slot = 'title';this.appendChild(_private.get(this).titleEl);_private.get(this).optionsEl.slot = 'options';this.appendChild(_private.get(this).optionsEl);this.addChildren(select.children);this.select(_private.get(this).options[0].id);
      }
    }, {
      key: 'open',
      value: function open() {
        document.body.addEventListener('click', _private.get(this).bodyClickHandler);document.body.addEventListener('touchcancel', _private.get(this).bodyClickHandler);document.body.addEventListener('touchend', _private.get(this).bodyClickHandler);if (!this.isOpen) {
          this.isOpen = true;
        }
      }
    }, {
      key: 'select',
      value: function select(id) {
        var option = _private.get(this).getOptionById(id);if (option) {
          option.sourceElement.selected = true;_private.get(this).titleEl.title = option.displayElement.innerHTML;_private.get(this).selectedOption = option;_private.get(this).options.forEach(function (option) {
            return option.displayElement.removeAttribute('selected');
          });option.displayElement.setAttribute('selected', '');
        }
      }
    }, {
      key: 'setCustomValidity',
      value: function setCustomValidity(string) {
        _private.get(this).sourceEl.setCustomValidity(string);
      }
    }, {
      key: 'autofocus',
      get: function get() {
        return _private.get(this).getBooleanPropertyValue('autofocus');
      },
      set: function set(bool) {
        _private.get(this).handleBooleanPropertyChange('autofocus', bool);
      }
    }, {
      key: 'disabled',
      get: function get() {
        return _private.get(this).getBooleanPropertyValue('disabled');
      },
      set: function set(bool) {
        _private.get(this).handleBooleanPropertyChange('disabled', bool);
      }
    }, {
      key: 'isOpen',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(bool) {
        bool ? this.setAttribute('open', '') : this.removeAttribute('open');
      }
    }, {
      key: 'length',
      get: function get() {
        return _private.get(this).sourceEl.length;
      }
    }, {
      key: 'name',
      get: function get() {
        return _private.get(this).sourceEl.name;
      },
      set: function set(name) {
        _private.get(this).handlePropertyChange('name', name);
      }
    }, {
      key: 'required',
      get: function get() {
        return _private.get(this).getBooleanPropertyValue('required');
      },
      set: function set(bool) {
        _private.get(this).handleBooleanPropertyChange('required', bool);
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _private.get(this).sourceEl.selectedIndex;
      },
      set: function set(index) {
        this.select(_private.get(this).options[index].id);
      }
    }, {
      key: 'sourceElement',
      get: function get() {
        return _private.get(this).sourceEl;
      }
    }, {
      key: 'value',
      get: function get() {
        return _private.get(this).sourceEl.value;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['autofocus', 'disabled', 'name', 'open', 'tabindex'];
      }
    }]);
    return _class;
  }(HTMLElement);
}());