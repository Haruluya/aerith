import React from 'react'
import styles from './index.less'
import { MessageTwoTone,StarTwoTone,LikeTwoTone,SmileTwoTone } from '@ant-design/icons'


import { Avatar, Divider,Tabs, Button,Tag,notification} from 'antd'
const { TabPane } = Tabs;
import { Form, Input, InputNumber,message } from 'antd';
const { TextArea } = Input;

// markdown语法配置。
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Layout } from 'antd';
import {useEffect,useState} from 'react';
// 组件导入。
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import ArticleComment from '.././ArticleComment';
import {connect,Loading} from 'umi';
import { LoginProps } from '@/interfaces/login';
const { Sider, Content } = Layout;
import { GlobalStateType } from '@/interfaces/global';
import type { CSSProperties,FC } from 'react';
import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { userData } from '@/services/user';
const ArticleContent:FC<LoginProps>= ({location,global,dispatch,over,history})=>{
    const artContent = ''
    let template = ["官方","闲聊","攻略","反馈"]
    const [article, setArticle] = useState(false)
    const [comment, setComment] = useState(null)
    const [reflash, setReflash] = useState(false)
    let focused = false;


  useEffect(() => {
    reflash && setTimeout(() => setReflash(false))
    async function effectFun() {
        if (dispatch){
            await dispatch({
                type: 'global/getFocusData',
                payload:{
                  uid:global.userData.id,
                } 
              })
        }

    }
    effectFun().then(()=>{
      
    });
  
  },[reflash])
    over = true;
    const commitComment = ()=>{
        if (!global.userData.id){
          history.push('/login');
          notification['error']({
            message: '请登录！',
            description:
              '请登陆后再评论！',
          });
          return;
        }
      
        Modal.confirm({
          title: '提交评论',
          icon: <ExclamationCircleOutlined />,
          content: '你确认提交吗？',
          okText: '确认',
          cancelText: '取消',
          onOk:async ()=>{
            if (dispatch){
                await dispatch({
                    type: 'global/addComment',
                    payload:{
                       uid:global.userData.id,
                       aid:location.query.aid,
                       content:comment
                    } 
                })
                await dispatch({
                  type: 'global/getArticleCommentDataById',
                  payload:{
                    id:location.query.aid,
                  } 
                })
                setReflash(true);
              }

              message.success("提交成功！");
          }
        });
      }

      if (global.myFocus){
        for (let i = 0 ; i < global.myFocus.length; i++){
            if (global.myFocus[i][0].id == global.artDataDetail.article[0].uid){
                focused = true;
                console.log('1');
            }
            console.log(global.myFocus[i],global.artDataDetail.article[0].uid,"X????");
        }
      }
      console.log(focused);
    const addFocus = async()=>{
      if (dispatch){
        await dispatch({
            type: 'global/addFocus',
            payload:{
              uid:global.userData.id,
              fuid:global.artDataDetail.article[0].uid,
              focus_time: (new Date()).valueOf()
            } 
        })
        
        message.success('关注成功！');
        setReflash(!reflash);
      }
    }
    
    const handleComment = (e:any)=>{
      setComment(e.target.value);
    }
    
    
    const deleteFocus = async()=>{
      if (dispatch){
        await dispatch({
            type: 'global/deleteFocus',
            payload:{
              uid:global.userData.id,
              fuid:global.artDataDetail.article[0].uid,
            } 
        })
        message.success('取消关注成功！');
        setReflash(!reflash);
      }
    }


  return (
    <>
        {global.myFocus &&
        (
            (
                <div className={styles.mainContainer}>
                <Layout className={styles.layout}>
                <Content className={styles.content}>
                    <div className={styles.artIndex}>
                    <div>
                    <MessageTwoTone style={{fontSize:'40px'}}/>
                        <div className={styles.count}>{global.artCommentData.comments.length}</div>
                    </div>
                    <Divider/>
                    <div className={styles.artIndexItem}>
                    <StarTwoTone style={{fontSize:'40px'}}/>
                        <div className={styles.count}>0</div>
                    </div>
                    <Divider/>
                    <div>
                        <LikeTwoTone style={{fontSize:'40px'}}/>
                        <div  className={styles.count}>0</div>
                    </div>
                    <Divider/>
                    </div>
        
                    <div className={styles.article}>
                    <div className={styles.title}>
                    {global.artDataDetail.article[0].title}
                    </div>
                    <Divider/>
                    <div className={styles.description}>
                        <span>帖子描述：</span><br/>
                        <p> {global.artDataDetail.article[0].description}</p>
                    </div>
                    <div className={styles.template}>
                        隶属板块：{template[global.artDataDetail.article[0].tid]}
                    </div>
                    <div className={styles.tags}>
                    {global.artDataDetail.user[0].role == "admin" &&
                    <Tag color="#f50">官方</Tag>
                    }
                    {global.artDataDetail.user[0].role == "tourist" &&
                    <Tag color="#1890ff">个人</Tag>
                    }
                    </div>
                    <div className={styles.cover}>
                        <img src={global.artDataDetail.article[0].cover}></img>
                    </div>
                    <div className={styles.time}>
                        帖子发布时间：{global.artDataDetail.article[0].create_time} | 更新时间：{global.artDataDetail.article[0].update_time}
                    </div>
    
                    <div className={styles.artContent}>
                        <ReactMarkdown
                            children={global.artDataDetail.article[0].content}
                            remarkPlugins={[remarkGfm]}
                            skipHtml={false}
                            components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={vs}
                                    language={match[1]}
                                    PreTag="div"
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    {...props}
                                />
                                ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                                )
                            }
                            }}
                        />
                    </div>
                    <Divider/>
                    </div>
                    <div className={styles.postComment}>
                    <div className={styles.title}>
                        评论发言：
                    </div>
                    <div className={styles.textArea}>
                        <TextArea rows={5} placeholder="inpute comment:" maxLength={400} showCount onChange={e => handleComment(e)}/>
                    </div>
                    <div className={styles.oprations}>
                        <div className={styles.smile}>
                            <SmileTwoTone style={{fontSize:'24px'}}/>
                        </div>
                        <div className={styles.commit}>
                            <Button type='primary' shape='round' size='large' onClick={()=>commitComment()}>评论</Button>
                        </div>
                    </div>
                    </div>
                    <div className={styles.comments}>
                    <Tabs defaultActiveKey="1" onChange={(key)=>{}} size="large">
                    <TabPane tab="全部评论" key="1">
                        <ArticleComment {...{tdata:global.artCommentData,tuid:global.artDataDetail.user[0].id,location}}></ArticleComment>
                    </TabPane>
                    <TabPane tab="只看贴主" key="2">
                    <ArticleComment {...{tdata:global.artCommentData,tuid:global.artDataDetail.user[0].id,onlyPoster:true}}></ArticleComment>
                    </TabPane>
                    </Tabs>
                    </div>
                </Content>
                <Sider className={styles.sider} width={300}>
                    <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                    <Avatar size={90} src={global.artDataDetail.user[0].avatar}>
                    </Avatar>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.username}>{global.artDataDetail.user[0].username}</div>
                        <div><Tag color="green">LV{global.artDataDetail.user[0].level}</Tag></div>
                        <div className={styles.signature}>{global.artDataDetail.user[0].signature}</div>
                        {(global.userData.id == global.artDataDetail.user[0].id) &&
                        (<Button type='primary'  onClick={()=>{history.push('userinfo/myinfo')}}>我的信息</Button>)
                        }
                        {!focused && !(global.userData.id == global.artDataDetail.user[0].id) &&
                            (<Button type='primary' onClick={addFocus}>关注</Button>)
                        }
                        {focused && !(global.userData.id == global.artDataDetail.user[0].id) &&
                        (<Button type='primary' className={styles.focusedButton} onClick={deleteFocus}>已关注</Button>)
                        }
                        
                    </div>
                    </div>
                    <ImgSwiper></ImgSwiper>
                    <OfficialInfo></OfficialInfo>
                    <RecTopic></RecTopic>
                </Sider>
                </Layout>
                
            </div>
            )
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
)(ArticleContent);