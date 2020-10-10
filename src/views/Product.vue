<template>
  <v-container fluid v-if="productData != null" id="productdetails">
    <app-cart></app-cart>
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
    <!-- <v-row justify="center" v-if="$vuetify.breakpoint.xs"> -->
    <v-row justify="center">
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <span class="text-h5">{{ productData.name }}</span>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-carousel
          continuous
          delimiter-icon="mdi-minus"
          hide-delimiters
          cycle
          show-arrows-on-hover
          hide-delimiter-background
          :height="$vuetify.breakpoint.xs ? 250 : 500"
        >
          <v-carousel-item
            v-for="(img, i) in productData.imgs"
            :key="i"
            :src="img"
          ></v-carousel-item>
        </v-carousel>
        <!-- <v-img height="200" :src="productData.img"></v-img> -->
      </v-col>

      <v-col cols="12" sm="6" v-if="$vuetify.breakpoint.xs">
        <div class="d-flex justify-space-between mx-2">
          <div class="align-self-center">
            <v-icon size="24" color="accent" left>mdi-weight</v-icon>
            <span class="font-weight-light text-button">Weight</span>
          </div>
          <div class="align-self-center">
            <v-btn-toggle
              v-model="productData.selected_product_weight"
              borderless
              mandatory
              color="accent"
            >
              <v-btn
                @click="setSelectedProductWeight(item.id)"
                v-for="item in productData.weight_price"
                :key="item.id"
              >
                <span>{{ item.weight }}</span>
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
        <div class="d-flex justify-space-between mx-2 my-2">
          <div class="align-self-center">
            <v-icon size="24" color="accent" left>mdi-cash-100</v-icon>
            <span class="font-weight-light text-button">Price</span>
          </div>
          <div class="text-subtitle-1 success--text align-self-center">
            ₹{{
              productData.weight_price[productData.selected_product_weight]
                .sale_price
            }}
            <span
              class="error--text subtitle-2 text-decoration-line-through"
              v-if="
                productData.weight_price[productData.selected_product_weight]
                  .sale_price !=
                productData.weight_price[productData.selected_product_weight]
                  .cost_price
              "
              >₹{{
                productData.weight_price[productData.selected_product_weight]
                  .cost_price
              }}</span
            >
          </div>
          <div></div>
        </div>
        <div class="d-flex justify-space-around mx-2 my-4">
          <div v-if="productData.in_stock" class="align-self-center">
            <v-text-field
              outlined
              label="Quantity"
              readonly
              min="1"
              :value="
                productData.weight_price[productData.selected_product_weight]
                  .temporary_quantity
              "
              dense
              type="number"
              color="success"
            >
              <v-icon
                slot="append-outer"
                color="success"
                @click="increaseQuantity()"
                >mdi-plus</v-icon
              >
              <v-icon slot="prepend" color="error" @click="decreaseQuantity()"
                >mdi-minus</v-icon
              >
            </v-text-field>
            <div class="d-flex justify-space-around" v-if="in_cart_status">
              <v-btn class="error" @click="deleteFromCart()">
                <v-icon left>mdi-delete</v-icon>Remove
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="accent" @click="addToCart('update')">
                <v-icon left>mdi-sync</v-icon>Update
              </v-btn>
            </div>
            <div v-else>
              <v-btn block class="accent" @click="addToCart('add')">
                <v-icon left>mdi-cart-plus</v-icon>Add To Cart
              </v-btn>
            </div>
          </div>
          <div v-else>
            <v-chip small outlined class="my-2" color="error"
              >Out of Stock</v-chip
            >
          </div>
        </div>

        <div class="mx-2">
          <v-icon size="24" color="accent" left>mdi-image-text</v-icon>
          <span class="font-weight-light text-button">Description</span>
          <br />
          <span class="caption">{{ productData.description }}</span>
        </div>
        <div class="d-flex justify-space-between mx-2">
          <div class="align-self-center">
            <v-icon size="24" color="accent" left>mdi-star</v-icon>
            <span class="font-weight-light text-button">Rating</span>
          </div>
          <div class="align-self-center">
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
            </div>
            <span class="grey--text caption mx-4"
              >{{ productData.rating.toFixed(1) }} ({{
                productData.rated_by_people
              }})</span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" v-else>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="6" class="text-left">
                <div class="align-self-center">
                  <v-icon size="24" color="accent" left>mdi-weight</v-icon>
                  <span class="font-weight-light text-button">Weight</span>
                </div>
              </v-col>
              <v-col cols="6" class="text-center">
                <div class="align-self-center">
                  <v-btn-toggle
                    v-model="productData.selected_product_weight"
                    borderless
                    mandatory
                    color="accent"
                  >
                    <v-btn
                      @click="setSelectedProductWeight(item.id)"
                      v-for="item in productData.weight_price"
                      :key="item.id"
                    >
                      <span>{{ item.weight }}</span>
                    </v-btn>
                  </v-btn-toggle>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="text-left">
                <div class="align-self-center">
                  <v-icon size="24" color="accent" left>mdi-cash-100</v-icon>
                  <span class="font-weight-light text-button">Price</span>
                </div>
              </v-col>
              <v-col cols="6" class="text-center">
                <div class="text-subtitle-1 success--text align-self-center">
                  ₹{{
                    productData.weight_price[
                      productData.selected_product_weight
                    ].sale_price
                  }}
                  <span
                    class="error--text subtitle-2 text-decoration-line-through"
                    v-if="
                      productData.weight_price[
                        productData.selected_product_weight
                      ].sale_price !=
                      productData.weight_price[
                        productData.selected_product_weight
                      ].cost_price
                    "
                    >₹{{
                      productData.weight_price[
                        productData.selected_product_weight
                      ].cost_price
                    }}</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <div class="d-flex justify-space-around mx-2 my-4">
              <div v-if="productData.in_stock" class="align-self-center">
                <!-- <div class="mb-3">
                  <v-icon size="24" color="accent" left>mdi-checkbox-marked-circle-outline</v-icon>
                  <span class="font-weight-light text-button">Cart</span>
                </div>-->
                <!-- <span class="font-weight-light text-button">Order</span> -->
                <v-text-field
                  outlined
                  label="Quantity"
                  readonly
                  min="1"
                  :value="
                    productData.weight_price[
                      productData.selected_product_weight
                    ].temporary_quantity
                  "
                  dense
                  type="number"
                  color="success"
                >
                  <v-icon
                    slot="append-outer"
                    color="success"
                    @click="increaseQuantity()"
                    >mdi-plus</v-icon
                  >
                  <v-icon
                    slot="prepend"
                    color="error"
                    @click="decreaseQuantity()"
                    >mdi-minus</v-icon
                  >
                </v-text-field>
                <div class="d-flex justify-space-around" v-if="in_cart_status">
                  <v-btn class="error" @click="deleteFromCart()">
                    <v-icon left>mdi-delete</v-icon>Remove
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn class="accent" @click="addToCart('add')">
                    <v-icon left>mdi-sync</v-icon>Update
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn block class="accent" @click="addToCart('update')">
                    <v-icon left>mdi-cart-plus</v-icon>Add To Cart
                  </v-btn>
                </div>
              </div>
              <div v-else>
                <v-chip small outlined class="my-2" color="error"
                  >Out of Stock</v-chip
                >
              </div>
              <!-- <div></div> -->
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-icon size="24" color="accent" left>mdi-image-text</v-icon>
            <span class="font-weight-light text-button">Description</span>
            <br />
            <div class="caption">{{ productData.description }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-space-between">
              <div class="align-self-center">
                <v-icon size="24" color="accent" left>mdi-star</v-icon>
                <span class="font-weight-light text-button">Rating</span>
              </div>
              <div class="align-self-center">
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
                </div>
                <span class="grey--text caption mx-4"
                  >{{ productData.rating.toFixed(1) }} ({{
                    productData.rated_by_people
                  }})</span
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else class="fill-height" fluid>
    <app-cart></app-cart>
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
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card flat>
          <v-card-text class="text-center">
            <span class="accent--text text-h4">Error 404</span>
            <br />
            <br />
            <br />
            <span class="text-button">Not Found</span>
            <br />
            <span class="text-button"
              >The page you were looking for is not found.</span
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" to="/">Take Me Home</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$vuetify.goTo("#productdetails", {
      duration: 0,
      offset: 0,
      easing: "easeOutQuad",
    });
  },
  computed: {
    in_cart_status() {
      let cart = this.$store.getters.products;
      for (let i = 0; i < cart.length; i++) {
        if (
          cart[i].id == this.productData.id &&
          cart[i].weight_price[this.productData.selected_product_weight]
            .cart_quantity > 0
        )
          return true;
      }
    },
    productData() {
      let products = this.$store.getters.products;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == this.$route.params.id) return products[i];
      }
      return null;
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
  methods: {
    setSelectedProductWeight(value) {
      this.$store.commit("setSelectedProductWeight", {
        product_id: this.$route.params.id,
        value: value,
      });
    },
    increaseQuantity() {
      this.$store.commit("updateTemporaryQuantity", {
        product_id: this.$route.params.id,
        temporary_quantity:
          this.productData.weight_price[
            this.productData.selected_product_weight
          ].temporary_quantity + 1,
      });
    },
    decreaseQuantity() {
      if (
        this.productData.weight_price[this.productData.selected_product_weight]
          .temporary_quantity > 1
      ) {
        this.$store.commit("updateTemporaryQuantity", {
          product_id: this.$route.params.id,
          temporary_quantity:
            this.productData.weight_price[
              this.productData.selected_product_weight
            ].temporary_quantity - 1,
        });
      }
    },
    deleteFromCart() {
      this.$store.dispatch("deleteFromCart", this.productData);
      this.dialog = false;
    },
    addToCart(action) {
      this.$store.dispatch("addToCart", {
        action: action,
        productData: this.productData,
      });
      this.dialog = false;
    },
  },
};
</script>
