import {postLoginConfirm} from '@/utils/requests'
import { LoginParamsType } from '@/interfaces/user'
import { setToken } from '@/utils/token';

/**
 * 用户登录
 * @param params
 * @return user
 */
export async function login(params: LoginParamsType) {
    const response = await postLoginConfirm(params);
    //响应失败。
    if (!response){
        return null;
    } 
    if (response.status == 200 && response.data.token){
        setToken(response.data.token);
        return response.data;
    }
    return null;
    
}

/**
 * 用户退出登录
 */
export function logout() {

}

/**
 * 每日登录
 */
export async function doDailyLogin() {

}
