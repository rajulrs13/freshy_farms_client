<template>
  <v-container fluid style="background-color:#ddd">
    <v-row>
      <v-col cols="12" sm="3">
        <v-sheet color="#ddd" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <span class="font-weight-light text-h3">Deals & Offers</span>
            </div>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="9">
        <app-carousel></app-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/Home/Deals/Carousel.vue";
export default {
  components: {
    "app-carousel": Carousel,
  },
};
</script>

<style>
</style>