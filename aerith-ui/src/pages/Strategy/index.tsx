import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React from 'react'
import styles from './index.less'



import NavTagPanel from './NavTagPanel';




export default function Strategy() {
  return(
    <div className={styles.strategyPart}>
        <Layout>
                <Header>
                    <div className={styles.strategyHeader}>
                        <div className={styles.strategySwiper}>

                        </div>
                        <div className={styles.strategyAnnou}>

                        </div>
                    </div>
                </Header>
            <Layout>
                <div className={styles.strategyContent}>
                    <Content>
                        <NavTagPanel></NavTagPanel>
                    </Content>
                </div>
                <Sider width={300}>

                </Sider>
            </Layout>
        </Layout>
    </div>
  )
}
