<template>
	<div class="content flex">
		<left-nav></left-nav>
		<div class="right-box">
			<el-scrollbar class="scrollbar">
				<div class="mycenter-pd">
					<div class="account-border color mb25">
						积分赚取
					</div>
					<div class="box-card box-shadow-card">
						<div class="box-card-con flex" style="justify-content: space-between;">
							<div>
								<div class="color mb15" style="font-size:28px;">小驴任务“分享朋友圈赚积分”</div>
								<div class="mb5">每有一位信贷经理好友资质审核通过，您可以获得20积分！</div>
								<div>每超过10位信贷经理好友资质通过审核，额外奖励50积分！</div>
							</div>
							<div>
								<div class="mb5">
									<img src="images/code.png" style="width: 120px;">
								</div>
								<div class="ocolorp text-center">扫码分享赚积分</div>
							</div>
						</div>
					</div>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import leftNav from '../mixin/leftNav'
export default {
	mixins:[leftNav],
	components:{},
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		
		return {
			loading:false,
			initParams:{
				
			},
			rules: {
				
			},
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