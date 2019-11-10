<template>
	<div class="content">
		<div class="main-top">
			<div class="main-top-moreinfo mb15 flex">
				<div class="img-info">
					<img src="images/titleLogo.png" class="fl">
					<span>用户{{phone}},您好!</span>
				</div>
			</div>
		</div>
		<div class="main-center">
			<el-tabs tab-position="left" style="height: 920px;" v-model="activeName" @tab-click="tabClick">
				<el-tab-pane label="我的申请" name="first">
					<apply></apply>
				</el-tab-pane>
				<el-tab-pane label="实名认证" name="second">
					<realname></realname>
				</el-tab-pane>
				<el-tab-pane label="我的资料" name="third" disabled>
					<mydata></mydata>
				</el-tab-pane>
				<el-tab-pane label="修改密码" name="fourth">
					<psword></psword>
				</el-tab-pane>
				<el-tab-pane label="我的消息" name="five" disabled>
					<info></info>
				</el-tab-pane>
			</el-tabs>
		</div>
    </div>
</template>

<script>
import apply from './apply.vue'
import realname from './realname.vue'
import mydata from './mydata.vue'
import psword from './psword.vue'
import info from './info.vue'
export default {
	components:{apply,realname,mydata,psword,info},
	created () {
	
	},
	computed:{
        phone:{
			get(){
				if(this.$store.getters.token){
					return this.$tool.Decrypt(this.$store.getters.token).split("_")[1];
				}
			}
        }
    }, 
	mounted() {
        
    },
	data(){
		return {
			activeName:'first',
		}
	},
	methods:{
		tabClick:function(tab){
			console.log(tab)
		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>