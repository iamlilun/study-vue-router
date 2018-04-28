<template>
    <div>
        <h1>CourseList</h1>
        <div>
            <div v-for="course in courses">
                <router-link :to="`/courses/${course.id}`">
                    <img :src="course.img"/>
                    {{course.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from './imgs/lesson1.jpg';
import img2 from './imgs/lesson2.jpg';
import img3 from './imgs/lesson3.jpg';


export default {
    data(){
        return {
            courses: [
                {id:1, img:img1, name:'Basic Course'},
                {id:2, img:img2, name:'Advanced Course'},
                {id:3, img:img3, name:'Extreme Course'},
            ],
        };
    },
};
</script>