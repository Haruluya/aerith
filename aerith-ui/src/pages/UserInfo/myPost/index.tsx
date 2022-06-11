
import 'swiper/swiper-bundle.css';
import styles from './index.less';
import { ClockCircleTwoTone,EyeTwoTone,MessageTwoTone,LikeTwoTone} from '@ant-design/icons';
import { useEffect } from 'react';
import {connect,Loading} from 'umi';
import AritclPre from '@/components/ArticlePre';
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import RecUser from '@/components/RecUser';
import { history } from 'umi';
import { GlobalStateType } from '@/interfaces/global';
import { LoginProps } from '@/interfaces/login';
import type { CSSProperties,FC } from 'react';
import { Divider } from 'antd';
const MyPost:FC<LoginProps> = ({global,dispatch})=>{
    useEffect(() => {
        async function effectFun() {
            if (dispatch){
              await dispatch({
                  type: 'global/getPostData',
                  payload:{
                    uid:global.userData.id
                  } 
              })
          }
    
        }
        effectFun()
      },[])
    



    // 单个帖子。
    const postPanel = (index) => (
        <div className={styles.post} onClick={()=>{history.push('/articledetail?aid='+global.myPostData[index].id);}}>
            <div className={styles.time}>
                <ClockCircleTwoTone />
                <span className={styles.text}>{global.myPostData[index].create_time}</span>
            </div>
            <div className={styles.title}>
                {global.myPostData[index].title}
            </div>
            <div className={styles.content}>
                {global.myPostData[index].content && 
                global.myPostData[index].content.length > 20 ? global.myPostData[index].content.slice(0,20) :global.myPostData[index].content
                }
            </div>
            <div className={styles.index}>
                <div className={styles.value}>
                    <EyeTwoTone />
                    <span className={styles.text}>0</span>
                </div>
                <div className={styles.value}>
                    <MessageTwoTone />
                    <span className={styles.text}>0</span>
                </div>
                <div className={styles.value}>
                    <LikeTwoTone /> 
                    <span className={styles.text}>0</span>
                </div>
            </div>
            <Divider/>
        </div>
    )


  return (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的发帖
        </div>
        <Divider/>
        {Array.from(global.myPostData).map((value:any,index)=>{
              return(
                <div className={styles.card}>
                  {postPanel(index)}
                </div>
              )
          })
          }

    </div>
  )
}

export default connect(
    ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
      loading: loading.models.global,
      global,
    }),
  )(MyPost);
