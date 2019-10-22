<template>
	<div class="content prelative" v-loading="loading">
		<div class="login register">
			<div class="login-top"><img src="images/loginTop.png"></div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="90px">
				<el-row :gutter="20">
					<el-col :span="14" :offset="5" class="mb25">
						<div class="register-title">信贷经理注册</div>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item prop="phone" label="手机号">
							<el-input v-model="initParams.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item prop="code" label="验证码">
							<el-input v-model="initParams.code" style="width:calc(100% - 130px)"></el-input>
							<el-button type="warning" class="fr" @click="getCode">发送验证码</el-button>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item prop="psword" label="设置密码">
							<el-input v-model="initParams.psword" type="password"></el-input>
							<p class="form-info">设置的密码必须介于6到15个字符之间,包含字母和数字</p>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item label="邀请码">
							<el-input v-model="initParams.invitecode" style="width:calc(100% - 130px)"></el-input>
							<p class="form-info fr" style="width: 120px;text-align:left;">(非必填)</p>
						</el-form-item>
					</el-col>
					<el-col :span="20" :offset="2" class="mb15">
						<el-checkbox v-model="checked">我已阅读并同意遵守</el-checkbox>
						<a class="color ml5" @click="agreementInfo.visible=true">《信贷经理用户注册协议》</a>
						<a class="color ml5" @click="policyInfo.visible=true">《信贷经理隐私保护政策》</a>
						<a class="color ml5" @click="collaborateInfo.visible=true">《信贷经理合作协议》</a>
					</el-col>
					<el-col :span="14" :offset="5" class="mb15">
						<el-button type="primary" size="medium" class="form-submit" @click="submitForm()" @keydown="keyLogin($event)">注 册</el-button>
					</el-col>
				</el-row>
			</el-form>
			<policy v-if="policyInfo.visible" :dialogInfo="policyInfo"></policy>
			<agreement v-if="agreementInfo.visible" :dialogInfo="agreementInfo"></agreement>
			<collaborate v-if="collaborateInfo.visible" :dialogInfo="collaborateInfo"></collaborate>
		</div>
		<bottom class="login-bottom"></bottom>
    </div>
</template>

<script>
import policy from "@/components/policy.vue"
import agreement from "@/components/agreement.vue"
import collaborate from "@/components/collaborate.vue"
import bottom from "@/components/bottom.vue"
export default {
	components:{agreement,policy,collaborate,bottom},
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
				psword:"",
				invitecode:"",
			},
			rules: {
				phone:[
					{ required: true, trigger: 'blur',validator:checkPhone },
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
			},
			collaborateInfo:{
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
					if(this.checked){
						this.loading=true;
						this.$r.post('/register', this.initParams, r => {
							console.log(r);
							if(r.data){
								this.$router.push({path:'/approve'});
							}
						});
					}else{
						this.$message.warning("请阅读并同意遵守注册协议");
					}
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