import {router} from '@/router/index'
import store from '@/store/index'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import { Loading } from 'element-ui'
import './utils/mock.js'  //测试接口 

routerGo();
//定义得写上服务，不然刷新，close()找不到
let loadingInstance=null;

async function routerGo(){
    loadingInstance=Loading.service({text:"拼命加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"})
    // if(sessionStorage.userid){
    //     await getInfo();
    // }
    router.beforeEach((to, from, next) => {
        loadingInstance = Loading.service({text:"拼命加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"});
        // NProgress.start()
        const whiteList = ['/login','/401','/404'] // 不重定向白名单
        let token=store.getters.token;
        console.log(token)
        if(token){
            next()
        }else{
            if (to.path!=="/"&&whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next('/login')
            }
        }
    
    })
    
    router.afterEach((to,from) => {
        let title=to.meta.title?`${to.meta.title}`:'小驴贷0.1';
        window.document.title = title;
        loadingInstance&&loadingInstance.close();
        // NProgress.done() // 结束Progress
    })
}

