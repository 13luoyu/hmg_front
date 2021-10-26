<!--某个商品的具体描述-->
<template>
  <div class="main">
    <div class="good_description">
      <div class="goodhead"><span id="goodname" style="background: none">商品名</span><br>
        <span class="good_content_price2" id="goodprice">价格<span class="good_content_price_weight">/500g</span></span>
      </div>
      <div class="goodcontent" id="gooddescription">商品描述</div>
      <div class="goodtail">
        <p id="goodaddress">地址</p>
        <p>营业时间：周一至周日&nbsp;10:00-22:00</p>
      </div>
      <img width="30%" height="300px" id="goodimg">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GlobalVariable from "./GlobalVariable";
export default {
  name: "good",
  data() {
    return{
      good: '',
    }
  },
  methods: {
    onceLoad: function (){
      this.good=this.$route.query.cnt;
      $("#goodname").text(this.good.name);
      $("#gooddescription").text(this.good.description);
      $("#goodprice").text(this.good.price);
      $("#goodimg").attr("src",require('../assets/image/'+this.good.name+'.jpg'));
      axios.get(GlobalVariable.serverGoodShopAddr+"/get/good?id="+this.good.id)
      .then(response=>{
        if(response.status==200){
          var data=response.data;
          $("#goodaddress").text(data.type);
        }else{
          console.log("error");
        }
      })
    }
  },
  mounted: function (){
    this.onceLoad();
  }
}
</script>

<style scoped>
.main{
  width: 1000px;
  margin: 20px 0 0 200px;
}
.good_description{
  width: 100%;
  height: 400px;
  border: 2px solid rgb(229,229,229);
  clear: both;
  border-radius: 15px;
  box-shadow: 0 0 10px #cccccc;
  background-color: white;
}

.goodhead{
  height: 15%;
  width: 60%;
  float: left;
  font-size: 30px;
  margin: 10px 0px 0px 20px;
  padding: 20px 0px 0px 50px;
  background: none;
}
.goodcontent{
  height: 30%;
  width: 60%;
  float:left;
  font-size: 15px;
  margin: 20px 0 0 20px;
  padding: 20px 0 0 20px;
  border-top: 2px solid #eeeeee;
  background: none;
}
.goodtail{
  height: 20%;
  width: 60%;
  float: left;
  font-size: 20px;
  margin: 20px 0 0 20px;
  padding: 2px 0 0 20px;
  border-top: 2px solid #eeeeee;
  background: none;
}
.goodtail p{
  background: none;
}

.good_content_price2{
  font-size: 22px;
  color: red;
  background: none;
  margin: 5px;
}

img{
  margin-top: 50px;
  width: 322px;
  height: 180px;
}

</style>
