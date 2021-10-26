<!--主页滑动图片-->
<template>
  <div class="content">
    <div id="totalrecommandcontent"><!--滚动轮播图片-->
      <div class="box">
        <a href="#"><img src="../../assets/image/肉类.jpg" alt="#"></a>
      </div>
      <div class="box">
        <a href="#"><img src="../../assets/image/蔬菜.jpg" alt="#"></a>
      </div>
      <div class="box">
        <a href="#"><img src="../../assets/image/水果.jpg" alt="#"></a>
      </div>
      <div class="box">
        <a href="#"><img src="../../assets/image/袋装零食.jpg" alt="#"></a>
      </div>
      <div class="box">
        <a href="#"><img src="../../assets/image/饮料.jpg" alt="#"></a>
      </div>
    </div>


  </div>
</template>

<script>
import $ from 'jquery';
import msCarousel from '../../router/msCarousel'
import validate from '../../router/validate'

export default {
  name: "mainContent",
  methods:{
    go: function () {
      try {
        var oHandlerHorizontal = $("#totalrecommandcontent").msCarousel({
          boxClass: 'div.box',
          width: 900,
          height: 450,
          scrollSpeed: 500,
          autoSlide: 4000
        }).data("msCarousel");
      } catch (e) {
        alert(e);
        alert(e.message);
      }
    }
  },
  mounted() {
    this.go();
  }
}
</script>

<style scoped>
.content {
  background: white;
}
#totalrecommandcontent{
  margin-left: 50px;
  height: 500px;
}

.box img{
  width: 900px;
  height: 450px;
}

</style>
