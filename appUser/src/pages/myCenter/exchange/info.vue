<template>
	<view class="content bgfff">
		<view class="box-shadow-card">
			<view class="mb5">
				<image src="/static/images/slide.jpg" class="card-box-img" mode="widthFix"></image>
			</view>
			<view class="flex pd5">
				<text>华为 MET30</text>
				<text>99积分</text>
			</view>
		</view>
		<view>
			<view class="input"><input :value="initParams.phone" placeholder="收件人姓名" placeholder-style="color:#999;"/></view>
		</view>
		<view>
			<button type="warn" style="background:#FF8000;" hover-class="warn-hover">积分兑换</button>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.box-shadow-card{
		width: 50%;
		margin: 0 auto 15px auto;
		.card-box-img{
			width: 100%;
			height: 100px;
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

