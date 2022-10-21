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
引入import "swiper/css/swiper.css"; import Swiper from "swiper";
使用swiper类

watch+$nextTick:数据监听:监听已有数据;
nextTick():在下次DOM更新 循环结束之后执行延迟回调   在修改数据之后立即使用这个方法,获取更新后的DOM【可以保证页面中的结构一定是有的,而且经常和很多插件一起使用(都需要DOM存在了)】

代码：
watch:{
    bannerList:{
        handler(newValue,oldValue){
           this.$nextTick(()=>{
              var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
                 loop: true, // 循环模式选项
                 pagination: {
                 el: ".swiper-pagination", //换页器与哪个标签关联
                 clickable: true, //分页器是否可以点击
                  },
                 navigation: {
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
                  },
                //autoplay:true  自动播放
               });
           })
        }
    }
}

6)开发floor组件
6.1:getFloorList这个actions在哪里触发,是需要在Home路由组件当中发的,不能在Floor组件内部发actions,因为我们需要v-for遍历floor组件
6.2:v-for也可以在自定义标签当中使用
6.3:父子组件通信的方式
props:父组件通过v-bind绑定自定义属性赋值,子组件通过props接收
自定义事件:@on @emit 可以实现子向父传参
全局事件总线:$bus 全能
pubsub-js:vue当中几乎不用  全能
插槽
vuex

7)把首页当中的轮播图拆分为一个共用全局组件(相同结构与使用)
切记:开发项目的时候,如果看到一个组件在很多地方都使用,把它变成全局组件,
注册一次,可以在任意地方使用,共用的组件|非路由组件放到components文件夹中

8)Search静态页面搭建
8.1书写静态页面【布局、样式】
8.2拆分组件
8.3获取服务器数据展示数据
8.4玩业务

是搜索模块需要携带给接口的参数
{
  "category1Id": "61",//一级分类的id
  "category2Id": "61",//二级分类的id
  "category3Id": "61",//三级分类的id
  "categoryName": "手机",//产品的名字
  "keyword": "小米",//关键字
  "order": "1:desc",//排序
  "pageNo": 1,//当前第几页
  "pageSize": 10,//每一页需要展示多少条数据
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],//平台属性的选择参数
  "trademark": "4:小米"//品牌参数
}

注意：搜索的接口，需要传递参数，至少是一个空对象（KV没有，但是至少给服务器一个对象）
3)获取search模块数据
4)展示商品列表数据





5)根据用户的搜索条件展示不同的数据。

根据前台传递参数决定的
根据不同条件，展示不同的数据。----->取决于后台返回的数据


1:发请求，获取搜索模块的数据
2:根据用户搜索的条件携带参数给服务器，展示用户搜索的内筒



开发遇见问题:用户条件可以发生多次变化，但是咱们的请求，只是会发一次【mounted中书写的】


请求的性能优化:
发一个请求，需要向服务器携带参数：带100个参数   带1参数  【消耗宽带】
对于给服务器携带的参数：如果数值为undefind，向服务器发请求的时候，参数会携带给服务器的