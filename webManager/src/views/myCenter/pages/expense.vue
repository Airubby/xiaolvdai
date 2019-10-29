<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<!-- <div class="account-info flex">
				<div class="account-info-box">
					<div class="account-con account-con-border">
						<p>账户余额<router-link to="/myCenter/recharge" class="color">充值</router-link></p>
						<p><span class="color">125254.00</span>元</p>
					</div>
					<div class="account-con account-con-border">
						<p>奖励金额</p>
						<p><span class="ocolorp">125.00</span>元</p>
					</div>
					<div class="account-con">
						<p>消费金额</p>
						<p><span class="color">125.00</span>元</p>
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
				<el-row :gutter="10">
					<el-col :span="10">
						<el-form-item label="">
							<el-date-picker
								v-model="initParams.date"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="10">
						<el-form-item label="" prop="code">
							<el-button type="primary" class="fl" @click="search">查询</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div class="table">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="code" label="订单编号" width="160"></el-table-column>
					<el-table-column prop="type" label="产品类型" minWidth="60"></el-table-column>
					<el-table-column prop="time" label="发生时间" width="160"></el-table-column>
					<el-table-column prop="money" label="积分变化" minWidth="40">
						<template slot-scope="scope">
							<span class="ocolorp" v-if="scope.row.status=='plus'">+{{ scope.row.money }}</span>
							<span class="color" v-if="scope.row.status=='minus'">-{{ scope.row.money }}</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-pagination
				background
				:page-size="3"
				@current-change="handleCurrentChange"
				layout="total,prev, pager, next,jumper"
				:total="520">
			</el-pagination>
		</div>
	</el-scrollbar>
</template>

<style lang="less" scoped>
	.account-info{
		justify-content: space-between;
		padding: 0 0 15px 0;
		border-bottom: 1px solid #40A563;
		margin-bottom: 30px;
		.account-con{
			padding-right: 15px;
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
				margin-right: 15px;
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
		
		return {
			flag:false,
			loading:false,
			initParams:{
				date:'',
				marriage:"",
			},
			rules: {
				
			},
			tableData:[
				{code:"YQJL0280003043001",type:"邀请奖励",time:"2019-12-12 12:12:12",money:'50',status:'plus'},
				{code:"YQJL0280003043001",type:"邀请奖励",time:"2019-12-12 12:12:12",money:'50',status:'plus'},
				{code:"YQJL0280003043001",type:"邀请奖励",time:"2019-12-12 12:12:12",money:'50',status:'minus'},
				{code:"YQJL0280003043001",type:"邀请奖励",time:"2019-12-12 12:12:12",money:'50',status:'minus'},
			]
		}
	},
	methods:{
		search:function(){

		},
		submitForm:function(){
			this.$refs['ValidateForm'].validate((valid) => {
				if(valid){
					this.loading=true;
					console.log(13123123)
					
				}
			});
		},
		handleCurrentChange:function(){

		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>