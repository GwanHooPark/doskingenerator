import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testColor : '#332C7F',
    titleBarTextColor: '#000',
    titleBarColor: '#fff',
    sideBarColor: '#02a1c0',
    sideBarHoverColor: '#0198ae'
  },
  getters: {
    getType : function(state) {
      return type => {
        console.log(state[type]);
        return state[type];
      }
    },
    getTestColor: function(state) {
      return state.testColor;
    },
    getTitleBarTextColor: function(state) {
      return state.titleBarTextColor;
    },
    getTitleBarColor: function(state) {
      return state.titleBarColor;
    },
    getSideBarColor: function(state) {
      return state.sideBarColor;
    },
    getSideBarHoverColor: function(state){
      return state.sideBarHoverColor;
    }
  },
  mutations: {
    updateType: function(state, type , color) {
      state[type] = color;
    },
    updateTestColor: function(state,color){
      state.testColor = color;
    },
    updateTitleBarTextColor: function(state, color){
      state.titleBarTextColor = color;
    },
    updateTitleBarColor: function(state, color){
      state.titleBarColor = color;
    },
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
