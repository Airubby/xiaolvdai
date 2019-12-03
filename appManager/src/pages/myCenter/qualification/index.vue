<template>
	<view class="bgfff">
        <view class="index-detail-box bgf5">
            <view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>资质认证是为了核实信贷经理的身份真实性，保证产品的有效性通过后，才允许发布相关产品。</text>
            </view>
			<view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>审核通过后，可获得小驴贷30个基础“赞”！</text>
            </view>
			<view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>您的注册手机号码将作为您的业务联系号码，在客户申请您的产品后，我们会向该客户公开！</text>
            </view>
        </view>
		<view class="pd15">
			<view class="color mb10">手持身份证上传</view>
			<view class="upload-img mb5">
				<ai-upload-image v-model="imgUrl" action="127.0.0.1" @success="success" @fail="fail"></ai-upload-image>
			</view>
			<text class="ocolor">请务必保障身份证号码与人脸清晰可识别，否则会影响审核结果！</text>
			<view class="color mb10 mt25">请填写机构名称</view>
			<view class="search-input width-auto mb5"><input :value="initParams.code" placeholder="请填写机构名称" placeholder-style="color:#999;"/></view>
			<view class="color mb10 mt25">工作证明文件上传</view>
			<view class="upload-img mb10">
				<ai-upload-image v-model="imgUrl" action="127.0.0.1" @success="success" @fail="fail"></ai-upload-image>
			</view>
			<view class="upload-img mb5">
				<ai-upload-image v-model="imgUrl" action="127.0.0.1" @success="success" @fail="fail"></ai-upload-image>
			</view>
			<text class="ocolor">请提交两种包含但不限于名片、工作证、劳动合同、带公章的工作证明等证明文件！</text>
			<view class="mt25">
				<button type="primary" class="font-size16" style="background:#40a563;" hover-class="primary-hover" @tap="save">提交审核</button>
			</view>
		</view>
    </view>
</template>
<style lang="less" scoped>
	.index-detail-box{
		padding:10px 15px 10px 8px;
	}
	.upload-img{
		width:100%;
		height:120px;
	}
</style>
<script>
import aiUploadImage from '@/components/ai-ui/ai-upload-image/index.vue'
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright,aiUploadImage},
	onLoad() {
		
	},
	data() {
		return {
			initParams:{
				psword:"",
				code:"",
			},
			imgUrl:"/static/images/user.png",
		}
	},
	methods: {
		success:function(){
			
		},
		fail:function(){

		}
	}
}
</script>

