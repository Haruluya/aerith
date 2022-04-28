import { Redirect } from 'umi'
import { getToken } from '@/utils/token';
import Login from '@/pages/Login';
import { connect,Loading} from 'umi';
import {useEffect,FC} from 'react'
import { GlobalStateType ,AuthProps} from '@/interfaces/global';

const LoginAuth:FC<AuthProps> =  ({global,children}) => {
    console.log(global.userData.username);
    if (global.userData.username){
        return <Redirect to="/home"/>;
    }else{
        return <div>{ children }</div>;
    }

}

export default connect(
    ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
      global,
      loading: loading.models.global,
    }),
  )(LoginAuth);