<template>
  <div v-shortkey.once="['esc']" @shortkey="toggleDialog()">

        <v-dialog v-model="dialog" v-if="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="">Add a new habit</span>
            </v-card-title>
            <FormAddHabit />
          </v-card>
        </v-dialog>

      <section class="grid-layout">
        <h1 class="title-habits" v-shortkey.once="['ctrl', 'h']" @shortkey="toggleDialog()">
          Habit Tracker
        </h1>

        <section>
          <HabitList
            :habits="habits"
          />
          <!-- <h2 class="mt-12">Malos Habitos</h2> -->
        </section>

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

        <Quote :currentQuote="currentQuote" :isShow="show" />


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

        <FeatureDiscovery v-model="discover" color="green lighten-3" right top size="400" class=" black--text">
          <h2 slot="title">Hey! Welcome to Habits</h2>
          <p slot="text" class="mb-0">
            La forma más efectiva de cambiar tus hábitos es enfocarte no en lo que deseas lograr, sino en quién deseas convertirte.
          </p>
          <div slot="actions">
            <v-btn class="mr-4 white--text"  color="cyan darken-4" @click="loadMessage" >Close</v-btn>
          </div>
        </FeatureDiscovery  >

      </section>
      </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

import FormAddHabit from "@/components/FormAddHabit";
import HabitList from "@/components/HabitList";
import FeatureDiscovery from "@/components/FeatureDiscovery"
import Quote from "@/components/Quote";

export default {
  name: "App",
  components: { HabitList, FormAddHabit,Quote },
  data: () => ({
    snackbar: false,
    text: '⭐️ Tip:ctrl + h  create a new habit.',
    timeout: 10000,
    discover: false
  }),
  methods: {
    ...mapActions({
        getQuote:'requestQuote',
        loadQuotes:'loadQuotes',
        myColors:'habits/colors',
        toggleDialog:'toggleDialog',
        toggleQuote:'toggleQuote',
        myNewHabit:'habits/addHabit'
    }),
    loadMessage(){
      this.discover = false
      setTimeout(() => {
        this.snackbar = true
      }, 1000);
    }
  },
  mounted() {
    this.discover = !this.discover
    this.loadQuotes()
    this.myColors()
    setTimeout(() => {
      this.getQuote()
    }, 1000);
    this.myNewHabit({
        title: "Learn Vue",
        reps: 7,
        initial: 7,
        complete: 0,
        random: "#41B883",
        finished: false,
      })
  },
  computed:{
    ...mapGetters({
      currentQuote: 'randomQuote',
      habits:'habits/allHabits',
      dialog:'isShowDialog',
      show:'isShowQuote'
    })
  }
};
</script>

<style>
#app{
  font-family: "IBM Plex Sans", sans-serif !important;
  background: url("../assets/bg.svg") center no-repeat;
  background-size: cover;
  color: #243136;
}
.title-habits {
  font-size: 4rem;
}
.button-add-habit {
  margin-bottom: 4rem;
  margin-right: 1rem;
}
.grid-layout{
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 80vh;
}
</style>
