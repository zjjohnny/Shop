<template>
      <div class="common-layout">
        <el-container>
            <el-header class="commom-header flex-float">
                <div class="flex">
                    <img class="myImg" src="../../assets/1.jpg" alt="">
                    <h1 class="tittle">万能小商铺</h1>
                </div>
                <el-button type="info" @click="loginOut">退出</el-button>
            </el-header>
            <el-container>
                <el-aside class="commom-Aside" width="200px">
                    <el-menu
                        background-color="none"
                        text-color="#f5f5f5"
                        :router="true"
                    >
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><UserFilled /></el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="/user">账号列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon><Box /></el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="/roles">角色列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { useStore } from "vuex"
import { useRouter } from 'vue-router';
export default{
    name:"layout",
    setup(){
        const store=useStore()
        const router=useRouter()
        const loginOut=()=>{
            localStorage.removeItem("loginData")
            store.commit('setUserInfo',{});
            router.push({
                path:"/login"
            })
        }
        return{
            loginOut
        }
    }
}
</script>
<style scoped>
.commom-header{
    background-color:#8c8c8c;
    display: flex;
}
.commom-Aside{
    background-color:#bfbfbf;
}
.el-container{
    height: 100vh;
    overflow: hidden;
}
.myImg{
    width: 60px;
}
.tittle{
    color: #f0f0f0;
}
</style>