<template>
	<view class="content bgf5">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="center-top">
			<view class="center-top-img">
				<image src="/static/images/centerimg.png" style="width:60px;height:66px;" mode="widthFix"></image>
			</view>
			<view class="center-top-text">
				<view class="flex">
					<view>信贷经理：<text>士大夫</text></view>
					<view class="ml15">获赞数：<text>20</text></view>
				</view>
				<view>所属机构：<text>尚未认证</text></view>
			</view>
		</view>
		<view class="bgfff flex pd1520 mb10">
			<view>
				<view>用户积分</view>
				<view><text class="integral">10</text>分</view>
			</view>
			<view class="flex">
				<navigator url="/pages/myCenter/recharge/index" style="margin-top:6px;">
					<button type="warn" style="background:#FF8000;" hover-class="warn-hover">积分充值</button>
				</navigator>
				<navigator url="/pages/myCenter/earn/index" class="ml10" style="margin-top:6px;">
					<button type="primary" style="background:#40a563;" hover-class="warn-hover">赚取积分</button>
				</navigator>
			</view>
		</view>
		<view class="bgfff nav-box">
			<navigator url="/pages/myCenter/customer/index" class="nav-con">
				<image src="/static/images/nav-one.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">我的客户</text>
			</navigator>
			<navigator url="/pages/myCenter/qualification/index" class="nav-con nav-a">
				<image src="/static/images/nav-two.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">资质认证</text>
			</navigator>
			<navigator url="/pages/myCenter/productUpload/index" class="nav-con">
				<image src="/static/images/nav-three.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">上传产品</text>
			</navigator>
			<navigator url="/pages/myCenter/publishProduct/index" class="nav-con">
				<image src="/static/images/nav-four.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">发布产品</text>
			</navigator>
			<navigator url="/pages/myCenter/psword/index" class="nav-con">
				<image src="/static/images/nav-five.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">修改密码</text>
			</navigator>
			<navigator url="/pages/myCenter/feedback/index" class="nav-con">
				<image src="/static/images/nav-six.png" style="width:30px;" mode="widthFix"></image>
				<text class="title">问题&反馈</text>
			</navigator>
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
			padding: 20px 0 0 15px;
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
		padding:0 20px;
		.nav-con{
			display: flex;
			padding: 20px 0;
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
	export default {
		components:{bottomNav},
		onLoad() {
			uni.getStorage({
				key: 'userLoginInfo',
				fail: function (res) {
					uni.redirectTo({
						url: '/pages/login/index'
					});
				}
			});
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

