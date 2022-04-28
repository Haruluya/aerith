
import {userData} from '@/services/user';
import { message, notification } from 'antd';
import { UserData,GlobalDvaType } from '@/interfaces/global';
import { getToken } from '@/utils/token';
//global的dva模块。 
const GlobalDva: GlobalDvaType = {
    namespace: 'global',
    state: {
      userData: {
        username:''
      }
    },
    effects: {

        *getUserData({ payload }, { call, put }){
        
          const result = yield call(userData, payload);
          // 响应失败。
          if (!result) {
              return;
          }
          yield put({
              type: 'setUserData',
              payload: {
                  userData:result.userData
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