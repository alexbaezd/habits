import { pallete } from "@/helper/colors";

export const state = () => ({
  habits: [],
  colors: [],
  colorHabit: ""
});

export const mutations = {
  configColors(state) {
    state.colors = pallete;
  },
  addHabit(state, newHabit) {
    state.habits.push(newHabit);
  },
  deleteHabit(state, habit) {
    state.habits = state.habits.filter(myHabit => myHabit.id !== habit.id);
  },
  completeHabit(state, habit) {
    const idHabit = habit.id;
    const indexHabit = state.habits.findIndex(habit => habit.id === idHabit);

    const updateHabit = state.habits[indexHabit];

    if (updateHabit.reps > 0) {
      updateHabit.reps -= 1;
      updateHabit.complete += 1;
    }

    if (updateHabit.reps === 0) {
      updateHabit.finished = true;
    }

    state.habits[indexHabit] = updateHabit;
  },
  colorRandom(state) {
    state.colorHabit =
      state.colors[Math.floor(Math.random() * state.colors.length)];
  }
};

export const actions = {
  colors({ commit }) {
    commit("configColors");
  },
  addHabit({ commit }, payload) {
    commit("addHabit", payload);
  },
  deleteHabit({ commit }, payload) {
    commit("deleteHabit", payload);
  },
  completeHabit({ commit, dispatch }, payload) {
    commit("completeHabit", payload);

    dispatch("requestQuote", null, { root: true });
  },
  setNewColor({ commit }) {
    commit("colorRandom");
  }
};

export const getters = {
  allHabits: state => {
    return state.habits;
  },
  countHabits: state => {
    return state.habits.length;
  },
  getColor: state => {
    return state.colorHabit;
  }
};
