import React from 'react'
import {Avatar,Tooltip} from 'antd'
import styles from './index.less'
import {Link} from 'umi'
import {UserOutlined}  from '@ant-design/icons';
import {useEffect,FC} from 'react'
import { GlobalStateType ,HeaderProps} from '@/interfaces/global';
import { connect,Loading} from 'umi';
const UserMenu:FC<HeaderProps> = ({global,dispatch}) => {
  console.log(global);
  const name =  global.userData.nickName || '未登录';

  return (
    <div>
      <Tooltip title={name} placement="bottomLeft" defaultVisible>
        <Link to="/login">
          <span className={styles.avatarContainer}>
            <Avatar icon={<UserOutlined />} className={styles.avatar} size="large"/>
          </span>
        </Link>
      </Tooltip>
    </div>
  )
}

export default connect(
  ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
    global,
    loading: loading.models.global,
  }),
)(UserMenu);
