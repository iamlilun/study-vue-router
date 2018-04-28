<template>
  <div>
    <Menu/>
    <img src="./imgs/kv.jpg"/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './Menu';
export default {
    components: {
        Menu,
    }
}
</script>

<style>

</style>
