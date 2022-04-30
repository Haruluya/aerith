import { getUserData } from "@/utils/requests";
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