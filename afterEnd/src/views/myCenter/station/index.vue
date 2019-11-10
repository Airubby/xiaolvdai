<template>
    <div class="appcontent">
        <!-- 权限管理 -->
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
                        <el-button type="primary" @click="infoFn">新增岗位</el-button>
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
        <add v-if="StationInfo.visible" :dialog-info="StationInfo"></add>
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
                { prop: 'code', label: '编号',align:'center',minWidth:15},
                { prop: 'name', label: '部门名称',align:'center',minWidth:10},
                { prop: 'phone', label: '岗位名称',align:'center',minWidth:30},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:120},
            ],
            table_data:[
                {code:"000001",name:"总经办",phone:"总经理",sex:"0234234234",city:"成都",source:"A",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"推广一部",phone:"推广经理",sex:"0234234234",city:"上海",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
                {code:"000001",name:"商务一部",phone:"商务专员",sex:"0234234234",city:"成都",source:"C",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员C"},
                {code:"000001",name:"技术研发部",phone:"工程师",sex:"0234234234",city:"成都",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员D"},
            ],
            StationInfo:{
                visible:false,
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
            if(row){
                this.StationInfo.title="编辑岗位";
            }else{
                this.StationInfo.title="新增岗位";
            }
            this.StationInfo.visible=true;
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
