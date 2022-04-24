import { getUserData } from "@/utils/requests";
import { getToken } from "@/utils/token"

// 获取用户基本信息。
export async function userData(params: any) {
    const token = getToken();
    if (!token){
        return null;
    }
    const response = await getUserData(token);
    if (!response){
        return null;
    } 
    if (response.status == 200){
        return response.data;
    }
    return null;
}