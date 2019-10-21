import {router} from '@/router/index'
import store from '@/store/index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Loading } from 'element-ui'
import request from './utils/request'
import tool from './utils/tool'
import './utils/mock.js'  //测试接口 

routerGo();
function getInfo(){  //刷新页面重新获取权限
    request.post('/checkToken',{"token":tool.Encrypt(sessionStorage.token).split("_")[0]},res=>{
        if(res.token){
            store.dispatch('setToken',sessionStorage.token);
        }else{
            sessionStorage.removeItem('token');
            this.$store.dispatch('setToken',"");
        }
    })
}
async function routerGo(){
    if(sessionStorage.token){
        await getInfo();
    }
    router.beforeEach((to, from, next) => {
        let token=store.getters.token;
        NProgress.start()
        const whiteList = ['/login','/401','/404','/register','/approve'] // 不重定向白名单
        if (to.path!=="/"&&whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            if(JSON.stringify(to.meta)!="{}"){
                if(token){
                    next() 
                }else{
                    next('/401') 
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

