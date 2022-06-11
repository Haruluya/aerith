
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, {FC} from 'react'
import styles from './index.less'
import * as Icon from '@ant-design/icons';
import { GlobalStateType,UserInfoProps} from '@/interfaces/global';
import { history,connect,Loading} from 'umi';
import { Divider ,Button,Modal, Avatar, Tag} from 'antd';
const { confirm } = Modal;

const UserInfo:FC<UserInfoProps> = ({global,dispatch,children})=>{
  // 用户信息。
  const name =  global.userData.username;
  const avatar = global.userData.avatar;
  const signature = global.userData.signature;
  const usertags = global.userData.tags;
  const level = global.userData.level;
  const nickName = global.userData.nickname;
  
  
  // 左侧菜单。
  const infoMenu:Array<string> = [
    "我的发帖","我的评论","我的信息","|","我的粉丝","我的关注","我的等级","|","关于Haruluya","关于Aerith"
  ]
  const iconMenu:Array<string> = [
    "FileDoneOutlined","MessageOutlined","UserOutlined","",
    "UsergroupAddOutlined","UserSwitchOutlined","DingtalkOutlined","",
    "GithubOutlined","RedditOutlined"
  ]
  const pathMenu:Array<string> = [
    "mypost","mycomment","myinfo","","myfans","myfocus","mylevel","","aboutharuluya","aboutaerith"
  ]

  const iconCreate = (name:string)=>
    React.createElement((Icon as any)[name],{
      style:{fontSize: "16px"}
    })

  const logout = async ()=>{
    if (dispatch){
      await dispatch({
        type:"login/logout"
      })
      await dispatch({
        type:"global/getUserData"
      })
      history.push('/');
    }
  }

  const logoutConfirm = ()=>{
    // 确认提示。
    confirm({
      title: '退出登录',
      icon: iconCreate('ExclamationCircleOutlined'),
      content: '你确定要退出吗',
      onOk() {
        logout();
      },
      onCancel() {
      },
    });
  }

  return (
    <div className={styles.mainContainer}>
      <Layout className={styles.outLayout}>
            <Header >
              <div className={styles.header}>
                <div className={styles.avatar}>
                <Avatar size={120} src={avatar}>
                  
                  </Avatar>
                </div>
                <Divider type='vertical' style={{height:"50px", width:"30px"}}/>
                <div className={styles.siderInfo}>
                  <div className={styles.name}>
                    <span className={styles.nickName}>{global.userData.username}</span>
                    <Tag className={styles.level } color='red'>
                      LV{global.userData.level}
                    </Tag>
                    <Button size='large' className={styles.modify} type="primary"
                        onClick={()=>{history.push('/userinfo/myinfo')}}>
                      编辑
                    </Button>
                    <div className={styles.id}>
                      AerithID:{global.userData.id}
                    </div>
                  </div>
                  <div className={styles.signature}>
                      {iconCreate('EditTwoTone')}
                      {global.userData.signature}
                  </div>
                  <Divider/>
                  <div className={styles.indexPanel}>
                    <Button type='text' className={styles.button}>0 关注</Button>
                    <Button type='text' className={styles.button}>0 粉丝</Button>
                    <Button type='text' className={styles.button}>0 获赞</Button>
                  </div>
                </div>
              </div>
            </Header>

          <Layout className={styles.inLayout}>

            <Sider width={300}  className={styles.sider}>
              <div className={styles.siderMenu}>
                <div className={styles.infoMenuTitle}>
                  个人中心
                </div>
                <Divider/>
               {infoMenu.map((value,index)=>{
                 return (
                  <>
                    <div key={index} className={styles.infoMenuItem}>
                        {value != "|" &&
                            (
                              <Button type="text" icon={iconCreate(iconMenu[index])} 
                                  onClick={()=>{history.push(`/userinfo/${pathMenu[index]}`)}} 
                                  className={styles.infoMenuButton}>
                                <span >{value}</span>
                              </Button>
                            )
                        }
                    </div>
                    {value == "|" &&
                    (
                      <Divider/>
                    )
                    }
                  </>
                 )
               })
               }
               <div className={`${styles.logout} ${styles.infoMenuItem}`}>
                <Button type="text" icon={iconCreate("LogoutOutlined")} 
                      onClick={logoutConfirm}
                      className={styles.infoMenuButton}>
                    <span >退出登录</span>
                </Button>
               </div>
             
            </div>
          </Sider>
                        
            <Content className={styles.content}>
              <div > 
               {children}
              </div>
            </Content>
          </Layout>
      </Layout>
     </div>
  )
}

export default connect(
  ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
    global,
    loading: loading.models.global,
  }),
)(UserInfo);
