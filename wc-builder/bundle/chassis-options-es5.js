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

customElements.define('chassis-options', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforeoptions"></slot><slot></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>');

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
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
          });

          return prefix ? prefix + '_' + id : id;
        },

        getBooleanPropertyValue: function getBooleanPropertyValue(prop) {
          return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
        },

        handleAttributeChange: function handleAttributeChange(attr, val) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          _this.setAttribute(attr, val);
          _private.get(_this).sourceEl[attr] = val;
        },

        handleBooleanAttributeChange: function handleBooleanAttributeChange(attr, value) {
          if (!_private.get(_this).sourceEl) {
            return;
          }

          var acceptableValues = ['true', 'false', '', null];

          if (!acceptableValues.includes(value)) {
            console.error('<' + _this.tagName.toLowerCase() + '> "' + attr + '" attribute expected boolean but received "' + value + '"');
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          if (value === 'false' && _this.hasAttribute(attr)) {
            _this.removeAttribute(attr);
            _private.get(_this).sourceEl[attr] = false;
            return;
          }

          _private.get(_this).sourceEl[attr] = _this.hasAttribute(attr);
        },

        handleBooleanPropertyChange: function handleBooleanPropertyChange(prop, bool) {
          if (!bool) {
            _this.removeAttribute(prop);
            _private.get(_this).sourceEl[prop] = false;
            return;
          }

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== 'true') {
            _this.setAttribute(prop, '');
            _private.get(_this).sourceEl[prop] = true;
          }
        },

        handlePropertyChange: function handlePropertyChange(prop, val) {
          _private.get(_this).sourceEl[prop] = val;

          if (!_this.hasAttribute(prop) || _this.getAttribute(prop) !== val) {
            _this.setAttribute(prop, val);
          }
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
          var message = 'ERROR <chassis-options> ';

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
      _this.parent = null;_this.options = [];_this.selectedOption = null;_this.selectedOptionEl = null;
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {}
    }, {
      key: 'add',
      value: function add(option, index) {
        var _this2 = this;

        if (!customElements.get('chassis-option')) {
          console.error('<chassis-select> requires <chassis-option>. Please include it in this document\'s <head> element.');return;
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
        }var disabled = option.sourceElement.disabled;var id = option.sourceElement.getAttribute('id');var label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim();var selected = option.sourceElement.hasAttribute('selected');var value = option.sourceElement.getAttribute('value');var chassisOption = document.createElement('chassis-option');if (id) {
          chassisOption.id = id;
        }if (option.sourceElement.hasAttribute('label')) {
          chassisOption.setAttribute('label', option.sourceElement.getAttribute('label'));
        }if (value) {
          chassisOption.setAttribute('value', value);
        }if (disabled) {
          chassisOption.setAttribute('disabled', '');
        }chassisOption.key = _private.get(this).generateGuid();chassisOption.addEventListener('click', function (evt) {
          return _this2.selectByKey(chassisOption.key);
        });chassisOption.innerHTML = option.sourceElement.innerHTML;option = { attributes: { disabled: disabled, id: id, label: label, selected: selected, value: value }, key: chassisOption.key, displayElement: chassisOption, sourceElement: option.sourceElement };if (index) {
          this.insertBefore(chassisOption, this.children.item(index));this.parent['' + index] = option.displayElement;this.options.splice(index, 0, option);this.parent.sourceEl.add(option.sourceElement, index);if (selected) {
            this.selectByIndex(index);
          }return;
        }this.appendChild(chassisOption);this.parent['' + this.options.length] = option.displayElement;this.options.push(option);if (!this.parent.sourceElement[this.options.length - 1]) {
          this.parent.sourceElement.appendChild(option.sourceElement);
        }if (selected) {
          this.selectByKey(option.key);
        }
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

            var isElement = child instanceof HTMLElement;switch (child.nodeName) {case 'OPTION':
                this.add(isElement ? this.generateOptionObject(child) : child);break;case 'OPTGROUP':
                this.addOptgroup(isElement ? this.generateOptgroup(child) : child);break;default:
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
      key: 'addOptgroup',
      value: function addOptgroup(optgroup) {
        var label = document.createElement('chassis-optgroup-label');label.innerHTML = optgroup.getAttribute('label');this.appendChild(label);this.appendChild(optgroup);
      }
    }, {
      key: 'clear',
      value: function clear() {
        while (this.lastChild) {
          this.removeChild(this.lastChild);
        }
      }
    }, {
      key: 'deselectAll',
      value: function deselectAll() {
        this.selectedOption = null;this.parent.sourceElement.selectedIndex = -1;this.selectedOptionEl.contents = this.parent.placeholder;this.selectedOptionEl.setAttribute('placeholder', '');
      }
    }, {
      key: 'generateOptgroup',
      value: function generateOptgroup(optgroup) {
        if (!customElements.get('chassis-optgroup')) {
          console.error('<chassis-select> requires <chassis-optgroup>. Please include it in this document\'s <head> element.');return;
        }var fauxOptgroup = document.createElement('chassis-optgroup');fauxOptgroup.id = _private.get(this).generateGuid('optgroup');var label = optgroup.getAttribute('label');if (!label || label.trim() === '') {
          console.error('<optgroup> must have a label attribute!');return;
        }fauxOptgroup.setAttribute('label', label);var options = optgroup.querySelectorAll('option');var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(options), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var option = _step2.value;

            this.add(this.generateOptionObject(option), null, fauxOptgroup);
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

        return fauxOptgroup;
      }
    }, {
      key: 'generateOptionObject',
      value: function generateOptionObject(optionEl) {
        if (!customElements.get('chassis-option')) {
          console.error('<chassis-select> requires <chassis-option>. Please include it in this document\'s <head> element.');return;
        }var obj = { id: _private.get(this).generateGuid(), attributes: {}, sourceElement: optionEl };var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(optionEl.attributes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var attr = _step3.value;

            obj.attributes[attr.name] = attr.value;
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

        return obj;
      }
    }, {
      key: 'getOptionByKey',
      value: function getOptionByKey(key) {
        var option = void 0;for (var i = 0; i < this.options.length; i++) {
          if (this.options[i].key === key) {
            option = this.options[i];break;
          }
        }return option;
      }
    }, {
      key: 'item',
      value: function item(index) {
        return this.options[index].displayElement;
      }
    }, {
      key: 'namedItem',
      value: function namedItem(value) {
        var query = this.options.filter(function (option) {
          var id = option.sourceElement.attributes.getNamedItem('id');return id && id.value === value;
        });if (!query.length) {
          return null;
        }return query[query.length - 1].displayElement;
      }
    }, {
      key: 'remove',
      value: function remove() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (index === null) {
          return;
        }var option = this.options[index];option.sourceElement.remove();option.displayElement.remove();this.options.splice(index, 1);
      } /**
         * [select description]
         * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
         */
    }, {
      key: 'select',
      value: function select(option) {
        option.sourceElement.selected = true;this.selectedOptionEl.contents = option.displayElement.innerHTML;this.selectedOption = option;this.options.forEach(function (option) {
          return option.displayElement.removeAttribute('selected');
        });option.displayElement.setAttribute('selected', '');this.selectedOptionEl.removeAttribute('placeholder');this.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, {
      key: 'selectByKey',
      value: function selectByKey(key) {
        var option = this.getOptionByKey(key);if (!option) {
          console.error('Invalid option key "' + key + '"');return this.deselectAll();
        }this.select(option);
      }
    }, {
      key: 'selectByIndex',
      value: function selectByIndex(index) {
        var option = this.options[index];if (!option) {
          if (index >= 0) {
            return console.error('No option at index ' + index);
          }return this.deselectAll();
        }this.select(option);
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return this.options.indexOf(this.selectedOption);
      },
      set: function set(index) {
        this.selectByIndex(index);
      }
    }]);
    return _class;
  }(HTMLElement);
}());