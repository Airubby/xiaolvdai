<template>
    <div class="appcontent flex">
        <!-- <side></side> -->
        <div class="main">
            <top></top>
            <div class="main-box box-shadow bgfff">
                <router-view />
            </div>
            <bottom></bottom>
        </div>
        <!-- <side-two></side-two> -->
    </div>
</template>

<script>
import side from "@/components/side.vue"
import sideTwo from "@/components/side-two.vue"
import top from "@/components/top.vue"
import bottom from "@/components/bottom.vue"
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
    computed: {
        
    },
	methods: {

	},
    components: {
        side,top,bottom,sideTwo
    }
}
</script>
