<template>
	<div class="mycenter-pd">
		<el-row :gutter="20" class="overhidden">
			<el-col :span="8">
				<div class="box-card box-shadow-card">
					<div class="mb5">
						<img src="images/phone.png" style="height: 120px;max-width:100%;">
					</div>
					<div class="flex conversion">
						<span>华为 MET30</span>
						<span>99积分</span>
					</div>
					<div class="conversion-btn">
						<el-button type="warning" @click="submitForm(1)">马上兑换</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="box-card box-shadow-card">
					<div class="mb5">
						<img src="images/phone.png" style="height: 120px;max-width:100%;">
					</div>
					<div class="flex conversion">
						<span>华为 MET30</span>
						<span>99积分</span>
					</div>
					<div class="conversion-btn">
						<el-button type="warning" @click="submitForm()">马上兑换</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="box-card box-shadow-card">
					<div class="mb5">
						<img src="images/phone.png" style="height: 120px;max-width:100%;">
					</div>
					<div class="flex conversion">
						<span>华为 MET30</span>
						<span>99积分</span>
					</div>
					<div class="conversion-btn">
						<el-button type="warning" @click="submitForm()">马上兑换</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="box-card box-shadow-card">
					<div class="mb5">
						<img src="images/phone.png" style="height: 120px;max-width:100%;">
					</div>
					<div class="flex conversion">
						<span>华为 MET30</span>
						<span>99积分</span>
					</div>
					<div class="conversion-btn">
						<el-button type="warning" @click="submitForm()">马上兑换</el-button>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="box-card box-shadow-card">
					<div class="mb5">
						<img src="images/phone.png" style="height: 120px;max-width:100%;">
					</div>
					<div class="flex conversion">
						<span>华为 MET30</span>
						<span>99积分</span>
					</div>
					<div class="conversion-btn">
						<el-button type="warning" @click="submitForm()">马上兑换</el-button>
					</div>
				</div>
			</el-col>
		</el-row>
		<send v-if="send.visible" :dialogInfo="send"></send>
		<info v-if="info.visible" :dialogInfo="info"></info>
	</div>
</template>

<script>
import send from './components/send.vue'
import info from './components/info.vue'
export default {
	components:{send,info},
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		return {
			send:{
				visible:false,
			},
			info:{
				visible:false,
			}
		}
	},
	methods:{
		submitForm:function(type){
			if(type=='1'){
				this.info.visible=true;
			}else{
				this.send.visible=true;
			}
			
		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>