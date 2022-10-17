1:Home模块组件拆分
--先把静态页面完成
--拆分静态组件
--获取服务器的数据进行展示
--动态业务

2:三级联动组建完成
--由于三级联动在Home、Search、Detail,把三级联动注册为全局组件
好处:只需要注册一次,就可以在项目任意地方使用

3:完成其余静态页面
HTML + CSS + 图片资源  ---信息(结构、样式、图片资源)

4:POSTMAN测试接口
--http://gmall-h5-api.atguigu.cn + 资源接口

5:axios二次封装
XMLHttpRequest、fetch、JQ、axios
5.1、为什么需要进行二次封装axios?
请求拦截器、响应拦截器:请求拦截器，可以在发请求之前处理一些事务;响应拦截器,可以在服务器数据返回以后,可以处理一些事情
(npm install --save axios@0.24)

5.2、在项目当中经常API文件夹【axios】
接口当中:路径都带有/api
baseURL:"http://gmall-h5-api.atguigu.cn"

5.3、axios可以参考git|NPM关于axios文档

6:接口统一管理

项目很小:完全可以在组件的生命周期函数中发请求

项目大:统一管理

7:跨域问题
什么是跨域:协议、域名、端口号不同请求,称为跨域
http://localhost:8080/#/home  ---本地服务器
http://gmall-h5-api.atguigu.cn --后台服务器

JSON、CROS、代理

8:nprogress进度条的使用(每次发请求会显示进度条)
  安装(npm install --save nprogress@0.2)
  request.js中引入并引入样式(import "nprogress/nprogress.css")
  在请求拦截器和响应拦截器中分别调用nprogress.start和done方法

9:vuex状态管理器
9.1、vuex是什么？
vuex是官方提供的一个插件,状态管理库,集中式管理项目中组件公用的数据
使用场景:项目大、数据多、组件多、数据维护费劲
vuex核心
  state  ---- 仓库存储数据的地方
  mutation ---- 修改state的唯一手段，同步操作
  action  ---- 处理actions,通过触发mutations的方式间接变更数据,可以书写自己的业务逻辑,也可以处理异步
  getters  ---- 理解为计算属性,state发生改变它也会跟着变化,用于简化仓库数据,让组件获取仓库的数据更加方便,不会改变state数据,只是进行包装，形成新数据
  modules  ---- 实现Vuex仓库模块式开发存储数据

9.2、vuex基本使用
  src文件夹下创建store文件夹-->创建index.js-->引入Vue&Vuex-->const state={}(以及其他,modules除外)-->export default new Vuex.Store({state...})
9.3、vuex实现模块式开发
  如果项目过大,组件过多,接口也很多,数据也很多,可以让vuex实现模块式开发,让每个组件都有各自vuex
  步骤: 
  ①src文件夹下创建store文件夹-->创建index.js-->引入Vue&Vuex-->export default new Vuex.Store({})

  ②store文件夹下创建所需组件文件夹-->创建index.js-->const state = {}(以及其他,modules除外)-->export default {state...}

  ③export default new Vuex.Store({})-->export default new Vuex.Store({
     modules:{
      store文件夹下所创建所需的组件文件夹名称
    }
  })

10:完成TypeNav三级联动显示数据业务
  10.1、组件挂载时在vuex、home模块下发起请求，页面上动态渲染
  10.2、完成一级分类动态添加背景颜色：
    1)采用样式完成(.类名:hover{background-color:skyblue})
    2)通过JS完成(@mouseenter鼠标移入事件, @mouseleave鼠标移出事件),通过鼠标移入移出获取元素下标添加样式类,在移出时通过事件委托实现鼠标在移出下标为0的元素，但是在紧挨它的顶部兄弟元素时，仍然显示高亮
  10.3、通过JS控制二三级分类的显示与隐藏
    (:style="{display : currentIndex==index ? 'block':'none'}")

11:卡顿现象
  正常:(用户慢慢的操作),鼠标进入,每一个一级分类h3,都会触发鼠标进入事件
  非正常操作:(用户快速的操作),本身全部的一级分类应该都触发鼠标进入事件,但是事实只有部分触发了,是因为用户操作过客,浏览器没反应过来,如果当前回调函数中有大量业务,可能出现卡顿现象

  11.1、节流:在规定的间隔时间范围内不会重复触发,只有大于这个时间间隔才会触发回调,把频繁触发变为少量触发
  
  11.2、防抖:前面所有的触发都被取消,最后一次执行在规定时间之后才会触发,也就是说如果连续快速的触发,指挥执行一次

  lodash官网->lodash.js->引入
  (防抖:_.debounce    节流:_.throttle)

12:完成三级联动节流的操作
  查看node_modules是否有loadsh,没有(npm i loadsh)。
  有,为了性能优化在组件中按需引入(import throttle from 'lodash/throttle';),直接使用throttle,例如
  原文件:
  changeIndex(index){
        this.currentIndex = index
    },
  改为es5写法: 
    changeIndex:throttle(function(index){
        this.currentIndex = index
    },50),

13:三级联动组建的路由跳转与传递参数
三级联动用户可以点击的:一级、二级、三级分类,当点击时
Home模块跳转到Search模块,一级会把用户选中的产品(产品的名字、产品的id)在路由跳转的时候,进行传递

路由跳转:
声明式导航:router-link
编程式导航:push|replace

三级联动:
①:如果使用声明式导航router-link,可以实现路由的跳转与传递参数,但是需要注意,出现卡顿现象。(原因是router-link:是一个组件,当服务器的数据返回之后,循环出很多的router-link组件【创建组件实例】1000+ 创建组件的时候,一瞬间创建1000+很消耗内存,因此出现卡顿现象)
②:最好的解决方案:编程式导航+事件委托,在a标签上添加自定义属性data-categoryName,通过点击事件自带参数event.target.dataset判断子节点是否带有这个a标签自定义属性(if(data-categoryname){}),在判断中整理路由参数categoryName和category?Id,在一级、二级、三级分类分别添加自定义属性data-category1Id、data-category2Id、data-category3Id。在判断a标签的条件中分别判断这三个自定义属性，获取各自的category?Id参数,将参数进行整合,跳转
实例:
 goSearch(event){
        let element = event.target
        let {categoryname,category1id,category2id,category3id} = element.dataset
        //解决问题1:是否为a标签
        if(categoryname){
           let location = {name:'search'}
           let query = {categoryName:categoryname}
           //解决问题2,一级、二级、三级分类的a标签
           if(category1id){
             query.category1Id = category1id
           }else if(category2id){
            query.category2Id = category2id
           }else{
            query.category3Id = category3id
           }
           //整合参数
           location.query = query
           //路由跳转
           this.$router.push(location)
        }
    }