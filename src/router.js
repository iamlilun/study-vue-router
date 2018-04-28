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

                    //#### props 有三種方式使用
                    //1. 加個props屬性並設為true..component就不用被綁死用this.$route.params了.
                    // :id裡的param都會被當成props傳到Products.vue裡
                    //props: true,

                    //2. 用物件直接指定kev： value..當然path也不用:id了..
                    //props: {id: 3},

                    //3. 用函式方式...更靈活
                    props: (route)=>{
                        // return { //可直接return key : value
                        //     id: 30,
                        // }
                        return { //如果有指定參數的話..參數等同於this.$router，記得加回path最後的:id
                            id: route.params.id,
                        }
                    }
                },
            ],
        },
    ],
});