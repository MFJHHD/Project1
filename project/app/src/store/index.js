import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);

//state:仓库存储数据的地方
//const state = {};
//mutations:修改state的唯一手段，同步操作
//const mutations = {};
//actions:处理actions,通过触发mutations的方式间接变更数据,可以书写自己的业务逻辑,也可以处理异步
//const actions = {};
//getters:理解为计算属性,state发生改变它也会跟着变化,用于简化仓库数据,让组件获取仓库的数据更加方便,不会改变state数据,只是进行包装，形成新数据
//const getters = {};


//引入小仓库
import home from './home';
import search from './search';

//对外暴露Store类的一个实例
export default new Vuex.Store({
  //  state,
  //  mutations,
  //  actions,
  //  getters

  //实现Vuex仓库模块式开发存储数据
  modules:{
    home,
    search
  }
})