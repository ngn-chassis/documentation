"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('gb-player',
/*#__PURE__*/
function (_AuthorElement) {
  (0, _inherits2.default)(_class, _AuthorElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}gb-player{display:block}gb-player *,gb-player :after,gb-player :before{box-sizing:border-box}</style><slot></slot></template>"));

    _this.UTIL.definePrivateProperties({
      playlist: null,
      currentSong: null,
      playButtonClickHandler: function playButtonClickHandler(evt) {
        evt.preventDefault();

        _this.play();
      },
      stopButtonClickHandler: function stopButtonClickHandler(evt) {
        evt.preventDefault();

        _this.stop();
      },
      pauseButtonClickHandler: function pauseButtonClickHandler(evt) {
        evt.preventDefault();

        _this.pause();
      },
      initializeButton: function initializeButton(button) {
        if (!button.hasAttribute('function')) {
          return;
        }

        var buttonFunction = button.getAttribute('function');

        switch (buttonFunction) {
          case 'play':
            _this.playButton = button;
            break;

          case 'stop':
            _this.stopButton = button;
            break;

          case 'pause':
            _this.pauseButton = button;
            break;

          default:
            return;
        }
      }
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      if (typeof Howler === 'undefined' || typeof Howl === 'undefined') {
        return this.UTIL.throwError({
          type: 'dependency',
          vars: {
            name: 'Howler',
            url: 'https://github.com/goldfire/howler.js/'
          }
        });
      }

      setTimeout(function () {
        for (var child in _this2.children) {
          var element = _this2.children[child];

          switch (element.localName) {
            case 'button':
              _this2.PRIVATE.initializeButton(element);

              break;

            default:
              continue;
          }
        }
      }, 0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.playButton) {
        this.playButton.removeEventListener('click', this.PRIVATE.playButtonClickHandler);
      }

      if (this.stopButton) {
        this.stopButton.removeEventListener('click', this.PRIVATE.stopButtonClickHandler);
      }

      if (this.pauseButton) {
        this.pauseButton.removeEventListener('click', this.PRIVATE.pauseButtonClickHandler);
      }
    }
  }, {
    key: "play",
    value: function play() {
      return this.PRIVATE.currentSong.audio.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.PRIVATE.currentSong.audio.stop();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.PRIVATE.currentSong.audio.pause();
    }
  }, {
    key: "currentSong",
    get: function get() {
      return this.PRIVATE.currentSong;
    },
    set: function set(songId) {
      var song = this.PRIVATE.playlist.find(function (song) {
        return song.id === songId;
      });

      if (!song) {
        return this.throwError({
          message: "Song \"".concat(id, "\" not found in playlist")
        });
      }

      this.PRIVATE.currentSong = song;
    }
  }, {
    key: "playButton",
    get: function get() {
      return this.PRIVATE.playButton;
    },
    set: function set(button) {
      this.PRIVATE.playButton = button;
      button.addEventListener('click', this.PRIVATE.playButtonClickHandler);
    }
  }, {
    key: "stopButton",
    get: function get() {
      return this.PRIVATE.stopButton;
    },
    set: function set(button) {
      this.PRIVATE.stopButton = button;
      button.addEventListener('click', this.PRIVATE.stopButtonClickHandler);
    }
  }, {
    key: "pauseButton",
    get: function get() {
      return this.PRIVATE.pauseButton;
    },
    set: function set(button) {
      this.PRIVATE.pauseButton = button;
      button.addEventListener('click', this.PRIVATE.pauseButtonClickHandler);
    }
  }, {
    key: "playlist",
    get: function get() {
      return this.PRIVATE.playlist.map(function (song) {
        return {
          title: song.title,
          artist: song.artist,
          path: song.path
        };
      });
    },
    set: function set(playlist) {
      var _this3 = this;

      if (!Array.isArray(playlist)) {
        return this.UTIL.throwError({
          type: 'type',
          message: 'Playlist must be an array!'
        });
      }

      this.PRIVATE.playlist = playlist.map(function (song) {
        if (!song.hasOwnProperty('path')) {
          _this3.UTIL.throwError({
            message: 'Song must include a "path" property!'
          });

          return false;
        }

        if (!song.hasOwnProperty('id')) {
          _this3.UTIL.throwError({
            message: 'Song must include a unique "id" property!'
          });

          return false;
        }

        var audio = new Howl({
          src: song.path
        });
        audio.on('play', function () {
          console.log('song started');
        });
        audio.on('stop', function () {
          console.log('song stopped');
        });
        audio.on('pause', function () {
          console.log('song paused');
        });
        return {
          id: song.id,
          title: song.title || null,
          artist: song.artist || null,
          path: song.path,
          audio: audio
        };
      });
      this.PRIVATE.currentSong = this.PRIVATE.playlist[0];
    }
  }]);
  return _class;
}(AuthorElement(HTMLElement)));