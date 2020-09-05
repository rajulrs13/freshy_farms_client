<template>
  <v-row>
    <v-col cols="12">
      <v-container fluid>
        <v-row>
          <v-col v-for="(product, index) in products" :key="index" cols="12" sm="4">
            <v-card class="mx-auto" max-width="374" @click="openDialogBox(product)">
              <v-img height="250" :src="product.img"></v-img>
              <v-card-text>
                <div class="text-h5 font-weight-regular">{{product.name}}</div>
                <div class="font-weight-light">{{product.quantity}}</div>
                <div class="my-2 text-h6 success--text" v-if="product.in_stock">
                  ₹{{product.sale_price}}
                  <span
                    class="error--text subtitle-2 text-decoration-line-through"
                    v-if="product.sale_price != product.cost_price"
                  >₹{{product.cost_price}}</span>
                </div>
                <div v-else>
                  <v-chip small outlined class="my-2" color="error">Out of Stock</v-chip>
                </div>
                <div class="text-truncate">{{product.description}}</div>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="product.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    :length="Math.ceil(product.rating)"
                    size="14"
                    background-color="amber"
                  ></v-rating>

                  <div
                    class="grey--text ml-4"
                  >{{(product.rating).toFixed(1)}} ({{product.rated_by_people}})</div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <app-product-dialog-box
              :productData="openedItem"
              :visible="showDialog"
              @close="showDialog=false"
            ></app-product-dialog-box>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import ProductDialogBox from "./ProductDialogBox";
export default {
  components: {
    "app-product-dialog-box": ProductDialogBox,
  },
  data() {
    return {
      openedItem: {
        img: "",
        name: "",
        weight: "",
        description: "",
        sale_price: 0,
        cost_price: 0,
        in_stock: false,
        rating: 0,
        rated_by_people: 0,
        cart_quantity: 0,
        temporary_quantity: 1,
      },
      showDialog: false,
    };
  },
  methods: {
    openDialogBox(productDetail) {
      this.openedItem = productDetail;
      this.showDialog = true;
    },
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    // loading() {
    //   return this.$store.getters.loading;
    // },
    // success() {
    //   return this.$store.getters.success;
    // },
    // error() {
    //   return this.$store.getters.error;
    // }
  },
};
</script>