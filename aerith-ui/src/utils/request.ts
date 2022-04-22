import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
    200:'请求成功'
  };


/**
 * 请求的异常处理。
 * @param error 
 * @returns 
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  //返回了状态码。
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    //未返回响应。
    notification.error({
      description: '网络异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};


/**
 * 配置request暴露。
 */
 const request = extend({
    errorHandler, 
    credentials: 'include', // 默认请求是否带上cookie
  });

export default request;