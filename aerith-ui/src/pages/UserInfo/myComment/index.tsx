import React from 'react'
import styles from './index.less'
import { ClockCircleTwoTone } from '@ant-design/icons'
import { Divider } from 'antd'

const MyComment = ()=>{
    // 单个评论
    const commentPanel = (
        <div className={styles.comment}>
            <div className={styles.time}>
                <ClockCircleTwoTone />
                <span className={styles.text}>2022/4/30</span>
            </div>
            <div className={styles.title}>
                这是标题
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    回复帖子：这是标题
                </div>
            </div>
            <Divider/>
        </div>
    )

  return (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的评论
        </div>
        <Divider/>
        {commentPanel}
    </div>
  )
}


export default MyComment;
