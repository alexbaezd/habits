<template>
  <div v-shortkey.once="['esc']" @shortkey="toggleDialog()">
    <FormAddHabit v-model="dialog" v-if="dialog === true" />
    <section
      class="grid-layout"
      v-shortkey.once="['ctrl', 'h']"
      @shortkey="toggleDialog()"
    >
      <h1 class="title-habits">Habits</h1>
      <HabitList :habits="habits" />
      <ButtonAddHabit />
      <Quote :currentQuote="currentQuote" :isShow="show" />
      <Welcome />
    </section>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";

import FormAddHabit from "@/components/FormAddHabit";
import HabitList from "@/components/HabitList";
import ButtonAddHabit from "@/components/ButtonAddHabit";
import Welcome from "@/components/Welcome";
import Quote from "@/components/Quote";

export default {
  name: "App",
  components: {
    HabitList,
    FormAddHabit,
    ButtonAddHabit,
    Quote,
    Welcome
  },
  methods: {
    ...mapActions({
      getQuote: "requestQuote",
      loadQuotes: "loadQuotes",
      loadColors: "habits/colors",
      toggleDialog: "toggleDialog",
      myNewHabit: "habits/addHabit"
    }),
    loadApp() {
      this.loadQuotes();
      this.loadColors();

      setTimeout(() => {
        this.getQuote();
      }, 1000);

      this.myNewHabit({
        id: uuidv4(),
        title: "Learn Vue",
        reps: 7,
        initial: 7,
        complete: 0,
        color: "#41B883",
        finished: false
      });
    }
  },
  mounted() {
    this.loadApp();
  },
  computed: {
    ...mapGetters({
      currentQuote: "randomQuote",
      habits: "habits/allHabits",
      dialog: "isShowDialog",
      show: "isShowQuote"
    })
  }
};
</script>

<style>
#app {
  font-family: "IBM Plex Sans", sans-serif !important;
  background: url("../assets/bg.svg") center no-repeat;
  background-size: cover;
  color: #243136;
}
.title-habits {
  font-size: 10vmin;
  margin-bottom: 0.7rem;
}
.grid-layout {
  display: grid;
  grid-template-rows: 10% 65% 25%;
  height: 100vh;
}
</style>
