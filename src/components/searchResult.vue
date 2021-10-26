<template>
  <div class="shop_and_good">
    <div class="shop_head" style="background-color: rgb(0,182,217)">搜索结果：{{this.cnt}}</div>
    <router-link v-for="(searchrs, index) in searchrss" class="good_content" id="good1"
                 :to="{path:'/goodcnt',query:{cnt:searchrs}}" key="index">
      <img id="img" :src="require('@/assets/image/'+searchrs.name+'.jpg')">
      <p class="good_content_name">{{searchrs.name}}</p>
      <p class="good_content_price"><span id="price1">{{searchrs.price}}</span>
        <span class="good_content_price_weight">/500g</span></p>
    </router-link>
    <div  class="nextbt">
    <el-button type="primary" @click="nextpage">下一页</el-button></div>
    </div>
</template>

<script>
import GlobalVariable from "./GlobalVariable";
import axios from "axios";
export default {
  name: "searchResult",
  data(){
    return{
      cnt: '',
      type: '',
      page: 0,
      searchrss: new Array(),
    }
  },
  methods: {
    input: function (){
      this.cnt=this.$route.query.cnt;
      this.type=this.$route.query.type;
      console.log(this.cnt);
    },
    getSearchRs: function (){
        axios.get(GlobalVariable.serverGoodShopAddr+"/search/good?name="+this.cnt)
        .then(response => {
          if(response.status==200){
            var data=response.data;
            for(var i=0;i<data.length;i++){
              this.searchrss.push(data[i]);
            }
          }else{
            console.log("error");
          }
        })
    },
    nextpage: function (){
      this.searchrss=new Array();
      this.page++;
      axios.get(GlobalVariable.serverGoodShopAddr+"/search/good?name="+this.cnt+"&pageNum="+this.page)
        .then(response => {
          if(response.status==200){
            console.log(response.data);
            var data=response.data;
            for(var i=0;i<data.length;i++){
              this.searchrss.push(data[i]);
            }
            console.log(this.searchrss);
          }else{
            console.log("error");
          }
        })
    }
  },
  mounted() {
    this.input();
    this.getSearchRs();
  },
}
</script>

<style scoped>
.shop_and_good {
  width: 70%;
  height: 1150px;
  border: 2px solid rgb(229,229,229);
  clear: both;
  border-radius: 15px;
  background-color: white;
  position: relative;
  left: 10%;
  margin: 50px 0 50px 0;
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
  left: -2px;
  width: 98%;
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
.nextbt{
  position: absolute;
  right: 20%;
  bottom: 20%;
}
</style>
