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


//获取搜索模块数据 地址:/api/list  请求方式:post 参数:需要带参数
/**
 * 
   {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
 */
//当前这个函数需不需要接收外部传递的参数
//当前这个接口(获取搜索模块的数据),给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})
