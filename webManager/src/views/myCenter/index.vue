<template>
	<div class="content">
		<div class="main-center">
			<el-tabs tab-position="left" style="height: 920px;" v-model="activeName" @tab-click="tabClick">
				<el-tab-pane label="我的客户" name="first">
					<apply></apply>
				</el-tab-pane>
				<el-tab-pane label="资质认证" name="second">
					<realname></realname>
				</el-tab-pane>
				<el-tab-pane label="产品上传" name="third">
					<mydata></mydata>
				</el-tab-pane>
				<el-tab-pane label="发布产品" name="fourth">
					<psword></psword>
				</el-tab-pane>
				<el-tab-pane label="消费明细" name="five">
					<expense></expense>
				</el-tab-pane>
				<el-tab-pane label="修改密码" name="six">
					<psword></psword>
				</el-tab-pane>
				
			</el-tabs>
		</div>
    </div>
</template>

<script>
import psword from './psword.vue'
import expense from './expense.vue'

import apply from './apply.vue'
import realname from './realname.vue'
import mydata from './mydata.vue'
import info from './info.vue'
export default {
	components:{apply,realname,mydata,psword,info,expense},
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
			activeName:'five',
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