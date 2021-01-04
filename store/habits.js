import { pallete } from "@/helper/colors";

export const state = () =>({
  habits:[],
  colors:[],
  colorHabit:''
})


export const mutations = {
  configColors(state){
    state.colors = pallete
  },
  addHabit(state,newHabit){
    state.habits.push(newHabit)
  },
  deleteHabit(state,habit){ // FIXME: habit change per ID
    state.habits = state.habits.filter(myHabit => myHabit !== habit);
  },
  completeHabit(state, habit){ // FIXME: habit change per ID
    //TODO: search habit in array Habits[] and change data and new State
    let habitChange = state.habits.filter(myHabit => myHabit.title === habit.title)[0];
    //console.log("habitChange",habitChange);
    if(habitChange.reps > 0){
      habitChange.reps -= 1;
      habitChange.complete += 1;
    //console.log("changes :::");
    //console.log(habitChange);

      //TODO: show = false ?

    }

    if(habitChange.reps === 0){
        habitChange.finished = true;
    }
    //state.habits =  [...state.habits,habitChange]
  },
  colorRandom(state){
    state.colorHabit =
      state.colors[Math.floor(Math.random() * state.colors.length)];
  }
}


export const actions = {

    colors({commit}) {
      commit("configColors");
    },
    addHabit({commit}, payload) {
      commit("addHabit", payload);
    },
    deleteHabit({commit}, payload) {
      commit("deleteHabit", payload);
    },
    completeHabit({commit,dispatch},payload){
      commit("completeHabit", payload);
      //TODO: call action Global Store
      dispatch("requestQuote", null, { root: true });
    },
    setNewColor({commit}){
      commit("colorRandom");
    }
}


export const getters = {
  allHabits: state => { return state.habits},
  countHabits: state => { return state.habits.length},
  getColor: state => { return state.colorHabit}
}
