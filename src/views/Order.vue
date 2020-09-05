<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card flat>
          <v-card-text class="text-center">
            <span class="success--text text-h4">Order Successful</span>
            <br />
            <br />
            <br />
            <span class="text-button">Your Order Number:</span>
            <br />
            <span class="text-button">{{order_number}}</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" to="/">Take Me Home</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    order_number() {
      return Math.floor(Math.random() * 1000000);
    },
  },
};
</script>

<style>
</style>