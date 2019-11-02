<template>
    <div class="appcontent">
        <!-- 贷款产品 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px" class="overhidden">
                <el-row :gutter="10">
                    <el-col :span="5">
                        <el-form-item label="">
                            <el-input v-model="initParams.code" placeholder="请输入类别名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="searchFN">搜索</el-button>
                    </el-col>
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="addFn()">新增类别</el-button>
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
                        <a @click="addFn(scope.row,scope.$index)">编辑</a>
                    </div>
                </template>
            </el-search-table-pagination>
        </el-scrollbar>
        <!-- <add v-if="infoData.visible" :dialog-info="infoData"></add> -->
    </div>
</template>

<script>
// import add from './components/add.vue'
export default {
    // components: {add},
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
                { prop: 'name', label: '产品大类',align:'center',minWidth:10},
                { prop: 'phone', label: '类别名称',align:'center',minWidth:15},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:100},
            ],
            table_data:[
                {code:"000001",name:"信用贷款",phone:"公积金贷款",sex:"四川金融信息服务有限公司",city:"成都",source:"A",order:"无",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"信用贷款",phone:"公积金贷款",sex:"四川金融信息服务有限公司",city:"上海",source:"B",order:"1",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
                {code:"000001",name:"信用贷款",phone:"公积金贷款",sex:"四川金融信息服务有限公司",city:"成都",source:"C",order:"3",time:"2019-12-12 12:12:12",config:"小驴审核专员C"},
                {code:"000001",name:"抵押贷款",phone:"房屋抵押",sex:"四川金融信息服务有限公司",city:"成都",source:"B",order:"4",time:"2019-12-12 12:12:12",config:"小驴审核专员D"},
            ],
            infoData:{
                visible:false,
                id:"",
                name:"",
                title:"新增类别"
            },
        }
    },
    computed: {
        
    },
	methods: {
        searchFN:function(){

        },
        addFn:function(row){
            console.log(row)
            if(row){
                this.infoData.id=row.id;
                this.infoData.title="修改名称";
                this.infoData.name=row.phone;
            }else{
                this.infoData.id="";
                this.infoData.title="新增类别";
                this.infoData.name="";
            }
            this.infoData.visible=true;
        },
	},
    
}
</script>
