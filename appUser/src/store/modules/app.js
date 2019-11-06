const app = {
    namespaced: true,
    state: {
        token:sessionStorage.token||'',
    },
    mutations: {
        setToken(state,token){
        state.token=token;
        },
    },
    actions: {
        setToken({ commit }, token) {
        commit('setToken', token)
        },
    }
}

export default app
