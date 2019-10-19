import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
    {
        path: '/',
        name: 'home',
        meta: { title: 'index'},
        component: () => import('@/views/index.vue'),
        redirect:'/index',
        children:[
            {
                path: '/index',
                name: 'index',
                meta: { title: '小驴贷-首页'},
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                meta: { title: '小驴贷-详情'},
                component: () => import('@/views/home/detail.vue'),
            },
            {
                path: '/login',
                name: 'login',
                meta: { title: '小驴贷-登录'},
                component: () => import('@/views/login/index.vue'),
            },
            {
                path: '/register',
                name: 'register',
                meta: { title: '小驴贷-注册'},
                component: () => import('@/views/register/index.vue'),
            },
            {
                path: '/myCenter',
                name: 'myCenter',
                meta: { title: '小驴贷-个人中心'},
                component: () => import('@/views/myCenter/index.vue'),
            },
        ]
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