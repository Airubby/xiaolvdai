<template>
    <div class="appcontent">
        <!-- 人事管理 -->
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
                    <el-col :span="11" class="text-right">
                        <el-button type="primary" @click="infoFn">新增人员</el-button>
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
                        <a @click="infoFn(scope.row)">编辑</a> /
                        <a @click="remove(scope.row)">删除</a>
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
                { prop: 'code', label: '工号',align:'center',minWidth:15},
                { prop: 'name', label: '姓名',align:'center',minWidth:10},
                { prop: 'phone', label: '手机号',align:'center',minWidth:10},
                { prop: 'sex', label: '状态',align:'center',minWidth:6},
                { prop: 'city', label: '所属部门',align:'center',minWidth:6},
                { prop: 'config', label: '权限岗位',align:'center',minWidth:15},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:120},
            ],
            table_data:[
                {code:"000001",name:"张三",phone:"15225252525",sex:"启用",city:"推广一部",source:"A",order:"23.23元",time:"2019-12-12 12:12:12",config:"推广经理"},
                {code:"000001",name:"张三",phone:"15225252525",sex:"启用",city:"推广一部",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"推广经理"},
                {code:"000001",name:"张三",phone:"15225252525",sex:"停用",city:"推广一部",source:"C",order:"23.23元",time:"2019-12-12 12:12:12",config:"推广经理"},
                {code:"000001",name:"张三",phone:"15225252525",sex:"停用",city:"推广一部",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"推广经理"},
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
        infoFn:function(row){
            console.log(row)
            if(row){
                this.infoData.id=row.id;
                this.infoData.title="新增人员信息";
            }else{
                this.infoData.id="";
                this.infoData.title="编辑人员信息";
            }
            this.infoData.visible=true;
        },
        remove:function(row){
            this.$confirm('确定删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$notify.success("删除成功");
            });
        }
	},
    
}
</script>
