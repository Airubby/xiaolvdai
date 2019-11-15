<template>
    <div class="content">
        <div class="main-top hcolor mb25">
            <div class="main-top-info">
                <div class="main-top-info"><router-link to="/page/index">产品搜索</router-link><em class="separate">/</em><span>了解贷款行业</span></div>
            </div>
        </div>
        <div class="index-con">
            <div class="index-con-box list">
                <router-link to="/page/infoDetail" class="title">张晓梅：觉得拉伸放松数量大幅减少的法律，奥里斯的房间里水利电力</router-link>
                <div class="flex listinfo">
                    <span>阅读量：333453</span>
                    <span>2019-12-23</span>
                </div>
            </div>
            <div class="index-con-box list">
                <router-link to="/page/infoDetail" class="title">张晓得拉伸放松减少的法律，奥里斯的房间里水利电力</router-link>
                <div class="flex listinfo">
                    <span>阅读量：3353</span>
                    <span>2019-12-23</span>
                </div>
            </div>
            <div class="index-con-box list">
                <router-link to="/page/infoDetail" class="title">觉得拉伸放松数量大幅减少的法律，奥里斯的房间里水利电力</router-link>
                <div class="flex listinfo">
                    <span>阅读量：3353</span>
                    <span>2019-12-23</span>
                </div>
            </div>
            <div class="index-con-box list">
                <router-link to="/page/infoDetail" class="title">张晓梅：觉得拉伸放松数量大幅减少的法律，奥里斯的房间里水利电力</router-link>
                <div class="flex listinfo">
                    <span>阅读量：333453</span>
                    <span>2019-12-23</span>
                </div>
            </div>
            <div class="index-con-box list">
                <router-link to="/page/infoDetail" class="title">张伸放松数量大幅减少的法律，奥里斯的房间里水利电力</router-link>
                <div class="flex listinfo">
                    <span>阅读量：3333</span>
                    <span>2019-12-23</span>
                </div>
            </div>
            <el-pagination
                background
                :page-size="3"
                @current-change="handleCurrentChange"
                layout="total,prev, pager, next,jumper"
                :total="520">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    created() {
        
    },
    mounted() {
        
    },
    
    data(){
        return{
            
        }
    },
	methods: {
        handleCurrentChange:function(val){
			console.log(`当前页: ${val}`);
		},
        enterDetail:function(){
            this.$router.push({path:'/page/detail',query:{
                params:JSON.stringify({id:"123"})
            }});
        },
        
	},
    
}
</script>
