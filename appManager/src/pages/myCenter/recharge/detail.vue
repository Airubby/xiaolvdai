<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="search">
				<view class="search-input"><input :value="initParams.date" placeholder="选择日期" placeholder-style="color:#999;" @tap="onShowDatePicker"/></view>
				<view class="search-btn">
					<button type="primary" style="background:#40a563;" @tap="sure" hover-class="primary-hover">搜 索</button>
				</view>
			</view>
			<view class="list">
				<view class="list-box">
					<view class="flex mb5">
						<text>邀请奖励</text>
						<text class="ocolor">+50</text>
					</view>
					<view class="flex">
						<text >YQJL234242535343</text>
						<text class="">2019-10-12 12:30</text>
					</view>
				</view>
				<view class="list-box">
					<view class="flex mb5">
						<text>邀请奖励</text>
						<text class="color">-50</text>
					</view>
					<view class="flex">
						<text >YQJL234242535343</text>
						<text class="">2019-10-12 12:30</text>
					</view>
				</view>
				<view class="list-box">
					<view class="flex mb5">
						<text>邀请奖励</text>
						<text class="ocolor">+50</text>
					</view>
					<view class="flex">
						<text >YQJL234242535343</text>
						<text class="">2019-10-12 12:30</text>
					</view>
				</view>
			</view>
		</view>
		<ai-date-picker 
		:show="dateInfo.showPicker" 
		type="range" 
		format="yyyy-mm-dd"
		:value="dateInfo.value" 
		:show-tips="true" 
		:begin-text="'开始日期'" 
		:end-text="'结束日期'" 
		:show-seconds="true" 
		@confirm="onSelected" 
		@cancel="dateInfo.showPicker=false" />
    </view>
</template>
<style lang="less" scoped>
	
	.list-box{
		border-bottom: 1px solid #dcdfe6;
		padding: 10px 0;
	}
</style>
<script>
import aiDatePicker from '@/components/ai-ui/ai-date-picker/index.vue' 
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright,aiDatePicker},
	onLoad() {
		
	},
	data() {
		return {
			initParams:{
				date:""
			},
			dateInfo:{
				showPicker: false,
				value: []
			},
		}
	},
	methods: {
		onSelected:function(e){
			this.dateInfo.showPicker = false;
			if(e) {
				this.dateInfo.value=e.value;
				this.initParams.date=e.value[0]+"-"+e.value[1];
			}
			console.log(this.dateInfo.value)
		},
		onShowDatePicker:function(){
			this.dateInfo.showPicker=true;
			this.dateInfo.value = this.showdate;
		}
	}
}
</script>

