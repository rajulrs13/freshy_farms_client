<template>
  <v-app>
    <v-app-bar color="success" app dark clipped-left>
      <router-link :disabled="loading" to="/" style="text-decoration:none;">
        <span class="font-weight-regular title white--text">Freshy Farms</span>
      </router-link>

      <v-spacer></v-spacer>

      <!-- <span class="font-weight-light white--text mx-3">Products</span>

      <span class="font-weight-light white--text mx-3">About</span>-->
      <div v-if="$route.path != '/checkout' && $route.path != '/order'">
        <v-badge :content="items_in_cart" :value="items_in_cart" color="orange" overlap>
          <v-icon class="white--text" @click="toggleCart()">mdi-cart</v-icon>
        </v-badge>
      </div>
    </v-app-bar>

    <v-main>
      <v-dialog v-model="prompt" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">New Version</v-card-title>
          <v-card-text>A new version is found. Refresh to load it?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="prompt = false">Disagree</v-btn>
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
      <router-view></router-view>
    </v-main>
    <v-footer padless app color="success" style="height:auto" tile>
      <v-col class="text-left" cols="5">
        <span class="white--text caption ml-2">© Freshy Farms</span>
      </v-col>
      <v-col class="text-center" cols="2">
        <!-- <v-btn class="white--text" icon> -->
        <v-icon class="white--text" size="16">mdi-whatsapp</v-icon>
        <!-- </v-btn> -->
      </v-col>
      <v-col class="text-right" cols="5">
        <!-- <v-btn v-for="icon in icons" :key="icon" class="white--text" icon> -->
        <v-icon class="white--text ml-1" size="16">mdi-facebook</v-icon>
        <v-icon class="white--text ml-1" size="16">mdi-twitter</v-icon>
        <v-icon class="white--text ml-1" size="16">mdi-linkedin</v-icon>
        <v-icon class="white--text ml-1" size="16">mdi-instagram</v-icon>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import logo from "./assets/logo.png";
export default {
  name: "App",
  data: () => ({
    logo: logo,
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
