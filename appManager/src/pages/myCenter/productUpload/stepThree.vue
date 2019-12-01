<template>
	<view class="content bgf5">
		<view class="bgfff">
			<view class="index-detail-box pd15">
				<view class="index-detail-box-con">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>您也可以PC端发布产品www.xiaolvdai.net</text>
				</view>
			</view>
		</view>
		<view class="approve-info" v-if="show">
			<text>您还未资质认证，无法上传产品！</text>
			<navigator url="/pages/myCenter/qualification/index">
				<button type="primary" style="background:#40a563;" hover-class="primary-hover">资质认证</button>
			</navigator>
		</view>
		<view>

		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			initParams:{
				psword:"",
				code:""
			}
		}
	},
	methods: {
		resetPsword:function(){
			uni.showToast({
				icon: 'none',
				title: '密码修改成功！'
			});
		}
	}
}
</script>

