import {get,post} from "./http"

export const loginApi=data=>{
    return post({
        url:"/login",
        data
    })
}