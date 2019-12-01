<template>
	<checkbox-group @change="checkboxChange" class="checkbox-group">
		<label v-for="item in items" :key="item.value" class="checkbox-label">
			<view class="checkbox-group-btn">
				<checkbox :value="item.value" :checked="value.indexOf(item.value)!=-1" />
			</view>
			<view class="checkbox-group-text" :class="{'checkbox-active':value.indexOf(item.value)!=-1}">{{item.name}}</view>
		</label>
	</checkbox-group>
</template>

<script>
    export default {
        props: {
            value: {
				type: Array,
				default: []
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
            checkboxChange(evt) {
                this.$emit('input', evt.target.value);
			}
        }
    }
</script>
<style scoped>
	.checkbox-group{
		display:flex;
		flex-wrap: wrap;
	}
	.checkbox-label{
		padding-right: 10px;
		margin-bottom: 10px;
	}
	.checkbox-group-btn{
		display:none;
	}
	.checkbox-group-text{
		border: 1px solid #dcdfe6;
		padding: 5px 12px;
		border-radius: 3px;
		font-size: 14px;
		cursor: pointer;
	}
	.checkbox-group-text:hover{
		border-color: #40A563;
		color: #40A563;
	}
	.checkbox-active.checkbox-group-text{
		border-color: #40A563;
		background: #40A563;
		color: #fff;
	}
	.checkbox-active.checkbox-group-text:hover{
		background: #40A563;
	}
</style>
