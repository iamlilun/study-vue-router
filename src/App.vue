<template>
  <div>
    <div class="menu">
      <!--用 router-link 取代 a href-->
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>

    <!--顯示View-->
    <router-view/>
  </div>
</template>

<script>
import VueRouter from 'vue-router' //1. import vue-router
import Products from './Products.vue'
import About from './About.vue'

export default {
    router: new VueRouter({ //2. new
        routes:[
            //{path: '/:page', component: About}, "/" 後面就用動態參數會衝突，
            //更多規則 https://github.com/pillarjs/path-to-regexp
            {path: '/about', component: About},
            {path: '/products/:id', component: Products}, //加上 :xxx 就變成動態參數
            //{path: '/products/:id?', component: Products}, //加上 ？ 就表示可有可無的參數
        ],
    }),
}
</script>

<style>

</style>
