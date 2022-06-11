
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
  const data = [
    {title:"react父组件重绘时子组件渲染不及时！"},
    {title:"umijs打包速度太慢了！！！！"},
    {title:"注意typescript规范！"},
    {title:"快写不完了！"},
    {title:"BUG太多了！"}
  ]
  return (
    <>
    <div className={styles.feedbackPart}>
      <Layout>
      <div className={styles.feedbackContent}>
        <Content>
        <div className={styles.articles}>
          {Array.from(data).map((value,index)=>{
              return(
                <div className={styles.card}>
                    <FeedBackCard {...{data:value,index}}/>
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
