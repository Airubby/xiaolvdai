<template>
	<view class="content bgfff">
		<top-info></top-info>
		<view class="pd15">
			<view class="color mb10">请填写产品放款额度</view>
			<view class="flex mb10 input-info">
				<view class="title">最低额度 </view>
				<view class="search-input"><input :value="initParams.code" placeholder="请填写最低额度" placeholder-style="color:#999;"/></view>
				<view class="color999">万元</view>
			</view>
			<view class="flex mb10 input-info">
				<view class="title">最高额度 </view>
				<view class="search-input"><input :value="initParams.code" placeholder="请填写最高额度" placeholder-style="color:#999;"/></view>
				<view class="color999">万元</view>
			</view>
			<view class="mt25 color mb10">请填写产品月利率</view>
			<view class="flex mb10 input-info">
				<view class="title">最低月利率</view>
				<view class="search-input"><input :value="initParams.code" placeholder="请填写最低月利率" placeholder-style="color:#999;"/></view>
				<view class="color999">%</view>
			</view>
			<view class="flex mb10 input-info">
				<view class="title">最高月利率</view>
				<view class="search-input"><input :value="initParams.code" placeholder="请填写最高月利率" placeholder-style="color:#999;"/></view>
				<view class="color999">%</view>
			</view>
			<view class="mt25 color mb10">请选择产品可做期限(可多选)</view>
			<view>
				<checkbox-group-btn :items="items" v-model="current"></checkbox-group-btn>
			</view>
			<view class="flex apply-btn">
				<view class="apply-btn-two">
					<button type="warn" class="font-size16" style="background:#FF8000;" hover-class="warn-hover" @tap="preve">上一步</button>
				</view>
				<view class="apply-btn-two">
					<button type="primary" class="font-size16" style="background:#40a563;" hover-class="primary-hover" @tap="next">下一步</button>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	.input-info{
		line-height: 32px;
		.title{
			width: 85px;
		}
		.color999{
			width: 30px;
		}
		.search-input{
			width: calc(100% - 140px);
		}
	}
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
import topInfo from './components/top-info.vue'
import checkboxGroupBtn from '@/components/ai-ui/checkbox-group-btn/index.vue'
export default {
	components:{copyright,topInfo,checkboxGroupBtn},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			initParams:{
				psword:"",
				code:""
			},
			current:[],
			items: [
				{id: 1,name: '1期'},
				{id: 2,name: '3期'},
				{id: 3,name: '6期'},
				{id: '4',name: '12期'},
				{id: '5',name: '24期'},
				{id: '6',name: '36期'},
				{id: '7',name: '48期'},
				{id: '8',name: '60期'},
				{id: '9',name: '120期'},
				{id: '10',name: '180期'},
				{id: '11',name: '240期'},
				{id: '12',name: '360期'},
			],
		}
	},
	methods: {
		preve:function(){
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/index'
			});
		},
		next:function(){
			console.log(this.current)
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/stepThree'
			});
		}
	}
}
</script>

