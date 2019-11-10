<template>
	<div class="content prelative" v-loading="loading">
		<div class="login">
			<div class="login-top"><img src="images/loginTop.png"></div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="0px" class="form-noborder">
				<el-row :gutter="20">
					<el-col :span="14" :offset="5" style="margin-bottom:35px;">
						<el-button-group style="width:100%;">
							<el-button :type="flag?'primary':''" :class="{'primary':flag}" class="changebtn none-radius" size="medium" style="width:50%;" @click="change('true')">密码登录</el-button>
							<el-button :type="!flag?'primary':''" :class="{'primary':!flag}" class="changebtn none-radius" size="medium" style="width:50%;" @click="change('false')">验证码登录</el-button>
						</el-button-group>
					</el-col>
					<el-col :span="14" :offset="5">
						<el-form-item label="" prop="phone" class="form-bborder">
							<el-input v-model="initParams.phone" placeholder="手机号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5" v-if="!flag">
						<el-form-item label="" prop="code" class="form-bborder pdb10">
							<el-input v-model="initParams.code" style="width:calc(100% - 130px)" placeholder="验证码"></el-input>
							<el-button type="warning" class="fr" @click="getCode">发送验证码</el-button>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="5" v-if="flag">
						<el-form-item label="" prop="psword" class="form-bborder">
							<el-input v-model="initParams.psword" placeholder="密码" type="password"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12" :offset="6" class="mt20 mr10">
						<el-button type="primary" size="medium" class="content form-submit" @click="submitForm()">登 录</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
    </div>
</template>

<script>
import routerLoading from "@/views/mixin/routerLoading"
export default {
	mixins:[routerLoading],
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
				phone:"",
				code:"",
				psword:""
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
			console.log(ev)
			if(ev.keyCode == 13){
				this.submitForm();
			}
		},
		submitForm:function(){
			this.$refs['ValidateForm'].validate((valid) => {
				if(valid){
					this.loading=true;
					this.$r.post('/login', this.initParams, r => {
						this.loading=false;
						this.$message.success("登录成功");
						let token=this.$tool.Encrypt(r.token+"_"+this.initParams.phone);
						sessionStorage.token=token
						this.$store.dispatch('setToken',token);
						this.$router.push({path:'/myCenter'})
					});
				}
			});
		},
		submitRegist:function(){
			this.$router.push({path:'/register'})
		},
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>