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
          <Button type='text' href="https://github.com/Haruluya/aerith">
            <Image src="https://upload-bbs.mihoyo.com/upload/2022/01/18/24accf141527d8a5aa2f558cbb398b2c_5746690652134180997.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg" width={48}>
            </Image>
            AERITH
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' href='https://github.com/Haruluya'>
            <Image src="https://upload-bbs.mihoyo.com/upload/2022/05/30/34c1c64178e0ea19567e4c6561ac3576_5400072198094958899.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg" width={48}>
            </Image>
            HARULUYA
          </Button>
        </div>
        <div className={styles.topicItemContainer}>
          <Button type='text' href='https://github.com/Haruluya/tifa'>
            <Image src="https://upload-bbs.mihoyo.com/upload/2019/12/09/bc832825c502c9883e851bd09887b0c8.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg" width={48}>
            </Image>
            TIFA
          </Button>
        </div>
        <div className={styles.topicItemContainer} >
          <Button type='text' href="https://github.com/Haruluya/Jessie">
            <Image src="https://upload-bbs.mihoyo.com/upload/2022/03/31/e5b5fda477a29fd034c4ddb08552a536_809698594464949128.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg" width={48}>
            </Image>
            JESSIE
          </Button>
        </div>
        <div className={styles.topicItemContainer} >
          <Button type='text' href="https://github.com/Haruluya/cloud">
            <Image src={userImg} width={48}>
            </Image>
            CLOUD
          </Button>
        </div>
      </div>
    </div>
  )
}


