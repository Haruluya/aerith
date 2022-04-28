
import {loginConfirm, logout,registerConfirm } from '@/services/login';
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
  
      *logout(_, { call,put }) {
        const result = yield call(logout);
        if (!result) {
          message.error('退出失败！');
          return;
        }
        message.success('退出成功！');
        yield put({
          type: 'clearToken',
          payload: {
          },
        });
      },

      *register({ payload }, { call, put }){
        const result = yield call(registerConfirm, payload);
        // 响应失败。
        if (!result) {
          message.error('注册失败！');
          return;
        }
        message.success('注册成功！');
      }


        
    },
  
    
    reducers: {
      setToken(state, { payload }) {
        return {
          ...state,
          token:payload.token
        };
      },
      clearToken(state){
        return{
          ...state,
          token:''
        }
      }
    },
  };


export default LoginDva;