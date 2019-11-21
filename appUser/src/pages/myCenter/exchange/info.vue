<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="box-shadow-card">
				<view class="mb5">
					<image src="/static/images/slide.jpg" class="card-box-img" mode="widthFix"></image>
				</view>
				<view class="flex pd5">
					<text>华为 MET30</text>
					<text>99积分</text>
				</view>
			</view>
			<view style="margin-top: 25px; border-top:1px solid #DCDFE6;padding-top:15px;">
				<view class="input"><input :value="initParams.phone" placeholder="收件人姓名" placeholder-style="color:#999;"/></view>
				<view class="input"><input :value="initParams.phone" placeholder="收件人电话" placeholder-style="color:#999;"/></view>
				<view class="input"><input :value="initParams.phone" placeholder="收件人地址" placeholder-style="color:#999;"/></view>
			</view>
			<view>
				<button type="warn" style="background:#FF8000;" hover-class="warn-hover" class="mt25">确认兑换</button>
			</view>
		</view>
		<view class="bottomnav-placeholder"></view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	.box-shadow-card{
		width: 60%;
		margin:  15px auto;
		.card-box-img{
			width: 100%;
			min-height: 150px;
		}
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
			initParams:{
				phone:'',
				psword:'',
				code:''
			},
		}
	},
	methods: {
		
	}
}
</script>

