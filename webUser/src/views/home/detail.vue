<template>
    <div class="content">
        <div class="main-top color">
            <div class="main-top-info">
                <span>产品详情</span>
            </div>
        </div>
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
            <div class="index-detail-box">
                <div class="index-detail-box-title">办理流程</div>
                <div class="index-detail-box-steps">
                    <span>马上申请</span><em><img src="images/jiantou.png"></em>
                    <span>信贷经理来电沟通</span><em><img src="images/jiantou.png"></em>
                    <span>材料提交审核</span><em><img src="images/jiantou.png"></em>
                    <span>签订借款协议</span><em><img src="images/jiantou.png"></em>
                    <span>抵押办理</span><em><img src="images/jiantou.png"></em>
                    <span>审核放款</span>
                </div>
            </div>
            <div class="index-detail-box index-detail-card">
                <div class="card-center flex">
                    <div class="card-center-box">
                        <img src="images/cardLogo.png">
                        <div class="card-center-info">
                            <p>信贷经理：陈小斌</p>
                            <p>所属机构：多荣外包服务有限公司</p>
                            <p>
                                <span class="btn">已实名认证</span>
                                <span>获赞数:<em class="ocolorp">123</em></span>
                            </p>
                        </div>
                    </div>
                    <div class="card-center-btn">
                        <p class="mb10"><el-button type="primary">赞一个</el-button></p>
                        <p>介绍详细</p>
                    </div>
                </div>
            </div>
            <div class="index-detail-box">
                <div class="index-detail-box-btn" @click="apply">马上申请</div>
                <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>小驴贷立志于优选贷款产品和信贷经理，从而降低客户的融资成本。</p>
                <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>小驴贷不会向客户收费，若有人以本平台名义向您索取钱财，请勿上当受骗，以免给您带来损失！</p>
                <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>申请成功后您可以登录“个人中心”查看该笔贷款办理进度。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        let params = this.$route.query.params;
        if(params){
            this.info=JSON.parse(params);
        }
    },
    mounted() {
        
    },
    data(){
        return{
            info:'',
            top:'1',
        }
    },
    computed: {
        
    },
	methods: {
        apply:function(){
            
        }
	},
    components: {
        
    }
}
</script>
