const state = {
    addUsers: false,
    editUser: false,
    openPropertyModal: false,
    userDetailInfo: {},
    releaseTool: false,
    capiModalTog: false,
    markSaleTool: {
        active: false,
        title: ''
    },
    depositModal: {
        active: false,
        title: ''
    },
    marketValueSet: false,
    openRecomModal: {
        item: ''
    }
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
    markSaleTool({ commit }, payload) {
        commit('markSaleTool', payload)
    },
    depositModal({ commit }, payload) {
        commit('depositModal', payload)
    },
    marketValueSet({ commit }, payload) {
        commit('marketValueSet', payload)
    },
    openRecomModal({ commit }, payload) {
        commit('openRecomModal', payload)
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
    },
    markSaleTool(state, payload) { 
        state['markSaleTool']['active'] = payload.active
        state['markSaleTool']['title'] = payload.title
    },
    depositModal(state, payload) { 
        state['depositModal']['active'] = payload.active
        state['depositModal']['title'] = payload.title
    },
    openRecomModal(state, payload) { 
        state['openRecomModal']['active'] = payload.active
        state['openRecomModal']['item'] = payload.item
    },
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
