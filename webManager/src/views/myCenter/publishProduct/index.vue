<template>
	<div class="content flex">
		<left-nav></left-nav>
		<div class="right-box">
			<el-scrollbar class="scrollbar">
				<div class="mycenter-pd">
					<el-alert type="info" :closable="false" class="mb15">
						<div class="flex">
							<strong class="mr25">发布日期：2019/02/14</strong>
							<strong class="mr25">城市：成都</strong>
							<strong class="ocolorp">今日获客服务费：35积分/条</strong>
						</div>
					</el-alert>
					<div class="info" v-if="show">
						<span>您暂时还没有上传产品，无法发布产品！</span>
						<el-button type="primary" @click="uploadP()">上传产品</el-button>
					</div>
					<div v-if="!show">
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>产品编号：c363632563</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>平安银行成都分行-房屋抵押</div>
									<div class="color999">人工审核中</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="preview">查看产品</el-button>
									</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>产品编号：c363632563</span>
								<span class="hcolor"><em>访问人数：213人</em><em class="ml15">申请人数：23人</em></span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>平安银行成都分行-房屋抵押</div>
									<div class="color">发布中</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="preview">查看产品</el-button>
										<el-button type="primary" size="mini" @click="down" class="violet">产品下架</el-button>
										<el-button type="primary" size="mini" @click="remove" class="cyan">修改产品</el-button>
									</div>
									<div class="ocolorp">竞价积分：120积分</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>产品编号：c363632563</span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>平安银行成都分行-房屋抵押</div>
									<div class="color999">未发布</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="preview">查看产品</el-button>
										<el-button type="primary" size="mini" @click="publish" class="orange">发布产品</el-button>
										<el-button type="primary" size="mini" @click="remove" class="cyan">修改产品</el-button>
									</div>
								</div>
							</div>
						</div>
						<div class="box-card box-shadow-card">
							<div class="box-card-title">
								<span>产品编号：c363632563</span>
								<span class="hcolor"><em>访问人数：213人</em><em class="ml15">申请人数：23人</em></span>
							</div>
							<div class="box-card-con">
								<div class="userinfo flex">
									<div>平安银行成都分行-房屋抵押</div>
									<div class="color">发布中</div>
								</div>
								<div class="box-card-conbtn flex">
									<div>
										<el-button type="primary" size="mini" @click="preview">查看产品</el-button>
										<el-button type="primary" size="mini" @click="down" class="violet">产品下架</el-button>
										<el-button type="primary" size="mini" @click="remove" class="cyan">修改产品</el-button>
									</div>
									<div class="ocolorp">竞价积分：120积分</div>
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
					<down v-if="downInfo.visible" :dialog-info="downInfo"></down>
					<remove v-if="removeInfo.visible" :dialog-info="removeInfo"></remove>
					<publish v-if="publishInfo.visible" :dialog-info="publishInfo"></publish>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import down from './components/down.vue'
import remove from './components/remove.vue'
import publish from './components/publish.vue'
import leftNav from '../mixin/leftNav'
export default {
	mixins:[leftNav],
	components:{remove,down,publish},
	created () {
		this.instance = this.$notify({
			title: '重要通知',
			message: this.alertInfo,
			type: 'warning',
			duration: 0,
			onClick:function(){
				this.close();
			}
        });
	},
	destroyed(){
		this.instance.close();
	},
	mounted() {
        
    },
	data(){
		return {
			loading:false,
			show:false,
			instance:'',
			alertInfo:"今日活动：获赞300以上的信达经理，每条获客可返补5积分！",
			initParams:{},
			removeInfo:{
				visible:false
			},
			downInfo:{
				visible:false
			},
			publishInfo:{
				visible:false
			}
		}
	},
	methods:{
		publish:function(){
			this.publishInfo.visible=true;
		},
		down:function(){
			this.downInfo.visible=true;
		},
		remove:function(){
			this.removeInfo.visible=true;
		},
		preview:function(){
			this.$router.push({path:'/myCenter/preview'})
		},
		uploadP:function(){
			this.$emit("backInfo","third")
		},
		close:function(){
			console.log(123)
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