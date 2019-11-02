<template>
    <div class="appcontent">
        <!-- 申请无效 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入订单编号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="searchFN">搜索</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-search-table-pagination
                type="local" 
                :params="initParams"
                :data="table_data"
                :showPagination="true"
                :show-select-all="true"
                :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="index" label="序号"></el-table-column>
            </el-search-table-pagination>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    components: {},
    created() {
        
    },
    mounted() {
        
    },
    data(){
        return{
            initParams:{
                code:'',
            },
            table_columns:[
                { prop: 'code', label: '订单编号',align:'center',minWidth:8},
                { prop: 'name', label: '充值金额',align:'center',minWidth:10},
                { prop: 'phone', label: '充值积分',align:'center',minWidth:10},
                { prop: 'sex', label: '信贷经理编号',align:'center',minWidth:8},
                { prop: 'city', label: '支付通道',align:'center',minWidth:8},
                { prop: 'time', label: '充值时间',align:'center',minWidth:15},
            ],
            table_data:[
                {code:"000001",name:"500元",phone:"520",sex:"0234234234",city:"支付宝",source:"A",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"500元",phone:"520",sex:"0234234234",city:"支付宝",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
                {code:"000001",name:"500元",phone:"520",sex:"0234234234",city:"微信",source:"C",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员C"},
                {code:"000001",name:"500元",phone:"520",sex:"0234234234",city:"支付宝",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员D"},
            ],
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
	},
    
}
</script>
