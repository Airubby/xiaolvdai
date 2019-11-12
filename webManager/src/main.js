import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import store from './store/index'

import axios from 'axios'
import request from './utils/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSearchTablePagination from 'el-table-pagination'
import './utils/filters' // 自定义过滤器
import tool from './utils/tool'  //工具函数
import 'promise-polyfill'  //兼容低版本浏览器  
import 'babel-polyfill'


import './utils/directive'  //自定义指令
import BaiduMap from 'vue-baidu-map'
// import './utils/mock.js'  //测试接口

// import 'vue-transition.css'

import './assets/css/index.less'

// // 将API方法绑定到全局
Vue.prototype.$r=request


//绑定工具函数到全局
Vue.prototype.$tool = tool
Vue.prototype.$store = store
Vue.use(ElementUI,{
  size: 'small' // set element-ui default size
})
Vue.prototype.publicPath=process.env.BASE_URL

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'fGPfT9cGkLHcbE4DpCGXuZzaDsnwfdLe'
})

Vue.use(ElSearchTablePagination)

Vue.config.productionTip = false
// function getServerConfig() {
//   return new Promise ((resolve, reject) => {
//     axios.get('./serverConfig.json').then((result) => {
//       let config = result.data;
//       let ajaxUrl = process.env.NODE_ENV == 'production' ? config.production:config.develop;
//       Vue.prototype.$ajaxUrl=ajaxUrl;
//       store.dispatch('setAjaxUrl',ajaxUrl);

//       require('@/permission')

//       resolve();
//     }).catch((error) => {
//       console.log(error)
//       reject()
//     })
//   })
// }
import './permission'
async function init() {
  // await getServerConfig();
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}
init();
