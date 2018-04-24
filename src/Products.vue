<template>
    <div>
        <h1>Products</h1>
        <h2>{{$route.params.id}}</h2> <!-- 用$route.params.參數 來取得動態參數資料-->
        <h2>{{id}}</h2>
    </div>
</template>

<script>
    const products = {
        18 : 'shoes',
        26 : 'T-shirts',
        37 : 'Pants',
    };

    export default {
        computed:{
            id(){
                return products[this.$route.params.id]; //js中param的取法
                //return products[this.$route.params.query.id]; //取得get資料用query.. ex:http://xxx.xx?id=18
            }
        }
    }
</script>