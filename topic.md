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