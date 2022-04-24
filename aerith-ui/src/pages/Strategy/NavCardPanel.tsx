import { Col, Row } from 'antd'
import React from 'react'
import styles from './index.less'

import NavCard from '@/components/NavCard'

export default function () {
  return (
    <div>
        <div className={styles.title}>
            
        </div>
        <div className={styles.panel}>
            <Row gutter={20}>
                <Col span={6}>
                    <NavCard></NavCard>      
                </Col>
                <Col span={6}>
                    <NavCard></NavCard>     
                </Col>
                <Col span={6}>
                    <NavCard></NavCard>     
                </Col>
                <Col span={6}>
                    <NavCard></NavCard>     
                </Col>
            </Row>
        </div>
    </div>
  )
}
