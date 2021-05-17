<template>
  <div>
    <v-btn
      v-show="habit.finished"
      small
      absolute
      right
      top
      class="transparent close-button"
      @click="deleteHabit(habit)"
    >
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>

    <v-btn
      v-show="!habit.finished"
      absolute
      right
      small
      :loading="loading"
      :disabled="loading"
      color="cyan"
      class="white--text btn-increment"
      fab
      @click="incrementHabit(habit)"
    >
      <v-icon color="white" class="plus">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loader: null,
      loading: false
    };
  },
  methods: {
    ...mapActions("habits/", ["completeHabit", "deleteHabit"]),
    incrementHabit(habit) {
      this.loader = "loading";
      this.completeHabit(habit);

      if (this.habit.finished) {
        this.$confetti.start({ defaultDropRate: 8 });
        setTimeout(() => {
          this.$confetti.stop();
        }, 1500);
      }
    }
  },
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 500);

      this.loader = null;
    }
  }
};
</script>
<style>
.btn-increment {
  top: 53px;
}
.close-button {
  box-shadow: none;
}
.plus {
  font-size: 35px !important  ;
}
</style>
