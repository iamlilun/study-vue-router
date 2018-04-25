import Vue from 'vue'
//引入router.js
import router from './router'

new Vue({
  el: '#app',
  router, //加入router.js..原形為router: router, 但名字一樣，就能簡寫成一個router,
  template: '<router-view/>', //把render改用template..加入<router-view/>就能顯示設在router.js下的component
});
