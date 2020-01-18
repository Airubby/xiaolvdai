<template>
	<view class="content bgfff">
		<login-top></login-top>
		<view class="pd15">
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" styleType="button" activeColor="#40a563"></uni-segmented-control>
			</view>
			<view style="margin-top: 30px;">
				<ai-input v-model="initParams.phone" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="current === 0" v-model="initParams.psword" placeholder="请输密码" type="password" placeholderStyle="color:#999;"></ai-input>
				<ai-input v-if="current === 1" v-model="initParams.psword" placeholder="请验证码" placeholderStyle="color:#999;">
					<button type="primary" size="mini" 
						style="background:#40a563;width:105px;height:35px;line-height:35px;margin:0" class="input-button" hover-class="primary-hover">获取验证码</button>
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
				phone:'',
				psword:'',
				code:''
			},
		}
	},
	methods: {
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},
		loginFn:function(){
			console.log(this.initParams)
			uni.showToast({
				icon: 'none',
				title: '登录成功！'
			});
			setTimeout(function() {
				uni.setStorage({
					key: 'userLoginInfo',
					data: 'userid',
					success: function () {
						store.dispatch('app/setStatus',true);
						uni.redirectTo({url: "/pages/myCenter/index"});
					}
				});
			}, 1000)
			
		}
	}
}
</script>

