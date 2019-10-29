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
                path: '/myCenter',
                name: 'myCenter',
                meta: { title: '小驴贷-个人中心'},
                component: () => import('@/views/myCenter/index.vue'),
                redirect:'/myCenter/index',
                children:[
                    {
                        path: '/myCenter/index',
                        name: 'index',
                        meta: { title: '数据概况-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/dashboard/index.vue'),
                    },
                    {
                        path: '/myCenter/borrowingUser',
                        name: 'borrowingUser',
                        meta: { title: '借款用户-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/borrowingUser/index.vue'),
                    },
                    {
                        path: '/myCenter/ordRes',
                        name: 'ordRes',
                        meta: { title: '申请订单-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/ordRes/index.vue'),
                    },
                    {
                        path: '/myCenter/hannels',
                        name: 'hannels',
                        meta: { title: '推广渠道-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/hannels/index.vue'),
                    },
                    {
                        path: '/myCenter/facility',
                        name: 'facility',
                        meta: { title: '服务机构-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/facility/index.vue'),
                    },
                    {
                        path: '/myCenter/creditMgr',
                        name: 'creditMgr',
                        meta: { title: '信贷经理-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/creditMgr/index.vue'),
                    },
                    {
                        path: '/myCenter/qualification',
                        name: 'qualification',
                        meta: { title: '资质认证-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/qualification/index.vue'),
                    },
                    {
                        path: '/myCenter/productSet',
                        name: 'productSet',
                        meta: { title: '产品设置-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/productSet/index.vue'),
                    },
                    {
                        path: '/myCenter/loanProduct',
                        name: 'loanProduct',
                        meta: { title: '贷款产品-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/loanProduct/index.vue'),
                    },
                    {
                        path: '/myCenter/appliInvalid',
                        name: 'appliInvalid',
                        meta: { title: '申请无效-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/appliInvalid/index.vue'),
                    },
                    {
                        path: '/myCenter/orders',
                        name: 'orders',
                        meta: { title: '充值订单-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/orders/index.vue'),
                    },
                    {
                        path: '/myCenter/sdBIL',
                        name: 'sdBIL',
                        meta: { title: '发票管理-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/sdBIL/index.vue'),
                    },
                    {
                        path: '/myCenter/userComplain',
                        name: 'userComplain',
                        meta: { title: '用户投诉-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/userComplain/index.vue'),
                    },
                    {
                        path: '/myCenter/superSuPro',
                        name: 'superSuPro',
                        meta: { title: '权限管理-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/superSuPro/index.vue'),
                    },
                    {
                        path: '/myCenter/userSuPro',
                        name: 'userSuPro',
                        meta: { title: '人事管理-小驴贷-个人中心'},
                        component: () => import('@/views/myCenter/userSuPro/index.vue'),
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