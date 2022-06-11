import { Card, Avatar, Image } from 'antd';
import { EditOutlined, StarTwoTone,EyeTwoTone, SettingOutlined,DownloadOutlined ,TwitterOutlined } from '@ant-design/icons';
import styles from './index.less'
import { Link } from 'umi';
import type { CSSProperties,FC } from 'react';
const { Meta } = Card;
import { LoginProps } from '@/interfaces/login';
import {connect,Loading} from 'umi';
import { GlobalStateType } from '@/interfaces/global';
import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Select,Input,Tag, InputNumber, Button, Divider, message } from 'antd';
import { useState ,useEffect} from 'react';


const AritclPre:FC<LoginProps> =  (props) => {
    
    let [flash,setFlash] = useState(false);

    
    useEffect(() => {
        flash && setTimeout(() => setFlash(false))
    }, [flash])

    const deleteArticle = ()=>{
        Modal.confirm({
            title: '发布',
            icon: <ExclamationCircleOutlined />,
            content: '你确认删除吗？',
            okText: '确认',
            cancelText: '取消',
            onOk:async ()=>{
              if (props.dispatch){
                  await props.dispatch({
                      type: 'global/deleteArticle',
                      payload:{
                          id:props.data.articles[props.index].id
                      } 
 
                 })
                 await props.dispatch({
                    type: 'global/getHomeData',
                    payload:{
                      articleNum:5
                    } 
                })

              }
                message.success("删除成功！");

            }
          });

    }
    return (
        <>
        <div className={styles.articPrePart}>
        <div className={styles.articPreContainer}>
            <div className={styles.avatarContainer}>
                <Avatar size="large" src={props.data.users[props.index][0].avatar} /> 
                <span className={styles.username}>{props.data.users[props.index][0].username}  </span>
                <span className={styles.time}>{props.data.articles[props.index].create_time}</span>
                {props.data.articles[props.index].uid != props.global.userData.id &&
                    <Button type="primary" shape="round" size='small' className={styles.focusButton}>
                    关注
                    </Button>
                }
                {props.data.articles[props.index].uid == props.global.userData.id &&
                    <Button type="danger" shape="round" size='small' className={styles.focusButton} onClick={deleteArticle}>
                    删除
                    </Button>
                }
            </div>
            <div className={styles.titleContainer}>
                {props.data.users[props.index][0].role == "admin" &&
                <Tag color="#f50">官方</Tag>
                }
                {props.data.users[props.index][0].role == "tourist" &&
                <Tag color="#1890ff">个人</Tag>
                }
                <Link to={'/articledetail?aid=' + props.data.articles[props.index].id}>
                <span>{props.data.articles[props.index].title}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <span>{props.data.articles[props.index].description}</span>
            </div>
            <div className={styles.imageContainer}>
                <Image  width={240} src={props.data.articles[props.index].cover}>
                </Image>
                {/* <Image  width={240} src="https://upload-bbs.mihoyo.com/upload/2022/04/21/75379477/2a10140ac16e4a8508bee3b0e0e5d153_9204705589460030863.jpg">
                </Image> */}
            </div>
            <div className={styles.tagContainer}>
                <div className={styles.classTags} >
                    {props.data.users[props.index][0].role == "admin" &&
                    <Tag color="magenta">官方</Tag>
                    }
                    {props.data.users[props.index][0].role == "tourist" &&
                    <Tag color="#1890ff">个人</Tag>
                    }
                    <Tag color="magenta">热门</Tag>
                </div>
                <div className={styles.viewTags} >
                    <div className={styles.tag} >
                        <EyeTwoTone style={{fontSize:'20px'}} />0
                    </div>
                    <div className={styles.tag} >
                        <StarTwoTone style={{fontSize:'20px'}} />0
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default connect(
    ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
      loading: loading.models.global,
      global,
    }),
  )(AritclPre);