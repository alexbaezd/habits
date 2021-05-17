import { quotes as data } from "@/api/data";

export const state = () => ({
  quotes: [],
  currentQuote: {},
  isShowDialog: false,
  isShowQuote: true
});

export const mutations = {
  loadQuotes(state) {
    state.quotes = data;
  },
  requestRandomQuote(state) {
    state.currentQuote =
      state.quotes[Math.floor(Math.random() * (state.quotes.length - 1))];
  },
  showDialog(state) {
    state.isShowDialog = !state.isShowDialog;
  },
  showQuote(state) {
    state.isShowQuote = !state.isShowQuote;
  }
};

export const actions = {
  requestQuote(context) {
    context.commit("requestRandomQuote");
  },
  loadQuotes({ commit }) {
    setTimeout(() => {
      commit("loadQuotes");
    }, 1000);
  },
  toggleDialog({ commit }) {
    commit("showDialog");
  },
  toggleQuote({ commit }) {
    commit("showQuote");
  }
};

export const getters = {
  allQuotes: state => {
    return state.quotes;
  },
  randomQuote: state => {
    return state.currentQuote;
  },
  isShowDialog: state => {
    return state.isShowDialog;
  },
  isShowQuote: state => {
    return state.isShowQuote;
  }
};
