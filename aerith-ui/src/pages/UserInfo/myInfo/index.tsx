import React from 'react'
import styles from './index.less'
import { ClockCircleTwoTone } from '@ant-design/icons'
import { Avatar, Divider,Tabs, Button} from 'antd'
import { Link } from 'umi'
import { GlobalStateType } from '@/interfaces/global'
const { TabPane } = Tabs;
import { Form, Input, InputNumber} from 'antd';
import {connect,Loading} from 'umi';
import { useEffect } from 'react'
import { Modal, Space ,message} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const MyInfo= (props)=>{

    useEffect(() => {

        async function effectFun() {
            if (props.dispatch){
 
              await props.dispatch({
                type:"global/getUserData"
              })
              
          }
      
        }
        effectFun().then(()=>{
        })
      },[])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
      
    const onFinish = async (values: any) => {
        console.log(values);

              if (props.dispatch){
                console.log(values,"qqqqq");
                await props.dispatch({
                    type:"global/updateInfo",
                    payload:{
                      id:props.global.userData.id,
                      email:values.user.email,
                      nickname:values.user.headurl,
                      avatar:values.user.name,
                      signature:values.user.introduction,
                      mobile:props.global.userData.mobile,
                      username:props.global.userData.username
                    }
                  })


              }
              await props.dispatch({
                type:"global/getUserData"
              })
                message.success("提交成功！");
    };


  return(
    <>
     {props.global.userData.id &&
    (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的信息
        </div>
        <Divider/>
        <div className={styles.avatar}>
            <Avatar size={120} src={props.global.userData.avatar}>
            </Avatar>
            <div className={styles.modifyButton}>
                {/* <Button type='primary' shape='round'>
                    修改头像
                </Button> */}
            </div>
        </div>
        <div className={styles.form}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'headurl']} label="昵称" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'name']} label="头像" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="个性签名">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit"
                    onClick={()=>{

                        }
                    }
                >
                提交
                </Button>
            </Form.Item>
        </Form>
        </div>
    </div>
    )}
    
    </>
)
  
}


export default connect(
  ({ global,loading }: {  global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global
  }),
)(MyInfo);
