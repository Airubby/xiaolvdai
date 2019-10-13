<template>
    <div id="app" ref="app">
        <div id="loader-wrapper" v-if="loading">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
            <div class="load_title">正在加载小驴贷,请耐心等待<br><span>V0.1</span></div>
        </div>
        <router-view v-if="isRouterAlive" v-on:routerLoading="routerLoading" />
    </div>
</template>
<script>
  export default {
    name: 'app',
    created () {
        
    },
    computed:{
        
    },
    mounted() {
        
    },
    data(){
      return{
        isRouterAlive:true,
        loading:true,
      }
    },
    methods:{
        routerLoading:function(){
            this.loading=false;
        },
    },
    watch:{
      
    }
  }
</script>
<style lang="less">

</style>
