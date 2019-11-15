<template>
    <div class="top flex">
        <a href="https://www.baidu.com" target="_blank">
            <img src="images/managerLogin.png">
        </a>
        <div class="top-info">
            <template v-if="!login">
                <span>游客,您好!</span>
                <router-link to="/page/login" class="btn">登录</router-link>
                <router-link to="/page/register" class="btn">注册</router-link>
            </template>
            <template v-if="login">
                <span>用户{{phone}},您好!</span>
                <span class="btn" @click="outLogin" v-loading.fullscreen.lock="loading">退出登录</span>
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
    computed:{
        login(){
            if(this.$store.getters.token){
                this.phone=this.$tool.Decrypt(this.$store.getters.token).split("_")[1];
                return true;
            }else{
                return false;
            }
        }
    },
    data() {
        return {
            phone:'',
            loading:false,
        }
    },
    methods:{

        outLogin:function(){
            this.$confirm('确认退出登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.loading=true;
                this.$r.post('/outLogin', {}, r => {
                    this.$router.push({path:'/page/index'});
                    this.$message.success("退出成功");
                    sessionStorage.removeItem('token');
                    this.$store.dispatch('setToken',"");
                    this.loading=false;
                });
            });
        }
    },
    props:[]  
}
</script>

