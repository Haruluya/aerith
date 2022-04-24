import React from 'react'
import { Tag,Image,Button,Divider } from 'antd'
import styles from './index.less'
// import userImg from '@/assets/images/logo.png'

export default function RecTopic() {
  const userImg:string = 'https://upload-bbs.mihoyo.com/upload/2021/07/13/f2b3b66e974c175c2e0a6cef602f2e8c_5966158557546691737.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg'

  return (
    <div className={styles.recTopicPart}>
      <div className={styles.titleContainer}>
        <span>推荐话题</span>
        <Button type="link" className={styles.more} >More</Button>
      </div>
      <Divider />
      <div className={styles.topicListContainer}>
        <div className={styles.topicItemContainer}>
          <Button type='text' >
            <Image src={userImg} width={48}>
            </Image>
            Haruluya
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' >
            <Image src={userImg} width={48}>
            </Image>
            Haruluya
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' >
            <Image src={userImg} width={48}>
            </Image>
            Haruluya
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' >
            <Image src={userImg} width={48}>
            </Image>
            Haruluya
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' >
            <Image src={userImg} width={48}>
            </Image>
            Haruluya
          </Button>
        </div>
      </div>
    </div>
  )
}


