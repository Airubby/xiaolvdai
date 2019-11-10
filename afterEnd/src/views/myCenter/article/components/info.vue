<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="1000px" v-dialogDrag :close-on-click-modal="false">
        <el-scrollbar style="height:450px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" ref="ValidateForm" label-width="85px" class="overhidden ValidateForm">
                    <el-row :gutter="25">
                        <el-col :span="16">
                            <el-form-item label="文章标题:">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="文章类型:">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16">
                            <el-form-item label="Tag:">
                                <el-input v-model="initParams.education"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="文章作者:">
                                <el-input v-model="initParams.salary"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="文章内容:" label-position="top"></el-form-item>
                            <tinymce-editor ref="editor"
                            v-model="msg"
                            height="300"
                            :disabled="disabled"
                            @onClick="onClick">
                            </tinymce-editor>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <div class="dialog-footer">
            <el-button type="primary"  @click="submitForm()">发布文章</el-button>
            <el-button @click="cancel">取消发布</el-button>
        </div>
    </el-dialog>
</template>
<script>
import TinymceEditor from '@/components/tinymce-editor/tinymce-editor'
export default {
    components:{TinymceEditor},
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            value:"",
            msg: 'Welcome to Use Tinymce Editor',
            disabled: false,
            options:[
                {value:"贷款知识",lable:"贷款知识"},
                {value:"行业动态",lable:"行业动态"},
                {value:"国家政策",lable:"国家政策"},
            ],
            top:'1',
            initParams:{
                currentCity:"成都",
				phone:"152222222222",
				name:'',
				sex:'',
				card:'',
				marriage:"",
				child:"",
				education:"",
				salary:"",
				monthlySalary:"",
				social:"",
				accumulation:"",
				nature:"",
				agelimit:"",
				ratepaying:"",
				person:"",
				house:"",
				housetype:"",
				car:"",
				cartype:"",
				insurance:"",
				insurancetype:""
			},
            cancelInfo:{
                visible:false
            }
        }
    },
    methods:{
        // 鼠标单击的事件
        onClick (e, editor) {
            console.log('Element clicked')
            console.log(e)
            console.log(editor)
        },
        submitForm:function(){

        },
        cancelForm:function(){
            this.cancelInfo.visible=true;
        },
        cancel:function(){
            this.dialogInfo.visible=false;
        }
    },
    
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
