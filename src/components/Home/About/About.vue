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
                <span>At freshy farms, we bring you the native taste of spices, herbs, dry fruits and many other fresh organic products directly from the farms at unbelievably competitive prices. Satisfy your taste buds with our Naturally grown and selectively picked products.</span>
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
                <v-icon color="accent">mdi-phone</v-icon>
              </v-col>
              <v-col cols="9">
                <a href="tel:+917428287871" style="text-decoration:none; color:black">
                  <span>+91 7428287871</span>
                </a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon color="accent">mdi-email</v-icon>
              </v-col>
              <v-col cols="9">
                <a href="mailto:contact@freshyfarms.com?subject=Contact%20Freshy%20Farms&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20Freshy%20Farms." style="text-decoration:none; color:black">
                  <span>contact@freshyfarms.com</span>
                </a>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon color="accent">mdi-map-marker</v-icon>
              </v-col>
              <v-col cols="9">
                <a href="https://www.google.co.in/maps/@28.6323779,77.2782268,17.92z" style="text-decoration:none; color:black" target="_blank" >
                <span>D-52, Laxmi Nagar, New Delhi 110092</span></a>
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