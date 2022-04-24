
import { Button, Divider, Layout,Tag} from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React from 'react'
import TopicHeader from '@/components/TopicHeader';
import styles from './index.less'
import AritclPre from '@/components/ArticlePre';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';

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
              <div className={styles.topTitleList}>
                <div className={styles.topTitleItem}>
                  <Tag color="red">置顶</Tag>
                  <Button type='text'>
                    【公告】Swiper React Component。
                  </Button>
                </div>
                <Divider/>
                <div className={styles.topTitleItem}>
                  <Tag color="red">置顶</Tag>
                  <Button type='text'>
                    【公告】Swiper React Component。
                  </Button>
                </div>
                <Divider/>
              </div>
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
