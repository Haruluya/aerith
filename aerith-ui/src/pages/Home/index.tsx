import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import {useEffect,useState} from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './index.less';

import SwiperHeader from './swiperheader';
import {connect,Loading} from 'umi';
import AritclPre from '@/components/ArticlePre';
import CreateArticle from './createArticle';
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import RecUser from '@/components/RecUser';
import { GlobalStateType } from '@/interfaces/global';
import { LoginProps } from '@/interfaces/login';
import type { CSSProperties,FC } from 'react';


const Home:FC<LoginProps> = ({global,dispatch}) => {
  let [reflash,setReflash] = useState(false)
  useEffect(() => {
    async function effectFun() {
        if (dispatch){
          await dispatch({
              type: 'global/getHomeData',
              payload:{
                articleNum:5
              } 
          })


      }

    }
    effectFun()
  },[])


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
            {Array.from(global.homeArtData.articles).map((value:any,index)=>{
              return(
                <div className={styles.card}>
                  <AritclPre {...{data:global.homeArtData,index:index}}></AritclPre>
                </div>
              )
          })
          }

            </Content>
          </div>
        </Layout>
      </div>
      <div className={styles.homeSider}>
        <Sider  width={300} style={{backgroundColor:'#f0f2f5'}}>
          <CreateArticle {...{global,dispatch,setReflash}}></CreateArticle>
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

export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(Home);