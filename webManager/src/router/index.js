import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
    {
        path: '/',
        name: 'home',
        meta: { title: 'index'},
        component: () => import('@/views/index.vue'),
        redirect:'/login',
        children:[
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
                path: '/approve',
                name: 'approve',
                meta: { title: '小驴贷-实名认证'},
                component: () => import('@/views/register/approve.vue'),
            },
            {
                path: '/myCenter',
                name: 'myCenter',
                meta: { title: '小驴贷-个人中心'},
                component: () => import('@/views/myCenter.vue'),
                redirect:'/myCenter/index',
                children:[
                    {
                        path: '/myCenter/index',
                        name: 'index',
                        meta: { title: '小驴贷-个人中心首页'},
                        component: () => import('@/views/myCenter/index.vue'),
                    },
                    {
                        path: '/myCenter/preview',
                        name: 'preview',
                        meta: { title: '小驴贷-产品预览'},
                        component: () => import('@/views/myCenter/preview.vue'),
                    },
                    {
                        path: '/myCenter/recharge',
                        name: 'recharge',
                        meta: { title: '小驴贷-账户充值'},
                        component: () => import('@/views/myCenter/recharge.vue'),
                    },
                ],
            },
        ]
    },
    { path: '/404',name:'404',meta: { title: '404'}, component: () => import('@/views/errorPage/404') },
    { path: '/401',name:'401',meta: { title: '401'}, component: () => import('@/views/errorPage/401') },
];
export const asyncRouter=[
    {
        path: '/',
        name: 'home',
        meta: { title: 'index'},
        component: () => import('@/views/index.vue'),
        redirect:'/login',
        children:[
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
        ]
    },
    { path: '/404',name:'404',meta: { title: '404'}, component: () => import('@/views/errorPage/404') },
    { path: '/401',name:'401',meta: { title: '401'}, component: () => import('@/views/errorPage/401') },
]
const createRouter = () => new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: syncRouter
 })
export function addRouter (routes) {
    const newRouter = new Router({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes: []
    });
    router.matcher = newRouter.matcher
    router.addRoutes(routes)
 }
 export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
 }
 export const router = createRouter()