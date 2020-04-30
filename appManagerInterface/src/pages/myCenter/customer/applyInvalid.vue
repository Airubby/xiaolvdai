<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="text-center apply-top">
				订单编号：<text>02512141111</text>
			</view>
			<view>
				<view class="apply-title"></view>
				<view class="apply-user text-center mb5">
					客户姓名：陈东东
				</view>
				<view class="color">
					仅在“首电联系”阶段出现以下情形之一可申请无效！
				</view>
			</view>
			<view class="invalid-select">
				<radio-group-btn :items="items" v-model="current"></radio-group-btn>
			</view>
			<view class="apply-btn">
				<button type="warn" class="font-size18" style="background:#FF8000;" @tap="save" hover-class="warn-hover">提交申请</button>
			</view>
			<view class="index-detail-box">
				<view class="apply-info-title color">小驴提示：</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>无效申请必须在获得客户信息后48小时内进行提交，过期不予受理。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>申请成功后，我们会在48小时内，将扣费返还至您的账户。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>恶意申请无效，系统将会扣除10个“赞”，累计达3次恶意申请无效，我们将下架产品一周，将无法推广您产品，达到5次，系统将做封号处理。</text>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	.invalid-select{
		margin-top: 25px;
		.radio-group{
			display: block;
		}
	}
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
import radioGroupBtn from '@/components/ai-ui/radio-group-btn/index.vue'
export default {
	components:{copyright,radioGroupBtn},
	onLoad() {
		
	},
	data() {
		return {
			initParams:{
				phone:"",
			},
			current:"",
			items: [
				{value: '1',name: '手机号码为空,错号,无法接通'},
				{value: '2',name: '连续拨打2天，每天早中晚3次，客户未接听'},
				{value: '3',name: '同行恶意植入'},
			],
		}
	},
	methods: {
		save:function(){
			
		},
		stepClick:function(item){
			this.active=item.index;
		}
	}
}
</script>

