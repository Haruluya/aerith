import React from 'react'
import styles from './index.less'
import { SnippetsTwoTone ,EditTwoTone,RightOutlined,CameraTwoTone,ContactsTwoTone,ContainerTwoTone} from '@ant-design/icons'
import { Button, Space ,Divider} from 'antd'

export default function createArticle() {
  return (
    <div className={styles.createArticlePart}>
      <div className={styles.title}>
        <SnippetsTwoTone style={{fontSize:'28px'}}/>
        <span>
          论坛发帖中心
        </span>
        <span className={styles.level}>
          LV99
        </span>
      </div>
      <Divider/>
      <Space size={0} split={<span></span>} className={styles.tags}>
        <Button type='link'>
          <div className={styles.tag}>
            <EditTwoTone style={{fontSize:'30px'}}/>
            <div>
              发帖
            </div>
          </div>
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <CameraTwoTone style={{fontSize:'30px'}}/>

            <div>
              发图片
            </div>
          </div >
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <ContactsTwoTone style={{fontSize:'30px'}}/>
            <div>
              发视频
            </div>
          </div>
        </Button>
        <Button type='link'>
          <div className={styles.tag}>
            <ContainerTwoTone style={{fontSize:'30px'}}/>
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

          <div className={styles.indexContent}>
            0
          </div>
        </div>
        <Divider type='vertical'></Divider>
        <div className={styles.indexContainer}>
          <div className={styles.indexTitle}>
            点赞数
          </div>
          <div className={styles.indexContent}>
            0
          </div>
        </div>
      </div>
      <Divider/>
      <div className={styles.write}>
        <Button type="primary" ghost block>发布帖子<RightOutlined /></Button>
      </div>
    </div>
  )
}
