<template>
	<view class="content bgfff">
		<top-info></top-info>
		<view class="pd15">
			<!-- <view class="approve-info" v-if="show">
				<text>您还未资质认证，无法上传产品！</text>
				<navigator url="/pages/myCenter/qualification/index">
					<button type="primary" style="background:#40a563;" hover-class="primary-hover">资质认证</button>
				</navigator>
			</view> -->
			<view v-if="status==3">
				<view class="color mb10">驳回理由</view>
				<ai-textarea class="mb5" v-model="rejectedInfo" :disabled="true" placeholderStyle="color:#999;"></ai-textarea>
			</view>
			<view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择产品资方机构类型</view>
				<view @tap="changeShow('ai-picker0')" class="select-box">
					{{initParams.productCategoryName}}
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写产品资方机构</view>
				<view class="search-input width-auto mb5">
					<ai-input v-model="initParams.productSource" placeholder="请填写产品资方机构" placeholderStyle="color:#999;"></ai-input>
				</view>
				<view class="color999">
					<view>若您是助贷机构信贷经理，请填写资金方机构名称！</view>
					<view>例：中信银行成都分行|中银消费金融机构</view>
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择产品大类</view>
				<view @tap="changeShow('ai-picker1')" class="select-box">
					{{initParams.showloanType}}
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择产品分类</view>
				<view @tap="changeShow('ai-picker2')" class="select-box">
					{{initParams.productTypeName}}
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择产品还款方式</view>
				<view @tap="changeShow('ai-picker3')" class="select-box">
					{{initParams.repaymentName}}
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请选择产品可做期限(可多选)</view>
				<view>
					<checkbox-group-btn :items="LoanPeriod" v-model="initParams.periodList" class="fl">
						<text style="height:28px;line-height:28px;" class="color">期</text>
					</checkbox-group-btn>
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写产品放款额度</view>
				<view class="flex mb10 input-info">
					<view class="title">最低额度 </view>
					<view class="search-input">
						<ai-input v-model="initParams.amountMin" placeholder="请填写最低额度" placeholderStyle="color:#999;"></ai-input>
					</view>
					<view class="color999">万元</view>
				</view>
				<view class="flex mb10 input-info">
					<view class="title">最高额度 </view>
					<view class="search-input">
						<ai-input v-model="initParams.amountMax" placeholder="请填写最高额度" placeholderStyle="color:#999;"></ai-input>
					</view>
					<view class="color999">万元</view>
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写产品月利率</view>
				<view class="flex mb10 input-info">
					<view class="title">最低月利率</view>
					<view class="search-input">
						<ai-input v-model="initParams.rateMin" placeholder="请填写最低月利率" placeholderStyle="color:#999;"></ai-input>
					</view>
					<view class="color999">%</view>
				</view>
				<view class="flex mb10 input-info">
					<view class="title">最高月利率</view>
					<view class="search-input">
						<ai-input v-model="initParams.rateMax" placeholder="请填写最高月利率" placeholderStyle="color:#999;"></ai-input>
					</view>
					<view class="color999">%</view>
				</view>
				<view class="mt25 color mb10"><em class="ocolor mr5">*</em>请填写产品申请条件</view>
				<ai-textarea class="mb5" v-model="initParams.applyCondition" placeholderStyle="color:#999;" placeholder="请参照下方示例填写！每条信息以回车换行"></ai-textarea>
				<view class="color999">
					<view>征信要求：近两年内逾期不超过6次，连续逾期不超过3次，且不能有当前逾期或呆账！</view>
					<view>年龄要求：年龄在21-55周岁之间的公民。</view>
					<view>收入要求：月收入3000以上。</view>
					<view>工作要求：本单位连续工作6个月以上。</view>
				</view>
				<view class="color mb10 mt25"><em class="ocolor mr5">*</em>请填写产品申请资料</view>
				<ai-textarea class="mb5" v-model="initParams.applyData" placeholderStyle="color:#999;" placeholder="请参照下方示例填写！每条信息以回车换行"></ai-textarea>
				<view class="color999">
					<view>借款人身份证复印件</view>
					<view>工作证明（劳动合同复印件或者公司开具的工作证明，加盖公司公章）</view>
					<view>住址证明文件（公用事业缴费单-上个月的水、电、煤气账单任意一张或房产证复印件）</view>
					<view>个人征信报告（报告打印时间近30天内有效）</view>
				</view>
				<view class="color mb10 mt25">请填写产品其它费用</view>
				<ai-textarea class="mb5" v-model="initParams.applyCost" placeholderStyle="color:#999;" placeholder="请参照下方示例填写！每条信息以回车换行"></ai-textarea>
				<view class="color999">
					<view>履约保险费：贷款金额0.3%</view>
					<view>提前还款违约金：贷款不满6个月的，收取未还金额的3%；贷款6个月-1年之内的，收取未还金额的2%;贷款1年以上的，收取未还金额的1%</view>
					<view>助贷费：实际放款金额的1%</view>
				</view>
				<view class="flex apply-btn">
					<view class="apply-btn-two">
						<button type="primary" class="font-size16" style="background:#40a563;" hover-class="primary-hover" @tap="view">产品预览</button>
					</view>
					<view class="apply-btn-two">
						<button type="warn" class="font-size16" style="background:#FF8000;" hover-class="warn-hover" @tap="save">提交审核</button>
					</view>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
		<ai-picker mode="selector" @confirm="confirm0ne" ref="ai-picker0" :selectList="Category" :params="{label: 'name',value: 'value'}"></ai-picker>
		<ai-picker mode="selector" @confirm="confirmTwo" ref="ai-picker1" :selectList="customSet_1" :params="{label: 'name',value: 'id'}"></ai-picker>
		<ai-picker mode="selector" @confirm="confirmThree" ref="ai-picker2" :selectList="allType" :params="{label: 'name',value: 'id'}"></ai-picker>
		<ai-picker mode="selector" @confirm="confirmFour" ref="ai-picker3" :selectList="Repayment" :params="{label: 'name',value: 'value'}"></ai-picker>
	</view>
