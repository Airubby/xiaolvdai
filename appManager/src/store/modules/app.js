const app = {
  namespaced: true,
  state: {
    loginStatus:false,
    token:'',
    location:"定位中..."
  },
  mutations: {
    SET_STATUS: (state, loginState) => {
      state.loginStatus = loginState
    },
    SET_LOCATION: (state, location) => {
      state.location = location
    },
  },
  actions: {
    setStatus({commit},loginState){
      commit('SET_STATUS', loginState)
    },
    setLocation({commit},location){
      commit('SET_LOCATION', location)
    },

  }

}

export default app
