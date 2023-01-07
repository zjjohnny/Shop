import { createStore } from 'vuex'
import uInfo from "./state/userInfo"
export default createStore({
  state: {    //全局状态的初始值
    
  },
  getters: {     // 计算，获取对应的值
  },
  mutations: {    //更新状态的方式
  },
  actions: {     //可以异步操作，可以返回promise，更改的数据传递到mutations更改
  },
  modules: {     //数据多，划分模快
    uInfo
  }
})
