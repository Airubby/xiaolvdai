<template>
	<div class="content">
		<div class="main-top">
			<div class="main-top-moreinfo mb15 flex">
				<div class="img-info">
					<img src="images/titleLogo.png" class="fl">
					<span>用户1525252525,您好!</span>
				</div>
			</div>
		</div>
		<div class="main-center">
			<el-tabs tab-position="left" style="height: 920px;" v-model="activeName">
				<el-tab-pane label="我的申请" name="first">
					<apply></apply>
				</el-tab-pane>
				<el-tab-pane label="实名认证" name="second">
					<realname></realname>
				</el-tab-pane>
				<el-tab-pane label="我的资料" name="third">
					<mydata></mydata>
				</el-tab-pane>
				<el-tab-pane label="修改密码" name="fourth">
					<psword></psword>
				</el-tab-pane>
				<el-tab-pane label="我的消息" name="five">
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
	mounted() {
        
    },
	data(){
		return {
			activeName:'third'
		}
	},
	methods:{
		
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>