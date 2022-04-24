import React from 'react'
import {Avatar,Tooltip} from 'antd'
import styles from './index.less'
import {Link} from 'umi'
import {UserOutlined}  from '@ant-design/icons';
export default function UserMenu() {
  return (
    <div>
      <Tooltip title="当前未登录" placement="bottomLeft" defaultVisible>
        <Link to="/login">
          <span className={styles.avatarContainer}>
            <Avatar icon={<UserOutlined />} className={styles.avatar} size="large"/>
          </span>
        </Link>
      </Tooltip>
    </div>
  )
}
