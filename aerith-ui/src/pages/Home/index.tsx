import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './index.less';

import SwiperHeader from './swiperheader';

import AritclPre from '@/components/ArticlePre';

const Home = () => {


  return (
    <div className={styles.homePart}>
      <Layout>
      <div className={styles.homeCenter}>
        <Layout >
          <div className={styles.homeHeader}>
            <Header className={styles.antHeader}>
              <SwiperHeader></SwiperHeader>
            </Header>
          </div>
          <div className={styles.homeContent}>
            <Content>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
              <AritclPre></AritclPre>
            </Content>
          </div>
        </Layout>
      </div>
      <div className={styles.homeSider}>
        <Sider  width={300}>
        </Sider>
      </div>
      </Layout>
    </div>
   
  );
};

export default Home;