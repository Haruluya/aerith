
import { Button, Divider, Layout,Tag} from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React from 'react'
import TopicHeader from '@/components/TopicHeader';
import styles from './index.less'


import AritclPre from '@/components/ArticlePre';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import TopMessage from '@/components/TopMessage';


export default function Gossip() {
  return (
    <div className={styles.gossipPart}>
      <Layout>
        <Header>
          <TopicHeader></TopicHeader>
        </Header>
        <Layout> 
          <div className={styles.gossipContent}>
            <Content>
              <TopMessage></TopMessage>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
            </Content>
          </div>
          <Sider width={300}>
            <OfficialInfo></OfficialInfo>
            <RecTopic></RecTopic>
          </Sider> 
        </Layout>
      </Layout>
    </div>
  )
}
