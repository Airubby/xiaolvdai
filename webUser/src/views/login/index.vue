<template>
	<div class="content">
		登录
    </div>
</template>

<script>
export default {
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		let checkpassword = (rule, value, callback) => {
			if (value === '') {
				this.user.psword="";
				this.$nextTick(() => {
					callback(new Error('请输入密码'));
				})
			} else {
				callback();
			}
		};
		return {
			loading:false,
			user:{
				userid:"",
				psword:""
			},
			rules: {
				userid:[
					{ required: true, message: '请输入账号', trigger: 'blur' },
				],
				psword:[
					{ required: true,  trigger: 'blur' ,validator:checkpassword},
				]
			}
		}
	},
	methods:{
		
		keyLogin:function(ev){
			if(ev.keyCode == 13){
				this.loginIn();
			}
		},
		loginIn:function(){
			this.$refs['form'].validate((valid) => {
				if(valid){
					this.loading=true;
					let a="tKb634uLRuFdugF0P01eKw=="
					console.log(this.$tool.Decrypt(a))
					this.user.psword=this.$tool.Encrypt(this.user.psword);
					this.$r.post('/login', this.user, r => {
						console.log(r);
						if(r.err_code=="0"){
							this.$message.success(r.err_msg);
							sessionStorage.userid=this.$tool.Encrypt(r.data.roleid);  //刷新页面的时候用userid获取权限问题；
							// sessionStorage.loginInfo= JSON.stringify(r.data);
							// var date=new Date();
							// var expiresDays=10;
							// //将date设置为10天以后的时间
							// date.setTime(date.getTime()+expiresDays*24*3600*1000);
							// //将userId和userName两个cookie设置为10天后过期
							// document.cookie=" userid="+this.user.userid+"; expires="+date.toGMTString();
							// this.$router.push({path:'/'});
						}else{
							this.$refs.psinput.focus();
							this.$message.error(r.err_msg);
						}
					});
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