<template>
  <div class="grid-habits">
    <v-card
      height="110"
      class="habit"
      dark
      v-for="(habit, index) in habits"
      :key="index"
      :style="{
        borderLeft: `${
          habit.finished ? 'none' : '5px solid #F5F5F5 !important'
        }`,
        background: `${habit.finished ? '#00897B' : habit.random}`,
      }"

    >
      <HabitListItem
        :habit="habit"
      />
    </v-card>
  </div>
</template>

<script>
import HabitListItem from "./HabitListItem";
export default {
  components: { HabitListItem },
  props: {
    habits: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.grid-habits {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  padding-top: 2rem;
}
.habit {
  margin: 0.5rem 0.3rem;
}
</style>
