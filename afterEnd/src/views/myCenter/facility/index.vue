<template>
    <div class="appcontent">
        <!-- 服务机构 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入机构名称"></el-input>
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
                        <a @click="add(scope.row,scope.$index)">编辑</a> /
                        <a @click="remove(scope.row,scope.$index)">删除</a>
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
              { prop: 'code', label: '机构编号',align:'center',minWidth:15},
              { prop: 'name', label: '机构名称',align:'center',minWidth:25},
              { prop: 'city', label: '机构信用',align:'center',minWidth:10},
              { prop: 'source', label: '经理人数',align:'center',minWidth:10},
              { prop: 'order', label: '产品数量',align:'center',minWidth:10},
              { prop: 'sex', label: '订单数量',align:'center',minWidth:10},
              { prop: 'phone', label: '成功放款数量',align:'center',minWidth:10},
            ],
            table_data:[
                {code:"000001",name:"四川金融信息服务有限公司",phone:"10单",sex:"20单",city:"2000赞",source:"20人",order:"20个",time:"2019-12-12 12:12:12",config:"小驴推广专员A",dingdan:"首电联系"},
                {code:"000001",name:"四川金融信息服务有限公司",phone:"10单",sex:"20单",city:"2000赞",source:"20人",order:"20个",time:"2019-12-12 12:12:12",config:"小驴推广专员B",dingdan:"首电联系"},
                {code:"000001",name:"四川金融信息服务有限公司",phone:"10单",sex:"20单",city:"2000赞",source:"20人",order:"20个",time:"2019-12-12 12:12:12",config:"小驴推广专员C",dingdan:"首电联系"},
                {code:"000001",name:"四川金融信息服务有限公司",phone:"10单",sex:"20单",city:"2000赞",source:"20人",order:"20个",time:"2019-12-12 12:12:12",config:"小驴推广专员D",dingdan:"提交资料"},
            ],
            addInfo:{
                visible:false,
                id:'',
            }
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        add:function(row){
            this.addInfo.visible=true;
            this.addInfo.id=row?row:'';
        },
        remove:function(row){

        }
	},
    
}
</script>
