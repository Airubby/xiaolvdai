<template>
	<view class="content bgfff">
		<login-top></login-top>
		<view class="pd15">
			<view class="input"><input :value="initParams.phone" placeholder="手机号" placeholder-style="color:#999;"/></view>
			<view class="input">
				<input :value="initParams.code" placeholder="验证码" placeholder-style="color:#999;"/>
				<button type="primary" size="mini" 
						style="background:#40a563;width:105px;height:35px;line-height:35px;margin:0" class="input-button" hover-class="primary-hover">获取验证码</button>
			</view>
			<view class="input"><input :value="initParams.psword" placeholder="设置密码" placeholder-style="color:#999;"/></view>
			<view class="input"><input :value="initParams.psword" placeholder="邀请码(选填)" placeholder-style="color:#999;"/></view>
			<view class="mb5">
				<checkbox-group>
                    <label>
                        <checkbox value="xy" :checked="check" color="#40a563" style="transform:scale(0.7)"/>我已阅读并同意遵守
                    </label>
                </checkbox-group>
			</view>
			<view class="color">
				<text @tap="policyFn">《用户隐私保护政策》</text>
				<text @tap="agreementFn">《用户注册协议》</text>
			</view>
			<view class="flex">
				<view class="login-btn">
					<button type="primary" class="mt25 font-size18" style="background:#40a563;" @tap="sure" hover-class="primary-hover">注册</button>
				</view>
				<navigator class="login-btn" url="/pages/login/index">
					<button type="warn" size="" class="mt25 font-size18" style="background:#FF8000;" hover-class="warn-hover">登录</button>
				</navigator>
			</view>
		</view>
		<copyright></copyright>
		<policy :dialogInfo="{title:'用户隐私保护政策'}" ref="policy"></policy>
		<agreement :dialogInfo="{title:'用户注册协议'}" ref="agreement"></agreement>
    </view>
</template>
<script>
import policy from './components/policy.vue'
import agreement from './components/agreement.vue'
import copyright from '@/components/bottom-copyright.vue'
import loginTop from '@/components/login-top.vue'
export default {
	components:{policy,agreement,copyright,loginTop},
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
			uni.navigateTo({url: "/pages/register/realname"});
		}
	}
}
</script>

