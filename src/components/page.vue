<!--主页面，包括头部、中间内容、尾部-->
<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from "./mainHeader";

export default {
  name: "page",
  components: {
    mainHeader,
  }
}
</script>

<style scoped>

</style>
