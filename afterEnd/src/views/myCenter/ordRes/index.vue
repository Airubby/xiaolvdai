<template>
    <div class="appcontent">
        <!-- 申请订单 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入手机号或姓名"></el-input>
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
                <template slot-scope="scope" slot="preview-handle">
                    <div class="table-span">
                        <a @click="config(scope.row,scope.$index)">专员新配</a> /
                        <a @click="config(scope.row,scope.$index)">新增订单</a> /
                        <a @click="infoFn(scope.row,scope.$index)">查看</a>
                    </div>
                </template>
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
              { prop: 'code', label: '订单编号',align:'center',minWidth:15},
              { prop: 'name', label: '申请人',align:'center',minWidth:10},
              { prop: 'name1', label: '性别',align:'center',minWidth:10},
              { prop: 'phone', label: '手机号码',align:'center',minWidth:15},
              { prop: 'city', label: '所在城市',align:'center',minWidth:15},
              { prop: 'city1', label: '产品类型',align:'center',minWidth:15},
              { prop: 'source', label: '产品机构',align:'center',minWidth:20},
              { prop: 'order', label: '信贷经理',align:'center',minWidth:10},
              { prop: 'dingdan', label: '订单管理',align:'center',minWidth:25},
              { prop: 'config', label: '推广专员',align:'center',minWidth:25},
              { prop: 'time', label: '申请时间',align:'center',minWidth:20},
            ],
            table_data:[
                {code:"000001",name:"张小凡",name1:"先生",phone:"15********25",sex:"30万",city:"成都",city1:"工薪贷款",source:"四川金融信息服务有限公司",order:"3333",time:"2019-12-12 12:12:12",config:"小驴推广专员A",dingdan:"首电联系"},
                {code:"000001",name:"张小凡",name1:"先生",phone:"15********25",sex:"30万",city:"成都",city1:"房屋抵押",source:"四川金融信息服务有限公司",order:"1",time:"2019-12-12 12:12:12",config:"小驴推广专员B",dingdan:"首电联系"},
                {code:"000001",name:"张小凡",name1:"先生",phone:"15********25",sex:"30万",city:"成都",city1:"房屋抵押",source:"四川金融信息服务有限公司",order:"3",time:"2019-12-12 12:12:12",config:"小驴推广专员C",dingdan:"首电联系"},
                {code:"000001",name:"张小凡",name1:"先生",phone:"15********25",sex:"30万",city:"成都",city1:"工薪贷款",source:"四川金融信息服务有限公司",order:"4",time:"2019-12-12 12:12:12",config:"小驴推广专员D",dingdan:"提交资料"},
            ],
            infoData:{
                visible:false,
            }
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        add:function(){

        },
        config:function(){

        },
        infoFn:function(){
            this.infoData.visible=true;
        },
	},
    
}
</script>
