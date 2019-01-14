"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

customElements.define('gb-player',
/*#__PURE__*/
function (_ChassisElement) {
  (0, _inherits2.default)(_class, _ChassisElement);

  function _class() {
    var _this;

    (0, _classCallCheck2.default)(this, _class);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, "<template><style>@charset \"UTF-8\"; :host{display:block}:host *,:host :after,:host :before{box-sizing:border-box}gb-player{display:block}gb-player *,gb-player :after,gb-player :before{box-sizing:border-box}</style><slot></slot></template>"));

    _this.UTIL.definePrivateProperties({
      playlist: null,
      currentSong: null
    });

    return _this;
  }

  (0, _createClass2.default)(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (typeof Howler === 'undefined' || typeof Howl === 'undefined') {
        return this.UTIL.throwError({
          type: 'dependency',
          vars: {
            name: 'Howler',
            url: 'https://github.com/goldfire/howler.js/'
          }
        });
      }

      this.UTIL.monitorChildren(function (mutations) {
        console.log(mutations);
      });
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
      var _this2 = this;

      if (!Array.isArray(playlist)) {
        return this.UTIL.throwError({
          type: 'type',
          message: 'Playlist must be an array!'
        });
      }

      this.PRIVATE.playlist = playlist.map(function (song) {
        if (!song.hasOwnProperty('path')) {
          _this2.UTIL.throwError({
            message: 'Song must include a "path" property!'
          });

          return false;
        }

        if (!song.hasOwnProperty('id')) {
          _this2.UTIL.throwError({
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
}(ChassisElement(HTMLElement)));