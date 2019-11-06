<template>
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="dialogSure">确 定</el-button>
        <el-button @click="dialogCancel" size="small">取 消</el-button>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            
        }
    },
    methods:{
      
        //保存的操作
        dialogSure:function(){
            this.$emit('dialogSure');
        },
        //取消操作
        dialogCancel:function(){
            this.dialogInfobtn.visible=false;   
        },

    },
    props:["dialogInfobtn"]  
}
</script>

