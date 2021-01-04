<template>
  <v-card-text>
    <v-container>
      <v-form
        @submit.prevent="validate"
        ref="form"
        v-model="valid"
        lazy-validation

      >
        <v-text-field
          v-model="newHabitTitle"
          :counter="20"
          :rules="newHabitRules"
          label="New Habit"
          required
          autofocus
        ></v-text-field>

        <v-text-field
          v-model.number="reps"
          :rules="repsRules"
          label="How many ?"
          type="number"
          required
        ></v-text-field>
        <!-- TODO: Add Color Picker -->
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
          type="submit"
        >
          Add New Habit
        </v-btn>

        <v-btn color="error" text class="mr-4" @click="reset">
          Cancel
        </v-btn>
      </v-form>
    </v-container>
  </v-card-text>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data: () => ({
    colorValue: "",
    valid: true,
    newHabitTitle: "",
    newHabitRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    reps: "",
    repsRules: [
      (v) => !!v || "Reps is required",
      (v) => v > 2 || "Reps must be less than 2",
    ],
  }),
  mounted() {
    this.resetValidation();
  },
  methods: {
    ...mapActions({
        toggleDialog:'toggleDialog',
        setNewColor:'habits/setNewColor',
        myNewHabit:'habits/addHabit',
    }),
    addNewHabit() {
      if (this.newHabit !== "") {

        this.toggleDialog()
        this.setNewColor();

        if (this.reps > 0) {
          const newHabit = {
            title: this.newHabitTitle,
            reps: this.reps,
            initial: this.reps,
            complete: 0,
            random: this.getColorRandom,
            finished: false,
          };
          this.myNewHabit(newHabit);
        }

        this.newHabitTitle = "";
        this.reps = "";
      }
    },
    validate() {
      this.$refs.form.validate();
      this.addNewHabit();
    },
    reset() {
      this.$refs.form.reset();
      this.toggleDialog()
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed:{
    ...mapGetters({
      getColorRandom:'habits/getColor',
    })
  }
};
</script>
<style scoped>
.v-text-field input{
  font-family: "IBM Plex Sans", sans-serif !important;
}
</style>
