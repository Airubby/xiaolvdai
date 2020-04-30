<template>
	<view class="content bgfff">
		<login-top></login-top>
		<view class="pd15">
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" styleType="button" activeColor="#40a563"></uni-segmented-control>
			</view>
			<view style="margin-top: 30px;">
				<ai-input v-model="initParams.username" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="current === 0" v-model="initParams.password" placeholder="请输入密码" type="password" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="current===1" v-model="initParams.smsCode" placeholder="请输入验证码" placeholderStyle="color:#999;">
					<button type="primary" size="mini" class="input-button" hover-class="primary-hover" @click="getCode">获取验证码</button>
				</ai-input>
				<view class="flex">
					<view class="login-btn">
						<button type="warn" size="" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover" @tap="loginFn">登录</button>
					</view>
					<navigator class="login-btn" url="/pages/register/index">
						<button type="primary" class="mt25 font-size18" style="background:#40a563;" hover-class="primary-hover">注册</button>
					</navigator>
				</view>
			</view>
		</view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	
</style>
<script>
import store from '@/store/index'
import uniSegmentedControl from '@/components/uni-ui/uni-segmented-control/index.vue'
import copyright from '@/components/bottom-copyright.vue'
import loginTop from '@/components/login-top.vue'
export default {
	components:{uniSegmentedControl,copyright,loginTop},
	onLoad() {
		
	},
	data() {
		return {
			current:0,
			items: [
				'密码登录',
				'验证码登录'
			],
			initParams:{
				password: "",
  				username: "",
				smsCode:''
			},
		}
	},
	methods: {
		getCode:function(){
			console.log("获取验证码")
			//type:register login password
			if(this.initParams.username){
				console.log(this.initParams)
				this.$r.post('/sms/send?mobile='+this.initParams.username+"&type=login", {}, r => {
					console.log(r);
					uni.showToast({
						icon: 'none',
						title: '验证码发送成功，请注意查收！'
					});
				});
			}else{
				this.$notify.warning("请填写手机号");
			}
		},
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},
		loginFn:function(){
			console.log(this.initParams)
			if(this.initParams.username==""){
				uni.showToast({
					icon: 'none',
					title: '请输入手机号！'
				});
				return;
			}else{
				let reg = /^1[345789]\d{9}$/
				if(!reg.test(this.initParams.username)){
					uni.showToast({
						icon: 'none',
						title: '请检查手机号是否正确！'
					});
					return;
				}
			}
			if(this.current==0){
				if(this.initParams.password==""){
					uni.showToast({
						icon: 'none',
						title: '请输入密码！'
					});
					return;
				}
			}else{
				if(this.initParams.smsCode==""){
					uni.showToast({
						icon: 'none',
						title: '请输入验证码！'
					});
					return;
				}
			}
			console.log(this.$store.getters.ajaxUrl)
			this.$r.post("/auth/login",this.initParams,r=>{
				console.log(r)
				if(r.user.status==1){
					uni.showToast({title: '登录成功！'});
					uni.setStorage({
						key: "token",
						data: r.token,
						success: function () {
							store.dispatch('setStatus',true);
							uni.redirectTo({url: "/pages/myCenter/index"});
						}
					});
				}else{
					uni.showToast({title: '账号不存在！'});
				}
				
			});
			
		}
	}
}
</script>

