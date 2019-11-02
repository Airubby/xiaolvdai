<template>
    <div class="appcontent">
        <!-- 发票管理 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入产品名称"></el-input>
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
                    <span v-if="scope.row.source=='B'" class="ocolorp">未开票</span>
                    <span v-if="scope.row.source=='A'" class="color">已开票</span>
                </template>
                <template slot-scope="scope" slot="preview-handle">
                    <div class="table-span">
                        <a @click="infoFn(scope.row,'开票')" v-if="scope.row.source=='B'">开票</a>
                        <a @click="infoFn(scope.row,'查看')" v-else>查看</a>
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
                { prop: 'code', label: '产品编号',align:'center',minWidth:8},
                { prop: 'name', label: '开票金额',align:'center',minWidth:12},
                { prop: 'sex', label: '信贷经理编号',align:'center',minWidth:10},
                { prop: 'city', label: '抬头',align:'center',minWidth:25},
                { prop: 'config', label: '税号',align:'center',minWidth:15},
                { prop: 'order', label: '收票邮箱',align:'center',minWidth:15},
                { prop: 'time', label: '申请时间',align:'center',minWidth:15},
                { prop: 'source', label: '状态',align:'center',slotName:'preview-source',minWidth:8},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:100},
            ],
            table_data:[
                {code:"000001",name:"500元",phone:"公积金贷款",sex:"0234234234",city:"成都金融有限公司",source:"A",order:"234234@qq.com",time:"2019-12-12 12:12:12",config:"AE56461313"},
                {code:"000001",name:"500元",phone:"公积金贷款",sex:"0234234234",city:"成都金融有限公司",source:"B",order:"234234@qq.com",time:"2019-12-12 12:12:12",config:"AE56461313"},
                {code:"000001",name:"500元",phone:"公积金贷款",sex:"0234234234",city:"成都金融有限公司",source:"A",order:"234234@qq.com",time:"2019-12-12 12:12:12",config:"AE56461313"},
                {code:"000001",name:"500元",phone:"房屋抵押",sex:"0234234234",city:"成都金融有限公司",source:"B",order:"234234@qq.com",time:"2019-12-12 12:12:12",config:"AE56461313"},
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
