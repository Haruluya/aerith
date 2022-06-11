
import { Button, Divider, Layout,Tag,Menu, Row, Col} from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import React,{ useState } from 'react'
import styles from './index.less'
import {EditFilled} from '@ant-design/icons'
import AritclPre from '@/components/ArticlePre';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import TopMessage from '@/components/TopMessage';
import {history} from 'umi'
import ModelCard from './ModelCard';
import {useEffect} from 'react';
import { LoginProps } from '@/interfaces/login';
import { GlobalStateType } from '@/interfaces/global';
import {connect,Loading} from 'umi';
import type { CSSProperties,FC } from 'react';



const Strategy:FC<LoginProps> = ({global,dispatch}) => {
  // 菜单切换回调。
  const [menuKey,setMenuKey] = useState("hot");


  useEffect(() => {
    async function effectFun() {
        if (dispatch){
          await dispatch({
              type: 'global/getGrossiData',
              payload:{
                tid:3
              } 
          })
      }
  
    }
    effectFun()
  },[])
  

  const changeTap = ({key})=>{
    setMenuKey(key);
  }

  const linkData = [
    {title:"Aerith",link:"https://github.com/Haruluya/aerith",img:"https://ts1.cn.mm.bing.net/th?id=OIP-C.xvlPNtuO_VGmGlclvH9InAHaE5&w=176&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.38&pid=3.1&rm=2"},
    {title:"Tifa",link:"https://github.com/Haruluya/tifa",img:"https://ts1.cn.mm.bing.net/th?id=OIP-C.J1b0ebbbukD1i8J_rZ784AHaHa&w=169&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.12&pid=3.1&rm=2"},
    {title:"Cloud",link:"https://github.com/Haruluya/cloud",img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.c7JM_jATydn62u9dwtzd2gHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7"},
    {title:"Jessie",link:"https://github.com/Haruluya/Jessie",img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.4N1KvBiyj7TQD6hXjeAUjQHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.12&pid=1.7"},
    {title:"Yuffie",link:"https://github.com/Haruluya/yuffie",img:"https://tse1-mm.cn.bing.net/th/id/OIP-C.kI6tYMszYSqu03OBOaFpwgHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7"}
  ]

  return (
    <>
    <div className={styles.strategyHeader}>
      <div className={styles.strategyHeaderPart}>
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
                  <Menu.Item key="class"  >
                      网站导航
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
    <div className={styles.strategyPart}>
      <Layout>
      <div className={styles.strategyContent}>
        <Content>
          {menuKey=="hot" &&
            (
              <TopMessage></TopMessage>
            )
          }
          {(menuKey!="class") &&
            (
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
            )
          }
          {menuKey=="class" &&
            (
                <div className={styles.modelCards}>
                    <div className={styles.title}>
                        GITHUB
                    </div>
                    <Divider/>
                    <Row gutter={40}>
                    {Array.from(linkData).map((value,index)=>{
                        return (
                            <Col span={12}>
                                <div className={styles.modelCard}>
                                    <ModelCard {...{linkData:value}}></ModelCard>
                                </div>
                            </Col>
                        )
                    })
                    }
                    </Row>
                </div>
            )
          }
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
)(Strategy);