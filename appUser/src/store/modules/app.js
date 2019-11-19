const app = {
  namespaced: true,
  state: {
    loginStatus:false,
    token:''
  },
  mutations: {
    SET_STATUS: (state, loginState) => {
      state.loginStatus = loginState
    },
  },
  actions: {
    setStatus({commit},loginState){
      commit('SET_STATUS', loginState)
    },

  }

}

export default app
