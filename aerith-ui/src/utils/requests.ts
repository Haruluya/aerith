import request from "./umiRequest"

// const baseUrl = '';
const AERITH_API = 'aerithi';

// 获取登录信息。
export const postLoginConfirm = (data:object)=>
    request.post(`/${AERITH_API}/user/loginConfirm`,{
        data,
    })


// 获取用户信息。
export const getUserData = (token:string)=>
    request.post(`/${AERITH_API}/user/userData`,{
        data : token,
    })


// // 退出登录请求。
// export const postLogout = ()=>
//     requests({
//         method:'POST',
//         url:`/user/logout`,
//     })



