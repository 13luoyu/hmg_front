<!--筛选框-->
<template>
  <div>
    <el-menu router class="el-menu" mode="vertical"
             text-color="#000000" active-text-color="#0000ff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>肉类</span>
        </template>
        <el-menu-item class="el-icon-chicken w" index="/searchResult?cnt=鸡&type=1"> 鸡</el-menu-item>
        <el-menu-item class="el-icon-chicken w" index="/searchResult?cnt=鸭&type=1"> 鸭</el-menu-item>
        <el-menu-item class="el-icon-chicken w" index="/searchResult?cnt=牛&type=1"> 牛</el-menu-item>
        <el-menu-item class="el-icon-chicken w" index="/searchResult?cnt=羊&type=1"> 羊</el-menu-item>
        <el-menu-item class="el-icon-chicken w" index="/searchResult?cnt=猪&type=1"> 猪</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>蔬菜</span>
        </template>
        <el-menu-item class="el-icon-sunny w" index="/searchResult?cnt=根菜&type=1"> 根菜类</el-menu-item>
        <el-menu-item class="el-icon-sunny w" index="/searchResult?cnt=茎菜&type=1"> 茎菜类</el-menu-item>
        <el-menu-item class="el-icon-sunny w" index="/searchResult?cnt=叶菜&type=1"> 叶菜菜</el-menu-item>
        <el-menu-item class="el-icon-sunny w" index="/searchResult?cnt=花菜&type=1"> 花菜类</el-menu-item>
        <el-menu-item class="el-icon-sunny w" index="/searchResult?cnt=果菜&type=1"> 果菜类</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>水果</span>
        </template>
        <el-menu-item class="el-icon-apple w" index="/searchResult?cnt=浆果"> 浆果</el-menu-item>
        <el-menu-item class="el-icon-apple w" index="/searchResult?cnt=瓜果"> 瓜果</el-menu-item>
        <el-menu-item class="el-icon-apple w" index="/searchResult?cnt=橘果"> 橘果</el-menu-item>
        <el-menu-item class="el-icon-apple w" index="/searchResult?cnt=核果"> 核果</el-menu-item>
        <el-menu-item class="el-icon-apple w" index="/searchResult?cnt=仁果"> 仁果</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "find",
  data() {
    return{

    }
  },
  methods: {
    findCatagory: function (key){

    }
  }
}
</script>

<style scoped>
.w{
  width: 100%;
}
</style>
