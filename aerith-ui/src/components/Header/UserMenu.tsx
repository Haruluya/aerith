import React,{useRef, useState} from 'react'
import {Avatar,Button,Tooltip,Row,Col,Drawer,Input,Tag, Divider} from 'antd'
import styles from './index.less'
import {Link} from 'umi'
import {UserOutlined,PlusOutlined}  from '@ant-design/icons';
import {useEffect,FC} from 'react'
import { GlobalStateType ,HeaderProps} from '@/interfaces/global';
import { connect,Loading,history} from 'umi';
const UserMenu:FC<HeaderProps> = ({global,dispatch}) => {
  console.log(global);
  // 用户信息。
  const name =  global.userData.username || '未登录';
  const avatar = global.userData.avatar || 'https://avatars.githubusercontent.com/u/91101915?v=4';
  const signature = global.userData.signature || '这个人还没有个性签名嗷...';
  const usertags = global.userData.tags || [];
  const level = global.userData.level;
  const nickName = global.userData.nickname;
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
    tags:usertags,
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
                <Avatar src={avatar} className={styles.avatar} size={50} />
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
                        <Avatar size={60} src={avatar}>
                        </Avatar>
                        <div className={styles.userName}>
                          {name}
                        </div>
                    </div>
                    <Divider/>
                    <div className={styles.selfInfoPanel}>
                      <Button type='text' block onClick={showDrawer}>我的信息</Button>
                      <Button type='text' block><Link to={'/userinfo'}>个人中心</Link></Button>
                      <Button type='text' block onClick={logout}>退出登录</Button>
                    </div>
                  </div>
                )
              }
          </div>
        </Col> 
        <Col span={14}>
          <div className={styles.userName}><Button type='link' href="/login">{name}</Button></div>
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
                src={avatar} 
                >

                </Avatar>
              </div>
              <div className={styles.signature}>
                <span>{signature}</span>
                <Button>修改</Button>
              </div>
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
