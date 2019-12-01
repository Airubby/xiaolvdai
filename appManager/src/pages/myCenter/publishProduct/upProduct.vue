<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="flex color">
				<view>发布日期：2020/2/3</view>
				<view>发布城市：成都</view>
			</view>
		</view>
		<view class="apply-user text-center">
			今日服务起价：34积分/条
		</view>
		<view class="ocolor upproduct-info">获赞300以上信贷经理，获客服务起价29积分/条</view>
		<view class="pd15">
			<view class="apply-title">发布单条积分竞价</view>
			<view class="search-input width-auto"><input :value="initParams.code" placeholder="积分数" placeholder-style="color:#999;"/></view>
			<view class="flex apply-btn">
				<view class="apply-btn-two">
					<button type="primary" class="font-size18" style="background:#40a563;" hover-class="primary-hover" @tap="save">确定发布</button>
				</view>
				<view class="apply-btn-two">
					<button type="warn" class="font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="back">暂不发布</button>
				</view>
			</view>
			<view class="index-detail-box">
				<view class="apply-info-title color">小驴提示：</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>一、平台采用竞价获客模式， 您需要设置相应的竞价积分，在获客后会从余额中扣除相应积分。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>二、平台有获客服务起价，每日推广成本不同，获客服务价会有所波动，将会在每天凌晨更新。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>三、竞价积分将决定搜索中您产品的排序，若竞价积分相同，则按获赞数进行排名！</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>四、如果您的竞价积分低于当日获客服务起步价或者您的积分余额不足，产品将会自动下架！</text>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	.upproduct-info{
		padding: 10px 15px 0;
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
			show:false,
			initParams:{
				code:""
			}
		}
	},
	methods: {
		back:function(){
			uni.navigateBack();
		},
		save:function(){
			uni.showModal({
				title: '抱歉发布失败！',
				content: '您的账户积分不足，请充值',
				showCancel:false,
				confirmText:"立即充值",
				confirmColor:"#40a563",
				success: (res) => {
					if (res.confirm) {
						uni.navigateTo({
							url: '/pages/myCenter/recharge/index'
						});
					}
				}
			});
		}
	}
}
</script>

