<template>
    <div class="top flex">
        <a href="https://www.baidu.com" target="_blank">
            <img src="images/managerLogin.png">
        </a>
        <div class="top-info">
            <template v-if="!login">
                <span>游客,您好!</span>
                <router-link to="/login" class="btn">登录</router-link>
                <router-link to="/register" class="btn">注册</router-link>
            </template>
            <template v-if="login">
                <span>用户Airubby,您好!</span>
                <span class="btn">退出登录</span>
                <router-link to="/myCenter" class="btn button box-shadow">个人中心</router-link>
            </template>
        </div>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            login: true,
        }
    },
    methods:{
      
    },
    props:[]  
}
</script>

