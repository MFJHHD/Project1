import { reqCategoryList } from "@/api";
//home模块的小仓库
const state = {
   categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
const actions = {
    //通过API接口函数调用,向服务器发请求,获取数据
    async categoryList({commit}){
        let result = await reqCategoryList()
       // console.log(result)
        if(result.code == 200){
          commit('CATEGORYLIST',result.data.slice(0,16))
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}