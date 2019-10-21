import {router,addRouter,resetRouter,asyncRouter } from '@/router/index'
const app = {
  state: {
    AjaxUrl:'',
    token:sessionStorage.token||'',
    map:true,
    LocalCity:'正在定位...',
  },
  mutations: {
    setAjaxUrl(state,ajaxUrl){
        state.AjaxUrl=ajaxUrl;
        Cookies.set('AjaxUrl', ajaxUrl)
    },
    setToken(state,token){
      resetRouter();
      if(token&&token!=""){
        let newRouter=asyncRouter;
        let flag=false;
        for(let i=0;i<newRouter[0].children.length;i++){
          if(newRouter[0].children[i].name=="myCenter"){
            flag=true;
          }
        }
        if(!flag){
          let routes={
              path: '/myCenter',
              name: 'myCenter',
              meta: { title: '小驴贷-个人中心'},
              component: () => import('@/views/myCenter/index.vue'),
          };
          newRouter[0].children.push(routes)
          addRouter(newRouter);
        }
      }
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
