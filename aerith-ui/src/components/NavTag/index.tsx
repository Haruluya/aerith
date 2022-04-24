import { Button,Tag} from 'antd'
import React from 'react'
import styles from './index.less'

export default function NavTag() {
  return (
    <div className={styles.navCardPart}>
        <Button>
            <Tag color="gold">X</Tag>
            <span>地图工具</span>
        </Button>
    </div>
  )
}
