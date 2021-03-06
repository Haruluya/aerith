import React,{useRef, useState} from 'react'
import {Avatar,Button,Tooltip,Row,Col,Drawer,Input,Tag, Divider,Modal} from 'antd'
import styles from './index.less'
import {Link} from 'umi'
import {UserOutlined,PlusOutlined}  from '@ant-design/icons';
import {useEffect,FC} from 'react'
import { GlobalStateType ,HeaderProps} from '@/interfaces/global';
import { connect,Loading,history} from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const UserMenu:FC<HeaderProps> = ({global,dispatch}) => {
  // 用户信息。
  const name =  global.userData.username;
  const avatar = global.userData.avatar;
  const signature = global.userData.signature;
  const nickName = global.userData.nickname;

  const usertags = global.userData.tags;


  // 退出登录。
  const logout = async ()=>{
    if (dispatch){
      await dispatch({
        type:"login/logout"
      })
      await dispatch({
        type:"global/getUserData"
      })
    }
  }
  const logoutConfirm = ()=>{
    // 确认提示。
    confirm({
      title: '退出登录',
      icon: <ExclamationCircleOutlined/>,
      content: '你确定要退出吗',
      onOk() {
        logout();
      },
      onCancel() {
      },
    });
  }
  // 修改昵称和个性签名。
  const updateSignatureAndNickName = ()=>{
    
  }
  // 显示抽屉。
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // tags
  const [state, setState] = useState({
    tags: usertags,
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
  });

  // 可增减的标签。
  const handleClose = (removedTag:any) => {
    const tags = state.tags.filter(tag => tag !== removedTag);
    setState((pervState:any)=>{
      return {...pervState,tags}
    });
  };

  const showInput = () => {

    setState((pervState:any)=>{
      return {...pervState,inputVisible:true}
    });
  };

  const handleInputChange = (e:any) => {
    setState((pervState:any)=>{
      return {...pervState,inputValue:e.target.value}
    });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    setState((pervState:any)=>{
      return {...pervState,tags,inputVisible: false,inputValue: '',}
    });
  };

  const handleEditInputChange = (e:any) => {
    setState((pervState:any)=>{
      return {...pervState,editInputValue: e.target.value}
    });
  };

  const handleEditInputConfirm = () => {
    setState((pervState:any) => {
      const { tags, editInputIndex, editInputValue } =  pervState;
      const newTags = [...tags];
      newTags[editInputIndex] = editInputValue;

      return {
        ...pervState,
        tags: newTags,
        editInputIndex: -1,
        editInputValue: '',
      };
    });
  };

  const saveInputRef = (input:any) => {
    input = input;
  };

  let editInput = null;

  const saveEditInputRef = (input:any) => {
    editInput = input;
  };

  const { tags, inputVisible, inputValue, editInputIndex, editInputValue } = state;


  // 用户中心弹出。
  const [showPop, setShowPop] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  return (
    <div className={styles.userMenuContainer}>

      <Row align='middle'gutter={30}>
        <Col span={10}>
          <div className={styles.userAvatar}
            onMouseEnter={()=>{
              setShowPop(true); 
            }} 
            onMouseLeave={()=>{
              intervalRef.current = setTimeout(function(){
                setShowPop(()=>{return false;});
              },2000);
            }}>
              <span className={styles.avatarContainer} onClick={showDrawer} >
                {global.userData.islogin &&
                (
                  <Avatar src={avatar} className={styles.avatar} size={50} />
                )
                }
                {
                  !global.userData.islogin &&
                  <Avatar icon={<UserOutlined/>} className={styles.avatar} size={50} />
                }
              </span>
              
              {showPop && name != '未登录' &&
                (
                  <div className={styles.popPanel} 
                    onMouseEnter={()=>{;
                      if(intervalRef.current){
                        clearTimeout(intervalRef.current);
                      };
                    }} 
                    onMouseLeave={()=>{      
                      intervalRef.current = setTimeout(function(){
                        setShowPop(()=>{return false}); 
                      },100);
                    }}>
                    <div className={styles.userInfo}>
                        <Avatar size={64} src={avatar==''? <UserOutlined /> : avatar}>
                        </Avatar>
                        <div className={styles.userName}>
                          {name}
                        </div>
                    </div>
                    <Divider/>
                    <div className={styles.selfInfoPanel}>
                      <Button type='text' block onClick={showDrawer}>我的信息</Button>
                      <Button type='text' block><Link to={'/userinfo'}>个人中心</Link></Button>
                      <Button type='text' block onClick={logoutConfirm}>退出登录</Button>
                    </div>
                  </div>
                )
              }
          </div>
        </Col> 
        <Col span={14}>
          <div className={styles.userName}><Link to="/login">{name}</Link></div>
        </Col>
      </Row>

      {name != '未登录' &&
        (
        <div className={styles.drawerContainer}>
          <Drawer title={name} placement="right" onClose={onClose} visible={visible} 
              bodyStyle={{
                display:'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5'
              }}>
            <div className={styles.drawerContent}>
              <div className={styles.drawerAvatar}>
                <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={global.userData.avatar} 
                >
                </Avatar>
                <Divider/>
                <div className={styles.nickname}>{global.userData.username}</div>
              </div>

              <div className={styles.signature}>
                <span>{global.userData.signature}</span>
                <Button onClick={updateSignatureAndNickName}>修改</Button>
              </div>
              <Divider/>
              <div className={styles.tags}>
                {tags.map((tag, index) => {
                  if (editInputIndex === index) {
                    return (
                      <Input
                        ref={saveEditInputRef}
                        key={tag}
                        size="small"
                        className="tag-input"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                        onBlur={handleEditInputConfirm}
                        onPressEnter={handleEditInputConfirm}
                      />
                    );
                  }

                  const isLongTag = tag.length > 10;

                  const tagElem = (
                      <Tag
                      className="edit-tag"
                      key={tag}
                      color="gold"
                      closable={index !== 0}
                      onClose={() => handleClose(tag)}
                    >
                      <span
                        onDoubleClick={e => {
                          if (index !== 0) {
                            setState((pervState:any)=>{
                              return {
                                ...pervState,
                                editInputIndex: index,
                                editInputValue: tag
                              }
                            })
                            e.preventDefault();
                          }
                        }}
                      >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                      </span>
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                    tagElem
                  );
                })}
                {inputVisible && (
                  <Input
                    ref={saveInputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag className="site-tag-plus" onClick={showInput} color='red'>
                    <PlusOutlined /> New Tag
                  </Tag>
                )}
              </div>
            </div>
          </Drawer>
        </div>
        )

      }
    </div>

  )
}

export default connect(
  ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
    global,
    loading: loading.models.global,
  }),
)(UserMenu);
