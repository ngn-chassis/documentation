"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

customElements.define('chassis-options', function () {
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
        container.insertAdjacentHTML('afterbegin', "<template><style>@charset UTF-8; @charset \"UTF-8\";:host{display:block;width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-options{display:block;width:100%}:host :after,:host :before,chassis-options *{box-sizing:border-box}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeoptions\"></slot><slot></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>");
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
              return console.error('ERROR <chassis-options> Read-only property must be type "object" or "string"');
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
          throw: function _throw(type, vars) {
            var message = 'ERROR <chassis-options> ';

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

        _this.parent = null;
        _this.mousedown = false;

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addReadOnlyProperties([{
          name: 'form',
          get: function get() {
            return this.parent.form;
          }
        }, {
          name: 'displayOptions',
          get: function get() {
            var _this2 = this;

            return new (_.get(this).ChassisHTMLOptionsCollection())(this.options.map(function (option) {
              return option.displayElement;
            }), this.selectedIndex, function (element, before) {
              _this2.add(_.get(_this2).generateOptionObject(element), before);
            }, function (index) {
              return _this2.removeOptionByIndex(index);
            });
          }
        }, {
          name: 'hoveredIndex',
          get: function get() {
            return this.options.findIndex(function (option) {
              return option.displayElement.hover;
            });
          }
        }, 'options', {
          name: 'selectedOptions',
          get: function get() {
            var nodes = this.querySelectorAll('[selected]');
            return new (_.get(this).ChassisHTMLCollection())(nodes);
          }
        }]);

        _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).addPrivateProperties({
          options: [],
          selectionStartIndex: -1,
          selection:
          /*#__PURE__*/
          function () {
            function selection(options) {
              (0, _classCallCheck2.default)(this, selection);
              this.options = options;
            }

            (0, _createClass2.default)(selection, [{
              key: "append",
              value: function append(option) {
                this.options.push(option);
              }
            }, {
              key: "clear",
              value: function clear() {
                this.options = [];
              }
            }, {
              key: "prepend",
              value: function prepend(option) {
                this.options.unshift(option);
              }
            }, {
              key: "length",
              get: function get() {
                return this.options.length;
              }
            }]);
            return selection;
          }(),
          optionConstructor: function optionConstructor() {
            var _p = new WeakMap();

            return (
              /*#__PURE__*/
              function () {
                function ChassisOptionObject(parent, key, sourceElement, displayElement) {
                  (0, _classCallCheck2.default)(this, ChassisOptionObject);
                  this.key = key;
                  this.form = parent.form;
                  this.defaultSelected = sourceElement.selected;
                  this.sourceElement = sourceElement;
                  this.displayElement = displayElement;
                  this.displayElement.parent = parent;
                  this.displayElement.defaultSelected = sourceElement.selected;
                  this.displayElement.innerHTML = sourceElement.innerHTML;
                  this.displayElement.addEventListener('mousedown', function (evt) {
                    parent.select(key, evt.shiftKey, evt.ctrlKey, evt.metaKey);
                  }); // Add additional attributes

                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = sourceElement.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var attr = _step.value;

                      if (typeof attr.value === 'boolean') {
                        attr.value ? this.displayElement.setAttribute(attr.name, '') : this.displayElement.removeAttribute(attr.name);
                        continue;
                      }

                      this.displayElement.setAttribute(attr.name, attr.value);
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

                  _p.set(this, {
                    attributes: {
                      disabled: sourceElement.disabled,
                      id: sourceElement.getAttribute('id'),
                      label: sourceElement.getAttribute('label') || sourceElement.textContent.trim(),
                      selected: sourceElement.selected,
                      value: sourceElement.getAttribute('value').trim(),
                      text: sourceElement.text.trim()
                    }
                  });
                }

                (0, _createClass2.default)(ChassisOptionObject, [{
                  key: "remove",
                  value: function remove() {
                    this.sourceElement.remove();
                    this.displayElement.remove();
                  }
                }, {
                  key: "setAttr",
                  value: function setAttr(name, value) {
                    this.sourceElement[name] = value;

                    if (typeof value === 'boolean') {
                      value ? this.displayElement.setAttribute(name, '') : this.displayElement.removeAttribute(name);
                    } else {
                      this.displayElement.setAttribute(name, value);
                    }

                    _p.get(this).attributes[name] = value;
                  }
                }, {
                  key: "disabled",
                  get: function get() {
                    return _p.get(this).attributes.disabled;
                  },
                  set: function set(bool) {
                    this.setAttr('disabled', bool);
                  }
                }, {
                  key: "index",
                  get: function get() {
                    return this.sourceElement.index;
                  }
                }, {
                  key: "id",
                  get: function get() {
                    return _p.get(this).attributes.id;
                  },
                  set: function set(id) {
                    this.setAttr('id', id);
                  }
                }, {
                  key: "selected",
                  get: function get() {
                    return _p.get(this).attributes.selected;
                  },
                  set: function set(bool) {
                    this.setAttr('selected', bool);
                  }
                }, {
                  key: "label",
                  get: function get() {
                    return _p.get(this).attributes.label;
                  },
                  set: function set(label) {
                    this.setAttr('label', label);
                  }
                }, {
                  key: "text",
                  get: function get() {
                    return _p.get(this).attributes.text;
                  },
                  set: function set(text) {
                    this.setAttr('text', text);
                  }
                }, {
                  key: "value",
                  get: function get() {
                    return _p.get(this).attributes.value;
                  },
                  set: function set(value) {
                    this.setAttr('value', value);
                  }
                }]);
                return ChassisOptionObject;
              }()
            );
          },
          generateOptionObject: function generateOptionObject(sourceElement) {
            if (!customElements.get('chassis-option')) {
              console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
              return;
            }

            return new (_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).optionConstructor())((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid(), sourceElement, document.createElement('chassis-option'));
          },
          generateSourceOptionElement: function generateSourceOptionElement(option) {
            var sourceEl = document.createElement('option');

            if (option.hasOwnProperty('innerHTML')) {
              sourceEl.innerHTML = option.innerHTML;
            }

            if (option.hasOwnProperty('label')) {
              sourceEl.innerHTML = option.label;
            }

            if (option.hasOwnProperty('value')) {
              sourceEl.value = option.value;
            }

            if (option.hasOwnProperty('disabled')) {
              sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled;
            }

            return sourceEl;
          },
          generateOptgroup: function generateOptgroup(optgroup) {
            if (!customElements.get('chassis-optgroup')) {
              console.error("<chassis-select> requires <chassis-optgroup>. Please include it in this document's <head> element.");
              return;
            }

            var surrogate = document.createElement('chassis-optgroup');
            surrogate.id = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateGuid('optgroup');
            var label = optgroup.getAttribute('label');

            if (!label || label.trim() === '') {
              console.error('<optgroup> must have a label attribute!');
              return;
            }

            surrogate.setAttribute('label', label);
            var options = optgroup.querySelectorAll('option');
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var option = _step2.value;

                _this.add(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).generateOptionObject(option), null, surrogate);
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

            return surrogate;
          },
          ChassisHTMLCollection: function ChassisHTMLCollection() {
            var _p = new WeakMap();

            return (
              /*#__PURE__*/
              function () {
                function ChassisHTMLCollection(arr) {
                  var _this3 = this;

                  (0, _classCallCheck2.default)(this, ChassisHTMLCollection);

                  _p.set(this, {
                    arr: arr
                  });

                  arr.forEach(function (node, index) {
                    _this3[index] = node;

                    if (node.id) {
                      _this3[node.id] = node;
                    }
                  });
                }

                (0, _createClass2.default)(ChassisHTMLCollection, [{
                  key: "item",
                  value: function item(index) {
                    return _p.get(this).arr[index];
                  }
                }, {
                  key: "namedItem",
                  value: function namedItem(name) {
                    var matches = _p.get(this).arr.filter(function (item) {
                      return item.id === name || item.name === name;
                    });

                    return matches.length > 0 ? matches[0] : null;
                  }
                }, {
                  key: Symbol.iterator,
                  value: function value() {
                    var _this4 = this;

                    var index = 0;
                    return {
                      next: function next() {
                        var result = {
                          value: _p.get(_this4).arr[index],
                          done: !(index in _p.get(_this4).arr)
                        };
                        index++;
                        return result;
                      }
                    };
                  }
                }, {
                  key: Symbol.toStringTag,
                  value: function value() {
                    return 'ChassisHTMLCollection';
                  }
                }, {
                  key: "length",
                  get: function get() {
                    return _p.get(this).arr.length;
                  }
                }]);
                return ChassisHTMLCollection;
              }()
            );
          },
          ChassisHTMLOptionsCollection: function ChassisHTMLOptionsCollection() {
            var _p = new WeakMap();

            var ChassisHTMLOptionsCollection =
            /*#__PURE__*/
            function (_$get$ChassisHTMLColl) {
              (0, _inherits2.default)(ChassisHTMLOptionsCollection, _$get$ChassisHTMLColl);

              function ChassisHTMLOptionsCollection(arr) {
                var _this5;

                var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
                var add = arguments.length > 2 ? arguments[2] : undefined;
                var remove = arguments.length > 3 ? arguments[3] : undefined;
                (0, _classCallCheck2.default)(this, ChassisHTMLOptionsCollection);
                _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChassisHTMLOptionsCollection).call(this, arr));
                _this5.selectedIndex = selectedIndex;
                _this5.add = add;
                _this5.remove = remove;

                _p.set((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this5)), {
                  arr: arr
                });

                return _this5;
              }

              (0, _createClass2.default)(ChassisHTMLOptionsCollection, [{
                key: Symbol.toStringTag,
                value: function value() {
                  return 'ChassisHTMLOptionsCollection';
                }
              }]);
              return ChassisHTMLOptionsCollection;
            }(_.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).ChassisHTMLCollection());

            return ChassisHTMLOptionsCollection;
          },
          selectByKey: function selectByKey(key) {
            var _this6;

            var option = _.get((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).getOptionByKey(key);

            if (!option) {
              console.error("Invalid option key \"".concat(key, "\""));
              return _this.deselectAll();
            }

            for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              keys[_key - 1] = arguments[_key];
            }

            (_this6 = _this).select.apply(_this6, [option].concat(keys));
          },
          selectByIndex: function selectByIndex(index) {
            var _this7;

            var option = _this.options[index];

            if (!option) {
              if (index >= 0) {
                return console.error("No option at index ".concat(index));
              }

              return;
            }

            for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              keys[_key2 - 1] = arguments[_key2];
            }

            (_this7 = _this).select.apply(_this7, [option].concat(keys));
          },
          selectByString: function selectByString(string) {
            var _this8;

            var query;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _this.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var option = _step3.value;

                if (option.key === string || option.id === string) {
                  query = option;
                  break;
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

            if (!query) {
              console.error("Option matching query \"".concat(key, "\" not found"));
              return;
            }

            for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              keys[_key3 - 1] = arguments[_key3];
            }

            (_this8 = _this).select.apply(_this8, [query].concat(keys));
          },
          selectOption: function selectOption(option) {
            option.selected = true;

            _this.parent.selectedOptionsElement.add(option);

            _this.parent.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          }
        });

        _this.addEventListener('mousedown', function (evt) {
          return _this.mousedown = true;
        });

        _this.addEventListener('mouseup', function (evt) {
          return _this.mousedown = false;
        });

        return _this;
      }

      (0, _createClass2.default)(_class, [{
        key: "hoverOption",
        value: function hoverOption(index) {
          this.unHoverAllOptions();
          this.options[index].displayElement.hover = true;
        }
      }, {
        key: "unHoverOption",
        value: function unHoverOption(index) {
          this.options[index].displayElement.hover = false;
        }
      }, {
        key: "unHoverAllOptions",
        value: function unHoverAllOptions() {
          var _this9 = this;

          this.options.forEach(function (option, index) {
            return _this9.unHoverOption(index);
          });
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _.get(this).selectionStartIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0;
        }
      }, {
        key: "add",
        value: function add(option) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var dest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

          if (!customElements.get('chassis-option')) {
            console.error("<chassis-select> requires <chassis-option>. Please include it in this document's <head> element.");
            return;
          }

          if (option instanceof Option) {
            option = _.get(this).generateOptionObject(option);
          }

          this.parent["".concat(option.index)] = option.displayElement;

          if (index) {
            dest.insertBefore(option.displayElement, dest.children.item(index));
            this.options.splice(index, 0, option);
            this.parent.sourceElement.add(option.sourceElement, index);
          } else {
            dest.appendChild(option.displayElement);
            this.options.push(option);

            if (!this.parent.sourceElement[this.options.length - 1]) {
              this.parent.sourceElement.appendChild(option.sourceElement);
            }
          }

          if (option.selected) {
            _.get(this).selectByString(option.key, false, false, false);
          }
        }
      }, {
        key: "addChildren",
        value: function addChildren(children) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var child = _step4.value;
              var isElement = child instanceof HTMLElement;

              switch (child.nodeName) {
                case 'OPTION':
                  this.add(isElement ? _.get(this).generateOptionObject(child) : child);
                  break;

                case 'OPTGROUP':
                  this.addOptgroup(isElement ? _.get(this).generateOptgroup(child) : child);
                  break;

                default:
                  console.warn("".concat(child.nodeName.toLowerCase(), " is not a valid child element for <chassis-select>. Removing..."));
                  break;
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
        }
      }, {
        key: "addOptgroup",
        value: function addOptgroup(optgroup) {
          var label = document.createElement('chassis-optgroup-label');
          label.innerHTML = optgroup.getAttribute('label');
          this.appendChild(label);
          this.appendChild(optgroup);
        }
      }, {
        key: "clear",
        value: function clear() {
          while (this.lastChild) {
            this.removeChild(this.lastChild);
          }
        }
      }, {
        key: "deselect",
        value: function deselect(option) {
          option.selected = false;
          this.parent.selectedOptionsElement.remove(option);
        }
      }, {
        key: "deselectAll",
        value: function deselectAll() {
          var _this10 = this;

          this.parent.selectedOptionsElement.clear();
          this.options.filter(function (option) {
            return option.selected;
          }).forEach(function (option) {
            return _this10.deselect(option);
          });
        }
      }, {
        key: "item",
        value: function item(index) {
          return this.options[index].displayElement;
        }
      }, {
        key: "namedItem",
        value: function namedItem(value) {
          var query = this.options.filter(function (option) {
            var id = option.sourceElement.attributes.getNamedItem('id');
            return id && id.value === value;
          });

          if (!query.length) {
            return null;
          }

          return query[query.length - 1].displayElement;
        }
        /**
         * @method removeOptionByIndex
         * @param  {Number}  [index=null]
         * Index of option to remove
         * @param  {Boolean} [destroy=true]
         */

      }, {
        key: "removeOptionByIndex",
        value: function removeOptionByIndex() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (index === null || index >= this.options.length) {
            return;
          }

          this.options[index].remove();
        }
      }, {
        key: "select",

        /**
         * [select description]
         * TODO: see if its possible to set Event.isTrusted to true for the change event dispatched in this method
         */
        value: function select(option) {
          var _this11 = this;

          var shiftKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var ctrlKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var metaKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var keys = Array.prototype.slice.call(arguments, 1);

          if (Array.isArray(option)) {
            return console.log('Handle array of indexes');
          }

          if (typeof option === 'number') {
            var _$get;

            return (_$get = _.get(this)).selectByIndex.apply(_$get, [option].concat((0, _toConsumableArray2.default)(keys)));
          }

          if (typeof option === 'string') {
            var _$get2;

            return (_$get2 = _.get(this)).selectByString.apply(_$get2, [option].concat((0, _toConsumableArray2.default)(keys)));
          }

          var selection = new (_.get(this).selection)([option]);
          var deselectAll = true;

          if (this.parent.multiple) {
            var _$get3 = _.get(this),
                selectionStartIndex = _$get3.selectionStartIndex;

            if (shiftKey) {
              if (this.selectedOptions.length === 1) {
                if (option.index === this.selectedIndex) {
                  return;
                }

                selection.clear();

                if (option.index < this.selectedIndex) {
                  for (var i = this.selectedIndex; i >= option.index; i--) {
                    selection.prepend(this.options[i]);
                  }
                }

                if (option.index > this.selectedIndex) {
                  for (var _i = this.selectedIndex; _i <= option.index; _i++) {
                    selection.append(this.options[_i]);
                  }
                }
              }

              if (this.selectedOptions.length > 1 && option.index !== selectionStartIndex) {
                selection.clear();

                if (option.index < selectionStartIndex) {
                  for (var _i2 = selectionStartIndex; _i2 >= option.index; _i2--) {
                    selection.prepend(this.options[_i2]);
                  }
                }

                if (option.index > selectionStartIndex) {
                  for (var _i3 = selectionStartIndex; _i3 <= option.index; _i3++) {
                    selection.append(this.options[_i3]);
                  }
                }
              } // return selection.options.forEach(option => console.log(option.displayElement))

            } else if (ctrlKey || metaKey) {
              _.get(this).selectionStartIndex = option.index;

              if (option.selected) {
                return this.deselect(option);
              }

              deselectAll = false;
            }
          } else if (option.selected) {
            return;
          }

          if (selection.length === 1) {
            _.get(this).selectionStartIndex = option.index;
          }

          deselectAll && this.deselectAll();
          selection.options.forEach(function (option) {
            return _.get(_this11).selectOption(option);
          });

          if (!this.parent.multiple) {
            this.parent.open = false;
          }

          this.unHoverAllOptions();
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          var _this12 = this;

          return this.options.findIndex(function (option) {
            return option.displayElement === _this12.selectedOptions.item(0);
          });
        },
        set: function set(index) {
          this.select(index);
        }
      }, {
        key: "start",
        get: function get() {
          return _.get(this).selectionStartIndex;
        }
      }]);
      return _class;
    }((0, _wrapNativeSuper2.default)(HTMLElement))
  );
}());