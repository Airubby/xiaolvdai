<template>
    <el-dialog title="新增渠道" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:250px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="82px" class="overhidden">
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-form-item label="渠道名称:" prop="name">
                                <el-input v-model="initParams.name" size="mini"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="推广城市:">
                                <el-input v-model="initParams.city" readonly="" size="mini" style="width:180px;margin-right:5px;"></el-input><a class="color" @click="selectCity">选择推广城市</a>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="推广频道:">
                                <el-input v-model="initParams.salary" size="mini"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="落地链接:">
                                <el-input v-model="initParams.monthlySalary" size="mini"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <dialog-btn-info :dialogInfobtn="dialogInfo" @dialogSure="dialogSure"></dialog-btn-info>
        <citys v-if="cityInfo.visible" :dialog-info="cityInfo" @backInfo="backInfo"></citys>
    </el-dialog>
</template>
<script>
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
import citys from '@/components/citys.vue'
export default {
    components:{dialogBtnInfo,citys},
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
