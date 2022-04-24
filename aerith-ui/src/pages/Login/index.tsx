import { Form, Input, Button, Checkbox,Tabs} from 'antd';
import { UserOutlined, LockOutlined,AppleOutlined ,AndroidOutlined} from '@ant-design/icons';
import styles from './index.less'
import { connect,Loading} from 'umi';


import { LoginStateType } from '@/interfaces/login';
import React, { useEffect, FC} from 'react';
import { LoginProps,LoginForm } from '@/interfaces/login';


const { TabPane } = Tabs;



const Login:FC<LoginProps> = ({login,dispatch}) => {

    useEffect(()=>{

    })


  //登录表单。
  const onFinish = (values:LoginForm) => {
    console.log('Received values of form: ', values);
    if (dispatch){
        dispatch({
                type: 'login/login',
                payload: {phone: values.mobile,password: values.password}
            })
    }
  };

  return (
    <div className={styles.loginPart}>
        <div className={styles.loginContainer}>
            <Tabs defaultActiveKey="2">
                <TabPane
                tab={
                    <span>
                    <AppleOutlined />
                    账户密码登录
                    </span>
                }
                key="1"
                >
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                    validateTrigger={['onBlur', 'onChange']}
                    >
                    <Form.Item
                        name="mobile"
                        rules={[
                        {
                            required: true,
                            message: '手机号非空！',
                        },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '手机号格式错误！',
                            validateTrigger: 'onBlur'
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="PhoneNumber" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: '密码非空！',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                        { len: 6, message: '格式错误', validateTrigger: 'onBlur' },
                        { required: true, message: '请输入验证码' }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" maxLength={6} />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item name="agree" valuePropName="checked">
                            <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                            </Checkbox>
                    </Form.Item>

                    

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                    </Form>
                </TabPane>
                <TabPane
                tab={
                    <span>
                    <AndroidOutlined />
                    微信登录
                    </span>
                }
                key="2"
                >
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    size="large"
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                    </Form>
                </TabPane>
            </Tabs>

        </div>
    </div>
  );
};



export default connect(
    ({ login,loading }: { login: LoginStateType; loading: Loading }) => ({
      login,
      loading: loading.models.login,
    }),
  )(Login);