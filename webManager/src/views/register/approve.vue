<template>
	<div class="content prelative" v-loading="loading">
		<div class="login register">
			<div class="login-top"><img src="images/loginTop.png"></div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="90px">
				<el-row :gutter="20">
					<el-col :span="14" :offset="5" class="mb25">
						<div class="register-title">信贷经理-实名认证</div>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item prop="phone" label="真实姓名">
							<el-input v-model="initParams.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item prop="code" label="身份证号">
							<el-input v-model="initParams.code" style="width:calc(100% - 130px)"></el-input>
							<el-button type="warning" class="fr" @click="getCode">发送验证码</el-button>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5" class="mb15">
						<el-button type="primary" size="medium" class="form-submit" @click="submitForm()" @keydown="keyLogin($event)">提交认证</el-button>
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
import policy from "./components/policy.vue"
import agreement from "./components/agreement.vue"
import collaborate from "./components/collaborate.vue"
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
							if(r.err_code=="0"){
								this.$message.success(r.err_msg);
								sessionStorage.userid=this.$tool.Encrypt(r.data.roleid);  //刷新页面的时候用userid获取权限问题；
							}else{
								this.initParams.psword="";
								this.$refs.psinput.focus();
								this.$message.error(r.err_msg);
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