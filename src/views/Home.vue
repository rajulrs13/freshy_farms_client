<template>
  <div>
    <alert-component
      v-if="error"
      :text="error.message"
      :color="'error'"
    ></alert-component>
    <alert-component
      v-if="success"
      :text="success.message"
      :color="'success'"
    ></alert-component>
    <app-deals id="home"></app-deals>
    <app-products id="prods"></app-products>
    <app-about id="about"></app-about>
    <app-cart></app-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import AllDeals from "@/components/Home/Deals/AllDeals.vue";
import AllProducts from "@/components/Home/Products/AllProducts.vue";
import About from "@/components/Home/About/About.vue";
// import Cart from "@/components/Home/Cart/Cart.vue";

export default {
  name: "Home",
  components: {
    "app-deals": AllDeals,
    "app-products": AllProducts,
    "app-about": About,
    // "app-cart": Cart,
  },
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    success() {
      return this.$store.getters.success;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(err) {
      if (!!err) {
        setTimeout(() => this.$store.commit("clearError"), 3000);
      }
    },
    success(con) {
      if (!!con) {
        setTimeout(() => this.$store.commit("clearSuccess"), 4000);
      }
    },
  },
  methods: {},
};
</script>
