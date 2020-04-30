<template>
	<view class="content bgfff">
		<top-info></top-info>
		<view class="pd15">
			<view class="color mb10">请填写产品申请条件</view>
			<view class="textarea mb5">
				<textarea auto-height :maxlength="-1" :value="value1" placeholder-style="color:#ccc" placeholder="请参照下方示例填写！每条信息以回车换行"/>
			</view>
			<view class="color999">
				<view>征信要求：近两年内逾期不超过6次，连续逾期不超过3次，且不能有当前逾期或呆账！</view>
				<view>年龄要求：年龄在21-55周岁之间的公民。</view>
				<view>收入要求：月收入3000以上。</view>
				<view>工作要求：本单位连续工作6个月以上。</view>
			</view>
			<view class="color mb10 mt25">请填写产品申请资料</view>
			<view class="textarea mb5">
				<textarea auto-height :maxlength="-1" :value="value2" placeholder-style="color:#ccc" placeholder="请参照下方示例填写！每条信息以回车换行"/>
			</view>
			<view class="color999">
				<view>借款人身份证复印件</view>
				<view>工作证明（劳动合同复印件或者公司开具的工作证明，加盖公司公章）</view>
				<view>住址证明文件（公用事业缴费单-上个月的水、电、煤气账单任意一张或房产证复印件）</view>
				<view>个人征信报告（报告打印时间近30天内有效）</view>
			</view>
			<view class="color mb10 mt25">请填写产品其它费用</view>
			<view class="textarea mb5">
				<textarea auto-height :maxlength="-1" :value="value3" placeholder-style="color:#ccc" placeholder="请参照下方示例填写！每条信息以回车换行"/>
			</view>
			<view class="color999">
				<view>履约保险费：贷款金额0.3%</view>
				<view>提前还款违约金：贷款不满6个月的，收取未还金额的3%；贷款6个月-1年之内的，收取未还金额的2%;贷款1年以上的，收取未还金额的1%</view>
				<view>助贷费：实际放款金额的1%</view>
			</view>
			<view class="flex apply-btn">
				<view class="apply-btn-two">
					<button type="primary" class="font-size16" style="background:#40a563;" hover-class="primary-hover" @tap="preve">上一步</button>
				</view>
				<view class="apply-btn-two">
					<button class="font-size16" style="background:#12b7ed;color:#fff;" hover-class="success-hover" @tap="view">产品预览</button>
				</view>
			</view>
			<view>
				<button type="warn" class="font-size16" style="background:#FF8000;" hover-class="warn-hover" @tap="save">提交审核</button>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
import topInfo from './components/top-info.vue'
import checkboxGroupBtn from '@/components/ai-ui/checkbox-group-btn/index.vue'
export default {
	components:{copyright,topInfo,checkboxGroupBtn},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			initParams:{
				psword:"",
				code:""
			},
			value1:"",
			value2:"",
			value3:"",
		}
	},
	methods: {
		preve:function(){
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/stepTwo'
			});
		},
		view:function(){
			uni.navigateTo({
				url: '/pages/myCenter/productUpload/preview'
			});
		},
		save:function(){

		}
	}
}
</script>

