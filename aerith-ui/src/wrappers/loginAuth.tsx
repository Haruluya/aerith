import { Redirect } from 'umi'
import { connect,Loading} from 'umi';
import {FC} from 'react'
import { GlobalStateType ,AuthProps} from '@/interfaces/global';

const LoginAuth:FC<AuthProps> =  ({global,dispatch,children}) => {

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