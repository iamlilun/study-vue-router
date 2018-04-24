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
            {path: '/about', component: About},
            {path: '/products', component: Products},
        ],
    }),
}
</script>

<style>

</style>
