
import { Button, Divider, Layout,Tag,Menu, Row, Col} from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React,{ useState } from 'react'
import styles from './index.less'
import {EditFilled} from '@ant-design/icons'
import AritclPre from '@/components/ArticlePre';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import TopMessage from '@/components/TopMessage';
import {history} from 'umi'
import ModelCard from './ModelCard';


export default function Strategy() {
  // 菜单切换回调。
  const [menuKey,setMenuKey] = useState("hot");

  const changeTap = ({key})=>{
    setMenuKey(key);
  }

  return (
    <>
    <div className={styles.strategyHeader}>
      <div className={styles.strategyHeaderPart}>
          <div className={styles.menu}>
              <Menu mode="horizontal" defaultSelectedKeys={['hot']} onClick={changeTap}>
                  <Menu.Item key="hot" >
                      热门
                  </Menu.Item>
                  <Menu.Item key="newReply" >
                      最新回复
                  </Menu.Item>
                  <Menu.Item key="newPost"  >
                      最新发帖
                  </Menu.Item>
                  <Menu.Item key="class"  >
                      标签选择
                  </Menu.Item>
              </Menu>
          </div>
          <div className={styles.postButton}>
              <Button type='primary' icon={<EditFilled />} 
                  style={{borderRadius:"5px",backgroundColor:"#42c6ff"}}
                  onClick={()=>{history.push('/addarticle')}}>
                  发布我的贴子
              </Button>
          </div>
      </div>
    </div>
    <div className={styles.strategyPart}>
      <Layout>
      <div className={styles.strategyContent}>
        <Content>
          {menuKey=="hot" &&
            (
              <TopMessage></TopMessage>
            )
          }
          {(menuKey!="class") &&
            (
                <div className={styles.articles}>
                <AritclPre></AritclPre>
                <AritclPre></AritclPre>
                <AritclPre></AritclPre>
                <AritclPre></AritclPre>
                <AritclPre></AritclPre>
                </div>
            )
          }
          {menuKey=="class" &&
            (
                <div className={styles.modelCards}>
                    <div className={styles.title}>
                        Aerith
                    </div>
                    <Divider/>
                    <Row gutter={40}>
                    {Array.from([1,2,3,4,5]).map((value,index)=>{
                        return (
                            <Col span={12}>
                                <div className={styles.modelCard}>
                                    <ModelCard></ModelCard>
                                </div>
                            </Col>
                        )
                    })
                    }
                    </Row>
                </div>
            )
          }
        </Content>
      </div>
      <Sider width={300} className={styles.sider}>
        <OfficialInfo></OfficialInfo>
        <RecTopic></RecTopic>
      </Sider> 
    </Layout>
    </div>
    </>
  )
}
