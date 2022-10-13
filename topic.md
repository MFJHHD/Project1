1:路由传参相关面试题
  1、路由传递参数(对象写法),path是否可以结合params参数一起使用
     答:路由跳转传参的时候，对象的写法可以是name、path形式，但是需要注意的是,path这种写法不能与params参数一起使用

  2、如何指定params参数可传可不传
     答:如果路由要求传递params参数，但是你就是不传,url会出现问题,指定params参数可传可不传，只需在配置路由的时候,在占位的后面加一个问号即可

  3、params参数可以传递也可以不传递，但是如果传递是空串，如何解决
     答:使用undefined解决，如果params传递的是一个''，只需要在改为 ''||undefined即可 

  4、路由组件能不能传递props数据
     答:可以的，有三种写法。
        第一种是布尔写法,在路由配置是添加props设为true,在要跳转的组件中使用props接收,这种写法只能接收params参数;

        第二种是对象写法,在路由配置是添加props设为对象,在对象中传入要传递的数据,在要跳转的组件中使用props接收,这种写法可以额外的给路由传递一些props;

        第三种是函数写法,也是最常用的写法,在路由配置是添加props设为函数
             ( props:($route)=>{
                return {keyword:$route.params.keyword,k:$route.query.k}
            }),
            在要跳转的组件中使用props接收,这种写法可以给params参数、query参数;

  5:编程式路由跳转到当前路由(参数不变),多次执行会抛出NavgationDuplicated的警告错误？
     --路由跳转有两种形式:声明式导航/编程式导航
     --声明式导航没有这类问题,因为vue-router底层已经处理好了
     1.1为什么编程式导航进行路由跳转的时候，就有这种警告？
     "vue-router":引入了promise
     1.2通过给push方法传递相应的成功、失败的回调函数,可以捕获到当前的错     误，可以解决
     
     1.3通过底部的代码,可以实现解决错误
      this.$router.push({name:'search',params:{keyword:this.     keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
      这种写法治标不治本,可以在router文件夹下的index.js中，重写push和     replace方法:
      先把VueRouter原型对象的push,replace保存一份
     let originPush = VueRouter.prototype.push;
     let originReplace = VueRouter.prototype.replace;
      然后重写push|replace
        第一个参数:告诉原来的push方法,你往哪里跳转(传递哪些参数)
        第二个参数:成功的回调
        第三个参数:失败的回调
     VueRouter.prototype.push = function (location, resolve,      reject) {
         if (resolve && reject) {
             //call || apply区别
             //相同点:都可以调用函数一次,都可以篡改函数的上下文一次
             //不同点:call与apply传递参数:call传递参数用逗号隔开,apply     方法执行,传递数组
             originPush.call(this, location, resolve, reject)
         } else {
             originPush.call(this, location, () => { }, () => { })
         }
     }

     1.4
     this:当前组件实例
     this.$router属性:当前的这个属性,属性值VueRouter类的一个实例,当在入     口文件注册路由的时候,给组件实例添加$route|$router属性
     push:VueRouter类的一个实例