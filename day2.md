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