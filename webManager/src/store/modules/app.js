import Cookies from 'js-cookie'

const app = {
  state: {
    AjaxUrl:Cookies.get('AjaxUrl')||'',
    token:'token888',
  },
  mutations: {
    setAjaxUrl(state,ajaxUrl){
        state.AjaxUrl=ajaxUrl;
        Cookies.set('AjaxUrl', ajaxUrl)
    },
    setToken(state,token){
      state.token=token;
      Cookies.set('token', token)
    },
  },
  actions: {
    setAjaxUrl({commit},ajaxUrl){
        commit('setAjaxUrl',ajaxUrl)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
    },
  }

}

export default app
