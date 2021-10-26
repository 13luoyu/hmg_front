<!--某个商店的具体描述-->
<template>
  <div class="main">
    <div class="shop_and_good" style="height: 350px">
      <a class="cthead2" href="https://m.mallcoo.cn/a/home/10201"
         target="_blank">长风大悦城</a>
      <hr>
      <div class="cthead">定位</div>
      <div class="ct">
        上海大悦城潮流生活全新体验：国际同步。时尚资讯交流转换平台，定期主题式时尚趋势发布。
        前卫艺术。将购物环境与商业艺术有机融合，营造当代摩登的都市情调；当代艺术与时尚主题互动，加强艺术化商业时尚氛围。
        立体享乐。以都市白领人生阶段轨迹需求为核心，上下扩展。享乐外延囊括消费、交际、自我提升、性格塑造、情感归属等。
        新生活·新体验。最大化集结都会配套服务，满足多种消费需求，涵括：购物、娱乐、餐饮、休闲、享乐等服务；将时尚与科技融合，全楼WIFI覆盖，无线网络提供更多更新时尚ICON。<br>
        上海大悦城一期于2010年12月28日正式开业，主题为“我的约会主场”。上海大悦城目标人群瞄准了22-30岁的时尚年轻女性，建造潮流、时尚、性感的生活购物中心。
        大悦城是中粮集团旗下中粮置业主攻商业地产开发的重要品牌。中粮集团董事长宁高宁某日夜读《论语》有感于“近者悦，远者来”一句，由此偶得“大悦城”之名。大悦城的标志又以“大”字为本，引申丰富之意。
      </div>
    </div>
    <div class="blank"></div>
    <div class="shop_and_good" style="height: 600px">
      <div class="shop_head" style="background-color: rgb(0,182,217)">推荐商品</div>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'香蕉'}}">
        <img src="src/assets/image/香蕉.jpg">
        <p class="good_content_name">香蕉</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥3.49<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'四季豆'}}">
        <img src="src/assets/image/四季豆.jpg">
        <p class="good_content_name">四季豆</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥7.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'砂糖橘'}}">
        <img src="src/assets/image/砂糖橘.jpg">
        <p class="good_content_name">砂糖橘</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥4.48<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'羊前腿'}}">
        <img src="src/assets/image/羊前腿.jpg">
        <p class="good_content_name">羊前腿</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥39.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'布茄子'}}">
        <img src="src/assets/image/布茄子.jpg">
        <p class="good_content_name">布茄子</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥2.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" :to="{path:'/goodcnt',query:{cnt:'黄鱼'}}">
        <img src="src/assets/image/黄鱼.jpg">
        <p class="good_content_name">黄鱼</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥17.98<span class="good_content_price_weight">/500g</span></p>
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
