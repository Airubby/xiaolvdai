<template>
    <view class="textarea">
        <textarea :focus="focus_" :value="inputValue" @input="onInput" :maxlength="maxlength" :disabled="disabled"
		:auto-height="autoHeight"
		:placeholder="placeholder"
		 @focus="onFocus" @blur="onBlur" :placeholder-style="placeholderStyle" />
    </view>
</template>
<style lang="less" scoped>
    .textarea{
        border: 1px solid #e4e7ed;
		padding: 10px;
		min-height: 50px;
		border-radius: 5px;
		font-size: 12px;
    }
</style>
<script>
	export default {
		components: {
			
		},
		props: {
			/**
			 * 值
			 */
			value: {
				type: [String,Number],
				default: ""
			},
			/**
			 * 占位符
			 */
            placeholder: String,
            // 占位符样式
			placeholderStyle:String,
			maxlength:{
				type:Number,
				default:-1
			},
			autoHeight:{
				type: Boolean,
				default:true,
			},
			disabled:{
				type:Boolean,
				default:false,
			},
			/**
			 * 自动获取焦点
			 */
			focus: {
				type: [Boolean, String],
				default: false
			}
		},
		model: {
			prop: 'value',
			event: 'input'
		},
		data() {
			return {
				
				/**
				 * 是否获取焦点
				 */
				isFocus: false
			}
		},
		computed: {
			inputValue(){
				const value=this.value;
				return value===null?"":value;
				
			},
			focus_() {
				return String(this.focus) !== 'false'
			}
		},
		methods: {
			onFocus() {
				this.isFocus = true
			},
			onBlur() {
				this.$nextTick(() => {
					this.isFocus = false
				})
			},
			onInput(e) {
				this.$emit('input', e.target.value)
			}
		}
	}
</script>
