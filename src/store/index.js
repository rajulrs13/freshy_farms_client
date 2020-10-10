import Vue from "vue";
import Vuex from "vuex";
import { db } from "@/plugins/firebase";
import * as firebase from "firebase/app";
import router from "../router";

Vue.use(Vuex);

// images
import elaichi_1 from "../assets/elaichi_1.jpg";
import elaichi_2 from "../assets/elaichi_2.jpg";
import elaichi_3 from "../assets/elaichi_3.jpg";
import cloves_1 from "../assets/cloves_1.jpg";
import cloves_2 from "../assets/cloves_2.jpg";
import cloves_3 from "../assets/cloves_3.jpg";
import cinnamon_1 from "../assets/cinnamon_1.png";
import cinnamon_2 from "../assets/cinnamon_2.png";
import cinnamon_3 from "../assets/cinnamon_3.png";
import black_pepper_1 from "../assets/black_pepper_1.png";
import black_pepper_2 from "../assets/black_pepper_2.png";
import black_pepper_3 from "../assets/black_pepper_3.png";
import black_cardamom_1 from "../assets/black_cardamom_1.jpg";
import black_cardamom_2 from "../assets/black_cardamom_2.jpg";
import black_cardamom_3 from "../assets/black_cardamom_3.jpg";

export default new Vuex.Store({
  state: {
    // static
    customer_data: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      street_address: "",
      city: "",
      state: "",
      pincode: "",
    },
    products: [
      // Spices
      {
        id: 1,
        imgs: [cloves_1, cloves_2, cloves_3],
        name: "Whole Cloves (Handpicked)",
        description:
          "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice. Cloves are available throughout the year due to different harvest seasons in different countries.",
        in_stock: true,
        rating: 4.5,
        rated_by_people: 413,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 100,
            sale_price: 90,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 180,
            sale_price: 150,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 450,
            sale_price: 360,
          },
        ],
      },
      {
        id: 2,
        imgs: [elaichi_1, elaichi_2, elaichi_3],
        name: "Cardamom Gold (8mm)",
        description: `Cardamom is called the 'Queen of Spices'.
          It is indeed one of the most expensive spices and also the most familiar ones
          ever.
          Our Cardamom traces its origins to select estates in the verdant rainforests of
          the Western Ghats in Idukki.
          Our extra-large Bold Cardamom pods add intense flavour to your food.
          Cardamom contributes considerably to gastrointestinal protection, cholesterol
          control, relief from cardiovascular issues, and improvement of blood
          circulation in the body.
          Cardamom is also rich in nutrients, minerals like iron, magnesium, manganese,
          copper, potassium, calcium, zinc, and phosphorus and vitamins A and C.  
          Our Cardamom is known for its consistency in flavour, aroma and quality, try it
          yourself.`,

        in_stock: true,
        rating: 4.3,
        rated_by_people: 400,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 250,
            sale_price: 225,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 480,
            sale_price: 410,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 1200,
            sale_price: 960,
          },
        ],
      },
      {
        id: 3,
        imgs: [elaichi_2, elaichi_1, elaichi_3],
        name: "Cardamom Premium (7-8mm)",
        description:
          "Cardamom, sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia.",

        in_stock: true,
        rating: 4.3,
        rated_by_people: 400,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 225,
            sale_price: 200,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 425,
            sale_price: 360,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 1000,
            sale_price: 800,
          },
        ],
      },
      {
        id: 4,
        imgs: [black_cardamom_1, black_cardamom_2, black_cardamom_3],
        name: "Big Black Cardamom (Badi Elaichi)",
        description:
          "Cardamom, sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia.",

        in_stock: true,
        rating: 4.3,
        rated_by_people: 400,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 100,
            sale_price: 90,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 180,
            sale_price: 150,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 450,
            sale_price: 360,
          },
        ],
      },
      {
        id: 5,
        imgs: [black_pepper_1, black_pepper_2, black_pepper_3],
        name: "Whole Black Pepper",
        description:
          "Cardamom, sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia.",

        in_stock: true,
        rating: 4.3,
        rated_by_people: 400,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 80,
            sale_price: 90,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 120,
            sale_price: 100,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 240,
          },
        ],
      },
      {
        id: 6,
        imgs: [cinnamon_1, cinnamon_2],
        name: "Cinnamon Sticks",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "50g",
            cost_price: 70,
            sale_price: 60,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 120,
            sale_price: 100,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 240,
          },
        ],
      },
      {
        id: 7,
        imgs: [cinnamon_3, cinnamon_2, cinnamon_1],
        name: "Cinnamon Powder",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 225,
            sale_price: 200,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 400,
            sale_price: 340,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 700,
            sale_price: 560,
          },
        ],
      },
      {
        id: 8,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Jeera (Cumin Seeds)",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "spices",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "100g",
            cost_price: 45,
            sale_price: 40,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 105,
            sale_price: 90,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 200,
            sale_price: 160,
          },
        ],
      },

      // Dry Fruits
      {
        id: 9,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "California Almonds",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 225,
            sale_price: 225,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 450,
            sale_price: 450,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 850,
            sale_price: 850,
          },
        ],
      },
      {
        id: 10,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Mamra Almonds",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 875,
            sale_price: 875,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 1700,
            sale_price: 1700,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 3350,
            sale_price: 3350,
          },
        ],
      },
      {
        id: 11,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Cashews",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 300,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 575,
            sale_price: 575,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1100,
            sale_price: 1100,
          },
        ],
      },
      {
        id: 12,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Walnuts (Giri)",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 475,
            sale_price: 475,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 900,
            sale_price: 900,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1700,
            sale_price: 1700,
          },
        ],
      },
      {
        id: 13,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Raisins",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 175,
            sale_price: 175,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 325,
            sale_price: 325,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 600,
            sale_price: 600,
          },
        ],
      },
      {
        id: 14,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Black Raisins",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 200,
            sale_price: 200,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 350,
            sale_price: 350,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 650,
            sale_price: 650,
          },
        ],
      },
      {
        id: 15,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Fruit Mix",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 300,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 575,
            sale_price: 575,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1100,
            sale_price: 1100,
          },
        ],
      },
      {
        id: 16,
        imgs: ["https://scx2.b-cdn.net/gfx/news/2016/57eb8d537c4b3.jpg"],
        name: "Breakfast Mix",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",

        in_stock: true,
        rating: 4.1,
        rated_by_people: 523,
        category: "dry fruit",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 300,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 550,
            sale_price: 550,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1000,
            sale_price: 1000,
          },
        ],
      },

      // Honey
      {
        id: 17,
        imgs: [
          "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/05/Baby-dies-honey-769796297.jpg",
        ],
        name: "Honey",
        description:
          "Honey is a sweet, viscous food substance made by honey bees. The variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption. Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture.",

        in_stock: false,
        rating: 4.0,
        rated_by_people: 413,
        category: "honey",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 300,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 550,
            sale_price: 550,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1000,
            sale_price: 1000,
          },
        ],
      },

      // Combos
      {
        id: 18,
        imgs: [
          "https://cdn.britannica.com/83/191983-050-9D97C943/saffron-spice-herb.jpg",
        ],
        name: "Combo",
        description:
          "Saffron is a spice derived from the flower of Crocus sativus, commonly known as the saffron crocus. The vivid crimson stigma and styles, called threads, are collected and dried for use mainly as a seasoning and colouring agent in food. Saffron has long been the world's most costly spice by weight.",

        in_stock: false,
        rating: 4.5,
        rated_by_people: 923,
        category: "combo",
        selected_product_weight: 0,
        weight_price: [
          {
            id: 0,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "250g",
            cost_price: 300,
            sale_price: 300,
          },
          {
            id: 1,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "500g",
            cost_price: 550,
            sale_price: 550,
          },
          {
            id: 2,
            cart_quantity: 0,
            temporary_quantity: 1,
            show: false,
            weight: "1kg",
            cost_price: 1000,
            sale_price: 1000,
          },
        ],
      },
    ],
    showCart: false,
    standard_shipping_fee: 50,
    express_shipping_fee: 100,
    standard_shipping_days: 7,
    express_shipping_days: 3,
    order_placed: false,
    order_id: null,

    // Shared State
    loading: false,
    error: null,
    success: null,
  },
  getters: {
    // Shared
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
    success(state) {
      return state.success;
    },

    // customer data
    firstname(state) {
      return state.customer_data.firstname;
    },
    lastname(state) {
      return state.customer_data.lastname;
    },
    email(state) {
      return state.customer_data.email;
    },
    phone(state) {
      return state.customer_data.phone;
    },
    street_address(state) {
      return state.customer_data.street_address;
    },
    city(state) {
      return state.customer_data.city;
    },
    state(state) {
      return state.customer_data.state;
    },
    pincode(state) {
      return state.customer_data.pincode;
    },
    // static
    products(state) {
      return state.products;
    },
    products_by_category_spices(state) {
      let prods = state.products;
      let category_prods = prods.filter(function(e) {
        return e.category == "spices";
      });
      return category_prods;
    },
    products_by_category_honey(state) {
      let prods = state.products;
      let category_prods = prods.filter(function(e) {
        return e.category == "honey";
      });
      return category_prods;
    },
    products_by_category_dry_fruit(state) {
      let prods = state.products;
      let category_prods = prods.filter(function(e) {
        return e.category == "dry fruit";
      });
      return category_prods;
    },
    products_by_category_combo(state) {
      let prods = state.products;
      let category_prods = prods.filter(function(e) {
        return e.category == "combo";
      });
      return category_prods;
    },
    standard_shipping_fee(state) {
      return state.standard_shipping_fee;
    },
    express_shipping_fee(state) {
      return state.express_shipping_fee;
    },
    standard_shipping_days(state) {
      return state.standard_shipping_days;
    },
    express_shipping_days(state) {
      return state.express_shipping_days;
    },
    items_in_cart(state) {
      let num_items = 0;
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.products[i].weight_price.length; j++) {
          if (state.products[i].weight_price[j].cart_quantity > 0) num_items++;
        }
      }
      return num_items;
    },
    cart(state) {
      let cart = [];
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.products[i].weight_price.length; j++) {
          if (state.products[i].weight_price[j].cart_quantity > 0) {
            let myobj = {
              ...state.products[i],
              weight_price: state.products[i].weight_price[j],
            };
            cart.push(myobj);
          }
        }
        // if (state.products[i].cart_quantity > 0) cart.push(state.products[i]);
      }
      return cart;
    },
    cartVisible(state) {
      return state.showCart;
    },
    cartTotalPrice(state) {
      let total_price = 0;
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.products[i].weight_price.length; j++) {
          if (state.products[i].weight_price[j].cart_quantity > 0)
            total_price =
              total_price +
              state.products[i].weight_price[j].cart_quantity *
                state.products[i].weight_price[j].sale_price;
        }
      }
      return total_price;
    },
    cartTotalQuantity(state) {
      let cart = [];
      let total_quantity = 0;
      for (let i = 0; i < state.products.length; i++) {
        for (let j = 0; j < state.products[i].weight_price.length; j++) {
          if (state.products[i].weight_price[j].cart_quantity > 0)
            total_quantity =
              total_quantity + state.products[i].weight_price[j].cart_quantity;
        }
      }
      return total_quantity;
    },
    order_placed(state) {
      return state.order_placed;
    },
    order_id(state) {
      return state.order_id;
    },
  },
  mutations: {
    // customer data
    setFirstname(state, payload) {
      state.customer_data.firstname = payload;
    },
    setLastname(state, payload) {
      state.customer_data.lastname = payload;
    },
    setEmail(state, payload) {
      state.customer_data.email = payload;
    },
    setPhone(state, payload) {
      state.customer_data.phone = payload;
    },
    setStreetAddress(state, payload) {
      state.customer_data.street_address = payload;
    },
    setCity(state, payload) {
      state.customer_data.city = payload;
    },
    setState(state, payload) {
      state.customer_data.state = payload;
    },
    setPincode(state, payload) {
      state.customer_data.pincode = payload;
    },

    setSelectedProductWeight(state, payload) {
      let products = state.products;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == payload.product_id)
          products[i].selected_product_weight = payload.value;
      }
      state.products = products;
    },
    // dynamic
    updateTemporaryQuantity(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.product_id) {
          cart[i].weight_price[
            cart[i].selected_product_weight
          ].temporary_quantity = payload.temporary_quantity;
        }
      }
      state.products = cart;
    },

    updatePermanentQuantity(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.product_id) {
          cart[i].weight_price[payload.selected_weight_price].cart_quantity =
            payload.cart_quantity;
          cart[i].weight_price[
            payload.selected_weight_price
          ].temporary_quantity = payload.temporary_quantity;
        }
      }
      state.products = cart;
    },
    deleteFromCart(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.id) {
          cart[i].weight_price[
            cart[i].selected_product_weight
          ].cart_quantity = 0;
          cart[i].weight_price[
            cart[i].selected_product_weight
          ].temporary_quantity = 1;
        }
      }
      state.products = cart;
    },
    deleteFromActualCart(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.id) {
          cart[i].weight_price[payload.weight_price.id].cart_quantity = 0;
          cart[i].weight_price[payload.weight_price.id].temporary_quantity = 1;
        }
      }
      state.products = cart;
    },
    addToCart(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.id) {
          cart[i].weight_price[cart[i].selected_product_weight].cart_quantity =
            payload.weight_price[
              cart[i].selected_product_weight
            ].temporary_quantity;
        }
      }
      state.products = cart;
    },
    toggleCartVisibility(state, payload) {
      state.showCart = payload;
    },
    toggleItemVisibility(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == payload.id) {
          cart[i].weight_price[payload.weight_price.id].show = !cart[i]
            .weight_price[payload.weight_price.id].show;
        }
      }
      state.products = cart;
    },
    collapseAllShowButtons(state) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i].weight_price.length; j++) {
          cart[i].weight_price[j].show = false;
        }
      }
      state.products = cart;
    },
    placeOrder(state, payload) {
      let cart = [...state.products];
      for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i].weight_price.length; j++) {
          cart[i].weight_price[j].cart_quantity = 0;
          cart[i].weight_price[j].temporary_quantity = 1;
        }
      }
      state.products = cart;
      state.order_placed = true;
      state.order_id = payload;
    },
    resetOrderState(state) {
      state.order_placed = false;
      state.order_id = null;
    },

    // Shared
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setSuccess(state, payload) {
      state.success = payload;
    },
    clearSuccess(state) {
      state.success = null;
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      console.log(payload)
      if (payload.action == "add") {
        commit("addToCart", payload.productData);
        commit("setSuccess", {
          message: payload.productData.name + "["+ payload.productData.weight_price[payload.productData.selected_product_weight].weight+"] added to Cart",
          status: true,
        });
        setTimeout(() => commit("clearSuccess"), 2000);
      } else {
        commit("addToCart", payload.productData);
        commit("setSuccess", { message: "Cart Updated", status: true });
        setTimeout(() => commit("clearSuccess"), 1000);
      }
    },
    deleteFromCart({ commit }, payload) {
      commit("deleteFromCart", payload);
      commit("setError", {
        message: payload.name + "["+ payload.weight_price[payload.selected_product_weight].weight+"] removed from Cart",
        status: true,
      });
      setTimeout(() => commit("clearError"), 2000);
    },
    deleteFromActualCart({ commit }, payload) {
      console.log(payload)
      commit("deleteFromActualCart", payload);
      commit("setError", {
        message: payload.name + "["+ payload.weight_price.weight+"] removed from Cart",
        status: true,
      });
      setTimeout(() => commit("clearError"), 2000);
    },
    placeOrder({ commit }, payload) {
      // Add a new document in collection "cities"
      commit('setLoading', true)
      let order = {
        ...payload,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        order_status: 0,
      };
      db.collection("orders")
        .add(order)
        .then(function(docRef) {
          console.log("Order Placed with Unique Order ID: ", docRef.id);
          commit("placeOrder", docRef.id);
          commit('setLoading', false)
          router.replace("/order");
          commit("setSuccess", {
            message: "Order Placed Successfully",
            status: true,
          });
          setTimeout(() => commit("clearSuccess"), 4000);
        })
        .catch(function(error) {
          console.error("Could not place your order. Please try again.", error);
          commit('setLoading', false)
          commit("setError", {
            message: "Could not place your order. Please try again",
            status: true,
          });
          setTimeout(() => commit("clearError"), 4000);
        });
    },
  },
  modules: {},
});
