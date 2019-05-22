class API {
  static fetchMenuConfig (callback) {
    NGN.NET.json('config/menu.json', (err, cfg) => {
      if (err) {
        throw err
      }

      callback && callback(cfg)
    })
  }
}
