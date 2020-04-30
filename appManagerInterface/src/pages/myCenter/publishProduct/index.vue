<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="approve-info" v-if="show">
				<text>您暂时还没有上传产品！</text>
			</view>
			<view v-if="!show">
				<template v-for="item in totalData">
					<view class="box-shadow-card box-card" :key="item.id">
						<view class="box-card-title">
							<text>产品编号：{{item.id}}</text>
							<text></text>
						</view>
						<view class="box-card-con">
							<view class="userinfo flex">
								<text>{{item.productSource}}-{{item.productTypeName}}</text>
								<text class="color999" v-if="item.status==2">审核中</text>
								<text class="ocolor" v-if="item.status==3">驳回中</text>
								<text class="color" v-if="item.status==1">发布中</text>
								<text class="color999" v-if="item.status==4">已下线</text>
							</view>
							<view class="flex customer-bottom">
								<view class="customer-btn">
									<navigator :url="'/pages/myCenter/publishProduct/productInfo?id='+ encodeURIComponent(JSON.stringify(item.id))">
										<button type="primary" class="btn" style="background:#40a563;" hover-class="primary-hover">查看产品</button>
									</navigator>
									<navigator :url="'/pages/myCenter/productUpload/index?id='+ encodeURIComponent(JSON.stringify(item.id))" v-if="item.status==3">
										<button type="default" class="btn other-btn" hover-class="default-hover">修改产品</button>
									</navigator>
									<button type="default" class="btn other-btn" @tap="remove(item)" hover-class="default-hover" v-if="item.status!=2">删除产品</button>
								</view>
							</view>
						</view>
					</view>
				</template>
				<uni-load-more :status="status" :content-text="contentText" color="#40a563" v-show="showLoading" />
				<!-- <view class="bottomnav-placeholder"></view> -->
			</view>
			<view class="mt25">
				<button type="warn" class="font-size16" style="background:#FF8000;" hover-class="warn-hover" @click="add">新增产品</button>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue'
export default {
	components:{copyright,uniLoadMore},
	onLoad() {
		this.getInfo();
		this.getList();
	},
	// 下拉刷新
	onPullDownRefresh() {
		console.log('refresh');
		this.showLoading=false;
		this.totalData=[];
		this.pagination={
			page:1,
			limit:10,
		}
		this.getList();
		
	},
	// 上拉加载
	onReachBottom() {
		this.showLoading=true;
		this.status = 'loading'
		uni.showNavigationBarLoading()
		this.initParams.page+=1;
		this.getList("fresh");
	},
	data() {
		return {
			show:false,
			user:{
				//0未审核,1审核通过
				auditStatus:0,
			},
			pagination:{
				page:1,
				limit:10,
			},
			totalData:[],

			showLoading:false,
			status: 'more',
			contentText: {
				contentdown: '上拉显示更多',
				contentrefresh: '加载中',
				contentnomore: '没有更多'
			}

		}
	},
	methods: {
		getInfo:function(){
			this.$r.get("/manager/my",{},r=>{
				this.user.auditStatus=r.auditStatus;
			});
		},
		getList:function(fresh){
			this.$r.get('/product/my', this.pagination, r => {
				if(fresh){
					if(r.data.length>0){
						this.totalData=this.totalData.concat(r.data);
					}else{
						this.status = 'noMore'
					}
					// this.showLoading=false;
					uni.hideNavigationBarLoading();
				}else{
					this.totalData=r.data;
					uni.stopPullDownRefresh(); //关闭下拉状态
				}
				if(r.total==0&&this.totalData.length==0){
					this.show=true;
				}else{
					this.show=false;
				}
			});
		},
		remove:function(item){
			uni.showModal({
				title: item.productSource+"-"+item.productTypeName,
				content: '您确定删除该产品？',
				cancelText:"考虑一下",
				cancelColor:"#FF8000",
				confirmText:"确认删除",
				confirmColor:"#40a563",
				success: (res) => {
					if (res.confirm) {
						this.$r.delete('/product/'+item.id, {}, r => {
							uni.showToast({title: '删除成功！'});
							this.getList();
						});
						
					}
				}
			});
		},
		add:function(){
			if(this.user.auditStatus==1){
				uni.navigateTo({url: "/pages/myCenter/productUpload/index"});
			}else{
				uni.showToast({
					icon: 'none',
					title: "资质未认证或者认证还未成功，无法发布产品！"
				});
			}
		}
	}
}
</script>

