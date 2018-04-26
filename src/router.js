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
                    alias: 'story', //替about取個別名，連story也會顯示about內容,不會被轉址
                    component: About,
                    children: [
                        {path: '', component:AboutHome},
                        {path: 'us', name:'home', component:AboutUs},
                        {path: 'you', component:AboutYou},
                        {
                            path: 'both',
                            alias: ['/2', '2', '3'], //別名也可以用陣列匹配
                            components:{
                                default: AboutUs,
                                another: AboutYou,
                        }},
                    ],
                },
                {
                    path: 'products/:id?',
                    name: 'prod',
                    component: Products,
                },
                {
                    path: '*', //星表示所有路徑..所以要放最下面,才不會跟上面的規則衝突

                    //轉址有3種方式可用：
                    //redirect: '/about/us' 1.基本轉址
                    //redirect: {name : 'home'} 2.轉址也能用具名方式..會導到名字為home的路由
                    redirect: (from) => { //3. 也可以是function模式..
                        console.log('from', from);
                        if(from.path == '/xxx') {
                            return {name: 'home'};
                        }
                    },
                }
            ],
        },
    ],
});