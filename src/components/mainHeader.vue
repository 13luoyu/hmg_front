<!--所有网页的头部-->
<template>
  <header class="header">

    <router-link :to="{name: 'home'}">
      <img class="logo" src="../assets/image/惠民购logo.png">
    </router-link>

    <el-menu :default-active="activeIndex" class="choose"
             mode="horizontal" @select="changePage" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/recommend">推荐</el-menu-item>
      <el-menu-item index="/forecast">预测</el-menu-item>
    </el-menu>

    <el-input type="text" class="text" placeholder="请输入你感兴趣的内容" v-model="keywords">
      <el-button slot="append" class="el-icon-search" @click="search"></el-button>
    </el-input>

    <el-dropdown class="user" trigger="click" v-if="!isLogin">
      <img src="../assets/unlogin.png" class="userimg">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <div @click="login" class="itemWidth el-icon-user">&ensp;&ensp;登录/注册</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="user" trigger="click" v-if="isLogin">
      <img src="../assets/login.jpg" class="userimg">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <div @click="personalPage" class="itemWidth el-icon-sunny"> 我的主页</div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div @click="setting" class="itemWidth el-icon-setting"> 设置</div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div @click="logout" class="itemWidth el-icon-close"> 退出</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>


  </header>
</template>

<script>
import GlobalVariable from "./GlobalVariable";
export default {
  name: "mainHeader",
  data() {
    return {
      activeIndex: '/',
      keywords: '',
      isLogin: false,
    }
  },
  methods: {
    changePage: function (key) {
      console.log(key);//el-menu-item的index
    },
    login: function () {
      this.$router.push('/login');
    },
    personalPage: function () {
      console.log("personalPage");
    },
    setting: function () {
      console.log("setting");
    },
    logout: function () {
      console.log("logout");
    },
    search: function (){
      this.$router.push({path:'/searchResult',query:{cnt: this.keywords, type: '0'}});
      var url=window.location.href;
      if(url.indexOf("searchResult")!=-1)
        location.reload();
    }
  },
  mounted() {
    if(this.$route.query.isLogin=="true") {
      this.isLogin = true;
    }
  }
}
</script>

<style scoped>
.header {
  min-width: 1300px;
  background: white;
  height: 60px;
}

.logo {
  float: left;
  width: 70px;
  height: 70px;
  margin: -10px 3% 0 21%;
}

.choose {
  float: left;
  font-weight: bold;
}

.text {
  float: left;
  width: 25%;
  margin: 10px 3% 0 3%;
}

.user {
  float: left;
  margin: 10px 0 0 5%;
}

.userimg {
  width: 40px;
  height: 40px;
}

.itemWidth {
  width: 120px;
}
</style>
