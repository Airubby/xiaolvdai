import store from '@/store/index'
import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
	timeout:1000  //设置请求延时时间
})
const getdata = function(){
    let datalist = []
	for (let i = 0; i < 20; i += 1) {
        const o = {  //mockjs模拟随机生成数据，生成20条
            recipeId: Random.guid(),
            billId: Random.string(10),
            value: Random.string('number', 8, 10),
            Date:Random.date('yyyy-MM-dd'),
            time:Random.time('A HH:mm:ss'),
            adress:Random.county(),
            name: Random.cword(4, 16), // 随机生成任意名称
            personName: Random.cname(),
            content: Random.csentence(10, 32),
            "matchID":"match1"
        }
        datalist.push(o)
    }
	return{
        err_code:0,
        err_msg:"成功",
        data:datalist
    }
}
//后台给出导航菜单时，自己可以任意更改导航子栏目所在栏目下；但name,component,是固定的不可变
//limits 存vuex中  为数组： limits:["add","delete","detail"]
const getinfo = function(){
	return{
        err_code:0,
        err_msg:"成功",
        data:[
            {
                path:'/loncom/index',
                name:'index',
                meta: { show:"true", type:'nav',limits:"add,delete,detail",icon:'icon-ic_zhuye'},
                component: 'home/index.vue',
            },
            {
                path: '/loncom/control',
                name:'control',
                meta: { type:'nav',show:"true",limits:"",icon:'icon-ic_jiankong'},
                component: 'control/index.vue',
                children:[
                    {
                        path: '/loncom/control/devState',
                        name:'controlDevState',
                        meta: { show:"true",type:'nav',limits: ""},
                        component: 'control/devState/index.vue'
                    },
                    {
                        path: '/loncom/control/devState/detail',
                        name:'controlDevStateDetail',
                        meta: { show:"true",type:'fun',limits: ""},
                        component: 'control/devState/detail.vue'
                    },
                    {
                        path: '/loncom/control/devState/add',
                        name:'controlDevStateAdd',
                        meta: { show:"true",type:'fun',limits: ""},
                        component: 'control/devState/add.vue'
                    },
                    {
                        path: '/loncom/control/alarmRecord',
                        name:'controlAlarmRecord',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'control/alarmRecord/index.vue'
                    },
                    {
                        path: '/loncom/control/config',
                        name:'controlConfig',
                        meta: { show:"true",type:'nav',limits: ""},
                        component: 'control/config/index.vue'
                    },
                ]
            },
            {
                path: '/loncom/access',
                name:'access',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_menjin'},
                component: 'access/index.vue',
                children:[
                    {
                        path: '/loncom/access/status',
                        name:'accessStatus',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'access/status/index.vue'
                    },
                    {
                        path: '/loncom/access/cardImpower',
                        name:'accessCardImpower',
                        meta: { show:"true",type:'nav',limits: ""},
                        component: 'access/cardImpower/index.vue'
                    },
                    {
                        path: '/loncom/access/cardImpower/add',
                        name:'accessCardImpowerAdd',
                        meta: { show:"true",type:'fun',limits: ""},
                        component: 'access/cardImpower/add.vue'
                    },
                    {
                        path: '/loncom/access/config',
                        name:'accessConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'access/config/index.vue'
                    },
                    {
                        path: '/loncom/access/config/add',
                        name:'accessConfigAdd',
                        meta: { show:"true",type:'fun',limits: ""},
                        component: 'access/config/add.vue'
                    },
                ]
            },
            {
                path: '/loncom/video',
                name:'video',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_shipin'},
                component: 'video/index.vue',
                children:[
                    {
                        path: '/loncom/video/preview',
                        name:'videoPreview',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'video/preview/index.vue'
                    },
                    {
                        path: '/loncom/video/playback',
                        name:'videoPlayback',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'video/playback/index.vue'
                    },
                    {
                        path: '/loncom/video/config',
                        name:'videoConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'video/config/index.vue'
                    },
                ]
            },
            {
                path: '/loncom/energy',
                name:'energy',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_nengxiao'},
                component: 'energy/index.vue',
                children:[
                    {
                        path: '/loncom/energy/status',
                        name:'energyStatus',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'energy/status/index.vue'
                    },
                    {
                        path: '/loncom/energy/config',
                        name:'energyConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'energy/config/index.vue'
                    },
                ]
            },
            {
                path: '/loncom/statement',
                name:'statement',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_baobiao'},
                component: 'statement/index.vue',
                children:[
                    {
                        path: '/loncom/statement/convention',
                        name:'statementConvention',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'statement/convention/index.vue'
                    },
                    {
                        path: '/loncom/statement/plan',
                        name:'statementPlan',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'statement/plan/index.vue'
                    },
                    {
                        path: '/loncom/statement/config',
                        name:'statementConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'statement/config/index.vue'
                    },
                ]
            },
            {
                path: '/loncom/system',
                name:'system',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_xitong'},
                component: 'system/index.vue',
                children:[
                    {
                        path: '/loncom/system/user',
                        name:'systemUser',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'system/user/index.vue'
                    },
                    {
                        path: '/loncom/system/information',
                        name:'systemInformation',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'system/information/index.vue'
                    },
                    {
                        path: '/loncom/system/config',
                        name:'systemConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'system/config/index.vue'
                    },
                ]
            },
            {
                path: '/loncom/assets',
                name:'assets',
                meta: {show:"true",type:'nav',limits: "",icon:'icon-ic_zichan'},
                component: 'assets/index.vue',
                children:[
                    {
                        path: '/loncom/assets/cabinet',
                        name:'assetsCabinet',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'assets/cabinet/index.vue'
                    },
                    {
                        path: '/loncom/assets/inassets',
                        name:'assetsInassets',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'assets/inassets/index.vue'
                    },
                    {
                        path: '/loncom/assets/config',
                        name:'assetsConfig',
                        meta: {show:"true",type:'nav',limits: ""},
                        component: 'assets/config/index.vue'
                    },
                ]
            },
        ]
    
    }
}

