<template>
    <div class="content">
        <div class="flex-between">
            <div>
                <img src="images/index-logo.png">
            </div>
            <div class="index-nav">
                <router-link to="/page/index">首页</router-link>
                <em>|</em>
                <router-link to="/page/index">学习融资</router-link>
                <em>|</em>
                <router-link to="/page/index">大数据研究</router-link>
                <em>|</em>
                <router-link to="/page/index">手机浏览</router-link>
            </div>
        </div>
        <div class="banner">
            <img src="images/banner.png">
        </div>
        <div class="main-top hcolor">
            <div class="main-top-info">
                <span>产品搜索</span>
                <span class="color addr"><i class="el-icon-location"></i>{{currentCity}}</span>
                <span class="addr addrbtn" @click="cityInfo.visible=true">切换城市</span>
                <baidu-map @ready="handler"></baidu-map>
            </div>
        </div>
        <div class="index-form">
            <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
                <el-row :gutter="10">
                    <el-col :span="24" class="flex">
                        <el-form-item label="产品机构:" class="more">
                            <el-radio-group v-model="initParams.type" size="mini">
                                <el-radio label="1" border>所有</el-radio>
                                <el-radio label="2" border>银行</el-radio>
                                <el-radio label="3" border>消费金融</el-radio>
                                <el-radio label="4" border>小贷公司</el-radio>
                                <el-radio label="5" border>融资租赁</el-radio>
                                <el-radio label="6" border>典当行</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="flex">
                        <el-form-item label="产品类型:" class="more">
                            <el-radio-group v-model="initParams.type" size="mini">
                                <el-radio label="1" border>所有</el-radio>
                                <el-radio label="2" border>抵押产品</el-radio>
                                <el-radio label="3" border>信用产品</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="还款方式:">
                            <el-radio-group v-model="initParams.style" size="mini">
                                <el-radio label="1" border>所有</el-radio>
                                <el-radio label="2" border>先息后本</el-radio>
                                <el-radio label="3" border>等额本息</el-radio>
                                <el-radio label="4" border>等额本金</el-radio>
                                <el-radio label="5" border>随借随还</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="借款期限:">
                            <el-radio-group v-model="initParams.deadline" size="mini">
                                <el-radio label="1" border>所有</el-radio>
                                <el-radio label="2" border>1</el-radio>
                                <el-radio label="3" border>3</el-radio>
                                <el-radio label="4" border>6</el-radio>
                                <el-radio label="5" border>12</el-radio>
                                <el-radio label="6" border>24</el-radio>
                                <el-radio label="7" border>36</el-radio>
                                <el-radio label="8" border>48</el-radio>
                                <el-radio label="9" border>60</el-radio>
                                <el-radio label="10" border>120</el-radio>
                                <el-radio label="11" border>180</el-radio>
                                <el-radio label="12" border>240</el-radio>
                                <el-radio label="13" border>360</el-radio>
                            </el-radio-group>
                            <span class="ml5 color">期</span>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="index-con">
            <div class="index-con-box">
                <div class="index-con-box-img">
                    <img src="images/manager.png">
                    <span>已实名</span>
                </div>
                <div class="index-con-box-info">
                    <div class="color">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                    <div class="index-con-box-infocen">
                        <span>信贷经理:010101</span><em>|</em>
                        <span>四川多维外包服务有限公司</span><em>|</em>
                        <span>获赞次数252</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                </div>
                <div class="index-con-box-btn">
                    <p class="mb10"><el-button type="warning" @click="enterDetail">查看详情</el-button></p>
                    <p><span class="color">1232341</span>人申请</p>
                </div>
            </div>
            <div class="index-con-box">
                <div class="index-con-box-img">
                    <img src="images/manager.png">
                    <span>已实名</span>
                </div>
                <div class="index-con-box-info">
                    <div class="color">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                    <div class="index-con-box-infocen">
                        <span>信贷经理:010101</span><em>|</em>
                        <span>四川多维外包服务有限公司</span><em>|</em>
                        <span>获赞次数252</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                </div>
                <div class="index-con-box-btn">
                    <p class="mb10"><el-button type="warning" @click="enterDetail">查看详情</el-button></p>
                    <p><span class="color">1232341</span>人申请</p>
                </div>
            </div>
            <div class="index-con-box">
                <div class="index-con-box-img">
                    <img src="images/manager.png">
                    <span>已实名</span>
                </div>
                <div class="index-con-box-info">
                    <div class="color">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                    <div class="index-con-box-infocen">
                        <span>信贷经理:010101</span><em>|</em>
                        <span>四川多维外包服务有限公司</span><em>|</em>
                        <span>获赞次数252</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                </div>
                <div class="index-con-box-btn">
                    <p class="mb10"><el-button type="warning" @click="enterDetail">查看详情</el-button></p>
                    <p><span class="color">1232341</span>人申请</p>
                </div>
            </div>
            <div class="index-con-box">
                <div class="index-con-box-img">
                    <img src="images/manager.png">
                    <span>已实名</span>
                </div>
                <div class="index-con-box-info">
                    <div class="color">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                    <div class="index-con-box-infocen">
                        <span>信贷经理:010101</span><em>|</em>
                        <span>四川多维外包服务有限公司</span><em>|</em>
                        <span>获赞次数252</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                </div>
                <div class="index-con-box-btn">
                    <p class="mb10"><el-button type="warning" @click="enterDetail">查看详情</el-button></p>
                    <p><span class="color">1232341</span>人申请</p>
                </div>
            </div>
            <div class="index-con-box">
                <div class="index-con-box-img">
                    <img src="images/manager.png">
                    <span>已实名</span>
                </div>
                <div class="index-con-box-info">
                    <div class="color">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                    <div class="index-con-box-infocen">
                        <span>信贷经理:010101</span><em>|</em>
                        <span>四川多维外包服务有限公司</span><em>|</em>
                        <span>获赞次数252</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span>最低月利率0.55%</span><em>|</em>
                        <span>12、24、36期</span><em>|</em>
                        <span>等额本息</span>
                    </div>
                </div>
                <div class="index-con-box-btn">
                    <p class="mb10"><el-button type="warning" @click="enterDetail">查看详情</el-button></p>
                    <p><span class="color">1232341</span>人申请</p>
                </div>
            </div>
            <el-pagination
                background
                :page-size="3"
                @current-change="handleCurrentChange"
                layout="total,prev, pager, next,jumper"
                :total="520">
            </el-pagination>
        </div>
        <city v-if="cityInfo.visible" :dialog-info="cityInfo" v-on:backInfo="selectCity"></city>
    </div>
</template>

<script>

import city from './components/citys.vue'
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
    components: {city},
    created() {
        
    },
    mounted() {
        
    },
    computed:{
        ...mapGetters({
            currentCity:"LocalCity"
        }),
    },
    data(){
        return{
            initParams:{
				money:'',
                type:"1",
                style:"1",
				deadline:"1",
			},
            rules:{

            },
            cityInfo:{
                visible:false,
            }
        }
    },
	methods: {
        handleCurrentChange:function(val){
			console.log(`当前页: ${val}`);
		},
        enterDetail:function(){
            this.$router.push({path:'/page/detail',query:{
                params:JSON.stringify({id:"123"})
            }});
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
                    console.log("map")
                },function(e){
                    _this.$store.dispatch('setCity',"定位失败");
                },{provider: 'baidu'})
                this.$store.dispatch('setMap',false);
            }
        },
        selectCity:function(info){
            this.$store.dispatch('setCity',info);
        },
	},
    
}
</script>
