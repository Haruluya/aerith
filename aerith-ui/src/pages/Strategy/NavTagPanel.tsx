import { Col, Row } from 'antd'
import React from 'react'
import styles from './index.less'

import NavTag from '@/components/NavTag'

export default function NavTagPanel() {
  return (
    <div className={styles.navCardPanelPart}>
        <div className={styles.title}>
            @快捷攻略 》
        </div>
        <div className={styles.panel}>
            <Row gutter={20}>
                <Col span={6}>
                    <NavTag></NavTag>      
                </Col>
                <Col span={6}>
                    <NavTag></NavTag>     
                </Col>
                <Col span={6}>
                    <NavTag></NavTag>     
                </Col>
                <Col span={6}>
                    <NavTag></NavTag>     
                </Col>
            </Row>
        </div>
    </div>
  )
}
