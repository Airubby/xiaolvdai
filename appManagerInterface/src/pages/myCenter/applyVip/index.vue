<template>
	<view class="content bgfff">
		<!-- <view v-if="show" class="showCode" @dbclick="showCode">
			<image src="/static/images/code.png" style="width:300px;height:300px;" mode="widthFix"></image>
		</view> -->
		<view class="viptop text-center">
			<image src="/static/images/applyVip.png" style="width:315px;height:149px;" mode="widthFix"></image>
		</view>
		<view class="index-detail-box pd15 top15">
			<view class="index-detail-box-title ml10">会员服务内容</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>享受平台web、移动端产品推广技术支持</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>获赠2个产品推广发布位，年会员将获赠3个</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>获得全天候7*24小时获客推送服务</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>获得专属客服24小时1对1服务</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>年费会员获得小驴创始人行业分享交流会</text>
			</view>
		</view>
		<view class="index-detail-box pd15 top15">
			<view class="index-detail-box-title ml10">会员费用标准-技术服务费</view>
			<view class="table">
				<view class="table-title table-flex">
					<view class="table-box city">城市</view>
					<view class="table-box"><text class="table-box-text">1个月</text></view>
					<view class="table-box"><text class="table-box-text">3个月</text></view>
					<view class="table-box"><text class="table-box-text">6个月</text></view>
					<view class="table-box"><text class="table-box-text">12个月</text></view>
				</view>
				<view class="table-con">
					<view class="table-conbox table-flex">
						<view class="table-box city">北京、上海、广州、深圳、重庆、成都</view>
						<view class="table-box"><text class="table-box-text">3000</text></view>
						<view class="table-box"><text class="table-box-text">8500</text></view>
						<view class="table-box"><text class="table-box-text">16000</text></view>
						<view class="table-box"><text class="table-box-text">30000</text></view>
					</view>
					<view class="table-conbox table-flex">
						<view class="table-box city">太原、沈阳、长春、南京、杭州、合肥、福州、南昌、济南、郑州、武汉、长沙、贵阳、昆明、西安、天津</view>
						<view class="table-box"><text class="table-box-text">2000</text></view>
						<view class="table-box"><text class="table-box-text">5500</text></view>
						<view class="table-box"><text class="table-box-text">11000</text></view>
						<view class="table-box"><text class="table-box-text">20000</text></view>
					</view>
					<view class="table-conbox table-flex">
						<view class="table-box city">其它城市</view>
						<view class="table-box"><text class="table-box-text">1200</text></view>
						<view class="table-box"><text class="table-box-text">3000</text></view>
						<view class="table-box"><text class="table-box-text">6000</text></view>
						<view class="table-box"><text class="table-box-text">12000</text></view>
					</view>
				</view>
			</view>
			<view>(费用标准会根据平台实际运营成本进行上下浮动，详情请咨询官方客服。解释权归小驴优资官方所有！)</view>
		</view>
		<view class="vipbottom top15 text-center">
			<view class="index-detail-box-title ml10">扫下方二维码，申请会员开通</view>
			<view @tap="showCode()">
				<image src="/static/images/code.png" style="width:138px;height:138px;" mode="widthFix"></image>
			</view>
			<view>长按上图识别二维码</view>
		</view>
		<view class="index-detail-box pd15 top15">
			<view class="index-detail-box-title ml10">全国各城市寻找代理人</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>乔先生：13880708087(微信同号)</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>董先生：18382285579(微信同号)</text>
			</view>
		</view>
		<copyright type="normal"></copyright>
    </view>
</template>
<style lang="less" scoped>
	.showCode{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.table{
		background: #EEEEEE;
	}
	.table-title{
		background: #666666;
		color: #fff;
	}
	.table-flex{
		display: flex;
		border-top: 1px solid #fff;
		overflow: hidden;
		.table-box{
			width: 19%;
			text-align: center;
			padding: 5px 3px;
			border-left: 1px solid #fff;
			display: flex;
			align-items: center;
			text-align: center;
			.table-box-text{
				margin: 0 auto;
			}
		}
		.table-box.city{
			width: 24%;
			border: none;
			display: block;
		}
	}
    .viptop{
        background: #40A563;
        text-align: center;
		padding-bottom: 25px;
		padding-top: 15px;
    }
    .vipbottom{
        padding: 40px 0 50px 0;
        .text{
            padding: 10px 0 0 0;
        }
	}
	.top15{
		border-top: 15px solid #f5f5f5;
	}

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
		}
	},
	methods: {
		// showCode:function(){
		// 	this.show=!this.show;
		// },
	}
}
</script>

