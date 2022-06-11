import type { Effect, Reducer } from 'umi';
import { ConnectProps, Loading, connect } from 'umi';

/**
 * dva-state部分接口。
 */

// 全局State接口。
export interface GlobalStateType{
    userData:UserData,
    homeArtData:any,
    artDataDetail:any,
    grossiData:any,
    artCommentData:any,
    myCommentData:any,
    myPostData:any,
    myFocus:any,
    myFan:any
}

// 全局Dva模块接口。
export interface GlobalDvaType{
    namespace: string;
    state: GlobalStateType;
    effects: {
        getUserData:Effect;
        updateInfo:Effect;
        addArticle:Effect;
        getHomeData:Effect;
        getArticleDataById:Effect;
        getGrossiData:Effect;
        deleteArticle:Effect;
        getArticleCommentDataById:Effect;
        addComment:Effect;
        deleteComment:Effect;
        getCommentData:Effect;
        getPostData:Effect;
        addFocus:Effect;
        getFanData:Effect;
        getFocusData:Effect;
        deleteFocus:Effect
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

// 用户信息部分props接口。
export interface UserInfoProps extends ConnectProps{
    global:GlobalStateType,
    loading:boolean
}

// 主页部分props接口。
export interface LayoutProps extends ConnectProps{
    global:GlobalStateType,
    loading:boolean
}

/**
 * state中对象接口。
 */

// 用户基本信息接口。
export interface UserData{
    id:number,
    username:string,
    avatar?:string,
    nickname?:string,
    background_img?:string,
    email?:string,
    level?:number,
    score?:number,
    signature?:string,
    tags?:Array<string>,
    islogin:boolean
}

