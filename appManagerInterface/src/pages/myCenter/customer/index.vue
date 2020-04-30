<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="search">
				<view class="search-input">
					<ai-input style="border:none;" v-model="initParams.search" placeholder="请输入手机号" placeholderStyle="color:#999;"></ai-input>	
				</view>
				<view class="search-btn">
					<button type="primary" style="background:#40a563;" class="btn" @tap="getList" hover-class="primary-hover">搜 索</button>
				</view>
			</view>
			<view class="approve-info" v-if="show">
				<text>暂无客户数据！</text>
			</view>
			<view v-if="!show">
				<template v-for="item in totalData">
					<view class="box-shadow-card box-card" :key="item.id">
						<view class="box-card-title">
							<text>订单编号：{{item.id}}</text>
							<text>{{item.createTime}}</text>
						</view>
						<view class="box-card-con">
							<view class="userinfo flex">
								<text>{{item.productSource}}-{{item.productTypeName}}</text>
								<text>{{item.applyCustomerName}}</text>
							</view>
							<view class="flex customer-bottom">
								<button type="warn" class="font-size18" style="background:#FF8000;width:100%;" hover-class="warn-hover" @click="callPhone(item)">拨打电话</button>
								<!-- <view class="customer-btn">
									<navigator url="/pages/myCenter/customer/applyInfo">
										<button type="primary" class="btn" style="background:#40a563;" @tap="sure" hover-class="primary-hover">申请信息</button>
									</navigator>
									<navigator url="/pages/myCenter/customer/progress">
										<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">进度反馈</button>
									</navigator>
									<navigator url="/pages/myCenter/customer/applyInvalid">
										<button type="default" class="btn other-btn" @tap="sure" hover-class="default-hover">申请无效</button>
									</navigator>
								</view> -->
								<!-- <view class="color">
									积分：-120
								</view> -->
							</view>
						</view>
					</view>
				</template>
				<uni-load-more :status="status" :content-text="contentText" color="#40a563" v-show="showLoading" />
				<!-- <view class="bottomnav-placeholder"></view> -->
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
		this.getList();
	},
	// 下拉刷新
	onPullDownRefresh() {
		console.log('refresh');
		this.showLoading=false;
		this.totalData=[];
		this.initParams={
			page:1,
			limit:10,
			search:"",
		}
		this.getList();
		
	},
	// 上拉加载
	onReachBottom() {
		this.showLoading=true;
		this.status = 'loading'
		uni.showNavigationBarLoading()
		console.log('reach');
		this.initParams.page+=1;
		this.getList("fresh");
	},
	data() {
		return {
			show:false,
			initParams:{
				page:1,
				limit:10,
				search:"",
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
		callPhone:function(item){
			uni.makePhoneCall({
				phoneNumber: item.mobile //仅为示例
			});
		},
		getList:function(fresh){
			this.$r.get('/order/my', this.initParams, r => {
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
	}
}
</script>

