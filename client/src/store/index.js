import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import control from './modules/control'
import info from './modules/info'
import modals from './modules/modals'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    api,
    control,
    info,
    modals
  }
})
