<template>
    <radio-group @change="radioChange" class="radio-group">
        <label v-for="(item, index) in items" :key="item.value" class="radio-label">
            <view class="radio-group-btn">
                <radio :value="item.value" :checked="item.value === value" />
            </view>
            <view class="radio-group-text" :class="{'radio-active':item.value === value}">
				<view class="name" :style="{fontSize:size+'px'}">{{item.name}}</view>
				<view class="detail">{{item.detail}}</view>
			</view>
        </label>
    </radio-group>
</template>

<script>
    export default {
        props: {
            value: {
				type: String,
				default: ""
			},
			size: {
				type: Number,
				default: 14
			},
			items: {
				type: Array,
				default () {
					return []; //{value:"value",name:"name"}
				}
			},
        },
        mounted(){
        },  
        computed: {
            
        },
        data() {
			return {
				
			}
		},
        methods: {
            radioChange(evt) {
                this.$emit('input', evt.target.value);
			}
        }
    }
</script>
<style scoped>
	.radio-group{
		display:flex;
		flex-wrap: wrap;
	}
	.radio-label{
		padding-right: 10px;
		margin-bottom: 10px;
	}
	.radio-group-btn{
		display:none;
	}
	.radio-group-text{
		border: 1px solid #dcdfe6;
		padding: 5px 12px;
		border-radius: 3px;
		font-size: 14px;
		cursor: pointer;
		text-align: center;
	}
	.radio-group-text:hover{
		border-color: #40A563;
		color: #40A563;
	}
	.radio-active.radio-group-text{
		border-color: #40A563;
		background: #40A563;
		color: #fff;
	}
	.radio-active.radio-group-text:hover{
		background: #40A563;
	}
	.detail{
		color: #999;
	}
	.radio-active.radio-group-text .detail{
		color: #fff;
	}
</style>
