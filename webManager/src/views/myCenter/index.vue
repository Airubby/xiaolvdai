<template>
	<div class="content">
		<div class="main-center">
			<el-tabs tab-position="left" style="height: 930px;" v-model="activeName" @tab-click="tabClick">
				<el-tab-pane label="我的客户" name="first">
					<customer v-on:backInfo="backInfo" v-if="activeName=='first'"></customer>
				</el-tab-pane>
				<el-tab-pane label="资质认证" name="second">
					<qualification v-if="activeName=='second'"></qualification>
				</el-tab-pane>
				<el-tab-pane label="产品上传" name="third">
					<productUpload v-on:backInfo="backInfo" v-if="activeName=='third'"></productUpload>
				</el-tab-pane>
				<el-tab-pane label="发布产品" name="fourth">
					<publishProduct v-if="activeName=='fourth'" v-on:backInfo="backInfo"></publishProduct>
				</el-tab-pane>
				<el-tab-pane label="消费明细" name="five">
					<expense v-if="activeName=='five'"></expense>
				</el-tab-pane>
				<el-tab-pane label="修改密码" name="six">
					<psword v-if="activeName=='six'"></psword>
				</el-tab-pane>
				
			</el-tabs>
		</div>
    </div>
</template>

<script>
import psword from './pages/psword.vue'
import expense from './pages/expense.vue'
import customer from './pages/customer.vue'
import qualification from './pages/qualification.vue'
import productUpload from './pages/productUpload.vue'
import publishProduct from './pages/publishProduct.vue'
export default {
	components:{customer,qualification,psword,productUpload,expense,publishProduct},
	created () {
		if(sessionStorage.activeName){
			this.activeName=sessionStorage.activeName;
		}
	},
	computed:{
        
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
			sessionStorage.activeName=tab.name;
		},
		backInfo:function(info){
			console.log(info)
			this.activeName=info;
			sessionStorage.activeName=info;
		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>