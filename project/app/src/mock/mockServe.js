//引入mockjs插件开始模拟数据
import Mock from 'mockjs';
//把JSON数据格式引入[JSON数据格式根本没有对外暴露,但是可以引入]
//webpack默认对外暴露的:图片、JSON数据模式
import banner from './banner.json';
import floor from './floor.json';

//接口:相当于nodejs里面中间件
//第一个参数：接口的地址 第二个参数:向这个接口发请求获取到的数据 
//Mock插件：中间件默认是GET请求
Mock.mock("/mock/banner", { code: 200, data:banner });
//Mock插件：中间件默认是GET请求
Mock.mock('/mock/floor', { code: 200, data:floor });

