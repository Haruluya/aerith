
import { Button, Divider, Layout,Tag,Menu} from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React,{ useState } from 'react'
import styles from './index.less'
import {EditFilled} from '@ant-design/icons'
import AritclPre from '@/components/ArticlePre';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import TopMessage from '@/components/TopMessage';
import {history} from 'umi'
import FeedBackCard from './FeedBackCard';


export default function FeedBack() {
  // 菜单切换回调。
  const [menuKey,setMenuKey] = useState("hot");

  const changeTap = ({key})=>{
    setMenuKey(key);
  }

  return (
    <>
    <div className={styles.feedbackPart}>
      <Layout>
      <div className={styles.feedbackContent}>
        <Content>
        <div className={styles.articles}>
          {Array.from([1,2,3,4,5]).map((value,index)=>{
              return(
                <div className={styles.card}>
                    <FeedBackCard/>
                </div>
              )
          })

          }
          </div>
        </Content>
      </div>
      <Sider width={300} className={styles.sider}>
        <OfficialInfo></OfficialInfo>
        <RecTopic></RecTopic>
      </Sider> 
    </Layout>
    </div>
    </>
  )
}
