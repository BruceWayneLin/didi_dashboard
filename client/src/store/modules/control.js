import axios from 'axios'

const state = {
    login: true,
    toggleSide: false,
    busyLoading: false,
}

const getters = {

}

const actions = {
    changeLogin({ commit }, payload) {
        commit('changeLogin', payload)
    },
    toggleNav: ({commit, state}, payload)=> {
        commit('toggleSideNav', payload)
    },
    busyLoading: ({commit, state}, payload)=> {
        commit('busyLoading', payload)
    },
}

const mutations = {
    changeLogin(state, payload) { 
        state['login'] = payload
    },
    toggleSideNav: (state, payload)=> {
        state['toggleSide'] = payload
    },
    busyLoading: (state, payload)=> {
        state['busyLoading'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
