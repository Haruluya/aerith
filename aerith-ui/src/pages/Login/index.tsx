import { LoginFormPage, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayOutlined,
  WeiboOutlined,
  TaobaoOutlined,
} from '@ant-design/icons';
import { message, Divider, Tabs, Space, Button } from 'antd';
import type { CSSProperties,FC } from 'react';
import { useState } from 'react';
import { LoginStateType,LoginProps } from '@/interfaces/login';
import {connect,Loading,history} from 'umi';
import Register from '@/components/Register'
import { GlobalStateType } from '@/interfaces/global';
import styles from './index.less'
import { urlencoded } from '@umijs/deps/compiled/express';
type LoginType = 'phone' | 'account';

const logo = require('@/assets/images/logo.png')
const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const Login:FC<LoginProps> =  ({login,global,dispatch}) => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  return (
    <div style={{ backgroundColor: '#fcfff7', height: 'calc(100vh - 48px)', margin: -24}} 
      className = {styles.loginContainer}>
      <LoginFormPage
        className={styles.loginFormPage}
      // 表单提交。
        onFinish={async (values)=>{
            console.log(values)
            if (dispatch){
                await dispatch({
                    type: 'login/login',
                    payload:values 
                })
                await dispatch({
                  type: 'global/getUserData',
                })
                console.log(global.userData);
                if(global.userData.islogin){
                  history.push('/home');
                }
            }
        }}
        backgroundImageUrl="https://w.wallhaven.cc/full/k7/wallhaven-k7gd8q.png"
        logo={logo}
        title="Aerith"
        subTitle="Aerith's game forum."
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: '#fff',
            borderRadius: 8,
            backgroundImage: "url(https://w.wallhaven.cc/full/6o/wallhaven-6o6lgq.png)",
            backgroundSize: "contianer"
          },
          title: 'Aerith game froum',
          subTitle: '新用户注册',
          action: (
            <Register></Register>
          ),
        }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                其他登录方式
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名:'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: '}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};



export default connect(
    ({ login,global,loading }: { login: LoginStateType;global:GlobalStateType, loading: Loading }) => ({
      login,
      global,
      loading: loading.models.global,
    }),
  )(Login);
