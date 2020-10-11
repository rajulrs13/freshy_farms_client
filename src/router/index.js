import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Order from '../views/Order.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter:backHome
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    beforeEnter:orderPlacedCheck
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    beforeEnter: cartNotEmpty
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

function cartNotEmpty (to, from, next) {
  if (store.getters.items_in_cart == 0) { /// THIS NOT WORK, HOW TO ACCESS STORE?
    next({
      path: '/'
    })
  } else {
    next()
  }
}

function orderPlacedCheck (to, from, next) {
  if (!store.getters.order_placed) { /// THIS NOT WORK, HOW TO ACCESS STORE?
    next({
      path: '/'
    })
  } else {
    next()
  }
}
function backHome (to, from, next) {
  if (store.getters.order_placed) { /// THIS NOT WORK, HOW TO ACCESS STORE?
    store.commit("resetOrderState");
    next()
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
