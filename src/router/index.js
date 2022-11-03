import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from "../views/LayOut/LayOut.vue"

const routes = [
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

export default router
