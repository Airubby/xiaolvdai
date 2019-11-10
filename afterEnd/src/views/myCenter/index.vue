<template>
    <div class="appcontent flex">
        <side></side>
        <div class="main">
            <top></top>
            <div class="main-box">
                <el-scrollbar class="scrollbar">
                    <div class="main-boxcon"><router-view /></div>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import side from "@/components/side.vue"
import top from "@/components/top.vue"
import routerLoading from "@/views/mixin/routerLoading"
export default {
    mixins:[routerLoading],
    created() {
        
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    destroyed(){
        sessionStorage.activeName="";
    },
    computed: {
        
    },
	methods: {

	},
    components: {
        side,top
    }
}
</script>
