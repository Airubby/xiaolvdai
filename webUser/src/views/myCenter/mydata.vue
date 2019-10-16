<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="info-box mb15">
				<p>通过您的资料，我们会定期通过数据库为您匹配推荐融资成本更低的产品，资料越完善，越能保证精准，使您的利益最大化，我们也会通过技术手段和严格的内部管理制度，保证您的隐私！</p>
			</div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
				<el-row :gutter="10" class="mb15">
					<el-col :span="24">
						<el-form-item label="基础资料" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="手机号码:" style="margin-bottom:0;">
							{{initParams.phone}}
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="您的姓名:" style="width:200px;">
							<el-input v-model="initParams.name" size="mini"></el-input>
						</el-form-item>
						<el-form-item label="性别:">
							<el-radio-group v-model="initParams.sex" size="mini">
								<el-radio label="1" border>先生</el-radio>
								<el-radio label="2" border>女士</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="16">
						<el-form-item label="身份证号:">
							<el-input v-model="initParams.card" size="mini"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="婚姻状况:">
							<el-radio-group v-model="initParams.marriage" size="mini">
								<el-radio label="1" border>无配偶</el-radio>
								<el-radio label="2" border>有配偶</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="子女状况:" class="ml15">
							<el-radio-group v-model="initParams.child" size="mini">
								<el-radio label="1" border>无子女</el-radio>
								<el-radio label="2" border>有子女</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="教育学历:">
							<el-radio-group v-model="initParams.education" size="mini">
								<el-radio label="1" border>本科以下</el-radio>
								<el-radio label="2" border>大学本科</el-radio>
								<el-radio label="3" border>本科以上</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10" class="mb15">
					<el-col :span="24">
						<el-form-item label="工作情况(请上班人群正确点选)" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="工资发放:">
							<el-radio-group v-model="initParams.salary" size="mini">
								<el-radio label="1" border>打卡发放</el-radio>
								<el-radio label="2" border>现金发放</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="月薪收入:" class="ml15">
							<el-radio-group v-model="initParams.monthlySalary" size="mini">
								<el-radio label="1" border>3千以下</el-radio>
								<el-radio label="2" border>3-5千</el-radio>
								<el-radio label="3" border>5千以上</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="社保交纳:">
							<el-radio-group v-model="initParams.social" size="mini">
								<el-radio label="1" border>已交纳</el-radio>
								<el-radio label="2" border>未交纳</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="公积金:" class="ml15">
							<el-radio-group v-model="initParams.accumulation" size="mini">
								<el-radio label="1" border>已交纳</el-radio>
								<el-radio label="2" border>未交纳</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10" class="mb15">
					<el-col :span="24">
						<el-form-item label="经营状况(请经营人群正确点选)" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="主体性质:">
							<el-radio-group v-model="initParams.nature" size="mini">
								<el-radio label="1" border>有限公司</el-radio>
								<el-radio label="2" border>个体工商</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="经营年限:" class="ml15">
							<el-radio-group v-model="initParams.agelimit" size="mini">
								<el-radio label="1" border>1年以内</el-radio>
								<el-radio label="2" border>1-2年</el-radio>
								<el-radio label="3" border>2年以上</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="纳税类型:">
							<el-radio-group v-model="initParams.ratepaying" size="mini">
								<el-radio label="1" border>小规模纳税</el-radio>
								<el-radio label="2" border>一般纳税</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="法人代表:" class="ml15">
							<el-radio-group v-model="initParams.person" size="mini">
								<el-radio label="1" border>本人</el-radio>
								<el-radio label="2" border>非本人</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10" class="mb15">
					<el-col :span="24">
						<el-form-item label="资产佐证" class="form-title" label-width="300px">
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="房屋资产:">
							<el-radio-group v-model="initParams.house" size="mini">
								<el-radio label="1" border>已购买</el-radio>
								<el-radio label="2" border>未购买</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="房产按揭:" class="ml15">
							<el-radio-group v-model="initParams.housetype" size="mini">
								<el-radio label="1" border>全款房</el-radio>
								<el-radio label="2" border>按揭房</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="车辆资产:">
							<el-radio-group v-model="initParams.car" size="mini">
								<el-radio label="1" border>已购买</el-radio>
								<el-radio label="2" border>未购买</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="车辆按揭:" class="ml15">
							<el-radio-group v-model="initParams.cartype" size="mini">
								<el-radio label="1" border>全款房</el-radio>
								<el-radio label="2" border>按揭房</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="商业保险:">
							<el-radio-group v-model="initParams.insurance" size="mini">
								<el-radio label="1" border>已购买</el-radio>
								<el-radio label="2" border>未购买</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="保险角色:" class="ml15">
							<el-radio-group v-model="initParams.insurancetype" size="mini">
								<el-radio label="1" border>投保人</el-radio>
								<el-radio label="2" border>受益人</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="14" class="mb15">
						<el-button type="success" size="medium" style="width:120px;" @click="submitForm()" @keydown="keyLogin($event)">保存修改</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</el-scrollbar>
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
		return {
			flag:false,
			loading:false,
			initParams:{
				phone:"152222222222",
				name:'',
				sex:'',
				card:'',
				marriage:"",
				child:"",
				education:"",
				salary:"",
				monthlySalary:"",
				social:"",
				accumulation:"",
				nature:"",
				agelimit:"",
				ratepaying:"",
				person:"",
				house:"",
				housetype:"",
				car:"",
				cartype:"",
				insurance:"",
				insurancetype:""
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