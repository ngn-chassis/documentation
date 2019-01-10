"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('chassis-cycle',
/*#__PURE__*/
function (_ChassisElement) {
  (0, _inherits2.default)(_class, _ChassisElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host(:not([mode=custom]))>::slotted(:not([selected])){display:none!important}chassis-cycle{display:block}chassis-cycle *,chassis-cycle :after,chassis-cycle :before{box-sizing:border-box}chassis-cycle:not([mode=custom])) > :not([selected]){display:none!important}</style><slot></slot></template>"));

    _this.UTIL.definePrivateProperties({
      dummyEl: document.createElement('div'),
      getChildIndex: function getChildIndex(child) {
        return [].slice.call(_this.children).indexOf(child);
      },
      getNextSelectedChild: function getNextSelectedChild(child) {
        var nextIndex = _this.PRIVATE.getChildIndex(child);

        return {
          element: child,
          index: nextIndex
        };
      },
      hideChild: function hideChild(child) {
        return child.removeAttribute('selected', '');
      },
      beforeChangeCallback: function beforeChangeCallback(child, previousSelection) {
        if (_this.selectedIndex >= 0) {
          _this.PRIVATE.hideChild(_this.children.item(_this.selectedIndex || 0));
        }

        child.setAttribute('selected', '');

        _this.dispatchEvent(new CustomEvent('change', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            previousSelection: previousSelection,
            currentSelection: _this.selected
          }
        }));
      },
      showChild: function showChild(child) {
        var _this$PRIVATE = _this.PRIVATE,
            beforeChangeCallback = _this$PRIVATE.beforeChangeCallback,
            getNextSelectedChild = _this$PRIVATE.getNextSelectedChild,
            hideChild = _this$PRIVATE.hideChild;
        var previousSelection = _this.selected;
        var nextSelection = getNextSelectedChild(child);

        var beforechangeHandler = function beforechangeHandler(evt) {
          _this.removeEventListener('beforechange', beforechangeHandler);

          if (evt.defaultPrevented) {
            return;
          }

          beforeChangeCallback(child, previousSelection);
        };

        _this.addEventListener('beforechange', beforechangeHandler);

        var beforechangeEvent = new CustomEvent('beforechange', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            currentSelection: _this.selected,
            nextSelection: nextSelection,
            next: function next() {
              if (!this.defaultPrevented) {
                return console.warn("<chassis-cycle> Calling \"next()\" in \"beforechange\" event will not do anything unless the event's default behavior is canceled. (use Event.preventDefault())");
              }

              beforeChangeCallback(child, previousSelection);
            }
          }
        });
        beforechangeEvent.detail.next = beforechangeEvent.detail.next.bind(beforechangeEvent);

        _this.dispatchEvent(beforechangeEvent);
      },
      showChildByIndex: function showChildByIndex(index) {
        if (_this.selectedIndex === index || index >= _this.children.length || index < 0) {
          return;
        }

        _this.PRIVATE.showChild(_this.children.item(index));
      },
      showChildBySelector: function showChildBySelector(query) {
        var nodes = _this.querySelectorAll(query);

        if (!nodes.length) {
          return;
        }

        if (nodes.length > 1) {
          console.warn("<chassis-cycle> found multiple nodes matching \"".concat(query, "\". Displaying first result..."));
        }

        _this.PRIVATE.showChild(nodes.item(0));
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var addedNodes = mutation.addedNodes,
              removedNodes = mutation.removedNodes,
              type = mutation.type;

          switch (type) {
            case 'childList':
              if (removedNodes.length > 0 && !_this2.selectedElement) {
                return _this2.previous();
              }

              break;

            default:
              return;
          }
        });
      });
      observer.observe(this, {
        attributes: false,
        childList: true,
        characterData: false
      });
      setTimeout(function () {
        for (var index in _this2.children) {
          if (!_this2.children.hasOwnProperty(index)) {
            continue;
          }

          var child = _this2.children.item(index);

          if ((0, _typeof2.default)(child) !== 'object') {
            continue;
          }

          if (child !== _this2.selectedElement) {
            _this2.PRIVATE.hideChild(child);
          }
        }
      }, 0);
    }
    /**
     * @method hide
     * Deactivate a page.
     * @deprecated
     */

  }, {
    key: "hide",
    value: function hide(child) {
      console.warn("<chassis-cycle> \"hide()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage selected elements.");
      this.PRIVATE.hideChild(child);
    }
    /**
     * @method hideActive
     * Deactivate the currently selected page.
     * @deprecated
     */

  }, {
    key: "hideActive",
    value: function hideActive() {
      console.warn("<chassis-cycle> \"hideActive()\" method is deprecated. Please use \"show()\" and \"hideAll()\" to manage selected elements.");
      this.PRIVATE.hideChild(this.selectedElement);
    }
    /**
     * @method hideAll
     * Deactivate all pages.
     */

  }, {
    key: "hideAll",
    value: function hideAll() {
      for (var index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue;
        }

        var child = this.children.item(index);

        if ((0, _typeof2.default)(child) !== 'object') {
          continue;
        }

        this.PRIVATE.hideChild(child);
      }
    }
  }, {
    key: "indexOf",
    value: function indexOf(child) {
      return this.PRIVATE.getChildIndex(child);
    }
    /**
     * @method insertAdjacentHTML
     * Override this.prototype.insertAdjacentHTML and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentHTML() on web components
     * in Firefox and IE11.
     * @override
     */

  }, {
    key: "insertAdjacentHTML",
    value: function insertAdjacentHTML(position, text) {
      switch (position) {
        case 'beforebegin':
        case 'afterend':
          return HTMLElement.prototype.insertAdjacentHTML.call(this, position, text);

        default:
          var dummyEl = this.PRIVATE.dummyEl;
          dummyEl.insertAdjacentHTML(position, text);
          var node = dummyEl.children.item(0);

          while (dummyEl.firstChild) {
            dummyEl.removeChild(dummyEl.firstChild);
          }

          return position === 'beforeend' ? this.appendChild(node) : this.insertBefore(node, this.firstElementChild);
      }
    }
    /**
     * @method insertAdjacentElement
     * Override this.prototype.insertAdjacentElement and replace with
     * appendChild() or insertBefore()
     * This is done because of bugs with insertAdjacentElement() on web components
     * in Firefox and IE11.
     * @override
     */

  }, {
    key: "insertAdjacentElement",
    value: function insertAdjacentElement(position, node) {
      switch (position) {
        case 'beforeend':
          return this.appendChild(node);

        case 'afterbegin':
          return this.insertBefore(node, this.firstElementChild);

        default:
          return HTMLElement.prototype.insertAdjacentElement.call(this, position, node);
      }
    }
    /**
     * @method first
     * A helper method to display the first child element.
     */

  }, {
    key: "first",
    value: function first() {
      this.show(0);
    }
    /**
     * @method last
     * A helper method to display the last child element.
     */

  }, {
    key: "last",
    value: function last() {
      this.show(this.children.length - 1);
    }
    /**
     * @method next
     * Deactivate the currently selected child element and activate the one
     * immediately adjacent to it.
     * @param {function} callback
     * Executed when the operation is complete.
     */

  }, {
    key: "next",
    value: function next(callback) {
      this.show(this.selectedIndex === this.children.length - 1 ? 0 : this.selectedIndex + 1);
      callback && callback(this.selectedElement);
    }
    /**
     * @method previous
     * Deactivate the currently selected child element and activate the one
     * immediately preceding it.
     * @param {function} callback
     * Executed when the operation is complete.
     */

  }, {
    key: "previous",
    value: function previous(callback) {
      this.show(this.selectedIndex === 0 ? this.children.length - 1 : this.selectedIndex - 1);
      callback && callback(this.selectedElement);
    }
    /**
     * @method show
     * Deselect the currently selected element and select a different one.
     * @param {number | string | HTMLElement} query
     * 1-based index,
     * Element selector string, or
     * HTMLElement to select
     */

  }, {
    key: "show",
    value: function show(query) {
      if (query === null) {
        if (!this.selectedIndex) {
          this.PRIVATE.showChildByIndex(0);
        }

        return;
      }

      switch ((0, _typeof2.default)(query).toLowerCase()) {
        case 'number':
          return this.PRIVATE.showChildByIndex(query);

        case 'string':
          return isNaN(parseInt(query)) ? this.PRIVATE.showChildBySelector(query) : this.PRIVATE.showChildByIndex(parseInt(query));

        default:
          return query instanceof HTMLElement ? this.PRIVATE.showChild(query) : console.error("<chassis-cycle>: Invalid query \"".concat(query, "\""));
      }
    }
  }, {
    key: "selected",

    /**
     * @typedef {Object} SelectedElementProperties
     * @property {HTMLElement} element The currently selected page.
     * @property {Number} index The zero-based index of the currently selected page.
     */

    /**
     * @property selected
     * Information about the currently selected page.
     * @return {SelectedElementProperties}
     */
    get: function get() {
      return {
        element: this.selectedElement,
        index: this.selectedIndex
      };
    }
    /**
     * @property selectedElement
     * The currently selected page.
     * @return {HTMLElement}
     */

  }, {
    key: "selectedElement",
    get: function get() {
      return this.selectedIndex === null ? null : this.children.item(this.selectedIndex);
    }
    /**
     * @property selectedIndex
     * The zero-based index of the currently selected page.
     * @return {Number}
     */

  }, {
    key: "selectedIndex",
    get: function get() {
      for (var index in this.children) {
        if (!this.children.hasOwnProperty(index)) {
          continue;
        }

        var child = this.children.item(index);

        if ((0, _typeof2.default)(child) !== 'object') {
          continue;
        }

        if (child.hasAttribute('selected')) {
          return parseInt(index);
        }
      }

      return null;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['mode'];
    }
  }]);
  return _class;
}(ChassisElement(HTMLElement)));