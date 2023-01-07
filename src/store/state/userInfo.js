export default{
    state: {    //全局状态的初始值、
        userInfo:(localStorage.getItem("loginData")&&JSON.parse(localStorage.getItem("loginData")))||{}
      },
    mutations: {    //更新状态的方式
        setUserInfo(state,uInfo){
          state.userInfo=uInfo
        }
   },   
}