<template>
    <div class="appcontent flex">
        <side></side>
        <div class="main">
            <top></top>
            <div class="main-box box-shadow bgfff">
                <div class="main-top hcolor">
                   <div class="main-top-info"><router-link to="/page/index">产品搜索</router-link><em class="separate">/</em><span>个人中心</span></div>
                </div>
                <div class="main-center flex">
                    <div class="left-nav">
                        <div class="text-center mb5">
                            <img src="images/titleLogo.png">
                        </div>
                        <div class="text-center mycenter-info">
                            <p class="mb5 hcolor">150****3615</p>
                            <p class="mb15 hcolor">积分：<em class="color">34344</em></p>
                        </div>
                        <ul class="left-nav-ul">
                            <li><router-link to="/myCenter/apply">我的申请</router-link></li>
                            <li><router-link to="/myCenter/realname">实名认证</router-link></li>
                            <li><router-link to="/myCenter/psword">修改密码</router-link></li>
                            <li><router-link to="/myCenter/integral">赚取积分</router-link></li>
                            <li><router-link to="/myCenter/conversion">积分兑换</router-link></li>
                        </ul>
                    </div>
                    <div class="right-box">
                        <el-scrollbar class="scrollbar"><router-view /></el-scrollbar>
                    </div>
                </div>
            </div>
            <bottom></bottom>
        </div>
        <side-two></side-two>
    </div>
</template>

<script>
import side from "@/components/side.vue"
import sideTwo from "@/components/side-two.vue"
import top from "@/components/top.vue"
import bottom from "@/components/bottom.vue"
import routerLoading from "@/views/mixin/routerLoading"
export default {
    mixins:[routerLoading],
    created() {
        
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    computed: {
        
    },
	methods: {

	},
    components: {
        side,top,bottom,sideTwo
    }
}
</script>
