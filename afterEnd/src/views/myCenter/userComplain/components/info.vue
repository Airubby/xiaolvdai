<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:380px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
                    <el-row :gutter="25">
                        <el-col :span="24" class="border-col">
                            <el-form-item label="订单编号:">
                                <span class="color">{{initParams.name}}0125254122</span>
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
                        <el-col :span="24" class="mt10">
                            <el-form-item label="投诉原因:">
                                <el-input v-model="initParams.insurancetype" type="textarea" style="height:100px;"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="index-detail-box info-border mt10">
                    <p class="index-detail-box-con ocolorp"><i><img src="images/jiantou.png"></i>投诉成功，扣100赞，记录被投诉一次！</p>
                    <p class="index-detail-box-con ocolorp"><i><img src="images/jiantou.png"></i>投诉撤销，客户谅解，投诉撤销！</p>
                </div>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">投诉成功</el-button>
            <el-button type="warning"  @click="cancelForm()">投诉撤销</el-button>
            <el-button @click="cancel">退出</el-button>
        </div>
    </el-dialog>
</template>
<script>
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
				insurancetype:"产品有问题，多次协商无效"
			},
        }
    },
    methods:{
        submitForm:function(){

        },
        cancelForm:function(){
            this.dialogInfo.visible=false;
        },
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
