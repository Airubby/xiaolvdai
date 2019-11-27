<template>
	<view class="content bgfff">
		<view class="pd1520">
			<view class="flex mb10">
				<view>
					<view>我的积分</view>
					<view><text class="integral">10</text>分</view>
				</view>
				<view class="flex">
					<navigator url="/pages/myCenter/recharge/detail" style="margin-top:6px;">
						<button type="warn" style="background:#FF8000;" hover-class="warn-hover">积分明细</button>
					</navigator>
				</view>
			</view>
			<view class="title">请选择充值金额</view>
			<view>
				<radio-group-btn :items="items" v-model="current"></radio-group-btn>
			</view>
			<view class="title">请选择充值方式</view>
			<view class="recharge"> 
				<view class="recharge-box" :class="{active:zhifubao}" @tap="changeType(0)">
					<image src="/static/images/zhifubao.png" style="width:100px;height:32px;" mode="widthFix"></image>
				</view>
				<view class="recharge-box" :class="{active:weixin}" @tap="changeType(1)">
					<image src="/static/images/weixin.png" style="width:100px;height:32px;" mode="widthFix"></image>
				</view>
			</view>
			<view class="mt25">
				<button type="warn" style="background:#FF8000;" class="font-size18" hover-class="warn-hover">立即充值</button>
			</view>
		</view>
		<copyright></copyright>
    </view>
</template>
<style lang="less" scoped>
	.recharge{
		display: flex;
		justify-content: flex-start;
		.recharge-box{
			border: 1px solid #dcdfe6;
			padding: 10px 10px;
			border-radius: 3px;
			margin-right:10px;
			&.active{
				border-color: #40a563;
			}
		}
	}
	.integral{
		font-size: 22px;
		color: #40a563;
		margin-right: 5px;
		font-style: italic;
	}
	.title{
		margin: 15px 0;
		color: #40a563;
	}
</style>
<script>
import radioGroupBtn from '@/components/ai-ui/radio-group-btn/index.vue'
import copyright from '@/components/bottom-copyright.vue'
export default {
	components:{copyright,radioGroupBtn},
	onLoad() {
		
	},
	data() {
		return {
			zhifubao:false,
			weixin:false,
			initParams:{
				psword:"",
				code:""
			},
			current:"",
			items: [
				{value: '1',name: '3000元',detail:"获3000积分"},
				{value: '2',name: '5000元',detail:"获5050积分"},
				{value: '3',name: '10000元',detail:"获10150积分"},
			],
		}
	},
	methods: {
		resetPsword:function(){
			uni.showToast({
				icon: 'none',
				title: '密码修改成功！'
			});
		},
		changeType:function(index){
			if(index==0){
				this.zhifubao=true;
				this.weixin=false;
			}else{
				this.zhifubao=false;
				this.weixin=true;
			}
		}
	}
}
</script>

