import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Stroe({
  state: {
    can: {},
    result: {}
  },
  mutations: {
    addCan (can, payload) {
      can = payload;
    },
    addResult (result, payload) {
      result = payload;
    }
  }
});
