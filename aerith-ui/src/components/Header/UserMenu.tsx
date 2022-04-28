import React,{useState} from 'react'
import {Avatar,Button,Tooltip,Row,Col,Drawer,Input,Tag} from 'antd'
import styles from './index.less'
import {Link} from 'umi'
import {UserOutlined,PlusOutlined}  from '@ant-design/icons';
import {useEffect,FC} from 'react'
import { GlobalStateType ,HeaderProps} from '@/interfaces/global';
import { connect,Loading,history} from 'umi';
const UserMenu:FC<HeaderProps> = ({global,dispatch}) => {
  console.log(global);
  const name =  global.userData.username || '未登录';
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
    tags: ['你的标签', '管理员', '管理员2'],
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
    console.log(tags);
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
  console.log(state);

  return (
    <div className={styles.userMenuContainer}>

      <Row align='middle'gutter={30}>
        <Col span={6}>
          <div className={styles.userAvatar}>
              <span className={styles.avatarContainer} onClick={showDrawer} >
                <Avatar icon={<UserOutlined />} className={styles.avatar} size="large" />
              </span>
          </div>
        </Col> 
        <Col span={10}>
          <div className={styles.userName}><Button type='link' href="/login">{name}</Button></div>
        </Col>
        <Col span={8}>
          {global.userData.username &&
            <div className={styles.logout}>
              <Button danger onClick={logout}>退出登录</Button>
            </div>  
          }
        </Col>
      </Row>

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
              src="https://avatars.githubusercontent.com/u/91101915?v=4" 
              >

              </Avatar>
            </div>
            <div className={styles.signature}>
              <span>这个人还没有个性签名嗷...</span>
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
    </div>

  )
}

export default connect(
  ({ global,loading }: { global: GlobalStateType; loading: Loading }) => ({
    global,
    loading: loading.models.global,
  }),
)(UserMenu);
