import { Divider } from 'antd'
import React from 'react'
import styles from './index.less'
import { ClockCircleTwoTone,EyeTwoTone,MessageTwoTone,LikeTwoTone} from '@ant-design/icons'

const MyPost = ()=>{
    // 单个帖子。
    const postPanel = (
        <div className={styles.post}>
            <div className={styles.time}>
                <ClockCircleTwoTone />
                <span className={styles.text}>2022/4/30</span>
            </div>
            <div className={styles.title}>
                这是标题
            </div>
            <div className={styles.content}>
                这是内容这是内容这是内容这是内容这是内容这是内容
            </div>
            <div className={styles.index}>
                <div className={styles.value}>
                    <EyeTwoTone />
                    <span className={styles.text}>1</span>
                </div>
                <div className={styles.value}>
                    <MessageTwoTone />
                    <span className={styles.text}>2</span>
                </div>
                <div className={styles.value}>
                    <LikeTwoTone /> 
                    <span className={styles.text}>3</span>
                </div>
            </div>
            <Divider/>
        </div>
    )


  return (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的发帖
        </div>
        <Divider/>
        {postPanel}

    </div>
  )
}

export default MyPost;
