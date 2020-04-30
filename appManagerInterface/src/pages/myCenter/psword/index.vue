<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="ocolor" style="margin: 15px 0 30px 0">
				<view>设置的密码必须介于6到15个字符之间,包含字母和数字</view>
				<view>短信验证码将发送至您注册的手机号{{initParams.mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}</view>
			</view>
			<ai-input v-model="initParams.password" placeholder="请输入新密码" placeholderStyle="color:#999;"></ai-input>
			<ai-input v-model="initParams.smsCode" placeholder="请输入验证码" placeholderStyle="color:#999;">
				<button type="primary" size="mini" class="input-button" hover-class="primary-hover" @click="getCode">获取验证码</button>
			</ai-input>
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
		this.getInfo();
	},
	data() {
		return {
			initParams:{
				mobile:"",
				password:"",
				smsCode:""
			}
		}
	},
	methods: {
		getInfo:function(){
			this.$r.get("/manager/my",{},r=>{
				this.initParams.mobile=r.mobile;
			});
			
		},
		getCode:function(){
			console.log("获取验证码")
			//type:register login password
			if(this.initParams.mobile){
				this.$r.post('/sms/send?mobile='+this.initParams.mobile+"&type=password", {}, r => {
					console.log(r);
					uni.showToast({
						icon: 'none',
						title: '验证码发送成功，请注意查收！'
					});
				});
			}else{
				uni.showToast({
					icon: 'none',
					title: '手机信息获取失败，请重新登录！'
				});
			}
		},
		resetPsword:function(){
			if(this.initParams.password==""){
				uni.showToast({
					icon: 'none',
					title: '请输入密码！'
				});
				return;
			}else{
				let pw=this.initParams.password;
				if(!(/[a-zA-Z]/.test(pw) && /[0-9]/.test(pw) && pw.length>6 && pw.length<16)){
					uni.showToast({
						icon: 'none',
						title: '密码格式错误！'
					});
					return;
				}
			}
			if(this.initParams.smsCode==""){
				uni.showToast({
					icon: 'none',
					title: '请输入验证码！'
				});
				return;
			}
			this.$r.post('/user/password/change?password='+this.initParams.password+'&smsCode='+this.initParams.smsCode, {}, r => {
				uni.showToast({title: '密码修改成功！'});
			});
			
		}
	}
}
</script>

