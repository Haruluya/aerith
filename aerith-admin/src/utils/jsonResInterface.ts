import {ErrorInfoStructure} from './umiErrorInterface'
// 响应体的封装。


class JSONRes{

    _success(data){
        data = data || {message:"OK"}
        return{
            success:true,
            data
        }
    }

    _error(errorCode,errorMessage){
        return {
            success:false,
            errorCode,
            errorMessage,
            showType:0,
            host:''
        }
    }
}




export {JSONRes}