<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:460px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <div class="index-detail">
                    <div class="color index-detail-top">
                        <span class="mr10">平安银行成都分公司</span>
                        <el-radio-group v-model="top" size="mini">
                            <el-radio label="1" border>工薪贷款</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="index-detail-box">
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>申请额度：30000-200000元</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>还款方式：等额本息</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>月利率：0.89-1.24%(根据借款人资质系统评分决定)</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>贷款期限：12、24、36期</p>
                    </div>
                    <div class="index-detail-box">
                        <div class="index-detail-box-title">申请条件</div>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>征信要求：无不良征信记录</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>年龄要求：年龄在21-55周岁之间的中国公民</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>收入要求：月收入3000元以上</p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>贷款期限：本单位连续工作6个月以上</p>
                    </div>
                    <div class="index-detail-box">
                        <div class="index-detail-box-title">申请资料</div>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>借款人身份证</span></p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>工作证明（劳动合同复印件或者公司开具的工作证明，加盖公司公章）</span></p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>收入证明文件（银行发薪记录如存折记录或近三个月个银行流水或工资单，或者填写由我公司提供的格式文件收入证明，盖公司公章即可）</span></p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>住址证明文件（公用事业缴费单-上个月的水、电、煤气账单任意一张或房产证复印件）</span></p>
                    </div>
                    <div class="index-detail-box">
                        <div class="index-detail-box-title">附加费用</div>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>履行保险费（贷款金额0.3%）</span></p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>提前还款违约金：贷款不满6个月的，收取未还金额的3%；贷6个月-1年之内的，收取未还金额的2%贷款；1年以上的，收取未还金额的1%</span></p>
                        <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i><span>助贷费：实际放款金额1%</span></p>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">审核通过</el-button>
            <el-button type="warning"  @click="cancelForm()">审核驳回</el-button>
            <el-button @click="cancel">退出</el-button>
        </div>
        <cancel-info v-if="cancelInfo.visible" :dialog-info="cancelInfo" @backInfo="cancel"></cancel-info>
    </el-dialog>
</template>
<script>
import cancelInfo from './cancelInfo.vue'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
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
        }
    },
    components:{cancelInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
