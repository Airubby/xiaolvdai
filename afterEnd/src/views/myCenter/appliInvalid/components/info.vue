<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:300px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
                    <el-row :gutter="25">
                        <el-col :span="12" class="border-col">
                            <el-form-item label="订单编号:">
                                {{initParams.name}}0125254122
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="订单积分:">
                                {{initParams.sex}}120
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="借款用户:">
                                {{initParams.marriage}}张三
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="联系电话:">
                                {{initParams.child}}15252525252
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="信贷经理:">
                                {{initParams.education}}里斯
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="联系电话:">
                                {{initParams.salary}}15245454545
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="index-detail-box info-border mt10">
                    <p class="index-detail-box-con ocolorp"><i><img src="images/jiantou.png"></i>申请成功，订单将扣除33积分！</p>
                    <p class="index-detail-box-con ocolorp"><i><img src="images/jiantou.png"></i>申请驳回，扣除50赞，记录一次恶意申请！</p>
                </div>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">申请成功</el-button>
            <el-button type="warning"  @click="cancelForm()">申请驳回</el-button>
            <el-button @click="cancel">退出</el-button>
        </div>
        <cancel-info v-if="cancelInfo.visible" :dialog-info="cancelInfo" @backInfo="cancel"></cancel-info>
    </el-dialog>
</template>
<script>
import cancelInfo from './cancelInfo.vue'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            top:'1',
            initParams:{
                currentCity:"成都",
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
            cancelInfo:{
                visible:false
            }
        }
    },
    methods:{
        submitForm:function(){

        },
        cancelForm:function(){
            this.cancelInfo.visible=true;
        },
        cancel:function(){
            this.dialogInfo.visible=false;
        }
    },
    components:{cancelInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
