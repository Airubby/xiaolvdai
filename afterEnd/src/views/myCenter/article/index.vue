<template>
    <div class="appcontent">
        <!-- 文章管理 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入文章名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="searchFN">搜索</el-button>
                    </el-col>
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="add">新增文章</el-button>
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
                        <a @click="infoFn(scope.row,scope.$index)">查看</a> /
                        <a @click="infoFn(scope.row,scope.$index)">修改</a> /
                        <a @click="infoFn(scope.row,scope.$index)">删除</a>
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
              { prop: 'code', label: '编号',align:'center',minWidth:15},
              { prop: 'name', label: '标题',align:'center',minWidth:10},
              { prop: 'phone', label: '文章类型',align:'center',minWidth:15},
              { prop: 'sex', label: '文章作者',align:'center',minWidth:10},
              { prop: 'city', label: '阅读量',align:'center',minWidth:15},
              { prop: 'time', label: '发布时间',align:'center',minWidth:20},
              { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:180},
            ],
            table_data:[
                {code:"000001",name:"违规网贷的危害",phone:"行业动态",sex:"小刚",city:"600",source:"百度推广",order:"无",time:"2019-12-12 12:12:12",config:"小驴推广专员A"},
                {code:"000001",name:"违规网贷的危害",phone:"贷款知识",sex:"小刚",city:"600",source:"百度推广",order:"1",time:"2019-12-12 12:12:12",config:"小驴推广专员B"},
                {code:"000001",name:"违规网贷的危害",phone:"国家动态",sex:"小刚",city:"600",source:"百度推广",order:"3",time:"2019-12-12 12:12:12",config:"小驴推广专员C"},
                {code:"000001",name:"违规网贷的危害",phone:"行业动态",sex:"小刚",city:"600",source:"百度推广",order:"4",time:"2019-12-12 12:12:12",config:"小驴推广专员D"},
            ],
            infoData:{
                visible:false,
                id:"",
                title:""
            }
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        add:function(row){
            this.infoData.visible=true;
            this.infoData.title="文章添加"
        },
        config:function(){

        },
        infoFn:function(){
            this.infoData.visible=true;
            this.infoData.title="文章查看"
        },
	},
    
}
</script>
