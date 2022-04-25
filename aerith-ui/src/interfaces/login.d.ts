import type { Effect, Reducer } from 'umi';
import { ConnectProps, Loading, connect } from 'umi';


/**
 * dva-state部分接口。
 */
//login state接口。
export interface LoginStateType {
    token?:String,
  }

// dva模块接口定义。
export interface LoginDvaType {
    namespace: string;
    state: LoginStateType;
    effects: {
      login: Effect;
      logout: Effect;
    };
    reducers: {
      setToken: Reducer<LoginStateType>;
    };
  }

// login props接口。
interface LoginProps extends ConnectProps {
  login: LoginStateType;
  loading: boolean;
}

// login 请求接口。
export interface LoginParamsType {
  phone:String,
  password:String,
}

/**
 * login中数据接口。
 */
// 正常登录表单value。
interface LoginForm{
  mobile: Number,
  password: string,
  code?: Number,
  remember: Boolean,
  agree:Boolean
}


