<script>
	import Vue from 'vue'
	import request from './service/request/index'	
	// import request from './service/request'
	export default {
		onLaunch: function () {
			console.log('App Launch')
			request.service.config.baseUrl=this.$store.getters['ajaxUrl']
			Vue.prototype.$r = request
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import "./common/uni.css"; */
	/*每个页面公共css */
	@import "./common/basic.css";
	/*每个页面公共css */
	@import "./common/reset.css";

</style>
