import Vue from 'vue'
import Router from 'vue-router'
import find from "../components/MainPage/find";
import mainContent from "../components/MainPage/mainContent";
import shop from "../components/MainPage/shop";
import page from "../components/page";
import mainPage from "../components/MainPage/mainPage";
import recmd from "../components/recommend/recmd";
import goodcnt from "../components/goodcnt";
import global from "../components/shop/global";
import dragon from "../components/shop/dragon";
import changfeng from "../components/shop/changfeng";
import searchResult from "../components/searchResult";
import login from "../components/user/login";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: page,
      children: [{
        path: '',
        component: mainPage,
        children: [{
          path: '',
          component: find,
          name: 'find',
        }, {
          path: '',
          component: mainContent,
          name: 'mainContent',
        }, {
          path: '',
          component: shop,
          name: 'shop',
        }]
      },{
        path: '/recommend',
        component: recmd,
      },{
        path: '/goodcnt',
        component: goodcnt,
      },{
        path: '/global',
        component: global,
      },{
        path: '/dragon',
        component: dragon,
      },{
        path: 'changfeng',
        component: changfeng,
      },{
        path: 'searchResult',
        component: searchResult,
      },{
        path: 'login',
        component: login,
      },]
    }
  ],

  scrollBehavior (to, from, savedPosition) { // 解决vue页面之间跳转，页面不是在顶部的问题
    return { x: 0, y: 0 }
  }
})
