<template>
    <div class="appcontent">
        <!-- 推广渠道 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入名称或编号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="searchFN">搜索</el-button>
                    </el-col>
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="add">新增渠道</el-button>
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
        <add v-if="addInfo.visible" :dialog-info="addInfo"></add>
    </div>
</template>

<script>
import add from './components/add.vue'
export default {
    components: {add},
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
              { prop: 'code', label: '渠道编号',align:'center',minWidth:15},
              { prop: 'name', label: '渠道名称',align:'center',minWidth:15},
              { prop: 'city', label: '推广城市',align:'center',minWidth:10},
              { prop: 'source', label: '推广频道',align:'center',minWidth:20},
              { prop: 'order', label: '落地联接',align:'center',minWidth:20},
              { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:120},
            ],
            table_data:[
                {code:"000001",name:"假期推广",phone:"15225252525",sex:"30万",city:"成都",source:"四川金融信息服务有限公司",order:"www.baidu.com",time:"2019-12-12 12:12:12",config:"小驴推广专员A",dingdan:"首电联系"},
                {code:"000001",name:"假期推广",phone:"15225252525",sex:"30万",city:"成都",source:"四川金融信息服务有限公司",order:"www.baidu.com",time:"2019-12-12 12:12:12",config:"小驴推广专员B",dingdan:"首电联系"},
                {code:"000001",name:"假期推广",phone:"15225252525",sex:"30万",city:"成都",source:"四川金融信息服务有限公司",order:"www.baidu.com",time:"2019-12-12 12:12:12",config:"小驴推广专员C",dingdan:"首电联系"},
                {code:"000001",name:"假期推广",phone:"15225252525",sex:"30万",city:"全国",source:"四川金融信息服务有限公司",order:"www.baidu.com",time:"2019-12-12 12:12:12",config:"小驴推广专员D",dingdan:"提交资料"},
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
