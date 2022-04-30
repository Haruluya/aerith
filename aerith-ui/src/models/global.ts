
import {userData} from '@/services/user';
import { message, notification } from 'antd';
import { UserData,GlobalDvaType } from '@/interfaces/global';
import { getToken } from '@/utils/token';
//global的dva模块。 
const GlobalDva: GlobalDvaType = {
    namespace: 'global',
    state: {
      userData: {
        id:0,
        username:'',
        avatar:'',
        nickname:'',
        background_img:'',
        email:'',
        score: 0,
        level:0,
        signature:'',
        tags:[''],
        islogin:false,
      }
    },
    effects: {

        *getUserData({ payload }, { call, put }){
          
          let result = yield call(userData, payload);
          // 响应失败。
          if (!result || !result.userData) {
              return;
          }
          result = result.userData;
          const userDataResult = {
            id:result.id,
            username:result.username || "未登录",
            nickname:result.nickname || "aerith",
            avatar:result.avatar || "",
            signature:result.signature || "用户没有设置签名。",
            background_img:result.background_img || "",
            email:result.email,
            tags:result.tags == null ? ["你的标签"] : (result.tags.spilt(' ')).append('你的标签'),
            score: result.score,
            level:result.level,
            islogin: result.id != undefined
          }
          yield put({
              type: 'setUserData',
              payload: {
                  userData:userDataResult,
              },

          });
        }
    },
  
    reducers: {
      setUserData(state, { payload }) {
        return {
          ...state,
          userData:payload.userData
        };
      },
    },
  };


export default GlobalDva;