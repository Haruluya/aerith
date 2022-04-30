
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
      }
    },
    effects: {

        *getUserData({ payload }, { call, put }){
        
          const result = yield call(userData, payload);
          // 响应失败。
          if (!result) {
              return;
          }
          const userDataResult = {
            username:result.username || "未登录",
            nickname:result.nickname || "aerith",
            avatar:result.avatar || "https://avatars.githubusercontent.com/u/91101915?v=4",
            signature:result.signature || "",
            background_img:result.background_img || "",
            tags:result.tags? (result.tags.spilt(' ')).append('你的标签') : ["你的标签"],
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