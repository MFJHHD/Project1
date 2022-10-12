1:vue-cli脚手架初始化项目
node + webpack + 淘宝镜像

node_moudels文件夹:项目依赖

public文件夹:一般放置一些静态资源(图片)，需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动的打包到dist文件夹中

src文件夹(程序员源代码文件夹):

   assets文件夹:一般是放置静态资源(一般放置多个组件公用的静态资源),需要注意,放置在assets文件夹里面的静态资源,在webpack打包的时候，webpack会把静态资源当做一个模块，打包JS文件里

   components文件夹:一般放置的是非路由组件(全局组件)

   App.vue:唯一的根组件(.vue)
   main.js:程序入口文件,也是整个程序当中最先执行的文件

babel.config.js:配置文件(babel相关)

package.json文件:认为是项目‘身份证’,记录项目叫做什么、项目当中有哪些依赖、项目怎么运行

package-lock.json:缓存性文件

README.md:说明性文件

2:项目的其他配置

2.1项目运行起来的时候，让浏览器自动打开
--package.json
   "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

2.2eslint校验功能关闭
--在根目录在，创建vue.config.js
比如:声明变量但是没有使用eslint校验工具报错

2.3src文件夹简写，配置别名。 @
--jsconfig.json配置别名@提示【@代表src文件夹，这样将来文件过多，找的时候方便】
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "exclude": ["node_modules","dist"]
}

3:项目路由的分析
vue-router
前端所谓路由:KV键值对
key:URL(地址栏中的路径)
value:相应的路由组件
注意:项目上中下结构

路由组件:
Home:首页路由组件、Search路由组件、login登陆组件、Refister注册路由
非路由组件:
Header【首页、搜素页】
Footer【首页、搜素页】，但是在登陆|注册页面没有

4:完成非路由组件Header与Footer业务
  1、书写静态页面(HTML+CSS)
  2、拆分组件
  3、获取服务器的数据动态显示
  4、完成对应的动态逻辑

  注意1:创建组件的时候，组件结构+组件样式+图片资源

  注意2:项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader【安装五版本】进行处理less，把less样式变为css样式,浏览器才能识别
  ( npm install --save less less-loader@5)

  注意3:如果想让组件识别less样式，需要在style标签身上加上lang=less

4.1使用组件的步骤(非路由组件)
-创建或定义
-引入
-注册
-使用

5:路由组件的搭建(npm install --save vue-router)
vue-router
路由组件分为:Home、Search、Login、Register
-components文件夹:经常放置的非路由组件(共用全局组件)
-pages文件夹:经常放置路由组件
5.1配置路由
项目当中配置的路由一般放在router文件夹中

5.2总结
路由组件与非路由组件的区别？
1、路由组件一般放置在components文件夹，非路由组件一般放置在router文件夹
2、路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字),非路由组件在使用的时候,一般都是以标签的形式使用
3、注册完路由，不管是路由组件还是非路由组件身上都有$route、$router属性

$route:一般获取路由信息【路径、query、parms等等】
$router:一般进行编程式导航进行路由跳转【push|replace】,push与replace的区别说白就是能不能记住历史记录

5.3路由的跳转？
路由的跳转有两种方式:
声明式导航router-link,可以进行路由跳转
编程式导航push|replace,可以进行路由跳转

编程式导航:声明式导航能做的，编程式导航也能做,
但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

6:Footer组件显示与隐藏
显示或者隐藏组件:v-if|v-show
Footer组件:在Home、Search显示Footer组件
Footer组件:在登陆、注册时隐藏

6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏
6.2配置的路由的时候，可以给路由添加路由元信息【meta】,路由需要配置对象

7:路由传参

7.1路由传参,参数有几种写法？
params参数:属于路径当中的一部分,需要注意,在配置路由的时候,需要占位
query参数:不属于路径当中的一部分,类似于ajax中的queryString  /home?k=v&kv=,不需要占位