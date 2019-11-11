import {router,addRouter,resetRouter,asyncRouter } from '@/router/index'
const app = {
  state: {
    AjaxUrl:'',
    token:sessionStorage.token||'token888',
    map:true,
    LocalCity:'正在定位...',
  },
  mutations: {
    setAjaxUrl(state,ajaxUrl){
        state.AjaxUrl=ajaxUrl;
        Cookies.set('AjaxUrl', ajaxUrl)
    },
    setToken(state,token){
      
      state.token=token;
    },
    setMap(state,flag){
        state.map=flag;
    },
    setCity(state,city){
      state.LocalCity=city;
    }
  },
  actions: {
    setAjaxUrl({commit},ajaxUrl){
        commit('setAjaxUrl',ajaxUrl)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setMap({ commit }, flag) {
      commit('setMap', flag)
    },
    setCity({ commit }, city) {
      commit('setCity', city)
    },
  }

}

export default app
