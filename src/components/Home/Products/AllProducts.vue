<template>
  <v-container fluid style="background-color:#eee">
    <v-row>
      <v-col cols="12" sm="12">
        <v-sheet color="#eee" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <span class="font-weight-light text-h3">OUR PRODUCTS</span>
              <br />
              <span class="font-weight-light text-button">Choose from a variety of products</span>
            </div>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="12">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="accent"
          centered
          icons-and-text
          show-arrows
          grow
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Spices
            <v-icon>mdi-shaker</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Dry Fruits
            <v-icon>mdi-fruit-grapes-outline</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Honey
            <v-icon>mdi-bee-flower</v-icon>
          </v-tab>
          <v-tab href="#tab-4">
            Combos
            <v-icon>mdi-vector-combine</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="nn">
          <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
            <v-card flat>
              <app-product-gallery :category="i"></app-product-gallery>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductGallery from "@/components/Home/Products/ProductGallery.vue";
export default {
  components: {
    "app-product-gallery": ProductGallery,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style>
.v-window__container {
  background-color: #eee;
}
</style>