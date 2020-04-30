<template>
	<checkbox-group @change="checkboxChange" class="checkbox-group">
		<label v-for="item in items" :key="item[params.value]" class="checkbox-label">
			<view class="checkbox-group-btn">
				<checkbox :value="item[params.value].toString()" :checked="value.map(String).indexOf(item[params.value].toString())!=-1" />
			</view>
			<view class="checkbox-group-text" :class="{'checkbox-active':value.map(String).indexOf(item[params.value].toString())!=-1}">{{item[params.label]}}</view>
		</label>
		<slot />
	</checkbox-group>
</template>

<script>
    export default {
        props: {
            value: {
				type: Array,
				default: []
			},
			params:{
				type:Object,
				default(){
					return {
						label: 'name',
						value: 'value',
					}
				}
			},
			items: {
				type: Array,
				default () {
					return []; //{id:"value",name:"name"}
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
		font-size: 12px;
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
