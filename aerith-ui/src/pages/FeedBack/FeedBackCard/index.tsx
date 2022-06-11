import { Avatar,Tag } from 'antd'
import React from 'react'
import styles from './index.less'
import { SyncOutlined,CheckCircleOutlined  } from '@ant-design/icons'
export default function FeedBackCard(props) {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.title}>
            {props.data.title}
        </div>
        <div className={styles.userInfo}>
            <Avatar src="https://img-static.mihoyo.com/communityweb/upload/d4e6f1f011dab9a4231d2de0639341db.png">

            </Avatar>
            <div className={styles.userName}>
                haruluyx
            </div>
            <div className={styles.time}>
                05-01
            </div>
            
        </div>
        <div className={styles.status}>
            {props.index %2 == 0 &&(
                <Tag color="processing" icon={<SyncOutlined spin />}  
                style={{fontSize:'18px',padding:"10px"}}>正在处理</Tag>
            )
            }
            {props.index %2 != 0 &&(
                <Tag icon={<CheckCircleOutlined />} color="success"
                style={{fontSize:'18px',padding:"10px 30px 10px 10px",}}>
                已处理
              </Tag>
            )
            }
        </div>    
    </div>
  )
}
