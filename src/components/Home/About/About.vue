<template>
  <v-container fluid style="background-color:#ddd">
    <v-row>
      <v-col cols="12" sm="3">
        <v-sheet color="#ddd" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-center">
              <span class="font-weight-light text-h3">About Us</span>
            </div>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12" class="text-center">
                <span class="font-weight-light text-h6">Who We Are?</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="10" offset="1">
                <span>Freshy Farm is committed to provide fresh and good quality products at your doorstep straight from our farms.</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12" class="text-center">
                <span class="font-weight-light text-h6">Contact</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon color="success">mdi-phone</v-icon>
              </v-col>
              <v-col cols="9">
                <span>+91 8899889988</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon color="success">mdi-email</v-icon>
              </v-col>
              <v-col cols="9">
                <span>freshyfarms@gmail.com</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon color="success">mdi-map-marker</v-icon>
              </v-col>
              <v-col cols="9">
                <span>D-52, Laxmi Nagar, New Delhi 110092</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Carousel from "@/components/Carousel.vue";
export default {
  components: {
    // "app-carousel": Carousel,
  },
};
</script>

<style>
</style>