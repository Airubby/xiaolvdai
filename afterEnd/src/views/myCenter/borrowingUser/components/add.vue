<template>
    <el-dialog title="新增用户" :visible.sync="dialogInfo.visible" width="450px" v-dialogDrag>
        <el-scrollbar style="height:260px;" class="scrollbar">
            <div v-loading="loading" class="dialog-box">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="85px" class="overhidden ValidateForm">
                    <el-row :gutter="10" class="mb15">
                        <el-col :span="24">
                            <el-form-item label="选择城市:">
                                <el-input v-model="initParams.city" readonly="" style="width:180px;margin-right:5px;"></el-input><a class="color" @click="cityInfo.visible=true">切换城市</a>
                                <baidu-map @ready="handler"></baidu-map>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="客户姓名:">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="性别:">
                                <el-radio-group v-model="initParams.sex">
                                    <el-radio label="1" border>先生</el-radio>
                                    <el-radio label="2" border>女士</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="客户电话:">
                                <el-input v-model="initParams.phone"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <city v-if="cityInfo.visible" :dialog-info="cityInfo" v-on:backInfo="selectCity"></city>
            </div>
        </el-scrollbar>
        <dialog-btn-info :dialogInfobtn="dialogInfo" @dialogSure="dialogSure"></dialog-btn-info>
    </el-dialog>
</template>

<script>
import city from '@/components/citys.vue'
import { mapState,mapGetters,mapMutations } from 'vuex'
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
export default {
    computed:{
        ...mapGetters({
            currentCity:"LocalCity"
        }),
        // currentCity:{
        //     get(){
        //         return this.initParams.city=this.$store.getters.LocalCity;
        //     }
        // }
    },
    created () {
        this.initParams.city=this.$store.getters.LocalCity;
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            cityInfo:{
                visible:false,
                hideall:true,
            },
            initParams:{
                phone:'',
				city:"",
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
            rules:{
                
            }
        }
    },
    methods:{
        dialogSure:function(){

        },
        handler ({BMap, map}) {
            if(this.$store.getters.map){
                let _this = this;
                //地理定位
                // const geolocation = new BMap.Geolocation();
                // geolocation.getCurrentPosition(function getInfo(position){
                //     let city = position.address.city;             //获取城市信息
                //     let province = position.address.province;    //获取省份信息
                //     _this.LocalCity =sessionStorage.city?sessionStorage.city:city;
                // }, function(e) {
                //     _this.LocalCity = "定位失败"
                // }, {provider: 'baidu'});

                //用户ip定位
                let myCity = new BMap.LocalCity();
                myCity.get(function getInfo(result){
                    let cityName = result.name;
                    map.setCenter(cityName);   //关于setCenter()可参考API文档---”传送门“
                    _this.$store.dispatch('setCity',cityName);
                    // _this.initParams.city=cityName;
                    console.log("map")
                },function(e){
                    _this.$store.dispatch('setCity',"定位失败");
                    // _this.initParams.city="定位失败";
                },{provider: 'baidu'})
                this.$store.dispatch('setMap',false);
            }
        },
        selectCity:function(info){
            this.$store.dispatch('setCity',info);
            // this.initParams.city=info;
        },
    },
    watch:{
        currentCity:function(val){
            this.initParams.city=val;
        }
    },
    components:{city,dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
