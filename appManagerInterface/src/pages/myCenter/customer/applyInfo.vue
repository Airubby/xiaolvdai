<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="text-center apply-top">
				订单编号：<text>02512141111</text>
			</view>
			<view>
				<view class="apply-title">客户联系方式</view>
				<view class="flex apply-user">
					<view>客户姓名：陈东东</view>
					<view>手机号码：15225****25</view>
				</view>
			</view>
			<view>
				<view class="apply-title">客户申请产品</view>
				<view class="color">
					<text>平安银行成都分行</text>
					<text class="line">|</text>
					<text>公积金贷</text>
				</view>
			</view>
			<view>
				<view class="apply-title">客户申请时间</view>
				<view class="color">
					2019-12-12 12:12
				</view>
			</view>
			<view class="apply-btn">
				<button type="warn" class="font-size18" style="background:#FF8000;" @tap="call" hover-class="warn-hover">拨打电话</button>
			</view>
			<view class="index-detail-box">
				<view class="apply-info-title color">小驴提示：</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>请在24小时内拨打首电，并在进度反馈中更新进度，未按规定执行，将无法申请积分。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>客户申请发起后，平台已向客户告知您的手机号，不排除客户给您致电的可能性，请注意接听！</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>切记不要以小驴工作人员身份与客户联系，查实后会进行封号处理，进入黑名单永不合作。</text>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	
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
		call:function(){
			uni.makePhoneCall({
				phoneNumber: '15228983615' //仅为示例
			});
		}
	}
}
</script>

