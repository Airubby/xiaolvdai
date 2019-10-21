<template>
    <el-dialog title="信贷经理合作协议" :visible.sync="dialogInfo.visible" width="600px" v-dialogDrag>
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading">
                <p>信贷经理合作协议内容</p>
            </div>
        </el-scrollbar>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogSure">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            this.dialogInfo.visible=false;
        },
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
