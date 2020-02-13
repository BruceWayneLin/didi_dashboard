import axios from 'axios'

const state = {
    me: {}
}

const getters = {

}

const actions = {
    updateme({ commit }, payload) {
        commit('updateme', payload)
    },
}

const mutations = {
    updateme(state, payload) { 
        state['me'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
