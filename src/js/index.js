NGNX.Loader({
  sync: [
    './js/data/menu.js',
    './js/registries/components.js',
    './js/registries/menu/main.js'
  ]
})

NGN.DOM.ready(() => NGN.DOM.svg.update())
