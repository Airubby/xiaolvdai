<template>
	<view class="content bgf5">
		<view class="info" v-if="show">
			<text>您暂时还没有申请：</text>
			<navigator url="/pages/home/index">
				<button type="primary" @click="select()" style="background:#40a563;" hover-class="primary-hover">马上选择贷款产品</button>
			</navigator>
		</view>
		<view v-if="!show">
			<view class="bgfff sort-box">
				<view class="apply-top">
					<view class="color mb5">
						<text>平安银行成都分行</text>
						<text class="line">|</text>
						<text>公积金贷</text>
					</view>
				</view>
				<view class="flex sort-box-top">
					<view class="sort-box-left">
						<image src="/static/images/manager.png" class="sort-box-img" mode="widthFix"></image>
						<text class="sort-box-img-info">已实名</text>
					</view>
					<view class="sort-box-right">
						<view>信贷经理：010101<text class="ml15">获赞次数:252</text></view>
						<view>联系电话：<text>152****3615</text></view>
						<view class="mb5">所属机构：四川多维外包服务有限公司</view>
					</view>
				</view>
				<view>
					<ai-steps activeColor="#40A563" :options="list" :active="active"></ai-steps>
				</view>
				<view class="flex">
					<button type="primary" class="apply-btn" @click="select()" style="background:#40a563;" hover-class="primary-hover">服务好,赞</button>
					<button type="warn" class="apply-btn" @click="select()" style="background:#FF8000;" hover-class="warn-hover">发起投诉</button>
				</view>
			</view>
			<view class="bgfff sort-box">
				<view class="apply-top">
					<view class="color mb5">
						<text>平安银行成都分行</text>
						<text class="line">|</text>
						<text>公积金贷</text>
					</view>
				</view>
				<view class="flex sort-box-top">
					<view class="sort-box-left">
						<image src="/static/images/manager.png" class="sort-box-img" mode="widthFix"></image>
						<text class="sort-box-img-info">已实名</text>
					</view>
					<view class="sort-box-right">
						<view>信贷经理：010101<text class="ml15">获赞次数:252</text></view>
						<view>联系电话：<text>152****3615</text></view>
						<view class="mb5">所属机构：四川多维外包服务有限公司</view>
					</view>
				</view>
				<view>
					<ai-steps activeColor="#40A563" :options="list" :active="3"></ai-steps>
				</view>
				<view class="flex">
					<button type="primary" class="apply-btn" @click="select()" style="background:#40a563;" hover-class="primary-hover">服务好,赞</button>
					<button type="warn" class="apply-btn" @click="select()" style="background:#FF8000;" hover-class="warn-hover">发起投诉</button>
				</view>
			</view>
			<view class="bgfff sort-box">
				<view class="apply-top">
					<view class="color mb5">
						<text>平安银行成都分行</text>
						<text class="line">|</text>
						<text>公积金贷</text>
					</view>
				</view>
				<view class="flex sort-box-top">
					<view class="sort-box-left">
						<image src="/static/images/manager.png" class="sort-box-img" mode="widthFix"></image>
						<text class="sort-box-img-info">已实名</text>
					</view>
					<view class="sort-box-right">
						<view>信贷经理：010101<text class="ml15">获赞次数:252</text></view>
						<view>联系电话：<text>152****3615</text></view>
						<view class="mb5">所属机构：四川多维外包服务有限公司</view>
					</view>
				</view>
				<view>
					<ai-steps activeColor="#40A563" :options="list" :active="2"></ai-steps>
				</view>
				<view class="flex">
					<button type="primary" class="apply-btn" @click="select()" style="background:#40a563;" hover-class="primary-hover">服务好,赞</button>
					<button type="warn" class="apply-btn" @click="select()" style="background:#FF8000;" hover-class="warn-hover">发起投诉</button>
				</view>
			</view>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.info{
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		padding: 20px;
	}
	.apply-top{
		padding: 20px 0;
	}
	.sort-box .sort-box-right{
		padding-top: 10px;
	}	
	.apply-btn{
		width: calc(50% - 5px);
		margin: 15px 0 5px 0;
	}
</style>
<script>
import aiSteps from '@/components/ai-ui/ai-steps/index.vue'
export default {
	components:{aiSteps},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			active:1,
			list:[
				{title:'首电联系'},{title:'资料准备'},{title:'提交审核'},{title:'签订协议'},{title:'放款成功'}
			],
			list1:[
				{title:'首电联系'},{title:'资料准备'},{title:'提交审核'},{title:'签订协议'},{title:'放款成功'}
			]
		}
	},
	methods: {
		select:function(){

		}
	}
}
</script>

