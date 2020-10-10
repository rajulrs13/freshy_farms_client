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
    <v-dialog v-model="visibility" max-width="700">
      <v-card class="elevation-12">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12">
              <div v-if="items_in_cart > 0">
                <div>
                  <span class="font-weight-light text-h6">
                    You have
                    <span class="font-weight-regular">{{ items_in_cart }}</span>
                    {{ items_in_cart == 1 ? "item" : "items" }} in your cart
                  </span>
                </div>
                <div v-if="!$vuetify.breakpoint.xs">
                  <v-data-table
                    :headers="headers"
                    :items="cart"
                    :items-per-page="100"
                    hide-default-footer
                    class="elevation-0"
                  >
                    <template v-slot:item.weight="{ item }">
                      <span>{{ item.weight_price.weight }}</span>
                    </template>
                    <template v-slot:item.cart_quantity="{ item }">
                      <v-icon
                        small
                        color="error"
                        @click="decreaseQuantity(item)"
                        >mdi-minus</v-icon
                      >
                      <span
                        >&nbsp;{{ item.weight_price.cart_quantity }}&nbsp;</span
                      >
                      <v-icon
                        small
                        color="success"
                        @click="increaseQuantity(item)"
                        >mdi-plus</v-icon
                      >
                    </template>
                    <template v-slot:item.sale_price="{ item }">
                      <span>₹{{ item.weight_price.sale_price }}</span>
                    </template>
                    <template v-slot:item.delete="{ item }">
                      <v-icon small color="error" @click="deleteFromCart(item)"
                        >mdi-delete</v-icon
                      >
                    </template>
                    <template v-slot:item.subtotal="{ item }">
                      <span
                        >₹{{
                          item.weight_price.sale_price *
                          item.weight_price.cart_quantity
                        }}</span
                      >
                    </template>
                    <template v-slot:body.append="{ headers }">
                      <tr>
                        <!-- <td :colspan="$vuetify.breakpoint.xs == true ? 1 : 2"> -->
                        <td :colspan="2">
                          <b>Totals</b>
                        </td>
                        <td :colspan="1" style="text-align: center">
                          <b>{{ cartTotalQuantity }}</b>
                        </td>
                        <td :colspan="1" style="text-align: center"></td>
                        <td :colspan="1" style="text-align: center">
                          <b>₹{{ cartTotalPrice }}</b>
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
                  <div class="d-flex justify-center">
                    <v-btn class="accent" @click="checkout()">Checkout</v-btn>
                  </div>
                </div>
                <div v-else>
                  <v-card
                    class="mx-auto"
                    max-width="344"
                    v-for="(item, i) in cart"
                    :key="i"
                    flat
                  >
                    <v-card-actions>
                      <span class="text-button">{{ item.name }}</span>

                      <v-spacer></v-spacer>

                      <span class="text-button"
                        >₹{{
                          item.weight_price.sale_price *
                          item.weight_price.cart_quantity
                        }}&nbsp;</span
                      >

                      <v-btn icon @click="toggleItemVisibility(item)">
                        <v-icon>{{
                          item.weight_price.show
                            ? "mdi-chevron-up"
                            : "mdi-chevron-down"
                        }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="item.weight_price.show">
                        <v-divider></v-divider>

                        <v-card-text>
                          <div class="d-flex justify-space-between">
                            <span class="text-subtitle-1">Price</span>
                            <span>₹{{ item.weight_price.sale_price }}</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <span class="text-subtitle-1">Weight</span>
                            <span>₹{{ item.weight_price.weight }}</span>
                          </div>
                          <div class="d-flex justify-space-between">
                            <span class="text-subtitle-1">Quantity</span>
                            <span class="text-subtitle-1"></span>
                            <v-icon
                              small
                              color="error"
                              @click="decreaseQuantity(item)"
                              >mdi-minus</v-icon
                            >
                            <span
                              >&nbsp;{{
                                item.weight_price.cart_quantity
                              }}&nbsp;</span
                            >
                            <v-icon
                              small
                              color="success"
                              @click="increaseQuantity(item)"
                              >mdi-plus</v-icon
                            >
                          </div>
                          <br />
                          <div
                            class="d-flex justify-space-around"
                            @click="deleteFromCart(item)"
                          >
                            <v-btn class="error">
                              <v-icon left>mdi-delete</v-icon>Remove From Cart
                            </v-btn>
                          </div>
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                  <div class="d-flex justify-space-around">
                    <span>
                      <b>Cart Total:</b>
                    </span>
                    <span class="success--text">₹{{ cartTotalPrice }}</span>
                  </div>
                  <br />
                  <div>
                    <v-btn block @click="checkout()" class="accent"
                      >Checkout</v-btn
                    >
                  </div>
                </div>
              </div>
              <div v-else class="text-center">
                <span class="font-weight-light text-h6"
                  >YOUR CART IS EMPTY</span
                >
                <br />
                <br />
                <v-icon size="100">mdi-cart-outline</v-icon>
                <br />
                <br />
                <span
                  class="font-weight-light text-button"
                  style="font-size: 40px"
                  >Please add some items first</span
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  data() {
    return {
      show: false,
      headers: [
        {
          text: "Product",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Weight",
          align: "center",
          sortable: false,
          value: "weight",
        },
        {
          text: "Price",
          align: "center",
          sortable: false,
          value: "sale_price",
        },
        {
          text: "Quantity",
          align: "center",
          sortable: false,
          value: "cart_quantity",
        },

        { text: "Actions", align: "center", sortable: false, value: "delete" },
        {
          text: "Subtotal",
          align: "center",
          sortable: false,
          value: "subtotal",
        },
      ],
    };
  },
  computed: {
    visibility: {
      get() {
        return this.$store.getters.cartVisible;
      },
      set(value) {
        if (!value) {
          this.$store.commit("toggleCartVisibility", false);
        }
      },
    },
    items_in_cart() {
      return this.$store.getters.items_in_cart;
    },
    cart() {
      return this.$store.getters.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartTotalQuantity() {
      return this.$store.getters.cartTotalQuantity;
    },
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
  methods: {
    increaseQuantity(productData) {
      this.$store.commit("updatePermanentQuantity", {
        product_id: productData.id,
        selected_weight_price: productData.weight_price.id,
        cart_quantity: productData.weight_price.cart_quantity + 1,
        temporary_quantity: productData.weight_price.cart_quantity + 1,
      });
    },
    decreaseQuantity(productData) {
      if (productData.weight_price.cart_quantity > 1) {
        this.$store.commit("updatePermanentQuantity", {
          product_id: productData.id,
          selected_weight_price: productData.weight_price.id,
          cart_quantity: productData.weight_price.cart_quantity - 1,
          temporary_quantity: productData.weight_price.cart_quantity - 1,
        });
      }
    },
    deleteFromCart(productData) {
      this.$store.dispatch("deleteFromActualCart", productData);
    },
    toggleItemVisibility(productData) {
      this.$store.commit("toggleItemVisibility", productData);
    },
    checkout() {
      this.$store.commit("collapseAllShowButtons");
      this.$store.commit("toggleCartVisibility", false);
      this.$router.push("/checkout");
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
};
</script>