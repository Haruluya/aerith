import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';


import styles from './index.less'

const { Option } = Select;



const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value:any) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
        <div className={styles.registerPart}>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
            >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>

            
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input
                addonBefore={prefixSelector}
                style={{
                    width: '100%',
                }}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
            </Form>
        </div>
  );
};

export default Register;