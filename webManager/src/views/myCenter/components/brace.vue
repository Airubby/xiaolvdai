<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag>
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading" style="padding:0 15px;">
                <el-row :gutter="0" class="mb15">
					<el-col :span="7">
						<div class="bg uinfo">客户姓名：陈陈</div>
					</el-col>
					<el-col :span="17">
						<div style="line-height:36px;margin-left:10px;">订单编号：02824552565522</div>
					</el-col>
				</el-row>
                <div style="height:40px;line-height:40px;border-bottom:1px solid #E4E7ED;font-size:12px;" class="mb10">
                    仅在“首电联系”阶段可申请无效且出现以下情形之一，请选择：
                </div>
                <div class="mb15">
                    <el-select v-model="value" placeholder="请选择" style="width:300px;">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button type="primary" size="medium" class="mb15" style="width:120px;" @click="submitForm()">提交申请</el-button>
                <div class="index-detail-box info-border" style="border:none;">
                    <div class="color mb5" style="font-size:14px;">小驴提示：</div>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>申请成功后，我们会在48小时内，将扣费返还至您的账户！</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>恶意申请无效，系统将会扣除20赞，累计达3次恶意申请无效，我们将下架产品1周，您将无法推广您的产品，达到5次，系统将做封号处理。</p>
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
            options:[
                {value:'1',label:"手机号码为空,错号,无法接通"},
                {value:'4',label:"连续拨打2天，每天早中晚3次，客户未接听"},
                {value:'5',label:"同行恶意植入"},
            ],
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
        submitForm:function(){

        },
        checkActive:function(step){
            console.log(1231312)
            this.active=step;
        }
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
