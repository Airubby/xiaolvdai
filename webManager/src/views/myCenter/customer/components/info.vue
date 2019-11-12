<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag>
        <el-scrollbar style="height:250px;" class="scrollbar">
            <div v-loading="loading" style="padding:0 15px;">
                <div class="mb10">申请产品：平安银行成都分行人民南路支行-工薪贷</div>
                <el-row :gutter="0">
					<el-col :span="7">
						<div class="bg uinfo">客户姓名：陈陈</div>
					</el-col>
					<el-col :span="6">
						<div class="cbg uinfo">性别：先生</div>
					</el-col>
					<el-col :span="11">
						<div class="obg uinfo">手机号码：15225252525</div>
					</el-col>
				</el-row>
                <div class="mb15">
                    
                </div>
                <div class="index-detail-box info-border" style="border:none;">
                    <div class="color mb5" style="font-size:14px;">小驴提示：</div>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>以下为客户自主提供的信息，请根据《信贷经理合作协议》妥善保护客户隐私，同时保护自身利益！</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>切记不要以小驴工作人员身份与客户联系，查实后会进行封号处理，进入黑名单永不合作。</p>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    .uinfo{
        color: #fff;
        height: 36px;
        line-height: 36px;
        text-align: center;
    }
    .cbg{
        background: #86A3C6;
    }
</style>

<script>
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            initParams:{
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
        }
    },
    methods:{
        
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
