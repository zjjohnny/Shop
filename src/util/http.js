import axios from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

let loadingObj=null;
//使用create创建axios实例
const http =axios.create({
    timeout:5000,
    baseURL:"http://127.0.0.1:8888/api/private/v1/",
    headers:{       //请求头的数据类型
        "Content-type":"appliaction/json;charset=utf-8"
    }
})
//添加请求拦截器，同时增加loading对请求做统一处理
http.interceptors.request.use(function(config){
    loadingObj=ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
})
//添加相应拦截器,对返回值做统一处理
http.interceptors.response.use(function (response){
    loadingObj.close()
    //判断请求成功与否
    const data=response.data
    if(!data.data){
        console.log(data.meta)
        ElMessage.error(data.meta.msg||"服务器出错")
        return data
    }
    return data;
},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"info",
        duration:1000
    })
});

//post请求封装
export const post=config=>{
    return http({
        ...config,
        method:"post",
        data:config.data
    })
}
//get请求
export const get=config=>{
    return http({
        ...config,
        method:"get",
        params:config.data
    })
}