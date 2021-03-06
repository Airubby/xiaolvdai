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

Mock.mock(store.getters.AjaxUrl+'/getMockData', /post/i,getdata) //调用模拟数据方法
Mock.mock(RegExp(store.getters.AjaxUrl+'/getInfo' + ".*"), /get/i,getdata) 



const getLogin=function(){
    return {
        token:"sdsdfsdf#%#$%$@$",
    }
}
Mock.mock(store.getters.AjaxUrl+'/login', /post/i,getLogin) //调用模拟登录

const outLogin=function(){
    return {
        token:"",
    }
}
Mock.mock(store.getters.AjaxUrl+'/outLogin', /post/i,outLogin) //调用模拟登录

const checkToken=function(){
    return {
        token:true,
    }
}
Mock.mock(store.getters.AjaxUrl+'/checkToken', /post/i,checkToken) //调用模拟登录

const register=function(){
    return {
        data:true,
    }
}
Mock.mock(store.getters.AjaxUrl+'/register', /post/i,register) //调用模拟登录