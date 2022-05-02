import React from 'react'
import styles from './index.less'
import { Button, Divider,Tag} from 'antd'

export default function TopMessage() {
  return (
    <div className={styles.topMeassagePart}>
        <div className={styles.topTitleList}>
            <div className={styles.topTitleItem}>
                <Tag color="gold">置顶</Tag>
                <Button type='text'>
                【公告】Swiper React Component。
                </Button>
            </div>
            <Divider/>
            <div className={styles.topTitleItem}>
                <Tag color="gold">置顶</Tag>
                <Button type='text'>
                【公告】Swiper React Component。
                </Button>
            </div>
            <Divider/>
        </div>
    </div>
    
  )
}
