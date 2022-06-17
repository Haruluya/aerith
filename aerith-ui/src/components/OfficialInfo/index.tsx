import { Tag,Image,Button,Divider } from 'antd'
import React from 'react'
import { history } from 'umi'
import styles from './index.less'
export default function OfficialInfo() {
    const titleImgSrc = "https://img2.baidu.com/it/u=2895287139,3562509517&fm=253&fmt=auto&app=138&f=JPEG?w=843&h=500"

    


  return (
    <div className={styles.officialInfoPart} onClick={()=>{history.push('articledetail?aid=28')}}>
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
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
            <div className={styles.inforItemContainer}>
                <Tag color="#42c6ff">活动</Tag>
                <span >
                    【Aerith】Aerith项目正式发布...
                </span>

            </div>
        </div>
    </div>
  )
}
