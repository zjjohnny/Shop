import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from "../views/LayOut/LayOut.vue"
import store from "../store/index.js"
const routes = [
  //登录页面
  {
    path :"/login",
    name:"login",
    component:()=>import("../views/Login/login.vue")
  },
  {
    path: '/',
    name: 'layout',
    component:LayOut,
    // redirect:"/index",     //重新定向默认展示的页面 
    children:[
      {
        path:"/roles",
        name:"roles",
        component:()=>import("../views/pages/roleList.vue")
      },
      {
        path:"/user",
        name:"user",
        component:()=>import("../views/pages/userList.vue")
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
router.beforeEach((to,form,next)=>{
  //to:从那个页面  form:到那个页面   next:只有执行next页面才会进行跳转
  //判断用户是否登录页面
    console.log("store",store.state.uInfo)
    const uInfo=store.state.uInfo.userInfo
    if(!uInfo.username){
      if(to.path==="/login"){
        next()
        return
      }
      next("/login")
    }else{
      next()
    }
})

export default router
