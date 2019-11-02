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
                            <el-form-item label="开票金额:">
                                {{initParams.sex}}500元
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="信贷经理:">
                                {{initParams.marriage}}2502525
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="border-col">
                            <el-form-item label="联系电话:">
                                {{initParams.child}}15252525252
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" class="mt10">
                            <el-form-item label="发票编号:">
                                <el-input v-model="initParams.salary"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">确认开票</el-button>
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
				salary:"2dfgd5353261",
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
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
