<template>
    <el-dialog title="资料审核" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:500px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <div class="userinfo flex">
                    <div>姓名：陈小龙</div>
                    <div>身份证号：511602********3912</div>
                    <div>联系电话：152******15</div>
                </div>
                <el-form :model="initParams" ref="ValidateForm" class="overhidden" label-width="65px">
                    <el-row :gutter="40">
                        <el-col :span="12">
                            <div class="upload-title">示例</div>
                            <div class="avatar-uploader">
                                <img src="images/user.png" class="avatar">
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="select-city">
                                选择服务城市：{{initParams.currentCity}}
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item prop="name" label="机构所属名称" label-width="100px" class="company-name">
                                <el-input v-model="initParams.name" style="width:300px;"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <div class="upload-title">工作证明文件上传</div>
                            <div class="avatar-uploader">
                                <img src="images/user.png" class="avatar">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="upload-title">&nbsp;</div>
                            <div class="avatar-uploader">
                                <img src="images/user.png" class="avatar">
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">审核通过</el-button>
            <el-button type="warning"  @click="cancelForm()">审核驳回</el-button>
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
