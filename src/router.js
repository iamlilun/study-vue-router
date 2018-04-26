/*---------------------------
 |  router規則檔
 |----------------------------
 | 把原本寫在App下的規則提煉到這統一管理
 |
 */

//把vue跟vue-router給import進來
import Vue from 'vue';
import VueRouter from 'vue-router'

//把App也當成component引入(話說他本來就是component-.-")
import App from './App.vue';

//把之前import在App下的也import到這
import Products from './Products.vue'
import About from './About.vue'
import AboutUs from './AboutUs.vue'
import AboutYou from './AboutYou.vue'
import AboutHome from './AboutHome.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/', //把根目錄導到App
            component: App,
            children: [ //其它的變成App的children
                {
                    path: 'about',
                    component: About,
                    children: [
                        {path: '', component:AboutHome},
                        {path: 'us', component:AboutUs},
                        {path: 'you', component:AboutYou},

                        //要顯示一個以上的component可以用components:{name: component, xxx:xxx...}
                        {path: 'both', components:{
                            default: AboutUs,
                            another: AboutYou,
                        }},
                    ],
                },
                {
                    path: 'products/:id?',
                    name: 'prod', //path加上name就可以為router命名
                    component: Products,
                }, //加上 :xxx 就變成動態參數
            ],
        },
    ],
});