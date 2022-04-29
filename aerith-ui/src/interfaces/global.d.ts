import type { Effect, Reducer } from 'umi';
import { ConnectProps, Loading, connect } from 'umi';

/**
 * dva-state部分接口。
 */

// 全局State接口。
export interface GlobalStateType{
    userData:UserData,
}

// 全局Dva模块接口。
export interface GlobalDvaType{
    namespace: string;
    state: GlobalStateType;
    effects: {
        getUserData:Effect
    };
    reducers: {
        setUserData: Reducer<GlobalStateType>;
    };
}

// header部分props接口。
export interface HeaderProps extends ConnectProps{
    global:GlobalStateType,
    loading:boolean
}

// Auth部分props接口。
export interface AuthProps extends ConnectProps{
    global:GlobalStateType,
    loading:boolean
}


/**
 * state中对象接口。
 */

// 用户基本信息接口。
export interface UserData{
    username:string,
    avatar?:string,
    nickname?:string,
    background_img?:string,
    email?:string,
    level?:number,
    score?:number,
    signature?:string,
    tags?:Array<string>,
}

