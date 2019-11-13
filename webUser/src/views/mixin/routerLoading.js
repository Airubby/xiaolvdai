export default {
    inject:['routerLoading'],
    mounted() {
        //加载完成了去掉根节点的loading;
        this.$nextTick(function(){
            this.routerLoading();
        })
    },
}