<template>
    <div class="side">
        <div class="text-center mb5">
            <router-link to="/myCenter/customer"><img src="images/sideLogo.png"></router-link>
        </div>
        <div class="side-center">
            <div class="side-center-info bgfff box-shadow mb10">
                <div class="text-center">
                    <div class="mb15"><img src="images/titleLogo.png"></div>
                    <div class="side-center-user">
                        <p>15225252525</p>
                        <p class="color">获赞数：<span class="number">20</span>个</p>
                        <a class="discuss">论赞的重要性</a>
                    </div>
                    <div class="pay">
                        <p>我的积分</p>
                        <p><span class="ocolorp">50</span></p>
                        <div><el-button type="primary" @click="pay()" class="content mt10">积分充值</el-button></div>
                        <div><el-button type="warning" @click="Earn()" class="content mt10">赚取积分</el-button></div>
                    </div>
                </div>
            </div>
            <div class="bgfff box-shadow mb10 text-center side-policy">
                <a class="color" @click="agreementInfo.visible=true">《信贷经理用户注册协议》</a>
                <a class="color" @click="policyInfo.visible=true">《信贷经理隐私保护政策》</a>
                <a class="color" @click="collaborateInfo.visible=true">《信贷经理合作协议》</a>
            </div>
            <!-- <div class="side-info ide-center-info bgfff box-shadow">
                <p class="jr mb10" @click="checkFn">金融机构排名榜</p>
                <p class="xd" @click="checkFn">信贷经理排名榜</p>
            </div> -->
        </div>
        <policy v-if="policyInfo.visible" :dialogInfo="policyInfo"></policy>
        <agreement v-if="agreementInfo.visible" :dialogInfo="agreementInfo"></agreement>
        <collaborate v-if="collaborateInfo.visible" :dialogInfo="collaborateInfo"></collaborate>
    </div>
</template>

<script>
import policy from "@/components/policy.vue"
import agreement from "@/components/agreement.vue"
import collaborate from "@/components/collaborate.vue"
export default {
    components:{agreement,policy,collaborate},
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            policyInfo:{
				visible:false,
			},
			agreementInfo:{
				visible:false
			},
			collaborateInfo:{
				visible:false
			}
        }
    },
    methods:{
        pay:function(){
            this.$router.push({path:'/myCenter/recharge'})
        },
        Earn:function(){
            this.$router.push({path:'/myCenter/credits'})
        },
        checkFn:function(){
            this.$message.info("功能正在完善中");
        }
    },
    props:[]  
}
</script>

