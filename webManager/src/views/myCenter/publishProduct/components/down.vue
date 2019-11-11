<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag :close-on-click-modal="false" :show-close="false">
        <el-scrollbar style="height:150px;" class="scrollbar">
            <div v-loading="loading" style="padding: 0 30px 20px;">
                <p>平安银行成都分行-房屋抵押</p>
                <p class="sure color">您确定下架该产品？</p>
                <div class="flex">
                    <el-button type="primary" size="medium" @click="submitForm()" style="width: 150px;">马上下架</el-button>
                    <el-button type="warning" size="medium" @click="cancel()" style="width: 150px;">考虑一下</el-button>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    p{
        line-height: 22px;
    }
    .sure{
        font-size: 18px;
        margin: 10px 0 15px 0;
    }
</style>

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
        cancel:function(){
            this.dialogInfo.visible=false;
        },
        submitForm:function(){
            this.$notify.success("下架成功");
            this.dialogInfo.visible=false;
        }
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
