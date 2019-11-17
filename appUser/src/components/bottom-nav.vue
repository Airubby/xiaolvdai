<template>
	<view class="bottom-nav">
		<view class="bottom-nav-con" v-if="type=='0'">
			<navigator url="/pages/register/index" class="bottom-nav-box">注 册</navigator>
			<navigator url="/pages/login/index" class="bottom-nav-box">登 录</navigator>
		</view>
		<view class="bottom-nav-con" v-if="type=='1'">
			<text v-if="Info=='home'" class="bottom-nav-box disabled-nav">产品搜索</text>
			<navigator url="/pages/home/index" class="bottom-nav-box" v-else>产品搜索</navigator>
			<text class="bottom-nav-box" v-if="Info=='center'" @click="outLogin">退出登录</text>
			<navigator url="/pages/myCenter/index" class="bottom-nav-box" v-else>个人中心</navigator>
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
		color: #fff;
		background: #40a563;
		.bottom-nav-con{
			width: 100%;
			display: flex;
        	justify-content: space-between;
		}
        .bottom-nav-box{
            width: 50%;
            text-align: center;
            &:nth-of-type(1){
                border-right: 1px solid #fff;
            }
		}
		.disabled-nav{
			background: #999;
		}
    }
</style>

<script>
	export default {
		components:{},
		props:["Info"],
		onLoad() {
			console.log(11)
		},
		created(){
			if(sessionStorage.getItem("userInfo")){
				this.type='1';
			}
			console.log(2)
		},
		data() {
			return {
				type:'0' //1 登录了，0 没登录
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
							sessionStorage.setItem("userInfo","");
							uni.showToast({
								icon: 'none',
								title: '退出成功！'
							});
							uni.navigateTo({url: "/pages/home/index"})
							
                        }
                    }
                });
				
				
			}
		}
	}
</script>

