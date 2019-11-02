<template>
    <el-dialog title="顾问重配" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:160px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box pdt30">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="82px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="24">
                            <el-form-item label="选择部门:" prop="name">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="设定岗位:" prop="name">
                                <el-input v-model="initParams.name"></el-input>
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
            options:[
                {value:"1",label:"商务一部"},
                {value:"2",label:"商务二部"},
            ],
            initParams:{
				phone:"152222222222",
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
                name:[{ required: true,  trigger: 'change',message: '请输入渠道名称' }],
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
