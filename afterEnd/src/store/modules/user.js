import {router,addRouter,resetRouter } from '@/router/index'

const user = {
  state: {
    routers: "",
    addRouters: [],
  },
  mutations: {
    setAuthInfo(state){
      resetRouter(); //重置初始路由
        let newRouter={
            path: '/myCenter',
            name: 'myCenter',
            meta: { title: '小驴贷-个人中心'},
            component: () => import('@/views/myCenter/index.vue'),
        };
        router.options.routers[0].children.push(newRouter);
    },
    
  },
  actions: {
    //设置获取的权限信息
    setAuthInfo({commit}){
      commit('setAuthInfo')
    },

  }

}

export default user
