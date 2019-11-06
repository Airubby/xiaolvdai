<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false" append-to-body>
        <el-scrollbar style="height:300px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="95px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="16">
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
                        <el-col :span="16">
                            <el-form-item label="岗位名称:" prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="23">
                            <el-form-item label="权限设置:" prop="limit">
                                <el-checkbox-group v-model="initParams.limit">
                                    <el-checkbox label="1" border>数据概况</el-checkbox>
                                    <el-checkbox label="2" border>借款用户</el-checkbox>
                                    <el-checkbox label="3" border>申请订单</el-checkbox>
                                    <el-checkbox label="4" border>推广渠道</el-checkbox>
                                    <el-checkbox label="5" border>服务机构</el-checkbox>
                                    <el-checkbox label="6" border class="ml0">信贷经理</el-checkbox>
                                    <el-checkbox label="7" border>资质认证</el-checkbox>
                                    <el-checkbox label="8" border>贷款产品</el-checkbox>
                                    <el-checkbox label="9" border>申请无效</el-checkbox>
                                    <el-checkbox label="10" border>充值订单</el-checkbox>
                                    <el-checkbox label="11" border class="ml0">发票管理</el-checkbox>
                                    <el-checkbox label="12" border>用户投诉</el-checkbox>
                                    <el-checkbox label="13" border>权限管理</el-checkbox>
                                    <el-checkbox label="14" border>人事管理</el-checkbox>
                                </el-checkbox-group>
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
    created () {
        this.initParams.name=this.dialogInfo.name;
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            options:[
                {label:"总经办",value:"总经办"},
                {label:"推广一部",value:"推广一部"},
                {label:"商务一部",value:"商务一部"},
                {label:"技术部",value:"技术部"},
            ],
            initParams:{
                bumen:"",
                name:"",
                limit:[],
            },
            rules: {
				bumen:[
					{ required: true,  trigger: 'change',message: '请选择部门' },
				],
                name:[
					{ required: true,  trigger: 'change',message: '请填写岗位名称' },
				],
			},
        }
    },
    methods:{
        dialogSure:function(){

        },
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
