<template>
	<view class="content bgfff" style="padding-top:30px;">
		<view class="pd15">
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" styleType="button" activeColor="#40a563"></uni-segmented-control>
			</view>
			<view style="margin-top: 30px;">
				<view class="input"><input :value="initParams.phone" placeholder="手机号" placeholder-style="color:#999;"/></view>
				<view class="input" v-if="current === 0" ><input :value="initParams.psword" placeholder="密码" placeholder-style="color:#999;"/></view>
				<view class="input" v-if="current === 1">
					<input :value="initParams.code" placeholder="验证码" placeholder-style="color:#999;"/>
					<button type="primary" size="mini" class="input-button" :style="inputButton" hover-class="primary-hover">获取验证码</button>
				</view>
				<button type="warn" class="mt15" style="background:#FF8000;" hover-class="warn-hover" @tap="loginFn">马上登录</button>
			</view>
		</view>
		<copyright></copyright>
		<sure-tip ref="tip"></sure-tip>
    </view>
</template>
<script>
import store from '@/store/index'
import uniSegmentedControl from '@/components/uni-ui/uni-segmented-control/index.vue'
import copyright from '@/components/bottom-copyright.vue'
import sureTip from './components/sure-tip.vue'
export default {
	components:{uniSegmentedControl,copyright,sureTip},
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
			uni.setStorage({
				key: 'userLoginInfo',
				data: 'userid',
				success: function () {
					store.dispatch('app/setStatus',true);
					uni.navigateTo({url: "/pages/myCenter/index"});
				}
			});
			
		}
	}
}
</script>

