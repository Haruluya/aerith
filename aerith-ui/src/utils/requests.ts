import requests from "./axiosConfig";




// 获取登录信息。
export const postLoginConfirm = (data:Object)=>
    requests({
        method:'POST',
        url:`/user/loginConfirm`,
        data
    })


// 退出登录请求。
export const postLogout = ()=>
    requests({
        method:'POST',
        url:`/user/logout`,
    })