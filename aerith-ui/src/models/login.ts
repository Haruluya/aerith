
import {login, logout } from '@/services/login';
import { message, notification } from 'antd';
import {LoginType, LoginDvaType} from '@/interfaces/user'


//login的dva模块。 
const LoginDva: LoginDvaType = {
    namespace: 'login',
    state: {
      token:''
    },
    effects: {

    // 登录验证。
      *login({ payload }, { call, put }) {
        // 请求验证。
        const result = yield call(login, payload);
        // 响应失败。
        if (!result) {
          message.error('登录失败。');
          return;
        }
        const loginStatus = {
          token : result.token
        };

        yield put({
          type: 'setToken',
          payload: {
            ...loginStatus,
          },

        });
      },
  
        *logout(_, { put }) {

        }
    },
  
    reducers: {
      setToken(state, { payload }) {
        console.log(payload);
        return {
          ...state,
          token:payload.token
        };
      },
    },
  };