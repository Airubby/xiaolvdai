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
                            <el-form-item label="权限设置:" prop="limit" class="checkbox-btn limit-checkbox">
                                <el-checkbox-group v-model="initParams.limit">
                                    <template v-for="item in list">
                                        <el-checkbox :label="item.name" border>{{item.meta.limit}}</el-checkbox>
                                    </template>
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
import {asyncRouter } from '@/router/index'
export default {
    created () {
        this.initParams.name=this.dialogInfo.name;
        this.list=asyncRouter;
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            list:[],
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
