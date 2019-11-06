<template>
    <el-dialog title="新增部门" :visible.sync="dialogInfo.visible" width="850px" v-dialogDrag :close-on-click-modal="false">
        <div style="height:460px;" class="dialog-box">
            <el-button type="primary" @click="infoFn" class="mb10 fr">新增</el-button>
            <el-scrollbar style="height:380px;" class="scrollbar">
                <div v-loading="loading">
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
                                <a @click="infoFn(scope.row)">编辑</a>
                            </div>
                        </template>
                    </el-search-table-pagination>
                </div>
            </el-scrollbar>
        </div>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">确定</el-button>
            <el-button @click="dialogInfo.visible=false">退出</el-button>
        </div>
        <addbranch v-if="BranchInfo.visible" :dialog-info="BranchInfo" @backInfo="backInfo"></addbranch>
    </el-dialog>
</template>
<script>
import addbranch from './addbranch.vue'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            initParams:{},
            table_columns:[
                { prop: 'code', label: '编号',align:'center',minWidth:10},
                { prop: 'name', label: '部门名称',align:'center',minWidth:10},
                { prop: 'handle', label: '操作',align:'center',slotName:'preview-handle',width:100},
            ],
            table_data:[
                {code:"000001",name:"总经办",phone:"总经理",sex:"0234234234",city:"成都",source:"A",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员A"},
                {code:"000001",name:"推广一部",phone:"推广经理",sex:"0234234234",city:"上海",source:"B",order:"23.23元",time:"2019-12-12 12:12:12",config:"小驴审核专员B"},
            ],
            BranchInfo:{
                visible:false,
                id:"",
                name:"",
            }
        }
    },
    methods:{
        submitForm:function(){

        },
        infoFn:function(row){
            if(row){
                this.BranchInfo.id=row.id;
                this.BranchInfo.name=row.name;
                this.BranchInfo.title="编辑部门名称";
            }else{
                this.BranchInfo.id="";
                this.BranchInfo.name="";
                this.BranchInfo.title="新增部门名称";
            }
            this.BranchInfo.visible=true;
        },
        backInfo:function(){

        },
    },
    components:{addbranch},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
