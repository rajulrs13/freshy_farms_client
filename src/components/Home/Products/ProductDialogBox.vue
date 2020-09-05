<template>
  <div>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xs ? true : false"
      :hide-overlay="$vuetify.breakpoint.xs ? true : false"
      max-width="700"
      transition="dialog-bottom-transition"
    >
      <v-card class="elevation-12">
        <v-toolbar dark color="success" v-if="$vuetify.breakpoint.xs">
          <v-toolbar-title>Product Description</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12">
              <div class="d-flex justify-space-between">
                <span class="text-h5">{{productData.name}}</span>
                <div>
                  <v-rating
                    :value="productData.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="12"
                    :length="Math.ceil(productData.rating)"
                  ></v-rating>
                  <div
                    class="grey--text caption mx-4"
                  >{{(productData.rating).toFixed(1)}} ({{productData.rated_by_people}})</div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="10">
              <v-img height="200" :src="productData.img"></v-img>
            </v-col>
            <v-col cols="12" sm="5" order-sm="3">
              <v-row>
                <v-col cols="6" sm="12">
                  <span class="font-weight-light caption">Weight</span>

                  <div class="subtitle-2">
                    <v-icon size="15" color="success">mdi-weight</v-icon>
                    <span
                      class="font-weight-light text-subtitle-2"
                    >&nbsp;{{productData.weight}}&nbsp;&nbsp;</span>
                  </div>
                </v-col>
                <v-col cols="6" sm="12">
                  <span class="font-weight-light caption my-4">Price</span>
                  <div class="text-subtitle-1 success--text" v-if="productData.in_stock">
                    ₹{{productData.sale_price}}
                    <span
                      class="error--text subtitle-2 text-decoration-line-through"
                      v-if="productData.sale_price != productData.cost_price"
                    >₹{{productData.cost_price}}</span>
                  </div>
                  <div v-else>
                    <v-chip small outlined class="my-2" color="error">Out of Stock</v-chip>
                  </div>
                </v-col>
              </v-row>

              <div v-if="productData.in_stock">
                <span class="font-weight-light caption my-2">Order</span>
                <v-text-field
                  outlined
                  label="Quantity"
                  readonly
                  min="1"
                  :value="productData.temporary_quantity"
                  dense
                  type="number"
                  color="success"
                >
                  <v-icon slot="append-outer" color="success" @click="increaseQuantity()">mdi-plus</v-icon>
                  <v-icon slot="prepend" color="error" @click="decreaseQuantity()">mdi-minus</v-icon>
                </v-text-field>
                <div class="d-flex justify-space-around" v-if="in_cart_status">
                  <v-btn class="error" @click="deleteFromCart()">
                    <v-icon left>mdi-delete</v-icon>Remove
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn class="success" @click="addToCart()">
                    <v-icon left>mdi-sync</v-icon>Update
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn block class="success" @click="addToCart()">
                    <v-icon left>mdi-cart-plus</v-icon>Add To Cart
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="7" order-sm="2">
              <span class="caption font-weight-light">Description</span>
              <br />
              <span class="caption">{{productData.description}}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["visible", "productData"],
  data() {
    return {};
  },
  computed: {
    dialog: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
    in_cart_status() {
      let cart = this.$store.getters.products;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == this.productData.id && cart[i].cart_quantity > 0)
          return true;
      }
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
  methods: {
    increaseQuantity() {
      this.$store.commit("updateTemporaryQuantity", {
        ...this.productData,
        temporary_quantity: this.productData.temporary_quantity + 1,
      });
    },
    decreaseQuantity() {
      if (this.productData.temporary_quantity > 1) {
        this.$store.commit("updateTemporaryQuantity", {
          ...this.productData,
          temporary_quantity: this.productData.temporary_quantity - 1,
        });
      }
    },
    deleteFromCart() {
      this.$store.commit("deleteFromCart", this.productData);
      this.dialog = false;
    },
    addToCart() {
      this.$store.commit("addToCart", this.productData);
      this.dialog = false;
    },
  },
};
</script>
