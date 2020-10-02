

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5D4037",
        secondary: "#B2DFDB",
        accent: "#A1887F",
        error: "#EF5350",
        warning: "#FFC107",
        info: "#2196F3",
        success: "#4CAF50"
      },
    },
  },
})