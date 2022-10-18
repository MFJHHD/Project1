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

4)开发Home首页当中的ListContainer组件与Floor组件?
http://docschina.org/   (前端常用库)   (ctrl+g搜索框)
服务器返回的数据(接口)只有商品分类菜单分类数据,对于ListContainer组件数据服务器没有提供的
mock数据(模拟):需要用到插件mockjs
mock使用步骤:
    1)在项目当中src文件夹中创建mock文件夹
    2)准备JSON数据(mock文件夹中创建相应的JSON文件)---格式化下,别留有空格(跑不起来)
    3)把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候,会把相应资源原封不动打包到dist文件夹中】
    4)创建mockServe.js通过mockjs插件实现模拟数据
    5)mockServe.js文件在入口文件中引入(至少需要执行一次,才能模拟数据)

5)ListContainer组件开发重点
安装swiper插件: npm install --save swiper@5