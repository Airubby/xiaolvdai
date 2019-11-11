<template>
	<div class="content flex">
		<left-nav></left-nav>
		<div class="right-box">
			<el-scrollbar class="scrollbar">
				<div class="mycenter-pd">
					<div class="index-detail-box info-border">
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>设置的密码必须介于6到15个字符之间,包含字母和数字</p>
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>修改密码需要短信验证,我们将发送短信至您注册的手机号{{initParams.phone}}上</p>
					</div>
					<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="65px">
						<el-row :gutter="20">
							<el-col :span="17">
								<el-form-item prop="psword" label="新密码">
									<el-input v-model="initParams.psword"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="17">
								<el-form-item prop="code" label="验证码">
									<el-input v-model="initParams.code" style="width:calc(100% - 130px)"></el-input>
									<el-button type="primary" class="fr" @click="getCode">发送验证码</el-button>
								</el-form-item>
							</el-col>
							<el-col :span="14" :offset="3" class="mb15">
								<el-button type="primary" size="medium" style="width:200px;" @click="submitForm()" @keydown="keyLogin($event)">确认修改</el-button>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import leftNav from '../mixin/leftNav'
export default {
	mixins:[leftNav],
	components:{},
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
			initParams:{
				phone:"15222222222",
				code:"",
				psword:""
			},
			rules: {
				code:[
					{ required: true,  trigger: 'change',message: '验证码不能为空' },
				],
				psword:[
					{ required: true,  trigger: 'blur' ,validator:checkpassword},
				]
			},
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
					console.log(13123123)
					
				}
			});
		},
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>