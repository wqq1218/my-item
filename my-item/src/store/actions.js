
import {
    reqHomeData,
    reqCategory
} from '../api'

export default {
  async getHomeDate({commit}){
    const result = await reqHomeData();
      console.log(result)
      if(result.code===0){
      const homeData=result.data
        console.log(homeData)
        commit('RECIVE_HOMEDATA',homeData)
    }
  },
  async getCategory({commit}){
      const result=await reqCategory()
        if(result.code===0){
            const category=result.data
            commit('RECIVE_CATEGORY',category)
        }
    }
}
