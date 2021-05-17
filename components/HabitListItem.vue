<template>
  <div>
    <v-card-title>
      <v-icon color="white" class="text-subtitle-1 pr-1 font-weight-bold">
        {{ habit.finished ? "mdi-check-circle" : "" }}
      </v-icon>
      <p class="font-weight-bold mb-0">{{ habit.title }}</p>
      :
      <span class="ml-2" v-show="!habit.finished">
        {{ habit.complete }}/{{ habit.initial }}</span
      >
      <span class="ml-2" v-show="habit.finished">Complete!</span>
    </v-card-title>

    <HabitListItemProgress
      :complete="habit.complete"
      :initial="habit.initial"
    />
    <HabitListItemActions :habit="habit" />
  </div>
</template>

<script>
import HabitListItemActions from "./HabitListItemActions";
import HabitListItemProgress from "./HabitListItemProgress";

export default {
  components: {
    HabitListItemActions,
    HabitListItemProgress
  },
  props: {
    habit: {
      type: Object,
      required: true
    }
  }
};
</script>
