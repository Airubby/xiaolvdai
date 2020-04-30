<template>
	<view class="content bgfff">
        <!-- <view class="index-detail-box bgf5">
            <view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>资质认证是为了核实信贷经理的身份真实性，保证产品的有效性通过后，才允许发布相关产品。</text>
            </view>
			<view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>审核通过后，可获得小驴优资30个基础“赞”！</text>
            </view>
			<view class="index-detail-box-con">
                <view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
                <text>您的注册手机号码将作为您的业务联系号码，在客户申请您的产品后，我们会向该客户公开！</text>
            </view>
        </view> -->
		<view class="pd15">
			<view v-if="initParams.auditStatus==3">
				<view class="color mb10">驳回理由</view>
				<ai-textarea class="mb5" v-model="rejectedInfo" :disabled="true" placeholderStyle="color:#999;"></ai-textarea>
			</view>
			<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写真实姓名</view>
			<view class="search-input width-auto mb5">
				<ai-input v-model="initParams.managerName" :disabled="initParams.auditStatus==1||initParams.auditStatus==2" placeholder="请填写真实姓名" placeholderStyle="color:#999;"></ai-input>
			</view>
			<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写身份证号</view>
			<view class="search-input width-auto mb5">
				<ai-input v-model="initParams.idCard" :disabled="initParams.auditStatus==1||initParams.auditStatus==2" placeholder="请填写身份证号" placeholderStyle="color:#999;"></ai-input>
			</view>
			<view class="mt25 color mb10"><em class="ocolor mr5">*</em>手持身份证上传</view>
			<view class="mb10" v-if="initParams.auditStatus!=1"> 
				<view class="color999">示例</view>
				<view class="example"><image src="/static/images/user.png" style="width:100%;height:220px;" mode="widthFix"></image></view>
			</view>
			<view class="upload-img mb5">
				<ai-upload-image :src="getIdfile" :header="header" :disabled="initParams.auditStatus==1||initParams.auditStatus==2" :action="$ajaxUrl+'/upload?type=manager'" @success="idsuccess" @fail="fail"></ai-upload-image>
			</view>
			<text class="ocolor">请务必保证身份证号码与人脸清晰可识别！</text>

			<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择服务城市</view>
			<view class="select-box" :class="{'disabled':initParams.auditStatus==1||initParams.auditStatus==2}" @tap="selectCity">
				{{initParams.city}}
			</view>
			<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写机构名称</view>
			<view class="search-input width-auto mb5">
				<ai-input v-model="initParams.companyName" :disabled="initParams.auditStatus==1||initParams.auditStatus==2" placeholder="请填写企业全称" placeholderStyle="color:#999;"></ai-input>
			</view>
			<view class="ocolor">请填写企业全称：例：成都小小金融服务外包公司</view>
			<view class="color mb10 mt25"><em class="ocolor mr5">*</em>工作证明文件上传</view>
			<view class="upload-img mb10">
				<ai-upload-image :src="getWorkfile" :header="header" :disabled="initParams.auditStatus==1||initParams.auditStatus==2" :action="$ajaxUrl+'/upload?type=manager'" @success="success" @fail="fail"></ai-upload-image>
			</view>
			<text class="ocolor">请提交一种包含但不限于名片、工作证、劳动合同、带公章的工作证明等证明文件！</text>
			<view class="mt25" v-if="initParams.auditStatus!=1&&initParams.auditStatus!=2">
				<button type="warn" class="font-size16" style="background:#FF8000;" hover-class="warn-hover" @tap="submitForm">提交审核</button>
			</view>
			<view class="mt25" v-if="initParams.auditStatus==2">
				<button type="warn" class="font-size16" :disabled="initParams.auditStatus==2" style="background:#FF8000;" hover-class="warn-hover">正在审核中...</button>
			</view>
		</view>
		<ai-picker
		mode="region"
		:hideArea="true"
		@confirm="confirm"
		ref="aiPicker">
		</ai-picker>
    </view>
