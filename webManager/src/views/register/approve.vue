<template>
	<div class="content prelative" v-loading="loading">
		<div class="login register">
			<div class="login-top"><img src="images/loginTop.png"></div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="90px">
				<el-row :gutter="20">
					<el-col :span="14" :offset="5" class="mb25">
						<div class="register-title">信贷经理-实名认证</div>
					</el-col>
					<el-col :span="14" :offset="5" class="mb25">
						<div class="index-detail-box">
							<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>实名认证是为了核实信贷经理的身份真实性，确保发布产品的有效性！</p>
							<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>完成实名认证可获得20个基础“赞”！</p>
						</div>
					</el-col>
					<el-col :span="12" :offset="6">
						<el-form-item prop="name" label="真实姓名">
							<el-input v-model="initParams.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12" :offset="6">
						<el-form-item prop="code" label="身份证号">
							<el-input v-model="initParams.code"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12" :offset="6" class="mb15">
						<el-button type="primary" size="medium" class="form-submit mt25" @click="submitForm()" @keydown="keyLogin($event)">提交认证</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<bottom class="login-bottom"></bottom>
    </div>
</template>

<script>
import bottom from "@/components/bottom.vue"
import routerLoading from "@/views/mixin/routerLoading"
export default {
	components:{bottom},
	mixins:[routerLoading],
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		return {
			loading:false,
			initParams:{
				name:"",
				code:"",
			},
			rules: {
				name:[
					{ required: true, trigger: 'change',message: '姓名不能为空'},
				],
				code:[
					{ required: true,  trigger: 'change',message: '身份证号不能为空' },
				],
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
					this.$r.post('/approve', this.initParams, r => {
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