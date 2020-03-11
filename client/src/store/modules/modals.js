const state = {
    addUsers: false,
    editUser: false,
    openPropertyModal: false,
    userDetailInfo: {},
    releaseTool: false,
    capiModalTog: false
}

const getters = {

}

const actions = {
    openPropertyModal({ commit }, payload) {
        commit('openPropertyModal', payload)
    },
    detailUser({ commit }, payload) {
        commit('detailUser', payload)
    },
    addUsers({ commit }, payload) {
        commit('addUsers', payload)
    },
    editUser({ commit }, payload) {
        commit('editUser', payload)
    },
    releaseTool({ commit }, payload) {
        commit('releaseTool', payload)
    },
    capiModalTog({ commit }, payload) {
        commit('capiModalTog', payload)
    },

}

const mutations = {
    openPropertyModal(state, payload) {
        state['openPropertyModal'] = payload
    },
    detailUser(state, payload) { 
        state['detailUser'] = payload.active
        state['userDetailInfo'] = payload
    },
    addUsers(state, payload) { 
        state['addUsers'] = payload
    },
    editUser(state, payload) { 
        state['editUser'] = payload
    },
    releaseTool(state, payload) { 
        state['releaseTool'] = payload
    },
    capiModalTog(state, payload) { 
        state['capiModalTog'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
