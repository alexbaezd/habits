<template>
  <v-btn
    @click="toggleDialog"
    class="button-add-habit"
    color="pink"
    small
    fixed
    bottom
    right
    fab
  >
    <v-icon color="white">mdi-plus</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      toggleDialog: "toggleDialog"
    })
  }
};
</script>

<style>
.button-add-habit {
  margin-bottom: 4rem;
  margin-right: 1rem;
}
</style>
