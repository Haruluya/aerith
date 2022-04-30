import { Redirect } from 'umi'
import { getToken } from '@/utils/token';
import Login from '@/pages/Login';
import { connect,Loading} from 'umi';
import {useEffect,FC} from 'react'
import { GlobalStateType ,AuthProps} from '@/interfaces/global';

const LoginAuth:FC<AuthProps> =  ({global,location,children}) => {
    if (global.userData.islogin){
        if (location.pathname == '/login'){
            return <Redirect to="/home"/>;
        }
        return <div>{children}</div>
    }else{
        if (location.pathname == '/userinfo'){
            return <Redirect to="/404"/>;
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