
import { Layout } from 'antd';
const { Content, Header,Sider} = Layout;
import React from 'react'
import styles from './index.less'

const UserInfo  = ()=>{
  return (
    <div className={styles.mainContainer}>
      <Layout >
        <div className={styles.outLayout}> 

            <Header >
              <div className={styles.header}>
              </div>
            </Header>

          <Layout >
          <div className={styles.inLayout}>
            <Sider >
            <div className={styles.sider}>

            </div>
            </Sider>
            <Content>
              <div className={styles.content}> 
              </div>
            </Content>
          </div>
          </Layout>

        </div>
      </Layout>
    </div>
  )
}

export default UserInfo;