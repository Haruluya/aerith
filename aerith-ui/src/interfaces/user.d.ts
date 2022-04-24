import type { Effect, Reducer } from 'umi';


// login 请求接口。
export interface LoginParamsType {
  phone:String,
  password:String,
}


//login state接口。
export interface LoginType {
    token?:String,
  }

// 模块接口定义。
export interface LoginDvaType {
    namespace: string;
    state: LoginType;
    effects: {
      login: Effect;
      logout: Effect;
    };
    reducers: {
      setToken: Reducer<LoginType>;
    };
  }

