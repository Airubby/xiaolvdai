<template>
    <div class="appcontent">
        <!-- 借款用户 -->
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
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="add">新增用户</el-button>
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
                <el-table-column slot="prepend" type="selection"></el-table-column>
                <el-table-column slot="prepend" type="index" label="序号"></el-table-column>
                <template slot-scope="scope" slot="preview-handle">
                    <div class="table-span">
                        <a @click="config(scope.row,scope.$index)">专员重配</a> /
                        <a @click="config(scope.row,scope.$index)">新增订单</a> /
                        <a @click="infoFn(scope.row,scope.$index)">查看</a>
                    </div>
                </template>
            </el-search-table-pagination>
        </el-scrollbar>
        <info v-if="infoData.visible" :dialog-info="infoData"></info>
    </div>
</template>

<script>
import info from './components/info.vue'
export default {
    components: {info},
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
              { prop: 'code', label: '卡号',align:'center',minWidth:15},
              { prop: 'name', label: '姓名',align:'center',minWidth:10},
              { prop: 'phone', label: '手机号码',align:'center',minWidth:15},
              { prop: 'sex', label: '性别',align:'center',minWidth:10},
              { prop: 'city', label: '城市',align:'center',minWidth:15},
              { prop: 'source', label: '客户来源',align:'center',minWidth:20},
              { prop: 'order', label: '订单申请',align:'center',minWidth:10},
              { prop: 'time', label: '注册时间',align:'center',minWidth:20},
              { prop: 'config', label: '推广专员',align:'center',minWidth:25},
              { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:220},
            ],
            table_data:[
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"男",city:"成都",source:"百度推广",order:"无",time:"2019-12-12 12:12:12",config:"小驴推广专员A"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"男",city:"成都",source:"百度推广",order:"1",time:"2019-12-12 12:12:12",config:"小驴推广专员B"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"男",city:"成都",source:"百度推广",order:"3",time:"2019-12-12 12:12:12",config:"小驴推广专员C"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"男",city:"成都",source:"百度推广",order:"4",time:"2019-12-12 12:12:12",config:"小驴推广专员D"},
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
