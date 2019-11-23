<template>
	<view class="content bgfff">
		<view class="sort-box">
			<view class="flex sort-box-top">
				<view class="sort-box-left">
					<image src="/static/images/manager.png" class="sort-box-img" mode="widthFix"></image>
					<text class="sort-box-img-info">已实名</text>
				</view>
				<view class="sort-box-right">
					<view class="mb5">四川多维外包服务有限公司</view>
					<view>信贷经理:010101<text class="ml15">获赞次数:252</text></view>
				</view>
			</view>
		</view>
		<view class="bg colorfff sort-boxbottom">
		亲爱的用户，您咨询的产品是平安银行成都分行-公积金贷，我们将在您申请提交后24小时内与您联系！	
		</view>
		<view class="pd15">
			<view class="input"><input :value="initParams.phone" placeholder="您的手机号" placeholder-style="color:#999;"/></view>
			<view class="input">
				<input :value="initParams.code" v-model="initParams.code" placeholder="验证码" placeholder-style="color:#999;"/>
				<button type="primary" size="mini" 
					style="background:#40a563;width:105px;height:35px;line-height:35px;margin:0" class="input-button" hover-class="primary-hover">获取验证码</button>
			</view>
		</view>
		<view class="name" v-show="show">
			<view class="pd15">
				<view class="input"><input :value="initParams.name" placeholder="您的姓名" placeholder-style="color:#999;"/></view>
			</view>
		</view>
		<view class="pd15">
			<button type="warn" class="mt15" style="background:#FF8000;" hover-class="warn-hover" @tap="loginFn">提交申请</button>
		</view>
		<copyright></copyright>
	</view>
</template>
<style lang="less" scoped>
	.sort-box{
		padding: 15px 15px 0;
		.sort-box-top{
			border-bottom: none;
		}
	}
	.sort-boxbottom{
		padding: 15px;
		line-height: 22px;
	}
	.name{
		border-top: 10px solid #f5f5f5;
		border-bottom: 15px solid #f5f5f5;
	}
</style>

<script>
import copyright from '@/components/bottom-copyright.vue'
	export default {
		components:{copyright},
		onLoad:function() {  
			
		},
		data() {
			return {
				show:false,
				initParams:{
					phone:'',
					code:'',
					name:''
				},
			}
		},
		methods: {
			apply:function(){
				
			}
		},
		watch:{
			'initParams.code':function(val){
				console.log(val)
				if(val){
					this.show=true;
				}else{
					this.show=false;
				}
			}
		}
	}
</script>

