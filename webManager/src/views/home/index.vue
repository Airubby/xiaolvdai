<template>
    <div class="content">
        <div class="main-top hcolor">
            <div class="main-top-info">
                <span>产品搜索</span>
                <span class="color addr"><i class="el-icon-location"></i>{{LocalCity}}</span>
                <span class="addr addrbtn" @click="cityInfo.visible=true">切换城市</span>
                <baidu-map @ready="handler"></baidu-map>
            </div>
        </div>
        <div class="index-form">
            <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="75px" class="overhidden ValidateForm">
				<el-row :gutter="10">
					<el-col :span="12">
						<el-form-item label="申请金额:">
							<el-input v-model="initParams.money" size="mini" style="width:calc(100% - 50px);margin-right:5px;"></el-input>元
						</el-form-item>
					</el-col>
					<el-col :span="24" class="flex">
						<el-form-item label="产品类型:" class="more">
							<el-radio-group v-model="initParams.type" size="mini">
								<el-radio label="1" border>所有</el-radio>
								<el-radio label="2" border>工薪贷款</el-radio>
								<el-radio label="3" border>公积金贷</el-radio>
								<el-radio label="4" border>保单贷款</el-radio>
								<el-radio label="5" border>经营贷款</el-radio>
								<el-radio label="6" border>房屋抵押</el-radio>
								<el-radio label="7" border>房屋二抵</el-radio>
								<el-radio label="8" border>新房按揭</el-radio>
								<el-radio label="9" border>车辆抵押</el-radio>
								<el-radio label="10" border>新车按揭</el-radio>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>上海大数金融服务外包有限公司</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>依米康科技集团</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>小米科技</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>上海大数金融服务外包有限公司</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>依米康科技集团</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
                <div class="index-con-box-info">
                    <div class="index-con-box-infotop">
                        <span>工薪贷</span><em>|</em>
                        <span>小米科技</span><em>|</em>
                        <span>信贷经理:010101</span>
                    </div>
                    <div class="index-con-box-infobottom">
                        <span class="color mr10"><em class="text">月利率</em>0.55-0.99%</span>
                        <span><em class="text">额度</em>30000-200000元</span><em>|</em>
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
export default {
    components: {city},
    created() {
        
    },
    mounted() {
        
    },
    data(){
        return{
            LocalCity:"正在定位...",
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
    computed: {
        
    },
	methods: {
        handleCurrentChange:function(val){
			console.log(`当前页: ${val}`);
		},
        enterDetail:function(){
            this.$router.push({path:'/detail',query:{
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
                    _this.LocalCity=sessionStorage.city?sessionStorage.city:cityName;
                },function(e){
                    _this.LocalCity = "定位失败"
                },{provider: 'baidu'})
                this.$store.dispatch('setMap',false);
            }
        },
        selectCity:function(info){
            this.LocalCity=info;
        },
	},
    
}
</script>
