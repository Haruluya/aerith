
import React from 'react'
import { Tag,Image,Avatar ,Button,Divider } from 'antd'
import styles from './index.less'
import { UserOutlined } from '@ant-design/icons'
export default function RecUser() {
  return (
    <div className={styles.recUserPart}>
      <div className={styles.titleContainer}>
        <span>推荐用户</span>
        <Button type="link" className={styles.more} >More</Button>
      </div>
      <Divider />
      <div className={styles.userListContainer}>
        <div className={styles.userItemContainer}>
          <Button type='text'>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className={styles.userDes}>
            <div className={styles.userName}>
                Haruluya
            </div>
            <div className={styles.userInfo}>
                Autor
            </div>
          </div>

          </Button >
          <Button type='primary' shape='round' className={styles.focusButton}>
            关注
          </Button>
        </div>
        <div className={styles.userItemContainer}>
          <Button type='text'>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className={styles.userDes}>
            <div className={styles.userName}>
                Haruluya
            </div>
            <div className={styles.userInfo}>
                Autor
            </div>
          </div>

          </Button >
          <Button type='primary' shape='round' className={styles.focusButton}>
            关注
          </Button>
        </div>
        <div className={styles.userItemContainer}>
          <Button type='text'>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className={styles.userDes}>
            <div className={styles.userName}>
                Haruluya
            </div>
            <div className={styles.userInfo}>
                Autor
            </div>
          </div>

          </Button >
          <Button type='primary' shape='round' className={styles.focusButton}>
            关注
          </Button>
        </div>
        <div className={styles.userItemContainer}>
          <Button type='text'>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className={styles.userDes}>
            <div className={styles.userName}>
                Haruluya
            </div>
            <div className={styles.userInfo}>
                Autor
            </div>
          </div>

          </Button >
          <Button type='primary' shape='round' className={styles.focusButton}>
            关注
          </Button>
        </div>
        <div className={styles.userItemContainer}>
          <Button type='text'>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className={styles.userDes}>
            <div className={styles.userName}>
                Haruluya
            </div>
            <div className={styles.userInfo}>
                Autor
            </div>
          </div>

          </Button >
          <Button type='primary' shape='round' className={styles.focusButton}>
            关注
          </Button>
        </div>
      </div>
    </div>
  )
}
