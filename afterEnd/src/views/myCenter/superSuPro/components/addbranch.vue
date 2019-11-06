<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false" append-to-body>
        <el-scrollbar style="height:100px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="95px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="23">
                            <el-form-item label="部门名称:" prop="name">
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
    created () {
        this.initParams.name=this.dialogInfo.name;
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            initParams:{
                name:""
            },
            rules: {
				name:[
					{ required: true,  trigger: 'change',message: '部门名称不能为空' },
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
