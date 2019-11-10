<template>
    <el-dialog title="快递单号信息" :visible.sync="dialogInfo.visible" width="500px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:100px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" ref="ValidateForm" label-width="85px" class="overhidden ValidateForm">
                    <el-row :gutter="25">
                        <el-col :span="20" class="mb15">
                            <el-form-item label="快递单号:">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <dialog-btn-info :dialogInfobtn="dialogInfo" @dialogSure="dialogSure"></dialog-btn-info>
    </el-dialog>
</template>
<script>
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            options:[
                {value:"贷款知识",lable:"贷款知识"},
                {value:"行业动态",lable:"行业动态"},
                {value:"国家政策",lable:"国家政策"},
            ],
            top:'1',
            initParams:{
                currentCity:"成都",
				phone:"152222222222",
				name:'',
				sex:'',
				card:'',
				marriage:"",
				child:"",
				education:"",
				salary:"",
				monthlySalary:"",
				social:"",
				accumulation:"",
				nature:"",
				agelimit:"",
				ratepaying:"",
				person:"",
				house:"",
				housetype:"",
				car:"",
				cartype:"",
				insurance:"",
				insurancetype:""
			},
            cancelInfo:{
                visible:false
            }
        }
    },
    methods:{
        submitForm:function(){

        },
        cancelForm:function(){
            this.cancelInfo.visible=true;
        },
        cancel:function(){
            this.dialogInfo.visible=false;
        },
        onSuccess(res, file, fileList){
			this.fileList=[];
			console.log(res,file,fileList)
			this.loading=false;
			if(res.err_code=="0"){
				console.log('上传成功')
			}else{//上传失败
				this.$message.console.error("上传失败");
			}
			
		},
		onError(err, file, fileList){
			this.fileList=[];
			console.log(err,file,fileList)
			this.$message.warning(err);
			
		},
		onchange(file,fileList){
			console.log(file,fileList)
			var fileArry=file.name.split(".");
			var fileType=fileArry[fileArry.length-1];
			if(fileType=="jpg"||fileType=="JPG"||fileType=="PNG"||fileType=="png"){
				this.$refs.upload.submit();
			}else{
				this.fileList=[];
				this.$message.warning("只能上传jpg/png图片");
			}
		},
		beforeUpload(file){
			this.loading=true;
		},
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
