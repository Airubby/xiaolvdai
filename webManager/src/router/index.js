import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
    {
        path: '/',
        name: 'home',
        meta: { title: 'index'},
        component: () => import('@/views/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'login'},
      component: () => import('@/views/login.vue'),
    },
    { path: '/404',name:'404',meta: { title: '404'}, component: () => import('@/views/errorPage/404') },
    { path: '/401',name:'401',meta: { title: '401'}, component: () => import('@/views/errorPage/401') },
];

const createRouter = () => new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: syncRouter
 })
 
 export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
 }
 export const router = createRouter()