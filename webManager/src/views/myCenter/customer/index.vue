<template>
	<div class="content flex">
		<left-nav></left-nav>
		<div class="right-box">
			<el-scrollbar class="scrollbar">
				<div class="mycenter-pd">
					<swiper class="mb15"></swiper>
					<div class="index-detail-box info-border">
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>请在24小时内拨打首电，并在进度反馈中更新进度，未按规定执行，将无法申请无效退款！</p>
						<p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>切记不要以小驴贷工作人员身份与客户联系，查实后会进行封号处理，进入黑名单永不合作！</p>
					</div>
					<div class="info" v-if="show">
						<span>您暂时还没获得客户？</span>
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
								<span class="hcolor">申请时间：2019.10.16 19:10</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>张女士</div>
									<div>平安银行成都分行-房屋抵押</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="info">申请信息</el-button>
										<el-button type="primary" size="mini" @click="progressFn" class="violet">进度反馈</el-button>
										<el-button type="primary" size="mini" @click="brace" class="cyan">申请无效</el-button>
									</div>
									<div class="color">积分：-120</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>订单编号：0280123525245</span>
								<span class="hcolor">申请时间：2019.10.16 19:10</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>张女士</div>
									<div>平安银行成都分行-房屋抵押</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="info">申请信息</el-button>
										<el-button type="primary" size="mini" @click="progressFn" class="violet">进度反馈</el-button>
										<el-button type="primary" size="mini" @click="brace" class="cyan">申请无效</el-button>
									</div>
									<div class="color">积分：-120</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>订单编号：0280123525245</span>
								<span class="hcolor">申请时间：2019.10.16 19:10</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>张女士</div>
									<div>平安银行成都分行-房屋抵押</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="info">申请信息</el-button>
										<el-button type="primary" size="mini" @click="progressFn" class="violet">进度反馈</el-button>
										<el-button type="primary" size="mini" @click="brace" class="cyan">申请无效</el-button>
									</div>
									<div class="color">积分：-120</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>订单编号：0280123525245</span>
								<span class="hcolor">申请时间：2019.10.16 19:10</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>张女士</div>
									<div>平安银行成都分行-房屋抵押</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="info">申请信息</el-button>
										<el-button type="primary" size="mini" @click="progressFn" class="violet">进度反馈</el-button>
										<el-button type="primary" size="mini" @click="brace" class="cyan">申请无效</el-button>
									</div>
									<div class="color">积分：-120</div>
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
					<info v-if="infoData.visible" :dialog-info="infoData"></info>
					<brace v-if="braceData.visible" :dialog-info="braceData"></brace>
					<progressview v-if="progressData.visible" :dialog-info="progressData"></progressview>
				</div>
			</el-scrollbar>
		</div>
    </div>
</template>

<script>
import info from './components/info.vue'
import brace from './components/brace.vue'
import progressview from './components/progress.vue'
import leftNav from '../mixin/leftNav'
export default {
	mixins:[leftNav],
	components:{info,progressview,brace},
	created () {
		if(sessionStorage.activeName){
			this.activeName=sessionStorage.activeName;
		}
	},
	computed:{
        
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
			infoData:{
				visible:false,
				id:'',
			},
			progressData:{
				visible:false,
				id:''
			},
			braceData:{
				visible:false,
				id:"",
			},

		}
	},
	methods:{
		search:function(id){
			
		},
		info:function(id){
			this.infoData.visible=true;
			this.infoData.id=id;
		},
		progressFn:function(id){
			this.progressData.visible=true;
			// this.progressData.id=id;
		},
		brace:function(id){
			this.braceData.visible=true;
			this.braceData.id=id;
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
	
</style>