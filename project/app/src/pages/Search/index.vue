<template>
  <div>
    <!-- 测试 <h1>params参数:{{$route.params.keyword}}-----------{{keyword}}--{{a}}--{{b}}</h1>
    <h1>query参数:{{$route.query.k}}--{{k}}</h1> -->
    <TypeNav/>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav/index.vue';
export default {
    //路由组件传递props
    props: ["keyword", "a", "b", "k"],
    components: { TypeNav }
}
</script>

<style>

</style>