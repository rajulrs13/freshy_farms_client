<template>
  <v-container fluid>
    <alert-component v-if="error" :text="error.message" :color="'error'"></alert-component>
    <alert-component v-if="success" :text="success.message" :color="'success'"></alert-component>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <v-stepper v-model="e6" vertical class="elevation-0">
          <v-stepper-step color="accent" :complete="e6 > 1" step="1"
            >Billing Information</v-stepper-step
          >
          <v-stepper-content step="1">
            <v-form @submit.prevent="step1" ref="form1" v-model="form1_valid">
              <v-card flat>
                <span>Personal Information</span>
                <v-row>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      :rules="[rules.required]"
                      v-model="firstname"
                      label="Firstname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      :rules="[rules.required]"
                      v-model="lastname"
                      label="Lastname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      :rules="[rules.required, rules.email]"
                      v-model="email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      type="number"
                      :rules="[rules.required, rules.phone]"
                      v-model="phone"
                      label="Phone"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <span>Address</span>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      :rules="[rules.required]"
                      v-model="street_address"
                      label="Street Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      :rules="[rules.required]"
                      v-model="city"
                      label="Town/City"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-select
                      color="accent"
                      :items="states"
                      item-text="state"
                      dense
                      v-model="state"
                      :rules="[rules.required]"
                      label="State"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      color="accent"
                      outlined
                      dense
                      v-model="pincode"
                      :rules="[rules.required, rules.pincode]"
                      label="Pincode"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
              <v-btn color="accent" type="submit" :disabled="!form1_valid"
                >Continue</v-btn
              >
              <!-- <v-btn color="accent" @click="e6 = 2">Continue</v-btn> -->
              <v-btn text @click="returnToCart()">Back</v-btn>
            </v-form>
          </v-stepper-content>

          <v-stepper-step color="accent" :complete="e6 > 2" step="2"
            >Payment & Shipping</v-stepper-step
          >

          <v-stepper-content step="2">
            <v-form @submit.prevent="step2" ref="form2" v-model="form2_valid">
              <v-card flat>
                <div>
                  <span>Payment Methods</span>
                  <v-radio-group
                    v-model="payment_mode"
                    :rules="[rules.required]"
                  >
                    <v-radio
                      color="accent"
                      label="Cash On Delivery"
                      value="Cash On Delivery"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <div>
                  <br />
                  <span>Delivery Type</span>
                  <v-radio-group
                    v-model="delivery_type"
                    :rules="[rules.required]"
                  >
                    <v-radio
                      color="accent"
                      :label="
                        'Standard Delivery (₹' +
                        standard_shipping_fee +
                        ', ' +
                        standard_shipping_days +
                        ' Days)'
                      "
                      value="Standard Delivery"
                    ></v-radio>
                    <v-radio
                      color="accent"
                      :label="
                        'Express Delivery (₹' +
                        express_shipping_fee +
                        ', ' +
                        express_shipping_days +
                        ' Days)'
                      "
                      value="Express Delivery"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </v-card>
              <v-btn color="accent" type="submit" :disabled="!form2_valid"
                >Continue</v-btn
              >
              <v-btn text @click="backStep(1)">Back</v-btn>
            </v-form>
          </v-stepper-content>

          <v-stepper-step color="accent" :complete="e6 > 3" step="3"
            >Confirmation</v-stepper-step
          >

          <v-stepper-content step="3">
            <v-card flat>
              <div>
                <span>Order Details</span>
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
                  <template v-slot:item.sale_price="{ item }">
                    <span>₹{{ item.weight_price.sale_price }}</span>
                  </template>
                  <template v-slot:item.cart_quantity="{ item }">
                    <span>{{ item.weight_price.cart_quantity }}</span>
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
                      <td :colspan="1">
                        <b>Shipping Charges</b>
                      </td>
                      <td :colspan="3" style="text-align: center"></td>
                      <td :colspan="1" style="text-align: center">
                        <b
                          >₹{{
                            delivery_type == "Standard Delivery"
                              ? standard_shipping_fee
                              : express_shipping_fee
                          }}</b
                        >
                      </td>
                    </tr>
                    <tr>
                      <!-- <td :colspan="$vuetify.breakpoint.xs == true ? 1 : 2"> -->
                      <td :colspan="3">
                        <b>Totals</b>
                      </td>
                      <td :colspan="1" style="text-align: center">
                        <b>{{ cartTotalQuantity }}</b>
                      </td>
                      <td :colspan="1" style="text-align: center">
                        <b
                          >₹{{
                            cartTotalPrice +
                            (delivery_type == "Standard Delivery"
                              ? standard_shipping_fee
                              : express_shipping_fee)
                          }}</b
                        >
                      </td>
                    </tr>
                  </template>
                </v-data-table>
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
                    <v-btn icon small @click="toggleItemVisibility(item)">
                      <v-icon small>{{
                        item.weight_price.show ? "mdi-minus" : "mdi-plus"
                      }}</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <span class="text-button">{{ item.name }}</span>
                    <v-spacer></v-spacer>

                    <span class="text-button"
                      >₹{{
                        item.weight_price.sale_price *
                        item.weight_price.cart_quantity
                      }}&nbsp;</span
                    >
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="item.weight_price.show">
                      <v-divider></v-divider>

                      <v-card-text>
                        <div class="d-flex justify-space-between">
                          <span class="text-subtitle-1">Weight</span>
                          <span>₹{{ item.weight_price.weight }}</span>
                        </div>
                        <div class="d-flex justify-space-between">
                          <span class="text-subtitle-1">Price</span>
                          <span>₹{{ item.weight_price.sale_price }}</span>
                        </div>
                        <div class="d-flex justify-space-between">
                          <span class="text-subtitle-1">Quantity</span>
                          <span
                            >&nbsp;{{
                              item.weight_price.cart_quantity
                            }}&nbsp;</span
                          >
                        </div>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
                <v-card class="mx-auto" max-width="344" flat>
                  <v-card-actions>
                    <span class="text-button">Shipping Charges</span>

                    <v-spacer></v-spacer>

                    <span class="text-button"
                      >₹{{
                        delivery_type == "Standard Delivery"
                          ? standard_shipping_fee
                          : express_shipping_fee
                      }}&nbsp;</span
                    >
                    <span></span>
                  </v-card-actions>
                </v-card>
                <v-card class="mx-auto" max-width="344" flat>
                  <v-card-actions>
                    <span class="text-button">total</span>

                    <v-spacer></v-spacer>

                    <span class="text-button"
                      >₹{{
                        cartTotalPrice +
                        (delivery_type == "Standard Delivery"
                          ? standard_shipping_fee
                          : express_shipping_fee)
                      }}&nbsp;</span
                    >
                    <span></span>
                  </v-card-actions>
                </v-card>
              </div>
              <div v-if="$vuetify.breakpoint.xs">
                <div>
                  <br />
                  <span>Shipping Address</span>
                </div>
                <div>
                  <span class="text-caption">To,</span>
                  <br />
                  <span class="text-caption"
                    >{{ firstname }} {{ lastname }},</span
                  >
                  <br />
                  <span class="text-caption">{{ street_address }}</span>
                  <br />
                  <span class="text-caption">{{ city }}, {{ state }},</span>
                  <br />
                  <span class="text-caption">India</span>
                  <br />
                  <span class="text-caption">{{ pincode }}</span>
                  <br />
                  <span class="text-caption">{{ phone }}</span>
                  <br />
                  <span class="text-caption">{{ email }}</span>
                </div>
                <div>
                  <br />
                  <span>Delivery Details</span>
                  <v-chip class="ma-2" small color="accent" label outlined>
                    <v-icon left>{{
                      delivery_type == "Standard Delivery"
                        ? "mdi-truck"
                        : "mdi-truck-fast"
                    }}</v-icon>
                    {{ delivery_type }}
                  </v-chip>
                </div>
                <div>
                  <span class="text-caption">
                    *Expect Delivery Within
                    <b>{{
                      delivery_type == "Standard Delivery"
                        ? standard_shipping_days
                        : express_shipping_days
                    }}</b>
                    Days by
                    <b>{{
                      delivery_date(
                        delivery_type == "Standard Delivery"
                          ? standard_shipping_days
                          : express_shipping_days
                      )
                    }}</b>
                  </span>
                  <br />
                </div>
                <div>
                  <br />
                  <span>Payment Method</span>
                  <v-chip class="ma-2" small color="accent" label outlined>
                    <v-icon left>{{
                      payment_mode == "Cash On Delivery"
                        ? "mdi-cash-100"
                        : "mdi-credit-card-outline"
                    }}</v-icon>
                    {{ payment_mode }}
                  </v-chip>
                </div>
                <div>
                  <span class="text-caption"
                    >Please be ready with the exact amount handy (loose change,
                    if any) to avoid payment hassles.</span
                  >

                  <br />
                </div>
              </div>
              <div v-else class="d-flex justify-space-around">
                <div>
                  <div>
                    <br />
                    <span>Shipping Address</span>
                  </div>
                  <div>
                    <span class="text-caption">To,</span>
                    <br />
                    <span class="text-caption"
                      >{{ firstname }} {{ lastname }},</span
                    >
                    <br />
                    <span class="text-caption">{{ street_address }}</span>
                    <br />
                    <span class="text-caption">{{ city }}, {{ state }},</span>
                    <br />
                    <span class="text-caption">India</span>
                    <br />
                    <span class="text-caption">{{ pincode }}</span>
                    <br />
                    <span class="text-caption">{{ phone }}</span>
                    <br />
                    <span class="text-caption">{{ email }}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <br />
                    <span>Delivery Details</span>
                    <v-chip class="ma-2" small color="accent" label outlined>
                      <v-icon left>{{
                        delivery_type == "Standard Delivery"
                          ? "mdi-truck"
                          : "mdi-truck-fast"
                      }}</v-icon>
                      {{ delivery_type }}
                    </v-chip>
                  </div>
                  <div>
                    <span class="text-caption">
                      *Expect Delivery Within
                      <b>{{
                        delivery_type == "Standard Delivery"
                          ? standard_shipping_days
                          : express_shipping_days
                      }}</b>
                      Days by
                      <b>{{
                        delivery_date(
                          delivery_type == "Standard Delivery"
                            ? standard_shipping_days
                            : express_shipping_days
                        )
                      }}</b>
                    </span>
                    <br />
                  </div>
                  <div>
                    <br />
                    <span>Payment Method</span>
                    <v-chip class="ma-2" small color="accent" label outlined>
                      <v-icon left>{{
                        payment_mode == "Cash On Delivery"
                          ? "mdi-cash-100"
                          : "mdi-credit-card-outline"
                      }}</v-icon>
                      {{ payment_mode }}
                    </v-chip>
                  </div>
                  <div>
                    <span class="text-caption"
                      >Please be ready with the exact amount handy (loose
                      change, if any) to avoid payment hassles.</span
                    >

                    <br />
                  </div>
                </div>
              </div>
            </v-card>
            <br />
            <v-btn color="accent" @click="placeOrder()">Place Order</v-btn>
            <v-btn text @click="backStep(2)">Back</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // personal form
      form1_valid: false,
      // firstname: "",
      rules: {
        required: (value) => !!value || "Required.",
        phone: (value) => {
          const pattern = /\d/g;
          return (
            (pattern.test(value) && value.length == 10) ||
            "Invalid Phone Number."
          );
        },
        pincode: (value) => value.length == 6 || "Invalid Pincode",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid E-Mail.";
        },
      },

      // payment form
      form2_valid: false,
      payment_mode: "",
      delivery_type: "Standard Delivery",

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
        {
          text: "Subtotal",
          align: "center",
          sortable: false,
          value: "subtotal",
        },
      ],
      e6: 1,
      states: [
        { acronym: "AP", state: "Andhra Pradesh" },
        { acronym: "AR", state: "Arunachal Pradesh" },
        { acronym: "AS", state: "Assam" },
        { acronym: "BR", state: "Bihar" },
        { acronym: "CT", state: "Chhattisgarh" },
        { acronym: "GA", state: "Goa" },
        { acronym: "GJ", state: "Gujarat" },
        { acronym: "HR", state: "Haryana" },
        { acronym: "HP", state: "Himachal Pradesh" },
        { acronym: "JK", state: "Jammu and Kashmir" },
        { acronym: "JH", state: "Jharkhand" },
        { acronym: "KA", state: "Karnataka" },
        { acronym: "KL", state: "Kerala" },
        { acronym: "MP", state: "Madhya Pradesh" },
        { acronym: "MH", state: "Maharashtra" },
        { acronym: "MN", state: "Manipur" },
        { acronym: "ML", state: "Meghalaya" },
        { acronym: "MZ", state: "Mizoram" },
        { acronym: "NL", state: "Nagaland" },
        { acronym: "OR", state: "Orissa" },
        { acronym: "PB", state: "Punjab" },
        { acronym: "RJ", state: "Rajasthan" },
        { acronym: "SK", state: "Sikkim" },
        { acronym: "TN", state: "Tamil Nadu" },
        { acronym: "TS", state: "Telangana" },
        { acronym: "TR", state: "Tripura" },
        { acronym: "UK", state: "Uttarakhand" },
        { acronym: "UP", state: "Uttar Pradesh" },
        { acronym: "WB", state: "West Bengal" },
        { acronym: "AN", state: "Andaman and Nicobar Islands" },
        { acronym: "CH", state: "Chandigarh" },
        { acronym: "DN", state: "Dadra and Nagar Haveli" },
        { acronym: "DD", state: "Daman and Diu" },
        { acronym: "DL", state: "Delhi" },
        { acronym: "LD", state: "Lakshadeep" },
        { acronym: "PY", state: "Pondicherry (Puducherry)" },
      ],
    };
  },
  computed: {
    firstname: {
      get() {
        return this.$store.getters.firstname;
      },
      set(value) {
        this.$store.commit("setFirstname", value);
      },
    },
    lastname: {
      get() {
        return this.$store.getters.lastname;
      },
      set(value) {
        this.$store.commit("setLastname", value);
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    phone: {
      get() {
        return this.$store.getters.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
    street_address: {
      get() {
        return this.$store.getters.street_address;
      },
      set(value) {
        this.$store.commit("setStreetAddress", value);
      },
    },
    city: {
      get() {
        return this.$store.getters.city;
      },
      set(value) {
        this.$store.commit("setCity", value);
      },
    },
    state: {
      get() {
        return this.$store.getters.state;
      },
      set(value) {
        this.$store.commit("setState", value);
      },
    },
    pincode: {
      get() {
        return this.$store.getters.pincode;
      },
      set(value) {
        this.$store.commit("setPincode", value);
      },
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
    standard_shipping_fee() {
      return this.$store.getters.standard_shipping_fee;
    },
    express_shipping_fee() {
      return this.$store.getters.express_shipping_fee;
    },
    standard_shipping_days() {
      return this.$store.getters.standard_shipping_days;
    },
    express_shipping_days() {
      return this.$store.getters.express_shipping_days;
    },
    loading() {
      return this.$store.getters.loading;
    },
    success() {
      return this.$store.getters.success;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    step1() {
      if (this.$refs.form1.validate()) {
        this.e6 = 2;
      }
    },
    step2() {
      if (this.$refs.form2.validate()) {
        this.e6 = 3;
      }
    },
    backStep(step) {
      this.$store.commit("collapseAllShowButtons");
      this.e6 = step;
    },
    returnToCart() {
      this.$router.back();
    },
    toggleItemVisibility(productData) {
      this.$store.commit("toggleItemVisibility", productData);
    },
    delivery_date(days) {
      let delivery_date = new Date();
      delivery_date.setDate(delivery_date.getDate() + days);
      let dd = delivery_date.getDate();
      let mm = delivery_date.getMonth() + 1;
      let y = delivery_date.getFullYear();
      let formatted_delivery_date = dd + "/" + mm + "/" + y;
      return formatted_delivery_date;
    },
    placeOrder() {
      // console.log(this.cart)
      let order = {};
      order.firstname = this.firstname;
      order.lastname = this.lastname;
      order.email = this.email;
      order.phone = this.phone;
      order.street_address = this.street_address;
      order.city = this.city;
      order.state - this.state;
      order.pincode = this.pincode;

      order.payment_mode = this.payment_mode;
      order.delivery_type = this.delivery_type;

      order.expected_delivery_date = this.delivery_date(
        this.delivery_type == "Standard Delivery"
          ? this.standard_shipping_days
          : this.express_shipping_days
      );

      order.cart_total_price =
        this.cartTotalPrice +
        (this.delivery_type == "Standard Delivery"
          ? this.standard_shipping_fee
          : this.express_shipping_fee);
      order.cart_total_quantity = this.cartTotalQuantity;
      order.products = [];
      this.cart.forEach((element) => {
        let item = element;
        delete item.description;
        delete item.imgs;
        delete item.rated_by_people;
        delete item.rating;
        delete item.selected_product_weight;
        let h = element.weight_price;
        delete h.id;
        delete h.temporary_quantity;
        item.weight_price = h;
        order.products.push(item);
      });
      console.log(order);
      this.$store.dispatch("placeOrder", order);
      // this.$router.replace("/order");
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

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

