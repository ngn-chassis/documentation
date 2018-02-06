'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperties = require('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

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

    _this.crypto = null;

    try {
      _this.crypto = crypto;
    } catch (e) {
      _this.crypto = msCrypto;
    }
    (0, _defineProperties2.default)(_this, { _options: { value: [] }, _title: { value: '' }, _selectedOption: { writable: true }, _arrowKeydownHandler: { value: function value(evt) {
          switch (evt.keyCode) {case 38:
              evt.preventDefault();console.log('select previous option');break;case 40:
              evt.preventDefault();console.log('select next option');break;default:
              return;}
        } }, _bodyClickHandler: { value: function value(evt) {
          if (evt.target === _this || _this.contains(evt.target)) {
            return;
          }_this.removeAttribute('open');
        } }, _generateGuid: { value: function value() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'option';

          return prefix + '_' + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });
        } }, _generateChassisOptgroup: { value: function value(optgroup) {
          if (!customElements.get('chassis-optgroup')) {
            console.error('chassis-select requires chassis-optgroup. Please include it in this document\'s <head> element.');return;
          }var fauxOptgroup = document.createElement('chassis-optgroup');fauxOptgroup.id = _this._generateGuid('optgroup');var label = optgroup.getAttribute('label');if (!label || label.trim() === '') {
            console.error('[ERROR] <optgroup> must have a label attribute!');return;
          }fauxOptgroup.setAttribute('label', label);var options = optgroup.querySelectorAll('option');var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(options), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var option = _step.value;

              _this.addOption(_this._generateOptionObject(option), null, fauxOptgroup);
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
        } }, _generateOptionObject: { value: function value(optionEl) {
          if (!customElements.get('chassis-option')) {
            console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
          }var obj = { id: _this._generateGuid(), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion2 = true;
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
        } }, _getBooleanPropertyValue: { value: function value(prop) {
          return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
        } }, _handleAttributeChange: { value: function value(attr, val) {
          if (!_this._sourceEl) {
            return;
          }_this.setAttribute(attr, val);_this._sourceEl[attr] = val;
        } }, _handleBooleanAttributeChange: { value: function value(attr, _value) {
          if (!_this._sourceEl) {
            return;
          }var acceptableValues = ['true', 'false', '', null];if (!acceptableValues.includes(_value)) {
            console.error('<chassis-select> ' + attr + ' attribute expected boolean but received "' + _value + '"');_this.removeAttribute(attr);_this._sourceEl[attr] = false;return;
          }if (_value === 'false' && _this.hasAttribute(attr)) {
            _this.removeAttribute(attr);_this._sourceEl[attr] = false;return;
          }_this._sourceEl[attr] = _this.hasAttribute(attr);
        } }, _handleBooleanPropertyChange: { value: function value(prop, bool) {
          if (!bool) {
            _this.removeAttribute(prop);_this._sourceEl[prop] = false;return;
          }if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
            _this.setAttribute(prop, '');_this._sourceEl[prop] = true;
          }
        } }, _handlePropertyChange: { value: function value(prop, val) {
          _this._sourceEl[prop] = val;if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
            _this.setAttribute(prop, val);
          }
        } }, _inject: { value: function value(select) {
          (0, _defineProperties2.default)(_this, { _sourceEl: { value: select }, _titleEl: { value: document.createElement('chassis-select-title') }, _optionsEl: { value: document.createElement('chassis-options') } });_this._titleEl.slot = 'title';_this.appendChild(_this._titleEl);_this._optionsEl.slot = 'options';_this.appendChild(_this._optionsEl);_this.addChildren(select.children);_this.select(_this._options[0].id);
        } }, _throw: { value: function value(type, vars) {
          switch (type) {case 'readonly':
              console.error('ERROR Cannot set read-only property "' + vars.name + '".');break;default:
              console.error('ERROR <chassis-select>');}
        } } });
    return _this;
  }

  (0, _createClass3.default)(ChassisSelect, [{
    key: 'checkValidity',
    value: function checkValidity() {
      return this._sourceEl.checkValidity();
    }
  }, {
    key: 'setCustomValidity',
    value: function setCustomValidity(string) {
      this._sourceEl.setCustomValidity(string);
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      this.addEventListener('click', function (evt) {
        _this2.hasAttribute('open') ? _this2.removeAttribute('open') : _this2.setAttribute('open', '');
      });this.addEventListener('focus', function (evt) {
        _this2.addEventListener('keydown', _this2._arrowKeydownHandler);
      });this.addEventListener('blur', function (evt) {
        _this2.removeEventListener('keydown', _this2._arrowKeydownHandler);
      });setTimeout(function () {
        if (!_this2.hasAttribute('tabindex')) {
          _this2.setAttribute('tabindex', 0);
        }if (_this2.autofocus) {
          _this2.focus();
        }
      }, 0);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      attr = attr.toLowerCase();if (newValue === oldValue) {
        return;
      }switch (attr) {case 'autofocus':case 'disabled':
          this._handleBooleanAttributeChange(attr, newValue);break;case 'name':
          this._handleAttributeChange(attr, newValue);break;case 'open':
          this.isOpen ? this.open() : this.close();break;}
    }
  }, {
    key: 'open',
    value: function open() {
      document.body.addEventListener('click', this._bodyClickHandler);document.body.addEventListener('touchcancel', this._bodyClickHandler);document.body.addEventListener('touchend', this._bodyClickHandler);if (!this.isOpen) {
        this.isOpen = true;
      }
    }
  }, {
    key: 'close',
    value: function close() {
      document.body.removeEventListener('click', this._bodyClickHandler);document.body.removeEventListener('touchcancel', this._bodyClickHandler);document.body.removeEventListener('touchend', this._bodyClickHandler);if (this.isOpen) {
        this.isOpen = false;
      }
    }
  }, {
    key: 'addChildren',
    value: function addChildren(children) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(children), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var child = _step3.value;

          var isElement = child instanceof HTMLElement;switch (child.nodeName) {case 'OPTION':
              this.addOption(isElement ? this._generateOptionObject(child) : child);break;case 'OPTGROUP':
              this.addOptgroup(isElement ? this._generateChassisOptgroup(child) : child);break;default:
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
    key: 'addOption',
    value: function addOption(option, index) {
      var _this3 = this;

      var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._optionsEl;

      if (!customElements.get('chassis-option')) {
        console.error('chassis-select requires chassis-option. Please include it in this document\'s <head> element.');return;
      }if (!option.hasOwnProperty('id')) {
        option.id = this._generateGuid();
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
        return _this3.select(chassisOption.key);
      });option = { attributes: { disabled: disabled, label: label, value: value }, id: option.id, displayElement: chassisOption, sourceElement: option.sourceElement };if (index) {
        this._options.splice(index, 0, option);return;
      }this._options.push(option);
    }
  }, {
    key: 'addOptgroup',
    value: function addOptgroup(optgroup) {
      var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._optionsEl;

      var label = document.createElement('chassis-optgroup-label');label.innerHTML = optgroup.getAttribute('label');dest.appendChild(label);dest.appendChild(optgroup);
    }
  }, {
    key: 'select',
    value: function select(id) {
      var option = this._options.find(function (option) {
        return option.id === id;
      });if (option) {
        option.sourceElement.selected = true;this._titleEl.title = option.displayElement.innerHTML;this._selectedOption = option;this._options.forEach(function (option) {
          return option.displayElement.removeAttribute('selected');
        });option.displayElement.setAttribute('selected', '');
      }
    }
  }, {
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(chassis-options){position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}:host([open]) ::slotted(chassis-options){height:auto}:host([disabled]:not([disabled*=false])){pointer-events:none}chassis-select{display:inline-flex;flex-direction:column;width:100%;max-width:100%}:host :after,:host :before,chassis-select *{box-sizing:border-box}chassis-select chassis-options{position:absolute;top:100%;left:0;z-index:1;min-width:100%;height:0;overflow:hidden}chassis-select[open] chassis-options{height:auto}chassis-select[disabled]:not([disabled*=false]){pointer-events:none}</style><slot name="afterbegin"></slot><slot name="beforetitle"></slot><slot name="title"></slot><slot name="aftertitle"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>';
    }
  }, {
    key: 'autofocus',
    get: function get() {
      return this._getBooleanPropertyValue('autofocus');
    },
    set: function set(bool) {
      this._handleBooleanPropertyChange('autofocus', bool);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this._getBooleanPropertyValue('disabled');
    },
    set: function set(bool) {
      this._handleBooleanPropertyChange('disabled', bool);
    } // TODO: Look for form in parent nodes, this always returns null because
    // this._sourceEl is not in the DOM
    /**
     * @property form
     * @return {Object}
     * Parent Form Element
     * @readonly
     */
  }, {
    key: 'form',
    get: function get() {
      return this._sourceEl.form;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'form' });
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
      return this._sourceEl.length;
    } // TODO: Check this functionality
    /**
     * @property labels
     * @return {NodeList}
     * @readonly
     */
  }, {
    key: 'labels',
    get: function get() {
      return this._sourceEl.labels;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'labels' });
    }
  }, {
    key: 'name',
    get: function get() {
      return this._sourceEl.name;
    },
    set: function set(name) {
      this._handlePropertyChange('name', name);
    } /**
       * @property options
       * @return {HTMLOptionsCollection}
       * @readonly
       */
  }, {
    key: 'options',
    get: function get() {
      return this._sourceEl.options;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'options' });
    }
  }, {
    key: 'required',
    get: function get() {
      return this._getBooleanPropertyValue('required');
    },
    set: function set(bool) {
      this._handleBooleanPropertyChange('required', bool);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this._sourceEl.selectedIndex;
    },
    set: function set(index) {
      this.select(this._options[index].id);
    } /**
       * @property selectedOptions
       * @return {HTMLCollection}
       * @readonly
       */
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this._sourceEl.selectedOptions;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'selectedOptions' });
    }
  }, {
    key: 'sourceElement',
    get: function get() {
      return this._sourceEl;
    } /**
       * @property type
       * @return {Boolean}
       * @readonly
       */
  }, {
    key: 'type',
    get: function get() {
      return this._sourceEl.type;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'type' });
    } /**
       * @property validationMessage
       * @return {String}
       * @readonly
       */
  }, {
    key: 'validationMessage',
    get: function get() {
      return this._sourceEl.validationMessage;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'validationMessage' });
    } /**
       * @property validity
       * @return {Object}
       * @readonly
       */
  }, {
    key: 'validity',
    get: function get() {
      return this._sourceEl.validity;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'validity' });
    }
  }, {
    key: 'value',
    get: function get() {
      return this._sourceEl.value;
    } /**
       * @property willValidate
       * @return {Boolean}
       * @readonly
       */
  }, {
    key: 'willValidate',
    get: function get() {
      return this._sourceEl.willValidate;
    },
    set: function set(x) {
      this._throw('readonly', { name: 'willValidate' });
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['autofocus', 'disabled', 'name', 'open', 'tabindex'];
    }
  }]);
  return ChassisSelect;
}(HTMLElement);

customElements.define('chassis-select', ChassisSelect);