'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

customElements.define('chassis-cycle', function () {
  var _private = new _weakMap2.default();

  return function (_HTMLElement) {
    (0, _inherits3.default)(_class, _HTMLElement);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

      _this.keySource = 'key' in KeyboardEvent.prototype ? 'key' : 'keyIdentifier' in KeyboardEvent.prototype ? 'keyIdentifier' : 'keyCode';

      _this.attachShadow({ mode: 'open' });

      var container = document.createElement('div');
      container.insertAdjacentHTML('afterbegin', '<template><style>@charset UTF-8; @charset "UTF-8";:host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(:not([active])){display:none!important}chassis-cycle{display:block}:host :after,:host :before,chassis-cycle *{box-sizing:border-box}</style><slot></slot></template>');

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
          var message = 'ERROR <chassis-cycle> ';

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
      _private.get(_this).hideChild = function (child) {
        child.removeAttribute('active', '');
      };_private.get(_this).showChild = function (child) {
        _private.get(_this).hideChild(_this.children.item(_this.activeIndex));child.setAttribute('active', '');
      };_private.get(_this).showChildByIndex = function (index) {
        if (_this.activeIndex === index || index >= _this.children.length || index < 0) {
          return;
        }_private.get(_this).showChild(_this.children.item(index));
      };_private.get(_this).showChildBySelector = function (query) {
        var nodes = _this.querySelectorAll(query);if (!nodes.length) {
          return;
        }if (nodes.length > 1) {
          console.warn('<chassis-cycle> found multiple nodes matching "' + query + '". Displaying first result...');
        }_private.get(_this).showChild(nodes.item(0));
      };_private.get(_this).replaceDeprecatedAttributes = function (child) {
        if (child.hasAttribute('selected')) {
          console.warn('<chassis-cycle> \'selected\' attribute is deprecated. Please use \'active\' instead.');child.removeAttribute('selected');child.setAttribute('active', '');
        }
      };
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var addedNodes = mutation.addedNodes,
                removedNodes = mutation.removedNodes,
                type = mutation.type;
            switch (type) {case 'childList':
                if (removedNodes.length > 0 && !_this2.activeElement) {
                  return _this2.previous();
                }if (addedNodes.length === 0 || addedNodes.item(0).nodeType !== Node.ELEMENT_NODE) {
                  return;
                }var node = addedNodes.item(0);if (node.nodeType !== Node.ELEMENT_NODE) {
                  return;
                }_private.get(_this2).replaceDeprecatedAttributes(node);if (node.hasAttribute('active')) {
                  return _this2.show(node);
                }default:
                return;}
          });
        });observer.observe(this, { attributes: false, childList: true, characterData: false });setTimeout(function () {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(_this2.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;

              _private.get(_this2).replaceDeprecatedAttributes(child);
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
        }, 0);
      } /**
         * @method hideActive
         * Deactivate the currently active page.
         * @deprecated
         */
    }, {
      key: 'hide',
      value: function hide(child) {
        console.warn('<chassis-cycle> "hide()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.');_private.get(this).hideChild(child);
      } /**
         * @method hideActive
         * Deactivate the currently active page.
         * @deprecated
         */
    }, {
      key: 'hideActive',
      value: function hideActive() {
        console.warn('<chassis-cycle> "hideActive()" method is deprecated. Please use "show()" and "hideAll()" to manage active/inactive pages.');_private.get(this).hideChild(this.activeElement);
      } /**
         * @method hideAll
         * Deactivate all pages.
         */
    }, {
      key: 'hideAll',
      value: function hideAll() {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(this.children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            _private.get(this).hideChild(child);
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
      } /**
         * @method first
         * A helper method to display the first child element.
         */
    }, {
      key: 'first',
      value: function first() {
        this.show(1);
      } /**
         * @method last
         * A helper method to display the last child element.
         */
    }, {
      key: 'last',
      value: function last() {
        this.show(this.children.length);
      } /**
         * @method next
         * Deactivate the currently active child element and activate the one
         * immediately adjacent to it.
         * @param {function} callback
         * Executed when the operation is complete.
         */
    }, {
      key: 'next',
      value: function next(callback) {
        this.show(this.activePage === this.children.length ? 1 : this.activePage + 1);callback && callback(this.activeElement);
      } /**
         * @method previous
         * Deactivate the currently active child element and activate the one
         * immediately preceding it.
         * @param {function} callback
         * Executed when the operation is complete.
         */
    }, {
      key: 'previous',
      value: function previous(callback) {
        this.show(this.activePage === 1 ? this.children.length : this.activePage - 1);callback && callback(this.activeElement);
      } /**
         * @method show
         * Deactive the currently active element activate a different one.
         * @param {number | string | HTMLElement} query
         * 1-based index,
         * Element selector string, or
         * HTMLElement to make active
         */
    }, {
      key: 'show',
      value: function show(query) {
        switch ((typeof query === 'undefined' ? 'undefined' : (0, _typeof3.default)(query)).toLowerCase()) {case 'number':
            return _private.get(this).showChildByIndex(query - 1);case 'string':
            return isNaN(parseInt(query)) ? _private.get(this).showChildBySelector(query) : _private.get(this).showChildByIndex(parseInt(query) - 1);default:
            return query instanceof HTMLElement ? _private.get(this).showChild(query) : console.error('<chassis-cycle>: Invalid query "' + query + '"');}
      }
    }, {
      key: 'active',
      /**
       * @typedef {Object} ActiveElementProperties
       * @property {HTMLElement} element The currently active page.
       * @property {Number} index The zero-based index of the currently active page.
       * @property {Number} page The 1-based index of the currently active page.
       */ /**
           * @property active
           * Information about the currently active page.
           * @return {ActiveElementProperties}
           */get: function get() {
        return { element: this.activeElement, index: this.activeIndex, page: this.activePage };
      } /**
         * @property activeElement
         * The currently active page.
         * @return {HTMLElement}
         */
    }, {
      key: 'activeElement',
      get: function get() {
        return this.activeIndex === null ? null : this.children.item(this.activeIndex);
      } /**
         * @property activePage
         * The 1-based index of the currently active page.
         * @return {Number}
         */
    }, {
      key: 'activePage',
      get: function get() {
        return this.activeIndex + 1;
      } /**
         * @property activeIndex
         * The zero-based index of the currently active page.
         * @return {Number}
         */
    }, {
      key: 'activeIndex',
      get: function get() {
        for (var index in this.children) {
          if (!this.children.hasOwnProperty(index)) {
            continue;
          }var child = this.children.item(index);if (child.hasAttribute('active')) {
            return parseInt(index);
          }
        }return null;
      } /**
         * @property selected
         * The current active section.
         * @return {HTMLElement}
         * @deprecated
         */
    }, {
      key: 'selected',
      get: function get() {
        console.warn('<chassis-cycle> \'selected\' property is deprecated. Please use \'activeElement\' instead.');return this.activeElement;
      } /**
         * @property selectedIndex
         * The index number of the current active section.
         * @return {Number}
         * @deprecated
         */
    }, {
      key: 'selectedIndex',
      get: function get() {
        console.warn('<chassis-cycle> \'selectedIndex\' property is deprecated. Please use \'activeIndex\' for zero-based indexing or \'activePage\' for 1-based indexing instead.');return this.activePage;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [];
      }
    }]);
    return _class;
  }(HTMLElement);
}());