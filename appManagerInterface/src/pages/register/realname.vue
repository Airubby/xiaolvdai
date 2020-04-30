<template>
	<view class="content bgfff">
		<login-top></login-top>
		<view class="pd15">
			<view class="color relaname-top">信贷经理-实名认证</view>
			<view class="index-detail-box">
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>实名认证是核实信贷经理的真实性，确保发布产品的有效性。</text>
				</view>
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>完成实名认证可获得20个基础“赞”！</text>
				</view>
			</view>
			<view class="mt25">
				<view class="input"><input :value="initParams.phone" placeholder="真实姓名" placeholder-style="color:#999;"/></view>
				<view class="input"><input :value="initParams.psword" placeholder="身份证号" placeholder-style="color:#999;"/></view>
				<button type="warn" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="sure">提交认证</button>
			</view>
		</view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	.relaname-top{
		text-indent: 22px;
		font-weight: bold;
		margin: 15px 0 20px 0;
	}
</style>
<script>
import store from '@/store/index'
import copyright from '@/components/bottom-copyright.vue'
import loginTop from '@/components/login-top.vue'
export default {
	components:{copyright,loginTop},
	onLoad() {
		
	},
	data() {
		return {
			inputButton:{
				width: "105px",
				height: "35px",
				lineHeight: "35px",
				margin: "0",
				background:"#40a563"
			},
			check:false,
			initParams:{
				phone:'',
				psword:'',
				code:''
			},
		}
	},
	methods: {
		policyFn:function(){
			this.$refs['policy'].open();
		},
		agreementFn:function(){
			this.$refs['agreement'].open();
		},
		sure:function(){
			uni.showToast({
				icon: 'none',
				title: '认证成功！'
			});
			setTimeout(function() {
				uni.setStorage({
					key: 'userLoginInfo',
					data: 'userid',
					success: function () {
						store.dispatch('setStatus',true);
						uni.redirectTo({url: "/pages/myCenter/index"});
					}
				});
			}, 1000)
			
		}
	}
}
</script>

