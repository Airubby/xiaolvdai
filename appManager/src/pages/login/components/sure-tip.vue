<template>
	<uni-popup ref="popup" :type="'center'" :custom="true" :mask-click="false" @change="change">
        <view class="uni-tip">
            <view class="uni-tip-title">{{title}}</view>
            <view class="uni-tip-content">{{content}}</view>
            <view class="uni-tip-group-button">
                <view class="uni-tip-button" @click="close()">产品搜索</view>
                <view class="uni-tip-button" @click="sure()">个人中心</view>
            </view>
        </view>
    </uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
        },
        props: {
            title: {
				type: String,
				default: "提示"
            },
            content: {
				type: String,
				default: "登录成功，请选择相应的跳转页面"
            },
        },
		data() {
			return {
				
			}
		},
		methods: {
			change:function(e){
                console.log(e)
            },
            close:function(){
                uni.navigateTo({url: "/pages/home/index"})
				this.$refs['popup'].close();
			},
			open:function(){
				this.$refs['popup'].open();
			},
			sure:function(){
                uni.navigateTo({url: "/pages/myCenter/index"})
				this.$refs['popup'].close();
			}
		}
	}
</script>

<style>
	.uni-tip {
		padding: 15px;
		width: 300px;
		margin: 0 auto;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}

	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}

	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
