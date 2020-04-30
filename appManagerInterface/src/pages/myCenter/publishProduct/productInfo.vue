<template>
	<view class="content bgfff">
		<view class="sort-box">
			<view class="sort-box-top">
				<view class="sort-box-left">
					<image src="/static/images/manager.png" class="sort-box-img" mode="widthFix"></image>
				</view>
				<view class="sort-box-right">
					<view class="mb5">信贷经理：{{Info.managerName}}<text class="sort-box-img-info">已认证</text></view>
					<view>{{Info.companyName}}</view>
				</view>
			</view>
		</view>
		<view class="bg colorfff sort-boxbottom">
			<text>{{Info.productSource}}</text>
			<text class="line">|</text>
			<text>{{Info.productTypeName}}</text>
		</view>
		<view class="index-detail-box pd15">
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>机构类型：{{Info.productCategoryName}}</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>申请额度：{{Info.rateMin}}-{{Info.rateMax}}万元</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>还款方式：{{Info.repayment}}</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>利率：{{Info.rateMin}}-{{Info.rateMax}}%</text>
			</view>
			<view class="index-detail-box-con">
				<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
				<text>贷款期限：{{Info.period}}期</text>
			</view>
		</view>
		<view class="index-detail-box pd15">
			<view class="index-detail-box-title">申请条件</view>
			<template v-for="(item,index) in Info.applyCondition.split(/\n/g)">
				<view class="index-detail-box-con" v-if="item.length>0" :key="index">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>{{item}}</text>
				</view>
			</template>
		</view>
		<view class="index-detail-box pd15">
			<view class="index-detail-box-title">申请资料</view>
			<template v-for="(item,index) in Info.applyData.split(/\n/g)">
				<view class="index-detail-box-con" v-if="item.length>0" :key="index">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>{{item}}</text>
				</view>
			</template>
		</view>
		<view class="index-detail-box pd15" v-if="Info.applyCost">
			<view class="index-detail-box-title index-detail-box-titleo">附加费用</view>
			<template v-for="(item,index) in Info.applyCost.split(/\n/g)">
				<view class="index-detail-box-con" v-if="item.length>0" :key="index">
					<view class="arrows"><image src="/static/images/arrows.png" style="width: 6px;height:6px;" mode="widthFix"></image></view>
					<text>{{item}}</text>
				</view>
			</template>
		</view>
	</view>
</template>
<style lang="less" scoped>
	.sort-box{
		padding: 15px 15px 0;
		.sort-box-top{
			border-bottom: none;
			display: flex;
			justify-content: center;
			.sort-box-right{
				width: auto;
				margin-left: 10px;
			}
		}
	}
	.sort-boxbottom{
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
	}
</style>

<script>
	
	export default {
		components:{},
		onLoad:function(option) {  //option接受传过来的参数 是object对象
			//:url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"
			this.$r.get('/product/'+JSON.parse(decodeURIComponent(option.id)), {}, r => {
                this.Info=r;
            });
			console.log(option)
		},
		data() {
			return {
				Info:{}
			}
		},
		methods: {
			
		}
	}
</script>

