<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="info-box mb25">
				<p>实名认证是为了核实用户的真实性，有利于贷款办理。认证成功后，可获得小驴贷款10用户积分！</p>
			</div>
			<el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="85px">
				<el-row :gutter="20">
					<el-col :span="17">
						<el-form-item prop="name" label="真实姓名">
							<el-input v-model="initParams.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="17">
						<el-form-item prop="card" label="身份证号">
							<el-input v-model="initParams.card"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" :offset="4" class="mb15">
						<el-button type="primary" size="medium" style="width:200px;" @click="submitForm()" @keydown="keyLogin($event)">提 交</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</el-scrollbar>
</template>

<script>
export default {
	components:{},
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		return {
			flag:false,
			loading:false,
			initParams:{
				name:"",
				card:"",
			},
			rules: {
				
			},
		}
	},
	methods:{
		getCode:function(){

		},
		change:function(flag){
			if(flag=='true'){
				if(!this.flag){
					this.flag=true;
				}
			}else{
				if(this.flag){
					this.flag=false;
				}
			}
		},
		keyLogin:function(ev){
			if(ev.keyCode == 13){
				this.submitForm();
			}
		},
		submitForm:function(){
			this.$message.info("功能正在完善中，敬请期待！");
			return;
			this.$refs['ValidateForm'].validate((valid) => {
				if(valid){
					this.loading=true;
					console.log(13123123)
					
				}
			});
		},
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	
</style>