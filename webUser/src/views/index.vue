<template>
    <div class="content">
        首页
    </div>
</template>

<script>
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
        
    }
}
</script>
