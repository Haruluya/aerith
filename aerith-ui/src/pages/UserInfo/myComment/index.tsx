
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

const MyComment:FC<LoginProps> = ({global,dispatch})=>{
    useEffect(() => {
        async function effectFun() {
            if (dispatch){
              await dispatch({
                  type: 'global/getCommentData',
                  payload:{
                    uid:global.userData.id
                  } 
              })
          }
    
        }
        effectFun()
      },[])
    
    
    // 单个评论
    const commentPanel = (index) => (
        <div className={styles.comment} onClick={()=>{history.push('/articledetail?aid='+global.myCommentData[index].aid);}}>
            <div className={styles.time}>
                <ClockCircleTwoTone />
                <span className={styles.text}>{global.myCommentData[index].create_time}</span>
            </div>
            <div className={styles.title}>
                {global.myCommentData[index].content}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    回复帖子：{global.myCommentData[index].aid}
                </div>
            </div>
            <Divider/>
        </div>
    )

  return (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的评论
        </div>
        <Divider/>
        {Array.from(global.myCommentData).map((value:any,index)=>{
              return(
                <div className={styles.card}>
                  {commentPanel(index)}
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
  )(MyComment);
