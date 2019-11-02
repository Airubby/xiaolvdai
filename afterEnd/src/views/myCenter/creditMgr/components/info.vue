<template>
    <el-dialog title="信贷经理详情" :visible.sync="dialogInfo.visible" width="850px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:500px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
                    <el-row :gutter="25">
                        <el-col :span="12">
                            <el-form-item label="姓名:">
                                {{initParams.name}}张小小
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="手机号码:">
                                {{initParams.phone}}
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="信用积分:">
                                {{initParams.sex}}120赞
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="经理编号:">
                                {{initParams.marriage}}0100001
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="所属机构:">
                                {{initParams.child}}四川金融有限公司
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="服务城市:">
                                {{initParams.education}}成都
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="下架产品:">
                                {{initParams.education}}3个
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="发布产品:">
                                {{initParams.salary}}5个
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="获客条数:">
                                {{initParams.monthlySalary}}32条
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="充值金额:">
                                {{initParams.education}}3400元
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="已开票额:">
                                {{initParams.education}}3400元
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="积分余额:">
                                {{initParams.education}}3400
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="推荐经理:">
                                {{initParams.education}}0200021
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="被诉成功:">
                                {{initParams.education}}2次
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="恶意无效:">
                                {{initParams.education}}1次
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="index-detail-box info-border mt10">
                    <p class="index-detail-box-con color"><i><img src="images/jiantou.png"></i>可开票金额=消费金额-奖励金额-已开票金额</p>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    .el-col-12{
        border-bottom: 1px solid #EBEEF5;
        margin-bottom: 10px;
    }
    .ValidateForm .el-form-item--small.el-form-item{
        margin-bottom: 5px;
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
