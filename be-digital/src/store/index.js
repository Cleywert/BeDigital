import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logado: false
  },
  mutations: {
    SET_LOGADO(state,payload){
      state.logado = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
