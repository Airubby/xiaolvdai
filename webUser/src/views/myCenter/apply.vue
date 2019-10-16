<template>
	<el-scrollbar class="scrollbar">
		<div class="mycenter-pd">
			<div class="info-box mb25">
				<p>亲爱的用户，7天内仅可发起一次贷款产品申请！请随时关注产品申请进度！</p>
			</div>
			<div class="info" v-if="show">
				<span>您暂时还没有申请：</span>
				<el-button type="success" @click="select()">马上选择贷款产品</el-button>
			</div>
			<div v-if="!show">
				<el-search-table-pagination
					type="local"
					:data="table_data"
                    :params="initParams"
                    :showPagination="true"
					:show-header="false"
					:page-sizes="[1]"
                    :columns="table_columns" ref="thisRef">   
                    <template slot-scope="scope" slot="preview-handle">
                        <el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
							</div>
							<div v-for="o in 4" :key="o" class="text item">
								{{'列表内容 ' + o }}
							</div>
						</el-card>
                    </template>
                </el-search-table-pagination>
			</div>
		</div>
	</el-scrollbar>
</template>

<script>
export default {
	components:{},
	created () {
	
  	},
	mounted() {
        
    },
	data(){
		
		return {
			loading:false,
			show:false,
			initParams:{},
			table_data:[
				{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},
				{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},
				{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},
				{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},
				{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},{1:"1"},
			],
			table_columns:[
				{ prop: 'handle', label: '操作',slotName:'preview-handle',minWidth:150},
            ],
		}
	},
	methods:{
		select:function(){

		}
	},
	watch:{
			
	},
}
</script>

<style scoped lang="less">
	.info{
		background: #F4F4F5;
		text-align: center;
		padding: 20px;
		border-radius: 5px;
		color: #909399;
	}
</style>