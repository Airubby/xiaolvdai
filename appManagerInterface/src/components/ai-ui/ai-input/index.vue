<template>
    <view class="input" :class="{'disabled':disabled}">
        <input :focus="focus_" :type="inputType" :value="inputValue" @input="onInput" :placeholder="placeholder" :disabled="disabled" 
		:maxlength="maxlength" 
		 :password="type==='password'&&!showPassword" @focus="onFocus" @blur="onBlur" :placeholder-style="placeholderStyle" />
		 <slot />
    </view>
</template>
<style lang="less" scoped>
    .input{
        margin-bottom: 15px;
        border-bottom: 1px solid #DCDFE6;
        display: flex;
        justify-content: space-between;
		padding: 0 10px;
		&.disabled{
			background:#DCDFE6;
		}
    }
</style>
<script>
	export default {
		components: {
			
		},
		props: {
			/**
			 * 输入类型
			 */
			type: String,
			/**
			 * 值
			 */
			maxlength:{
				type:Number,
				default:-1
			},
			value: {
				type:[String,Number],
				default:''
			},
			/**
			 * 占位符
			 */
            placeholder: String,
            // 占位符样式
            placeholderStyle:String,
			/**
			 * 是否显示密码可见按钮
			 */
			//是否禁用
			disabled:{
				type: Boolean,
				default:false, 
			},
			displayable: {
				type: [Boolean, String],
				default: false
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
				 * 显示密码明文
				 */
				showPassword: false,
				/**
				 * 是否获取焦点
				 */
				isFocus: false
			}
		},
		computed: {
			inputType() {
				const type = this.type
				return type === 'password' ? 'text' : type
			},
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
