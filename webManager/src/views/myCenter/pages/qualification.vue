<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="index-detail-box info-border">
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>资质认证是为了核实信贷经理的身份真实性，保证产品的有效性通过后，才允许发布相关产品。</p>
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>审核通过后，可获得小驴贷30个基础“赞”！</p>
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>您的注册手机号码将作为您的业务联系号码，在客户申请您的产品后，我们会向该客户公开！</p>
			</div>
			<div class="userinfo flex">
				<div>姓名：陈小龙</div>
				<div>身份证号：511602********3912</div>
				<div>联系电话：152******15</div>
			</div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" class="overhidden" label-width="65px">
				<el-row :gutter="40">
					<el-col :span="12">
						<div class="upload-title">手持身份证上传</div>
						<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							ref="upload"
							:on-success="onSuccess"
							:on-error="onError"
							:on-change="onchange"
							:before-upload="beforeUpload"
							:show-file-list="false"
							:file-list="fileList"
							:auto-upload="false">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-col>
					<el-col :span="12">
						<div class="upload-title">示例</div>
						<div class="avatar-uploader">
							<img src="images/user.png" class="avatar">
						</div>
					</el-col>
					<el-col :span="24">
						<div class="upload-info">请务必保障身份证号码与人脸清晰可识别，否则会影响审核结果！</div>
					</el-col>
					<el-col :span="24">
						<div class="select-city">
							选择服务城市：{{currentCity}}<span class="addr addrbtn" @click="cityInfo.visible=true">切换城市</span>
							<baidu-map @ready="handler"></baidu-map>
						</div>
					</el-col>
					<el-col :span="24">
						<el-form-item prop="name" label="机构所属名称" label-width="100px" class="company-name">
							<el-input v-model="initParams.name" style="width:300px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<div class="upload-title">工作证明文件上传</div>
						<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							ref="upload"
							:on-success="onSuccess"
							:on-error="onError"
							:on-change="onchange"
							:before-upload="beforeUpload"
							:show-file-list="false"
							:file-list="fileList"
							:auto-upload="false">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-col>
					<el-col :span="12">
						<div class="upload-title">&nbsp;</div>
						<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							ref="upload"
							:on-success="onSuccess"
							:on-error="onError"
							:on-change="onchange"
							:before-upload="beforeUpload"
							:show-file-list="false"
							:file-list="fileList"
							:auto-upload="false">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-col>
					<el-col :span="24">
						<div class="upload-info">请提交两种包含但不限于名片、工作证、劳动合同、带公章的工作证明等证明文件！</div>
					</el-col>
					<el-col :span="24">
						<div class="approve-btn">
							<el-button type="primary" class="form-submit" size="medium" style="width:200px;" @click="submitForm()">提交审核</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
			<city v-if="cityInfo.visible" :dialog-info="cityInfo" v-on:backInfo="selectCity"></city>
		</div>
	</el-scrollbar>
</template>

<script>
import city from '@/components/citys.vue'
import { mapGetters } from 'vuex'
export default {
	components: {city},
	computed:{
        ...mapGetters({
            currentCity:"LocalCity"
        }),
    },
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		let checkpassword = (rules, value, callback) => {
			this.$tool.checkPasspord({rules,value,callback});
		};
		return {
			loading:false,
			imageUrl: '',
			fileList:[],
			initParams:{
				name:""
			},
			rules: {
				code:[
					{ required: true,  trigger: 'change',message: '验证码不能为空' },
				],
				psword:[
					{ required: true,  trigger: 'blur' ,validator:checkpassword},
				]
			},
			cityInfo:{
                visible:false,
            }
		}
	},
	methods:{
		getCode:function(){
			
		},
		keyLogin:function(ev){
			if(ev.keyCode == 13){
				this.submitForm();
			}
		},
		submitForm:function(){
			this.$refs['ValidateForm'].validate((valid) => {
				if(valid){
					this.loading=true;
					this.$notify.success('恭喜，提交成功！我们将在24小时内，完成审核！');
					
				}
			});
		},
		onSuccess(res, file, fileList){
			this.fileList=[];
			console.log(res,file,fileList)
			this.loading=false;
			if(res.err_code=="0"){
				console.log('上传成功')
			}else{//上传失败
				this.$message.console.error("上传失败");
			}
			
		},
		onError(err, file, fileList){
			this.fileList=[];
			console.log(err,file,fileList)
			this.$message.warning(err);
			
		},
		onchange(file,fileList){
			console.log(file,fileList)
			var fileArry=file.name.split(".");
			var fileType=fileArry[fileArry.length-1];
			if(fileType=="jpg"||fileType=="JPG"||fileType=="PNG"||fileType=="png"){
				this.$refs.upload.submit();
			}else{
				this.fileList=[];
				this.$message.warning("只能上传jpg/png图片");
			}
		},
		beforeUpload(file){
			this.loading=true;
		},
		handler ({BMap, map}) {
            if(this.$store.getters.map){
                let _this = this;
                //地理定位
                // const geolocation = new BMap.Geolocation();
                // geolocation.getCurrentPosition(function getInfo(position){
                //     let city = position.address.city;             //获取城市信息
                //     let province = position.address.province;    //获取省份信息
                //     _this.LocalCity =sessionStorage.city?sessionStorage.city:city;
                // }, function(e) {
                //     _this.LocalCity = "定位失败"
                // }, {provider: 'baidu'});

                //用户ip定位
                let myCity = new BMap.LocalCity();
                myCity.get(function getInfo(result){
                    let cityName = result.name;
                    map.setCenter(cityName);   //关于setCenter()可参考API文档---”传送门“
                    _this.$store.dispatch('setCity',cityName);
                    console.log("map")
                },function(e){
                    _this.$store.dispatch('setCity',"定位失败");
                },{provider: 'baidu'})
                this.$store.dispatch('setMap',false);
            }
        },
        selectCity:function(info){
            this.$store.dispatch('setCity',info);
        },
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>