<template>
    <div class="main-top flex">
        <router-link to="/myCenter/index">
            <img src="images/logo.png">
        </router-link>
        <div class="top-info">
            <span>以事实为基础，用数据说话</span>
            <a class="color" @click="outLogin">退出登录</a>
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
                    this.$router.push({path:'/login'});
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

