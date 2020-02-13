import axios from 'axios'

const state = {
    login: true,
    toggleSide: false
}

const getters = {

}

const actions = {
    changeLogin({ commit }, payload) {
        commit('changeLogin', payload)
    },
    toggleNav: ({commit, state}, payload)=> {
        commit('toggleSideNav', payload)
    }
}

const mutations = {
    changeLogin(state, payload) { 
        state['login'] = payload
    },
    toggleSideNav: (state, payload)=> {
        state['toggleSide'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
