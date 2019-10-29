<template>
    <div class="side">
        <div class="side-top">
            <p><img src="images/me.png"></p>
            <p>张小帅</p>
            <p class="side-top-info">商务顾问</p>
        </div>
        <div class="side-nav">
            <el-scrollbar class="scrollbar">
                <div class="side-navbox">
                    <router-link to="/myCenter/index">数据概况</router-link>
                    <router-link to="/myCenter/borrowingUser">借款用户</router-link>
                    <router-link to="/myCenter/ordRes">申请订单</router-link>
                    <router-link to="/myCenter/hannels">推广渠道</router-link>
                    <router-link to="/myCenter/facility">服务机构</router-link>
                    <router-link to="/myCenter/creditMgr">信贷经理</router-link>
                    <router-link to="/myCenter/qualification">资质认证</router-link>
                    <router-link to="/myCenter/productSet">产品设置</router-link>
                    <router-link to="/myCenter/loanProduct">贷款产品</router-link>
                    <router-link to="/myCenter/appliInvalid">申请无效</router-link>
                    <router-link to="/myCenter/orders">充值订单</router-link>
                    <router-link to="/myCenter/sdBIL">发票管理</router-link>
                    <router-link to="/myCenter/userComplain">用户投诉</router-link>
                    <router-link to="/myCenter/superSuPro">权限管理</router-link>
                    <router-link to="/myCenter/userSuPro">人事管理</router-link>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
    components:{},
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    props:[]  
}
</script>

