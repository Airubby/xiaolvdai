<template>
	<view class="bottom-nav">
		<view class="bottom-nav-con">
			<text class="bottom-nav-box" v-if="Info=='center'" @click="outLogin">退出登录</text>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.bottom-nav{
        width: 100%;
		height: 45px;
		line-height: 45px;
		position: fixed;
		bottom: 0;
		background: #fff;
		z-index: 9;
		color: #40a563;
		.bottom-nav-con{
			width: 100%;
			display: flex;
        	justify-content: space-between;
		}
        .bottom-nav-box{
            width: 100%;
            text-align: center;
		}
		.disabled-nav{
			background: #999;
		}
    }
</style>

<script>
import { mapGetters } from 'vuex'
import store from '@/store/index'
export default {
	components:{},
	props:["Info"],
	computed:{
        ...mapGetters([
            'loginStatus'
        ]),
    },
	onLoad() {
		
	},
	created(){
		let _this=this;
		uni.getStorage({
			key: 'userLoginInfo',
			success: function (res) {
				store.dispatch('app/setStatus',true);
			}
		});
	},
	data() {
		return {
			
		}
	},
	methods: {
		outLogin:function(){
			uni.showModal({
				title: '提示',
				content: '确定退出登录',
				// showCancel:true, //显示取消按钮，默认就为true
				// cancelText:'取消',  //默认就为取消
				// cancelColor:"#000000", //默认 #000000
				// confirmText:'确定',
				confirmColor:'#40a563',
				success: (res) => {
					if (res.confirm) {
						uni.showToast({
							icon: 'none',
							title: '退出成功！'
						});
						setTimeout(function() {
							uni.removeStorage({
								key: 'userLoginInfo',
								success: function (res) {
									store.dispatch('app/setStatus',false);
									uni.reLaunch({url: "/pages/login/index"})
								}
							});
						}, 1000)
						
					}
				}
			});
			
			
		}
	}
}
</script>

