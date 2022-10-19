//统一管理项目接口的模块
//引入二次封装的axios(带有请求、响应的拦截器)
import requests from "./ajax";
import mockRequests from "./mockAjax"

//发请求:axios发请求返回结果Promise对象
//三级联动接口 api/product/getBaseCategoryList  get  无参数
//对外暴露一个函数,只要外部调用这个函数,就向服务器发起ajax请求、获取三级菜单数据
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqCategoryList = ()=>requests.get("/product/getBaseCategoryList");
//切记:当前函数执行需要把服务器返回结果返回

//获取banner(home模块轮播图接口)
export const reqGetBannerList = ()=>mockRequests.get("/banner")
//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')