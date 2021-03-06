/*---------------------------
 |  router規則檔
 |----------------------------
 | 把原本寫在App下的規則提煉到這統一管理
 |
 */

import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';
import About from './About.vue'
import Courses from './Courses.vue'
import Booking from './Booking.vue'
import CourseList from './CourseList.vue'
import CourseDetail from './CourseDetail.vue'

Vue.use(VueRouter);

export default new VueRouter({
    //mode: 'hash', //預設值..網址會多個#..
    mode: 'history', //網址沒#..但server要設定 url rewrite..
    routes:[
        {
            path: '/',
            component: App,
            children: [
                {path: 'about', component:About},
                {path: 'booking', component:Booking},
                {
                    path: 'courses',
                    component:Courses,
                    children: [
                        {path: '', component: CourseList},
                        {path: ':id', component: CourseDetail},
                    ]
                },
            ],
        },
    ],
});