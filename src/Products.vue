<template>
    <div>
        <h1>Products</h1>
        <h2>{{id}}</h2>
    </div>
</template>

<script>
    export default {
        //直接取用上層傳來的props..不用在computed -> this.$router.params.id
        //自然也就斬斷對router的依賴..這個component就能用在非vue-router render出來的地方
        props: ['id'],
    }
</script>