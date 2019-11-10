<template>
	<el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag>
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading" style="padding:0 15px;">
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
    </el-dialog>
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