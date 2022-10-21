import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params) {
        //当前这个reqGetSearchInfo函数在调用获取服务器数据的时候,至少传递一个空对象
        //params形参,是当用户派发action的时候,第二个参数传递过来的,至少是个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    },
};
//计算属性,在项目当中,为了简化数据而生
const getters = {
    //当前形参state就是当前仓库中的state,不是大仓库的state
    goodsList(state) {
        //假如网络不给力|没网,state.searchList.goodsList应该返回undefined,所以至少应该返回一个数组
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}