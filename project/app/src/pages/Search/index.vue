<template>
  <div>
    <h1>params参数:{{$route.params.keyword}}-----------{{keyword}}--{{a}}--{{b}}</h1>
    <h1>query参数:{{$route.query.k}}--{{k}}</h1>
  </div>
</template>

<script>
export default {
  //路由组件传递props
  props:['keyword','a','b','k']
}
</script>

<style>

</style>