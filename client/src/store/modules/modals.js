const state = {
    addUsers: false,
    editUser: false
}

const getters = {

}

const actions = {
    addUsers({ commit }, payload) {
        commit('addUsers', payload)
    },
    editUser({ commit }, payload) {
        commit('editUser', payload)
    }
}

const mutations = {
    addUsers(state, payload) { 
        state['addUsers'] = payload
    },
    editUser(state, payload) { 
        state['editUser'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
