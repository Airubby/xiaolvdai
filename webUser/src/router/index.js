import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
    {
        path: '/',
        name: 'home',
        meta: { title: 'index'},
        component: () => import('@/views/index.vue'),
        redirect:'/page'
    },
    {
        path:'/page',
        name:'page',
        meata:{title:'page'},
        component:()=>import('@/views/public.vue'),
        redirect:'/page/index',
        children:[
            {
                path: '/page/index',
                name: 'index',
                meta: { title: '小驴贷-首页'},
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: '/page/detail',
                name: 'detail',
                meta: { title: '小驴贷-详情'},
                component: () => import('@/views/home/detail.vue'),
            },
            {
                path: '/page/login',
                name: 'login',
                meta: { title: '小驴贷-登录'},
                component: () => import('@/views/login/index.vue'),
            },
            {
                path: '/page/register',
                name: 'register',
                meta: { title: '小驴贷-注册'},
                component: () => import('@/views/register/index.vue'),
            },
            {
                path: '/page/info',
                name: 'info',
                meta: { title: '小驴贷-了解贷款行业'},
                component: () => import('@/views/info/index.vue'),
            },
            {
                path: '/page/infoDetail',
                name: 'infoDetail',
                meta: { title: '小驴贷-了解贷款行业'},
                component: () => import('@/views/info/detail.vue'),
            },
        ]
    },
    {
        path: '/myCenter',
        name: 'myCenter',
        meta: { title: '小驴贷-个人中心'},
        component: () => import('@/views/myCenter/index.vue'),
        redirect:'/myCenter/apply',
        children:[
            {
                path: '/myCenter/apply',
                name: 'apply',
                meta: { title: '小驴贷-个人中心-我的申请'},
                component: () => import('@/views/myCenter/apply/index.vue'),
            },
            {
                path: '/myCenter/realname',
                name: 'realname',
                meta: { title: '小驴贷-个人中心-实名认证'},
                component: () => import('@/views/myCenter/realname/index.vue'),
            },
            {
                path: '/myCenter/psword',
                name: 'psword',
                meta: { title: '小驴贷-个人中心-修改密码'},
                component: () => import('@/views/myCenter/psword/index.vue'),
            },
            {
                path: '/myCenter/integral',
                name: 'integral',
                meta: { title: '小驴贷-个人中心-赚取积分'},
                component: () => import('@/views/myCenter/integral/index.vue'),
            },
            {
                path: '/myCenter/conversion',
                name: 'conversion',
                meta: { title: '小驴贷-个人中心-积分兑换'},
                component: () => import('@/views/myCenter/conversion/index.vue'),
            }
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