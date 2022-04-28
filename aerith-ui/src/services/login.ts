import {postLoginConfirm,postRegisterConfirm} from '@/utils/requests'
import { setToken,removeToken } from '@/utils/token';

/**
 * 用户登录
 * @param params
 * @return user
 */
export async function loginConfirm(params: any) {
    const response = await postLoginConfirm(params);
    //响应失败。
    if (!response){
        return null;
    } 
    if (response.success){
        setToken(response.data.token);
        return response.data;
    }
    return null;
    
}


export async function registerConfirm(params:any) {
    const response = await postRegisterConfirm(params);
    //响应失败。
    if (!response){
        return null;
    }   
    if (response.success){
        return response.data;
    }
    return null;
}

/**
 * 用户退出登录
 */
export function logout() {
    removeToken();
    return true;
}

/**
 * 每日登录
 */
export async function doDailyLogin() {

}
