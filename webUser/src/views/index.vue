<template>
    <div class="appcontent flex">
        <side></side>
        <div class="main">
            <top></top>
            <div class="main-box box-shadow bgfff">
                <router-view />
            </div>
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
import side from "@/components/side.vue"
import top from "@/components/top.vue"
import bottom from "@/components/bottom.vue"
export default {
    created() {
        
    },
    mounted() {
        //加载完成了去掉根节点的loading;
        this.$nextTick(function(){
            this.$emit("routerLoading")
        })
    },
    data(){
        return{
            
        }
    },
    computed: {
        
    },
	methods: {

	},
    components: {
        side,top,bottom
    }
}
</script>
