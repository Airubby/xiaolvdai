<template>
	<div class="content flex">
		<left-nav></left-nav>
		<div class="right-box">
			<el-scrollbar class="scrollbar">
				<div class="mycenter-pd">
					<swiper class="mb15"></swiper>
					<!-- <el-alert type="warning" show-icon class="mb15">
						<strong>您还未进行资质认证，无法上传产品！<a @click="infoBtn()" class="color">资质认证</a></strong>
					</el-alert> -->
					<div class="index-detail-box info-border">
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>良好的产品描述有利于客户解读，从而提升获客质量，同时有机会获得客户点“赞”！</p>
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>产品上传会由专业人员进行人工审核，不符合国家法律规定的利率、条件和内容，系统将不允许通过！</p>
					</div>
					<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
						<el-row :gutter="10" class="mb15">
							<el-col :span="24">
								<el-form-item label="基础属性" class="form-title" label-width="300px">
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="产品机构:">
									<el-input v-model="initParams.card" size="mini" style="width:300px;"></el-input>
								</el-form-item>
								<el-form-item label="" label-width="0px">
									<div class="gray-info mb10">
										<p>(若为助贷其它机构产品请更改产品机构！例：中信银行成都分行九眼桥支行)</p>
									</div>
								</el-form-item>
								
							</el-col>
							<el-col :span="24">
								<el-form-item label="产品类型:">
									<el-radio-group v-model="initParams.marriage" size="mini">
										<el-radio label="1" border>信贷产品</el-radio>
										<el-radio label="2" border>抵押产品</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="24" v-if="initParams.marriage=='1'">
								<el-form-item label="信贷产品:">
									<el-radio-group v-model="initParams.child" size="mini">
										<el-radio label="1" border>工薪贷款</el-radio>
										<el-radio label="2" border>公积金贷</el-radio>
										<el-radio label="3" border>保单贷款</el-radio>
										<el-radio label="4" border>经营贷款</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="24" v-if="initParams.marriage=='2'">
								<el-form-item label="抵押产品:">
									<el-radio-group v-model="initParams.education" size="mini">
										<el-radio label="1" border>房屋抵押</el-radio>
										<el-radio label="2" border>房屋二抵</el-radio>
										<el-radio label="3" border>新房按揭</el-radio>
										<el-radio label="4" border>车辆抵押</el-radio>
										<el-radio label="5" border>新车按揭</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="还款方式:">
									<el-radio-group v-model="initParams.salary" size="mini">
										<el-radio label="1" border>先息后本</el-radio>
										<el-radio label="2" border>等额本息</el-radio>
										<el-radio label="3" border>等额本金</el-radio>
										<el-radio label="4" border>随借随还</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="借款期限:">
									<div class="product-deadline">
										<el-radio-group v-model="initParams.salary" size="mini">
											<el-radio label="1" border>1</el-radio>
											<el-radio label="3" border>3</el-radio>
											<el-radio label="4" border>6</el-radio>
											<el-radio label="5" border>12</el-radio>
											<el-radio label="6" border>24</el-radio>
											<el-radio label="7" border>36</el-radio>
											<el-radio label="8" border>48</el-radio>
											<el-radio label="9" border>60</el-radio>
											<el-radio label="10" border>120</el-radio>
											<el-radio label="11" border class="radio-deadline">180</el-radio>
											<el-radio label="12" border>240</el-radio>
											<el-radio label="13" border>360</el-radio>
										</el-radio-group>
										<span class="deadline color">期</span>
									</div>
								</el-form-item>
							</el-col>
							<el-col :span="24" class="flex">
								<el-form-item label="贷款额度:">
									<el-input v-model="initParams.social" size="mini" style="width:130px;"></el-input><span class="ml5">元</span>
								</el-form-item>
								<el-form-item label="~" class="ml15" label-width="15px">
									<el-input v-model="initParams.accumulation" size="mini" style="width:130px;margin-left:10px;"></el-input><span class="ml5">元</span>
								</el-form-item>
							</el-col>
							<el-col :span="24" class="flex">
								<el-form-item label="贷款额度:">
									<el-input v-model="initParams.monthlySalary" size="mini" style="width:130px;"></el-input><span class="ml5" style="margin-right:2px">%</span>
								</el-form-item>
								<el-form-item label="~" class="ml15" label-width="15px">
									<el-input v-model="initParams.nature" size="mini" style="width:130px;margin-left:10px;"></el-input><span class="ml5">%</span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10" class="mb15">
							<el-col :span="24">
								<el-form-item label="申请条件" class="form-title" label-width="300px">
								</el-form-item>
							</el-col>
							<el-col :span="24" class="flex">
								<el-form-item label="" label-width="0px" style="width:100%;">
									<el-input v-model="initParams.agelimit" size="mini" type="textarea" class="text-area"></el-input>
									<div class="gray-info mt10">
										<p>征信要求：近两年内逾期不超过6次，连续逾期不超过3次，且不能有当前逾期或呆账</p>
										<p>年龄要求：年龄在21~55周岁之间的中国公民</p>
										<p>收入要求：月收入3000元以上</p>
										<p>工作单位：本单位连续工作6个月以上</p>
									</div>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10" class="mb15">
							<el-col :span="24">
								<el-form-item label="申请资料" class="form-title" label-width="300px">
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="" label-width="0px" style="width:100%;">
									<el-input v-model="initParams.house" size="mini" type="textarea" class="text-area"></el-input>
									<div class="gray-info mt10">
										<p>借款人身份证复印件</p>
										<p>工作证明（劳动合同复印件或者公司开具的工作证明，加盖公司公章）</p>
										<p>住址证明文件（公用事业缴费单-上个月的水、电、煤气账单任意一张或房产证复印件）</p>
										<p>个人征信报告（报告打印时间近30天内有效）</p>
									</div>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10" class="mb15">
							<el-col :span="24">
								<el-form-item label="附加费用" class="form-title" label-width="300px">
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="" label-width="0px" style="width:100%;">
									<el-input v-model="initParams.housetype" size="mini" type="textarea" class="text-area"></el-input>
									<div class="gray-info mt10">
										<p>履约保险费：贷款金额0.3%</p>
										<p>提前还款违约金：贷款不满6个月的，收取未还金额的3%；贷款6个月-1年之内的，收取未还金额的2%;贷款1年以上的，收取未还金额的1%</p>
										<p>助贷费：实际放款金额的1%</p>
									</div>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="14" class="mb15">
								<el-button type="primary" size="medium" style="width:120px;" @click="submitForm()" @keydown="keyLogin($event)">提交审核</el-button>
								<el-button type="warning" size="medium" style="width:120px;" @click="preview()" @keydown="keyLogin($event)">预 览</el-button>
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
		// this.instance = this.$notify({
		// 	title: '重要通知',
		// 	message: this.alertInfo,
		// 	type: 'warning',
		// 	duration: 0,
		// 	onClick:function(){
		// 		this.close();
		// 	}
		// });
		this.instance=this.$notify({
			title: '提示',
			type: 'warning',
			duration: 0,
			dangerouslyUseHTMLString: true,
			message: '<span class="color">您还未进行资质认证，无法上传产品！</span>',
        });
	},
	destroyed(){
		this.instance.close();
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
			instance:'',
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
					
				}
			});
		},
		preview:function(){
			this.$router.push({path:'/myCenter/preview'})
		},
		infoBtn:function(){
			this.$router.push({path:'/myCenter/qualification'})
		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>