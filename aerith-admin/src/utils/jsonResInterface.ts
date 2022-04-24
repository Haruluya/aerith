// 响应体的封装。

const JSONResSuccess = (status:Number, message:string, data:Object)=>{
    return {
        status,
        message,
        data
    }
}

const JSONResError = (status:Number, message:string)=>{
    return {
        status,
        message,
    }
}

export {JSONResError,JSONResSuccess}