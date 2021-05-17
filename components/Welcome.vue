<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="blue-gray darken-1"
      absolute
      right
      top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="light-blue lighten-4"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <FeatureDiscovery
      v-model="discover"
      color="green lighten-3"
      right
      top
      size="400"
      class=" black--text"
    >
      <h2 slot="title">Hey! Welcome to Habits</h2>
      <p slot="text" class="mb-0">
        La forma más efectiva de cambiar tus hábitos es enfocarte no en lo que
        deseas lograr, sino en quién deseas convertirte.
      </p>
      <div slot="actions">
        <v-btn
          class="mr-4 white--text"
          color="cyan darken-4"
          @click="loadMessage"
          >Close</v-btn
        >
      </div>
    </FeatureDiscovery>
  </div>
</template>

<script>
import FeatureDiscovery from "@/components/FeatureDiscovery";

export default {
  components: {
    FeatureDiscovery
  },
  data: () => ({
    snackbar: false,
    text: "⭐️ Tip:ctrl + h  create a new habit.",
    timeout: 10000,
    discover: false
  }),
  methods: {
    loadMessage() {
      this.discover = false;
      setTimeout(() => {
        this.snackbar = true;
      }, 1000);
    }
  },
  mounted() {
    this.discover = !this.discover;
  }
};
</script>

<style></style>
