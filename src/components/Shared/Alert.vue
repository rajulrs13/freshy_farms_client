<template>
  <v-snackbar v-model="snackbar" :color="color" :bottom="true" :timeout="timeout">
    <span>{{ text }}</span>
  </v-snackbar>
</template>

<script>
export default {
  props: ["text", "color"],
  data() {
    return {
      snackbar: true,
      mode: "",
      timeout: 6000,
    };
  },
};
</script>