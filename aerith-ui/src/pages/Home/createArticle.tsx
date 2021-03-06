import React, { useState } from 'react'
import styles from './index.less'
import { SnippetsTwoTone ,EditTwoTone,RightOutlined,CameraTwoTone,ContactsTwoTone,ContainerTwoTone} from '@ant-design/icons'
import { Button, Space ,Divider} from 'antd'
import { history } from 'umi'
import { connect,Loading} from 'umi';
import { GlobalStateType ,HeaderProps} from '@/interfaces/global';
import {useEffect,FC} from 'react'
const CreateArticle:FC<HeaderProps> = ({global,dispatch,setReflash})=>{


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
  setReflash(true);

  return (
    <div className={styles.createArticlePart}>
      <div className={styles.title}>
        <SnippetsTwoTone style={{fontSize:'28px'}}/>
        <span>
          论坛发帖中心
        </span>
        {global.userData.islogin &&
          (
            <span className={styles.level}>
            LV0
          </span>
          )
        }
        {!global.userData.islogin &&
          (
            <span className={styles.level}>
            LV ?
          </span>
          )
        }
      </div>
      <Divider/>
      <Space size={0} split={<span></span>} className={styles.tags}>
        <Button type='link'>
          <div className={styles.tag}>
            <EditTwoTone style={{fontSize:'30px'}} onClick={()=>{history.push('addarticle')}}/>
            <div>
              发帖
            </div>
          </div>
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <CameraTwoTone style={{fontSize:'30px'}} onClick={()=>{history.push('addarticle')}}/>

            <div>
              发图片
            </div>
          </div >
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <ContactsTwoTone style={{fontSize:'30px'}} onClick={()=>{history.push('addarticle')}}/>
            <div>
              发视频
            </div>
          </div>
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <ContainerTwoTone style={{fontSize:'30px'}} onClick={()=>{history.push('addarticle')}}/>
            <div>
              发文件
            </div>
          </div>
        </Button>

      </Space>

      <div className={styles.index}>
        <div className={styles.indexContainer}>
          <div className={styles.indexTitle}>
            发帖数
          </div>

        {global.userData.islogin &&
        (
          <div className={styles.indexContent}>
          {global.myPostData.length}
        </div>
        )
        }
                {!global.userData.islogin &&
        (
          <div className={styles.indexContent}>
          ?
        </div>
        )
        }
        </div>
        <Divider type='vertical'></Divider>
        <div className={styles.indexContainer}>
          <div className={styles.indexTitle}>
            点赞数
          </div>
        {global.userData.islogin &&
        (
          <div className={styles.indexContent}>
          0
        </div>
        )
        }
                {!global.userData.islogin &&
        (
          <div className={styles.indexContent}>
          ?
        </div>
        )
        }
        </div>
      </div>
      <Divider/>
      <div className={styles.write}>
        <Button type="primary" ghost block
          onClick={()=>{
            history.push('/addarticle')
          }}>
          发布帖子
          <RightOutlined />
        </Button>
      </div>
    </div>
  )
}
export default connect(
  ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
    global,
    loading: loading.models.global,
  }),
)(CreateArticle);
