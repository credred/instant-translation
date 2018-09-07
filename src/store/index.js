import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    source: '',
    can: {
      test: '',
      data: [
        {
          k: '',
          v: ''
        }
      ]
    },
    result: {}
  },
  mutations: {
    addSource (state, payload) {
      state.source = payload;
    },
    addCan (state, payload) {
      state.can = payload;
    },
    addResult (state, payload) {
      state.result = payload;
    }
  }
});
