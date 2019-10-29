<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag>
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading" style="padding:0 15px;">
                <div class="mb10">申请产品：平安银行成都分行人民南路支行-工薪贷</div>
                <el-row :gutter="0">
					<el-col :span="7">
						<div class="bg uinfo">客户姓名：陈陈</div>
					</el-col>
					<el-col :span="6">
						<div class="cbg uinfo">性别：先生</div>
					</el-col>
					<el-col :span="11">
						<div class="obg uinfo">手机号码：15225252525</div>
					</el-col>
				</el-row>
                <div style="height:40px;line-height:40px;border-bottom:1px solid #E4E7ED;font-size:12px;" class="mb10">
                    以下为客户自主提供的信息，请根据《信贷经理合作协议》妥善保护客户隐私，同时保护自身利益！
                </div>
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
                    <el-row :gutter="10" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="基础资料" class="form-title" label-width="300px">
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="婚姻状况:">
                                <el-radio-group v-model="initParams.marriage" size="mini">
                                    <el-radio label="1" border>无配偶</el-radio>
                                    <el-radio label="2" border>有配偶</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="子女状况:" class="ml15">
                                <el-radio-group v-model="initParams.child" size="mini">
                                    <el-radio label="1" border>无子女</el-radio>
                                    <el-radio label="2" border>有子女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="教育学历:">
                                <el-radio-group v-model="initParams.education" size="mini">
                                    <el-radio label="1" border>本科以下</el-radio>
                                    <el-radio label="2" border>大学本科</el-radio>
                                    <el-radio label="3" border>本科以上</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="工作情况" class="form-title" label-width="300px">
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="工资发放:">
                                <el-radio-group v-model="initParams.salary" size="mini">
                                    <el-radio label="1" border>打卡发放</el-radio>
                                    <el-radio label="2" border>现金发放</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="月薪收入:" class="ml15">
                                <el-radio-group v-model="initParams.monthlySalary" size="mini">
                                    <el-radio label="1" border>3千以下</el-radio>
                                    <el-radio label="2" border>3-5千</el-radio>
                                    <el-radio label="3" border>5千以上</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="社保交纳:">
                                <el-radio-group v-model="initParams.social" size="mini">
                                    <el-radio label="1" border>已交纳</el-radio>
                                    <el-radio label="2" border>未交纳</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="公积金:" class="ml15">
                                <el-radio-group v-model="initParams.accumulation" size="mini">
                                    <el-radio label="1" border>已交纳</el-radio>
                                    <el-radio label="2" border>未交纳</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="经营状况" class="form-title" label-width="300px">
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="主体性质:">
                                <el-radio-group v-model="initParams.nature" size="mini">
                                    <el-radio label="1" border>有限公司</el-radio>
                                    <el-radio label="2" border>个体工商</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="经营年限:" class="ml15">
                                <el-radio-group v-model="initParams.agelimit" size="mini">
                                    <el-radio label="1" border>1年以内</el-radio>
                                    <el-radio label="2" border>1-2年</el-radio>
                                    <el-radio label="3" border>2年以上</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="纳税类型:">
                                <el-radio-group v-model="initParams.ratepaying" size="mini">
                                    <el-radio label="1" border>小规模纳税</el-radio>
                                    <el-radio label="2" border>一般纳税</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="法人代表:" class="ml15">
                                <el-radio-group v-model="initParams.person" size="mini">
                                    <el-radio label="1" border>本人</el-radio>
                                    <el-radio label="2" border>非本人</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="资产佐证" class="form-title" label-width="300px">
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="房屋资产:">
                                <el-radio-group v-model="initParams.house" size="mini">
                                    <el-radio label="1" border>已购买</el-radio>
                                    <el-radio label="2" border>未购买</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="房产按揭:" class="ml15">
                                <el-radio-group v-model="initParams.housetype" size="mini">
                                    <el-radio label="1" border>全款房</el-radio>
                                    <el-radio label="2" border>按揭房</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="车辆资产:">
                                <el-radio-group v-model="initParams.car" size="mini">
                                    <el-radio label="1" border>已购买</el-radio>
                                    <el-radio label="2" border>未购买</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="车辆按揭:" class="ml15">
                                <el-radio-group v-model="initParams.cartype" size="mini">
                                    <el-radio label="1" border>全款房</el-radio>
                                    <el-radio label="2" border>按揭房</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="flex">
                            <el-form-item label="商业保险:">
                                <el-radio-group v-model="initParams.insurance" size="mini">
                                    <el-radio label="1" border>已购买</el-radio>
                                    <el-radio label="2" border>未购买</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="保险角色:" class="ml15">
                                <el-radio-group v-model="initParams.insurancetype" size="mini">
                                    <el-radio label="1" border>投保人</el-radio>
                                    <el-radio label="2" border>受益人</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="index-detail-box info-border" style="border:none;">
                    <div class="color mb5" style="font-size:14px;">小驴提示：</div>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>客户申请发起后，平台已向客户告知您的手机号，不排除客户给您致电的可能性，注意接听。</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>切记不要以小驴工作人员身份与客户联系，查实后会进行封号处理，进入黑名单永不合作。</p>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    .uinfo{
        color: #fff;
        height: 36px;
        line-height: 36px;
        text-align: center;
    }
    .cbg{
        background: #86A3C6;
    }
</style>

<script>
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            initParams:{
				phone:"152222222222",
				name:'',
				sex:'',
				card:'',
				marriage:"",
				child:"",
				education:"",
				salary:"",
				monthlySalary:"",
				social:"",
				accumulation:"",
				nature:"",
				agelimit:"",
				ratepaying:"",
				person:"",
				house:"",
				housetype:"",
				car:"",
				cartype:"",
				insurance:"",
				insurancetype:""
			},
        }
    },
    methods:{
        
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
