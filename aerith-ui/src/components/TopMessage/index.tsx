import React from 'react'
import styles from './index.less'
import { Button, Divider,Tag} from 'antd'
import { history } from 'umi'
export default function TopMessage() {
  return (
    <div className={styles.topMeassagePart}>
        <div className={styles.topTitleList}>
            <div className={styles.topTitleItem} onClick={()=>{history.push('articledetail?adi=28')}}>
                <Tag color="gold">置顶</Tag>
                <Button type='text'>
                【公告】Aerith项目正式发布！
                </Button>
            </div>
            <Divider/>
            <div className={styles.topTitleItem} onClick={()=>{history.push('articledetail?adi=28')}}>
                <Tag color="gold">置顶</Tag>
                <Button type='text'>
                【公告】Aerith项目正式发布！
                </Button>
            </div>
            <Divider/>
        </div>
    </div>
    
  )
}
