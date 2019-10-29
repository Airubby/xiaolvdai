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
                <el-steps :active="active" finish-status="success" simple class="steps mb15">
                    <el-step title="首电联系"></el-step>
                    <el-step title="资料准备"></el-step>
                    <el-step title="提交审核" @click="checkActive(3)"></el-step>
                    <el-step title="签订协议" @click="checkActive(4)"></el-step>
                    <el-step title="放款成功" @click="checkActive(5)"></el-step>
                </el-steps>
                <el-button type="primary" size="medium" class="mb15" style="width:120px;" @click="submitForm()">保存进度</el-button>
                <div class="index-detail-box info-border" style="border:none;">
                    <div class="color mb5" style="font-size:14px;">小驴提示：</div>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>每完成一次进度更新，可获得系统奖励的一个“赞”，放款成功会另外获得10个“赞”。</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>客服人员会向客户进行回访，发现作弊行为我们将扣除20个“赞”。</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>积“赞”就是积累信用，“赞”数过低会影响您的产品展示优先级，获客消费成本提供，同时无法享受我们提供的一系列福利活动和神秘礼物！</p>
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
            active:1,
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
