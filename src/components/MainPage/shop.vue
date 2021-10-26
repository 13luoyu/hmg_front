<!--主页显示的商店-->
<template>
  <div class="shop_and_good">
    <div class="shop_head">商店</div>
    <router-link class="shop_content" :to="{path:'/global'}">
      <img src="../../assets/image/环球港.jpg">
      <p class="shop_content_name">环球港</p>
      <p class="shop_content_address">中山北路3300号</p>
    </router-link>
    <router-link class="shop_content" :to="{path:'/dragon'}">
      <img src="../../assets/image/长宁龙之梦.jpg">
      <p class="shop_content_name">长宁龙之梦</p>
      <p class="shop_content_address">长宁路1018号</p>
    </router-link>
    <router-link class="shop_content" :to="{path:'/changfeng'}">
      <img src="../../assets/image/长风大悦城.jpg">
      <p class="shop_content_name">长风大悦城</p>
      <p class="shop_content_address">大渡河路196号</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "shop"
}
</script>

<style scoped>
.shop_and_good{
  width: 100%;
  height: 500px;
  border: 2px solid rgb(229,229,229);
  clear: both;
  border-radius: 15px;
  background-color: white;
}

.shop_head{
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

.shop_content{
  border-radius: 10px;
  width: 30%;
  float: left;
  height: 400px;
  margin: 20px 0 0 20px;
  text-decoration: none;
  color: black;
}
.shop_content:hover{
  background-color: rgb(240,240,240);
}

.shop_content img {
  width: 90%;
  height: 60%;
  margin: 15px;
}
.shop_content_name {
  font-size: 20px;
  font-weight: 500;
  background: none;
  margin: 0 20px;
}
.shop_content_address {
  font-size: 10px;
  color: rgb(179,166,196);
  background: none;
  margin: 10px 20px;
}
</style>
