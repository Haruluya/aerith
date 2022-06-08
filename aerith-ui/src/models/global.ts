
import {userData,updateInfo,addArticle,getHomeData,getGrossiData,getArticleDetail} from '@/services/user';
import { message, notification } from 'antd';
import { UserData,GlobalDvaType} from '@/interfaces/global';
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
        islogin:false,
      },
      homeArtData:{
        articles:[],
        users:[]
      },
      grossiData:{
        articles:[],
        users:[]
      },
      artDataDetail:{
      }
    },
    effects: {
      *getHomeData({ payload }, { call, put }){
        // 请求验证。
        const result = yield call(getHomeData, payload);
        // 响应失败。
        if (!result) {
          message.error('更新信息失败！');
          return;
        }
        message.success('更新信息成功！');
        yield put({
          type: 'sethomeArtData',
          payload: {
            data : result.result
          },

        });
      },
      *addArticle({ payload }, { call, put }) {
        // 请求验证。
        const result = yield call(addArticle, payload);
        // 响应失败。
        if (!result) {
          message.error('更新信息失败！');
          return;
        }
        message.success('更新信息成功！');;
      },
      *updateInfo({ payload }, { call, put }) {
        // 请求验证。
        const result = yield call(updateInfo, payload);
        // 响应失败。
        if (!result) {
          message.error('更新信息失败！');
          return;
        }
        message.success('更新信息成功！');

      },
      *getGrossiData({ payload }, { call, put }) {
        // 请求验证。
        const result = yield call(getGrossiData, payload);
        // 响应失败。
        if (!result) {
          message.error('更新信息失败！');
          return;
        }
        message.success('更新信息成功！');
        yield put({
          type: 'setGrossiData',
          payload: {
            data : result.result
          },

        });
      },
      *getArticleDataById({ payload }, { call, put }) {
        // 请求验证。
        const result = yield call(getArticleDetail, payload);
        // 响应失败。
        if (!result) {
          message.error('更新信息失败！');
          return;
        }
        message.success('更新信息成功！');
        yield put({
          type: 'setArticleData',
          payload: {
            data : result.result
          },

        });
      },
        *getUserData({ payload }, { call, put }){
          
          let result = yield call(userData, payload);
          // 响应失败。
          if (!result || !result.userData) {
              return;
          }
          result = result.userData;
          const userDataResult = {
            id:result.id,
            username:result.username || "未登录",
            nickname:result.nickname || "aerith",
            avatar:result.avatar || "",
            signature:result.signature || "用户没有设置签名。",
            background_img:result.background_img || "",
            email:result.email,
            tags:result.tags == null ? ["你的标签"] : (result.tags.spilt(' ')).append('你的标签'),
            score: result.score,
            level:result.level,
            islogin: result.id != undefined
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
      sethomeArtData(state,{payload}){

        return {
          ...state,
          homeArtData:payload.data
        };
      },
      setArticleData(state,{payload}){
        console.log(payload)
        return {
          ...state,
          artDataDetail:payload.data
        };
      },
      setGrossiData(state,{payload}){
        console.log(payload)
        return {
          ...state,
          grossiData:payload.data
        };
      }
    },
  };


export default GlobalDva;