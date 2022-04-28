import React, { useRef, useState,FC } from 'react';
import { Button, message, Space } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { LoginStateType,LoginProps } from '@/interfaces/login';
import {connect,Loading} from 'umi';





const Register:FC<LoginProps> =  ({login, dispatch}) => {
  const formRef = useRef<ProFormInstance>();
 
  return (
    <Space>
      <ModalForm
        title="Aerith"
        formRef={formRef}
        trigger={<Button type="primary">注册</Button>}
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
          if (dispatch){
            await dispatch({
              type: 'login/register',
              payload: values
            });
            message.success('提交成功');
          }else{
            message.success('提交失败');
          }
          return true;
        }}
      >
        <ProFormText
          width="md"
          name="name"
          label="账号"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />

        <ProFormText width="md" name="phone" label="手机号" placeholder="请输入名称" />
        <ProFormText width="md" name="password" label="密码" placeholder="请输入名称" />
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