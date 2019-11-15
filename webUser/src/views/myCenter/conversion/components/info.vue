
<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false" :show-close="true">
        <el-scrollbar style="height:100px;" class="scrollbar">
            <div v-loading="loading" style="padding: 0 20px 0;">
                 <el-alert type="info" :closable="false" class="mb25">
                    <div class="info" style="font-size:14px;">
                        <strong class="color" style="font-size:16px;">抱歉，您的积分不足无法兑换！</strong>
                        <el-button type="warning" @click="enter()">参加任务赚积分</el-button>
                    </div>
                </el-alert>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<script>
export default {
    created () {
        
    },
    destroyed(){
		this.instance.close();
	},
    mounted() {

    },
    data() {
        return {
            loading:false,
        }
    },
    methods:{
        enter:function(){
            this.$router.push({path:'/myCenter/integral'})
        },
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
