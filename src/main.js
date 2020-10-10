import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import wb from "./registerServiceWorker";
import AlertComponent from "./components/Shared/Alert.vue";
Vue.component("alert-component", AlertComponent);

import Cart from "./components/Home/Cart/Cart.vue";
Vue.component("app-cart", Cart);

Vue.prototype.$workbox = wb;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
