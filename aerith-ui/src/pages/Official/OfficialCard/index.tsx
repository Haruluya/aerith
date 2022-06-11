import { Tag} from 'antd'
import React from 'react'
import styles from './index.less'
import { history } from 'umi';
import { Link } from 'umi';

export default function OfficialCard() {
  return (
    <div className={styles.mainContainer} onClick={()=>{history.push('/articledetail?aid=44')}}>
        <div className={styles.tags}>
            <Tag color={'red'}>
                官方
            </Tag>
        </div>
        <div className={styles.content}>
            <div className={styles.title}>
                <Link to="/articledetail?aid=4">爱丽丝的重逢花语，米德加的命运洪流</Link>
            </div>
            <div className={styles.des}>
            对于《最终幻想7 重制版》的创作者们(创意总监野村哲也、联合监督滨口直树等)而言，他们想要做的并不是用现代化的视效技术重现一下原版游戏，而是走的更远
            </div>
        </div>
        <div className={styles.cover}>
            <img src='https://t14.baidu.com/it/u=2761214992,162359972&fm=30&app=106&size=f242,150&n=0&f=JPEG&fmt=auto?s=E8C29346224A2B57CE24A59C03000083&sec=1651597200&t=e84f0a64f2e3de007f1c2cff0f167fd5'>
            </img>
        </div>
    </div>
  )
}
