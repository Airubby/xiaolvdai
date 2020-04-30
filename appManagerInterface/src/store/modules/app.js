const app = {
  state: {
    loginStatus:false,
    token:'',
    location:"定位中...",
    previewInfo:{},
    ajaxUrl:"",
  },
  mutations: {
    SET_STATUS: (state, loginState) => {
      state.loginStatus = loginState
    },
    SET_LOCATION: (state, location) => {
      state.location = location
    },
    SET_PREVIEWINFO: (state,info) => {
      state.previewInfo=info;
    },
    SET_AJAXURL:(state, url) => {
      state.ajaxUrl = url
    },
  },
  actions: {
    setStatus({commit},loginState){
      commit('SET_STATUS', loginState)
    },
    setLocation({commit},location){
      commit('SET_LOCATION', location)
    },
    setPreviewInfo({commit},info){
      commit('SET_PREVIEWINFO',info)
    },
    setAjaxUrl({commit},url){
      commit('SET_AJAXURL', url)
    }

  }

}

export default app
