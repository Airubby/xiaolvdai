<template>
    <div class="appcontent">
        <el-row :gutter="50">
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title">
                        <span>借款用户概况</span>
                        <router-link to="/myCenter/borrowingUser">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop">
                            <span>注册借款用户共计</span>
                            <span>131323人</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日新增</span>
                                <span class="color ml15">54人</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title box-card-title1">
                        <span>申请订单概况</span>
                        <router-link to="/myCenter/ordRes">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop box-card-contop1">
                            <span>申请借款订单共计</span>
                            <span>131323单</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日新增</span>
                                <span class="color1 ml15">54单</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日新增</span>
                                <span class="ml15">54单</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月新增</span>
                                <span class="ml15">54单</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月新增</span>
                                <span class="ml15">54单</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title box-card-title2">
                        <span>信贷经理概况</span>
                        <router-link to="/myCenter/creditMgr">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop box-card-contop2">
                            <span>注册信贷经理共计</span>
                            <span>131323人</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日新增</span>
                                <span class="color2 ml15">54人</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月新增</span>
                                <span class="ml15">54人</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title box-card-title3">
                        <span>贷款产品概况</span>
                        <router-link to="/myCenter/loanProduct">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop box-card-contop3">
                            <span>贷款产品共计</span>
                            <span>131323个</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日新增</span>
                                <span class="color3 ml15">54个</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日新增</span>
                                <span class="ml15">54个</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月新增</span>
                                <span class="ml15">54个</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月新增</span>
                                <span class="ml15">54个</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title box-card-title4">
                        <span>充值概况</span>
                        <router-link to="/myCenter/orders">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop box-card-contop4">
                            <span>平台充值共计</span>
                            <span>131323元</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日新增</span>
                                <span class="color4 ml15">54元</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日新增</span>
                                <span class="ml15">54元</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月新增</span>
                                <span class="ml15">54元</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月新增</span>
                                <span class="ml15">54元</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="box-card box-shadow-card">
                    <div class="box-card-title box-card-title5">
                        <span>积分概况</span>
                        <router-link to="/myCenter/index">更多分析</router-link>
                    </div>
                    <div class="box-card-con">
                        <div class="flex-bet box-card-contop box-card-contop5">
                            <span>平台积分总余额</span>
                            <span>131323</span>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">今日扣除</span>
                                <span class="color5 ml15">54</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">昨日扣除</span>
                                <span class="ml15">54</span>
                            </el-col>
                        </div>
                        <div class="box-card-conli">
                            <el-col :span="12">
                                <span class="color999">本月扣除</span>
                                <span class="ml15">54</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="color999">上月扣除</span>
                                <span class="ml15">54</span>
                            </el-col>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    created() {
        
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    destroyed(){
        
    },
    computed: {
        
    },
	methods: {

	},
    components: {
        
    }
}
</script>
