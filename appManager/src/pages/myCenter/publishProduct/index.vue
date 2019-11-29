<template>
	<view class="content bgfff">
		<view class="pd15">
			<view class="approve-info" v-if="show">
				<text>您暂时还没有上传产品，无法发布产品！</text>
				<navigator url="/pages/myCenter/productUpload/index">
					<button type="primary" style="background:#40a563;" hover-class="primary-hover">上传产品</button>
				</navigator>
			</view>
			<view v-if="!show">
				<view class="box-shadow-card box-card">
					<view class="box-card-title">
						<text>产品编号：0280123525245</text>
						<text>访问人数：2525人</text>
					</view>
					<view class="box-card-con">
						<view class="userinfo flex">
							<text>平安银行成都分行-房屋抵押</text>
							<text class="color">发布中</text>
						</view>
						<view class="flex customer-bottom">
							<view class="customer-btn">
								<navigator url="/pages/myCenter/publishProduct/productInfo">
									<button type="primary" class="btn" style="background:#40a563;" hover-class="primary-hover">查看产品</button>
								</navigator>
								<navigator url="/pages/myCenter/publishProduct/upProduct">
									<button type="default" class="btn other-btn" hover-class="default-hover">上架产品</button>
								</navigator>
								<button type="default" class="btn other-btn" @tap="remove" hover-class="default-hover">删除产品</button>
							</view>
							<view class="color">
								竞价积分：20
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <copyright></copyright> -->
    </view>
</template>
<style lang="less" scoped>
	
</style>
<script>
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright},
	onLoad() {
		
	},
	data() {
		return {
			show:false,
			initParams:{
				psword:"",
				code:""
			}
		}
	},
	methods: {
		remove:function(){
			uni.showModal({
				title: '平安银行成都分行-房屋抵押',
				content: '您确定删除该产品？',
				cancelText:"考虑一下",
				cancelColor:"#FF8000",
				confirmText:"确认删除",
				confirmColor:"#40a563",
				success: (res) => {
					if (res.confirm) {
						uni.showToast({
							icon: 'none',
							title: '删除成功！'
						});
					}else{

					}
				}
			});
		}
	}
}
</script>

