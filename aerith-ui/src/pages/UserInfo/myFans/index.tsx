import React from 'react'
import styles from './index.less'
import { MessageTwoTone,StarTwoTone,LikeTwoTone,SmileTwoTone } from '@ant-design/icons'


import { Avatar, Divider,Tabs, Button,Tag,notification} from 'antd'
const { TabPane } = Tabs;
import { Form, Input, InputNumber,message } from 'antd';
const { TextArea } = Input;

// markdown语法配置。
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Layout } from 'antd';
import {useEffect,useState} from 'react';
// 组件导入。
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import {connect,Loading} from 'umi';
import { LoginProps } from '@/interfaces/login';
const { Sider, Content } = Layout;
import { GlobalStateType } from '@/interfaces/global';
import type { CSSProperties,FC } from 'react';
import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { userData } from '@/services/user';
import { Link } from 'umi';

const MyFans:FC<LoginProps>= ({location,global,dispatch,history})=>{
    const [reflash, setReflash] = useState(false)




    useEffect(() => {

        async function effectFun() {
            if (dispatch){
 
              await dispatch({
                type:"global/getUserData"
              })
              await dispatch({
                  type: 'global/getFanData',
                  payload:{
                    uid:global.userData.id,
                  } 
              })
              
              console.log(global,"myFans");
          }
      
        }
        effectFun().then(()=>{
        })
      },[reflash])
    // 单个用户关注。
    const focusPanel = (index)=>(
        <>
        <div className={styles.focus}>
            <div className={styles.avatar}>
                <Link to="/">
                    <Avatar size={80} src={global.myFan[index][0].avatar}>
                    </Avatar>
                </Link>
            </div>
            <div className={styles.text}>
                <Button type='link'>
                    {global.myFan[index][0].username}
                </Button>

                <div className={styles.signature}>
                    个性签名：{global.myFan[index][0].signature}
                </div>
            </div>
        </div>
        <Divider/>
        </>
        
    )



  return (
    <div className={styles.mainContainer}>

        <Tabs defaultActiveKey="1" onChange={()=>{}} size="large">
            <TabPane tab="我的粉丝" key="1" style={{fontSize:"20px"}}>
            {Array.from(global.myFan).map((value:any,index)=>{
              return(
                <div className={styles.card}>
                  {focusPanel(index)}
                </div>
              )
          })
          }
            </TabPane>
        </Tabs>

    </div>
  )
  }

export default connect(
    ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
      loading: loading.models.global,
      global,
    }),
  )(MyFans);
  
