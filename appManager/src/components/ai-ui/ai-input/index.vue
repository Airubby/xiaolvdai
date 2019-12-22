<template>
    <view class="input">
        <input :focus="focus_" :type="inputType" :value="value" @input="onInput" :placeholder="placeholder"
		 :password="type==='password'&&!showPassword" @focus="onFocus" @blur="onBlur" :placeholder-style="placeholderStyle" />
    </view>
</template>
<style lang="less" scoped>
    .input{
        margin-bottom: 15px;
        border-bottom: 1px solid #DCDFE6;
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
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
			value: String,
			/**
			 * 占位符
			 */
            placeholder: String,
            // 占位符样式
            placeholderStyle:String,
			/**
			 * 是否显示密码可见按钮
			 */
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
