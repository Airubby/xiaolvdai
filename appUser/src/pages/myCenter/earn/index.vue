<template>
	<view class="content bgf5">
		<view class="pd15">
			<view class="earn">
				<view class="earn-box pd15">
					<view class="title">"朋友圈分享赚积分"</view>
					<view>每有一位好友申请产品咨询，您可以获得10积分！每超过10位好友申请产品咨询，额外奖励50积分！VIP咨询,电影票,iPhone11各种奖品等您拿！</view>
				</view>
				<view class="fenxiang">
					<view class="fenxiang-box">
						<view>
							<image src="/static/images/earn-wx.png" style="width:37px;height:37px;" mode="widthFix"></image>
						</view>
						<text>微信好友</text>
					</view>
					<view class="fenxiang-box">
						<view>
							<image src="/static/images/earn-pyq.png" style="width:37px;height:37px;" mode="widthFix"></image>
						</view>
						<text>朋友圈</text>
					</view>
					<view class="fenxiang-box">
						<view>
							<image src="/static/images/earn-wxkk.png" style="width:37px;height:37px;" mode="widthFix"></image>
						</view>
						<text>微信看一看</text>
					</view>
					<view class="fenxiang-box">
						<view>
							<image src="/static/images/earn-qq.png" style="width:37px;height:37px;" mode="widthFix"></image>
						</view>
						<text>QQ好友</text>
					</view>
				</view>
			</view>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.earn-box{
		background: #40a563;
		color: #fff;
		.title{
			font-size: 20px;
			margin-bottom: 10px;
		}
	}
	.fenxiang{
		display: flex;
		margin: 20px 0;
		justify-content: center;
		.fenxiang-box{
			text-align: center;
			margin: 0 10px;
		}
	}
</style>
<script>
	export default {
		components:{},
		onLoad() {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

