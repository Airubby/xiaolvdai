<template>
	<view class="content bgfff">
		
		<copyright></copyright>
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
			initParams:{
				psword:"",
				code:""
			}
		}
	},
	methods: {
		resetPsword:function(){
			uni.showToast({
				icon: 'none',
				title: '密码修改成功！'
			});
		}
	}
}
</script>

