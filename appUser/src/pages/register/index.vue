<template>
	<view class="content" style="padding-top:30px;">
		<view class="pd15">
			<view class="input"><input :value="initParams.phone" placeholder="手机号" placeholder-style="color:#999;"/></view>
			<view class="input">
				<input :value="initParams.code" placeholder="验证码" placeholder-style="color:#999;"/>
				<button type="primary" size="mini" class="input-button" :style="inputButton" hover-class="primary-hover">获取验证码</button>
			</view>
			<view class="input"><input :value="initParams.psword" placeholder="设置密码" placeholder-style="color:#999;"/></view>
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
			<button type="warn" class="mt15" style="background:#FF8000;" hover-class="warn-hover">马上注册</button>
		</view>
		<policy :dialogInfo="{title:'用户隐私保护政策'}" ref="policy"></policy>
		<agreement :dialogInfo="{title:'用户注册协议'}" ref="agreement"></agreement>
    </view>
</template>
<style lang="less" scoped>
	.input{
		margin-bottom: 15px;
		border-bottom: 1px solid #DCDFE6;
		display: flex;
		justify-content: space-between;
    	padding-right: 10px;
	}
</style>

<script>
	import policy from './components/policy.vue'
	import agreement from './components/agreement.vue'
	export default {
		components:{policy,agreement},
		onLoad() {
			
		},
		data() {
			return {
				inputButton:{
					width: "105px",
					height: "35px",
					"line-height": "35px",
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
			}
		}
	}
</script>

