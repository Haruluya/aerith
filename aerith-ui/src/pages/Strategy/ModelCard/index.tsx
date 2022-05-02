import { Avatar } from 'antd'
import React from 'react'
import styles from './index.less'
export default function ModelCard() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.avatar}>
        <Avatar shape="square" size={60} src="https://ts1.cn.mm.bing.net/th?id=OIP-C.xvlPNtuO_VGmGlclvH9InAHaE5&w=176&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.38&pid=3.1&rm=2">
            
        </Avatar>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
              Aerith指南
          </div>
          <div className={styles.des}>
              关于aerith的相关攻略。
          </div>
        </div>
    </div>
  )
}
