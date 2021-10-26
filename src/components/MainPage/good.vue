<!--主页显示的商品-->
<template>
  <div>
    <div class="shop_and_good" style="height: 900px">
      <div class="shop_head" style="background-color: rgb(0,182,217)">商品</div>
      <router-link class="good_content" id="good1" :to="{path:'/goodcnt',query:{cnt:'五花肉'}}">
        <img src="../../assets/image/五花肉.jpg">
        <p class="good_content_name">五花肉</p>
        <p class="good_content_address">环球港</p>
        <p class="good_content_price">￥29.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good2" :to="{path:'/goodcnt',query:{cnt:'鸡翅根'}}">
        <img src="../../assets/image/鸡翅根.jpg">
        <p class="good_content_name">鸡翅根</p>
        <p class="good_content_address">环球港</p>
        <p class="good_content_price">￥8.49<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good3" :to="{path:'/goodcnt',query:{cnt:'白菜'}}">
        <img src="../../assets/image/白菜.jpg">
        <p class="good_content_name">白菜</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥0.68<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good4" :to="{path:'/goodcnt',query:{cnt:'葱'}}">
        <img src="../../assets/image/葱.jpg">
        <p class="good_content_name">葱</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥1.00<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good5" :to="{path:'/goodcnt',query:{cnt:'胡萝卜'}}">
        <img src="../../assets/image/胡萝卜.jpg">
        <p class="good_content_name">胡萝卜</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥4.60<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good6" :to="{path:'/goodcnt',query:{cnt:'黄豆芽'}}">
        <img src="../../assets/image/黄豆芽.jpg">
        <p class="good_content_name">黄豆芽</p>
        <p class="good_content_address">上海环球港</p>
        <p class="good_content_price">￥1.98<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good7" :to="{path:'/goodcnt',query:{cnt:'红富士苹果'}}">
        <img src="../../assets/image/红富士苹果.jpg">
        <p class="good_content_name">红富士苹果</p>
        <p class="good_content_address">长宁龙之梦</p>
        <p class="good_content_price">￥7.68<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good8" :to="{path:'/goodcnt',query:{cnt:'香蕉'}}">
        <img src="../../assets/image/香蕉.jpg">
        <p class="good_content_name">香蕉</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥3.49<span class="good_content_price_weight">/500g</span></p>
      </router-link>
      <router-link class="good_content" id="good9" :to="{path:'/goodcnt',query:{cnt:'砂糖橘'}}">
        <img src="../../assets/image/砂糖橘.jpg">
        <p class="good_content_name">砂糖橘</p>
        <p class="good_content_address">长风大悦城</p>
        <p class="good_content_price">￥4.48<span class="good_content_price_weight">/500g</span></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "good"
}
</script>

<style scoped>
.shop_and_good {
  width: 100%;
  height: 500px;
  border: 2px solid rgb(229,229,229);
  clear: both;
  border-radius: 15px;
  background-color: white;
}
.shop_head {
  font-size: 20px;
  background-color: rgb(255,187,67);
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -2px;
  width: 97.5%;
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
  background-color: rgb(240,240,240);
}
.good_content img {
  width: 80%;
  height: 40%;
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
  color: rgb(179,166,196);
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
</style>
