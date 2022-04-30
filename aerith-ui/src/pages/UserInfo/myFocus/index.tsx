import React from 'react'
import styles from './index.less'
import { ClockCircleTwoTone } from '@ant-design/icons'
import { Avatar, Divider,Tabs, Button} from 'antd'
import { Link } from 'umi'
const { TabPane } = Tabs;
const MyFocus = ()=>{
    // 单个用户关注。
    const focusPanel = (
        <>
        <div className={styles.focus}>
            <div className={styles.avatar}>
                <Link to="/">
                    <Avatar size={80}>
                    </Avatar>
                </Link>
            </div>
            <div className={styles.text}>
                <Button type='link'>
                    管理员01
                </Button>

                <div className={styles.signature}>
                    具有管理员权限的某某。
                </div>
            </div>
            <div className={styles.focusButton}>
                <Button type='primary' shape='round'>
                    已关注
                </Button>
            </div>
        </div>
        <Divider/>
        </>
        
    )



  return (
    <div className={styles.mainContainer}>

        <Tabs defaultActiveKey="1" onChange={()=>{}} size="large">
            <TabPane tab="关注用户" key="1" style={{fontSize:"20px"}}>
            {focusPanel}
            </TabPane>
            <TabPane tab="关注帖子" key="2">
            {focusPanel}
            </TabPane>
        </Tabs>

    </div>
  )
}


export default MyFocus;
