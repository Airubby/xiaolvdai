<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false" append-to-body>
        <el-scrollbar style="height:150px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="95px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="23">
                            <el-form-item label="岗位名称:" prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="23">
                            <el-form-item label="部门名称:" prop="bumen">
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
                {label:"商务部",value:"商务部"},
                {label:"技术部",value:"技术部"},
            ],
            initParams:{
                name:"",
                bumen:"",
            },
            rules: {
				name:[
					{ required: true,  trigger: 'change',message: '岗位名称不能为空' },
                ],
                bumen:[
					{ required: true,  trigger: 'change',message: '请选择部门' },
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
