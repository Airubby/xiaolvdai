<template>
    <div class="appcontent">
        <!-- 用户投诉 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入编号"></el-input>
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
                <template slot-scope="scope" slot="preview-source">
                    <span v-if="scope.row.source=='B'" class="ocolorp">投诉中</span>
                    <span v-if="scope.row.source=='A'" class="color">投诉成功</span>
                    <span v-if="scope.row.source=='C'" class="color999">投诉撤销</span>
                </template>
                <template slot-scope="scope" slot="preview-handle">
                    <div class="table-span">
                        <a @click="infoFn(scope.row,'投诉审核')" v-if="scope.row.source=='B'">审核</a>
                        <a @click="infoFn(scope.row,'投诉查看')" v-else>查看</a>
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
                { prop: 'code', label: '订单编号',align:'center',minWidth:15},
                { prop: 'name', label: '投诉人',align:'center',minWidth:10},
                { prop: 'phone', label: '投诉原因',align:'center',minWidth:30},
                { prop: 'sex', label: '被投诉经理编号',align:'center',minWidth:12},
                { prop: 'time', label: '投诉时间',align:'center',minWidth:15},
                { prop: 'source', label: '状态',align:'center',slotName:'preview-source',minWidth:8},
                { prop: 'config', label: '客服人员',align:'center',minWidth:15},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:100},
            ],
            table_data:[
                {code:"000001",name:"张三",phone:"产品有问题，多次协商无效",sex:"0234234234",city:"成都",source:"A",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"张三",phone:"产品有问题，多次协商无效",sex:"0234234234",city:"上海",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
                {code:"000001",name:"张三",phone:"产品有问题，多次协商无效",sex:"0234234234",city:"成都",source:"C",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员C"},
                {code:"000001",name:"张三",phone:"产品有问题，多次协商无效",sex:"0234234234",city:"成都",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员D"},
            ],
            infoData:{
                visible:false,
                id:"",
                title:""
            },
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        infoFn:function(row,title){
            console.log(row)
            this.infoData.id=row.id;
            this.infoData.title=title;
            this.infoData.visible=true;
        },
	},
    
}
</script>
