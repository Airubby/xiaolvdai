<template>
	<el-scrollbar class="scrollbar">
		
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
		let checkpassword = (rules, value, callback) => {
			this.$tool.checkPasspord({rules,value,callback});
		};
		let checkPhone = (rules, value, callback) => {
			this.$tool.checkPHONE({rules,value,callback});
		};
		return {
			flag:false,
			loading:false,
			initParams:{
				userid:"",
				code:"",
				psword:""
			},
			rules: {
				phone:[
					{ required: true, trigger: 'change',validator:checkPhone },
				],
				code:[
					{ required: true,  trigger: 'change',message: '验证码不能为空' },
				],
				psword:[
					{ required: true,  trigger: 'blur' ,validator:checkpassword},
				]
			},
			policyInfo:{
				visible:false,
			},
			agreementInfo:{
				visible:false
			}
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