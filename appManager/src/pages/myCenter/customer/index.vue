<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="search">
				<view class="search-input"><input :value="initParams.phone" placeholder="手机号" placeholder-style="color:#999;" @tap="onShowDatePicker"/></view>
				<view class="search-btn">
					<button type="primary" style="background:#40a563;" @tap="sure" hover-class="primary-hover">搜 索</button>
				</view>
			</view>
			<view>
				<view class="box-shadow-card box-card">
					<view class="box-card-title">
						<text>订单编号：0280123525245</text>
						<text>2019.10.16 19:10</text>
					</view>
					<view class="box-card-con">
						<view class="userinfo flex">
							<text>平安银行成都分行-房屋抵押</text>
							<text>张女士</text>
						</view>
						<view class="flex customer-bottom">
							<view class="customer-btn">
								<navigator url="/pages/myCenter/customer/applyInfo">
									<button type="primary" class="btn" style="background:#40a563;" @tap="sure" hover-class="primary-hover">申请信息</button>
								</navigator>
								<navigator url="/pages/myCenter/customer/progress">
									<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">进度反馈</button>
								</navigator>
								<navigator url="/pages/myCenter/customer/applyInvalid">
									<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">申请无效</button>
								</navigator>
							</view>
							<view class="color">
								-120积分
							</view>
						</view>
					</view>
				</view>
				<view class="box-shadow-card box-card">
					<view class="box-card-title">
						<text>订单编号：0280123525245</text>
						<text>2019.10.16 19:10</text>
					</view>
					<view class="box-card-con">
						<view class="userinfo flex">
							<text>平安银行成都分行-房屋抵押</text>
							<text>张女士</text>
						</view>
						<view class="flex customer-bottom">
							<view class="customer-btn">
								<navigator url="/pages/myCenter/customer/applyInfo">
									<button type="primary" class="btn" style="background:#40a563;" @tap="sure" hover-class="primary-hover">申请信息</button>
								</navigator>
								<navigator url="/pages/myCenter/customer/progress">
									<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">进度反馈</button>
								</navigator>
								<navigator url="/pages/myCenter/customer/applyInvalid">
									<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">申请无效</button>
								</navigator>
							</view>
							<view class="color">
								-120积分
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	.box-card{
		margin-bottom: 15px;
		.box-card-title{
			color: #40A563;
			display: flex;
			justify-content: space-between;
			padding: 10px 15px;
			border-bottom: 1px solid #40A563;
		}
		.box-card-con{
			padding: 20px 15px;
			.userinfo{
				color: #000;
				border-bottom: 1px solid #e4e7ed;
				height: 30px;
				margin-bottom: 10px;
			}
		}
		.customer-bottom{
			line-height: 35px;
		}
		.customer-btn{
			display: flex;
			.other-btn{
				margin-left: 5px;
			}
		}
	}
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright},
	onLoad() {
		
	},
	data() {
		return {
			initParams:{
				phone:"",
			}
		}
	},
	methods: {
		resetPsword:function(){
			uni.showToast({
				icon: 'none',
				title: '密码修改成功！'
			});
		},
		sure:function(){

		}
	}
}
</script>