</template>
<style lang="less" scoped>
	.input-info{
		line-height: 40px;
		.title{
			width: 85px;
		}
		.color999{
			width: 30px;
		}
		.search-input{
			width: calc(100% - 140px);
		}
	}
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
import topInfo from './components/top-info.vue'
import radioGroupBtn from '@/components/ai-ui/radio-group-btn/index.vue'
import aiPicker from '@/components/ai-ui/ai-picker/index.vue'
import checkboxGroupBtn from '@/components/ai-ui/checkbox-group-btn/index.vue'
export default {
	components:{copyright,topInfo,radioGroupBtn,aiPicker,checkboxGroupBtn},
	onLoad(option) {
		this.getProductCategory();
        this.getRepayment();
        this.getLoanPeriod();
		this.getAllType();
		if(JSON.parse(decodeURIComponent(option.id))){
			this.initParams.id=JSON.parse(decodeURIComponent(option.id));
			this.$r.get('/manager/product/'+this.initParams.id, {}, r => {
				// this.initParams=Object.assign(this.initParams,r);
				for(let item in this.initParams){
					if(r[item]){
						this.initParams[item]=r[item];
					}
				}
				this.status=r.status;
				this.rejectedInfo=r["rejectedInfo"];
				this.initParams.showloanType=this.initParams.loanType==1?"信用贷款":"抵押贷款";
				this.initParams.periodList=this.initParams.period.split(",");
				uni.setNavigationBarTitle({
					title: '修改产品'
				});
			});
		}
	},
	data() {
		return {
			show:false,
			rejectedInfo:"", //驳回原因
			status:"",
			initParams:{
				id:"", //编辑时的id
				productCategoryId:"",  //产品机构类型
                productCategoryName:"",
                productSource:"",  //产品资方机构
				loanType:1,  //产品大类
				showloanType:"",
                repaymentId:"",   //还款方式
                repaymentName:"",
                productTypeId:"",  //产品分类
                productTypeName:"",
                periodList:[],  //贷款期限
                period:"",
                amountMin:"",
                amountMax:"",
                rateMin:"",
                rateMax:"",
                applyCondition:"",
                applyData:"",
                applyCost:"",
			},
			//产品投资方类型,产品机构
			Category:[],  
				//产品大类
			customSet_1 : [
				{id: '1',name: '信用贷款'},
				{id: '2',name: '抵押贷款'},
			],
			//产品分类
			allType:[], 
			//还款方式
			Repayment:[],
			//贷款期限
			LoanPeriod:[],
			 
		}
	},
	methods: {
		//产品机构
        getProductCategory:function(){
            this.$r.get('/enums/productCategory',{},r=>{
                this.Category=r;
            })
		},
		//还款方式
        getRepayment:function(){
            this.$r.get('/enums/repayment', {}, r => {
				this.Repayment=r;
			});
		},
		//贷款期限
        getLoanPeriod:function(){
            this.$r.get('/enums/loanPeriod', {}, r => {
				this.LoanPeriod=r;
			});
		},
		//产品分类
        getAllType:function(){
            this.$r.get('/productType/all', {loanType:this.initParams.loanType}, r => {
                console.log(r)
                this.allType=[];
				this.allType=r;
			});
		},
		//底部弹出对应的选择
		changeShow(name) {
			this.$refs[name].show();
		},
		confirm0ne(res) {
			console.log(res)
			this.initParams.productCategoryId=res.checkArr.value;
			this.initParams.productCategoryName=res.checkArr.name;
		},
		confirmTwo(res) {
			console.log(res)
			this.initParams.loanType=res.checkArr.id;
			this.initParams.showloanType=res.checkArr.name;
		},
		confirmThree(res) {
			console.log(res)
			this.initParams.productTypeName=res.checkArr.name;
			this.initParams.productTypeId=res.checkArr.id;
		},
		confirmFour(res) {
			console.log(res)
			this.initParams.repaymentId=res.checkArr.id;
			this.initParams.repaymentName=res.checkArr.name;
		},
		view:function(){
			console.log(this.initParams)
			for(let item in this.initParams){
				if(item!="applyCost"&&item!="period"&&item!="id"&&(this.initParams[item]===""||this.initParams[item]===null)){
					uni.showToast({
						icon: 'none',
						title: '请将信息填写完整预览！'
					});
					return;
				}
			}
			this.initParams.period=this.initParams.periodList.sort().toString();
			this.$store.dispatch("setPreviewInfo",this.initParams);
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/preview'
			});
		},
		save:function(){
			console.log(this.initParams)
			for(let item in this.initParams){
				if(item!="applyCost"&&item!="period"&&item!="id"&&(this.initParams[item]===""||this.initParams[item]===null)){
					uni.showToast({
						icon: 'none',
						title: '请检查下必填项是否填写完整！'
					});
					return;
				}
			}
			this.initParams.periodList=this.initParams.periodList.sort();
			if(this.status===3){
				this.$r.post('/manager/saveProduct', this.initParams, r => {
					uni.showToast({title: '编辑成功！'});
					uni.navigateTo({url: "/pages/myCenter/publishProduct/index"});
				});
			}else{
				this.$r.post('/manager/addProduct', this.initParams, r => {
					uni.showToast({title: '提交成功！'});
					uni.navigateTo({url: "/pages/myCenter/publishProduct/index"});
				});
			}
		}
	},
	watch:{
        'initParams.loanType':function(val){
            this.getAllType();
        }
    },
}
</script>

