module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Freshy Farms',
    themeColor: "#263238",
    msTileColor: "#263238",
    appleMobileWebAppCache: "yes",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#263238',
    manifestOptions: {
      background_color: "#263238",
      short_name: 'Freshy Farms',
      start_url: '.',
      display: 'standalone'
    }
  }
}