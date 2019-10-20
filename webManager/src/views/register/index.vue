<template>
	<div class="content">
		<div class="main-top color">
			<div class="main-top-info"><span>首页</span><em class="separate">/</em><span>用户注册</span></div>
		</div>
		<div class="main-center" style="margin-top:100px;">
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="100px">
				<el-row :gutter="20">
					<el-col :span="15" :offset="4">
						<el-form-item prop="phone" label="手机号">
							<el-input v-model="initParams.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="15" :offset="4">
						<el-form-item prop="code" label="验证码">
							<el-input v-model="initParams.code" style="width:calc(100% - 130px)"></el-input>
							<el-button type="primary" class="fr" @click="getCode">发送验证码</el-button>
						</el-form-item>
					</el-col>
					<el-col :span="15" :offset="4">
						<el-form-item prop="psword" label="设置密码">
							<el-input v-model="initParams.psword"></el-input>
							<p class="form-info">设置的密码必须介于6到15个字符之间,包含字母和数字</p>
						</el-form-item>
					</el-col>
					<el-col :span="19" :offset="4" class="mb15">
						<el-checkbox v-model="checked">我已阅读并同意遵守</el-checkbox>
						<a class="color ml5" @click="agreementInfo.visible=true">《小驴贷用户注册协议》</a>
						<a class="color ml5" @click="policyInfo.visible=true">《用户隐私保护政策》</a>
					</el-col>
					<el-col :span="14" :offset="6" class="mb15">
						<el-button type="primary" size="medium" class="form-submit" @click="submitForm()" @keydown="keyLogin($event)">注 册</el-button>
					</el-col>
					<el-col :span="14" :offset="6">
						<div class="text-center color999 font12">小驴科技 人人享融</div>
					</el-col>
				</el-row>
			</el-form>
			<policy v-if="policyInfo.visible" :dialogInfo="policyInfo"></policy>
			<agreement v-if="agreementInfo.visible" :dialogInfo="agreementInfo"></agreement>
		</div>
    </div>
</template>

<script>
import policy from "./components/policy.vue"
import agreement from "./components/agreement.vue"
export default {
	components:{agreement,policy},
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		let checkpassword = (rules, value, callback) => {
			this.$tool.checkPasspord({rules,value,callback});
		};
		let checkPhone = (rules, value, callback) => {
			this.$tool.checkPHONE({rules,value,callback});
		};
		return {
			checked:false,
			loading:false,
			initParams:{
				userid:"",
				code:"",
				psword:""
			},
			rules: {
				phone:[
					{ required: true, trigger: 'change',validator:checkPhone },
				],
				code:[
					{ required: true,  trigger: 'change',message: '验证码不能为空' },
				],
				psword:[
					{ required: true,  trigger: 'blur' ,validator:checkpassword},
				]
			},
			policyInfo:{
				visible:false,
			},
			agreementInfo:{
				visible:false
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
					this.$r.post('/register', this.initParams, r => {
						console.log(r);
						if(r.err_code=="0"){
							this.$message.success(r.err_msg);
							sessionStorage.userid=this.$tool.Encrypt(r.data.roleid);  //刷新页面的时候用userid获取权限问题；
						}else{
							this.initParams.psword="";
							this.$refs.psinput.focus();
							this.$message.error(r.err_msg);
						}
					});
				}
			});
		},
		getAgreement:function(){
			this.agreementInfo.visible=true;
		},
		getPolicy:function(){
			this.policyInfo.visible=true;
		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>