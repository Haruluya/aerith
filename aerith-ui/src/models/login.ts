
import {loginConfirm, logout } from '@/services/login';
import { message, notification } from 'antd';
import {LoginStateType, LoginDvaType,} from '@/interfaces/login'


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
        const result = yield call(loginConfirm, payload);
        // 响应失败。
        if (!result) {
          message.error('登录失败！');
          return;
        }
        message.success('登录成功！');
        yield put({
          type: 'setToken',
          payload: {
            token : result.token
          },

        });
      },
  
        *logout(_, { put }) {

        }
    },
  
    
    reducers: {
      setToken(state, { payload }) {
        return {
          ...state,
          token:payload.token
        };
      },
    },
  };


export default LoginDva;