<template>
    <div class="appcontent">
        <!-- 借款用户 -->
        <el-scrollbar class="scrollbar">
            <el-form ref="form" :model="initParams" label-width="0px">
                <el-row :gutter="20">
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
                <el-table-column slot="prepend" type="selection"></el-table-column>
            </el-search-table-pagination>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
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
              { prop: 'code', label: '卡号',minWidth:10},
              { prop: 'type', label: '类型',minWidth:10},
              { prop: 'user', label: '领卡人',minWidth:10},
              { prop: 'indate', label: '有效期',minWidth:10},
              { prop: 'timegroup', label: '时间组',minWidth:10},
              { prop: 'handle', label: '操作',slotName:'preview-handle',width:150},
            ],
            table_data:[],
        }
    },
    destroyed(){
        
    },
    computed: {
        
    },
	methods: {

	},
    components: {
        
    }
}
</script>
