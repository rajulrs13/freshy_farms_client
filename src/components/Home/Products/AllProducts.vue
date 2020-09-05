<template>
  <v-container fluid style="background-color:#eee">
    <v-row>
      <v-col cols="12" sm="3" order-sm="2">
        <v-sheet color="#eee" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <span class="font-weight-light text-h3">Our Products</span>
              <br>
              <span class="font-weight-light text-h6">Choose from a variety of products</span>
            </div>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="9">
        <app-product-gallery></app-product-gallery>
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
};
</script>

<style>
</style>