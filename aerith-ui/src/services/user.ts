import { getUserData ,postdeleteFocus, postgetFocusData, postgetFanData,postaddFocus,postCommentData,postagetPostData,postdeleteComment,postaddComment,postdeleteArticle,postgetArticleCommentDataById,postupdateInfo,postgetGrossiData,postaddArticle,postgetArticleDetail,postgetHomeData} from "@/utils/requests";
import { getToken } from "@/utils/token"

// 获取用户基本信息。
export async function userData(params: any):Promise<any> {
    const token = getToken();
    if (!token){
        return {
            userData: {
                username:'未登录'
            }
        };
    }
    const response = await getUserData(token);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function updateInfo(params: any):Promise<any> {
    const response = await postupdateInfo(token);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function addArticle(params: any):Promise<any> {
    const response = await postaddArticle(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getPostData(params: any):Promise<any> {
    const response = await postagetPostData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getCommentData(params: any):Promise<any> {
    const response = await postCommentData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function addFocus(params: any):Promise<any> {
    const response = await postaddFocus(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}

export async function addComment(params: any):Promise<any> {
    const response = await postaddComment(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getHomeData(params: any):Promise<any> {
    const response = await postgetHomeData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getArticleDetail(params: any):Promise<any> {
    const response = await postgetArticleDetail(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getGrossiData(params: any):Promise<any> {
    const response = await postgetGrossiData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function deleteArticle(params: any):Promise<any> {
    const response = await postdeleteArticle(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getArticleCommentDataById(params: any):Promise<any> {
    const response = await postgetArticleCommentDataById(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function deleteComment(params: any):Promise<any> {
    const response = await postdeleteComment(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getFocusData(params: any):Promise<any> {
    const response = await postgetFocusData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function getFanData(params: any):Promise<any> {
    const response = await postgetFanData(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
export async function deleteFocus(params: any):Promise<any> {
    const response = await postdeleteFocus(params);
    if (!response){
        return null;
    } 
    if (response.success){
        return response.data;
    }
    return null;
}
