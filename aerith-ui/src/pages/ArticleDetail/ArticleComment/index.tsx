import { Comment, Tooltip, List, Row } from 'antd';
import moment from 'moment';

import { Button, message, Space,Tag,Modal } from 'antd';
import { LoginProps } from '@/interfaces/login';
import type { CSSProperties,FC } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {connect,Loading} from 'umi';
import styles from './index.less'
import { GlobalStateType } from '@/interfaces/global';
import {useEffect,useState} from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import ProForm, {
    ProFormTextArea,
  } from '@ant-design/pro-form';
const reComment = (e)=>{
}

const ArticleComment = (props:any)=>{
  const data = [
  ];
  const [reflash, setReflash] = useState(false)
  useEffect(() => {
    reflash && setTimeout(() => setReflash(false))
  },[reflash])


  const deleteComment = (e)=>{
    e.stopPropagation();
    if (!e.target.dataset.index){
      return;
    }
    Modal.confirm({
      title: '删除评论',
      icon: <ExclamationCircleOutlined />,
      content: '你确认删除吗？',
      okText: '确认',
      cancelText: '取消',
      onOk:async ()=>{
        if (props.dispatch){
            if (!e.target.dataset.indexy){
              await props.dispatch({
                type: 'global/deleteComment',
                payload:{
                  id:props.tdata.comments[e.target.dataset.index].id
                } 
            })
            }else{
              await props.dispatch({
                type: 'global/deleteComment',
                payload:{
                  id:props.tdata.comments[e.target.dataset.index].children.comments[e.target.dataset.indexy].id
                } 
            })
            }
            await  props.dispatch({
              type: 'global/getArticleCommentDataById',
              payload:{
                id: props.location.query.aid,
              } 
            })
          }
          setReflash(true);
          message.success("删除成功！");
      }
    });
  }

  for(let i = 0; i < props.tdata.comments.length; i++){
    if (props.onlyPoster){
      if (props.tdata.users[i][0].id == props.tuid){
        data.push({
          actions:[<span key="comment-list-reply-to-0" id={i+''} onClick={(e) => reComment(e)}>回复</span>],
          author:props.tdata.users[i][0].username,
          avatar:props.tdata.users[i][0].avatar,
          content:(
            <p>
              {props.tdata.comments[i].content}
              {props.tdata.users[i][0].id == props.tuid &&
                (<Tag color="volcano" className={styles.mainTag}>贴主</Tag>)
              }
             {props.tdata.users[i][0].id == props.global.userData.id&&
                (<Button type="danger" data-index={i} shape="round" className={styles.deleteButton} onClick={(e)=>deleteComment(e)}>删除</Button>)
              }
            </p>
          ),
          datetime: (
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          ),
        })
      }
    }else{
      data.push({
        actions:[<span key="comment-list-reply-to-0" id="1" onClick={reComment}>回复</span>],
        author:props.tdata.users[i][0].username,
        avatar:props.tdata.users[i][0].avatar,
        content:(
          <p>
            {props.tdata.comments[i].content}
            {props.tdata.users[i][0].id == props.tuid &&
              (<Tag color="volcano" className={styles.mainTag}>贴主</Tag>)
            }
           {props.tdata.users[i][0].id == props.global.userData.id&&
              (<Button type="danger" shape="round" data-index={i} className={styles.deleteButton} onClick={(e)=>deleteComment(e)}>删除</Button>)
            }
          </p>
        ),
        datetime: (
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        ),
      })
    }
  }
  return (
    <>
        <List
            className="comment-list"
            header={`${data.length} 回复`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item,index) => (
                <ModalForm
                title="评论回复"
                key={index}
                trigger={
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                        >
                        {Array.from(props.tdata.comments[index].children.comments).map((value:any,indexy)=>{
                          return(
                            <Comment
                            author={props.tdata.comments[index].children.users[indexy][0].username}
                            avatar={props.tdata.comments[index].children.users[indexy][0].avatar}
                            content={(
                              <p>
                                {props.tdata.comments[index].children.comments[indexy].content}
                                {props.tdata.comments[index].children.users[indexy][0].id == props.tuid &&
                                  (<Tag color="volcano" className={styles.mainTag}>贴主</Tag>)
                                }
                               {props.tdata.comments[index].children.users[indexy][0].id == props.global.userData.id&&
                                  (<Button type="danger" shape="round" data-index={index} data-indexy={indexy}  className={styles.deleteButton} onClick={(e)=>deleteComment(e)}>删除</Button>)
                                }
                              </p>
                            )}
                            datetime={
                              (
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                  <span>{moment().fromNow()}</span>
                                </Tooltip>
                              )
                            }

                            >

                            </Comment>
                          )
                        })
                      }
                        </Comment>
                   </li>
                }
                submitter={{
                  searchConfig: {
                    submitText: '确认',
                    resetText: '取消',
                  },
                }}
                onFinish={async (values) => {
                  console.log(values);
                 try {
                    if (props.dispatch){
                    await props.dispatch({
                        type: 'global/addComment',
                        payload:{
                          uid:props.global.userData.id,
                          aid:props.global.artDataDetail.article[0].id,
                          content:values.comment,
                          parent:props.tdata.comments[index].id
                        } 
                    })
                    await props.dispatch({
                      type: 'global/getArticleCommentDataById',
                      payload:{
                        id:props.location.query.aid,
                      } 
                    })
                    setReflash(true);
                  }
                 } catch (error) {
                   console.log(error);
                 }

                  message.success('回复成功');
                  return true;
                }}
              >
                <ProFormTextArea colProps={{ span: 24 }} name="comment" label="" 
                    placeholder={"输入回复内容"}  
                    fieldProps={{ showCount: true,maxLength: 400,rows:5} }/>       
              </ModalForm>

            )}
        />
  
    </>
  )
}




export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(ArticleComment);