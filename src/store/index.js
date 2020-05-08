import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarColor: '#02a1c0',
    sideBarHoverColor: '#0198ae'
  },
  getters: {
    getSideBarColor: function(state) {
      return state.sideBarColor;
    },
    getSideBarHoverColor: function(state){
      return state.sideBarHoverColor;
    }
  },
  mutations: {
    updateSideBarColor: function(state, color){
      state.sideBarColor = color;
    },
    updateSideBarHoverColor: function(state, color){
      state.sideBarHoverColor = color;
    }
  },
  actions: {},
  modules: {}
});
