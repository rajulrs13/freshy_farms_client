import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // static
    customer_data:{
      firstname:"",
      lastname:"",
      email:"",
      phone:"",
      street_address:"",
      city:"",
      state:"",
      pincode:""
    },
    products: [
      {
        id: 1,
        img: "https://cdn.britannica.com/27/171027-050-7F7889C9/flower-buds-clove-tree.jpg",
        name: "Cloves",
        weight: "100 g",
        description:
          "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice. Cloves are available throughout the year due to different harvest seasons in different countries.",
        sale_price: 1000,
        cost_price: 1500,
        in_stock: true,
        rating: 4.5,
        rated_by_people: 413,
        cart_quantity: 0,
        temporary_quantity: 1,
        show: false
      },
      {
        id: 2,
        img: "https://cdn.britannica.com/88/115088-050-8E2D0DF9/Cardamom-seeds.jpg",
        name: "Elaichi",
        weight: "100 g",
        description:
          "Cardamom, sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia.",
        sale_price: 2000,
        cost_price: 2500,
        in_stock: true,
        rating: 4.3,
        rated_by_people: 400,
        cart_quantity: 0,
        temporary_quantity: 1,
        show: false
      },
      {
        id: 3,
        img: "https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg",
        name: "Cinnamon",
        weight: "100 g",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",
        sale_price: 1500,
        cost_price: 2000,
        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        cart_quantity: 0,
        temporary_quantity: 1,
        show: false
      },
      {
        id: 4,
        img: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/05/Baby-dies-honey-769796297.jpg",
        name: "Honey",
        weight: "100 g",
        description:
          "Honey is a sweet, viscous food substance made by honey bees. The variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption. Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture.",
        sale_price: 1000,
        cost_price: 1500,
        in_stock: false,
        rating: 4.0,
        rated_by_people: 413,
        cart_quantity: 0,
        temporary_quantity: 1,
        show: false
      },
      {
        id: 5,
        img: "https://cdn.britannica.com/83/191983-050-9D97C943/saffron-spice-herb.jpg",
        name: "Saffron",
        weight: "100 g",
        description:
          "Saffron is a spice derived from the flower of Crocus sativus, commonly known as the saffron crocus. The vivid crimson stigma and styles, called threads, are collected and dried for use mainly as a seasoning and colouring agent in food. Saffron has long been the world's most costly spice by weight.",
        sale_price: 1000,
        cost_price: 1000,
        in_stock: true,
        rating: 4.5,
        rated_by_people: 923,
        cart_quantity: 0,
        temporary_quantity: 1,
        show: false
      },
    ],
    showCart: false,
    standard_shipping_fee : 50,
    express_shipping_fee : 100,
    standard_shipping_days : 7,
    express_shipping_days : 3,
    order_placed: false
  },
  getters:{
    // customer data
    firstname(state){
      return state.customer_data.firstname
    },
    lastname(state){
      return state.customer_data.lastname
    },
    email(state){
      return state.customer_data.email
    },
    phone(state){
      return state.customer_data.phone
    },
    street_address(state){
      return state.customer_data.street_address
    },
    city(state){
      return state.customer_data.city
    },
    state(state){
      return state.customer_data.state
    },
    pincode(state){
      return state.customer_data.pincode
    },
    // static
    products(state){
      return state.products
    },
    standard_shipping_fee(state){
      return state.standard_shipping_fee
    },
    express_shipping_fee(state){
      return state.express_shipping_fee
    },
    standard_shipping_days(state){
      return state.standard_shipping_days
    },
    express_shipping_days(state){
      return state.express_shipping_days
    },
    items_in_cart(state){
      let num_items = 0
      for(let i = 0; i < state.products.length; i++){
        if(state.products[i].cart_quantity > 0) num_items++;
      }
      return num_items;
    },
    cart(state){
      let cart = []
      for(let i = 0; i < state.products.length; i++){
        if(state.products[i].cart_quantity > 0) cart.push(state.products[i]);
      }
      return cart
    },
    cartVisible(state){
      return state.showCart
    },
    cartTotalPrice(state){
      let cart = []
      let total_price = 0;
      for(let i = 0; i < state.products.length; i++){
        if(state.products[i].cart_quantity > 0) total_price = total_price + state.products[i].cart_quantity * state.products[i].sale_price;
      }
      return total_price
    },
    cartTotalQuantity(state){
      let cart = []
      let total_quantity = 0;
      for(let i = 0; i < state.products.length; i++){
        if(state.products[i].cart_quantity > 0) total_quantity = total_quantity + state.products[i].cart_quantity;
      }
      return total_quantity
    },
    order_placed(state){
      return state.order_placed
    }
  },
  mutations: {
    // customer data
    setFirstname(state, payload){
      state.customer_data.firstname = payload
    },
    setLastname(state, payload){
      state.customer_data.lastname = payload
    },
    setEmail(state, payload){
      state.customer_data.email = payload
    },
    setPhone(state, payload){
      state.customer_data.phone = payload
    },
    setStreetAddress(state, payload){
      state.customer_data.street_address = payload
    },
    setCity(state, payload){
      state.customer_data.city = payload
    },
    setState(state, payload){
      state.customer_data.state = payload
    },
    setPincode(state, payload){
      state.customer_data.pincode = payload
    },
    // dynamic
    updateTemporaryQuantity(state, payload){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
        if(cart[i].id == payload.id){
          cart[i].temporary_quantity = payload.temporary_quantity
        }
      }
      state.products = cart
    },

    updatePermanentQuantity(state, payload){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
        if(cart[i].id == payload.id){
          cart[i].cart_quantity = payload.cart_quantity
          cart[i].temporary_quantity = payload.temporary_quantity
        }
      }
      state.products = cart
    },
    deleteFromCart(state, payload){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
        if(cart[i].id == payload.id){
          cart[i].cart_quantity = 0
          cart[i].temporary_quantity = 1
        }
      }
      state.products = cart
    },
    addToCart(state, payload){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
        if(cart[i].id == payload.id){
          cart[i].cart_quantity = payload.temporary_quantity
        }
      }
      state.products = cart
    },
    toggleCartVisibility(state, payload){
      state.showCart = payload
    },
    toggleItemVisibility(state, payload){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
        if(cart[i].id == payload.id){
          cart[i].show = !cart[i].show
        }
      }
      state.products = cart
    },
    collapseAllShowButtons(state){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
          cart[i].show = false;
      }
      state.products = cart
    },
    placeOrder(state){
      let cart = [...state.products]
      for(let i = 0; i < cart.length; i++){
          cart[i].cart_quantity = 0
          cart[i].temporary_quantity = 1
      }
      state.products = cart
      state.order_placed = true
    },
    resetOrderState(state){
      state.order_placed = false
    }
  },
  actions: {
    
  },
  modules: {
  }
})
