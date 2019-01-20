class AuthorAudioPlayerElement extends HTMLElement {
  constructor () {
    super()

    this.UTIL.definePrivateProperties({
      playlist: null,
      currentSong: null,

      playButtonClickHandler: evt => {
        evt.preventDefault()
        this.play()
      },

      stopButtonClickHandler: evt => {
        evt.preventDefault()
        this.stop()
      },

      pauseButtonClickHandler: evt => {
        evt.preventDefault()
        this.pause()
      },

      initializeButton: button => {
        if (!button.hasAttribute('function')) {
          return
        }

        let buttonFunction = button.getAttribute('function')

        switch (buttonFunction) {
          case 'play':
            this.playButton = button
            break

          case 'stop':
            this.stopButton = button
            break

          case 'pause':
            this.pauseButton = button
            break

          default: return
        }
      }
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

    setTimeout(() => {
      for (let child in this.children) {
        let element = this.children[child]

        switch (element.localName) {
          case 'button':
            this.PRIVATE.initializeButton(element)
            break

          default: continue
        }
      }
    }, 0)
  }

  disconnectedCallback () {
    if (this.playButton) {
      this.playButton.removeEventListener('click', this.PRIVATE.playButtonClickHandler)
    }

    if (this.stopButton) {
      this.stopButton.removeEventListener('click', this.PRIVATE.stopButtonClickHandler)
    }

    if (this.pauseButton) {
      this.pauseButton.removeEventListener('click', this.PRIVATE.pauseButtonClickHandler)
    }
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

  get playButton () {
    return this.PRIVATE.playButton
  }

  set playButton (button) {
    this.PRIVATE.playButton = button
    button.addEventListener('click', this.PRIVATE.playButtonClickHandler)
  }

  get stopButton () {
    return this.PRIVATE.stopButton
  }

  set stopButton (button) {
    this.PRIVATE.stopButton = button
    button.addEventListener('click', this.PRIVATE.stopButtonClickHandler)
  }

  get pauseButton () {
    return this.PRIVATE.pauseButton
  }

  set pauseButton (button) {
    this.PRIVATE.pauseButton = button
    button.addEventListener('click', this.PRIVATE.pauseButtonClickHandler)
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

customElements.define('author-audio-player', AuthorAudioPlayerElement)