const gettable=function(){
    return {
        err_code:0,
        err_msg:"成功",
        total:6,
        data:
        [
            {id:'1',code:'12',type:'普通',user:"小呆",indate:'2019-23-21',timegroup:'时间1',jieru:'323',zw:'123',zl:'234'},
            {id:'2',code:'122',type:'普通',user:"小呆2",indate:'2019-23-21',timegroup:'时间2',jieru:'232',zw:'123',zl:'234'},
            {id:'3',code:'123',type:'普通',user:"小呆3",indate:'2019-23-21',timegroup:'时间2',jieru:'232',zw:'123',zl:'234'},
            {id:'4',code:'124',type:'普通',user:"小呆4",indate:'2019-23-21',timegroup:'时间2',jieru:'232',zw:'123',zl:'234'},
            {id:'5',code:'125',type:'普通',user:"小呆5",indate:'2019-23-21',timegroup:'时间2',jieru:'232',zw:'123',zl:'234'},
            {id:'6',code:'126',type:'普通',user:"小呆6",indate:'2019-23-21',timegroup:'时间2',jieru:'232',zw:'123',zl:'234'},
        ]
    }
}
const getedittable=function(){
    return {
        err_code:0,
        err_msg:"成功",
        total:6,
        data:[
            {id:'1',inputname:'12',radioname:'普通',selectname:"小呆",datename:'2019-23-21',timename:'时间1',dialogname:'323'},
        ]
    }
}



Mock.mock(store.getters.AjaxUrl+'/getMockData', /post/i,getdata) //调用模拟数据方法
Mock.mock(RegExp(store.getters.AjaxUrl+'/getInfo' + ".*"), /get/i,getinfo) 
Mock.mock(RegExp(store.getters.AjaxUrl+'/getTable' + ".*"), /get/i,gettable) 
Mock.mock(RegExp(store.getters.AjaxUrl+'/getEditTable' + ".*"), /get/i,getedittable) 

const getCheck=function(){
    return {
        err_code:0,
        err_msg:"成功",
        data:true
    }
}
Mock.mock(store.getters.AjaxUrl+'/getCheck', /post/i,getCheck) //调用模拟数据方法

const getTemp=function(){
    return {
        err_code:0,
        err_msg:"成功",
        data:[
            {type:'1',name:"大屏首页",url:'bigScreen/index/page.html'}
        ]
    }
}
Mock.mock(store.getters.AjaxUrl+'/getTemp', /post/i,getTemp) //调用模拟数据方法


const getLogin=function(){
    return {
        err_code:0,
        err_msg:"成功",
        data:{
            roleid:"quan_xian_id",
            userid:"admin"
        }
    }
}
Mock.mock(store.getters.AjaxUrl+'/login', /post/i,getLogin) //调用模拟登录