module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Freshy Farms',
    themeColor: "#4CAF50",
    msTileColor: "#4CAF50",
    appleMobileWebAppCache: "yes",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#4CAF50',
    manifestOptions: {
      background_color: "#4CAF50",
      short_name: 'Freshy Farms',
      start_url: '.',
      display: 'standalone'
    }
  }
}