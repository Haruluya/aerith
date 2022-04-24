import { Button,Tag} from 'antd'
import React from 'react'
import styles from './index.less'

export default function NavCard() {
  return (
    <div className={styles.navCardPart}>
        <Button>
            <Tag color="glod">X</Tag>
            <span>地图工具</span>
        </Button>
    </div>
  )
}
