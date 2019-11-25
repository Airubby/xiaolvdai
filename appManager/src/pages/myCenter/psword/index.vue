<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="ocolor" style="margin: 15px 0 30px 0">
				<view>设置的密码必须介于6到15个字符之间,包含字母和数字</view>
				<view>修改密码需短信验证</view>
				<view>短信验证码将发送至您注册的手机号152****3615</view>
			</view>
			<view class="input">
				<input :value="initParams.code" placeholder="新密码" placeholder-style="color:#999;"/>
			</view>
			<view class="input">
				<input :value="initParams.code" placeholder="验证码" placeholder-style="color:#999;"/>
				<button type="primary" size="mini" 
					style="background:#40a563;width:105px;height:35px;line-height:35px;margin:0" class="input-button" hover-class="primary-hover">获取验证码</button>
			</view>
			<button type="warn" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="resetPsword">确认修改</button>
		</view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	
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
				psword:"",
				code:""
			}
		}
	},
	methods: {
		resetPsword:function(){
			uni.showToast({
				icon: 'none',
				title: '密码修改成功！'
			});
		}
	}
}
</script>

