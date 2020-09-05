import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    theme: {
        primary: "#4CAF50",
        secondary: "#B2DFDB",
        accent: "#8BC34A",
        error: "#EF5350",
        warning: "#FFC107",
        info: "#2196F3",
        success: "#4CAF50"
    }
});

export default new Vuetify({
});