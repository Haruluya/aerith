
import {userData} from '@/services/user';
import { message, notification } from 'antd';
import { UserData,GlobalDvaType } from '@/interfaces/global';

//global的dva模块。 
const GlobalDva: GlobalDvaType = {
    namespace: 'global',
    state: {
      userData: {
          nickName:'',
          headPortrait: '',
      },
    },
    effects: {

        *getUserData({ payload }, { call, put }){
            const result = yield call(userData, payload);
        // 响应失败。
        if (!result) {
            return;
        }

        yield put({
            type: 'setToken',
            payload: {
                userData:result.userData
            },

        });
        }
    },
  
    reducers: {
      setUserData(state, { payload }) {
        console.log(payload);
        return {
          ...state,
          userData:payload.userData
        };
      },
    },
  };


export default GlobalDva;