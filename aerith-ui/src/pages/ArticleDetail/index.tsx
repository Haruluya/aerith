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
import ArticleComment from './ArticleComment';
import {connect,Loading} from 'umi';
import { LoginProps } from '@/interfaces/login';
const { Sider, Content } = Layout;
import { GlobalStateType } from '@/interfaces/global';
import type { CSSProperties,FC } from 'react';
import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { userData } from '@/services/user';

import ArticleContent from './ArticleContent';

const ArticleDetaile:FC<LoginProps>= ({location,global,dispatch,history})=>{


  useEffect(() => {
    async function effectFun() {
        if (dispatch){
          await dispatch({
              type: 'global/getArticleDataById',
              payload:{
                id:location.query.aid,
              } 
          })
          await dispatch({
            type: 'global/getArticleCommentDataById',
            payload:{
              id:location.query.aid,
            } 
          })

      }
    }
    effectFun().then(()=>{
      // setArticle(global.artDataDetail);
      
    });
  
  },[])


return (
    <>
    {global.artCommentData.comments &&
      (
        <ArticleContent {...{location,global,dispatch,over:false,history}} />
      )
    }
    
    </>

  )
       
}


export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(ArticleDetaile);
