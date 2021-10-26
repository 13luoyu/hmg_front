<!--主页主要部分，引用所有子部件-->
<template>
<div>
  <div class="find">
    <find></find>
  </div>
  <div class="mainContent">
    <mainContent></mainContent>
  </div>
  <div class="shop">
    <shop></shop>
  </div>
  <div class="good">
    <good></good>
  </div>
  <tail></tail>
</div>
</template>

<script>
import mainContent from "../../components/MainPage/mainContent"
import find from "../../components/MainPage/find";
import Shop from "../../components/MainPage/shop";
import Good from "./good";
import Tail from "../tail";


export default {
  name: "page",
  components: {Tail, Good, Shop, find, mainContent}
}
</script>

<style scoped>
.mainContent{
  position: relative;
  left: 20%;
  right: 20%;
  width: 60%;
  margin: 20px 0 0 0;
}
.find{
  position: absolute;
  width: 15%;
  left: 2%;
}
.shop{
  position: relative;
  left: 20%;
  right: 20%;
  margin: 20px 0 0 0;
  width: 60%;
}
.good{
  position: relative;
  left: 20%;
  right: 20%;
  margin: 20px 0 0 0;
  width: 60%;
}
</style>
