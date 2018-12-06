"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-control', function () {
  var _ = new WeakMap();

  return (
    /*#__PURE__*/
    function (_HTMLElement) {
      (0, _inherits2.default)(_class, _HTMLElement);

      function _class() {
        var _this;

        (0, _classCallCheck2.default)(this, _class);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
        _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

        _this.attachShadow({
          mode: 'open'
        });

        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset \"UTF-8\"; :host {\n  display: flex;\n  contain: layout style;\n  max-width: 100%;\n}\n\n:host *,\n:host *:before,\n:host *:after {\n  box-sizing: border-box;\n}\n\n:host .hidden {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([type=\"field\"]) {\n  flex-direction: column;\n}\n\n:host([type=\"toggle\"]) {\n  align-items: center;\n}\n\n:host .label-wrapper {\n  flex: 1 1 auto;\n  display: flex;\n}\n\n:host .input-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n:host([type=\"toggle\"]) .input-wrapper {\n  order: -1;\n  justify-content: center;\n}\n\n:host([type=\"select\"]) {\n  flex-direction: column;\n}\n\nchassis-control {\n  display: flex;\n  contain: layout style;\n  max-width: 100%;\n}\n\nchassis-control *,\nchassis-control *:before,\nchassis-control *:after {\n  box-sizing: border-box;\n}\n\nchassis-control .hidden {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n}\n\nchassis-control[type=\"field\"] {\n  flex-direction: column;\n}\n\nchassis-control[type=\"toggle\"] {\n  align-items: center;\n}\n\nchassis-control .label-wrapper {\n  flex: 1 1 auto;\n  display: flex;\n}\n\nchassis-control .input-wrapper {\n  display: flex;\n  align-items: center;\n}\n\nchassis-control[type=\"toggle\"] .input-wrapper {\n  order: -1;\n  justify-content: center;\n}\n\nchassis-control[type=\"select\"] {\n  flex-direction: column;\n}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabelwrapper\"></slot><div class=\"label-wrapper\"><slot name=\"beforelabel\"></slot><slot name=\"label\"></slot><slot name=\"afterlabel\"></slot></div><slot name=\"afterlabelwrapper\"></slot><slot name=\"beforeinputwrapper\"></slot><div class=\"input-wrapper\"><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot></div><slot name=\"afterinputwrapper\"></slot><slot name=\"beforeend\"></slot></template>");
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

        _.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          sourceElement: null,
          addAttribute: function addAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return this.getAttribute(prop);
              },
              set: function set(value) {
                _.get(this).setAttributeValue(prop, value);
              }
            });
          },
          addAttributes: function addAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addAttribute(prop);
            });
          },
          setAttributeValue: function setAttributeValue(attr, val) {
            _this.setAttribute(attr, val);

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = val;
            }
          },
          addReadOnlyProperty: function addReadOnlyProperty(prop) {
            var custom = (0, _typeof2.default)(prop) === 'object';

            if (!custom && typeof prop !== 'string') {
              return console.error('ERROR <chassis-control> Read-only property must be type "object" or "string"');
            }

            var props = {
              set: function set() {
                _.get(this).throw('readonly', {
                  prop: custom ? prop.name : prop
                });
              }
            };

            if (custom && prop.hasOwnProperty('get')) {
              props.get = prop.get;
            } else {
              props.get = function () {
                return _.get(this)[prop];
              };
            }

            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), custom ? prop.name : prop, props);
          },
          addReadOnlyProperties: function addReadOnlyProperties(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperty(prop);
            });
          },
          setReadOnlyPropertyValue: function setReadOnlyPropertyValue(value) {
            return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[prop] = value;
          },
          addBooleanAttribute: function addBooleanAttribute(prop) {
            Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), prop, {
              get: function get() {
                return _.get(this).getBooleanAttributeValue(prop);
              },
              set: function set(value) {
                _.get(this).setBooleanAttributeValue(prop, value);
              }
            });
          },
          addBooleanAttributes: function addBooleanAttributes(props) {
            return props.forEach(function (prop) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addBooleanAttribute(prop);
            });
          },
          getBooleanAttributeValue: function getBooleanAttributeValue(prop) {
            return _this.hasAttribute(prop) && _this.getAttribute(prop) !== 'false';
          },
          setBooleanAttributeValue: function setBooleanAttributeValue(attr, value) {
            if (typeof value === 'boolean') {
              value = value.toString();
            }

            var acceptableValues = ['true', 'false', '', null];

            if (!acceptableValues.includes(value)) {
              console.error("<".concat(_this.localName, "> \"").concat(attr, "\" attribute expected boolean but received \"").concat(value, "\""));

              _this.removeAttribute(attr);

              if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
              }

              return;
            }

            switch (value) {
              case 'false':
              case null:
                _this.removeAttribute(attr);

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = false;
                }

                break;

              case 'true':
              case '':
                _this.setAttribute(attr, '');

                if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement) {
                  _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).sourceElement[attr] = true;
                }

                break;

              default:
                return;
            }
          },
          addPrivateProperties: function addPrivateProperties(props) {
            for (var _prop in props) {
              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)))[_prop] = props[_prop];
            }
          },
          generateGuid: function generateGuid() {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _this.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
            return prefix ? "".concat(prefix, "_").concat(id) : id;
          },
          emit: function emit(name, detail) {
            var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (target) {
              return target.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
            }

            _this.dispatchEvent(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).newEvent(name, detail));
          },
          newEvent: function newEvent(name, detail) {
            return new CustomEvent(name, {
              detail: detail
            });
          },
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-control> ';

            switch (type) {
              case 'readonly':
                message += "Cannot set read-only property \"".concat(vars.prop, "\".");
                break;

              default:
                message = message.trim();
            }

            console.error(message);
          }
        });

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          fieldInputTypes: ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea'],
          toggleInputTypes: ['checkbox', 'radio'],
          supportedTypes: ['field', 'toggle', 'select'],
          input: null,
          initDatalist: function initDatalist(input, datalist) {
            _this.type = 'field';

            if (!customElements.get('chassis-datalist')) {
              console.dir(input);
              input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
              datalist.id = "".concat(input.id, "_datalist");
              input.setAttribute('list', datalist.id);
              input.slot = input.slot || 'input'; // select.setAttribute('role', 'menu')

              _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
              var titleEls = datalist.querySelectorAll('option[title]');
              titleEls.forEach(function (el) {
                return select.removeChild(el);
              });
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = datalist.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var option = _step.value;

                  if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                    option.removeAttribute('label');
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return;
            }

            var surrogate = document.createElement('chassis-datalist');
            surrogate.slot = 'input';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = datalist.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attr = _step2.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    datalist.removeAttribute(attr.name);
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this.removeChild(datalist);

            _this.removeChild(input);

            surrogate.inject(input, datalist, _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid);

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initInput: function initInput(input) {
            input.slot = input.slot || 'input';
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = input;
            input.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).fieldInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'field';
            }

            if (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).toggleInputTypes.indexOf(input.type) >= 0) {
              _this.type = 'toggle';
            }
          },
          initLabel: function initLabel(label) {
            _this.label = label;
            label.slot = label.slot || 'label';
            label.htmlFor = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;

            if (_this.type === 'select') {
              _this.label.addEventListener('click', function (evt) {
                _this.input.focus();
              });
            }
          },
          initDefaultSelect: function initDefaultSelect(select) {
            select.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            select.slot = select.slot || 'input';
            select.setAttribute('role', 'menu');
            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = select; // Purge incompatible attributes

            var titleEls = select.querySelectorAll('option[title]');
            titleEls.forEach(function (el) {
              return select.removeChild(el);
            });
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = select.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var option = _step3.value;

                if (option.hasAttribute('label') && option.getAttribute('label').trim() === '') {
                  option.removeAttribute('label');
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          },
          initMultipleSelectMenu: function initMultipleSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          },
          initSelectSurrogate: function initSelectSurrogate(original, surrogate) {
            surrogate.slot = 'input';
            surrogate.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).guid;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = original.attributes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var attr = _step4.value;

                if (attr.specified) {
                  surrogate.setAttribute(attr.name, attr.value);

                  if (attr.name === 'autofocus') {
                    original.removeAttribute(attr.name);
                  }
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this.removeChild(original);

            surrogate.inject(original, _this.querySelectorAll('label'));

            _this.appendChild(surrogate);

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).input = surrogate;
          },
          initSelectMenu: function initSelectMenu(select) {
            _this.type = 'select';

            if (!customElements.get('chassis-select')) {
              return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDefaultSelect(select);
            }

            _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectSurrogate(select, document.createElement('chassis-select'));
          },
          observer: new MutationObserver(function (mutations, observer) {
            var filtered = mutations.filter(function (record) {
              return record.addedNodes.item(0).nodeType !== 3;
            });
            filtered.forEach(function (record, index, array) {
              var node = record.addedNodes.item(0);

              switch (node.nodeName) {
                case 'LABEL':
                  return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initLabel(node);

                case 'INPUT':
                  // Check if there is an additional element adjacent to the input
                  if (array[index + 1] === void 0) {
                    return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initInput(node);
                  }

                  var adjacentElement = array[index + 1].addedNodes.item(0);

                  if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
                    return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initInput(node);
                  }

                  return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initDatalist(node, adjacentElement);

                case 'TEXTAREA':
                  return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initInput(node);

                case 'SELECT':
                  if (!node.multiple) {
                    return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initSelectMenu(node);
                  }

                  return _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).initMultipleSelectMenu(node);

                default:
                  return;
              }
            });
            observer.disconnect();
          })
        });

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).observer.observe((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), {
          childList: true
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          _.get(this).guid = _.get(this).generateGuid('control');
        }
      }, {
        key: "input",
        get: function get() {
          return _.get(this).input;
        },
        set: function set(input) {
          if (this.input) {
            console.warn("Setting <chassis-control> child input programmatically is not allowed.");
            return;
          }

          _.get(this).input = input;
        }
      }, {
        key: "type",
        get: function get() {
          return this.getAttribute('type');
        },
        set: function set(value) {
          this.setAttribute('type', value);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ['disabled'];
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());