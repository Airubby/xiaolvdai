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
					良好的进度反馈习惯，获得更多的赞，有利于您的信誉提示！
				</view>
			</view>
			<view>
				<view class="apply-title">更新订单进度</view>
				<view>
					<ai-steps activeColor="#40A563" :options="progress" :active="active" @stepClick="stepClick"></ai-steps>
				</view>
			</view>
			<view class="apply-btn">
				<button type="warn" class="font-size18" style="background:#FF8000;" @tap="save" hover-class="warn-hover">保存进度</button>
			</view>
			<view class="index-detail-box">
				<view class="apply-info-title color">小驴提示：</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>每完成一次进度跟新，可获得系统奖励的一个“赞”，放款成功会获得另外10个“赞”。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>客服人员会向客户进行回访，发现作弊行为将扣除10个“赞”！</text>
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
import aiSteps from '@/components/ai-ui/ai-steps/index.vue'
export default {
	components:{copyright,aiSteps},
	onLoad() {
		
	},
	data() {
		return {
			initParams:{
				phone:"",
			},
			active:1,
			progress: [{
				title: '首电联系'
			}, {
				title: '材料准备'
			}, {
				title: '提交审核'
			}, {
				title: '签订协议'
			}, {
				title: '办理抵押'
			}, {
				title: '放款成功'
			}],
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

