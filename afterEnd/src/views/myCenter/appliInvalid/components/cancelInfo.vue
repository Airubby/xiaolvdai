<template>
    <el-dialog title="驳回理由" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag append-to-body :close-on-click-modal="false">
        <el-scrollbar style="height:220px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box pdt30">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="82px" class="overhidden">
                    <el-row :gutter="25">
                        <el-col :span="24">
                            <el-form-item label="驳回理由:" prop="name">
                                <el-input v-model="initParams.name" type="textarea" style="height:120px;"></el-input>
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
            initParams:{
                name:'',
            },
            rules:{
                name:[{ required: true,  trigger: 'change',message: '请输入驳回理由' }],
            },
        }
    },
    methods:{
        dialogSure:function(){
            this.$refs['ValidateForm'].validate((valid) => {
                if(valid){ //验证通过
                    // this.loading=true;
                    
                    this.$emit("backInfo");
                }
            })
        },
    },
    props:["dialogInfo"]
}
</script>

