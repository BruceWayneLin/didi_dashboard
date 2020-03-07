import axios from 'axios'

const state = {
    userTableItems:[],
    me: {}
}

const getters = {

}

const actions = {
    updateme({ commit }, payload) {
        commit('updateme', payload)
    },
    updateUserItems({ commit }, payload) {
        commit('updateUserItems', payload)
    },
}

const mutations = {
    updateme(state, payload) { 
        state['me'] = payload
    },
    updateUserItems(state, payload) { 
        state['userTableItems'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
