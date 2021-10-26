<!--某个商店的具体描述-->
<template>
  <div class="main">
    <div class="shop_and_good" style="height: 350px">
      <a class="cthead2" href="https://www.yuexing.cn/5a569edc-fd8a-7ff7-406a-1c6ceaf20ca2.shtml"
         target="_blank">环球港</a>
      <hr>
      <div class="cthead">定位</div>
      <div class="ct">
        上海环球港，坐落于上海市普陀、长宁2区交界处，东接凯旋路，西邻中山北路和内环高架，南靠宁夏路。轨道交通3号、4号、13号线直达环球港，附近还有11号线地铁站和内环高架双向匝道。同时，由于中山北路和内环高架是南京方向和杭州方向旅客通往上海两大国际机场的重要干线，内联外通的交通条件，使得环球港成为集聚人流的综合交通枢纽。<br>
        定位大商业，也因此成为上海业态最为丰富、品牌最为丰满、组合最为多元、消费体验最具个性化的城市综合体，涵盖时尚百货、餐饮小食、文化休闲、娱乐健身、甲级办公、五星酒店、展览演出等。环球港云集了400多家品牌店，100多家餐饮酒吧;有影院、剧院、溜冰场;有健身房、spa、涉外书店、儿童游乐场;还有3万平方米的文化区和屋顶花园广场构成的众多秀场，共同构成了完整的购物体验消费链和商旅文结合，联动发展的大平台。
      </div>
    </div>
    <div class="blank"></div>
    <div class="shop_and_good" style="height: 600px">
      <div class="shop_head" style="background-color: rgb(0,182,217)">推荐商品</div>
      <router-link v-for="(searchrs, index) in searchrss" class="good_content" id="good1"
                   :to="{path:'/goodcnt',query:{cnt:searchrs}}" key="index">
        <img id="img" :src="require('@/assets/image/'+searchrs.name+'.jpg')">
        <p class="good_content_name">{{searchrs.name}}</p>
        <p class="good_content_price"><span id="price1">{{searchrs.price}}</span>
          <span class="good_content_price_weight">/500g</span></p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GlobalVariable from "../GlobalVariable";

export default {
  name: "shopcnt",
  data() {
    return {
      shopName: '',
      searchrss: new Array(),
    }
  },
  methods: {
    onceLoad: function () {
      this.shopName = this.$route.query.cnt;
      axios.get(GlobalVariable.serverGoodShopAddr+"/search/good/shop?shopId="+1)
      .then(response => {
        if(response.status==200){
          var data=response.data;

        }else{
          console.log("error");
        }
      })
    }
  },
  mounted() {
    this.onceLoad();
    window.scrollTo(0,0);
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
