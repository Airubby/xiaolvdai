<template>
	<div id="swiper-container" class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" >
				<div class="flex">
					<strong class="color">今日活动：获赞300以上的信达经理，每条获客可返补5积分！</strong>
				</div>
			</div>
			<div class="swiper-slide" >
				<div class="flex">
					<strong class="mr25">发布日期：2019/02/14</strong>
					<strong class="mr25">城市：成都</strong>
					<strong class="color">今日获客服务费：35积分/条</strong>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.swiper-container{
		width: 100%;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
		background: #F4F4F5;
		border-radius: 3px;
		padding: 0 10px;
	}
</style>
<script>
import Swiper from 'swiper' 
export default {
	components:{},
	created () {
	
  	},
	mounted() {
        new Swiper('#swiper-container', {
			direction: 'vertical',
			autoplay: false,//可选选项，自动滑动
			width: 600,
			height: 40,
            autoplay: {
                delay: 5000,  //设置自动滑动时间就用obj设置参数就可以
            },
            slidesPerView: 'auto',
            spaceBetween: 1,
            slidesPerView: 1,  //显示几个slide
        })
    },
	data(){
		return {
			
		}
	},
	methods:{
		
	},
	watch:{
			
	},
}
</script>
