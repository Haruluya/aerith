import { Avatar } from 'antd'
import React from 'react'
import styles from './index.less'
import { history } from 'umi'
import { Link } from 'umi'
export default function ModelCard(props) {
  return (
    <a href={props.linkData.link}>
        <div className={styles.mainContainer}>
      <div className={styles.avatar}>
        <Avatar shape="square" size={60} src={props.linkData.img}>
            
        </Avatar>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
              {props.linkData.title}
          </div>
          <div className={styles.des}>
              {props.linkData.link}
          </div>
        </div>
    </div>
    </a>
  )
}
