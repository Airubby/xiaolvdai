<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false" append-to-body>
        <el-scrollbar style="height:300px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="95px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="22">
                            <el-form-item label="部门名称:" prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="权限设置:" prop="limit" class="checkbox-btn">
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
                                    <el-checkbox label="14" border>岗位管理</el-checkbox>
                                    <el-checkbox label="15" border>文章管理</el-checkbox>
                                    <el-checkbox label="16" border class="ml0">奖品管理</el-checkbox>
                                    <el-checkbox label="17" border>奖品兑换</el-checkbox>
                                    <el-checkbox label="18" border>人事管理</el-checkbox>
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
            initParams:{
                bumen:"",
                name:"",
                limit:[],
            },
            rules: {
				limit:[
					{ required: true,  trigger: 'change',message: '请选择部门权限' },
				],
                name:[
					{ required: true,  trigger: 'change',message: '请填写部门名称' },
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
