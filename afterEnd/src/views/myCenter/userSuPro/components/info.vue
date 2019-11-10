<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="700px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:250px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="82px" class="overhidden">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="人员姓名:" prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="人员工号:" prop="card">
                                <el-input v-model="initParams.card"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="电话号码:" prop="phone">
                                <el-input v-model="initParams.phone"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="部门选择:" prop="bumen">
                                <el-select v-model="initParams.bumen" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="岗位选择:" prop="gangwei">
                                <el-select v-model="initParams.gangwei" placeholder="请选择">
                                    <el-option
                                        v-for="item in options1"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="状态:">
                                <el-radio-group v-model="initParams.sex">
									<el-radio label="1" border>启用</el-radio>
									<el-radio label="3" border>停用</el-radio>
								</el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="登录密码:" prop="accumulation">
                                <el-input v-model="initParams.accumulation" type="password"></el-input>
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
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            options1:[
                {label:"推广专员",value:"推广专员"},
                {label:"商务专员",value:"商务专员"},
                {label:"工程师",value:"工程师"},
            ],
            options:[
                {label:"总经办",value:"总经办"},
                {label:"商务部",value:"商务部"},
                {label:"技术部",value:"技术部"},
            ],
            initParams:{
				phone:"",
                name:'',
                bumen:"",
                gangwei:"",
                city:"",
				sex:'1',
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
                phone:[{ required: true,  trigger: 'change',message: '请输入电话号码' }],
                bumen:[{ required: true,  trigger: 'change',message: '请选择部门' }],
                gangwei:[{ required: true,  trigger: 'change',message: '请选择岗位' }],
                accumulation:[{ required: true,  trigger: 'change',message: '非空' }],
                card:[{ required: true,  trigger: 'change',message: '非空' }]
            },
            cityInfo:{
                visible:false,
                hideall:true,  //不显示全国
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
        selectCity:function(){
            this.cityInfo.visible=true;
        },
        backInfo:function(info){
            this.initParams.city=info;
        }
    },
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
