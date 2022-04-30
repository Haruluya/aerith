import React from 'react'
import styles from './index.less'
import { ClockCircleTwoTone } from '@ant-design/icons'
import { Avatar, Divider,Tabs, Button} from 'antd'
import { Link } from 'umi'
const { TabPane } = Tabs;
import { Form, Input, InputNumber} from 'antd';

const MyInfo= ()=>{

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
      
    const onFinish = (values: any) => {
        console.log(values);
    };


  return (
    <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>
            我的信息
        </div>
        <Divider/>
        <div className={styles.avatar}>
            <Avatar size={120}>
            </Avatar>
            <div className={styles.modifyButton}>
                <Button type='primary' shape='round'>
                    修改头像
                </Button>
            </div>
        </div>
        <div className={styles.form}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} label="昵称" rules={[{ required: true }]}>
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
                <Button type="primary" htmlType="submit">
                提交
                </Button>
            </Form.Item>
        </Form>
        </div>
    </div>
  )
}


export default MyInfo;
