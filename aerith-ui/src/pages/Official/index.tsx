
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
import OfficialCard from './OfficialCard';
import { useEffect } from 'react';
import {connect,Loading} from 'umi';
import { GlobalStateType } from '@/interfaces/global';

const Official = (props)=> {

  useEffect(() => {

    async function effectFun() {
        if (props.dispatch){
          await props.dispatch({
            type:"global/getUserData"
          })
        }

    }
    effectFun().then(()=>{
      
    });
  },[])


  // 菜单切换回调。
  const [menuKey,setMenuKey] = useState("hot");

  const changeTap = ({key})=>{
    setMenuKey(key);
  }

  return (
    <>
    <div className={styles.officialHeader}>
      <div className={styles.officialHeaderPart}>
          <div className={styles.menu}>
              <Menu mode="horizontal" defaultSelectedKeys={['hot']} onClick={changeTap}>
                  <Menu.Item key="activity" >
                      活动
                  </Menu.Item>
                  <Menu.Item key="notice" >
                      公告
                  </Menu.Item>
                  <Menu.Item key="solicitation"  >
                      征集
                  </Menu.Item>
              </Menu>
          </div>
      </div>
    </div>
    <div className={styles.officialPart}>
      <Layout>
      <div className={styles.officialContent}>
        <Content>
        <div className={styles.articles}>
          {Array.from([1,2]).map((value,index)=>{
              return(
                <div className={styles.card}>
                  <OfficialCard/>
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
)(Official);