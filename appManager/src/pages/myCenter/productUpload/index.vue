<template>
	<view class="content bgfff">
		<top-info></top-info>
		<view class="pd15">
			<view class="approve-info" v-if="show">
				<text>您还未资质认证，无法上传产品！</text>
				<navigator url="/pages/myCenter/qualification/index">
					<button type="primary" style="background:#40a563;" hover-class="primary-hover">资质认证</button>
				</navigator>
			</view>
			<view v-if="!show">
				<view class="color mb10">请填写产品资方机构</view>
				<view class="search-input width-auto mb5"><input :value="initParams.code" placeholder="请填写产品资方机构" placeholder-style="color:#999;"/></view>
				<view class="color999">
					<view>若您是助贷机构信贷经理，请填写资金方机构名称！</view>
					<view>例：中信银行成都分行|中银消费金融机构</view>
				</view>
				<view class="mt25 color mb10">请选择产品大类</view>
				<view>
					<radio-group-btn :items="items" v-model="current"></radio-group-btn>
				</view>
				<view class="mt25 color mb10">请选择产品分类</view>
				<view>
					<radio-group-btn :items="items1" v-model="current1"></radio-group-btn>
				</view>
				<view class="mt25 color mb10">请选择产品还款方式</view>
				<view>
					<radio-group-btn :items="items2" v-model="current2"></radio-group-btn>
				</view>
				<view class="apply-btn">
					<button type="primary" class="font-size18" style="background:#40a563;" @tap="next" hover-class="primary-hover">下一步</button>
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
import topInfo from './components/top-info.vue'
import radioGroupBtn from '@/components/ai-ui/radio-group-btn/index.vue'
export default {
	components:{copyright,topInfo,radioGroupBtn},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			initParams:{
				psword:"",
				code:""
			},
			current:"",
			items: [
				{value: '1',name: '信用贷款'},
				{value: '2',name: '抵押贷款'},
			],
			current1:"",
			items1: [
				{value: '1',name: '工薪贷款'},
				{value: '2',name: '公积金贷'},
				{value: '3',name: '经营贷款'},
				{value: '4',name: '保单贷款'},
				{value: '5',name: '小微企业信贷'},
				{value: '6',name: '信用卡贷'},
			],
			current2:"",
			items2: [
				{value: '1',name: '先息后本'},
				{value: '2',name: '等额本息'},
				{value: '3',name: '等额本金'},
				{value: '4',name: '随借随还'},
			],
		}
	},
	methods: {
		next:function(){
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/stepTwo'
			});
		}
	}
}
</script>

