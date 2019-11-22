<template>
	<view class="content bgf5">
		<view class="top-nav">
			<view class="status_bar"><!-- 这里是状态栏 --></view>
			<view class="top-nav-con">
				<view>
					<image src="/static/images/local.png" class="top-nav-img" mode="aspectFit"></image>
					<text>定位中...</text>
				</view>
				<view class="prelative">
					<a href="https://uniapp.dcloud.io/static/web-view.html">信贷经理登录</a>
				</view>
			</view>
		</view>
		<view class="status_bar"><!-- 这里是状态栏高度 --></view>
		<view class="nav-placeholder"></view>
		<view class="content-navapp">
			<scroll-view scroll-y="true" class="scroll-y">
				<view class="banner">
					<image src="/static/images/index-banner.png" class="banner-img" mode="widthFix"></image>
				</view>
				<view class="sort bgfff">
					<view class="mb10">请选择咨询产品类型：</view>
					<radio-group-btn :items="items" v-model="current"></radio-group-btn>
				</view>
				<view class="sort-info">
					帮您找到信贷经理<text class="text">{{text}}</text>人
				</view>
				<view class="bgfff sort-box">
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
					<view class="text-center">
						<view class="color mb5">
							<text>平安银行成都分行</text>
							<text class="line">|</text>
							<text>公积金贷</text>
						</view>
						<view>
							<text>月利率0.55%</text>
							<text class="line">|</text>
							<text>等额本息</text>
							<text class="line">|</text>
							<text>12、24、36期</text>
						</view>
						<view class="mt15">
							<navigator url="/pages/home/detail?id='1'">
								<button type="warn" style="background:#FF8000;" hover-class="warn-hover">查看详情</button>
							</navigator>
						</view>
					</view>
				</view>
				<view class="bgfff sort-box">
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
					<view class="text-center">
						<view class="color mb5">
							<text>平安银行成都分行</text>
							<text class="line">|</text>
							<text>公积金贷</text>
						</view>
						<view>
							<text>月利率0.55%</text>
							<text class="line">|</text>
							<text>等额本息</text>
							<text class="line">|</text>
							<text>12、24、36期</text>
						</view>
						<view class="mt15">
							<navigator url="/pages/home/detail?id='1'">
								<button type="warn" style="background:#FF8000;" hover-class="warn-hover">查看详情</button>
							</navigator>
						</view>
					</view>
				</view>
				<view class="bgfff sort-box">
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
					<view class="text-center">
						<view class="color mb5">
							<text>平安银行成都分行</text>
							<text class="line">|</text>
							<text>公积金贷</text>
						</view>
						<view>
							<text>月利率0.55%</text>
							<text class="line">|</text>
							<text>等额本息</text>
							<text class="line">|</text>
							<text>12、24、36期</text>
						</view>
						<view class="mt15">
							<navigator url="/pages/home/detail?id='1'">
								<button type="warn" style="background:#FF8000;" hover-class="warn-hover">查看详情</button>
							</navigator>
						</view>
					</view>
				</view>
				<view class="bgfff sort-box">
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
					<view class="text-center">
						<view class="color mb5">
							<text>平安银行成都分行</text>
							<text class="line">|</text>
							<text>公积金贷</text>
						</view>
						<view>
							<text>月利率0.55%</text>
							<text class="line">|</text>
							<text>等额本息</text>
							<text class="line">|</text>
							<text>12、24、36期</text>
						</view>
						<view class="mt15">
							<navigator url="/pages/home/detail?id='1'">
								<button type="warn" style="background:#FF8000;" hover-class="warn-hover">查看详情</button>
							</navigator>
						</view>
					</view>
				</view>
				<uni-load-more :status="status" :content-text="contentText" color="#40a563" v-show="showLoading" />
				<view class="bottomnav-placeholder"></view>
			</scroll-view>
		</view>
		<bottom-nav Info="home"></bottom-nav>
	</view>
</template>
<style lang="less" scoped>
	.top-nav{
		width: 100%;
		position: fixed;
		background: #fff;
		z-index: 9;
		color: #40a563;
		font-weight: bold;
		.top-nav-con{
			height: 44px;
			line-height: 44px;
			padding: 0 15px;
			display: flex;
			justify-content: space-between;
			.top-nav-img{
				width: 13px;
				height:16px;
				vertical-align: middle;
				margin-right: 5px;
			}
			a{
				color: #40a563;
			}
		}
	}
	.banner{
		background: #40a563;
		text-align: center;
		padding: 15px 0 25px 0;
		.banner-img{
			width: 330px;
		}
	}
	.sort{
		padding: 15px 15px 5px;
	}
	.sort-info{
		padding: 10px 15px;
		.text{
			margin: 0 5px;
			color: #40a563;
		}
	}
</style>

<script>
	import radioGroupBtn from '@/components/ai-ui/radio-group-btn/index.vue'
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue'
	import bottomNav from '@/components/bottom-nav.vue'
	export default {
		components:{radioGroupBtn,uniLoadMore,bottomNav},
		onLoad() {
			
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh(); //关闭下拉状态
			}, 1000);
		},
		// 上拉加载
		onReachBottom() {
			let _self = this
			this.showLoading=true;
			this.status = 'loading'
			uni.showNavigationBarLoading()
			console.log('reach');
			setTimeout(function() {
				_self.status = 'noMore'
				uni.hideNavigationBarLoading()
				this.showLoading=false;
			}, 2000);
		},
		data() {
			return {
				current:"all",
				items: [
					{value: 'all',name: '全部类型'},
					{value: '1',name: '工薪贷款'},
					{value: '2',name: '公积金贷'},
					{value: '3',name: '保单贷款'},
					{value: '4',name: '经营贷'},
					{value: '5',name: '房屋抵押'},
					{value: '6',name: '车辆抵押'},
					{value: '7',name: '房屋二抵'},
					{value: '8',name: '新车按揭'},
				],
				text:235,
				showLoading:false,
				status: 'more',
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		methods: {
			
		}
	}
</script>

