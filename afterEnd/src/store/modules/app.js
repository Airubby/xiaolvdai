import {router,resetRouter,asyncRouter } from '@/router/index'
const app = {
  state: {
    AjaxUrl:'',
    token:sessionStorage.token||'',
    map:true,
    LocalCity:'正在定位...',
    navList:[],
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
    },
    setAuthInfo(state,limits){
      resetRouter(); //重置初始路由
      let navList=[];
      for(let i=0;i<asyncRouter.length;i++){
        for(let j=0;j<limits.length;j++){
          if(asyncRouter[i].name==limits[j]){
            navList.push(asyncRouter[i]);
          }
        }
      }
      state.navList=navList;
      let newRouter={
          path: '/myCenter',
          name: 'myCenter',
          meta: { title: '小驴贷-个人中心'},
          component: () => import('@/views/myCenter/index.vue'),
          redirect:navList[0].path,
          children:navList
      };
      router.addRoutes([newRouter]);
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
    setCity({ commit }, city) {
      commit('setCity', city)
    },
    //设置获取的权限信息
    setAuthInfo({commit},limits){
      commit('setAuthInfo',limits)
    },
  }

}

export default app
