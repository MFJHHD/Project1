import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";
//home模块的小仓库
const state = {
    //home仓库中存储三级菜单的数据
   categoryList:[],
   //轮播图的数据
   bannerList:[],
   //floor组件的数据
   floorList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
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
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        //console.log('banner:',result)
       if(result.code == 200){
        commit('GETBANNERLIST',result.data)
       }
    },
    //获取floor数据
    async getFloorList({commit}){
       let result = await reqFloorList()
       if(result.code==200){
        //提交commit
        commit('GETFLOORLIST',result.data)
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