</template>
<style lang="less" scoped>
	.index-detail-box{
		padding:10px 15px 10px 8px;
	}
	.upload-img{
		width:100%;
		height:220px;
	}
	.example{
		border: 1px solid #CCCCCC;
		border-radius: 5px;
		margin-top: 5px;
	}
	.city-input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: #999;
	}
</style>
<script>
import aiUploadImage from '@/components/ai-ui/ai-upload-image/index.vue'
import copyright from '@/components/bottom-copyright.vue'
import aiPicker from '@/components/ai-ui/ai-picker/index.vue'
export default {
	components:{copyright,aiUploadImage,aiPicker},
	onLoad() {
		let _this=this;
		uni.getStorage({
			key: 'token',
			success: function (res) {
				console.log(res)
				_this.header['Authorization']='Bearer '+res.data;
			}
		});
		this.getDetail();
	},
	computed:{
		getIdfile(){
			if(this.loadIdImg){
				return this.initParams.idFile?this.$fileUrl+this.initParams.idFile:"";
			}
		},
		getWorkfile(){
			if(this.loadImg){
				return this.initParams.workFile?this.$fileUrl+this.initParams.workFile:"";
			}
		}
	},
	data() {
		return {
			header:{
				'Authorization':''
			},
			rejectedInfo:"",
			loadImg:true,
			loadIdImg:true,
			initParams:{
				managerName:"",
				idCard:"",
				city:"",
				companyName:"",
				idFile:"",
				workFile:"",
				auditStatus:0,
			},
		}
	},
	methods: {
		getDetail:function(){
			this.$r.get('/managerAudit/my', {}, r => {
				if(r){
					for(let item in this.initParams){
						this.initParams[item]=r[item];
					}
					this.rejectedInfo=r.rejectedInfo;
				}
                
            });
		},
		idsuccess:function(uploadFileRes){
			this.loadIdImg=false;
			let res=JSON.parse(uploadFileRes);
			this.initParams.idFile=res.path;
		},
		success:function(uploadFileRes){
			this.loadImg=false;
			let res=JSON.parse(uploadFileRes);
			this.initParams.workFile=res.path;
		},
		fail:function(uploadFileRes){
			uni.showToast({
				icon: 'none',
				title: uploadFileRes.data
			});
		},
		selectCity:function(){
			if(this.initParams.auditStatus!=1&&this.initParams.auditStatus!=2){
				this.$refs["aiPicker"].show();
			}
		},
		confirm:function(info){
			this.initParams.city=info.checkArr[1];
		},
		submitForm(){
			for(let item in this.initParams){
				if(item==="idFile"&&!this.loadIdImg&&(this.initParams[item]===""||this.initParams[item]===null)){
					uni.showToast({
						icon: 'none',
						title: '请等待身份证明文件上传完成再提交！'
					});
					return;
				}
				if(item==="workFile"&&!this.loadImg&&(this.initParams[item]===""||this.initParams[item]===null)){
					uni.showToast({
						icon: 'none',
						title: '请等待工作证明文件上传完成再提交！'
					});
					return;
				}
				if(this.initParams[item]===""||this.initParams[item]===null){
					uni.showToast({
						icon: 'none',
						title: '请检查下必填项是否填写完整！'
					});
					return;
				}
			}
			let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			if(!reg.test(this.initParams.idCard)){
				uni.showToast({
					icon: 'none',
					title: '请检查身份证是否填写正确！'
				});
				return;
			}
			this.$r.post('/managerAudit/apply?name='+this.initParams.managerName+'&city='+this.initParams.city+
			'&companyName='+this.initParams.companyName+"&idCard="+this.initParams.idCard+"&idFile="+
			this.initParams.idFile+"&workFile="+this.initParams.workFile, {}, r => {
				uni.showToast({
					icon: 'none',
					title: '恭喜，提交成功！我们将在24小时内，完成审核！'
				});
				this.getDetail();
			});
		},
	}
}
</script>

