<template>
    <div class="public_addbtn">
        <div class="public_addbtn_con">
            <el-button @click="dialogCancel">取消</el-button>
            <el-button type="primary" @click="dialogSure">确定</el-button>
        </div>
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
            this.$emit('publicSure');
        },
        //取消操作
        dialogCancel:function(){
            this.$router.go(-1);  
        },

    },
    props:["dialogInfobtn"]  
}
</script>

