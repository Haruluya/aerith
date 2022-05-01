import { Tag,Image,Button,Divider } from 'antd'
import React from 'react'
import styles from './index.less'
export default function OfficialInfo() {
    const titleImgSrc = "https://upload-bbs.mihoyo.com/upload/2022/05/01/80823548/bf2a4294f0a0a6b6fec10cf343bf54e6_4232577424402899849.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"

  return (
    <div className={styles.officialInfoPart}>
        <div className={styles.titleContainer}>
            <span>官方资讯</span>
            <Button type="link" className={styles.more} >More</Button>
        </div>
        <Divider />
        <div className={styles.imageInfoContainer}>
            <Image width={260} height={150} src={titleImgSrc}></Image>
        </div>
        <div className={styles.infoListContainer}>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="lime">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
        </div>
    </div>
  )
}
