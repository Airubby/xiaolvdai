import {router,addRouter,resetRouter,syncRouter } from '@/router/index'
const app = {
  state: {
    AjaxUrl:'',
    token:sessionStorage.token||'',
    map:true,
  },
  mutations: {
    setAjaxUrl(state,ajaxUrl){
        state.AjaxUrl=ajaxUrl;
        Cookies.set('AjaxUrl', ajaxUrl)
    },
    setToken(state,token){
      if(token&&token!=""){
        let newRouter=syncRouter;
        let router={
            path: '/myCenter',
            name: 'myCenter',
            meta: { title: '小驴贷-个人中心'},
            component: () => import('@/views/myCenter/index.vue'),
        };
        let flag=false;
        for(let i=0;i<newRouter[0].children.length;i++){
          if(newRouter[0].children[i].name=="myCenter"){
            flag=true;
          }
        }
        if(!flag){
          newRouter[0].children.push(router)
          addRouter(newRouter);
        }
        
      }
      state.token=token;
    },
    setMap(state,flag){
        state.map=flag;
    },
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
  }

}

export default app
