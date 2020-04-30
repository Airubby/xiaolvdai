import Vue from 'vue'
import App from './App'
import store from './store'
// import request from './service/request'

import aiInput from './components/ai-ui/ai-input'
Vue.component('ai-input',aiInput)
import aiTextarea from './components/ai-ui/ai-textarea'
Vue.component('ai-textarea',aiTextarea)

Vue.config.productionTip = false

// Vue.prototype.$r = request

import util from './common/util'  //工具函数
//绑定工具函数到全局
Vue.prototype.$util = util
// import echarts from './common/echarts.min.js'  //工具函数
// Vue.prototype.$echarts =echarts

Vue.prototype.$store = store

function getServerConfig() {
    return new Promise ((resolve, reject) => {
        uni.request({
            url:"/serverConfig.json",
            success: (res) => {
                console.log(res.data);
                let config = res.data;
                Vue.prototype.$ajaxUrl=config.ajaxUrl;
                Vue.prototype.$fileUrl=config.fileUrl;
                store.dispatch("setAjaxUrl",config.ajaxUrl)
                resolve();
            }
        })

    })
  }


async function init() {
    App.mpType = 'app'
    await getServerConfig();
    new Vue({
      store,
      render: h => h(App),
    }).$mount()
  }
  init();
