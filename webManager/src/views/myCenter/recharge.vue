<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="account-border color mb25">
				账户充值
			</div>
			<!-- <div class="account-info flex">
				<div class="account-info-box">
					<div class="account-con account-con-border">
						<p>账户余额</p>
						<p><span class="color">125254.00</span>元</p>
					</div>
					<div class="account-con">
						<p>奖励金额总计</p>
						<p><span class="ocolorp">125.00</span>元</p>
					</div>
				</div>
				<div class="account-info-box">
					<div class="account-con">
						<p>可开票金额<a class="color">申请开票</a></p>
						<p><span class="ocolorp">125254.00</span>元</p>
					</div>
				</div>
			</div> -->
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="0px" class="overhidden ValidateForm">
				<el-row :gutter="10" class="mb15">
					<el-col :span="24" class="mb10">
						<el-form-item label="请选择充值金额" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item class="bigradio">
							<el-radio-group v-model="initParams.card" size="medium">
								<el-radio label="1" border class="textradio"><p class="number">200元</p><p class="credits">获200积分</p></el-radio>
								<el-radio label="2" border class="textradio"><p class="number">400元</p><p class="credits">获400积分</p></el-radio>
								<el-radio label="3" border class="textradio"><p class="number">600元</p><p class="credits">获600积分</p></el-radio>
								<el-radio label="4" border class="textradio"><p class="number">800元</p><p class="credits">获800积分</p></el-radio>
								<el-radio label="6" border class="textradio"><p class="number">1000元</p><p class="credits">1000积分</p></el-radio>
								<el-radio label="7" border class="textradio" style="margin-left:0;"><p class="number">2000元</p><p class="credits">获2000积分</p></el-radio>
								<el-radio label="8" border class="textradio"><p class="number">4000元</p><p class="credits">获4000积分</p></el-radio>
								<el-radio label="9" border class="textradio"><p class="number">5000元</p><p class="credits">获5000积分</p></el-radio>
								<el-radio label="10" border class="textradio"><p class="number">10000元</p><p class="credits">获10000积分</p></el-radio>
								<el-radio label="10" border class="textradio"><p class="number">20000元</p><p class="credits">获20000积分</p></el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10" class="mb25">
					<el-col :span="24" class="mb10">
						<el-form-item label="请选择充值方式" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item class="bigradio">
							<el-radio-group v-model="initParams.marriage" size="medium">
								<el-radio label="1" border class="imgradio"><img src="images/zhifubao.png"></el-radio>
								<el-radio label="2" border class="imgradio"><img src="images/weixin.png"></el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="14" class="mb15">
						<el-button type="primary" size="medium" style="width:165px;height:50px;font-size:16px;" @click="submitForm()">立即充值</el-button>
						<el-button type="warning" size="medium" style="width:165px;height:50px;font-size:16px;" @click="cancel()">取 消</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</el-scrollbar>
</template>

<style lang="less" scoped>
	
	.account-info{
		justify-content: space-between;
		padding: 25px 0 15px 0;
		border-bottom: 1px solid #DCDFE6;
		margin-bottom: 30px;
		.account-con{
			padding-right: 20px;
			float: left;
			p{
				margin-bottom: 3px; 
			}
			span{
				font-size: 22px;
				margin-right: 5px;
			}
			a{
				border-left: 1px solid #DCDFE6;
				padding-left: 10px;
				margin-left: 10px; 
			}
			&.account-con-border{
				border-right: 1px solid #DCDFE6;
				margin-right: 20px;
			}
		}
	}
</style>

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
		return {
			flag:false,
			loading:false,
			initParams:{
				card:'1',
				marriage:"",
			},
			rules: {
				
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
					console.log(13123123)
					
				}
			});
		},
		preview:function(){
			this.$router.push({path:'/myCenter/preview'})
		},
		cancel:function(){
			this.$router.go(-1);  
		},
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>