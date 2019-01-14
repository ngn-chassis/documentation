class GBPlayer extends HTMLElement {
  constructor () {
    super()

    this.UTIL.definePrivateProperties({
      playlist: null,
      currentSong: null
    })
  }

  connectedCallback () {
    if (typeof Howler === 'undefined' || typeof Howl === 'undefined') {
      return this.UTIL.throwError({
        type: 'dependency',
        vars: {
          name: 'Howler',
          url: 'https://github.com/goldfire/howler.js/'
        }
      })
    }

    this.UTIL.monitorChildren(mutations => {
      console.log(mutations);
    })
  }

  get currentSong () {
    return this.PRIVATE.currentSong
  }

  set currentSong (songId) {
    let song = this.PRIVATE.playlist.find(song => song.id === songId)

    if (!song) {
      return this.throwError({
        message: `Song "${id}" not found in playlist`
      })
    }

    this.PRIVATE.currentSong = song
  }

  get playlist () {
    return this.PRIVATE.playlist.map(song => ({
      title: song.title,
      artist: song.artist,
      path: song.path
    }))
  }

  set playlist (playlist) {
    if (!Array.isArray(playlist)) {
      return this.UTIL.throwError({
        type: 'type',
        message: 'Playlist must be an array!'
      })
    }

    this.PRIVATE.playlist = playlist.map(song => {
      if (!song.hasOwnProperty('path')) {
        this.UTIL.throwError({
          message: 'Song must include a "path" property!'
        })

        return false
      }

      if (!song.hasOwnProperty('id')) {
        this.UTIL.throwError({
          message: 'Song must include a unique "id" property!'
        })

        return false
      }

      let audio = new Howl({
        src: song.path
      })

      audio.on('play', () => {
        console.log('song started');
      })

      audio.on('stop', () => {
        console.log('song stopped');
      })

      audio.on('pause', () => {
        console.log('song paused');
      })

      return {
        id: song.id,
        title: song.title || null,
        artist: song.artist || null,
        path: song.path,
        audio
      }
    })

    this.PRIVATE.currentSong = this.PRIVATE.playlist[0]
  }

  play () {
    return this.PRIVATE.currentSong.audio.play()
  }

  stop () {
    this.PRIVATE.currentSong.audio.stop()
  }

  pause () {
    this.PRIVATE.currentSong.audio.pause()
  }
}

customElements.define('gb-player', GBPlayer)
