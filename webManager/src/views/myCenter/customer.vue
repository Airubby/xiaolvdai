<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="index-detail-box info-border">
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>请在24小时内拨打首电，并在进度反馈中更新进度，未按规定执行，将无法申请无效退款！</p>
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>为了您的利益，7日内客户仅能发起一次贷款申请，但不保证客户在其它平台申请，请服务好客户！</p>
				<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>切记不要以小驴贷工作人员身份与客户联系，查实后会进行封号处理，进入黑名单永不合作！</p>
			</div>
			<div class="info" v-if="show">
				<span>您暂时还没获得客户？</span>
				<el-button type="primary" @click="qualification()">资质认证</el-button>
				<el-button type="warning" @click="publishProduct()">发布产品</el-button>
			</div>
			<div v-if="!show">
				<el-form :model="initParams" :rules="rules" ref="ValidateForm" >
					<el-row :gutter="20">
						<el-col :span="10">
							<el-form-item label="" prop="phone">
								<el-input v-model="initParams.phone" placeholder="输入客户手机号"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="10">
							<el-form-item label="" prop="code">
								<el-button type="primary" class="fl" @click="search">查询</el-button>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>订单编号：0280123525245</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="userinfo flex">
							<div>张女士</div>
							<div>申请额度：70万</div>
							<div>平安银行成都分行-房屋抵押</div>
						</div>
						<div class="box-card-conbtn flex">
							<div>
								<el-button type="primary" size="mini">申请信息</el-button>
								<el-button type="primary" size="mini" class="violet">进度反馈</el-button>
								<el-button type="primary" size="mini" class="cyan">申请无效</el-button>
							</div>
							<div class="ocolorp">消费：-120元</div>
						</div>
					</div>
				</div>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>订单编号：0280123525245</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="userinfo flex">
							<div>张女士</div>
							<div>申请额度：7000万</div>
							<div>平安银行成都分行-房屋抵押</div>
						</div>
						<div class="box-card-conbtn flex">
							<div>
								<el-button type="primary" size="mini">申请信息</el-button>
								<el-button type="primary" size="mini" class="violet">进度反馈</el-button>
								<el-button type="primary" size="mini" class="cyan">申请无效</el-button>
							</div>
							<div class="ocolorp">消费：-120元</div>
						</div>
					</div>
				</div>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>订单编号：0280123525245</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="userinfo flex">
							<div>张女士</div>
							<div>申请额度：370万</div>
							<div>平安银行成都分行-房屋抵押</div>
						</div>
						<div class="box-card-conbtn flex">
							<div>
								<el-button type="primary" size="mini">申请信息</el-button>
								<el-button type="primary" size="mini" class="violet">进度反馈</el-button>
								<el-button type="primary" size="mini" class="cyan">申请无效</el-button>
							</div>
							<div class="ocolorp">消费：-120元</div>
						</div>
					</div>
				</div>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>订单编号：0280123525245</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="userinfo flex">
							<div>张女士</div>
							<div>申请额度：270万</div>
							<div>平安银行成都分行-房屋抵押</div>
						</div>
						<div class="box-card-conbtn flex">
							<div>
								<el-button type="primary" size="mini">申请信息</el-button>
								<el-button type="primary" size="mini" class="violet">进度反馈</el-button>
								<el-button type="primary" size="mini" class="cyan">申请无效</el-button>
							</div>
							<div class="ocolorp">消费：-120元</div>
						</div>
					</div>
				</div>
				<el-pagination
					background
					:page-size="3"
					@current-change="handleCurrentChange"
					layout="total,prev, pager, next,jumper"
					:total="520">
				</el-pagination>
			</div>
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
		let checkPhone = (rules, value, callback) => {
			this.$tool.checkPHONE({rules,value,callback});
		};
		return {
			loading:false,
			show:false,
			initParams:{
				phone:"",
			},
			rules: {
				phone:[
					{ required: false, trigger: 'blur',validator:checkPhone },
				],
			},
		}
	},
	methods:{
		search:function(){
			
		},
		qualification:function(){
			this.$emit("backInfo","second")
		},
		publishProduct:function(){
			this.$emit("backInfo","fourth")
		},
		handleCurrentChange:function(val){
			console.log(`当前页: ${val}`);
		},
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	.info{
		background: #F4F4F5;
		text-align: center;
		padding: 20px;
		border-radius: 5px;
		color: #909399;
	}
</style>