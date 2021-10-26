<!--某个商店的具体描述-->
<template>
  <div class="main">
    <div class="shop_and_good" style="height: 350px">
      <a class="cthead2" href="http://www.zsgylzm.cn/"
         target="_blank">长宁龙之梦</a>
      <hr>
      <div class="cthead">定位</div>
      <div class="ct">
        上海龙之梦购物中心于2005年12月18日开业，坐落于上海中山公园西侧，总建筑面积（包括办公楼和酒店）总计33万平方米，是上海迄今为止单位面积最大的购物中心之一。坐镇轨道交通2、3和4号线的交汇处，其中，2号线直达商场B2层，轻轨3、4号线直达商场2层。龙之梦购物中心以其独特的设计和优越的位置成为上海西区重要的交通枢纽，也是中国内地目前知名的金融城市交通换乘、购物、休闲、娱乐等多种功能于一体的大型商业、交通综合建筑，是一座名副其实的城中之城，也是中山公园商圈的地标性建筑。     龙之梦购物中心独特的“一站式”购物理念，提供给消费者多样化的商品选择与服务，感受宾至如归的亲切。这里是流行商品的聚集地，美食餐饮的天堂，更是广大消费者休闲娱乐的首选之地。龙之梦购物中心不但致力于给消费者提供人性化的服务，同时凭借愉快与崭新的购物环境，让消费者真正感受到购物与休闲的舒心和快乐
      </div>
    </div>
    <div class="blank"></div>
    <div class="shop_and_good" style="height: 600px">
      <div class="shop_head" style="background-color: rgb(0,182,217)">推荐商品</div>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'胡萝卜'}}">
        <img src="src/assets/image/胡萝卜.jpg">
        <p class="good_content_name">胡萝卜</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥3.60<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'猪肉'}}">
        <img src="src/assets/image/猪肉.jpg">
        <p class="good_content_name">猪肉</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥16.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'白菜'}}">
        <img src="src/assets/image/白菜.jpg">
        <p class="good_content_name">白菜</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥0.68<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'葱'}}">
        <img src="src/assets/image/葱.jpg">
        <p class="good_content_name">葱</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥1.00<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'三黄鸡'}}">
        <img src="src/assets/image/三黄鸡.jpg">
        <p class="good_content_name">三黄鸡</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥19.80<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'牛腱肉'}}">
        <img src="src/assets/image/牛腱肉.jpg">
        <p class="good_content_name">牛腱肉</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥38.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcnt",
  data() {
    return {
      shopName: '',
    }
  },
  methods: {
    onceLoad: function () {
      this.shopName = this.$route.query.cnt;
      console.log(this.shopName);
    }
  },
  mounted() {
    this.onceLoad();
  }
}
</script>

<style scoped>
.main{
  width: 80%;
  position: relative;
  left: 10%;
}

.shop_and_good {
  width: 100%;
  height: 500px;
  border: 2px solid rgb(229, 229, 229);
  clear: both;
  border-radius: 15px;
  background-color: white;
  margin-top: 50px;
}

.shop_head {
  font-size: 20px;
  background-color: rgb(255, 187, 67);
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -2px;
  left: -2px;
}

.good_content {
  border-radius: 10px;
  width: 30%;
  float: left;
  height: 250px;
  margin: 20px 0 0 20px;
  text-decoration: none;
  color: black;
}

.good_content:hover {
  background-color: rgb(240, 240, 240);
}

.good_content img {
  width: 215px;
  height: 120px;
  margin: 15px 40px;
}

.good_content_name {
  font-size: 20px;
  font-weight: 500;
  background: none;
  margin: 0 40px;
}

.good_content_address {
  font-size: 10px;
  color: rgb(179, 166, 196);
  background: none;
  margin: 10px 40px;
}

.good_content_price {
  font-size: 22px;
  color: red;
  background: none;
  margin: 5px 40px;
}

.good_content_price_weight {
  background: none;
  font-size: 10px;
}

.blank {
  margin: 50px 0px;
}

.cthead2 {
  margin: 10px 0px 0px 30px;
  font-size: 40px;
  padding: 5px;
  padding-left: 30px;
  background: none;
  text-decoration: none;
  color: black;
}

.cthead2:hover {
  color: orange;
}

.cthead {
  margin: 10px 0px 0px 30px;
  font-size: 30px;
  border-bottom: 6px solid #008200;
  padding: 5px;
  width: 180px;
  text-align: center;
  background: none;
}

.ct {
  margin: 20px 30px;
  background: none;
}
</style>
