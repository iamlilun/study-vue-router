<template>
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <router-view/><!-- 這裡多加個router-view..讓children component可以顯示-->
  </div>
</template>

<script>
//render功能提煉到main.js
//router功能提煉到router.js
</script>

<style>

</style>
