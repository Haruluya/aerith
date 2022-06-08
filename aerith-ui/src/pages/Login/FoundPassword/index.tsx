import React, { useRef, useState,FC } from 'react';
import { Button, message, Space,Input,Form,Select } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ModalForm, ProFormText,ProFormCaptcha } from '@ant-design/pro-form';
import { LoginStateType,LoginProps } from '@/interfaces/login';
import {connect,Loading} from 'umi';
const { Option } = Select;
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayOutlined,
  WeiboOutlined,
  TaobaoOutlined,
} from '@ant-design/icons';
import styles from './index.less'
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 120 }}>
        <Option value="86">中国大陆 +86</Option>
        <Option value="852">中国香港 +852</Option>
        <Option value="853">中国澳门 +853</Option>
        <Option value="886">中国台湾 +886</Option>
      </Select>
    </Form.Item>
  );
const ZhenzismsClient = require('../zhenzisms');
let code = ''
var client = new ZhenzismsClient("sms_developer.zhenzikj.com", '111704', 'ODcyM2M2NTItYjZkOS00MjQ1LWFkYmItZjFlZWU0ZmQ0NmU4');
const Register:FC<LoginProps> =  ({login, dispatch}) => {
  const formRef = useRef<ProFormInstance>();
  return (
    <Space>
      <ModalForm
        title="Aerith"
        formRef={formRef}
        trigger={<a type="primary">找回密码</a>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="extra-reset"
                onClick={() => {
                  props.reset();
                }}
              >
                重置
              </Button>,
            ];
          },
        }}
        onFinish={async (values) => {
          console.log(values)
          
          if (code != values.code){
            message.error('验证码错误！');
            return;
          }
          
          const {mobile,password,passwordConfirm} = values;
          if (dispatch){
            await dispatch({
              type: 'login/foundpassword',
              payload: {
                mobile,
                'newpassword':password
              }
            });
            message.success('提交成功');
          }else{
            message.success('提交失败');
          }
          return true;
        }}
      >

        <ProFormText className={styles.phone} width="md" name="mobile" label="手机号" placeholder="请输入手机号"
          rules={[{ required: true, message: '电话号码不为空！' },
          {
            pattern: /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/,
            message: '请输入正确的手机号'
          }
          ]}

          >
            <Input addonBefore={prefixSelector} style={{ width: '100px' }} />
          </ProFormText>
          <div className={styles.codeInput}>
          <ProFormCaptcha
            style={{width: '200px'}}
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={'请输入验证码'}
            phoneName="mobile"
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`;
              }
              return '获取验证码';
            }}
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async (mobile) => {    
              let params = {
                templateId:"",
                number:"",
                templateParams:[]
              };
              params.templateId = '9472';
              params.number = mobile;
              code = Math.random().toFixed(6).slice(-6);
              console.log(code);
              params.templateParams = [code, "5分钟"];
              let res = client.send(params); 
              message.success('获取验证码成功！');
            }}
          />
          </div>
        <ProFormText.Password width="md" name="password" label="新密码" placeholder="请输入密码" 
          rules={
            [
              {
                required: true,
                message: '密码不为空!',
              }
            ]
          } />
        <ProFormText.Password width="md" name="passwordConfirm" label="确认新密码" placeholder="请输入确认密码"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: '请输入新密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码不一致!'));
              },
            }),
          ]}
        />
      </ModalForm>
    </Space>
  );
};

export default connect(
  ({ login,loading }: { login: LoginStateType; loading: Loading }) => ({
    login,
    loading: loading.models.global,
  }),
)(Register);