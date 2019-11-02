<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:160px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box pdt30">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="82px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="24" v-if="dialogInfo.id==''">
                            <el-form-item label="选择大类:" prop="name">
                                <el-radio-group v-model="initParams.marriage" size="mini">
                                    <el-radio label="1" border>信贷产品</el-radio>
                                    <el-radio label="2" border>抵押产品</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="类别名称:" prop="phone">
                                <el-input v-model="initParams.phone"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <dialog-btn-info :dialogInfobtn="dialogInfo" @dialogSure="dialogSure"></dialog-btn-info>
    </el-dialog>
</template>
<script>
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
export default {
    components:{dialogBtnInfo},
    created () {
        if(this.dialogInfo.name){
            this.initParams.phone=this.dialogInfo.name;
        }
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            options:[
                {value:"1",label:"商务一部"},
                {value:"2",label:"商务二部"},
            ],
            initParams:{
				phone:"",
                name:'',
                city:"全国",
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
            rules:{
                name:[{ required: true,  trigger: 'change',message: '请输入名称' }],
                phone:[{ required: true,  trigger: 'change',message: '请输入名称' }],
            },
            cityInfo:{
                visible:false,
            }
        }
    },
    methods:{
        dialogSure:function(){
            this.$refs['ValidateForm'].validate((valid) => {
                if(valid){ //验证通过
                    // this.loading=true;
                    
                    this.dialogInfo.visible=false;
                }
            })
        },
    },
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
