
<template>
    <el-dialog title="积分兑换" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag :close-on-click-modal="false" :show-close="true">
        <el-scrollbar style="height:360px;" class="scrollbar">
            <div v-loading="loading" style="padding: 0 20px 20px;">
                <el-alert type="info" :closable="false" class="mb25">
                    <div class="mb5">
                        <strong class="color">用户136****2532，您好！</strong>
                    </div>
                    <div class="mb5"><strong class="color">您兑换的产品是“扫地机器人！”兑换成功积分将扣除444积分</strong></div>
                </el-alert>
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="100px">
                    <el-row :gutter="20" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="收件人地址" prop="addr">
                                <el-input v-model="initParams.addr"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="收件人姓名" prop="jifen">
                                <el-input v-model="initParams.jifen"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="收件人电话" prop="phone">
                                <el-input v-model="initParams.phone"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="flex">
                    <el-button type="primary" size="medium" @click="submitForm()" style="width: 150px;">确定兑换</el-button>
                    <el-button type="warning" size="medium" @click="cancel()" style="width: 150px;">取消兑换</el-button>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>
<style lang="less" scoped>
    
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
        let checkPHONE = (rules, value, callback) => {
			this.$tool.checkPHONE({rules,value,callback});
		};
        return {
            loading:false,
            initParams:{
                jifen:'',
                addr:"",
                phone:"",
            },
            rules:{
                jifen:[
					{ required: true,  trigger: 'change'},
                ],
                addr:[
					{ required: true,  trigger: 'change'},
                ],
                phone:[
					{ required: true,  trigger: 'change',validator:checkPHONE},
				],
            }
        }
    },
    methods:{
        cancel:function(){
            this.dialogInfo.visible=false;
        },
        submitForm:function(){
            this.$notify.success("兑换成功");
            this.dialogInfo.visible=false;
        }
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
