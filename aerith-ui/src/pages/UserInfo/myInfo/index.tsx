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
                message.success("???????????????");
    };


  return(
    <>
     {props.global.userData.id &&
    (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            ????????????
        </div>
        <Divider/>
        <div className={styles.avatar}>
            <Avatar size={120} src={props.global.userData.avatar}>
            </Avatar>
            <div className={styles.modifyButton}>
                {/* <Button type='primary' shape='round'>
                    ????????????
                </Button> */}
            </div>
        </div>
        <div className={styles.form}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'headurl']} label="??????" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'name']} label="??????" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="??????" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="??????" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="????????????">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit"
                    onClick={()=>{

                        }
                    }
                >
                ??????
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
