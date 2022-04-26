// 返回接口统一。
interface ErrorInfoStructure {
  success: boolean; // if request is success
  data?: any; // response data
  errorCode?: string; // code for errorType
  errorMessage?: string; // message display to user 
  showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
  host?: string; // Convenient for backend Troubleshooting: host of current access server
}

interface RequestError extends Error {
  data?: any; // 这里是后端返回的原始数据
  info?: ErrorInfoStructure;
}
/**
 * 基于umi-request的请求配置
 * 
 */
 import { extend } from 'umi-request';
 import nprogress from "nprogress";
 import "nprogress/nprogress.css";
 import {notification} from 'antd'
 
 const codeMessage = {
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行sss操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。',
 };
 
 /**
  * 异常处理程序
  */
 const errorHandler = (error: { response: Response }): Response => {
   const { response } = error;
    // 响应存在。
   if (response && response.status) {
     const errorText = codeMessage[response.status] || response.statusText;
     const { status, url } = response;
    
     notification.error({
       message: `请求错误 ${status}: ${url}`,
       description: errorText,
     });
    //  响应失败。
   } else if (!response) {
     notification.error({
       description: '网络异常',
       message: '网络异常',
     });
   }
   return response;
 };
 
 const request = extend({
   errorHandler: errorHandler, 
   //请求带上cookies。
   credentials: 'include',
 });
 
// 拦截器。
request.use(async (ctx,next) => {
    nprogress.start();

    await next();

    nprogress.done();
    
    const { res } = ctx;
    const { success = false } = res;
    console.log(res)

    // 无success一律请求失败。
    if(!success){
      notification.error({
        description: '请求失败！',
        message: '请求失败',
        }); 
    }
});
  
export default request;
 