<template>
    <div>
        <h1>About</h1>
        <router-link to="/about/us">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-link to="/about/both">Both</router-link>

        <!--使用命名的路由只要用v-bind加{name:'路由名'}-->
        <!--參數也能命名..用params:{key：value}-->
        <router-link :to="{name: 'prod', params:{id:18}}">shoes</router-link>

        <router-view/> <!-- 其實就是<router-view name="default"/>-->

        <router-view name="another"/> <!--顯示命名的component-->
    </div>
</template>

