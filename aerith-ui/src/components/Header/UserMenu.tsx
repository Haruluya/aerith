import React from 'react'
import {Menu,Avatar} from 'antd'
import styles from './index.less'
import {AntDesignOutlined}  from '@ant-design/icons';
export default function UserMenu() {
  return (
    <div>
        <Avatar
            size={{
            xs: 12,
            sm: 16,
            md: 20,
            lg: 34,
            xl: 40,
            xxl: 50,
            }}
            icon={<AntDesignOutlined />}
        />

    </div>
  )
}
