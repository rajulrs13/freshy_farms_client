<template>
  <v-app>
    <v-app-bar color="primary" app dark clipped-left>
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>-->
      <router-link :disabled="loading" to="/" style="text-decoration: none">
        <!-- <span class="font-weight-regular title white--text">Freshy Farms</span> -->
        <img
          :src="logo"
          height="50"
          width="77"
          @click="
            $vuetify.goTo('#home', {
              duration: 1000,
              offset: 0,
              easing: 'easeOutQuad',
            })
          "
        />
      </router-link>

      <v-spacer></v-spacer>

      <span
        class="font-weight-light white--text mx-3"
        v-if="!$vuetify.breakpoint.xs && $route.path == '/'"
        @click="
          $vuetify.goTo('#prods', {
            duration: 1000,
            offset: 0,
            easing: 'easeOutQuad',
          })
        "
        >Products</span
      >

      <span
        class="font-weight-light white--text mx-3"
        v-if="!$vuetify.breakpoint.xs && $route.path == '/'"
        @click="
          $vuetify.goTo('#about', {
            duration: 1000,
            offset: 0,
            easing: 'easeOutQuad',
          })
        "
        >About</span
      >
      <div v-if="$route.path != '/checkout' && $route.path != '/order'">
        <v-badge
          :content="items_in_cart"
          :value="items_in_cart"
          color="orange"
          overlap
        >
          <v-icon class="white--text" @click="toggleCart()">mdi-cart</v-icon>
        </v-badge>
      </div>
    </v-app-bar>

    <v-main id="home">
      <v-dialog v-model="prompt" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">New Version</v-card-title>
          <v-card-text>A new version is found. Refresh to load it?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="prompt = false"
              >Disagree</v-btn
            >
            <v-btn color="green darken-1" text @click="update">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <div class="update-dialog" v-if="prompt">
        <div class="update-dialog__content">A new version is found. Refresh to load it?</div>
        <div class="update-dialog__actions">
          <button
            class="update-dialog__button update-dialog__button--confirm"
            @click="update"
          >Update</button>
          <button
            class="update-dialog__button update-dialog__button--cancel"
            @click="prompt = false"
          >Cancel</button>
        </div>
      </div>-->
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <router-view></router-view>
    </v-main>
    <v-footer padless app color="primary" style="height: auto" tile>
      <v-col class="text-left" cols="5">
        <span class="white--text caption ml-2">© Freshy Farms</span>
      </v-col>
      <v-col class="text-center" cols="2">
        <!-- <v-btn class="white--text" icon> -->
        <span class="white--text text-caption" v-if="!$vuetify.breakpoint.xs"
          >Contact on</span
        >
        <a
          href="//api.whatsapp.com/send?phone=917428287871&text=Hi Freshy Farms, Whatsup!"
          ><v-icon class="white--text" size="24" color="green" right
            >mdi-whatsapp</v-icon
          ></a
        >
        <!-- </v-btn> -->
      </v-col>
      <v-col class="text-right" cols="5">
        <!-- <v-btn v-for="icon in icons" :key="icon" class="white--text" icon> -->
        <span
          class="white--text text-caption ml-2"
          v-if="!$vuetify.breakpoint.xs"
          >Follow us</span
        >
        <v-icon class="white--text ml-1" size="24" color="blue" dark
          >mdi-facebook</v-icon
        >
        <v-icon class="white--text ml-1" size="24" color="pink"
          >mdi-instagram</v-icon
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";
import logo from "./assets/logo_shadow.png";
// import backImg from "./assets/backImg2.png";
export default {
  name: "App",
  data: () => ({
    logo: logo,
    // backImg:backImg,
    drawer: false,
    prompt: false,
  }),
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    },
    toggleCart() {
      this.$store.commit("toggleCartVisibility", true);
    },
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  },
  computed: {
    items_in_cart() {
      return this.$store.getters.items_in_cart;
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
};
</script>
