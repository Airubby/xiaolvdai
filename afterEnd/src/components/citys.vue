<template>
    <el-dialog title="城市选择" :visible.sync="dialogInfo.visible" width="650px" v-dialogDrag append-to-body :close-on-click-modal="false">
        <el-scrollbar style="height:340px;" class="scrollbar">
            <div v-loading="loading" style="padding: 0 15px;">
                <el-radio-group v-model="city" class="city">
                    <el-radio label="全国" border style="margin-top:10px;" v-if="!dialogInfo.hideall">全国</el-radio>
                    <el-tabs  tab-position="top" style="height: 280px;" :class="{'mt25':!dialogInfo.hideall}">
                        <el-tab-pane label="A B C">
                            <el-radio label="鞍山" border>鞍山</el-radio>
                            <el-radio label="安庆" border>安庆</el-radio>
                            <el-radio label="安阳" border>安阳</el-radio>
                            <el-radio label="北京" border>北京</el-radio>
                            <el-radio label="包头" border>包头</el-radio>
                            <el-radio label="保定" border>保定</el-radio>
                            <el-radio label="蚌埠" border>蚌埠</el-radio>
                            <el-radio label="宝鸡" border>宝鸡</el-radio>
                            <el-radio label="滨州" border>滨州</el-radio>
                            <el-radio label="长春" border>长春</el-radio>
                            <el-radio label="长沙" border>长沙</el-radio>
                            <el-radio label="成都" border>成都</el-radio>
                            <el-radio label="重庆" border>重庆</el-radio>
                            <el-radio label="常州" border>常州</el-radio>
                            <el-radio label="常德" border>常德</el-radio>
                            <el-radio label="常熟" border>常熟</el-radio>
                            <el-radio label="沧州" border>沧州</el-radio>
                            <el-radio label="潮州" border>潮州</el-radio>
                            <el-radio label="郴州" border>郴州</el-radio>
                            <el-radio label="赤峰" border>赤峰</el-radio>
                            <el-radio label="滁州" border>滁州</el-radio>
                            <el-radio label="长治" border>长治</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="D E F">
                            <el-radio label="大连" border>大连</el-radio>
                            <el-radio label="东莞" border>东莞</el-radio>
                            <el-radio label="丹东" border>丹东</el-radio>
                            <el-radio label="大庆" border>大庆</el-radio>
                            <el-radio label="达州" border>达州</el-radio>
                            <el-radio label="大同" border>大同</el-radio>
                            <el-radio label="德阳" border>德阳</el-radio>
                            <el-radio label="德州" border>德州</el-radio>
                            <el-radio label="东营" border>东营</el-radio>
                            <el-radio label="鄂尔多斯" border>鄂尔多斯</el-radio>
                            <el-radio label="鄂州" border>鄂州</el-radio>
                            <el-radio label="福州" border>福州</el-radio>
                            <el-radio label="佛山" border>佛山</el-radio>
                            <el-radio label="抚顺" border>抚顺</el-radio>
                            <el-radio label="抚州" border>抚州</el-radio>
                            <el-radio label="阜阳" border>阜阳</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="G H">
                            <el-radio label="广州" border>广州</el-radio>
                            <el-radio label="贵阳" border>贵阳</el-radio>
                            <el-radio label="赣州" border>赣州</el-radio>
                            <el-radio label="广安" border>广安</el-radio>
                            <el-radio label="广元" border>广元</el-radio>
                            <el-radio label="贵港" border>贵港</el-radio>
                            <el-radio label="桂林" border>桂林</el-radio>
                            <el-radio label="哈尔滨" border>哈尔滨</el-radio>
                            <el-radio label="杭州" border>杭州</el-radio>
                            <el-radio label="合肥" border>合肥</el-radio>
                            <el-radio label="海口" border>海口</el-radio>
                            <el-radio label="呼和浩特" border>呼和浩特</el-radio>
                            <el-radio label="惠州" border>惠州</el-radio>
                            <el-radio label="衡阳" border>衡阳</el-radio>
                            <el-radio label="淮安" border>淮安</el-radio>
                            <el-radio label="湖州" border>湖州</el-radio>
                            <el-radio label="邯郸" border>邯郸</el-radio>
                            <el-radio label="汉中" border>汉中</el-radio>
                            <el-radio label="河源" border>河源</el-radio>
                            <el-radio label="菏泽" border>菏泽</el-radio>
                            <el-radio label="衡水" border>衡水</el-radio>
                            <el-radio label="怀化" border>怀化</el-radio>
                            <el-radio label="淮北" border>淮北</el-radio>
                            <el-radio label="淮南" border>淮南</el-radio>
                            <el-radio label="黄冈" border>黄冈</el-radio>
                            <el-radio label="黄石" border>黄石</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="J K L">
                            <el-radio label="济南" border>济南</el-radio>
                            <el-radio label="嘉兴" border>嘉兴</el-radio>
                            <el-radio label="金华" border>金华</el-radio>
                            <el-radio label="吉林" border>吉林</el-radio>
                            <el-radio label="江门" border>江门</el-radio>
                            <el-radio label="荆州" border>荆州</el-radio>
                            <el-radio label="济宁" border>济宁</el-radio>
                            <el-radio label="九江" border>九江</el-radio>
                            <el-radio label="吉安" border>吉安</el-radio>
                            <el-radio label="焦作" border>焦作</el-radio>
                            <el-radio label="揭阳" border>揭阳</el-radio>
                            <el-radio label="锦州" border>锦州</el-radio>
                            <el-radio label="晋中" border>晋中</el-radio>
                            <el-radio label="荆门" border>荆门</el-radio>
                            <el-radio label="昆明" border>昆明</el-radio>
                            <el-radio label="昆山" border>昆山</el-radio>
                            <el-radio label="开封" border>开封</el-radio>
                            <el-radio label="兰州" border>兰州</el-radio>
                            <el-radio label="廊坊" border>廊坊</el-radio>
                            <el-radio label="临沂" border>临沂</el-radio>
                            <el-radio label="洛阳" border>洛阳</el-radio>
                            <el-radio label="连云港" border>连云港</el-radio>
                            <el-radio label="柳州" border>柳州</el-radio>
                            <el-radio label="乐山" border>乐山</el-radio>
                            <el-radio label="聊城" border>聊城</el-radio>
                            <el-radio label="临汾" border>临汾</el-radio>
                            <el-radio label="六安" border>六安</el-radio>
                            <el-radio label="娄底" border>娄底</el-radio>
                            <el-radio label="泸州" border>泸州</el-radio>
                            <el-radio label="漯河" border>漯河</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="M N P">
                            <el-radio label="绵阳" border>绵阳</el-radio>
                            <el-radio label="马鞍山" border>马鞍山</el-radio>
                            <el-radio label="茂名" border>茂名</el-radio>
                            <el-radio label="眉山" border>眉山</el-radio>
                            <el-radio label="梅州" border>梅州</el-radio>
                            <el-radio label="南京" border>南京</el-radio>
                            <el-radio label="宁波" border>宁波</el-radio>
                            <el-radio label="南昌" border>南昌</el-radio>
                            <el-radio label="南通" border>南通</el-radio>
                            <el-radio label="南宁" border>南宁</el-radio>
                            <el-radio label="南充" border>南充</el-radio>
                            <el-radio label="南阳" border>南阳</el-radio>
                            <el-radio label="内江" border>内江</el-radio>
                            <el-radio label="宁德" border>宁德</el-radio>
                            <el-radio label="平顶山" border>平顶山</el-radio>
                            <el-radio label="莆田" border>莆田</el-radio>
                            <el-radio label="濮阳" border>濮阳</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="Q R S">
                            <el-radio label="青岛" border>青岛</el-radio>
                            <el-radio label="泉州" border>泉州</el-radio>
                            <el-radio label="秦皇岛" border>秦皇岛</el-radio>
                            <el-radio label="清远" border>清远</el-radio>
                            <el-radio label="齐齐哈尔" border>齐齐哈尔</el-radio>
                            <el-radio label="衢州" border>衢州</el-radio>
                            <el-radio label="曲靖" border>曲靖</el-radio>
                            <el-radio label="日照" border>日照</el-radio>
                            <el-radio label="上海" border>上海</el-radio>
                            <el-radio label="深圳" border>深圳</el-radio>
                            <el-radio label="沈阳" border>沈阳</el-radio>
                            <el-radio label="石家庄" border>石家庄</el-radio>
                            <el-radio label="苏州" border>苏州</el-radio>
                            <el-radio label="三亚" border>三亚</el-radio>
                            <el-radio label="绍兴" border>绍兴</el-radio>
                            <el-radio label="汕头" border>汕头</el-radio>
                            <el-radio label="汕尾" border>汕尾</el-radio>
                            <el-radio label="商丘" border>商丘</el-radio>
                            <el-radio label="上饶" border>上饶</el-radio>
                            <el-radio label="韶关" border>韶关</el-radio>
                            <el-radio label="邵阳" border>邵阳</el-radio>
                            <el-radio label="十堰" border>十堰</el-radio>
                            <el-radio label="随州" border>随州</el-radio>
                            <el-radio label="遂宁" border>遂宁</el-radio>
                            <el-radio label="宿迁" border>宿迁</el-radio>
                            <el-radio label="宿州" border>宿州</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="T W X">
                            <el-radio label="天津" border>天津</el-radio>
                            <el-radio label="太原" border>太原</el-radio>
                            <el-radio label="台州" border>台州</el-radio>
                            <el-radio label="唐山" border>唐山</el-radio>
                            <el-radio label="泰州" border>泰州</el-radio>
                            <el-radio label="铁岭" border>铁岭</el-radio>
                            <el-radio label="泰安" border>泰安</el-radio>
                            <el-radio label="武汉" border>武汉</el-radio>
                            <el-radio label="无锡" border>无锡</el-radio>
                            <el-radio label="温州" border>温州</el-radio>
                            <el-radio label="乌鲁木齐" border>乌鲁木齐</el-radio>
                            <el-radio label="芜湖" border>芜湖</el-radio>
                            <el-radio label="潍坊" border>潍坊</el-radio>
                            <el-radio label="威海" border>威海</el-radio>
                            <el-radio label="渭南" border>渭南</el-radio>
                            <el-radio label="西安" border>西安</el-radio>
                            <el-radio label="厦门" border>厦门</el-radio>
                            <el-radio label="徐州" border>徐州</el-radio>
                            <el-radio label="襄阳" border>襄阳</el-radio>
                            <el-radio label="湘潭" border>湘潭</el-radio>
                            <el-radio label="咸阳" border>咸阳</el-radio>
                            <el-radio label="西宁" border>西宁</el-radio>
                            <el-radio label="咸宁" border>咸宁</el-radio>
                            <el-radio label="孝感" border>孝感</el-radio>
                            <el-radio label="新乡" border>新乡</el-radio>
                            <el-radio label="信阳" border>信阳</el-radio>
                            <el-radio label="邢台" border>邢台</el-radio>
                            <el-radio label="许昌" border>许昌</el-radio>
                            <el-radio label="宣城" border>宣城</el-radio>
                        </el-tab-pane>
                        <el-tab-pane label="Y Z">
                            <el-radio label="烟台" border>烟台</el-radio>
                            <el-radio label="扬州" border>扬州</el-radio>
                            <el-radio label="宜昌" border>宜昌</el-radio>
                            <el-radio label="盐城" border>盐城</el-radio>
                            <el-radio label="义乌" border>义乌</el-radio>
                            <el-radio label="营口" border>营口</el-radio>
                            <el-radio label="银川" border>银川</el-radio>
                            <el-radio label="阳江" border>阳江</el-radio>
                            <el-radio label="宜宾" border>宜宾</el-radio>
                            <el-radio label="宜春" border>宜春</el-radio>
                            <el-radio label="益阳" border>益阳</el-radio>
                            <el-radio label="永州" border>永州</el-radio>
                            <el-radio label="玉林" border>玉林</el-radio>
                            <el-radio label="岳阳" border>岳阳</el-radio>
                            <el-radio label="运城" border>运城</el-radio>
                            <el-radio label="漳州" border>漳州</el-radio>
                            <el-radio label="郑州" border>郑州</el-radio>
                            <el-radio label="中山" border>中山</el-radio>
                            <el-radio label="珠海" border>珠海</el-radio>
                            <el-radio label="镇江" border>镇江</el-radio>
                            <el-radio label="株洲" border>株洲</el-radio>
                            <el-radio label="肇庆" border>肇庆</el-radio>
                            <el-radio label="张家港" border>张家港</el-radio>
                            <el-radio label="淄博" border>淄博</el-radio>
                            <el-radio label="枣庄" border>枣庄</el-radio>
                            <el-radio label="张家口" border>张家口</el-radio>
                            <el-radio label="周口" border>周口</el-radio>
                            <el-radio label="驻马店" border>驻马店</el-radio>
                            <el-radio label="遵义" border>遵义</el-radio>
                        </el-tab-pane>
                    </el-tabs>
                </el-radio-group>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<script>
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            city:"",
        }
    },
    methods:{
        
    },
    watch:{
        city:function(val){
            console.log(val);
            sessionStorage.city=val;
            this.$emit("backInfo",val);
            this.dialogInfo.visible=false;
        }
    },
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
