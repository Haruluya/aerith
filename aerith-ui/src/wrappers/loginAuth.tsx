import { Redirect } from 'umi'
import { getToken } from '@/utils/token';
import Login from '@/pages/Login';
import { connect,Loading} from 'umi';
import {useEffect,FC} from 'react'
import { message,notification} from 'antd';
import { GlobalStateType ,AuthProps} from '@/interfaces/global';

const LoginAuth:FC<AuthProps> =  ({global,location,children}) => {
    // 发帖友情提醒。
    const addArticleNotification = () => {
        notification.info({
          message: '创建自己的帖子',
          description:
            '填写表单后就可以让别人看见你的帖子了！',
        });
      };
    
    if (global.userData.islogin){
        if (location.pathname == '/login'){
            return <Redirect to="/home"/>;
        }else if(location.pathname == '/addarticle'){
            addArticleNotification();
        }
        return <div>{children}</div>
    }else{
        if (location.pathname == '/userinfo'){
            return <Redirect to="/404"/>;
        }else if (location.pathname == '/addarticle'){
            message.warning('请先登录！')
            return <Redirect to="/login"/>;
        }
        return <div>{ children }</div>;
    }

}

export default connect(
    ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
      global,
      loading: loading.models.global,
    }),
  )(LoginAuth);