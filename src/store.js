import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem("user_token")
      ? localStorage.getItem("user_token")
      : ""
  },
  getters: {},
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem("user_token", user.Authorization);
    }
  },
  actions: {}
});
