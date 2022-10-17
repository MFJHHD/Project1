1)开发Search模块中的TypeNav商品分类菜单(过渡动画效果)
过渡动画:前提组件|元素务必有v-if|v-show指令才可以进行过渡动画
<transition name="a"></transition>
<style>
    //鼠标进入时过渡动画
    .a-enter{过渡动画开始状态}
    .a-enter-to{过渡动画结束状态}
    .a-enter-active{定义动画时间、速率(transition:all .5s linear)}
    //鼠标移出时过渡动画
    .a-leave{}
    .a-leave-to{}
    .a-leave-active{}
</style>

2)商品分类三级列表请求数据优化
将TypeNav->mounted中的请求数据放置在app根目录下的mounted中

3)合并params&query参数
header组件: if(this.$route.query){
            let loction = {name:'search',params:{keyword:this.keyword||undefined}}
            loction.query = this.$route.query
            this.$router.push(loction)
        }
TypeNav组件: 
    判断:如果路由跳转的时候,带有params参数,捎带传递过去
        if(this.$route.params){
          location.params = this.$route.params
          动态给location配置对象添加query属性
          location.query = query;
          路由跳转
          this.$router.push(location);
        }
