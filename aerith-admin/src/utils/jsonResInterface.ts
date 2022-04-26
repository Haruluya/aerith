import {ErrorInfoStructure} from './umiErrorInterface'
// 响应体的封装。


class JSONRes{

    _success(data){
        data = data || {message:"OK"}
        return{
            success:true,
            data,
            errorCode:0,
            errorMessage:'',
            showType:1,
            host:''
        }
    }

    _error(errorCode,errorMessage){
        return {
            success:false,
            data:{},
            errorCode,
            errorMessage,
            showType:0,
            host:''
        }
    }
}




export {JSONRes}