<template>
	<div class="content">
		<div class="main-top color40A563">
			<div class="main-top-info"><span>首页</span><em class="separate">/</em><span>用户登录</span></div>
		</div>
		<div class="main-center" style="margin-top:100px;">
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="100px">
				<el-row :gutter="20">
					<el-col :span="14" :offset="6" style="margin-bottom:35px;">
						<el-button-group style="width:100%;">
							<el-button :type="flag?'success':''" :class="{'success':flag}" class="changebtn" size="medium" style="width:50%;" @click="change('true')">密码登录</el-button>
							<el-button :type="!flag?'success':''" :class="{'success':!flag}" class="changebtn" size="medium" style="width:50%;" @click="change('false')">验证码登录</el-button>
						</el-button-group>
					</el-col>
					<el-col :span="15" :offset="4">
						<el-form-item prop="phone" label="手机号">
							<el-input v-model="initParams.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="15" :offset="4" v-show="!flag">
						<el-form-item prop="code" label="验证码">
							<el-input v-model="initParams.code" style="width:calc(100% - 130px)"></el-input>
							<el-button type="success" class="fr" @click="getCode">发送验证码</el-button>
						</el-form-item>
					</el-col>
					<el-col :span="15" :offset="4" v-show="flag">
						<el-form-item prop="psword" label="密码">
							<el-input v-model="initParams.psword"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="6" class="mb15">
						<el-button type="success" size="medium" class="form-submit" @click="submitForm()" @keydown="keyLogin($event)">登 录</el-button>
					</el-col>
					<el-col :span="14" :offset="6">
						<div class="text-center color999 font12">小驴科技 人人享融</div>
					</el-col>
				</el-row>
			</el-form>
		</div>
    </div>
</template>

<script>
export default {
	components:{},
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
			flag:false,
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
		change:function(flag){
			if(flag=='true'){
				if(!this.flag){
					this.flag=true;
				}
			}else{
				if(this.flag){
					this.flag=false;
				}
			}
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
					this.$r.post('/login', this.initParams, r => {
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
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>