<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="info-box mb25">
				<p>亲爱的用户，7天内仅可发起一次贷款产品申请！请随时关注产品申请进度！</p>
			</div>
			<div class="info" v-if="show">
				<span>您暂时还没有申请：</span>
				<el-button type="primary" @click="select()">马上选择贷款产品</el-button>
			</div>
			<div v-if="!show">
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>申请订单：c363632563</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="card-center flex">
							<div class="card-center-box">
								<img src="images/cardLogo.png">
								<div class="card-center-info">
									<p>平安银行成都分行人民南路支行-工薪贷</p>
									<p>信贷经理：陈小斌</p>
									<p>联系电话：13999999999</p>
								</div>
							</div>
							<div class="card-center-btn">
								<p class="mb10"><el-button type="primary">服务好赞</el-button></p>
								<p><el-button type="warning">发起投诉</el-button></p>
							</div>
						</div>
						<div class="box-card-step">
							<div class="title">办理进度：</div>
							<el-steps :active="2" finish-status="success" simple class="steps">
								<el-step title="首电联系" icon></el-step>
								<el-step title="资料准备" ></el-step>
								<el-step title="提交审核" ></el-step>
								<el-step title="签订协议" ></el-step>
								<el-step title="放款成功" ></el-step>
							</el-steps>
						</div>
					</div>
				</div>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>申请订单：c363632563</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="card-center flex">
							<div class="card-center-box">
								<img src="images/cardLogo.png">
								<div class="card-center-info">
									<p>平安银行成都分行人民南路支行-工薪贷</p>
									<p>信贷经理：陈小斌</p>
									<p>联系电话：13999999999</p>
								</div>
							</div>
							<div class="card-center-btn">
								<p class="mb10"><el-button type="primary">服务好赞</el-button></p>
								<p><el-button type="warning">发起投诉</el-button></p>
							</div>
						</div>
						<div class="box-card-step">
							<div class="title">办理进度：</div>
							<el-steps :active="6" finish-status="success" simple class="steps">
								<el-step title="首电联系" icon></el-step>
								<el-step title="资料准备" ></el-step>
								<el-step title="提交审核" ></el-step>
								<el-step title="签订协议" ></el-step>
								<el-step title="放款成功" ></el-step>
							</el-steps>
						</div>
					</div>
				</div>
				<div class="box-card box-shadow-card">
					<div class="box-card-title">
						<span>申请订单：c363632563</span>
						<span>申请时间：2019.10.16 19:10</span>
					</div>
					<div class="box-card-con">
						<div class="card-center flex">
							<div class="card-center-box">
								<img src="images/cardLogo.png">
								<div class="card-center-info">
									<p>平安银行成都分行人民南路支行-工薪贷</p>
									<p>信贷经理：陈小斌</p>
									<p>联系电话：13999999999</p>
								</div>
							</div>
							<div class="card-center-btn">
								<p class="mb10"><el-button type="primary">服务好赞</el-button></p>
								<p><el-button type="warning">发起投诉</el-button></p>
							</div>
						</div>
						<div class="box-card-step">
							<div class="title">办理进度：</div>
							<el-steps :active="0" finish-status="success" simple class="steps">
								<el-step title="首电联系"></el-step>
								<el-step title="资料准备" ></el-step>
								<el-step title="提交审核" ></el-step>
								<el-step title="签订协议" ></el-step>
								<el-step title="放款成功" ></el-step>
							</el-steps>
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
		return {
			loading:false,
			show:false,
			initParams:{},
		}
	},
	methods:{
		select:function(){
			this.$router.push({path:'/index'});
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