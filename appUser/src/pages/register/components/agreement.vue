<template>
	<ai-popup :title="dialogInfo.title" ref="popup">
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
		<view>这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
	</ai-popup>
</template>

<script>
	import aiPopup from '@/components/ai-popup.vue'
	export default {
		components: {
			aiPopup
		},
        props: ["dialogInfo"],
		data() {
			return {
				
			}
		},
		methods: {
			open:function(){
				this.$refs['popup'].open();
			}
		},
		
	}
</script>
