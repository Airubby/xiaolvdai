<template>
    <el-dialog title="" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false" :show-close="false">
        <el-scrollbar style="height:400px;" class="scrollbar">
            <div v-loading="loading" style="padding: 0 30px 20px;">
                <el-alert type="info" :closable="false" class="mb15">
                    <div class="flex mb5">
                        <strong class="mr25">发布日期：2019/02/14</strong>
                        <strong class="mr25">城市：成都</strong>
                        <strong class="ocolorp">今日获客服务费：35积分/条</strong>
                    </div>
                    <div class="color"><strong>今日活动：获赞300以上的信达经理，每条获客可返补5积分！</strong></div>
                </el-alert>
                <div class="index-detail-box info-border">
                    <div class="color mb5" style="font-size:14px;">产品发布说明</div>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>一、平台采用竞价获客模式， 您需要设置相应的竞价积分，在获客后会从余额中扣除相应积分。</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>二、平台有获客服务起价，每日推广成本不同，获客服务价会有所波动，将会在每天凌晨更新。</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>三、竞价积分将决定搜索中您产品的排序，若竞价积分相同，则按获赞数进行排名！</p>
                    <p class="index-detail-box-con"><i><img src="images/jiantou.png"></i>四、如果您的竞价积分低于当日获客服务起步价或者您的积分余额不足，产品将会自动下架！</p>
                </div>
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="90px">
                    <el-row :gutter="20" class="mb15">
                        <el-col :span="14">
                            <el-form-item label="竞价积分" prop="jifen">
                                <el-input v-model="initParams.jifen" style="width:150px;"></el-input><span class="ml5">积分</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="flex">
                    <el-button type="primary" size="medium" @click="submitForm()" style="width: 150px;">确定发布</el-button>
                    <el-button type="warning" size="medium" @click="cancel()" style="width: 150px;">暂不发布</el-button>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    p{
        line-height: 22px;
    }
    .sure{
        font-size: 18px;
        margin: 10px 0 15px 0;
    }
</style>

<script>
export default {
    created () {
        
    },
    destroyed(){
		this.instance.close();
	},
    mounted() {

    },
    data() {
        let checkNumber = (rules, value, callback) => {
			this.$tool.checkNumber({rules,value,callback});
		};
        return {
            loading:false,
            initParams:{
                jifen:''
            },
            rules:{
                jifen:[
					{ required: true,  trigger: 'change',validator:checkNumber},
				],
            }
        }
    },
    methods:{
        cancel:function(){
            this.dialogInfo.visible=false;
        },
        submitForm:function(){
            this.$notify.success("发布成功");
            this.dialogInfo.visible=false;
        }
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
