<template>
  <v-dialog v-if="dialog" v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span>Add a new habit</span>
      </v-card-title>

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
    </v-card>
  </v-dialog>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    colorValue: "",
    valid: true,
    newHabitTitle: "",
    newHabitRules: [
      value => !!value || "Name is required",
      value =>
        (value && value.length <= 20) || "Name must be less than 10 characters"
    ],
    reps: "",
    repsRules: [
      value => !!value || "Reps is required",
      value => value > 2 || "Reps must be less than 2"
    ]
  }),
  mounted() {
    this.resetValidation();
  },
  methods: {
    ...mapActions({
      toggleDialog: "toggleDialog",
      setNewColor: "habits/setNewColor",
      myNewHabit: "habits/addHabit"
    }),
    addNewHabit() {
      if (this.newHabit !== "") {
        this.setNewColor();

        if (this.reps > 0) {
          const newHabit = {
            id: uuidv4(),
            title: this.newHabitTitle,
            reps: this.reps,
            initial: this.reps,
            complete: 0,
            color: this.getColorRandom,
            finished: false
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
      setTimeout(() => {
        this.toggleDialog();
      }, 10);
    },
    reset() {
      this.$refs.form.reset();
      this.toggleDialog();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  computed: {
    ...mapGetters({
      getColorRandom: "habits/getColor",
      dialog: "isShowDialog"
    })
  }
};
</script>
<style scoped>
.v-text-field input {
  font-family: "IBM Plex Sans", sans-serif !important;
}
</style>
