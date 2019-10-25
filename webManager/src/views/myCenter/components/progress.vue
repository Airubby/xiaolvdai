<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag>
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading">
                23423
            </div>
        </el-scrollbar>
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
        
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
