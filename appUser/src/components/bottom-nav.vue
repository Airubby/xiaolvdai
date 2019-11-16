<template>
	<view class="bottom-nav">
        <navigator url="/pages/register/index" class="bottom-nav-box">注 册</navigator>
        <navigator url="/pages/login/index" class="bottom-nav-box">登 录</navigator>
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
        display: flex;
        justify-content: space-between;
        .bottom-nav-box{
            width: 50%;
            text-align: center;
            &:nth-of-type(1){
                border-right: 1px solid #fff;
            }
        }
    }
</style>

<script>
	export default {
		components:{},
		onLoad() {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

