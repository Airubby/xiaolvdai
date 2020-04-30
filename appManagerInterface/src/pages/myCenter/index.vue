<template>
	<view class="content bgf5">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="center-top">
			<view class="center-top-img">
				<image src="/static/images/centerimg.png" style="width:60px;height:66px;" mode="widthFix"></image>
			</view>
			<view class="center-top-text">
				<view class="flex">
					<view>信贷经理：<text>{{user.name}}</text></view>
					<!-- <view class="ml15">获赞数：<text>20</text></view> -->
				</view>
				<view>所属机构：<text v-if="user.auditStatus==1">{{user.companyName}}</text><text v-else>尚未认证</text></view>
			</view>
		</view>
		<!-- <view class="bgfff flex pd1520 mb10">
			<view>
				<view>用户积分</view>
				<view><text class="integral">10</text>分</view>
			</view>
			<view class="flex">
				<navigator url="/pages/myCenter/recharge/index" style="margin-top:6px;">
					<button type="warn" style="background:#FF8000;" hover-class="warn-hover">积分充值</button>
				</navigator>
				<navigator url="/pages/myCenter/earn/index" class="ml10" style="margin-top:6px;">
					<button type="primary" style="background:#40a563;" hover-class="primary-hover">赚取积分</button>
				</navigator>
			</view>
		</view> -->
		<view class="pd15">
			<button type="warn" class="font-size18" style="background:#FF8000;" hover-class="warn-hover" v-if="user.vip==1">到期日期：{{user.expireTime}}</button>
			<navigator url="/pages/myCenter/applyVip/index" v-else>
				<button type="warn" class="font-size18" style="background:#FF8000;" hover-class="warn-hover">申请开通会员服务</button>
			</navigator>
		</view>
		<view class="bgfff nav-box">
			<navigator url="/pages/myCenter/qualification/index" class="nav-con">
				<view>
					<image src="/static/images/nav-two.png" style="width:30px;height:17px;" mode="widthFix"></image>
					<text class="title">资质认证</text>
				</view>
				<view>
					<text v-if="user.auditStatus==1" class="color">已认证</text><text v-else class="color">尚未认证</text>
					<uni-icons color="#cccccc" type="arrowright" size="22"></uni-icons>
				</view>
			</navigator>
			<!-- <navigator url="/pages/myCenter/productUpload/index" class="nav-con">
				<image src="/static/images/nav-three.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">上传产品</text>
			</navigator> -->
			<navigator url="/pages/myCenter/publishProduct/index" class="nav-con">
				<view>
					<image src="/static/images/nav-four.png" style="width:30px;height:20px;" mode="widthFix"></image>
					<text class="title">发布产品</text>
				</view>
				<view>
					<text class="color">{{user.productPublish}}个产品</text>
					<uni-icons color="#cccccc" type="arrowright" size="22"></uni-icons>
				</view>
			</navigator>
			<navigator url="/pages/myCenter/customer/index" class="nav-con">
				<view>
					<image src="/static/images/nav-one.png" style="width:30px;height:20px;" mode="widthFix"></image>
					<text class="title">我的客户</text>
				</view>
				<view>
					<text class="color">{{user.customerCount}}个客户</text>
					<uni-icons color="#cccccc" type="arrowright" size="22"></uni-icons>
				</view>
			</navigator>
			<navigator url="/pages/myCenter/psword/index" class="nav-con">
				<view>
					<image src="/static/images/nav-five.png" style="width:30px;height:17px;" mode="widthFix"></image>
					<text class="title">修改密码</text>
				</view>
				<view>
					<uni-icons color="#cccccc" type="arrowright" size="22"></uni-icons>
				</view>
			</navigator>
			<!-- <navigator url="/pages/myCenter/feedback/index" class="nav-con">
				<image src="/static/images/nav-six.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">问题&反馈</text>
			</navigator> -->
		</view>
		<view class="bottomnav-placeholder"></view>
		<bottom-nav Info="center"></bottom-nav>
    </view>
</template>
<style lang="less" scoped>
	.status_bar{
		background: #40A563;
		color: #fff;
	}
	.center-top{
		width: 100%;
		background: #40a563;
		display: flex;
		color:#fff;
		padding:10px 0 15px 20px;
		box-sizing: border-box;
		.center-top-text{
			padding: 15px 0 0 15px;
			line-height: 22px;
			font-style: italic;
			font-weight: bold;
		}
	}
	.integral{
		font-size: 22px;
		color: #40a563;
		margin-right: 5px;
		font-style: italic;
	}
	.nav-box{
		.nav-con{
			display: flex;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F5F5F5;
		}
		.nav-a{
			margin: 10px 0;
		}
		.title{
			margin-left: 15px;
			vertical-align: middle;
		}
	}
	
</style>
<script>
import bottomNav from '@/components/bottom-nav.vue'
import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue'
	export default {
		components:{bottomNav,uniIcons},
		onLoad() {
			let _this=this;
			uni.getStorage({
				key: 'token',
				fail: function (res) {
					uni.showToast({title: '请登录！',icon: 'none'});
					uni.redirectTo({
						url: '/pages/login/index'
					});
				},
			});
			// uni.getStorage({
			// 	key:'user',
			// 	success: function (res) {
			// 		_this.user=JSON.parse(res.data);
			// 		console.log(_this.user)
			// 	}
			// })
			this.getInfo();
		},
		data() {
			return {
				user:{
					//0未审核,1审核通过
					name:"",
					auditStatus:0,
					companyName:"",
					productPublish:0,
					customerCount:0,
				},
			}
		},
		methods: {
			getInfo:function(){
				this.$r.get("/manager/my",{},r=>{
					this.user=Object.assign(this.user,r);
				});
			}
		}
	}
</script>

