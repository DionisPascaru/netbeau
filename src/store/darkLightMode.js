const state = () => ({
    mode: JSON.parse(localStorage.getItem('mode'))
})

const getters = {
    getMode(state) {
        return state.mode;
    }
}

const actions = {
    setMode({commit}, modeValue) {
        commit('CHANGE_MODE', modeValue);
    }
}

const mutations = {
    CHANGE_MODE(state, modeValue) {
        state.mode = modeValue;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}