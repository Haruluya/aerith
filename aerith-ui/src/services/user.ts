import { getUserData ,postupdateInfo,postgetGrossiData,postaddArticle,postgetArticleDetail,postgetHomeData} from "@/utils/requests";
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
