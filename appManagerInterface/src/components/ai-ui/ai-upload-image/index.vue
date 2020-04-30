<template>
	<view class="ai-upload-img">
		<view class="ai-upload-con">
			<view class="ai-upload-btn" @tap="selectImg" v-if="imgUrl==''">
				<ai-icons :color="iconColor" type="camera" :size="iconSize"></ai-icons>
				<view class="text">拍摄或选择照片</view>
			</view>
			<view class="ai-upload-preview" v-if="imgUrl!=''">
				<image :src="imgUrl" style="width:100%;height:100%;" mode="scaleToFill"></image>
				<view class="ai-upload-mask" :class="{'disabled':disabled}">
					<view class="ai-upload-mask-con" v-if="!disabled">
						<view  class="ai-upload-mask-icon">
							<ai-icons :color="iconColor" type="remove" :size="iconSize" @tap="remove"></ai-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" color="#40a563" v-show="showLoading" class="ai-upload-loading" />
	</view>
</template>
<style lang="less" scoped>
	.ai-upload-img{
		width: 100%;
		height: 100%;
		text-align: center;
		border: 1px solid #ccc;
		border-radius: 5px;
		display: table;
		position: relative;
		.ai-upload-con{
			display: table-cell;
			vertical-align: middle;
			width: 100%;
			height: 100%;
			.ai-upload-preview{
				width: 100%;
				height: 100%;
				position: relative;
				.ai-upload-mask{
					display: none;
					width: 100%;
					height: 100%;
					position: absolute;
					top:0;
					left: 0;
					background: rgba(0, 0, 0, 0.21);
					.ai-upload-mask-con{
						display: table;
						width: 100%;
						height: 100%;
						.ai-upload-mask-icon{
							display: table-cell;
							vertical-align: middle;
						}
					}
				}
				&:hover{
					.ai-upload-mask{
						display: block;
					}
				}
				&.disabled:hover{
					.ai-upload-mask{
						display: none;
					}
				}
			}
		}
		.ai-upload-loading{
			position: absolute;
			position: absolute;
			left: 50%;
			margin-left: -58px;
			top: 50%;
			margin-top: -15px;
		}
	}
</style>
<script>
import aiIcons from '../ai-icons/index.vue'
import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue'
	export default {
        components:{ aiIcons,uniLoadMore},
        props: {
			// 图片地址
			src:{
				type:String,
				default:''
			},
			//是否禁用
			disabled:{
				type:Boolean,
				default:false
			},
			//头信息
			header:{
				type:Object,
				default:()=>{},
			},
			//图标的颜色
			iconColor:{
				type:String,
				default:"#0099cc"
			},
			//图标大小
			iconSize:{
				type:[Number, String],
				default:36
			},
			//自动上传
			autoUpload:{
				type:Boolean,
				default:true,
			},
			//上传地址
			action:{
				type:String,
				default:'',
			},
			//上传的附加参数
			data:{
				type:Object,
				default:()=>{},
			},
			//上传文件字段名
			name:{
				type:String,
				default:'file'
			}
		},
		created(){
			//初始化绑定图片
			this.imgUrl=this.src;
		},
		mounted(){
			
		},
		data() {
            return {
				imgUrl:"",
				showLoading:false,
				status: 'loading',
				contentText: {
					contentrefresh: '图片上传中...',
				}
            }
        },
		methods:{
			remove:function(){
				if(!this.disabled){
					this.imgUrl="";
					let obj={
						path:""
					}
					this.$emit('success', JSON.stringify(obj));
				}
			},
			selectImg : function() {
				if(!this.disabled){
					let _this=this;
					uni.chooseImage({
						count:1,
						success:function(res){
							console.log(res)
							_this.imgUrl = res.tempFilePaths[0];
							if(_this.autoUpload){
								_this.submit();
							}
						},
					})
				}
			},
			submit:function(){
				let _this=this;
				this.showLoading=true;
				uni.uploadFile({
					url: _this.action, 
					filePath: _this.imgUrl,
					header:_this.header,
					name: _this.name,
					formData: _this.data,
					success: (uploadFileRes) => {
						this.showLoading=false;
						this.$emit('success', uploadFileRes.data);
					},
					fail:(uploadFileRes)=>{
						this.imgUrl="";
						this.showLoading=false;
						this.$emit('fail', uploadFileRes.data);
					}
				});
			},
		},
		watch:{
			src:function(){
				this.imgUrl=this.src;
			}
		}
	}
</script>

