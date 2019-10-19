import {router} from '@/router/index'
import store from '@/store/index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Loading } from 'element-ui'
import './utils/mock.js'  //测试接口 

routerGo();

async function routerGo(){
    // if(sessionStorage.userid){
    //     await getInfo();
    // }
    router.beforeEach((to, from, next) => {
        NProgress.start()
        const whiteList = ['/login','/401','/404','/index','/detail','/register'] // 不重定向白名单
        let token=store.getters.token;
        if (to.path!=="/"&&whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            if(JSON.stringify(to.meta)!="{}"){
                if(sessionStorage.token){
                    next() 
                }else{
                    next('/index') 
                }
            }else{
                next('/404') 
            }
        }
    })
    
    router.afterEach((to,from) => {
        let title=to.meta.title?`${to.meta.title}`:'小驴贷0.1';
        window.document.title = title;
        NProgress.done() // 结束Progress
    })
}

