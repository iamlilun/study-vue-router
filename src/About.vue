<template>
    <div>
        <h1>About</h1>
        <router-link to="/about/us">Us</router-link>
        <router-link to="/about/you">You</router-link>
        <router-link to="/about/both">Both</router-link>
        <router-link :to="{name: 'prod', params:{id:18}}">shoes</router-link>
        <router-view/>
        <router-view name="another"/> <!--顯示命名的component-->
    </div>
</template>

