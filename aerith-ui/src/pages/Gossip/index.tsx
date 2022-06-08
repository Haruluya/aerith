
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
import {useEffect} from 'react';
import { LoginProps } from '@/interfaces/login';
import { GlobalStateType } from '@/interfaces/global';
import {connect,Loading} from 'umi';
import type { CSSProperties,FC } from 'react';

const Gossip:FC<LoginProps> =  ({global,dispatch}) => {
  // 菜单切换回调。
  const [menuKey,setMenuKey] = useState("hot");

  const changeTap = ({key})=>{
    setMenuKey(key);
  }
  useEffect(() => {
    async function effectFun() {
        if (dispatch){
          await dispatch({
              type: 'global/getGrossiData',
              payload:{
                tid:1
              } 
          })
      }

    }
    effectFun()
  },[])
  return (
    <>
    <div className={styles.gossipHeader}>
      <div className={styles.gossipHeaderPart}>
          <div className={styles.menu}>
              <Menu mode="horizontal" defaultSelectedKeys={['hot']} onClick={changeTap}>
                  <Menu.Item key="hot" >
                      热门
                  </Menu.Item>
                  <Menu.Item key="newReply" >
                      最新回复
                  </Menu.Item>
                  <Menu.Item key="newPost"  >
                      最新发帖
                  </Menu.Item>
              </Menu>
          </div>
          <div className={styles.postButton}>
              <Button type='primary' icon={<EditFilled />} 
                  style={{borderRadius:"5px",backgroundColor:"#42c6ff"}}
                  onClick={()=>{history.push('/addarticle')}}>
                  发布我的贴子
              </Button>
          </div>
      </div>
    </div>
    <div className={styles.gossipPart}>
      <Layout>
      <div className={styles.gossipContent}>
        <Content>
          {menuKey=="hot" &&
            (
              <TopMessage></TopMessage>
            )
          }
        <div className={styles.articles}>
        {Array.from(global.grossiData.articles).map((value:any,index)=>{
              return(
                <div className={styles.card}>
                  <AritclPre {...{data:global.grossiData,index:index}}></AritclPre>
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
export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(Gossip);