<template>
	<view class="content bgfff">
		<view class="bgf5 text-center realname-top">(平台仅提供正规金融机构产品信息)</view>
		<view class="pd15">
			<view class="ocolor" style="margin: 15px 0 30px 0">
				实名认证是为了核实用户的真实性，有利于贷款办理。认证成功后，可获得小驴贷款10用户积分！
			</view>
			<view class="input">
				<input :value="initParams.name" placeholder="真实姓名" placeholder-style="color:#999;"/>
			</view>
			<view class="input">
				<input :value="initParams.code" placeholder="身份证号" placeholder-style="color:#999;"/>
			</view>
			<button type="primary" class="mt25" style="background:#40a563;" hover-class="primary-hover" @tap="sure">提交认证</button>
		</view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	.realname-top{
		padding: 10px 0;
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
				name:"",
				code:""
			}
		}
	},
	methods: {
		sure:function(){

		}
	}
}
</script>

