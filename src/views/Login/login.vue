<template>
    <div class="login_warp">
        <div class="form_warp">
            <el-form
                    ref="formRef"
                    :model="loginData"
                    label-width="100px"
                    class="demo-dynamic"
                >
                <el-form-item 
                    label="用户名" 
                    prop="username"
                    :rules="[
                        {
                            required:true,
                            message:'此项为必填项',
                            trigger:'blur'
                        },
                    ]"
                >
                    <el-input v-model="loginData.username" />
                </el-form-item>
                <el-form-item 
                    label="密码" 
                    prop="password"
                    :rules="[
                        {
                            required:true,
                            message:'此项为必填项',
                            trigger:'blur'
                        },
                    ]"
                >
                    <el-input type="password" show-password="true" v-model="loginData.password" />
                </el-form-item>
            </el-form>
            <el-button class="login_btn" type="primary" @click="handleLogin">登录</el-button>
        </div>
    </div>
</template>
<script>
// import router from '@/router';
import { reactive, toRefs } from 'vue';
import { useStore } from "vuex"
import { useRouter } from 'vue-router';
// import { loginApi } from "@/util/request"
export default{
    name:"login",
    setup(){
        const store=useStore()
        const router=useRouter()
        const data=reactive({
            loginData:{
                username:"",
                password:""
            }
        })
        const handleLogin=()=>{
            // loginApi(data.loginData).then(res=>{
            //     if(res.data){
            //         store.commit('setUserInfo',data.loginData);
            //         localStorage.setItem("loginData",JSON.stringify(data.loginData))
            //         router.push({
            //             path:"/user"
            //         })
            //     }
            // })
            //没有请求接口，暂存到本地的登录方式
            store.commit('setUserInfo',data.loginData);
            localStorage.setItem("loginData",JSON.stringify(data.loginData))
            router.push({
                path:"/user"
            })
        }
        return{
            ...toRefs(data),
            handleLogin
        }
    }
}
</script>
<style scoped>
.login_warp{
    width: 100%;
    height: 100vh;
    background: #bfbfbf;
    position: relative;
}
.form_warp{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #f5f5f5;
    padding: 30px 50px;
    border-radius: 5px;
}
.login_btn{
    display: block;
    margin: 10px auto;
}
</style>