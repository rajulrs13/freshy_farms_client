<template>
  <div>
    <app-deals></app-deals>
    <app-products></app-products>
    <app-about></app-about>
    <app-cart></app-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import AllDeals from "@/components/Home/Deals/AllDeals.vue";
import AllProducts from "@/components/Home/Products/AllProducts.vue";
import About from "@/components/Home/About/About.vue";
import Cart from "@/components/Home/Cart/Cart.vue";

export default {
  name: "Home",
  components: {
    "app-deals": AllDeals,
    "app-products": AllProducts,
    "app-about": About,
    "app-cart": Cart,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
