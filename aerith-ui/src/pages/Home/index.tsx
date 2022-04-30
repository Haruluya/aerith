import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './index.less';

import SwiperHeader from './swiperheader';

import AritclPre from '@/components/ArticlePre';
import CreateArticle from './createArticle';
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import RecUser from '@/components/RecUser';

const Home = (props:any) => {

  return (
    <div className={styles.homePart}>
      <Layout>
      <div className={styles.homeCenter}>
        <Layout >
          
        <Header className={styles.antHeader}>
          <div className={styles.homeHeader}>
            <SwiperHeader></SwiperHeader>
          </div>
        </Header>

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
        <Sider  width={300} style={{backgroundColor:'#f0f2f5'}}>
          <CreateArticle></CreateArticle>
          <ImgSwiper></ImgSwiper>
          <OfficialInfo></OfficialInfo>
          <RecTopic></RecTopic>
          <RecUser></RecUser>
        </Sider>
      </div>
      </Layout>
    </div>
   
  );
};

export default Home;