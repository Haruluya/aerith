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
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })


// 用户登录。
export const postRegisterConfirm = (data:object)=>
    request.post(`/${AERITH_API}/user/registerConfirm`,{
        data,
    })

// // 退出登录请求。
// export const postLogout = ()=>
//     requests({
//         method:'POST',
//         url:`/user/logout`,
//     })


export const postfoundpassword = (data:object)=>
    request.post(`/${AERITH_API}/user/foundpassword`,{
        data,
    })


export const postloginConfirmByMobile = (data:object)=>
    request.post(`/${AERITH_API}/user/loginConfirmByMobile`,{
        data,
    })

export const postupdateInfo = (data:object)=>
    request.post(`/${AERITH_API}/user/updateInfo`,{
        data,
    })

export const postaddArticle = (data:object)=>
    request.post(`/${AERITH_API}/article/addArticle`,{
        data,
    })
export const  postgetHomeData = (data:object)=>
    request.post(`/${AERITH_API}/article/getArticleData`,{
        data,
    })   
export const  postgetArticleDetail = (data:object)=>
    request.post(`/${AERITH_API}/article/getArticleById`,{
        data,
    }) 
    
export const   postgetGrossiData= (data:object)=>
    request.post(`/${AERITH_API}/article/getArticleDataByTemplate`,{
        data,
    })
export const  postdeleteArticle= (data:object)=>
    request.post(`/${AERITH_API}/article/deleteArticle`,{
        data,
    })
export const postgetArticleCommentDataById= (data:object)=>
    request.post(`/${AERITH_API}/comment/getCommentByArticleId`,{
        data,
    })
export const postaddComment= (data:object)=>
    request.post(`/${AERITH_API}/comment/addComment`,{
        data,
    })
export const postdeleteComment= (data:object)=>
    request.post(`/${AERITH_API}/comment/deleteComment`,{
        data,
    })
export const postagetPostData= (data:object)=>
    request.post(`/${AERITH_API}/article/getArticleDataById`,{
        data,
    })
export const postCommentData= (data:object)=>
    request.post(`/${AERITH_API}/comment/getCommentByUser`,{
        data,
    })
export const postaddFocus= (data:object)=>
    request.post(`/${AERITH_API}/focus/addUserFocus`,{
        data,
    })
export const postgetFanData= (data:object)=>
    request.post(`/${AERITH_API}/focus/getUserFanById`,{
        data,
    })
export const postgetFocusData= (data:object)=>
    request.post(`/${AERITH_API}/focus/getUserFocusById`,{
        data,
    })
export const postdeleteFocus= (data:object)=>
    request.post(`/${AERITH_API}/focus/deleteUserFocus`,{
        data,
    })