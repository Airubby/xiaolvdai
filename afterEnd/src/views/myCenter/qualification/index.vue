<template>
    <div class="appcontent">
        <!-- 资质认证 -->
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
                        <a @click="infoFn(scope.row,'资料审核')" v-if="scope.row.source=='B'">审核</a>
                        <a @click="infoFn(scope.row,'资料查看')" v-else>查看</a>
                    </div>
                </template>
                <template slot-scope="scope" slot="preview-source">
                    <span v-if="scope.row.source=='B'" class="ocolorp">审核中</span>
                    <span v-if="scope.row.source=='A'" class="color">审核通过</span>
                    <span v-if="scope.row.source=='C'" class="color999">未通过</span>
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
              { prop: 'name', label: '审核人员',align:'center',minWidth:10},
              { prop: 'phone', label: '手机号码',align:'center',minWidth:15},
              { prop: 'time', label: '认证提交时间',align:'center',minWidth:20},
              { prop: 'sex', label: '所属机构',align:'center',minWidth:25},
              { prop: 'city', label: '审核服务城市',align:'center',minWidth:15},
              { prop: 'config', label: '审核人员',align:'center',minWidth:25},
              { prop: 'source', label: '审核状态',align:'center',slotName:'preview-source',minWidth:15},
              { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:160},
            ],
            table_data:[
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"四川金融信息服务有限公司",city:"成都",source:"A",order:"无",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"四川金融信息服务有限公司",city:"上海",source:"B",order:"1",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"四川金融信息服务有限公司",city:"成都",source:"C",order:"3",time:"2019-12-12 12:12:12",config:"小驴审核专员C"},
                {code:"000001",name:"张小凡",phone:"15225252525",sex:"四川金融信息服务有限公司",city:"成都",source:"B",order:"4",time:"2019-12-12 12:12:12",config:"小驴审核专员D"},
            ],
            infoData:{
                visible:false,
            },
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        infoFn:function(){
            this.infoData.visible=true;
        },
	},
    
}
</script>
