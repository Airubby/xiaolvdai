<template>
    <div class="appcontent">
        <!-- 奖品管理 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入奖品名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="searchFN">搜索</el-button>
                    </el-col>
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="add">新增奖品</el-button>
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
                        <a @click="add(scope.row,scope.$index)">修改</a> /
                        <a @click="remove(scope.row,scope.$index)">删除</a>
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
              { prop: 'code', label: '奖品编号',align:'center',minWidth:15},
              { prop: 'name', label: '奖品名称',align:'center',minWidth:10},
              { prop: 'sex', label: '积分兑换',align:'center',minWidth:15},
              { prop: 'city', label: '已兑换数',align:'center',minWidth:15},
              { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:130},
            ],
            table_data:[
                {code:"000001",name:"iPhone 11",phone:"行业动态",sex:"3522积分",city:"600",source:"百度推广",order:"无",time:"2019-12-12 12:12:12",config:"小驴推广专员A"},
                {code:"000001",name:"iPhone 11",phone:"贷款知识",sex:"3522积分",city:"600",source:"百度推广",order:"1",time:"2019-12-12 12:12:12",config:"小驴推广专员B"},
                {code:"000001",name:"iPhone 11",phone:"国家动态",sex:"3522积分",city:"600",source:"百度推广",order:"3",time:"2019-12-12 12:12:12",config:"小驴推广专员C"},
                {code:"000001",name:"iPhone 11",phone:"行业动态",sex:"3522积分",city:"600",source:"百度推广",order:"4",time:"2019-12-12 12:12:12",config:"小驴推广专员D"},
            ],
            infoData:{
                visible:false,
                title:"",
                id:""
            }
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        add:function(row){
            if(row){
                this.infoData.title="编辑奖品";
                this.infoData.id=row.id;
            }else{
                this.infoData.title="添加奖品";
                this.infoData.id="";
            }
            this.infoData.visible=true;
        },
        remove:function(){

        },
        infoFn:function(){
            this.infoData.visible=true;
        },
	},
    
}
</script>
