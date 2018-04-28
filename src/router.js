/*---------------------------
 |  router規則檔
 |----------------------------
 | 把原本寫在App下的規則提煉到這統一管理
 |
 */

import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';
import Products from './Products.vue'
import About from './About.vue'
import AboutUs from './AboutUs.vue'
import AboutYou from './AboutYou.vue'
import AboutHome from './AboutHome.vue'

Vue.use(VueRouter);

export default new VueRouter({
    //mode: 'hash', //預設值..網址會多個#..
    mode: 'history', //網址沒#..但server要設定 url rewrite..
    routes:[
        {
            path: '/',
            component: App,
            children: [
                {
                    path: 'about',
                    component: About,
                    children: [
                        {path: '', component:AboutHome},
                        {path: 'us', name:'home', component:AboutUs},
                        {path: 'you', component:AboutYou},
                        {
                            path: 'both',
                            components:{
                                default: AboutUs,
                                another: AboutYou,
                        }},
                    ],
                },
                {
                    path: 'products/:id',
                    name: 'home',
                    component: Products,
                    props: (route)=>{
                        return {
                            id: route.params.id,
                        }
                    }
                },
            ],
        },
    ],
});