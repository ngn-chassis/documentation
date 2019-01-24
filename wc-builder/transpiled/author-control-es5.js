"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

customElements.define('author-control',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:flex;contain:style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}:host([type=field]){flex-direction:column}:host([type=toggle]){align-items:center}:host .label-wrapper{flex:1 1 auto;display:flex}:host .input-wrapper{display:flex;align-items:center}:host([type=toggle]) .input-wrapper{order:-1;justify-content:center}:host([type=select]){flex-direction:column}author-control{display:flex;contain:style;max-width:100%}author-control *,author-control :after,author-control :before{box-sizing:border-box}author-control .hidden{display:none;visibility:hidden;opacity:0}author-control[type=field]){flex-direction:column}author-control[type=toggle]){align-items:center}author-control .label-wrapper{flex:1 1 auto;display:flex}author-control .input-wrapper{display:flex;align-items:center}author-control[type=toggle]) .input-wrapper{order:-1;justify-content:center}author-control[type=select]){flex-direction:column}</style><slot name=\"afterbegin\"></slot><slot name=\"beforelabelwrapper\"></slot><div class=\"label-wrapper\"><slot name=\"beforelabel\"></slot><slot name=\"label\"></slot><slot name=\"afterlabel\"></slot></div><slot name=\"afterlabelwrapper\"></slot><slot name=\"beforeinputwrapper\"></slot><div class=\"input-wrapper\"><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot></div><slot name=\"afterinputwrapper\"></slot><slot name=\"beforeend\"></slot></template>"));

    _this.UTIL.defineAttributes({
      type: ''
    });

    _this.UTIL.defineProperties({
      input: {
        private: true
      },
      fieldInputTypes: {
        readonly: true,
        private: true,
        default: ['color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea']
      },
      toggleInputTypes: {
        readonly: true,
        private: true,
        default: ['checkbox', 'radio']
      },
      supportedTypes: {
        readonly: true,
        private: true,
        default: ['field', 'toggle', 'select']
      }
    });

    _this.UTIL.definePrivateMethods({
      initDatalist: function initDatalist(input, datalist) {
        _this.type = 'field';

        if (!customElements.get('author-datalist')) {
          console.dir(input);
          input.id = _this.PRIVATE.guid;
          datalist.id = "".concat(input.id, "_datalist");
          input.setAttribute('list', datalist.id);
          input.slot = input.slot || 'input'; // select.setAttribute('role', 'menu')

          _this.PRIVATE.input = input;
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

        var surrogate = document.createElement('author-datalist');
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

        surrogate.inject(input, datalist, _this.PRIVATE.guid);

        _this.appendChild(surrogate);

        _this.PRIVATE.input = surrogate;
      },
      initInput: function initInput(input) {
        input.slot = input.slot || 'input';
        _this.PRIVATE.input = input;
        input.id = _this.PRIVATE.guid;

        if (_this.PRIVATE.fieldInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'field';
        }

        if (_this.PRIVATE.toggleInputTypes.indexOf(input.type) >= 0) {
          _this.type = 'toggle';
        }
      },
      initLabel: function initLabel(label) {
        _this.label = label;
        label.slot = label.slot || 'label';
        label.htmlFor = _this.PRIVATE.guid;

        if (_this.type === 'select') {
          _this.label.addEventListener('click', function (evt) {
            _this.input.focus();
          });
        }
      },
      initDefaultSelect: function initDefaultSelect(select) {
        select.id = _this.PRIVATE.guid;
        select.slot = select.slot || 'input';
        select.setAttribute('role', 'menu');
        _this.PRIVATE.input = select; // Purge incompatible attributes

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

        if (!customElements.get('author-select')) {
          return _this.PRIVATE.initDefaultSelect(select);
        }

        _this.PRIVATE.initSelectSurrogate(select, document.createElement('author-select'));
      },
      initSelectSurrogate: function initSelectSurrogate(original, surrogate) {
        surrogate.slot = 'input';
        surrogate.id = _this.PRIVATE.guid;
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

        _this.PRIVATE.input = surrogate;
      },
      initSelectMenu: function initSelectMenu(select) {
        _this.type = 'select';

        if (!customElements.get('author-select')) {
          return _this.PRIVATE.initDefaultSelect(select);
        }

        _this.PRIVATE.initSelectSurrogate(select, document.createElement('author-select'));
      }
    });

    _this.UTIL.monitorChildren(function (mutations, observer) {
      var filtered = mutations.filter(function (record) {
        return record.addedNodes.item(0).nodeType !== 3;
      });
      filtered.forEach(function (record, index, array) {
        var node = record.addedNodes.item(0);

        switch (node.nodeName) {
          case 'LABEL':
            return _this.PRIVATE.initLabel(node);

          case 'INPUT':
            // Check if there is an additional element adjacent to the input
            if (array[index + 1] === void 0) {
              return _this.PRIVATE.initInput(node);
            }

            var adjacentElement = array[index + 1].addedNodes.item(0);

            if (!adjacentElement || adjacentElement.nodeName !== 'DATALIST') {
              return _this.PRIVATE.initInput(node);
            }

            return _this.PRIVATE.initDatalist(node, adjacentElement);

          case 'TEXTAREA':
            return _this.PRIVATE.initInput(node);

          case 'SELECT':
            if (!node.multiple) {
              return _this.PRIVATE.initSelectMenu(node);
            }

            return _this.PRIVATE.initMultipleSelectMenu(node);

          default:
            return;
        }
      });
      observer.disconnect();
    });

    _this.UTIL.registerListener((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'connected', function () {
      _this.PRIVATE.guid = _this.UTIL.generateGuid('control');
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "input",
    get: function get() {
      return this.PRIVATE.input;
    },
    set: function set(input) {
      if (this.input) {
        return console.warn("Setting <".concat(this.localName, "> child input programmatically is not allowed."));
      }

      this.PRIVATE.input = input;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled'];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));